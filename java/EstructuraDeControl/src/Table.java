import java.util.Scanner;

public class Table {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num;

		System.out.println("Ingresa cualquier número positivo: ");
		num = sc.nextInt();
		sc.close();

		System.out.println("Tabla de multiplicar de  " + num);

		for (int i = 0; i <= num*10; i += num) {
			System.out.println(i);
		}
	}
}