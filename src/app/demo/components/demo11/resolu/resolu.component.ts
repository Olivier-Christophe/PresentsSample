import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolu',
  templateUrl: './resolu.component.html',
  styleUrls: ['./resolu.component.scss']
})
export class ResoluComponent implements OnInit {

  solution: string = 'checked :';
  resultat:number=0
 
  

  constructor(private _lastRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("chargement")
    this.solution= this._lastRoute.snapshot.data['solution']
    this.resultat= this._lastRoute.snapshot.data[this.resultat]
   
  }

}
