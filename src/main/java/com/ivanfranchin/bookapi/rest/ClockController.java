package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.ClockMapper;
import com.ivanfranchin.bookapi.mapper.MembershipMapper;
import com.ivanfranchin.bookapi.model.*;
import com.ivanfranchin.bookapi.rest.dto.*;
import com.ivanfranchin.bookapi.service.ClockService;
import com.ivanfranchin.bookapi.service.LocationService;
import com.ivanfranchin.bookapi.service.MembershipService;
import com.ivanfranchin.bookapi.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/clock")
public class ClockController {

    private final ClockService clockService;
    private final UserService userService;
    private final ClockMapper clockMapper;
    private final LocationService locationService;
    // Constructor for the controller that receives the necessary services.
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<ClockDto> getClockData(@RequestParam(value = "text", required = false) String text) {
        List<Clock> memberships = clockService.getAllData();
        return memberships.stream()
                .map(clockMapper::toClockDto)
                .map(clockDto -> {
                    Optional<User> user = userService.findById(clockDto.getUserId());
                    clockDto.setUserName(user.get().getName());
                    return clockDto;
                })
                .collect(Collectors.toList());
    }



    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ClockDto createClockInOut(@Valid @RequestBody CreateClockInOutRequest createClockInOutRequest) {

        Optional<User> user = userService.findById(createClockInOutRequest.getUserId());
        Optional<User> admin = userService.findById(createClockInOutRequest.getAdminId());
        String msg;
        Clock clockData;
        if(!user.isPresent() || !admin.isPresent()){
            ClockDto clockDto = new ClockDto();
            msg = "User Not Found";
            clockDto.setUserId(createClockInOutRequest.getUserId());
            clockDto.setMsg(msg);
            return clockDto;
        }
        Optional<Clock> clockDataa = clockService.findByUserId(createClockInOutRequest.getUserId());

        if (clockDataa.isPresent()){
            clockData = clockDataa.get();
            clockData.setClockOut((new Date()));
            clockData.setLocationId(admin.get().getLocationId());
            msg = "Successfully Clocked Out";
        }else{
            clockData = new Clock();
            clockData.setUserId(createClockInOutRequest.getUserId());
            clockData.setClockIn(new Date());
            clockData.setDate(LocalDate.now());
            clockData.setLocationId(admin.get().getLocationId());
            msg = "Successfully Clocked In";
        }

        ClockDto clockDto  = clockMapper.toClockDto(clockService.saveClockDate(clockData));
        clockDto.setMsg(msg);
        return clockDto;
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/visitors")
    // GET endpoint that retrieves total clock in data by hour for visitors.
    public VisitorDto getVisitorsData(@RequestParam(value = "text", required = false) String text) {
        List<Object[]> memberships = clockService.getTotalClockInByHour();
        VisitorDto visitorDto = new VisitorDto();
        VisitorDataDto byDay = new VisitorDataDto();


        Map<Long, List<Long>> hoursByLocation = new HashMap<>();
        VisitorDatasetDto byDayDataset ;
        for (Object[] result : memberships) {
            int hour = (int) result[1];
            Long location = (Long) result[0];
            Long count = (Long) result[2];

            if (!hoursByLocation.containsKey(location)) {
                hoursByLocation.put(location, new ArrayList<>(Collections.nCopies(24, 0L)));
            }

            List<Long> hoursCount = hoursByLocation.get(location);
            hoursCount.set(hour, count);
        }
        List<VisitorDatasetDto> dataByDayByLocation = new ArrayList<>() ;
        String[] colors = {"rgb(75, 192, 192)","rgb(66, 245, 75)","rgb(230, 232, 100)","rgb(228, 100, 232)","rgb(240, 84, 102)"};
        int i = 0;
        for (Map.Entry<Long, List<Long>> entry : hoursByLocation.entrySet()) {
            byDayDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byDayDataset.setLabel("Number of visitors by the hour - " + location.get().getName());
            }
            List<Long> hoursCount = entry.getValue();
            byDayDataset.setData(hoursCount);
            byDayDataset.setFill(false);
            byDayDataset.setTension(0.1);
            byDayDataset.setBorderColor(colors[i]);
            byDayDataset.setBackgroundColor(colors[i]);
            i+=1;
            dataByDayByLocation.add(byDayDataset);
        }


        byDay.setDatasets(dataByDayByLocation);
        byDay.setLabels(IntStream.rangeClosed(1, 24).mapToObj(String::valueOf).collect(Collectors.toCollection(ArrayList::new)));
        visitorDto.setDataByDay(byDay);

        //****************************************************************
        List<Object[]> dataByWeekDayAndLocation = clockService.getTotalClockInByWeekday();
        VisitorDataDto byWeekDayAndLocation = new VisitorDataDto();
        List<VisitorDatasetDto> byWeekDayAndLocationDatasets = new ArrayList<>();

        Map<Long, List<Long>> countsByLocation = new HashMap<>();
        for (Object[] result : dataByWeekDayAndLocation) {
            Long location = (Long) result[0];
            int day = (int) result[1];
            Long count = (Long) result[2];

            countsByLocation.computeIfAbsent(location, k -> new ArrayList<>(Collections.nCopies(5, 0L)))
                    .set(day, count);
        }

        int j = 0;
        for (Long location : countsByLocation.keySet()) {
            VisitorDatasetDto dataset = new VisitorDatasetDto();
            dataset.setData(countsByLocation.get(location));
            Optional<Location> locationn = locationService.findByLocationId(location);
            if(locationn.isPresent()) {
                dataset.setLabel("Number of visitors by day - " + locationn.get().getName());
            }
            dataset.setFill(false);
            dataset.setTension(0.1);
            dataset.setBorderColor(colors[j]);
            dataset.setBackgroundColor(colors[j]);
            j+=1;
            byWeekDayAndLocationDatasets.add(dataset);
        }

        byWeekDayAndLocation.setLabels(new ArrayList<>(Arrays.asList("Monday", "Tuesday","Wednesday","Thursday","Friday")));
        byWeekDayAndLocation.setDatasets(byWeekDayAndLocationDatasets);
        visitorDto.setDataByWeekday(byWeekDayAndLocation);

        //---------------------------------------------
//        List<Object[]> dataByWeekDay = clockService.getTotalClockInByWeekday();
//        VisitorDataDto byWeekDay = new VisitorDataDto();
//        VisitorDatasetDto byWeekDayDataset = new VisitorDatasetDto();
//
//        List<Long> contByWeekDay = new ArrayList<>(Collections.nCopies(5, 0L));
//
//        for (Object[] result : dataByWeekDay) {
//            int dayy = (int) result[0];
//            Long count = (Long) result[1];
//            contByWeekDay.set(dayy, count);
//        }
//
//
//
//        byWeekDayDataset.setData(contByWeekDay);
//        byWeekDayDataset.setLabel("Number of visitors by the hour (by weekday)");
//        byWeekDayDataset.setFill(false);
//        byWeekDayDataset.setTension(0.1);
//        byWeekDayDataset.setBorderColor("rgb(75, 192, 192)");
//
//        byWeekDay.setLabels(new ArrayList<>(Arrays.asList("Monday", "Tuesday","Wednesday","Thursday","Friday")));
//        byWeekDay.setDatasets(Arrays.asList(byWeekDayDataset));
//        visitorDto.setDataByWeekday(byWeekDay);

        //******************************************************************
        List<Object[]> dataByWeekEnd = clockService.getTotalClockInByEnd();

        VisitorDataDto byWeekEnd = new VisitorDataDto();
        Map<Long, List<Long>> contByWeekEnd = new HashMap<>();

        for (Object[] result : dataByWeekEnd) {
            Long location = (Long) result[0];
            contByWeekEnd.put(location, new ArrayList<>(Arrays.asList(0L, 0L)));
        }

        for (Object[] result : dataByWeekEnd) {
            Long location = (Long) result[0];
            int dayOfWeek = (int) result[1];
            Long count = (Long) result[2];
            if (dayOfWeek == 5) { // Saturday
                contByWeekEnd.get(location).set(0, count);
            } else { // Sunday
                contByWeekEnd.get(location).set(1, count);
            }
        }
        int k = 0;
        List<VisitorDatasetDto> datasetsByWeekEnd = new ArrayList<>();
        for (Long location : contByWeekEnd.keySet()) {
            VisitorDatasetDto byWeekEndDataset = new VisitorDatasetDto();

            byWeekEndDataset.setData(contByWeekEnd.get(location));
            Optional<Location> locationnn = locationService.findByLocationId(location);
            if(locationnn.isPresent()){
                byWeekEndDataset.setLabel("Number of visitors by the hour (by weekend) - " + locationnn.get().getName());
            }
            byWeekEndDataset.setFill(false);
            byWeekEndDataset.setTension(0.1);
            byWeekEndDataset.setBorderColor(colors[k]);
            byWeekEndDataset.setBackgroundColor(colors[k]);
            datasetsByWeekEnd.add(byWeekEndDataset);
            k+=1;
        }

        byWeekEnd.setLabels(new ArrayList<>(Arrays.asList("Saturday", "Sunday")));
        byWeekEnd.setDatasets(datasetsByWeekEnd);
        visitorDto.setDataByWeekend(byWeekEnd);

        ////---------------------------------
//        List<Object[]> dataByWeekEnd = clockService.getTotalClockInByEnd();
//        VisitorDataDto byWeekEnd = new VisitorDataDto();
//        VisitorDatasetDto byWeekEndDataset = new VisitorDatasetDto();
//
//        List<Long> contByWeekEnd = new ArrayList<>(Collections.nCopies(2, 0L));
//
//        for (Object[] result : dataByWeekEnd) {
//            int dayy = (int) result[1];
//            Long count = (Long) result[2];
//            if (dayy == 5) dayy = 0;
//            else dayy = 1;
//            contByWeekEnd.set(dayy, count);
//        }
//
//
//
//        byWeekEndDataset.setData(contByWeekEnd);
//        byWeekEndDataset.setLabel("Number of visitors by the hour (by weekend)");
//        byWeekEndDataset.setFill(false);
//        byWeekEndDataset.setTension(0.1);
//        byWeekEndDataset.setBorderColor("rgb(75, 192, 192)");
//
//        byWeekEnd.setLabels(new ArrayList<>(Arrays.asList("Saturday", "Sunday")));
//        byWeekEnd.setDatasets(Arrays.asList(byWeekEndDataset));
//        visitorDto.setDataByWeekend(byWeekEnd);

        return visitorDto;
    }


    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping("/get-hours-by-day-week-month")
    public VisitorDto getHoursByDayWeekMonth(@RequestBody LineChartDTO dataTime) {
        VisitorDto visitorDto = new VisitorDto();

        VisitorDataDto dataByDay = new VisitorDataDto();
        List<Object[]> data = clockService.getHoursSpentByWeekday();
        Map<Long, List<Long>> hoursByLocation = new HashMap<>();
        VisitorDatasetDto byDayDataset ;
        for (Object[] result : data) {
            int day = (int) result[0];
            Long location = (Long) result[1];
            Long count = (Long) result[2];

            if (!hoursByLocation.containsKey(location)) {
                hoursByLocation.put(location, new ArrayList<>(Collections.nCopies(7, 0L)));
            }

            List<Long> hoursCount = hoursByLocation.get(location);
            hoursCount.set(day-1, count);
        }
        List<VisitorDatasetDto> dataByDayByLocation = new ArrayList<>() ;
        String[] colors = {"rgb(75, 192, 192)","rgb(66, 245, 75)","rgb(230, 232, 100)","rgb(228, 100, 232)","rgb(240, 84, 102)"};
        int i = 0;
        for (Map.Entry<Long, List<Long>> entry : hoursByLocation.entrySet()) {
            byDayDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byDayDataset.setLabel("Total hours - " + location.get().getName());
            }
            List<Long> hoursCount = entry.getValue();
            byDayDataset.setData(hoursCount);
            byDayDataset.setFill(false);
            byDayDataset.setTension(0.1);
            byDayDataset.setBorderColor(colors[i++]);
            dataByDayByLocation.add(byDayDataset);
        }

