import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo5Component } from './components/demo5/demo5.component';
import { SharedModule } from '../shared/shared.module';
import { Demo6Component } from './components/demo6/demo6.component';
import { EnfantComponent } from './components/demo6/enfant/enfant.component';
import { Demo7Component } from './components/demo7/demo7.component';
import { Demo11Component } from './components/demo11/demo11.component';
import { ResoluComponent } from './components/demo11/resolu/resolu.component';
import { Demo12Component } from './components/Log/log.component';
import { Demo8Component } from './components/demo10/demo10.component';
import { Demo10Component } from './components/demo8/demo8.component';





@NgModule({
  declarations: [
    DemoComponent,
    Demo5Component,
    Demo6Component,
    EnfantComponent,
 
    Demo7Component,
    Demo11Component,
    ResoluComponent,
    Demo12Component,
    Demo8Component,
    Demo10Component


   
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    SharedModule,ReactiveFormsModule

  ],
  bootstrap:[DemoComponent],
  providers:[]
})
export class DemoModule { }
