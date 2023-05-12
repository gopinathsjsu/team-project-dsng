package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.RegisteredClassesMapper;
import com.ivanfranchin.bookapi.model.LogHours;
import com.ivanfranchin.bookapi.model.RegisteredClasses;
import com.ivanfranchin.bookapi.repository.LogHoursRepository;
import com.ivanfranchin.bookapi.rest.dto.*;
import com.ivanfranchin.bookapi.service.RegisteredClassesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/log-hours")
public class LogHoursController {

    private final LogHoursRepository logHoursRepository;


    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/{id}")
    public LogHoursByDTO getLogHoursByHourly(@PathVariable Long id) {
        LogHoursByDTO logHoursByDTO = new LogHoursByDTO();

        Random random = new Random();
        for (int i = 0; i < 90; i++) {
            logHoursByDTO.getTreadmil().add(random.nextInt(101));
            logHoursByDTO.getCycling().add(random.nextInt(101));
            logHoursByDTO.getStair().add(random.nextInt(101));
        }
//        LocalDate currentDate = LocalDate.now();
//        LocalDateTime currentDateTime = currentDate.atTime(23, 59, 59); // Set current date to 23:59:59
//
//        LocalDate endDate = currentDate.minus(90, ChronoUnit.DAYS);
//
//        return logHoursRepository.getLogHoursByDTOForPast90Days(endDate,currentDateTime.toLocalDate(),id);
        return logHoursByDTO;
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/total-machine-hours")
    public MachineDataDTO getTotal() {

        List<Object[]> results = logHoursRepository.getTotalMinutesByMachine();

        Long timeOnTreadmill = 0L;
        Long timeOnStair = 0L;
        Long timeOnCycling = 0L;

        for (Object[] result : results) {
            String machine = (String) result[0];
            Long totalTime = (Long) result[1];

            if ("Treadmill".equals(machine)) {
                timeOnTreadmill = totalTime;
            } else if ("Stair".equals(machine)) {
                timeOnStair = totalTime;
            } else if ("Cycling".equals(machine)) {
                timeOnCycling = totalTime;
            }
        }

        return new MachineDataDTO(timeOnTreadmill, timeOnStair, timeOnCycling);
    }
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public LogHours createLogHours(@Valid @RequestBody LogHours logHours) {
        System.out.println(logHours.toString());
        return logHoursRepository.save(logHours);
    }

//    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
//    @DeleteMapping("/{id}")
//    public String deleteBook(@PathVariable String id) {
//        registeredClassesService.deleteRegisteredClassesById(id);
//        return id;
//    }
}



