package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Classes;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.repository.ClassesRepository;
import com.ivanfranchin.bookapi.repository.MembershipRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ClassesServiceImpl implements ClassesService {

    private final ClassesRepository classesRepository;

    @Override
    public List<Classes> getClasses() {
        return classesRepository.findAllByOrderByCreatedAtDesc();
    }

    @Override
    public Classes saveClass(Classes classes) {
        return classesRepository.save(classes);
    }

    @Override
    public void deleteClasses(String id) {
        classesRepository.deleteById(id);
    }

    @Override
    public List<Classes> getByText(String txt) {
        return classesRepository.findByTitleContainingOrDescriptionContaining(txt,txt);
    }

    @Override
    public Optional<Classes> findById(Long id) {
        return classesRepository.findById(id.toString());
    }
}
