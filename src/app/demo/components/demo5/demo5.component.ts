import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  verif: boolean=false;
  myProp: string='';
  liste: string[]= ["pomme", "poire", "prune", "cerise", "banane"]

  constructor() { }

  ngOnInit(): void {
  }
  verification(){

    this.verif=!this.verif;
  }

}
