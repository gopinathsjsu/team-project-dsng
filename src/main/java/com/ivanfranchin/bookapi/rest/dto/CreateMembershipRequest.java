package com.ivanfranchin.bookapi.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateMembershipRequest {

    @Schema(example = "9781849518260")
    private long id;

    @Schema(example = "Spring Security 3.1")
    @NotBlank
    private String title;

    @Schema(example = "Spring Security 3.1")
    private String description;
    @Schema(example = "Spring Security 3.1")
    private String image;

    private Long month;
    private Boolean isMember;

    private Long price;
}
