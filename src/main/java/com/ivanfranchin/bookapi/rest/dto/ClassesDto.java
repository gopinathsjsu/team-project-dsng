package com.ivanfranchin.bookapi.rest.dto;

import java.util.Date;

public record ClassesDto(long id, String title, String description, Boolean isForMember, Long instructorId, Long locationId, String startTime, String endTime,
                         Date startDate,Date endDate,String days) {
}