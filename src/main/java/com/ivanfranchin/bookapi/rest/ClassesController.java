package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.ClassesMapper;
import com.ivanfranchin.bookapi.mapper.MembershipMapper;
import com.ivanfranchin.bookapi.model.*;
import com.ivanfranchin.bookapi.repository.ClassesDataRepository;
import com.ivanfranchin.bookapi.rest.dto.*;
import com.ivanfranchin.bookapi.service.ClassesService;
import com.ivanfranchin.bookapi.service.LocationService;
import com.ivanfranchin.bookapi.service.MembershipService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.WeekFields;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/classes")
public class ClassesController {

    private final ClassesService classesService;
    private final ClassesMapper classesMapper;

    private final LocationService locationService;
    private final LocationRepository locationRepository;
    private final ClassesDataRepository classesDataRepository;
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<ClassesDto> getMemberships(@RequestParam(value = "text", required = false) String text) {
        List<Classes> classes = classesService.getClasses();
        return classes.stream()
                .map(classesMapper::toClassesDto)
                .collect(Collectors.toList());
    }
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/by-text/{text}")
    public List<ClassesDto> getClassesByText(@PathVariable String text) {
        List<Classes> classes = classesService.getByText(text);
        return classes.stream()
                .map(classesMapper::toClassesDto)
                .collect(Collectors.toList());
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ClassesDto createClasses(@Valid @RequestBody ClassesDto classesDto) {
        Classes classes = classesMapper.toClasses(classesDto);
        ClassesDto cd = classesMapper.toClassesDto(classesService.saveClass(classes));
        List<Date> dates = getDatesInRangeForGivenDays(classes.getStartDate(),classes.getEndDate(),classes.getDays());
        ClassesData classesData;

        for(Date d:dates){
            classesData = new ClassesData();
            classesData.setClassId(cd.id());
            classesData.setStartDate(d);
            classesData.setLocationId(cd.locationId());
            classesDataRepository.save(classesData);
        }
        return cd;
    }
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping
    public Classes updateClasses(@Valid @RequestBody ClassesDtoUpdate classesDto) {
            Optional<Classes> classes = classesService.findById(classesDto.id());
            if(classes.isPresent()){
                Classes cm = classes.get();
                cm.setDescription(classesDto.description());
                cm.setTitle(classesDto.title());
                 return classesService.saveClass(cm);
            }
            return null;
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable String id) {
        classesService.deleteClasses(id);
        return id;
    }
        public static List<Date> getDatesInRangeForGivenDays(Date startDate, Date endDate, String days) {
            List<Date> result = new ArrayList<>();

            Calendar calendar = Calendar.getInstance();
            calendar.setTime(startDate);

            while (calendar.getTime().before(endDate)) {
                int dayOfWeek = calendar.get(Calendar.DAY_OF_WEEK);
                String dayName = getDayName(dayOfWeek);
                if (days.contains(dayName)) {
                    result.add(calendar.getTime());
                }
                calendar.add(Calendar.DATE, 1);
            }

            return result;
        }

        public static String getDayName(int dayOfWeek) {
            switch (dayOfWeek) {
                case Calendar.MONDAY:
                    return "Monday";
                case Calendar.TUESDAY:
                    return "Tuesday";
                case Calendar.WEDNESDAY:
                    return "Wednesday";
                case Calendar.THURSDAY:
                    return "Thursday";
                case Calendar.FRIDAY:
                    return "Friday";
                case Calendar.SATURDAY:
                    return "Saturday";
                case Calendar.SUNDAY:
                    return "Sunday";
                default:
                    return "";
            }
        }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/data")
    public VisitorDto getClassesData(@Valid @RequestBody ClassesDto classesDto) throws ParseException {
        List<Object[]> classes = classesDataRepository.findClassCountByLocationAndDate(classesDto.startDate(),classesDto.endDate());
        VisitorDto visitorDto = new VisitorDto();
        VisitorDataDto byDay = new VisitorDataDto();

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Map<Long, Map<String, Long>> classesByLocation = new HashMap<>();
        VisitorDatasetDto byDayDataset ;
        for (Object[] result : classes) {
            Date date = (Date) result[2];
            Long location = (Long) result[1];
            Long count = (Long) result[0];

            if (!classesByLocation.containsKey(location)) {
                classesByLocation.put(location, new HashMap<>());
            }

            Map hoursCount = classesByLocation.get(location);
            String dateStr = dateFormat.format(date);
            hoursCount.put(dateStr, count);
        }
        List<VisitorDatasetDto> dataByDayByLocation = new ArrayList<>() ;
        String[] colors = {"rgb(75, 192, 192)","rgb(66, 245, 75)","rgb(230, 232, 100)","rgb(228, 100, 232)","rgb(240, 84, 102)","rgb(128,0,0)"};
        int i = 0;
        for (Map.Entry<Long, Map<String,Long>> entry : classesByLocation.entrySet()) {
            byDayDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byDayDataset.setLabel("Number of Classes - " + location.get().getName());
            }
            Map<String, Long> hoursCount = entry.getValue();
            List<Long> dataList = new ArrayList<>();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance();
            cal.setTime(classesDto.startDate());

            while (cal.getTime().before(classesDto.endDate()) || cal.getTime().equals(classesDto.endDate())) {
                Long count = hoursCount.get(sdf.format(cal.getTime()));
                if (count == null) {
                    count = 0L;
                }
                dataList.add(count);
                cal.add(Calendar.DATE, 1);
            }

            byDayDataset.setData(dataList);
            byDayDataset.setFill(false);
            byDayDataset.setTension(0.1);
            byDayDataset.setBorderColor(colors[i++]);
            dataByDayByLocation.add(byDayDataset);
        }
        List<Object[]> classes2 = classesDataRepository.countEnrollmentsByLocationAndStartDate(classesDto.startDate(),classesDto.endDate());
        Map<Long, Map<String, Long>> enrollmentByLocation = new HashMap<>();
        VisitorDatasetDto byDayDatasetEnrollment ;
        for (Object[] result : classes2) {
            Date date = (Date) result[2];
            Long location = (Long) result[0];
            Long count = (Long) result[1];

            if (!enrollmentByLocation.containsKey(location)) {
                enrollmentByLocation.put(location, new HashMap<>());
            }

            Map hoursCount = enrollmentByLocation.get(location);
            String dateStr = dateFormat.format(date);
            hoursCount.put(dateStr, count);
        }
        for (Map.Entry<Long, Map<String,Long>> entry : enrollmentByLocation.entrySet()) {
            byDayDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byDayDataset.setLabel("Number of Enrollment - " + location.get().getName());
            }
            Map<String, Long> hoursCount = entry.getValue();
            List<Long> dataList = new ArrayList<>();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance();
            cal.setTime(classesDto.startDate());

            while (cal.getTime().before(classesDto.endDate()) || cal.getTime().equals(classesDto.endDate())) {
                Long count = hoursCount.get(sdf.format(cal.getTime()));
                if (count == null) {
                    count = 0L;
                }
                dataList.add(count);
                cal.add(Calendar.DATE, 1);
            }

            byDayDataset.setData(dataList);
            byDayDataset.setFill(false);
            byDayDataset.setTension(0.1);
            byDayDataset.setBorderColor(colors[i++]);
            dataByDayByLocation.add(byDayDataset);
        }
            //===============================================================
        LocalDate start = classesDto.startDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate end = classesDto.endDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

