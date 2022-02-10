package com.gatitos;

public class Gato {
	private String nombre;
	private int patas;
	private boolean adoptado;
	
	@Override
	public String toString() {
		return "Gato [nombre=" + nombre + ", patas=" + patas + ", adoptado=" + adoptado + "]";
	}

	//Todos los getters y setters deben ser publicos
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getPatas() {
		return this.patas;
	}

	public void setPatas(int patas) {
		if(patas >= 0 && patas < 5) {
			this.patas = patas;
		}else {
			throw new IllegalArgumentException("say owo");
		}
		
		
	}

	public boolean isAdoptado() {
		return this.adoptado;
	}

	public void setAdoptado(boolean adoptado) {
		this.adoptado = adoptado;
	}
	

	
}
