package paquete2;

public class ClasePrivada {
	//Atributos
	private String nombre;
	
	@SuppressWarnings("unused")
	private int edad; 
	
	//metodos
	public void setSaludar(String nombreZ) { //Fijar o modificar un valor
		this.nombre = nombreZ;
	}
	
	public String getSaludar() {
		return this.nombre;//Buena practica poner el this
	}
}
