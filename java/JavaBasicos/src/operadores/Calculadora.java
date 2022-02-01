package operadores;

import java.util.Scanner;

public class Calculadora {
	public static void main(String[] args) {
		/*
		 * Pedir al usuario 2 números por consola y preguntarle que desea realizar 1)
		 * Suma 2) Resta 3) División 4) Multiplicación
		 * 
		 * y despues imprimir el resultado
		 */
		double[] numero = new double[2];
		double resultado = 0;
		boolean exito = false;
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Introduce 2 numeros");
		for (int i = 0; i < 2; i++) {
			numero[i] = sc.nextDouble();
		}
		sc.nextLine();
		System.out.println("Introduce la operacion (suma, resta, division, multiplicacion)");
		String operacion = sc.nextLine();

		sc.close();		
		
		switch (operacion.toLowerCase()) {
		case "suma":
			resultado = numero[0] + numero[1];
			operacion = " + ";
			exito = true;
			break;
		case "resta":
			resultado = numero[0] - numero[1];
			operacion = " - ";
			exito = true;
			break;
		case "division":
			if(numero[1] != 0) {
				resultado = numero[0] / numero[1];
				operacion = " / ";
				exito = true;
			}else {
				exito = false;
			}
			break;
		case "multiplicacion":
			resultado = numero[0] * numero[1];
			operacion = " * ";
			exito = true;
			break;
		default:
			System.out.println("khe");
			exito = false;
			break;
		}
		if (exito == true) {
			System.out.println(numero[0] + operacion + numero[1] + " = "+ resultado);
		}else if (exito == false){
			System.out.println("Error");
		}
		
	}
}
