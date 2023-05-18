package com.example.ManyTomanyDemo;

import org.springframework.data.repository.CrudRepository;


public interface PersonRepository extends CrudRepository<Person, Integer> {
	public Person findByFirstName(String firstName);
}
