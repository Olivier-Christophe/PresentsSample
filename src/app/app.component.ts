import { Component } from '@angular/core';
import { LogService } from './demo/components/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1st techno';
  actuelUser: string= ""
  localstorageUser: string="";


  constructor(private _session : LogService) { }


  login(){
    this._session.login();
    this.actuelUser=sessionStorage.getItem('key')?? ""
    this.localstorageUser=localStorage.getItem('key')??  ""
  }
  logout(){
    this._session.logout()
    this.actuelUser= sessionStorage.getItem('key')??''
    this.localstorageUser=localStorage.getItem('key')?? ''
  }
}



export class autreComponent{

}
