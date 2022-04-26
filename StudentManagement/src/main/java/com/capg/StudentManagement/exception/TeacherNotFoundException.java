package com.capg.StudentManagement.exception;

public class TeacherNotFoundException extends RuntimeException {
    public TeacherNotFoundException(String message) {
        super(message);
    }
}
