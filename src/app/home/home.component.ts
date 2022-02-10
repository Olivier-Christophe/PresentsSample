import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogService } from '../demo/components/log.service';
import { FakeAuthService } from '../shared/services/fake-auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  CnxHome: boolean=false 
  actuelUser: string= ''



  constructor(private _autorisation:LogService) { }
 

  ngOnInit(): void {
    this.CnxHome= this._autorisation.estConnecte;
    this.actuelUser= localStorage.getItem('key')?? ''
  }

}
