package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.Classes;
import com.ivanfranchin.bookapi.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassesRepository extends JpaRepository<Classes, String> {

    List<Classes> findByTitleContainingOrDescriptionContaining(String text,String text2);

    List<Classes> findAllByOrderByCreatedAtDesc();

}
