package metodos;

public class Metodos {
	
	int a, b;
	
	public void sumar() {
		int resultado = a + b;
		System.out.println("El resultado de sumar " + a + " mas " + b + " es " + resultado);
	}
	
	public int sumaConRetorno() {
		return a + b;
	}	
	//Suma (Argumentos)
	
	public double multiplicarConArgumentos(int arg1, double arg2) {
		int c = arg1;
		double d = arg2;
		return c * d;
	}
	
	//Metodo estatico
	public static void imprimirNombre(String nombre) {
		System.out.println("Mi nombre es: " + nombre);
	}
}
