package com.ivanfranchin.bookapi.rest;

import com.ivanfranchin.bookapi.exception.DuplicatedUserInfoException;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.model.User;
import com.ivanfranchin.bookapi.rest.dto.AuthResponse;
import com.ivanfranchin.bookapi.rest.dto.LoginRequest;
import com.ivanfranchin.bookapi.rest.dto.SignUpRequest;
import com.ivanfranchin.bookapi.security.WebSecurityConfig;
import com.ivanfranchin.bookapi.service.MembershipService;
import com.ivanfranchin.bookapi.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;
    private final MembershipService membershipService;

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
        System.out.println(loginRequest.getUsername()+ " aaa "+loginRequest.getPassword());
        Optional<User> userOptional = userService.validUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            System.out.println("aaaaaaaa"+user);
            return ResponseEntity.ok(new AuthResponse(user.getId(), user.getName(), user.getRole()));
        }
        System.out.println("aaaaaaaaaaaaaaaaaaa");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/signup")
    public AuthResponse signUp(@Valid @RequestBody SignUpRequest signUpRequest) {
        if (userService.hasUserWithUsername(signUpRequest.getUsername())) {
            throw new DuplicatedUserInfoException(String.format("Username %s is already been used", signUpRequest.getUsername()));
        }
        if (userService.hasUserWithEmail(signUpRequest.getEmail())) {
            throw new DuplicatedUserInfoException(String.format("Email %s is already been used", signUpRequest.getEmail()));
        }

        User user = userService.saveUser(createUser(signUpRequest));
        return new AuthResponse(user.getId(), user.getName(), user.getRole());
    }



    private User createUser(SignUpRequest signUpRequest) {
        User user = new User();
        user.setUsername(signUpRequest.getUsername());
        user.setPassword(signUpRequest.getPassword());
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());

        user.setLocationId(signUpRequest.getLocationId());
        user.setMembershipId(signUpRequest.getMembershipId());
        if (signUpRequest.getLocationIdForAdmin()!=null){
            user.setRole(WebSecurityConfig.ADMIN);
            user.setLocationId(signUpRequest.getLocationIdForAdmin());
            user.setDaysRemaining(1000000L);
//            user.setExpiry(new Date(Long.MAX_VALUE));
            user.setIsActive(Boolean.TRUE);
            user.setMembershipId(1L);
            return user;

        }
        Optional<Membership> membership = membershipService.getMembershipById(signUpRequest.getMembershipId());
        if(!membership.isPresent()){
            user.setIsActive(Boolean.FALSE);
            user.setDaysRemaining(0l);
            user.setRole(WebSecurityConfig.USER);
        }else{
            user.setIsActive(Boolean.TRUE);
            user.setDaysRemaining(membership.get().getMonth()*30);
            if(membership.get().getIsMember()){
                user.setRole(WebSecurityConfig.USER);
            }else {
                user.setRole(WebSecurityConfig.NONMember);
            }

            // Get the current date
            Date currentDate = new Date();

            Calendar calendar = Calendar.getInstance();
            calendar.setTime(currentDate);
            calendar.add(Calendar.MONTH, Integer.parseInt(membership.get().getMonth().toString()));
            Date expirationDate = calendar.getTime();
            user.setExpiry(expirationDate);

        }

        user.setLocationId(userService.findById(signUpRequest.getLocationId()).get().getLocationId());
        return user;
    }
}
