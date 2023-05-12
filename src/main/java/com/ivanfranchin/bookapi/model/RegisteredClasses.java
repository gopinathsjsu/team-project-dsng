package com.ivanfranchin.bookapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "RegisteredClasses")
public class RegisteredClasses {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "classes_id")
    private long classes_id;
    @Column(name = "user_id")
    private long user_id;
    private String title;
    private String description;
    private String image;
    private Long month;

    @Column(name = "location_id")
    private int location_id;

    @Column(name = "start_time")
    private String startTime;
    @Column(name = "end_time")
    private String endTime;

    @Column(name = "startDate")
    private Date startDate;
    @Column(name = "endDate")
    private Date endDate;

    @Column(name = "isMember")
    public Boolean isMember;
}
