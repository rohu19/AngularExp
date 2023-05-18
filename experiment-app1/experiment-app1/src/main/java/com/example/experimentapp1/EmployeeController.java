package com.example.experimentapp1;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("emp")
@CrossOrigin
public class EmployeeController {
	@PostMapping
	public ResponseEntity<Employee> save(@RequestBody Employee employee) {
		System.out.println("this is rohan Side App");
		System.out.println(employee.getId());
		System.out.println(employee.getFirstName());
		System.out.println(employee.getLastName());
		System.out.println(employee.getAge());
		System.out.println(employee.getSalary());

		return ResponseEntity.ok(employee);
	}
}
