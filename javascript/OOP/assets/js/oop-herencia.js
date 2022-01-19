class Pokemon {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //metodos 
    atacar(){
        return console.log(`${this.nombre} esta atacando`);
    }
}

class Pikachu extends Pokemon{
    constructor(nombre,tipo,edad){
        super(nombre, tipo);
        this.edad = edad;
    }

    evolucionar(){
        return console.log(`${this.nombre} esta evolucionando.`);
    }
}

class Electrico extends Pikachu{
    constructor(nombre, tipo, edad, color){
        super(nombre, tipo, edad);
        this.color = color;
    }
}

const Electrico1 = new Electrico("Panchito", "Electrico", 5, "Amarillo");
console.log("Electrico1",Electrico1);


const Pikachu1 = new Pikachu("Pedro", "Electrico");
console.log("Pikachu1",Pikachu1);
console.log("Pikachu1",typeof(Pikachu1));

Pikachu1.atacar();
Pikachu1.evolucionar();


const Pokemon1 = new Pokemon("Charmander", "Fuego");
console.log("Pokemon1",Pokemon1);
console.log("Pokemon1",typeof(Pokemon1));

Pokemon1.atacar();
//Pokemon1.evolucionar(); este ya no se puede
