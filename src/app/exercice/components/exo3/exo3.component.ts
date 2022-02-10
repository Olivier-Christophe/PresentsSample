import { Component, OnInit } from '@angular/core';
import { Disque } from './models/disque.models';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

shoppingListe:Disque[]=[]
music : string = "Jackson"

  constructor(private _service :ShoppingService ) { }

  ngOnInit(): void { 
this.shoppingListe=this._service.shoppingList
  }
ajout(){
  this._service.ajout(this.music)
  this.music="";
}

supprimer(i:number){
  this._service.supprimer(i)
}

addQty(i:number){
  this._service.addQty(i)

}

remQty(i:number){
  this._service.removeQty(i)
}



}
