/* 
Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'
*/
const numeros = new Array(1, 4, 7, 9, 19, 15, 46, 27, 40, 123);
console.log(numeros);
let resultados = [];
numeros.forEach(function(elmento){
    let multiplicarCadaElemento = elmento * 2;
    return resultados.push (multiplicarCadaElemento);
})
console.log (resultados);
for (let i = 0; i < resultados.length; i++){
    console.log("Elemento: "+ resultados[i]);
}