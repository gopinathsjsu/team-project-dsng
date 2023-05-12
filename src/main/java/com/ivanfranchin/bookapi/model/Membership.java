package com.ivanfranchin.bookapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "membership")
public class Membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String description;
    private String image;
    private Long month;
    private Long price;
    @Column(name = "is_member")
    public Boolean isMember;
}
