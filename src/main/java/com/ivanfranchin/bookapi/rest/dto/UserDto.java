package com.ivanfranchin.bookapi.rest.dto;

import java.util.Date;

public record UserDto(Long id, String username, String name, String email, String role, Date expiry,Long daysRemaining,Long locationId,Long membershipId,Boolean isActive) {
}