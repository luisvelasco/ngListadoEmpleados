import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { FormularioComponent } from './personas/formulario/formulario.component';

// con router normal 
/* const routes : Routes = [{path:'',component: PersonasComponent},
                        {path:'personas',component: PersonasComponent},
                        {path:'personas/agregar',component: FormularioComponent},
                        {path:'personas/:id',component: FormularioComponent},

] */

// con router children

const routes: Routes = [{ path: '', component: PersonasComponent },
{
  path: 'personas', component: PersonasComponent, children: [
    { path: 'agregar', component: FormularioComponent },
    { path: ':id', component: FormularioComponent },
  ]
}
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)],exports:[RouterModule]
})
export class AppRoutingModule { }
