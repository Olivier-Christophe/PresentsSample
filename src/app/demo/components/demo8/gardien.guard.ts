import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeAuthService } from 'src/app/shared/services/fake-auth-service.service';
import { LogService } from '../log.service';

@Injectable({
  providedIn: 'root'
})
export class GardienGuard implements CanActivate {

constructor(private _gardien: LogService,
  private _router: Router) {
  
  
}

  canActivate(
    route: ActivatedRouteSnapshot): boolean {
     if (this._gardien.estConnecte)return true 
     else {this._router.navigate(['demo/log'])
       return false
     }
        
      }

    }
    

