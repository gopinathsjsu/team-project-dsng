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
@Table(name = "classes_data")
public class ClassesData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "class_id")
    private long classId;

    @Column(name = "location_id")
    private long locationId;

    @Column(name = "start_date")
    public Date startDate;
}
