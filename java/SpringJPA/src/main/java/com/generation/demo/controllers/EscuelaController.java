package com.generation.demo.controllers;

import java.util.ArrayList;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.generation.demo.models.SalonModel;
import com.generation.demo.services.SalonService;

@RestController
public class EscuelaController {
	private final SalonService salonService;
	public EscuelaController (@Autowired SalonService salonService) {
		this.salonService = salonService;
	}
	
	//mostrar datos de salon
	@GetMapping("/salon")
	public ArrayList<SalonModel> obtenerDato(){
		return salonService.obtenerDatos();
	}
	
	//guardar datos en la tabla salon
	@PostMapping("/salon")
	public SalonModel guardarDato(@RequestBody SalonModel salonModel){
		return salonService.guardarDatos(salonModel);
	}
	
	//Eliminar datos 
	@DeleteMapping(path = "salon/{id}") //localhost:8080/salon/1
	public boolean eliminarDato(@PathVariable("id") Integer Id) {
		return salonService.eliminarDato(Id);
	}

}
