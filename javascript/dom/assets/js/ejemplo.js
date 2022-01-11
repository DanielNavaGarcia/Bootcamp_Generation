let title = document.getElementsByTagName("h1");
console.log(title[0].textContent);

function cambiarNombre(){
    let nuevoNombre = prompt("Escriba aqui su nuevo nombre");
    console.log(nuevoNombre)
    title[0].textContent = "Hola " + nuevoNombre;
}

/* let title = document.getElementById("title");
console.log(title.textContent);

function cambiarNombre(){
    let nuevoNombre = prompt("Escriba aqui su nuevo nombre");
    console.log(nuevoNombre)
    title.textContent = "Hola " + nuevoNombre;
} */