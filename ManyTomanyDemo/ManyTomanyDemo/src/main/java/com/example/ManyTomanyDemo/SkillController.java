package com.example.ManyTomanyDemo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("skill")
public class SkillController {

	@Autowired
	private SkillService skillService;

	@PostMapping
	public ResponseEntity<Skill> save(@RequestBody Skill skill) {
		return ResponseEntity.ok(skillService.save(skill));
	}

	@GetMapping
	public ResponseEntity<Iterable<Skill>> list() {
		return ResponseEntity.ok(skillService.list());
	}

	@GetMapping("search/{sk}")
	public ResponseEntity<Skill> search(@PathVariable String sk) {
		return ResponseEntity.ok(skillService.search(sk));
	}

}
