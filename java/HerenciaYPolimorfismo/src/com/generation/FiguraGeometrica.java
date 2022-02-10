package com.generation;

public abstract class FiguraGeometrica {
	//Clases abstractas
	//La clase abstracta no pueden crear objetos 
	//Clases que pueden o no contener metodos abstractos
	//Metodo abstracto es un metodo que te dice que hacer
	//Pero no te dice como hacerlo
	//Se utilizan para heredar en otra parte

	private String nombre;
	private float alto;
	private float largo;
	
	//Si no implementamos estos metodos, no nos funciona
	public abstract float calcularArea(); 
	
	public abstract float calcularPerimetro(); 
	
	//Constructor 
	//Sirven para inicializar los objetos 
	//Se utilizan para crear nuevos objetos
	//Se llama al objeto y el constructor "construye xd"
	//Iniciarliza valores
	//Constructor son las distintas formas para crear un objeto
	public FiguraGeometrica(String nombre) {
		this.nombre = nombre;
		System.out.println("Constructor padre");
	}
	
	//El polimorfismo lo que nos permite es camibar el comportamiento de los metodos
	

	@Override
	public String toString() {
		return "FiguraGeometrica [nombre=" + nombre + ", alto=" + alto + ", largo=" + largo + "]";
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public float getAlto() {
		return alto;
	}

	public void setAlto(float alto) {
		this.alto = alto;
	}

	public float getLargo() {
		return largo;
	}

	public void setLargo(float largo) {
		this.largo = largo;
	}
	
}
