var getCupon = () => {
    if (isNaN(document.getElementById("precio").value)) {
        document.getElementById("respuesta").innerHTML = `Error de precio`;
    } else {
        let precio = parseInt(document.getElementById("precio").value);
        let cupon = document.getElementById("cupon").value;
        switch (cupon) {
            case "Bronce":
                total = precio * 0.95;                
                break;
            case "Plata":
                total = precio * 0.90;                
                break;
            case "Oro":
                total = precio * 0.80;
                break;
            case "Platino":
                total = precio * 0.75;
                break;
            default:
                document.getElementById("respuesta").innerHTML = `Cupón no valido`;
                break;
        }  
        if (total !== undefined){
            document.getElementById("respuesta").innerHTML = `Total ${total}`;
            total = undefined;
        }        
    }    
}
let total;