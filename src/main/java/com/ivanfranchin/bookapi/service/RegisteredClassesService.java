package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.model.RegisteredClasses;

import java.util.List;
import java.util.Optional;

public interface RegisteredClassesService {

    List<RegisteredClasses> getRegisteredClasses();

    List<RegisteredClasses> getRegisteredClassesContainingText(String txt);

    RegisteredClasses saveregisteredClasses(RegisteredClasses registeredClasses);

    Optional<RegisteredClasses> getRegisteredClassesById(Long id);

    void deleteRegisteredClassesById(String id);


}
