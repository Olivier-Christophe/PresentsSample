import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogService } from '../log.service';
import { NbButtonModule } from '@nebular/theme';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class Demo12Component implements OnInit {

  actuelUser: string= ""
  localstorageUser: string="";
  serviceActuelUser: string=''
  mySub:Subscription= new Subscription()
 


  constructor(private _session : LogService) { }

  ngOnInit(): void {
    this.mySub= this._session.keySubject.subscribe(
      (value:string) => {this.serviceActuelUser=value}
    )
  
    this.actuelUser= sessionStorage.getItem('key') ?? ""
    this.localstorageUser= sessionStorage.getItem('key') ?? ""
    this._session.emitKey();
  }

  login(){
    this._session.login();
    this.actuelUser=sessionStorage.getItem('key')?? ""
    this.localstorageUser=localStorage.getItem('key')??  ""
  }
  logout(){
    this._session.logout()
    this.actuelUser= sessionStorage.getItem('key')??''
    this.localstorageUser=localStorage.getItem('key')?? ''

    this.mySub.unsubscribe()
  }

}
