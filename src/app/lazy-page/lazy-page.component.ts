import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-page',
  template: `<div>
    <h2>lazy-page</h2>
    <router-outlet></router-outlet>
  </div>`,
})
export class LazyPageComponent {

}
