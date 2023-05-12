package com.ivanfranchin.bookapi.mapper;

import com.ivanfranchin.bookapi.model.Clock;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.rest.dto.ClockDto;
import com.ivanfranchin.bookapi.rest.dto.CreateClockInOutRequest;
import com.ivanfranchin.bookapi.rest.dto.CreateMembershipRequest;
import com.ivanfranchin.bookapi.rest.dto.MembershipDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface ClockMapper {

    @Mapping(source = "userId", target = "userId")
    Clock toClock(CreateClockInOutRequest clock);

    @Mapping(source = "userId",target = "userId")
    @Mapping(source = "id",target = "id")
    @Mapping(source = "date",target = "time")
    @Mapping(source = "clockIn",target = "clockIn")
    @Mapping(source = "clockOut",target = "clockOut")
    ClockDto toClockDto(Clock clock);
}