let $titulo = document.querySelector("#titulo");
let $mensaje = document.querySelector("#mensaje");
let $btnMensaje = document.querySelector("#btnMensaje");
let $spanError = document.querySelector("span")

$btnMensaje.addEventListener("click", () =>{
    console.log("No me presiones")
})

$mensaje.addEventListener("keydown", (e) => {
    console.log(e.target.value);
    
    if(e.target.value.length < 3){
        console.log("say owo");
        $spanError.classList.remove("hide");
        $spanError.classList.add("error");
    }else{
        $spanError.classList.add("hide");
        $spanError.classList.remove("error");
    }
});





//$mensaje.addEventListener("keydown", mostrarConsole);

function mostrarConsole(){
    console.log("Escribiste algo");
}

