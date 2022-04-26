package com.capg.StudentManagement.repository;

import com.capg.StudentManagement.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Integer> {
}
