import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GardienGuard } from './components/demo8/gardien.guard';
import { Demo11Component } from './components/demo11/demo11.component';
import { ObjectResolver } from './components/demo11/object.resolver';
import { ResoluComponent } from './components/demo11/resolu/resolu.component';
import { Demo12Component } from './components/Log/log.component';
import { Demo5Component } from './components/demo5/demo5.component';
import { Demo6Component } from './components/demo6/demo6.component';
import { Demo7Component } from './components/demo7/demo7.component';

import { DemoComponent } from './demo.component';
import { Demo8Component } from './components/demo10/demo10.component';
import { Demo10Component } from './components/demo8/demo8.component';

const routes: Routes = [
  {path:'', component:DemoComponent, children:[
 
    
    {path:'demo5',component:Demo5Component},
    {path:'demo6',component:Demo6Component},
    {path:'demo7',component:Demo7Component},
    {path:'demo10',component:Demo10Component},

    {path:'demo8',canActivate: [GardienGuard], component:Demo8Component},
    {path:'demo11',component:Demo11Component},
    {path:'resolu/:solution', resolve:{solution:ObjectResolver}, component:ResoluComponent},
    {path:'log',component:Demo12Component},
 
 


]} 
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
