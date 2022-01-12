let miVariable = 10;

let edad = 18;
let tienesINE = true;

if (edad >= 18 || tienesINE == true) {
    document.getElementById("respuesta").innerHTML = `Puedes entrar`;
} else {
    document.getElementById("respuesta").innerHTML = `No puedes entrar`;
}


//Operador ternario
/*
(Condicion a evaluar) ? se ejecuta si es veradero : se ejecuta si es falso
*/

let edad1 = 17;
(edad1 >= 18) ? console.log("Mayor de edad") : console.log("Menor de edad");

let pregunta = (edad1 >= 18)
    ? "Mayor de edad"
    : "Menor de edad";

console.log(pregunta);


let preguntaEdad = `Tengo ${edad1} años y soy ${edad1 >= 18 ? "Mayor" : "Menor"} de edad`;
console.log(preguntaEdad)


//Switch - Case
/*
switch (variable a evaluar){
    case valor:
        - codigo a ejecutar -
    break;
    case valor:
        - codigo a ejecutar -
    break;
    default:
        - codigo a ejecutar si sale de las opciones -
    break;        
}
*/

let dia = 5;

switch (dia) {
    case 0:
        console.log(`Lunes`);
        break;
    case 1:
        console.log(`Martes`);
        break;
    case 2:
        console.log(`Miercoles`);
        break;
    case 3:
        console.log(`Jueves`);
        break;
    case 4:
        console.log(`Viernes`);
        break;
    case 5:
        console.log(`Sabado`);
        break;
    case 6:
        console.log(`Domingo`);
        break;
    default:
        console.log(`No es un dia valido`);
        break;
}

let cuponDescuento;
let descuento;

switch (cuponDescuento) {
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log(`Cupon no valido`);

}
