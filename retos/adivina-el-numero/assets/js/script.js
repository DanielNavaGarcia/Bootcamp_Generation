let numero = Math.round(Math.random() * 100);
//console.log(numero);

function adivinar() {
    let respuesta = parseInt(document.getElementById("numero").value);
    if (respuesta === numero) {
        document.getElementById("feedback").innerHTML = 
        `Ganaste!`;
    } else if ((numero + 5 >= respuesta) && (numero - 5 <= respuesta)) {
        document.getElementById("feedback").innerHTML = 
        `Calienteeeeeee`;
    } else if ((numero + 10 >= respuesta) && (numero - 10 <= respuesta)) {
        document.getElementById("feedback").innerHTML = 
        `Caliente`;
    }
    else if ((numero + 20 >= respuesta) && (numero - 20 <= respuesta)) {
        document.getElementById("feedback").innerHTML = 
        `Tibio`;
    } else if ((numero + 30 >= respuesta) && (numero - 30 <= respuesta)) {
        document.getElementById("feedback").innerHTML = 
        `Frio`;
    } else {
        document.getElementById("feedback").innerHTML = 
        `Congelado`;
    }
}




