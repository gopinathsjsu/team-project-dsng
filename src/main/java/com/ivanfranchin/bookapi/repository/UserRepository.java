package com.ivanfranchin.bookapi.repository;

import com.ivanfranchin.bookapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
    Optional<User> findById(long userId);

    @Query("SELECT u FROM User u WHERE u.expiry BETWEEN CURRENT_DATE AND CURRENT_DATE + 7 AND u.isActive = true")
    List<User> findUsersWhoseAccountExpiryByNextWeek();
}