        List<String> labels = new ArrayList<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

        while (!start.isAfter(end)) {
            String formattedDate = start.format(formatter);
            labels.add(formattedDate);
            start = start.plusDays(1);
        }
        byDay.setDatasets(dataByDayByLocation);
        byDay.setLabels(labels);
        visitorDto.setDataByDay(byDay);

        //------------------------------------------------------------------------------------
        List<VisitorDatasetDto> dataByWeekByLocation = new ArrayList<>();
        VisitorDatasetDto byWeekDataset ;
//        String[] colors = {"rgb(75, 192, 192)","rgb(66, 245, 75)","rgb(230, 232, 100)","rgb(228, 100, 232)","rgb(240, 84, 102)"};
        int j = 0;
        int flag = 0;
        List<String> labelss =new ArrayList<>();;
        for (Map.Entry<Long, Map<String,Long>> entry : classesByLocation.entrySet()) {
            labelss = new ArrayList<>();
            byWeekDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byWeekDataset.setLabel("Number of Classes - " + location.get().getName());
            }
            Map<String, Long> hoursCount = entry.getValue();
            List<Long> weeklyCounts = new ArrayList<>();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance();
            cal.setTime(classesDto.startDate());

            while (cal.getTime().before(classesDto.endDate()) || cal.getTime().equals(classesDto.endDate())) {
                int weekOfYear = cal.get(Calendar.WEEK_OF_YEAR);
                String key = cal.get(Calendar.YEAR) + "-W" + String.format("%02d", weekOfYear);
                String endDateLabel = cal.getTime().toString();
                String weekRange = getWeekRangeString(cal);
                String actualDate = weekRange.replace(" - ", ":");
                long count = hoursCount.entrySet().stream()
                        .filter(e -> {
                            try {
                                SimpleDateFormat sdfs = new SimpleDateFormat("yyyy-MM-dd");
                                Calendar call = Calendar.getInstance();
                                call.setTime(sdfs.parse(e.getKey()));
                                String weekKey = call.get(Calendar.YEAR) + "-W" + String.format("%02d", call.get(Calendar.WEEK_OF_YEAR));
                                return weekKey.equals(key);
                            } catch (ParseException ex) {
                                return false;
                            }
                        })
                        .mapToLong(Map.Entry::getValue)
                        .sum();
                weeklyCounts.add(count);
                cal.add(Calendar.DATE, 7);
                labelss.add(actualDate);
            }


