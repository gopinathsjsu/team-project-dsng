package com.ivanfranchin.bookapi.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Data
public class CreateClockInOutRequest {

    private long userId;

    private LocalDate time;
    private Date clockIn;
    private Date clockOut;
    private long adminId;
}
