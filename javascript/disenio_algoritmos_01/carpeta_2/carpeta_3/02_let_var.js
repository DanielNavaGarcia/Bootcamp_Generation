/* 
Variable var se utilizaba anteriormente, son variables globales.
Variable let es una variable de contexto, solo vive en un bloque
de codigo.
*/

var numero = 40;
console.log(numero);        //40

if(true){
    var numero =50;
    console.log(numero);    //50
}

console.log(numero)         //50

var texto = "Botcamp Java";
console.log(texto);

if(true) {
    let texto = "Cohoerte 8";
    console.log(texto);
    let numeroMenosFavorito = 49;
}

console.log(texto);
console.log(numeroMenosFavorito);