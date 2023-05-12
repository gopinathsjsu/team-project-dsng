package com.ivanfranchin.bookapi.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.Date;

@Data
public class RegisteredClassesRequest {

    @Schema(example = "9781849518260")
    private long id;
    @Schema(example = "9781849518260")
    private long user_id;
    @Schema(example = "9781849518260")
    private long classes_id;

    @Schema(example = "Spring Security 3.1")
    private String title;

    @Schema(example = "Spring Security 3.1")
    private String description;
    @Schema(example = "Spring Security 3.1")
    private String image;

    @Schema(example = "Spring Security 3.1")
    private long locationId;

    @Schema(example = "Spring Security 3.1")
    private String startTime;
    @Schema(example = "Spring Security 3.1")
    private String endTime;

    @Schema(example = "Spring Security 3.1")
    private Date startDate;
    @Schema(example = "Spring Security 3.1")
    private Date endDate;

    private Long month;
    private Boolean isMember;
}
