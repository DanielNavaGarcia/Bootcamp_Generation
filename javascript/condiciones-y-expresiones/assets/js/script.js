/* Operadores */
// + - / * % ()

let operacion = 3 * 5 + (10 - 15);
console.log(operacion);

let operacion2 = 3 - 5 / 2 * 4;
console.log(operacion2);

/* Operadores relacionales */
// <, >, >=, <=, ==, ===, !=, !==
//Boolean true false


console.log(7 < 7);
console.log(7 <= 7);    

let incremento = 5;
incremento += 5;
console.log(incremento);

incremento -= 5;
console.log(incremento);

incremento *=5;
console.log(incremento);

incremento /=5;
console.log(incremento);

let sumar = 0;
console.log(sumar + " Linea 32");
sumar ++;
console.log(sumar + " Linea 43");
sumar ++; 
console.log(sumar);
sumar --;
sumar --;
console.log(sumar);

for (let i = 0; i < 10; i++) {
/* codigo */  
}
/* ++variable = preincremento */
//Primero modifica el valor y ya despues hace uso de la variable
/* variable++ = posincremento */
//Usando la variable y despues hace el incremento
let num = 5;
console.log("preincremento: " + ++num);

let num2 = 5;
console.log("posincremento: " + num++);
console.log(num2);