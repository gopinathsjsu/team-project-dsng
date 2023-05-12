package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.InstructorMapper;
import com.ivanfranchin.bookapi.mapper.MembershipMapper;
import com.ivanfranchin.bookapi.model.Instructor;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.rest.dto.CreateMembershipRequest;
import com.ivanfranchin.bookapi.rest.dto.InstructorDto;
import com.ivanfranchin.bookapi.rest.dto.MembershipDto;
import com.ivanfranchin.bookapi.service.InstructorService;
import com.ivanfranchin.bookapi.service.MembershipService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/instructors")
public class InstructorController {

    private final InstructorService instructorService;
    private final InstructorMapper instructorMapper;
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<InstructorDto> getInstructors() {
        return instructorService.findAllInstructor().stream().map(instructorMapper::toInstructorDto).toList();
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public InstructorDto createInstructor(@Valid @RequestBody InstructorDto instructorDto) {
        Instructor instructor = instructorMapper.toMembership(instructorDto);
        return instructorMapper.toInstructorDto(instructorService.saveInstructor(instructor));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping
    public InstructorDto updateInstructor(@Valid @RequestBody InstructorDto instructorDto) {
        Instructor instructor = instructorMapper.toMembership(instructorDto);
        return instructorMapper.toInstructorDto(instructorService.saveInstructor(instructor));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @DeleteMapping("/{id}")
    public Instructor deleteBook(@PathVariable long id) {
        return instructorService.deleteById(id);
    }
}
