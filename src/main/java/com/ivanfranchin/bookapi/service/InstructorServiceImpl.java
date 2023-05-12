package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Instructor;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.repository.InstructorRepository;
import com.ivanfranchin.bookapi.repository.MembershipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class InstructorServiceImpl implements InstructorService {

    private final InstructorRepository instructorRepository;

    @Override
    public List<Instructor> findAllInstructor() {
        return instructorRepository.findAll();
    }

    @Override
    public Optional<Instructor> getInstructorById(Long id) {
        return instructorRepository.findById(id.toString());
    }

    @Override
    public Instructor saveInstructor(Instructor instructor) {
        return instructorRepository.save(instructor);
    }

    @Override
    public Instructor deleteById(Long id) {
        Optional<Instructor> instructor = getInstructorById(id);
        if (instructor.isPresent()){
            instructorRepository.deleteById(id.toString());
            return instructor.get();
        }
        return null;
    }
}
