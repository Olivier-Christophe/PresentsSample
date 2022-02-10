import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  listeDisques : string[] = ['rock','blues','electro'];
  disque: string= '';


  constructor() { }

  ngOnInit(): void {
  }

  ajouter(){
    this.listeDisques.push(this.disque);
    this.disque='';
  }
  retirer(index:number){
    this.listeDisques.splice(index,1)
  }

}
