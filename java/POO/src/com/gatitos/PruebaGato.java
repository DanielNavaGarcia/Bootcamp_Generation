package com.gatitos;

public class PruebaGato {
	public static void main(String[] args) {
		Gato g = new Gato();
		
		g.setNombre("Salmon");
		g.setPatas(4);
		g.setAdoptado(false);
		
		System.out.println(g.toString());
		
	}
}
