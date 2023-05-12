package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.Book;
import com.ivanfranchin.bookapi.model.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MembershipRepository extends JpaRepository<Membership, String> {

    List<Membership> findAllByOrderById();
    List<Membership> findByDescriptionContainingOrTitleContainingOrderById(String isbn, String title);

}
