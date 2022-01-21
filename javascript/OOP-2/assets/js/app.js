class Animalito {
    constructor(nombre,edad,especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.revisado = revisado;
        this.enfermo = false;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.pacientesPendientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }
    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        
        if(paciente.revisado === true){
            this.pacientesRevisados++;
        }else if(paciente.revisado === false){
            this.pacientesPendientes++;
        }
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }

    mostrarLista(){
        for(let i = 0; i < this.listaPacientes.length; i++){
            //CUANDO ES DENTRO DE UN FOR, NO SE PONE return
            document.write(`<li>Nombre: ${this.listaPacientes[i].nombre}, Edad: ${this.listaPacientes[i].edad}, Especie: ${this.listaPacientes[i].especie}, Ya lo reviso un medico? ${this.listaPacientes[i].revisado}</li>`); 
        }
        document.write(`<br>Cantidad de pacientes: ${this.listaPacientes.length} <br>`);
        document.write(`Cantidad de pacientes revisados: ${this.pacientesRevisados} <br>`);
        document.write(`Cantidad de pacientes NO revisados: ${this.pacientesPendientes} <br>`);
    }

    revisarPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            this.pacientesRevisados++;
            this.pacientesPendientes--;   
            document.write(`<br>El paciente ${paciente.nombre} ha sido revisado<br><br>`);
            //document.write(`El paciente ha sido revisado`);
        }else{
            document.write(`<br>El paciente ${paciente.nombre} ya fue revisado<br><br>`);
        }
    }

    modificarPacienteRevisados(){
        this.pacientesRevisados++;
    }
}

const VeteriariaPanchito = new Veterinario();

const Animalito1 = new Animalito("firulais", 5, "perro", false);
const Animalito2 = new Animalito("galleta", 2, "gato", true);
const Animalito3 = new Animalito("michi", 3, "gato", false);

/* Animalito1.saludar();
Animalito2.saludar(); */
//Si no se ha instanciado el objeto, la funcion aun no se ha creado y no existe



VeteriariaPanchito.agregarPaciente(Animalito1);
VeteriariaPanchito.agregarPaciente(Animalito2);
VeteriariaPanchito.agregarPaciente(Animalito3);

console.log(VeteriariaPanchito.listaPacientes);

VeteriariaPanchito.mostrarLista();
VeteriariaPanchito.revisarPaciente(Animalito1);
VeteriariaPanchito.mostrarLista();

//Operador de cortocircuito