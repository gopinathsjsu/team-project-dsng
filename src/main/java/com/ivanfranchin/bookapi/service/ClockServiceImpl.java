package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Clock;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.repository.ClockRepository;
import com.ivanfranchin.bookapi.repository.MembershipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ClockServiceImpl implements ClockService {

    private final ClockRepository clockRepository;


    @Override
    public List<Clock> getAllData() {
        return clockRepository.findByDate(LocalDate.now());
    }

    @Override
    public Clock saveClockDate(Clock clock) {
        return clockRepository.save(clock);
    }

    @Override
    public boolean findIsClockedIn(long userId) {
        return false;
    }

    @Override
    public Optional<Clock> findByUserId(long userId) {
        return clockRepository.findByUserIdAndClockOutIsNull(userId);
    }

    @Override
    public List<Object[]> getTotalClockInByHour() {
        return clockRepository.getTotalClockInsByHour();
    }

    @Override
    public List<Object[]> getTotalClockInByWeekday() {
        return clockRepository.getTotalClockInsByWeekDay();
    }

    @Override
    public List<Object[]> getTotalClockInByEnd() {
        return clockRepository.getTotalClockInsByWeekEnd();
    }

    @Override
    public List<Object[]> getHoursSpentByDay(Date startDate, Date endDate) {
        return clockRepository.getTotalHoursByDate(startDate,endDate);
    }

    @Override
    public List<Object[]> getHoursSpentByWeekday() {
        return clockRepository.getHoursSpentByWeekday();
    }

    @Override
    public List<Object[]> getHoursSpentByMonth() {
        return clockRepository.getHoursSpentByMonth();
    }
}
