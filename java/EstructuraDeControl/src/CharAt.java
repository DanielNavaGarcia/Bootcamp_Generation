import java.util.Scanner;

public class CharAt {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Introduce una palabra");
		String palabra = sc.nextLine();
		sc.close();

		char c;

		for (int i = 0; i < palabra.length(); i++) {
			c = palabra.charAt(i);
			System.out.println(c);


		}



	}
}
