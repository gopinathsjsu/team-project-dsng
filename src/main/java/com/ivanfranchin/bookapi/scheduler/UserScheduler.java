package com.ivanfranchin.bookapi.scheduler;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.ivanfranchin.bookapi.model.User;
import com.ivanfranchin.bookapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class UserScheduler {

    @Autowired
    private UserRepository userRepository;

    @Scheduled(cron = "0 0 * * * *")
    public void updateUsers() {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            if (user.getRole().equals("ADMIN")) continue;
            if (user.getExpiry() != null) {
                Calendar calendar = Calendar.getInstance();
                Date today = calendar.getTime();
                if (today.compareTo(user.getExpiry()) >= 0) {
                    user.setIsActive(false);
                    user.setDaysRemaining(0L);
                } else {
                    long diff = user.getExpiry().getTime() - today.getTime();
                    long days = diff / (24 * 60 * 60 * 1000);
                    user.setDaysRemaining(days);
                }
                userRepository.save(user);
            }
        }
    }
}
