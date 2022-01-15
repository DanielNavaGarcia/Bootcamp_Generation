
/* 
Coleccion de elementos
Tienen metodos o funciones que nos pemiten ordenar o 
manipular los datos almacenados
*/


//ejemplo
const conjuntoDeLetras = ["a", "b", "c", "d"];

//manera 1
const arreglo1 = [1, "hola", true];
console.log ("manera 1: " + arreglo1);

//manera 2
const arreglos2 = Array.of(1, "hola", true);
console.log("manera 2: " + arreglos2);

//maner 3
const arreglo3 = new Array (1, "hola", conjuntoDeLetras);
console.log("manera 3: " + arreglo3);

//Manera de acceder a un elemento especifico
const frutas = ['manzana', 'naranjas', 'uvas', 'sandias', ["a","b","c","d","e",["A","B","C","D"]]];
console.log(frutas[1]);
console.log(frutas[4][5]);
console.log(frutas[4][5][2]);
console.log(frutas);

//como saber la longitud del arreglo
const letras = ["A","B","C","D","E","F","G"];
console.log("La longitud del arreglo: " + letras.length);

//push = añade un elemento al final de nuestro arreglo
letras.push("E");
console.log("push: " + letras);

//pop = elimina el ultimo elemento
letras.pop();
console.log("pop: " + letras);

//unshift = agrega un elemento al inicio
letras.unshift("Z");
console.log("unshift: " + letras);

//shift = elimina un elemento al inicio
letras.shift();
console.log("shift: " + letras);

