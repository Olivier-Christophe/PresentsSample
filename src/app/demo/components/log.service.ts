import { Injectable } from '@angular/core';
import { Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
 
   estConnecte : boolean =false

  private key: string=''
  keySubject:Subject<string> = new Subject<string>()
  emitKey(){
    this.keySubject.next(this.key)
  }


  constructor() { }

  login(){
    this.key='Oli';
    this.emitKey();
      sessionStorage.setItem('key',this.key)
      localStorage.setItem('key',this.key)
      this.estConnecte  =true;
     
  }

  logout(){
    this.key='';
    this.emitKey();
    sessionStorage.removeItem('key')
    localStorage.removeItem('key')
    this.estConnecte  =false;
  }
}
