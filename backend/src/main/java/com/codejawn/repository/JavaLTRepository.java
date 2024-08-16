package com.codejawn.repository;

import com.codejawn.model.JavaLT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JavaLTRepository extends JpaRepository<JavaLT, Long> {
}
