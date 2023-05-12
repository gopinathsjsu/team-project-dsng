package com.ivanfranchin.bookapi.rest.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class ClockDto{

    long userId;
    long id;
    LocalDate time;
    Date clockIn;
    Date clockOut;
    String msg;
    String userName;
}