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

}