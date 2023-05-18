package com.example.ManyTomanyDemo;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Person {
	@Id
	private Integer id;
	private String firstName;
	private String lastName;
	private Integer age;
	@ManyToMany
	private Set<Skill> skills = new HashSet<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public void setSkills(Set<Skill> skills) {
		this.skills = skills;
	}

	public Set<Skill> getSkills() {
		return skills;
	}
}
