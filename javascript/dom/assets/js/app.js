let title = document.getElementById('title');

/* console.log(title.textContent); */
title.textContent = "Este texto esta escrito desde javascript";

let parrafos = document.getElementsByTagName("p");
console.log(parrafos[3].textContent);

/* parrafos[0].textContent="Parrafo escrito desde Javascript"; */

let email = document.getElementById("email");
let password = document.getElementById("password");

function getInformation(){
    console.log(email.value);
    console.log(password.value);
}