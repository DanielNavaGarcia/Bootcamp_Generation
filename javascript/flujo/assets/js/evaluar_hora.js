var getHora = () => {
    if(isNaN(document.getElementById("hora").value)){
        document.getElementById("respuesta").innerHTML = `Eso no es un numero`;  
    }else{
        let hora = parseInt(document.getElementById("hora").value);
        if(hora >= 6 && hora <= 11){
            document.getElementById("respuesta").innerHTML = `Buenos dias`;
        }else if(hora >= 12 && hora <= 18){
            document.getElementById("respuesta").innerHTML = `Buenas tardes`;
        }else if(hora >= 19 && hora <= 23){
            document.getElementById("respuesta").innerHTML = `Buenas noches`;
        }else if(hora >= 0 && hora <= 5){
            document.getElementById("respuesta").innerHTML = `Deje dormir`;
        }
    }
}