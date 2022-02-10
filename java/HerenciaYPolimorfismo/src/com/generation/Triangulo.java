package com.generation;

public class Triangulo extends FiguraGeometrica{
	public Triangulo() {
		super("Triangulo");
		System.out.println("Constructor hijo Triangulo");
	}
	//Escribimos arriba del metodo para renombrar
	//El metodo va llamarse igual, pero va hacer algo diferente
	//Polimorfismo:
	//Vamos a hacer una accion, pero vamos hacerla de forma distinta
	
	@Override
	public float calcularArea() {
		return (getAlto() * getLargo())/2;
	}
	
	@Override
	public float calcularPerimetro() {
		return 0;
	}
}
