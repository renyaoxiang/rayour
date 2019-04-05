import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';

const routes: Routes = [
  {
    path: 'foo',
    component: FooComponent
  },
  {
    path: 'foo1',
    loadChildren: 'app/lazy-page/lazy-page.module#LazyPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
