package paquete2;

import paquete1.ClaseDefault;
import paquete1.ClaseProtected;
import paquete2.ClasePrivada;

public class Main extends paquete1.ClaseProtected{
	public static void main(String[] args) {
		ClaseDefault prueba = new ClaseDefault();
		//prueba.mostrar();
		
		ClasePrivada privada = new ClasePrivada();
		//privada.edad = 30;
		//privada.saludar("Juan");
		privada.setSaludar("Juan");
		
		System.out.println(privada.getSaludar()); //Asi si lo podemos imprimir
		//System.out.println(privada.nombre); //Asi no lo podemos imprimir
		
		Main protegido = new Main();
		protegido.setEdad(18);
	}

}
