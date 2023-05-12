package com.ivanfranchin.bookapi.mapper;

import com.ivanfranchin.bookapi.model.RegisteredClasses;
import com.ivanfranchin.bookapi.rest.dto.*;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;
import com.ivanfranchin.bookapi.rest.dto.CreateRegisteredClassesRequest;

@Configuration
@Mapper(componentModel = "spring")
public interface RegisteredClassesMapper {

    RegisteredClasses toRegisteredClasses(CreateRegisteredClassesRequest createRegisteredClassesRequest);


    RegisteredClassesDto toRegisteredClassesDto(RegisteredClasses registeredClasses);

}


