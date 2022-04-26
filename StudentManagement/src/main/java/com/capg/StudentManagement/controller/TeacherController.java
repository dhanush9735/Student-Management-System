package com.capg.StudentManagement.controller;

import com.capg.StudentManagement.entity.Teacher;
import com.capg.StudentManagement.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/teacher")
@RestController
public class TeacherController {
    @Autowired
    private TeacherService teacherService;


    @GetMapping("/all")
    public List<Teacher> listTeachers() {
        return teacherService.getAllTeachers();
    }

    @GetMapping("/{t_id}")
    public Teacher fetchTeacherById(@PathVariable Integer t_id) {
        return teacherService.getTeacherById(t_id);
    }

    @PostMapping("/create")
    public Teacher addTeacher(@RequestBody Teacher teacher) {
        return teacherService.addTeacher(teacher);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/edit/{t_id}")
    public Teacher editTeacher(@RequestBody Teacher teacher, @PathVariable Integer t_id) {
        return teacherService.updateTeacher(teacher, t_id);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/delete/{t_id}")
    public void deleteTeacher(@PathVariable Integer t_id) {
        teacherService.deleteTeacher(t_id);
    }
}
