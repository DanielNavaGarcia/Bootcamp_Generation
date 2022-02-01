package operadores;

import java.util.Scanner;

public class EstructuraDeControlSwitch {
	/*
	 * switch(condicio_a_evaluar) { case "Valor": //Codigo break; case "n": //Codigo
	 * break; default: //Codigo }
	 */
	public static void main(String[] args) {
		System.out.println("Introduce un dia de la semana: ");
		Scanner scanner = new Scanner(System.in);
		String dia = scanner.nextLine();
		scanner.close();
		
		switch (dia.toLowerCase()) {
		case "lunes":
			System.out.println("lunes");
			break;
		case "martes":
			System.out.println("martes");
			break;
		case "miercoles":
			System.out.println("miercoles");
			break;
		case "jueves":
			System.out.println("jueves");
			break;
		case "viernes":
			System.out.println("viernes");
			break;
		case "sabado":
			System.out.println("sabado");
			break;
		case "domingo":
			System.out.println("domingo");
			break;
		default:
			System.out.println("khe");
			break;
		}
	}

}
