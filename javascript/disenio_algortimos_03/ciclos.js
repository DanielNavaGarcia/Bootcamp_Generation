/* 
Ciclos - Bucles - Loops

while
do while
for
*/

//while
/* 
let condicion = 1; -valor inicial
while(condition){
    tu codigo
}
*/

let condicion = 1;

while(condicion <= 10){
    console.log("While " + condicion);
    //condicion = condicion + 1;
    condicion++;
} 
//Equivalencias num++ -> num = num + 1

//do while

let numero = 11;
do{
    console.log("Do while " + numero);
    numero++;
}while(numero <= 10);

//for
/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */

for(var i = 1; i <= 10; i++){
    console.log("hola");
}

const comidas = ["Pozole", "Tacos", "Tamales", "Tortas"];

for (let i = 0; i <= comidas.length; i++){
    console.log("Repetido" + comidas);
}

for (let i = 0; i < comidas.length; i++){
    console.log("Elemento: "+ comidas[i]);
}