package com.devsession.demo.repository;

import com.devsession.demo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

    boolean existsByEmail(String email);

    Optional<Person> findByEmail(String email);

    boolean existsByIdAndActiveIsTrue(Long id);
}
