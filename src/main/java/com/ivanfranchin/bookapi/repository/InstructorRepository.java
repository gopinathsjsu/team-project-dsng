package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.Instructor;
import com.ivanfranchin.bookapi.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.crypto.spec.OAEPParameterSpec;
import java.util.List;
import java.util.Optional;

@Repository
public interface InstructorRepository extends JpaRepository<Instructor, String> {


}
