package com.ivanfranchin.bookapi.service;

import com.ivanfranchin.bookapi.exception.UserNotFoundException;
import com.ivanfranchin.bookapi.model.Book;
import com.ivanfranchin.bookapi.model.Membership;
import com.ivanfranchin.bookapi.model.User;
import com.ivanfranchin.bookapi.repository.MembershipRepository;
import com.ivanfranchin.bookapi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MembershipServiceImpl implements MembershipService {

    private final MembershipRepository membershipRepository;


    @Override
    public List<Membership> getMemberships() {
        return membershipRepository.findAllByOrderById();
    }

    @Override
    public List<Membership> getMembershipContainingText(String text) {
        return membershipRepository.findByDescriptionContainingOrTitleContainingOrderById(text, text);
    }

    @Override
    public Membership saveMembership(Membership membership) {
        return membershipRepository.save(membership);
    }

    @Override
    public Optional<Membership> getMembershipById(Long id) {
        return membershipRepository.findById(id.toString());
    }

    @Override
    public void deleteMembershipById(String id) {
        membershipRepository.deleteById(id);
    }
}
