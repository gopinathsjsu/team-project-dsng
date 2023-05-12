package com.ivanfranchin.bookapi.rest.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
public class LogHoursDTO {

    private long id;

    private long userId;

    private Date date;
    private Long time;

    private long locationId;



}
