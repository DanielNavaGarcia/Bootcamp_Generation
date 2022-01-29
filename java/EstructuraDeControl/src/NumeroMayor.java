import java.util.Scanner;
import java.util.Arrays;

public class NumeroMayor {
	public static void main(String[] args) {
		/*
		 * Pedir 3 números al usuario y mostrar un mensaje con el número mayor
		 */

		int cantidadDeNumeros = 3;
		int[] numeros = new int[cantidadDeNumeros];
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Inserte los " + cantidadDeNumeros + " numeros");

		for (int i = 0; i < cantidadDeNumeros; i++) {
			numeros[i] = sc.nextInt();
		}
		System.out.println(Arrays.toString(numeros));

		int numeroMasGrande = numeros[0]; //El numero mas grande hasta el indice 0, es el propio indice 0
		for (int i = 1; i < cantidadDeNumeros; i++) { //Evitamos evaluar el primer numero
			int numeroEvaluar = numeros[i];
			if (numeroEvaluar > numeroMasGrande) {
				System.out.println(numeroMasGrande + " < " + numeroEvaluar);
				numeroMasGrande = numeroEvaluar; // Iba al reves
			}
		}
		System.out.println("El numero mas grande del arreglo fue: " + numeroMasGrande);

	}
}
