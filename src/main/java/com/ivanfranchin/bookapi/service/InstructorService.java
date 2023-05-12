package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Instructor;
import com.ivanfranchin.bookapi.rest.dto.InstructorDto;

import java.util.List;
import java.util.Optional;

public interface InstructorService {

    List<Instructor> findAllInstructor();
    Optional<Instructor> getInstructorById(Long id);

    Instructor saveInstructor(Instructor instructor);

    Instructor deleteById(Long id);
}
