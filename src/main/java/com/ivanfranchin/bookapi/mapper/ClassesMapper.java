package com.ivanfranchin.bookapi.mapper;

import com.ivanfranchin.bookapi.model.Classes;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.rest.dto.ClassesDto;
import com.ivanfranchin.bookapi.rest.dto.CreateMembershipRequest;
import com.ivanfranchin.bookapi.rest.dto.MembershipDto;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface ClassesMapper {

    Classes toClasses(ClassesDto classesDto);

    ClassesDto toClassesDto(Classes classes);
}