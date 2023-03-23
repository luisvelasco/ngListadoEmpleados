import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { PersonasService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  titulo = 'Lista-Persona-100Real';

/* personas : Persona[] = [
  new Persona('luis','velasco'),new Persona('zoe','velasco'),new Persona('juan','perez')
]; */





}
