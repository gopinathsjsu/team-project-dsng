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
@Table(name = "log_hours")
public class LogHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_id")
    private long userId;

    private Date date;
    private Long time;

    @Column(name = "location_id")
    private long locationId;

    @Column(name = "machine")
    private String machine;
    @PrePersist
    public void prePersist() {
        this.date = new Date();
    }
}
