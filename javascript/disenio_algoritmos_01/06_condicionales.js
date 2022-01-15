/* 
    Condicionales se utilizan para tomar decisiones en nuestro programa
*/

/* if(condicion){
    codigo
    codigo
    codigo
}

 */
/* const edad = 22;
if (edad >= 18) {
    document.write("Eres mayor de edad, puedes votar");
}else{
    document.write("Eres menor de edad, no puedes votar");
}
*/

let edad = parseInt(prompt ("Ingresa tu edad"));

/* if (edad >= 18) {
    document.write("Eres mayor de edad, puedes votar");
}else{
    document.write("Eres menor de edad, no puedes votar");
} */

//let edad = parseInt(prompt("Ingresa tu edad"));

if(edad >= 18 && edad < 30){
    document.write("Eres un joven");
}else if(edad >= 30 && edad < 60){
    document.write("Eres un adulto");
}else if(edad >= 60){
    document.write("Eres un adulto mayor");
}else{
    document.write("Eres un niñx")
}