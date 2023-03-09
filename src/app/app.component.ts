import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista-Persona-100Real';

personas : Persona[] = [
  new Persona('luis','velasco'),new Persona('zoe','velasco'),new Persona('juan','perez')
];

personaAgregada(persona : Persona){
  this.personas.push(persona);
}

}
