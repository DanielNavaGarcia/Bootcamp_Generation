package com.generation.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Saludo {

	@GetMapping("/")
	public String saludo() {
		return "holowis aaaaaaaa";
	}
	
	@GetMapping("/saludo")
	public String saludar(@RequestParam(value="nombre", 
	defaultValue = "Java") String nombre) {
		return "hola " + nombre;
	}


}
