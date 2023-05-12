package com.ivanfranchin.bookapi.mapper;

import com.ivanfranchin.bookapi.model.Book;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.rest.dto.BookDto;
import com.ivanfranchin.bookapi.rest.dto.CreateBookRequest;
import com.ivanfranchin.bookapi.rest.dto.CreateMembershipRequest;
import com.ivanfranchin.bookapi.rest.dto.MembershipDto;
import org.mapstruct.Mapper;
import org.springframework.context.annotation.Configuration;

@Configuration
@Mapper(componentModel = "spring")
public interface MembershipMapper {

    Membership toMembership(CreateMembershipRequest createMembershipRequest);

    MembershipDto toMembershipDto(Membership membership);
}