            byWeekDataset.setData(weeklyCounts);
            byWeekDataset.setFill(false);
            byWeekDataset.setTension(0.1);
            byWeekDataset.setBorderColor(colors[j++]);
            dataByWeekByLocation.add(byWeekDataset);
        }

        for (Map.Entry<Long, Map<String,Long>> entry : enrollmentByLocation.entrySet()) {
            labelss = new ArrayList<>();
            byWeekDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byWeekDataset.setLabel("Number of Enrollment - " + location.get().getName());
            }
            Map<String, Long> hoursCount = entry.getValue();
            List<Long> weeklyCounts = new ArrayList<>();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance();
            cal.setTime(classesDto.startDate());

            while (cal.getTime().before(classesDto.endDate()) || cal.getTime().equals(classesDto.endDate())) {
                int weekOfYear = cal.get(Calendar.WEEK_OF_YEAR);
                String key = cal.get(Calendar.YEAR) + "-W" + String.format("%02d", weekOfYear);
                String endDateLabel = cal.getTime().toString();
                String weekRange = getWeekRangeString(cal);
                String actualDate = weekRange.replace(" - ", ":");
                long count = hoursCount.entrySet().stream()
                        .filter(e -> {
                            try {
                                SimpleDateFormat sdfs = new SimpleDateFormat("yyyy-MM-dd");
                                Calendar call = Calendar.getInstance();
                                call.setTime(sdfs.parse(e.getKey()));
                                String weekKey = call.get(Calendar.YEAR) + "-W" + String.format("%02d", call.get(Calendar.WEEK_OF_YEAR));
                                return weekKey.equals(key);
                            } catch (ParseException ex) {
                                return false;
                            }
                        })
                        .mapToLong(Map.Entry::getValue)
                        .sum();
                weeklyCounts.add(count);
                cal.add(Calendar.DATE, 7);
                labelss.add(actualDate);
            }


            byWeekDataset.setData(weeklyCounts);
            byWeekDataset.setFill(false);
            byWeekDataset.setTension(0.1);
            byWeekDataset.setBorderColor(colors[j++]);
            dataByWeekByLocation.add(byWeekDataset);
        }


        VisitorDataDto byWeek = new VisitorDataDto();
        byWeek.setLabels(labelss);
        byWeek.setDatasets(dataByWeekByLocation);
        visitorDto.setDataByWeekday(byWeek);
        return visitorDto;
    }



    @GetMapping("/allClassesByLocation")
    public List<ClassesByLocationDto> getAllClassesByLocation(@RequestParam(value = "location", required = false) String location){
        //Call get classes Api
        List<ClassesDto> classes= getMemberships("");
        //Call get Location Api
        List<Location> locations = locationRepository.findAll();

        //initialize a new Dto
        List<ClassesByLocationDto> classByList = new ArrayList<ClassesByLocationDto>();


        //iterate through each location and attach the location id
        for(Location loc : locations){
            List<ClassesDto> classesDto = classes.stream().filter(n -> n.locationId()== loc.getId()).collect(Collectors.toList());
            for(ClassesDto classDto : classesDto){
                ClassesByLocationDto classesByLocationDto = new ClassesByLocationDto(classDto.id(), classDto.title() , classDto.description() ,
                        loc.getName());
                classByList.add(classesByLocationDto);
            }


        }
        return classByList;

    }

    private String getWeekRangeString(Calendar cal) {
        int dow = cal.get(Calendar.DAY_OF_WEEK);
        cal.add(Calendar.DATE, -(dow-1));
        Date startDate = cal.getTime();
        cal.add(Calendar.DATE, 6);
        Date endDate = cal.getTime();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy:MM:dd");
        return sdf.format(startDate) + " - " + sdf.format(endDate);
    }

}
