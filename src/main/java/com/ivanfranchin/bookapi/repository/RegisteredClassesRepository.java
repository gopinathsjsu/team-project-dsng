package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.model.RegisteredClasses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RegisteredClassesRepository extends JpaRepository<RegisteredClasses, String> {

    List<RegisteredClasses> findAllByOrderById();
    List<RegisteredClasses> findByDescriptionContainingOrTitleContainingOrderById(String isbn, String title);

}