        dataByDay.setLabels(Arrays.asList("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"));

        dataByDay.setDatasets(dataByDayByLocation);
        visitorDto.setDataByDay(dataByDay);

        //-----------------------------------------

        VisitorDataDto dataByMonth = new VisitorDataDto();
        List<Object[]> dataMonth = clockService.getHoursSpentByMonth();
        Map<Long, List<Long>> monthByLocation = new HashMap<>();
        VisitorDatasetDto byMonthDataset ;
        for (Object[] result : dataMonth) {
            int month = (int) result[1];
            Long location = (Long) result[0];
            Long count = (Long) result[2];

            if (!monthByLocation.containsKey(location)) {
                monthByLocation.put(location, new ArrayList<>(Collections.nCopies(12, 0L)));
            }

            List<Long> hoursCount = monthByLocation.get(location);
            hoursCount.set(month-1, count);
        }
        List<VisitorDatasetDto> dataByMonthByLocation = new ArrayList<>() ;
        i = 0;
        for (Map.Entry<Long, List<Long>> entry : monthByLocation.entrySet()) {
            byMonthDataset = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byMonthDataset.setLabel("Total hours - " + location.get().getName());
            }
            List<Long> hoursCount = entry.getValue();
            byMonthDataset.setData(hoursCount);
            byMonthDataset.setFill(false);
            byMonthDataset.setTension(0.1);
            byMonthDataset.setBorderColor(colors[i++]);
            dataByMonthByLocation.add(byMonthDataset);
        }

        dataByMonth.setLabels(Arrays.asList("January","February","March","April","May","June","July","August","September",
                "October","November","December"));

        dataByMonth.setDatasets(dataByMonthByLocation);

        //---------------------------------------------------------------------------------------
        List<Object[]> classes = clockService.getHoursSpentByDay(dataTime.getStartDate(),dataTime.getEndDate());
        VisitorDataDto byDay = new VisitorDataDto();

        DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Map<Long, Map<String, Long>> classesByLocation = new HashMap<>();
        VisitorDatasetDto byDayDataset2 ;
        for (Object[] result : classes) {
            Date date = (Date) result[2];
            Long location = Long.parseLong(((Integer) result[0]).toString());
            Long count = ((BigDecimal) result[1]).longValue();

            if (!classesByLocation.containsKey(location)) {
                classesByLocation.put(location, new HashMap<>());
            }

            Map hoursCount = classesByLocation.get(location);
            String dateStr = dateFormat.format(date);
            hoursCount.put(dateStr, count);
        }
        List<VisitorDatasetDto> dataByDayByLocation2 = new ArrayList<>() ;
        int m = 0;
        for (Map.Entry<Long, Map<String,Long>> entry : classesByLocation.entrySet()) {
            byDayDataset2 = new VisitorDatasetDto();
            Optional<Location> location = locationService.findByLocationId(entry.getKey());
            if(location.isPresent()){
                byDayDataset2.setLabel("Total hours - " + location.get().getName());
            }
            Map<String, Long> hoursCount = entry.getValue();
            List<Long> dataList = new ArrayList<>();

            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Calendar cal = Calendar.getInstance();
            cal.setTime(dataTime.getStartDate());

            while (cal.getTime().before(dataTime.getEndDate()) || cal.getTime().equals(dataTime.getEndDate())) {
                Long count = hoursCount.get(sdf.format(cal.getTime()));
                if (count == null) {
                    count = 0L;
                }
                dataList.add(count);
                cal.add(Calendar.DATE, 1);
            }

            byDayDataset2.setData(dataList);
            byDayDataset2.setFill(false);
            byDayDataset2.setTension(0.1);
            byDayDataset2.setBorderColor(colors[m++]);
            dataByDayByLocation2.add(byDayDataset2);
        }
        byDay.setDatasets(dataByDayByLocation2);
        LocalDate start = dataTime.getStartDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate end = dataTime.getEndDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate();

        List<String> labels = new ArrayList<>();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");

        while (!start.isAfter(end)) {
            String formattedDate = start.format(formatter);
            labels.add(formattedDate);
            start = start.plusDays(1);
        }
        byDay.setLabels(labels);
        visitorDto.setDataByDay(byDay);
        visitorDto.setDataByWeekend(dataByMonth);
        visitorDto.setDataByWeekday(dataByDay);
        return visitorDto;
    }
}
