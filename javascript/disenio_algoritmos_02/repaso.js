/* 
Condicionales
if(condicion){
    bloque
}else if({
    bloque 2
}else{
    bloeque 3
}

function nombre(parametros){
    return;
}
nombre(argumentos);
*/
function procesadorDeFrutas(manzanas, naranjas){
    let jugo = "Jugo de " + manzanas + " manzanas" + " y " + naranjas + " naranjas"; 
    return jugo;
}

let jugoDeManzanas = procesadorDeFrutas(4,0);
console.log(jugoDeManzanas);
