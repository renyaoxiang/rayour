import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard2 implements CanActivate {
  constructor() {
    console.log('CanActiveGuard constructor');
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(state.url, 'CanActiveGuard2=================');
    const path = route.pathFromRoot.join('/');
    console.log(path);
    console.log(route.data);
    return true;
  }

}
