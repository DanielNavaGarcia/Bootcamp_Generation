import java.util.Arrays;
import java.util.Scanner;

public class Triangulo {
	public static void main(String[] args) {
		int[] angulos = new int[3];
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Inserte los 3 angulos del triangulo");
		for (int i = 0; i < 3; i++) {
			angulos[i] = sc.nextInt();
		}
		System.out.println(Arrays.toString(angulos));
		
		if(((angulos[0] + angulos[1] + angulos[2]) == 180) && (angulos[0] > 0 && angulos[1] > 0 && angulos[2] > 0) ) {
			System.out.println("Si es un triangulo" );
		}else {
			System.out.println("No es un triangulo " );
		}
	}
}
