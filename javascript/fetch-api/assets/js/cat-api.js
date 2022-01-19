 let $btnGato = document.querySelector("#btnGato");
/*
$btnGato.addEventListener("click",()=>{
    console.log("awa d owo");
    fetch("https://api.thecatapi.com/v1/images/search");


}) */


$btnGato.addEventListener('click', () => {
    
    //Solicitud al URL y regresa una promesa
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data, "owo"); //Convertir respuesta a JSON (objeto) y luego regresa otra promesa (otro '.then()') y ya obtenemos los datos como un arreglo con un objeto

            let imagenGatito = document.createElement('img'); //Crear img desde JS
            imagenGatito.src = data[0].url; //Acceder al elemento del arreglo
            document.body.appendChild(imagenGatito);       //Poner en la página

        }) 

        //Solicitud al URL y regresa una promesa
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json()).then(data => {
        console.log(data, "awa"); //Convertir respuesta a JSON (objeto) y luego regresa otra promesa (otro '.then()') y ya obtenemos los datos como un arreglo con un objeto

        //Lo mismo pero con perros (usando el mismo botón)
        
        /*let imagenGatito = document.createElement('img');  //Crear img desde JS
        imagenGatito.src = data.message; //Acceder al elemento del OBJETO
        document.body.appendChild(imagenGatito);       //Poner en la página*/

    })
});