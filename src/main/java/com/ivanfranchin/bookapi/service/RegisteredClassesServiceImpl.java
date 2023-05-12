package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.model.RegisteredClasses;
import com.ivanfranchin.bookapi.repository.MembershipRepository;
import com.ivanfranchin.bookapi.repository.RegisteredClassesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class RegisteredClassesServiceImpl implements RegisteredClassesService {


    private final RegisteredClassesRepository registeredClassesRepository;


    @Override
    public List<RegisteredClasses> getRegisteredClasses() {
        return registeredClassesRepository.findAllByOrderById();
    }

    @Override
    public List<RegisteredClasses> getRegisteredClassesContainingText(String text) {
        return registeredClassesRepository.findByDescriptionContainingOrTitleContainingOrderById(text, text);
    }
    @Override
    public RegisteredClasses saveregisteredClasses (RegisteredClasses registeredClasses) {
        return registeredClassesRepository.save(registeredClasses);
    }


    @Override
    public Optional<RegisteredClasses> getRegisteredClassesById(Long id) {
        return registeredClassesRepository.findById(id.toString());
    }

    @Override
    public void deleteRegisteredClassesById(String id) {
        registeredClassesRepository.deleteById(id);
    }
}
