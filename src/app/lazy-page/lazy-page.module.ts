import { NgModule } from "@angular/core";
import { LazyPageComponent } from './lazy-page.component';
import { RouterModule } from '@angular/router';
import { FooComponent } from '../foo/foo.component';

@NgModule({
  declarations: [LazyPageComponent, FooComponent],
  imports: [

    RouterModule.forChild([{
      path: '',
      component: LazyPageComponent,
      children: [

      ]
    }])],
  exports: [LazyPageComponent]
})
export class LazyPageModule {

}

