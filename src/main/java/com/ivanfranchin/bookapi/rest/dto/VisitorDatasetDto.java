package com.ivanfranchin.bookapi.rest.dto;

import lombok.Data;

import java.util.List;

@Data
public class VisitorDatasetDto {

    String label;
    List<Long> data;
    boolean fill;
    String borderColor;
    Double tension;
    String backgroundColor;
}