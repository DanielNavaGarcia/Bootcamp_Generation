package arreglos;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
	public static void main(String[] args) {
//		Set<String> frutas = new HashSet<String>();
//		frutas.add("mango");
//		frutas.add("sandia");
//		frutas.add("granada");
//		frutas.add("piña");
//		frutas.add("mamey");
//		frutas.add("fresa");
//		
//		for(String fruta: frutas) {
//			System.out.println(fruta);
//		}
//		
//		//LinkedHashSet - vamos a usar este tipo de lista para recuperar datos de una base de datos
		
//		Set<String> frutas = new LinkedHashSet<String>();
//		frutas.add("mango");
//		frutas.add("sandia");
//		frutas.add("granada");
//		frutas.add("piña");
//		frutas.add("mamey");
//		frutas.add("fresa");
//		
//		for(String fruta: frutas) {
//			System.out.println(fruta);
//		}
		
		//ArrayList se respeta el orden
		List<String> pokemones = new ArrayList<String>();
		pokemones.add("Chikorita");
		pokemones.add("Eevee");
		pokemones.add("Dragonite");
		pokemones.add("Charizard");
		pokemones.add("Pikachu");
		pokemones.add("Bulbasaur");
		pokemones.add("Gengar");
		pokemones.add(2, "Dito");
		
		for(String pokemon: pokemones) {
			System.out.println( pokemon);
		}
		System.out.println("/////////////////////System.out.println(pokemones.get(4));/////////////////////");
		System.out.println(pokemones.get(4));
		
		//indexOf, nos va deolver la posicion del elemento
		//y si el elemento no se encuentra nos devuelve -1
		System.out.println("/////////////////////System.out.println(pokemones.indexOf(\"Gengar\"));/////////////////////");

		System.out.println(pokemones.indexOf("Gengar"));
		System.out.println("/////////////////////pokemones.remove(3);/////////////////////");
		pokemones.remove(3);
		for(String pokemon: pokemones) {
			System.out.println(pokemon);
		}
		
		//Set reemplaza el elemento en la posicion especificada
		System.out.println("/////////////////////pokemones.set(0, \"Cyndaquil\");/////////////////////");
		pokemones.set(0, "Cyndaquil");
		pokemones.remove(5);
		for(String pokemon: pokemones) {
			System.out.println(pokemon);
		}
		
		//Es una lista doblemente enlazada 
		List<String> digimones = new LinkedList<String>();
		digimones.add("Aguamon");
		digimones.add("Patamon");
		digimones.add("Angemon");
		digimones.add("Andromon");
		digimones.add("Greymon");
		
		System.out.println("/////////////////////System.out.println(usuarios.get(1123));/////////////////////");
		Map<Integer, String> usuarios = new HashMap<Integer, String>();
		usuarios.put(1, "Carlos Eduardo");
		usuarios.put(2, "Raul");
		usuarios.put(2, "Pedro");//No aceptar claves duplicadas 
		usuarios.put(3, "Ro");
		System.out.println(usuarios.get(2));
		System.out.println(usuarios.keySet());
	}
}