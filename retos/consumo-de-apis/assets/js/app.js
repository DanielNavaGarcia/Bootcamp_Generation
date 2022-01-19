/* 

por cada elemento ,va traer una carta
titulo y url
*/


let imagenJson = [];

let recuperarDatos = () => {
    //Solicitud al URL y regresa una promesa
    fetch('https://jsonplaceholder.typicode.com/posts/1/photos')
        .then((response) => response.json())
        .then((json) => {
            for (let i = 0; i < 50; i++) {
                imagenJson.push(json[i]);
            }
            console.log(imagenJson[0].title);
            for(let i=0; i < imagenJson.length; i++){
                let imagenG = document.createElement('img'); 
                let textG = document.createElement('p');
                imagenG.src = imagenJson[i].url;
                textG.innerText = imagenJson[i].title;
                document.body.appendChild(imagenG);
                document.body.appendChild(textG);
            }
        });
}

recuperarDatos(imagenJson);