import { NgModule } from "@angular/core";
import { LazyPageComponent } from './lazy-page.component';
import { RouterModule } from '@angular/router';
import { FooComponent } from '../foo/foo.component';

@NgModule({
  declarations: [LazyPageComponent],
  imports: [
    RouterModule.forChild([{
      path: '',
      component: LazyPageComponent,
      children: [

      ]
    }])],
})
export class LazyPageModule {

}

