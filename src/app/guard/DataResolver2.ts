import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataResolverMain implements Resolve<any>{
  constructor(private httpClient: HttpClient) {
    console.log('init data dataResolverMain');
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(state.url, 'dataResolverMain==================');
    return this.httpClient.get('/api/menu');
  }

}
