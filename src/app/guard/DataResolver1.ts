import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataResolver1 implements Resolve<any>{
  constructor(private httpClient: HttpClient) {
    console.log('init data resolver1');
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state.url, 'dataResolver1==================');
    return this.httpClient.get('/api/menu');
  }

}
