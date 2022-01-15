/* 
let cadena2 = new String("Adios");
console.log(cadena2)

console.log(cadena2.toLocaleLowerCase().includes("a")); //Busca una cadena y devuelve true o false
console.log(cadena2.toLowerCase()); //Minuscula
console.log(cadena2.toUpperCase()); //Mayuscula

let palabra = "Hola mundo";
let arreglo = palabra.split(" ");
console.log(arreglo);

console.log(arreglo.reverse().join(""))

function invertirPalabra(cadena){
    let arreglo = cadena.split(""); //Lo divide
    arreglo.reverse();  //Lo invierte
    let cadenaInvertida = arreglo.join("");
    return console.log(cadenaInvertida);
}

invertirPalabra("Generation");
 */

//let edad = parseInt(document.getElementById("edad").value);

/* function invertirString(){
    let cadena = document.getElementById("string").value;
    return document.getElementById("text").innerHTML = `${cadena.split("").reverse().join("")}`;
} */

function invertirString(){
    return document.getElementById("text").innerHTML = `${document.getElementById("string").value.split("").reverse().join("")}`;
}