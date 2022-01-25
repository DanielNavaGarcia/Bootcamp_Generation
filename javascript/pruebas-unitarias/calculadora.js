
const sumar = (numero1, numero2) => {
    return numero1 + numero2;
}

const restar = (numero1, numero2) => {
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) => {
    return numero1 * numero2;
}

const dividir = (numero1, numero2) => {
    return numero1 / numero2;
}

/* export */ const hacerCalculo = (operacionString, numero1, numero2, resultado) => {
    const respuesta = document.createElement("h3");
    respuesta.textContent = `La operacion ${operacionString} entre los numeros ${numero1} y ${numero2} da como resultado ${resultado}`;
    document.body.appendChild(respuesta);
}

module.exports = {
    sumar, restar, multiplicar, dividir, hacerCalculo
}

/* export{
    sumar, restar, multiplicar, dividir, hacerCalculo
} */