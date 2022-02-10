import { Injectable } from '@angular/core';
import { Disque } from '../models/disque.models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  shoppingList: Disque[] =[]

  constructor() { }

  ajout(auteur:string){
    let i = this.shoppingList.findIndex((x)=> x.auteur == auteur)
    if (i>-1)
    this.addQty(i)
    else this.shoppingList.push({auteur:auteur,qty:1})
  }
  supprimer(i:number){
    this.shoppingList.splice(i,1)
  }
  addQty(i:number){
    this.shoppingList[i].qty++
  }
  removeQty(i:number){
    if(this.shoppingList[i].qty>1){
      this.shoppingList[i].qty--}
      else(this.supprimer(i))
    }

  }

