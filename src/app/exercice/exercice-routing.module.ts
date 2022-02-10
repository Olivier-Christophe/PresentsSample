import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { Exo3Component } from './components/exo3/exo3.component';
import { ExerciceComponent } from './exercice.component';


const routes: Routes = [
  {path:'', component:ExerciceComponent, children:[
    {path:'exo1',component:Exo1Component},
    {path:'exo2',component:Exo2Component},
    {path:'exo3',component:Exo3Component},

  ]}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
