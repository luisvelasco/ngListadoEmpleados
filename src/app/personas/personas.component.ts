import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas : Persona[] =[];
constructor(private personaService : PersonasService,
  private router:Router  
  ){}

ngOnInit(): void{
//this.personas = this.personaService.personas;
this.personaService.obtenerPersona()
.subscribe(
  (personas: Persona[] = []) => {
    this.personas = personas;
    this.personaService.setPersonas(this.personas);
  }
);
}

agregar(){
this.router.navigate(['personas/agregar']);

}

}
