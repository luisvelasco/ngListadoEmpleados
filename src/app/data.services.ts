import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient) {

    }

    cargarPersona() {
        return this.httpClient.get<Persona[]>('https://listado-personas-ed020-default-rtdb.firebaseio.com/datos.json')
    }


    //metodo guardar personas
    guardarPersona(personas: Persona[]) {
        this.httpClient.put('https://listado-personas-ed020-default-rtdb.firebaseio.com/datos.json', personas)
            .subscribe(
                response =>
                    console.log("resultado guardar Persona: " + response),
                error => console.log("Error al guardar Persona: " + error));
    }


    modificarPersona(index:number,persona: Persona){
        let url : string;
        url = 'https://listado-personas-ed020-default-rtdb.firebaseio.com/datos/' + index + '.json'
        this.httpClient.put(url,persona)
            .subscribe(
                response =>  console.log("resultado de modificar Persona: " + response),
                error => console.log("Error al modificar Persona: " + error));

    }

    eliminarPersona(index:number){
        let url : string;
        url = 'https://listado-personas-ed020-default-rtdb.firebaseio.com/datos/' + index + '.json'
        this.httpClient.delete(url)
            .subscribe(
                response =>  console.log("resultado de eliminar Persona: " + response),
                error => console.log("Error al eliminar Persona: " + error));
    }


}