package com.ivanfranchin.bookapi.rest.dto;

public record InstructorDto(long id, String name, long age, String description, float salary, String email) {
}