package operadores;

public class Ciclos {
	public static void main(String[] args) {

//		int control = 3;
//		while (control < 3) {
//			System.out.println("Control = " + control);
//			control++;
//		}

//		int control = 3;
//		do {
//			System.out.println("Control = " + control);
//			control++;
//		} while (control < 3);
		
//		int control = 0;
//		while (control < 3) {
//			System.out.println("Control while = " + control);
//			control++;
//		}
//		
//		for(int i = 0; i < 3; i++) {
//			System.out.println("Control for = " + i);
//		}
		
		for(int i = 0; i < 10; i++) {
			if(i % 2 == 0) {
				continue;// Permite saltarnos una ejecucion del ciclo 
			}
			System.out.println("Control continue = " + i);
		}
		
	}
}
