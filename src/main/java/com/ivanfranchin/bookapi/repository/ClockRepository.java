package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.Clock;
import com.ivanfranchin.bookapi.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ClockRepository extends JpaRepository<Clock, String> {

    @Query("SELECT e FROM Clock e ORDER BY e.date ASC")
    List<Clock> findAllByDateAsc();

    Optional<Clock> findByUserIdAndClockOutIsNull(long userId);

    List<Clock> findByDate(LocalDate date);

    @Query("SELECT c.locationId, HOUR(c.clockIn) AS hourOfDay, COUNT(c) AS totalClockIns "
            + "FROM Clock c "
            + "GROUP BY c.locationId, HOUR(c.clockIn)")
    List<Object[]> getTotalClockInsByHour();




    //    @Query("SELECT WEEKDAY(c.clockIn) AS dayOfWeek, COUNT(c) AS totalClockIns "
//            + "FROM Clock c "
//            + "WHERE WEEKDAY(c.clockIn) < 5 "
//            + "GROUP BY WEEKDAY(c.clockIn)")
//    List<Object[]> getTotalClockInsByWeekDay();
    @Query("SELECT c.locationId, WEEKDAY(c.clockIn) AS dayOfWeek, COUNT(c) AS totalClockIns "
            + "FROM Clock c "
            + "WHERE WEEKDAY(c.clockIn) < 5 "
            + "GROUP BY c.locationId, WEEKDAY(c.clockIn)")
    List<Object[]> getTotalClockInsByWeekDay();

//    @Query("SELECT WEEKDAY(c.clockIn) AS dayOfWeek, COUNT(c) AS totalClockIns "
//            + "FROM Clock c "
//            + "WHERE WEEKDAY(c.clockIn) >= 5 "
//            + "GROUP BY WEEKDAY(c.clockIn)")
//    List<Object[]> getTotalClockInsByWeekEnd();

    @Query("SELECT c.locationId, WEEKDAY(c.clockIn) AS dayOfWeek, COUNT(c) AS totalClockIns "
            + "FROM Clock c "
            + "WHERE WEEKDAY(c.clockIn) >= 5 "
            + "GROUP BY c.locationId, WEEKDAY(c.clockIn)")
    List<Object[]> getTotalClockInsByWeekEnd();




    @Query("SELECT DAYOFWEEK(c.date), c.locationId, SUM(TIME_TO_SEC(TIMEDIFF(c.clockOut, c.clockIn)) / 3600) " +
            "FROM Clock c " +
            "WHERE c.clockOut IS NOT NULL " +
            "GROUP BY DAYOFWEEK(c.date), c.locationId")
    List<Object[]> getHoursSpentByWeekday();


    @Query("SELECT locationId, MONTH(date), SUM(TIME_TO_SEC(TIMEDIFF(clockOut, clockIn)) / 3600) " +
            "FROM Clock " +
            "WHERE clockOut IS NOT NULL " +
            "GROUP BY locationId, MONTH(date)")
    List<Object[]> getHoursSpentByMonth();

    @Query(value = "SELECT c.location_id, SUM(TIMESTAMPDIFF(SECOND, c.clock_in, c.clock_out))/3600.0 as hours, c.date "
            + "FROM clock c "
            + "WHERE c.date >= :startDate AND c.date <= :endDate "
            + "GROUP BY c.location_id, c.date", nativeQuery = true)
    List<Object[]> getTotalHoursByDate(@Param("startDate") Date startDate,
                                                  @Param("endDate") Date endDate);

}
