import { PLATFORM_INITIALIZER, APP_INITIALIZER, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { SessionService } from '../service/SessionService';

export function platformInitialized() {
  console.error('platformInitialized');
  return () => new Promise((resolve, reject) => {
    console.error('platformInitialized');
    resolve(true);
  });
}
export function delayBootstrapping(sessionService: SessionService) {
  return () => new Promise((resolve, reject) => {
    console.error('delayBootstrapping');
    sessionService.init().then(resolve, reject).finally(() => {

      console.log(123); });

  });
}

export function appBootstrapped() {
  return () => new Promise((resolve, reject) => {
    console.error('appBootstrapped');
    resolve(true);
  });
}
export class MyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('my interceptor');
    return next.handle(req);
  }

}
export const APP_TOKENS = [

  {
    provide: PLATFORM_INITIALIZER, useFactory: platformInitialized, multi: true
  },
  { provide: APP_INITIALIZER, useFactory: delayBootstrapping, multi: true, deps: [SessionService] },
  { provide: APP_BOOTSTRAP_LISTENER, useFactory: appBootstrapped, multi: true },
  {
    provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true
  }
];
