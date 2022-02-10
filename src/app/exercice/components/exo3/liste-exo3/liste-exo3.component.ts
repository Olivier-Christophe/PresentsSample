import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Disque } from '../models/disque.models';

@Component({
  selector: 'app-liste-exo3',
  templateUrl: './liste-exo3.component.html',
  styleUrls: ['./liste-exo3.component.scss']
})
export class ListeExo3Component implements OnInit {
  @Input() ListeMusic :Disque[]=[]
  
  @Output() ajouQty:EventEmitter<number>= new EventEmitter<number>()
  @Output() retirerQty:EventEmitter<number>= new EventEmitter<number>()
  @Output() delete:EventEmitter<number>= new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

 addQty(i:number){
   this.ajouQty.emit(i)
 }

remQty(i:number){
  this.retirerQty.emit(i)
}

supprimer(i:number){
  this.delete.emit(i)
}

}
