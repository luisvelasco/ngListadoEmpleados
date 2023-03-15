import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Lista-Persona-100Real';

/* personas : Persona[] = [
  new Persona('luis','velasco'),new Persona('zoe','velasco'),new Persona('juan','perez')
]; */

constructor(private personaService : PersonasService){}

personas : Persona[] =[];

ngOnInit(): void{
this.personas = this.personaService.personas;
}





}
