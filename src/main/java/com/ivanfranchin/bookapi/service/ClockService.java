package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Clock;
import com.ivanfranchin.bookapi.model.Membership;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ClockService {

    List<Clock> getAllData();
    Clock saveClockDate(Clock clock);

    boolean findIsClockedIn(long userId);

    Optional<Clock> findByUserId(long userId);

    List<Object[]> getTotalClockInByHour();

    List<Object[]> getTotalClockInByWeekday();

    List<Object[]> getTotalClockInByEnd();

    List<Object[]> getHoursSpentByDay(Date startDate, Date endDate);

    List<Object[]> getHoursSpentByWeekday();

    List<Object[]> getHoursSpentByMonth();
}
