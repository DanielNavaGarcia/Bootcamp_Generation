let $titulo = document.querySelector("#titulo");
let $texto = document.querySelector(".texto");

$texto.id = "texto";

$texto.className = "bg-purple h3"; //primero se agrega la clase, si no, no jala
//$texto.className = "h3"; //reemplaza
$texto.classList.add("text-center"); //agrega junto a clases ya existentes