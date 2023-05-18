package com.example.ManyTomanyDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
	@Autowired
	private PersonRepository personRepository;

	public Person save(Person person) {
		return personRepository.save(person);
	}

	public Iterable<Person> list() {
		return personRepository.findAll();
	}

	public Person search(String firstName) {
		return personRepository.findByFirstName(firstName);
	}

}
