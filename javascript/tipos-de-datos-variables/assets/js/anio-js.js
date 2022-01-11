const anio = 2022;

function getEdad() {
    let edad = document.getElementById("edad");
    if (isNaN(edad.value)) {
        document.getElementById("respuesta").innerHTML = "Eso no es un numero";
    } else if (edad.value > 110) {
        document.getElementById("respuesta").innerHTML = "No puedes tener esa edad";
    } else {
        anioDeNacimiento = anio - edad.value;
        document.getElementById("respuesta").innerHTML = "Tu naciste en el año de " + anioDeNacimiento;
    }
}

//Ya lo hice mas claro ewe
