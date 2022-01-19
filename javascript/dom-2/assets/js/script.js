/* let $titulo = document.getElementById("titulo")
titulo.textContent = "Titulo escrito desde JS"; */

/* 
.clase
#id
etiqueta
*/

//let $titulo = document.querySelector(".clase");

let $titulo = document.querySelector("#titulo");
$titulo.textContent = ("Titulo escrito desde JS");

let $parrafo = document.querySelector("p");
console.log($parrafo.textContent);

let $parrafos = document.querySelectorAll("p");
console.log($parrafos[1].textContent);

let subtitulo = document.createElement("h3");
subtitulo.textContent = "Este es im subtitulo desde JS";
//document.body.append(subtitulo)
//document.body.insertAdjacentElement("beforebegin", subtitulo); //Lo pone al mero mero inicio

//document.body.insertAdjacentElement("afterend", subtitulo); //El elemento se inserta dentro de la etiqueta HTML, antes de su primer hijo.
document.body.insertAdjacentElement("beforeend", subtitulo); //El elemento se inserta dentro de la etiqueta HTML, después de su último hijo.




 let $contenido = document.querySelector("#contenido");
 /*
//console.log($contenido.textContent = "<br>"); //No nos permite insertar etiquetas
console.log($contenido.innerHTML = "<br> awa de owo ");
console.log($contenido.outerHTML = "just uwu "); //Va desaparecer el div
 */

/* let contenidoParrafo = document.createElement("p");
contenidoParrafo.textContent = "Contenido de mi parrafo nuevo con appendChild";
$contenido.appendChild(contenidoParrafo); */

