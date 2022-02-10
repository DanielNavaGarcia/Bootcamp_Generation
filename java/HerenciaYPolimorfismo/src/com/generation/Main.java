package com.generation;

public class Main {
	// Herencia, cuando una clase hereda de otra, esta tiene
	// acceso a sus atributos y metodos
	public static void main(String[] args) {
		Cuadrado cuadrado1 = new Cuadrado();
		// cuadrado1.setNombre("cuadrado");
		cuadrado1.setAlto(15);
		cuadrado1.setLargo(10);
		System.out.println("El area del " + cuadrado1.getNombre() + " es " + cuadrado1.calcularArea());
		System.out.println("El perimetro del " + cuadrado1.getNombre() + " es " + cuadrado1.calcularPerimetro());

		Triangulo triangulo1 = new Triangulo();
		// triangulo1.setNombre("Triangulo");
		triangulo1.setAlto(15);
		triangulo1.setLargo(10);
		System.out.println("El area del " + triangulo1.getNombre() + " es " + triangulo1.calcularArea());
		System.out.println("El perimetro del " + triangulo1.getNombre() + " es " + triangulo1.calcularPerimetro());
	}
}
