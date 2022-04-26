package com.capg.StudentManagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int t_id;
    private  String firstname;
    private String lastname;
    private String email;
    private int attendance;
    private double salary;
    private String subject;
    public Teacher() {

    }

    public Teacher(int t_id, String firstname, String lastname, String email, int attendance, double salary, String subject) {
        this.t_id = t_id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.attendance = attendance;
        this.salary = salary;
        this.subject = subject;
    }

    public int getT_id() {
        return t_id;
    }

    public void setT_id(int t_id) {
        this.t_id = t_id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstName) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public int getAttendance() {
        return attendance;
    }

    public void setAttendance(int attendance) {
        this.attendance = attendance;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "t_id=" + t_id +
                ", firstname='" + firstname + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", attendance=" + attendance +
                ", salary=" + salary +
                ", subject='" + subject + '\'' +
                '}';
    }
}
