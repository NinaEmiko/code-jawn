package com.codejawn.repository.java;

import com.codejawn.model.java.JavaLT;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JavaLTRepository extends JpaRepository<JavaLT, Long> {
}
