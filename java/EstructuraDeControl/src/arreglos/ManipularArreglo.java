package arreglos;

public class ManipularArreglo {
	public static void main(String[] args) {
		int numeros[] = new int[] { 1, 6, 45, 53, 80, 102, 145, 326, 450, 892};
		int sumatoria = 0;
		int sumatoriaPar = 0;
		int sumatoriaImpar = 0;
		System.out.println("/////////////////Numeros/////////////////");
		for (int i = 0; i < numeros.length; i++) {
			System.out.print(sumatoria + " + " + numeros[i]);
			sumatoria = sumatoria + numeros[i];
			System.out.println(" = " + sumatoria);
		}
		
		System.out.println("/////////////////Numeros par/////////////////");
		
		for (int i = 0; i < numeros.length; i++) {
			if (numeros[i] %2 == 0) {
				System.out.print(sumatoriaPar + " + " + numeros[i]);
				sumatoriaPar = sumatoriaPar + numeros[i];
				System.out.println(" = " + sumatoriaPar);
			}
		}
		
		System.out.println("/////////////////Numero impar/////////////////");
		
		for (int i = 0; i < numeros.length; i++) {
			if (numeros[i] %2 != 0) {
				System.out.print(sumatoriaImpar + " + " + numeros[i]);
				sumatoriaImpar = sumatoriaImpar + numeros[i];
				System.out.println(" = " + sumatoriaImpar);
			}
		}
	}
}
