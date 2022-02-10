import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TousdPipe } from './pipe/tousd.pipe';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';
import { TotimePipe } from './pipe/totime.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurlignerDirective } from './directives/surligner.directive';
import { BadRouteComponent } from './components/bad-route/bad-route.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TousdPipe,
    CurrencyConverterPipe,
    TotimePipe,
    SurlignerDirective,
    BadRouteComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,HttpClientModule,
  ],
  exports: [
    TousdPipe,FormsModule,CurrencyConverterPipe , TotimePipe,SurlignerDirective,ReactiveFormsModule,HttpClientModule 
  ]
})
export class SharedModule { }
