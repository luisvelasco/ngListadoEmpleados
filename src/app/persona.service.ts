import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()

export class PersonasService {

    personas: Persona[] = [
        new Persona('luis', 'velasco'), new Persona('zoe', 'velasco'), new Persona('juan', 'perez')
    ];

    saludar = new EventEmitter<number>();

    constructor(private loggingService: LoggingService) { }


    personaAgregada(persona: Persona) {
        this.loggingService.enviarMensajeAConsola("desde persona services" + persona.nombre);
        this.personas.push(persona);
    }

    encontrarPersona(index: number){
       let persona: Persona = this.personas[index];
       return persona;
    }

    modificarPersona(index: number, persona: Persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;

    }

    eliminarPersona(index: number){
        this.personas.splice(index,1)
    }

}