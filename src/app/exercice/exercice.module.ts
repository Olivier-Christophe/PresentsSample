import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceComponent } from './exercice.component';
import { ExerciceRoutingModule } from './exercice-routing.module';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './components/exo1/exo1.component';
import { SharedModule } from '../shared/shared.module';
import { Exo2Component } from './components/exo2/exo2.component';
import { ListeComponent } from './components/exo2/liste/liste.component';
import { Exo3Component } from './components/exo3/exo3.component';
import { ListeExo3Component } from './components/exo3/liste-exo3/liste-exo3.component';



@NgModule({
  declarations: [
    ExerciceComponent,
     Exo1Component,
    Exo2Component,
    ListeComponent,
    Exo3Component,
    ListeExo3Component
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[ExerciceComponent],
 
  bootstrap:[ExerciceComponent]
})
export class ExerciceModule { }
