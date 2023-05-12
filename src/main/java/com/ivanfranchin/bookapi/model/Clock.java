package com.ivanfranchin.bookapi.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "clock")
public class Clock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id")
    private long userId;

    private LocalDate date;
    @Column(name = "clock_in")
    private Date clockIn;
    @Column(name = "clock_out")
    private Date clockOut;

    @Column(name = "location_id")
    private long locationId;
}
