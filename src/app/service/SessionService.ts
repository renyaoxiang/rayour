import { HttpClient } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private menuList = [];
  constructor(private httpClient: HttpClient) {
  }
  init(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      console.log('session init');
      this.httpClient.get('/api/menu').subscribe((data: any[]) => {
        setTimeout(() => {
          this.menuList = data;
          resolve(true);
        }, 5000);
      }, reject);
    });
  }

}
