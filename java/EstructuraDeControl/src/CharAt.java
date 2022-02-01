import java.util.Scanner;

public class CharAt {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Introduce una palabra");
		String palabra = sc.nextLine();
		sc.close();

		for (int i = 0; i < palabra.length(); i++) {
			System.out.println(palabra.charAt(i));
		}
	}
}
