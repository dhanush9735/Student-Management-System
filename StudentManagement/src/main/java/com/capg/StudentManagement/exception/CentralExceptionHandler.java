package com.capg.StudentManagement.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;


@RestControllerAdvice
public class CentralExceptionHandler {
    @ExceptionHandler(StudentNotFoundException.class)
    public ResponseEntity<String> exceptionHandler(StudentNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);

    }

    @ExceptionHandler(TeacherNotFoundException.class)
    public ResponseEntity<String> teacherExceptionHandler(TeacherNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);

    }
}


