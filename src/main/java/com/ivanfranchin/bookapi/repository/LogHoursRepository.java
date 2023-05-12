package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.LogHours;
import com.ivanfranchin.bookapi.rest.dto.LogHoursByDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@Repository
public interface LogHoursRepository extends JpaRepository<LogHours, Long> {

    @Query("SELECT l.date, "
            + "COALESCE(SUM(CASE WHEN l.machine = 'Treadmil' THEN l.time END), 0), "
            + "COALESCE(SUM(CASE WHEN l.machine = 'Cycling' THEN l.time END), 0), "
            + "COALESCE(SUM(CASE WHEN l.machine = 'Stair' THEN l.time END), 0) "
            + "FROM LogHours l "
            + "WHERE l.userId = :userId "
            + "AND l.date >= :startDate " // Use >= instead of BETWEEN
            + "AND l.date <= :endDate "
            + "GROUP BY DATE(l.date) "
            + "ORDER BY DATE(l.date) DESC")
    List<Object[]> findTotalHoursByMachineForPast90Days(@Param("userId") Long userId, @Param("startDate") Date startDate, @Param("endDate") Date endDate);

    @Query("SELECT l.machine, SUM(l.time) " +
            "FROM LogHours l " +
            "GROUP BY l.machine")
    List<Object[]> getTotalMinutesByMachine();

    default LogHoursByDTO getLogHoursByDTOForPast90Days(LocalDate startDate, LocalDate endDate,Long id) {
        Date start = Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        LocalDateTime endDateTime = endDate.atTime(LocalTime.of(23, 59, 59));
        Date end = Date.from(endDateTime.atZone(ZoneId.systemDefault()).toInstant());

        LocalDate currentDate = LocalDate.now();
        List<Object[]> results = findTotalHoursByMachineForPast90Days(id,start, end);
        LogHoursByDTO logHoursByDTO = new LogHoursByDTO();
        for (int i = 0; i < 90; i++) {
            logHoursByDTO.getTreadmil().add(0);
            logHoursByDTO.getCycling().add(0);
            logHoursByDTO.getStair().add(0);
        }

        for (Object[] result : results) {
            Timestamp timestamp = (Timestamp) result[0];
            System.out.println(timestamp.toLocalDateTime().toString());
            LocalDate resultDate = timestamp.toLocalDateTime().toLocalDate();
            long daysAgo = ChronoUnit.DAYS.between(resultDate, currentDate);
            int dayIndex = (int) (89 - daysAgo);
            logHoursByDTO.getTreadmil().set(dayIndex, ((Number) result[1]).intValue());
            logHoursByDTO.getCycling().set(dayIndex, ((Number) result[2]).intValue());
            logHoursByDTO.getStair().set(dayIndex, ((Number) result[3]).intValue());
        }

        return logHoursByDTO;
    }
}
