package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.mapper.UserMapper;
import com.ivanfranchin.bookapi.model.Location;
import com.ivanfranchin.bookapi.model.LocationRepository;
import com.ivanfranchin.bookapi.model.User;
import com.ivanfranchin.bookapi.rest.dto.SignUpRequest;
import com.ivanfranchin.bookapi.rest.dto.UserDto;
import com.ivanfranchin.bookapi.security.CustomUserDetails;
import com.ivanfranchin.bookapi.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static com.ivanfranchin.bookapi.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    private final LocationRepository locationRepository;

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/me")
    public UserDto getCurrentUser(@AuthenticationPrincipal CustomUserDetails currentUser) {
        return userMapper.toUserDto(userService.validateAndGetUserByUsername(currentUser.getUsername()));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/expiry-by-week")
    public List<UserDto> getUserByExpiryByWeek(@AuthenticationPrincipal CustomUserDetails currentUser) {
        return userService.findUsersWhoseAccountExpiryByNextWeek().stream()
                .map(userMapper::toUserDto)
                .collect(Collectors.toList());
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<UserDto> getUsers() {
        return userService.getUsers().stream()
                .map(userMapper::toUserDto)
                .collect(Collectors.toList());
    }
    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/locations")
    public List<Location> getLocations() {
        return locationRepository.findAll();
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("/{username}")
    public UserDto getUser(@PathVariable String username) {
        return userMapper.toUserDto(userService.validateAndGetUserByUsername(username));
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @DeleteMapping("/{username}")
    public UserDto deleteUser(@PathVariable String username) {
        User user = userService.validateAndGetUserByUsername(username);
        userService.deleteUser(user);
        return userMapper.toUserDto(user);
    }

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping("user-by-id/{id}")
    public User getUserById(@PathVariable String id) {
        Optional<User> user = userService.findByUserId(id);
        if(user.isPresent()){
            return user.get();
        }else{
            return null;
        }
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PutMapping("/update")
    public User updateUser( @RequestBody SignUpRequest signUpRequest) {
        Optional<User> user = userService.findByUserId(signUpRequest.getId()+"");
        if(user.isPresent()){
            User u = user.get();
            u.setName(signUpRequest.getName());
            u.setEmail(signUpRequest.getEmail());
            User users = userService.saveUser(u);
            return users;
        }
        return null;
    }
}
