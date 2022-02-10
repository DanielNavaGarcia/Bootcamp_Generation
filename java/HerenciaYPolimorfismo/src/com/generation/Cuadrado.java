package com.generation;

public class Cuadrado extends FiguraGeometrica{
	
	//Herencia, partimos de lo general a lo particular
	//Debe ser la primera linea del constructor
	public Cuadrado() {
		//Tiene que ser la primera linea si o si el super
		super("Cuadrado");
		System.out.println("Constructor hijo Cuadrado");
	}
	
	@Override
	public float calcularArea() {
		return getAlto() * getLargo();
	}
	
	@Override
	public float calcularPerimetro() {
		return (getAlto() + getLargo())*2;
	}

}
