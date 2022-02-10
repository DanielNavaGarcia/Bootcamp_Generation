package com.generation;

public class Main {
	public static void main(String[] args) {
		Tacos taco1 = new Tacos("Masa azul","Suadero",2,"Mediana",30);
//		taco1.tipoDeTortilla = "Masa azul";
//		taco1.tipoDeGuisado = "Suadero";
//		taco1.numeroDeTortilla = 2;
//		taco1.tamanioDeTortilla = "Mediana";
//		taco1.precio = 30;
		
		
//		Tacos taco2 = new Tacos();
//		taco2.tipoDeTortilla = "Harina";
//		taco2.tipoDeGuisado = "Bistec";
//		taco2.numeroDeTortilla = 1;
//		taco2.tamanioDeTortilla = "Grande";
//		taco2.precio = 42.6f;
//		taco2.subirPrecio(7.4f);
		
		taco1.setPrecio(20);
		
		System.out.println(taco1.getPrecio());
		//System.out.println(taco1.tipoDeGuisado);
		
	}
}
