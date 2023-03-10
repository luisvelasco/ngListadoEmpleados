import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingService]
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  

  nombreInput: string ='';
  apellidoInput: string ='';
  
  constructor(private logginService:LoggingService){}

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
   this.logginService.enviarMensajeAConsola("hola dundo :" + persona1.nombre);  
   this.personaCreada.emit(persona1)
  }
  

}
