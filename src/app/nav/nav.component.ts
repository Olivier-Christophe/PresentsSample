import { Component, OnInit } from '@angular/core';
import { LogService } from '../demo/components/log.service';
import { Link } from '../shared/models/link.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

//observable
userName :string=''
constructor(private _session:LogService){}

  listelien: Link[] = []

  

  ngOnInit(): void {
    this._session.keySubject.subscribe((x:string) =>this.userName=x  )

    
    this.listelien = [
      { url: 'home', title: 'Home' },
      { url: 'about', title: 'About' },
      {
        title: 'Menu', children: [
   
          
          { url: 'demo/demo5', title: 'News' },
          { url: 'demo/demo6', title: 'Streaming '},
          { url: 'demo/demo8', title: 'Contacts'},
          { url: 'demo/demo10', title: 'Découvertes'},
         
          { url: 'demo/log', title: 'Login '},
      


        ]  
      },
      {
        title: 'Listes', children: [
       
          { url: 'exercice/exo2', title: 'à suivre' },
       


        ]
      }]
  }
 toggleVisible(index : number){
   this.listelien[index].isChildrenVisible = !this.listelien[index].isChildrenVisible
 }






}
