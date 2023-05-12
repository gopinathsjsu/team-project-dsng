package com.ivanfranchin.bookapi.rest.dto;

import lombok.Data;

import java.util.List;

@Data
public class VisitorDto {

    VisitorDataDto dataByDay;
    VisitorDataDto dataByWeekday;
    VisitorDataDto dataByWeekend;
}