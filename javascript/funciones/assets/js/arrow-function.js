/* function sumar(numero1, numero2){
    return numero1 + numero2;
} */

const suma = (numero1, numero2) => { //Antes de utilizarlas, deben estar declaradas 
    return numero1 + numero2;
}

let num1 = parseInt(prompt("Numero 1"));
let num2 = parseInt(prompt("Numero 2"));

let sumaNumeros = suma(num1, num2);

document.getElementById("respuesta").innerHTML = `La suma de ${num1} mas ${num2} es ${sumaNumeros}`;