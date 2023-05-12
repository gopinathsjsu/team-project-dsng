package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.RegisteredClassesMapper;
import com.ivanfranchin.bookapi.model.RegisteredClasses;
import com.ivanfranchin.bookapi.rest.dto.CreateRegisteredClassesRequest;
import com.ivanfranchin.bookapi.rest.dto.RegisteredClassesDto;
import com.ivanfranchin.bookapi.service.RegisteredClassesService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/registered-classes")
public class RegisteredclassesControler {

    private final RegisteredClassesService registeredClassesService;
    private final RegisteredClassesMapper registeredClassesMapper;


    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<RegisteredClassesDto> getRegisteredClasses(@RequestParam(value = "text", required = false) String text) {
        List<RegisteredClasses> registeredclasses = (text == null) ? registeredClassesService.getRegisteredClasses() : registeredClassesService.getRegisteredClassesContainingText(text);
        return registeredclasses.stream()
                .map(registeredClassesMapper:: toRegisteredClassesDto )
                .collect(Collectors.toList());
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public RegisteredClassesDto createRegisteredclasses(@Valid @RequestBody CreateRegisteredClassesRequest createRegisteredclassesRequest) {
        RegisteredClasses registeredclasses = registeredClassesMapper.toRegisteredClasses(createRegisteredclassesRequest);
        return registeredClassesMapper.toRegisteredClassesDto(registeredClassesService.saveregisteredClasses(registeredclasses));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @DeleteMapping("/{id}")
    public String deleteBook(@PathVariable String id) {
        registeredClassesService.deleteRegisteredClassesById(id);
        return id;
    }
}



