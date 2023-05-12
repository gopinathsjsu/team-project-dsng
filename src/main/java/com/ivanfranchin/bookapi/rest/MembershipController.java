package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.BookMapper;
import com.ivanfranchin.bookapi.mapper.MembershipMapper;
import com.ivanfranchin.bookapi.model.Book;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.rest.dto.BookDto;
import com.ivanfranchin.bookapi.rest.dto.CreateBookRequest;
import com.ivanfranchin.bookapi.rest.dto.CreateMembershipRequest;
import com.ivanfranchin.bookapi.rest.dto.MembershipDto;
import com.ivanfranchin.bookapi.service.BookService;
import com.ivanfranchin.bookapi.service.MembershipService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/membership")
public class MembershipController {

    private final MembershipService membershipService;
    private final MembershipMapper membershipMapper;
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<MembershipDto> getMemberships(@RequestParam(value = "text", required = false) String text) {
        List<Membership> memberships = (text == null) ? membershipService.getMemberships() : membershipService.getMembershipContainingText(text);
        return memberships.stream()
                .map(membershipMapper::toMembershipDto)
                .collect(Collectors.toList());
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public MembershipDto createMembership(@Valid @RequestBody CreateMembershipRequest createMembershipRequest) {
        Membership membership = membershipMapper.toMembership(createMembershipRequest);
        System.out.println(createMembershipRequest);
        return membershipMapper.toMembershipDto(membershipService.saveMembership(membership));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping
    public MembershipDto updateMembership(@Valid @RequestBody CreateMembershipRequest createMembershipRequest) {
        Optional<Membership> membershipO = membershipService.getMembershipById(createMembershipRequest.getId());
        Membership m = membershipO.get();
        m.setDescription(createMembershipRequest.getDescription());
        m.setTitle(createMembershipRequest.getTitle());
        m.setMonth(createMembershipRequest.getMonth());
        m.setPrice(createMembershipRequest.getPrice());
//        m.setMonth(createMembershipRequest.getIsMember() ? 1L:0L);
        return membershipMapper.toMembershipDto(membershipService.saveMembership(m));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable String id) {
        membershipService.deleteMembershipById(id);
        return id;
    }
}
