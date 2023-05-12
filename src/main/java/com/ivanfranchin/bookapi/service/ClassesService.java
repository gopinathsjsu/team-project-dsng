package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Classes;
import com.ivanfranchin.bookapi.model.Membership;

import java.util.List;
import java.util.Optional;

public interface ClassesService {

    List<Classes> getClasses();
    Classes saveClass(Classes classes);

    void deleteClasses(String id);
    List<Classes> getByText(String txt);

    Optional<Classes> findById(Long id);

}
