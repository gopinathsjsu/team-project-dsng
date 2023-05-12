package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.model.Book;
import com.ivanfranchin.bookapi.model.Membership;

import java.util.List;
import java.util.Optional;

public interface MembershipService {

    List<Membership> getMemberships();

    List<Membership> getMembershipContainingText(String txt);

    Membership saveMembership(Membership membership);

    Optional<Membership> getMembershipById(Long id);

    void deleteMembershipById(String id);

}
