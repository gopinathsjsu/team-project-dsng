package com.ivanfranchin.bookapi.mapper;

import com.ivanfranchin.bookapi.model.Instructor;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.rest.dto.CreateMembershipRequest;
import com.ivanfranchin.bookapi.rest.dto.InstructorDto;
import com.ivanfranchin.bookapi.rest.dto.MembershipDto;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface InstructorMapper {

    Instructor toMembership(InstructorDto instructorDto);

    InstructorDto toInstructorDto(Instructor instructor);
}