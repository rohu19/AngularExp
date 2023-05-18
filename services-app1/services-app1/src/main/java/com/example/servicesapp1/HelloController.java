package com.example.servicesapp1;

import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hello")
@CrossOrigin
public class HelloController {
	@GetMapping
	public ResponseEntity<String> test1() {
		System.out.println("hey Commando");
		return ResponseEntity.ok("this is message to your commander to atack there");
	}

	@GetMapping("/second")
	public ResponseEntity<ResultDTO> test2() {
		System.out.println("i am from test2");
		ResultDTO results = new ResultDTO();
		results.setMessage("this is the order to attack there go ");
		return ResponseEntity.ok(results);
	}

	@GetMapping("/third")
	public ResponseEntity<List<Student>> test3() {
		System.out.println("i am from test3");

		List<Student> student = new ArrayList<>();

		Student std1 = new Student();
		std1.setId(101);
		std1.setFirstName("Rohan");
		std1.setLastName("kumar");
		student.add(std1);

		Student std2 = new Student();
		std2.setId(102);
		std2.setFirstName("Poo");
		std2.setLastName("kumari");
		student.add(std2);

		Student std3 = new Student();
		std3.setId(103);
		std3.setFirstName("Soo");
		std3.setLastName("Baghel");
		student.add(std3);

		return ResponseEntity.ok(student);
	}

	@PostMapping
	public ResponseEntity<Student> save(@RequestBody Student student) {
		System.out.println("from server side App");
		System.out.println(student.getId());
		System.out.println(student.getFirstName());
		System.out.println(student.getLastName());
		return ResponseEntity.ok(student);
	}

	@PostMapping("person") //http://localhost:9090/hello/person
	public ResponseEntity<Person> save1(@RequestBody Person person) {
		System.out.println(person.getFirstName());
		System.out.println(person.getLastName());
		System.out.println(person.getAge());
		System.out.println(person.getAddress().getHouseNo());
		System.out.println(person.getAddress().getStreetName());
		System.out.println(person.getAddress().getCity());

		return ResponseEntity.ok(person);
	}
}
