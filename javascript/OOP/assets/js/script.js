//Una clase siempre tiene que empezar con una letra en mayuscula

class Animal{
    nombre = "desconocido";     //En javascript no es necesario poner estas, las pone sola, no se tiene que declarar el Let
    especie = "desconocido";    
    //En el constructor se pondrían los valores iniciales, si tu necesitas recuperar los valores o cambiarlos necesitas los métodos get y set
    constructor(nombre, especie){ //constructor es una funcion
        //this hace referencia al contexto en que se esta utilizando
        this.nombre = nombre;
        this.especie = especie;
    }
    //getters y setters
    //Solo tienen este proposito leer o modificar el atributo
    //Se tiene que crear 1 para cada atributo
    get getNombre(){//metodo o funcion del tipo getter, solo va leer un atributo
        return this.nombre;
    }

    set setNombre(/* Nombre del atributo que se va modificar */ nombre){
        this.nombre = nombre;
    }
    //Las funciones get y set se consideran funciones especiales, por eso su funcionamiento es diferente.
    //Contraseñas solo tendrian el set, pero no el get
    get getEspecie(){//Todos los objetos que vengan de esta clase animal, van a tener estos metodos o funciones
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie;
    }
    //Todo son publicos, por lo que no son necesarios 

    //metodos == funcion
    presentarse(){ // No se tiene que poner el function
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`;//Aqui adentro si hay que declararla

        return mensaje;
    }

    //Metodo estatico
    //Pertenece solo a la clase y no se hereda a los objetos
    static saludar(){ //Es estatico con el static
        return console.log("Hola, soy un metodo estatico y no me encuentras en un objeto");
    }//Animal1 y Animal2, no heredan esta funcion, solo pertenece a Animal, porque al ser un método estatico no podemos usarlo desde un objeto.
}

Animal.saludar();

//Este objeto va tener la misma sintaxis que la anterior, primera letra en amyuscula 
const Animal1 = new Animal("Scooby", "Perro","awa");   //Creamos un objeto
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log("console.log(Animal1.nombre);", Animal1.nombre);
Animal1.nombre = "Scrappy"; //Esto lo hace solito sin la funcion cambiar nombre o presentarse, notacion de punto paracambiar el valor
console.log("Animal1.nombre =", Animal1.nombre);
console.log(Animal1);

document.write(Animal1.cambiarNombre("Odi")); //Metodo para cambiar el valor

console.log("console.log(Animal1.getNombre)",Animal1.getNombre);//No lleva parentesis
Animal1.setNombre = "Manchas";
console.log("Animal1.setNombre =", Animal1.getNombre);

//Getters y Setters
//get = obtener el valor de un atributo
//set = fijar o cambiar el valor de un atributo



