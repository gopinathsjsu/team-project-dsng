package com.ivanfranchin.bookapi.rest.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class LogHoursByDTO {

    public List<Integer> treadmil;
    public List<Integer> cycling;
    public List<Integer> stair;

    public LogHoursByDTO() {
        treadmil = new ArrayList<>();
        cycling = new ArrayList<>();
        stair = new ArrayList<>();
        // Initialize the lists with zeros for 90 days
//        for (int i = 0; i < 90; i++) {
//            treadmil.add(0);
//            cycling.add(0);
//            stair.add(0);
//        }
    }
}
