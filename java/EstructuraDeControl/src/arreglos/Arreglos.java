package arreglos;

public class Arreglos {
	@SuppressWarnings("unused")
	public static void main(String[] args) {
		//Primera manera
		int numeros[]; //Se declara la variable
		numeros = new int[4]; //Se instancia el arreglo
		
		//Segunda manera
		String[] nombre = new String[4];
		
		numeros[0] = 10;
		numeros[1] = 20;
		numeros[2] = 100;
		numeros[3] = 200;
		
		System.out.println(numeros[0]);
		System.out.println(numeros[1]);
		System.out.println(numeros);
		
		//Array literal
		String []nombresDeFrutas = new String[] {"Manzana", "Pera", "Uva", "Platano"};
	}
}
