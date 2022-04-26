package com.capg.StudentManagement.service;

import com.capg.StudentManagement.entity.Student;
import com.capg.StudentManagement.exception.StudentNotFoundException;
import com.capg.StudentManagement.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;


    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student getStudentById(Long id) {
        Optional<Student> optional = studentRepository.findById(id);
        if(optional.isPresent()) {
            return  optional.get();

        }
        else {
            throw new StudentNotFoundException("No student found with id " + id);
        }
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Student newStudent, Long id) {
        return studentRepository.findById(id)
                .map(student -> {
                    student.setFirstname(newStudent.getFirstname());
                    student.setLastname(newStudent.getLastname());
                    student.setEmail(newStudent.getEmail());
                    student.setAttendance(newStudent.getAttendance());
                    student.setFee(newStudent.getFee());
//                    student.setMarks(newStudent.getMarks());
                    return studentRepository.save(student);
                })
                .orElseGet(() -> {
                    newStudent.setId(id);
                    return studentRepository.save(newStudent);
                });
    }

    public void deleteStudent(Long id) {

        Optional<Student> optionalStudent = studentRepository.findById(id);
        if(optionalStudent.isPresent()) {
            studentRepository.deleteById(id);
        }
        else {
            throw new StudentNotFoundException("No student to delete with id " + id);
        }
    }
}
