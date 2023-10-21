package logica;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejercicio9 {

	public static void main(String[] args) {
		// Diccionario de palabras en ingles
		Map<String, String> diccionario = new HashMap<>();

		// Agregar palabras
		diccionario.put("coche", "car");
		diccionario.put("libro", "book");
		diccionario.put("casa", "house");
		diccionario.put("árbol", "tree");
		diccionario.put("silla", "chair");
		diccionario.put("sol", "sun");
		diccionario.put("luna", "moon");
		diccionario.put("agua", "water");
		diccionario.put("fuego", "fire");
		diccionario.put("puerta", "door");
		diccionario.put("ventana", "window");
		diccionario.put("ordenador", "computer");
		diccionario.put("teléfono", "phone");
		diccionario.put("mesa", "table");
		diccionario.put("piso", "floor");
		diccionario.put("cielo", "sky");
		diccionario.put("tierra", "earth");
		diccionario.put("montaña", "mountain");
		diccionario.put("río", "river");
		diccionario.put("playa", "beach");

		// pedir palabra al usuario
		Scanner escaner = new Scanner(System.in);
		System.out.println("Ingresa una palabra en español");
		String palabra = escaner.nextLine();

		// En caso de que no exista la palabra
		while (!diccionario.containsKey(palabra)) {
			System.out.println("La palabra no se encuentra en el diccinario, por favor ingrese otro palabra");
			palabra = escaner.nextLine();
		}

		escaner.close();

		// Buscar la palabra
		String traduccion = diccionario.get(palabra);
		System.out.println(palabra + " en inglés es: " + traduccion);

	}// cierre del metodo main

}
