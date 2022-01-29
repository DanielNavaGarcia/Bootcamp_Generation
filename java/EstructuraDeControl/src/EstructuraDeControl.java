import java.util.Scanner;

public class EstructuraDeControl {
	//Estructuras de control de flujo
	//Nos sirve para la toma de decisiones
	
	//Estructuras de control de flujo nos sirven para cambiar el flujo de nuestro programa evaluando una condicion y a partir de la evaluacion se realiza una accion u otra
	public static void main(String[] args) {
		System.out.println("Introduce tu edad");
		Scanner scanner = new Scanner(System.in);
		int edad = scanner.nextInt();
		
		if(edad >= 18) {
			System.out.println("Eres mayor de edad");
		}else {
			System.out.println("Eres menor de edad");
		}
	}
	
	
}
