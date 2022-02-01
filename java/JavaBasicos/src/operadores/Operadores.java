package operadores;

public class Operadores {
	@SuppressWarnings("unused")
	public static void main(String[] args) {
		// Operadores Aritmeticos
		// + -
		int a = 10;
		int b = 20;
		int c = a + b;

		System.out.println("El resultado de la suma es: " + c);
		System.out.println("El resultado de la resta es: " + (b - a));
		System.out.println("El resultado de la division es: " + (b / a));
		System.out.println("El resultado de la multiplicacion es: " + (a * b));

		int f = 0, g = 5;
		f += g;

		System.out.println("El valor de f es " + f);

		int h = 15, i = 25;
		String j = "Hola";
		System.out.println(h < i);
		System.out.println(h != i);

		int k = 0, l = 0;
		k++;
		System.out.println(k);
		System.out.println(--l);

		int operacion = (4 + 5) * 6 / 3;
		System.out.println("operacion " + operacion);

		int x = 0, y = 0;
		int operacion2 = ++x + y--;
		System.out.println("operacion2 " + operacion2);

		int edad = 19;
		int valor1 = 0;
		int valor2 = 1;

		int valor = (edad <= 18) ? 2 : 1;

		int resultado = (edad <= 18) ? (valor1 = 1) : (valor2 = 0);
		System.out.println(resultado);
		System.out.println(valor);
	}
}

//	System.out.println()