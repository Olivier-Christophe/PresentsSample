import { Component, OnInit } from '@angular/core';
import { FakeAuthService } from 'src/app/shared/services/fake-auth-service.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  IciConnected :boolean=false;


  constructor(private _cnxService:LogService) { }

  ngOnInit(): void {
    this.IciConnected= this._cnxService.estConnecte
  }
  login(){
    this._cnxService.login()
    this.IciConnected=this._cnxService.estConnecte
  }
  logout(){
    this._cnxService.logout()
    this.IciConnected=this._cnxService.estConnecte

  }

}
