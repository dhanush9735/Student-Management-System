package com.capg.StudentManagement.controller;

import com.capg.StudentManagement.entity.Student;
import com.capg.StudentManagement.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/student")
@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;


    @GetMapping("/all")
    public List<Student> listStudents() {
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("/add")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    @PutMapping("/edit/{id}")
    public Student editStudent(@RequestBody Student student,@PathVariable Long id) {
        return studentService.updateStudent(student, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStudent(@PathVariable Long id) {
        studentService.deleteStudent(id);
    }
}
