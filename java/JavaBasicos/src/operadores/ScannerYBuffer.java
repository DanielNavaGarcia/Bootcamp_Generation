package operadores;

import java.util.Scanner;

public class ScannerYBuffer {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Introduce un numero");
		int numero = sc.nextInt();
		
		sc.nextLine();
		
		System.out.println("Introduce una palabra");
		String nombre = sc.nextLine();
		
		sc.close();
		
		System.out.println("Nombre: " + nombre + " | Numero: " + numero);
	}
}
