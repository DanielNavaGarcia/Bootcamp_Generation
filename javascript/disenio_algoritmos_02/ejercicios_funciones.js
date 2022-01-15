let subTotal = parseInt(prompt("Ingrese el pago"));
function cajaRegistradora(){
    if(subTotal < 100){
        subTotal *= 0.9;
    }else if (subTotal >= 100&& subTotal < 200){
        subTotal *= 0.8;    
    }else{
        subTotal *= 0.7;       
    }
    return subTotal;
}
let precioFinal = cajaRegistradora(subTotal);
document.write("<h1>"+ precioFinal +"</h1>");



/* 
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)
 */
