package com.ivanfranchin.bookapi.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignUpRequest {

    private int id;
    @Schema(example = "user3")
    @NotBlank
    private String username;

    @Schema(example = "user3")
    @NotBlank
    private String password;

    @Schema(example = "User3")
    @NotBlank
    private String name;

    @Schema(example = "user3@mycompany.com")
    @Email
    private String email;

    private String role;

    private Long locationId;

    private Long daysRemaining;

    private Boolean isActive;

    private Long membershipId;

    private Long locationIdForAdmin;
}
