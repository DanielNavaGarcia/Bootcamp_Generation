
const sumar = (numero1, numero2) =>{
    return numero1 + numero2;
}

const restar = (numero1, numero2) =>{
    return numero1 - numero2;
}

const multiplicar = (numero1, numero2) =>{
    return numero1 * numero2;
}

const dividir = (numero1, numero2) =>{
    return numero1 / numero2;
} 

let resultado = 0;

/* export */ const hacerCalculo = (operacionString, numero1, numero2) =>{
    if (operacionString === "sumar"){
        resultado = sumar(numero1,numero2);
    }else if(operacionString === "restar"){
        resultado = restar(numero1,numero2);
    }else if(operacionString === "multiplicar"){
        resultado = multiplicar(numero1,numero2);
    }else if(operacionString === "dividir"){
        resultado = dividir(numero1,numero2);
    }

    const respuesta = document.createElement("h3");
    respuesta.textContent = `La operacion ${operacionString} entre los numeros ${numero1} y ${numero2} da como resultado ${resultado}`;
    document.body.appendChild(respuesta);
}

export{
    hacerCalculo
}