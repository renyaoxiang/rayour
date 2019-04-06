import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SessionService } from '../service/SessionService';
@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {
  constructor(private session: SessionService) {
    console.log('CanActiveGuard constructor');
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(state.url, 'CanActiveGuard=================');
    const path = route.pathFromRoot.join('/');
    console.log(path);
    console.log(route.data);
    return true;
  }

}
