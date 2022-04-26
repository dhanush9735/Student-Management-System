package com.capg.StudentManagement.service;

import com.capg.StudentManagement.entity.Teacher;
import com.capg.StudentManagement.exception.TeacherNotFoundException;
import com.capg.StudentManagement.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }
    public Teacher getTeacherById(Integer t_id) {
        Optional<Teacher> optional = teacherRepository.findById(t_id);
        if(optional.isPresent()) {
            return  optional.get();

        }
        else {
            throw new TeacherNotFoundException("No teacher found with id " + t_id);
        }
    }

    public Teacher addTeacher(Teacher teacher) {
        return teacherRepository.save(teacher);
    }
    public Teacher updateTeacher(Teacher newTeacher, Integer t_id) {
        return teacherRepository.findById(t_id)
                .map(teacher -> {
                    teacher.setFirstname(newTeacher.getFirstname());
                    teacher.setLastname(newTeacher.getLastname());
                    teacher.setEmail(newTeacher.getEmail());
                    teacher.setSalary(newTeacher.getSalary());
                    teacher.setAttendance(newTeacher.getAttendance());
                    teacher.setSubject(newTeacher.getSubject());
                    return teacherRepository.save(teacher);
                })
                .orElseGet(() -> {
                    newTeacher.setT_id(t_id);
                    return teacherRepository.save(newTeacher);
                });
    }
    public void deleteTeacher(Integer t_id) {
        Optional<Teacher> optionalTeacher = teacherRepository.findById(t_id);
        if(optionalTeacher.isPresent()) {
            teacherRepository.deleteById(t_id);
        }
        else {
            throw new TeacherNotFoundException("No Teacher to delete with id " + t_id);
        }
    }
}
