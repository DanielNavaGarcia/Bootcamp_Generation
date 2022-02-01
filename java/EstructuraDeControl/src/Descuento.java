import java.util.Scanner;

// solicitar el total de una compra por consola.
// si la cuenta es de menos de 1000
// sila cuenta es de 1001 - 4999 10%
// si la cuenta es de 5001 a 9999 20%
// si la copra es de 10000 o más 30%

public class Descuento {
	public static void main(String[] args) {
		System.out.println("El total fue de: ");
		Scanner sc = new Scanner(System.in);
		double cuenta = sc.nextInt();
		sc.close();


		
		if (0 >= cuenta) {
			System.out.println("Error");
		}else {
			if (cuenta >= 10000) {
				cuenta = cuenta * 0.7;
			} else if ((5000 <= cuenta) && (9999 >= cuenta)) {
				cuenta = cuenta * 0.8;
			} else if ((1000 <= cuenta) && (4999 >= cuenta)) {
				cuenta = cuenta * 0.9;
			}
			System.out.println("El total fue de: " + cuenta);
		}
		


	}

}
