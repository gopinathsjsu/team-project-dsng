package com.ivanfranchin.bookapi.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@Entity
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String email;
    private String role;

    private Long locationId=0l;

    @Column(name = "days_remaining")
    private Long daysRemaining;
    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "membership_id")
    private Long membershipId;

    private Date expiry;


    public User(String username, String password, String name, String email, String role, Long locationId, Long daysRemaining,Boolean isActive,Long membershipId) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.role = role;
        this.locationId = locationId;
        this.daysRemaining = daysRemaining;
        this.isActive = isActive;
        this.membershipId = membershipId;
    }
}
