var getEdad = () => {
    if(isNaN(document.getElementById("edad").value)){
        document.getElementById("respuesta").innerHTML = `Eso no es un numero`;   
        //console.log(`${document.getElementById("edad").value} ${typeof(document.getElementById("edad").value)}`);
    }else{
        let edad = parseInt(document.getElementById("edad").value);
        if (edad > 110) {
            document.getElementById("respuesta").innerHTML = `No puedes tener esa edad`;
        } else {
            anioDeNacimiento = anio - edad;
            document.getElementById("respuesta").innerHTML = `Tu naciste en el año de ${anioDeNacimiento}`;
        }
    }
}

const anio = 2022;

//Ya lo hice mas claro ewe

/*
document.getElementById("respuesta").innerHTML = `${}`;

script.js:7 Uncaught TypeError: Cannot set properties of null (setting 'innerHTML') <-- no tienes el id en el parrafo
*/