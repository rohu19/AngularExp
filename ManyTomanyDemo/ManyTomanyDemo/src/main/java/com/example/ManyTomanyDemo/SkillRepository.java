package com.example.ManyTomanyDemo;

import org.springframework.data.repository.CrudRepository;

public interface SkillRepository extends CrudRepository<Skill, Integer> {
	public Skill findBySkill(String sk);
}
