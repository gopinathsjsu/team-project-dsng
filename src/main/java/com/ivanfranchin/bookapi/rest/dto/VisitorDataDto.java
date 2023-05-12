package com.ivanfranchin.bookapi.rest.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Data
public class VisitorDataDto {

    List<String> labels;
    List<VisitorDatasetDto> datasets;

}