import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  chanteurs:string[]=['U2', 'BonJovi','Aerosmith','Wings']
  vues:number[]=[5,12,16,18]

  constructor() { } 

  getList(): string[] { 
    return this.chanteurs
  }
  getVue(): number[] { 
    return this.vues
  }
  

  getOne(index:number): string{
    return this.chanteurs[index]
  }
  getOnevue(index:number): number{
    return this.vues[index]
  }

}
