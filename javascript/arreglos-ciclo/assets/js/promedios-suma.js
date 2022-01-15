let numerosArr = new Array;

let cantidadDeNumeros = 20;
let resultadoSuma = 0;
let resultadoPromedio = 0;

const conseguirNumerosAleatorios = () => {
    for (let i = 0; i < cantidadDeNumeros; i++) {
        let nuevoNumero = Math.round(Math.random() * 200);
        numerosArr.push(nuevoNumero);
    }
}

const sumarNumeros = (ArregloParaSumar) => {
    ArregloParaSumar.forEach(function (elmento) {
        resultadoSuma = resultadoSuma + elmento;
    });
}

const promedioNumeros = (sumatoria, numeroDeElementos) => {
    resultadoPromedio = sumatoria / numeroDeElementos.length;
}

const mostrar = () => {
    document.write(`Los numeros son: ${numerosArr}`);
    document.write(`<br>El total de la suma de los ${numerosArr.length} numeros es: ${resultadoSuma}`);
    document.write(`<br>El promedio de los ${numerosArr.length} numeros es: ${resultadoPromedio}`);
}

conseguirNumerosAleatorios();
sumarNumeros(numerosArr);
promedioNumeros(resultadoSuma, numerosArr);
mostrar();











