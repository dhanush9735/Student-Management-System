package com.capg.StudentManagement.repository;

import com.capg.StudentManagement.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
