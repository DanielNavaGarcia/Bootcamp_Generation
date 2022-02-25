package org.generation.dependencies_injection.controller;

import org.generation.dependencies_injection.model.Student;
import org.generation.dependencies_injection.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController
{

    private final StudentService studentService;

    public StudentController( @Autowired StudentService studentService )
    {
        this.studentService = studentService;
    }

    @GetMapping( "/student/{id}" )
    Student findById( @PathVariable( "id" ) String id )
    {
        Student student1 = new Student("1",1,"Carlos","Jesus",8);
        Student student2 = new Student("2",3,"Raul","Sanchez",8);
        Student student3 = new Student("3",43,"Rodrigo","Leyva",8);
        studentService.add(student1);
        studentService.add(student2);
        studentService.add(student3);
    	return studentService.findById( id );
    }

}
