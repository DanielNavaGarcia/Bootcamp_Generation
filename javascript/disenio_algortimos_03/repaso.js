/* 
Arreglos
*/

const comidas = ["Pozole", "Quesadillas", "Tacos"];
console.log(comidas);

/* 
lenght
*/
console.log(comidas.length);

/* 
push
pop
unshift
shift
*/
comidas.push("Torta");
console.log(comidas);

comidas.unshift("Refresco");
console.log(comidas);

comidas.forEach(function(el){
    console.log(el);
})

const numeros = [1,4,7,8];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})

/* ejercicio */

const arr = [];

console.log(arr);

function suma(num){
    let sumNum = num + 1;
    return arr.push(sumNum);
}

suma(3);
suma(653);
suma(43);

console.log(arr);