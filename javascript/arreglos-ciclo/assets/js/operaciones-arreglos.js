let numeros = new Array();
numeros = [1, 3, 13, 23, 532, 328, 123, 6865, 812];

numeros.forEach(function (elementoDeNumeros, indice) {
    document.write(`<li>Elemento: ${elementoDeNumeros} - ${indice}</li>`);
});

let numeros2 = numeros.map(function (elemento) { //Crea un arreglo a partir de otro arreglo
    return elemento;
});


////////////includes
document.write(`<br>Elemento existe ${6865}?: ${numeros.includes(6865)}`);
document.write(`<br>Elemento existe ${"hola"}?: ${numeros.includes("hola")}`);

////////////filter
let numerosPares = numeros.filter((elemento) => {
    if (elemento % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
document.write(`<br><br>${numerosPares}`);

let numerosNoPares = numeros.filter((elemento) => {
    return elemento % 2 != 0;
});
document.write(`<br>${numerosNoPares}`);

//Si la fruta tiene la letra i en su nombre
let frutas = ["mango", "uva", "piña", "mandarina", "manzana", "aguacate", "sandia"];
let furtasFiltro = frutas.filter((element) => {
    if (element.includes("i")) {
        return true;
    }
})
document.write(`<br><br>Frutas que tienen la letra i: ${furtasFiltro}`);
//abreviado
let furtasFiltroAbre = frutas.filter((element) => {
    return element.toUpperCase().includes("M");
})
document.write(`<br>Frutas que tienen la letra m: ${furtasFiltroAbre}`);


////////////Sort
otrosNumeros = [6, 7, 4, 3, 8, 2, 5, 1, 9];
document.write(`<br>Numeros originales: ${otrosNumeros}`);

////////////reverse
document.write(`<br>Numeros invertidos: ${otrosNumeros.reverse()}`);
//
document.write(`<br>Numeros ordenados: ${otrosNumeros.sort()}`);
document.write(`<br>Numeros ordenados e invertidos: ${otrosNumeros.sort().reverse()}`);

////////////Find
let frutaEncontrada = frutas.find((elemento)=>{
    return elemento.includes('ma');
});
document.write(`<br>Fruta encontrada: ${frutaEncontrada}`);
