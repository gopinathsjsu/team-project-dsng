package com.ivanfranchin.bookapi.rest.dto;

public record MembershipDto(long id,String title,String description,String image,Long month,Boolean isMember,Long price) {
}