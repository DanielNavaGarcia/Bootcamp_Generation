package generation;

import java.util.Scanner;

public class NumeroParImpar {
	public static void main(String[] args) {
		//owo
		Scanner sc = new Scanner(System.in);
		int numero = sc.nextInt();	
		sc.close();
		
		
		String resultado = ((numero % 2) != 0) ? "Es impar":"Es par";
		System.out.println(resultado);
	}
}
