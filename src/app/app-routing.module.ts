import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooComponent } from './foo/foo.component';
import { CanActiveChildGuard } from './guard/CanActiveChildGuard';
import { DataResolver as DataResolver2 } from './guard/DataResolver';
import { DataResolver1 } from './guard/DataResolver1';
import { CanActiveGuard } from './guard/CanActiveGuard';
import { DataResolverMain } from './guard/DataResolver2';
import { CanActiveGuard2 } from './guard/CanActiveGuard2';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [CanActiveChildGuard],
    resolve: {
      data: DataResolverMain
    },
    children: [
      {
        path: 'foo1',
        component: FooComponent,
        data: { path: 'foo1' },
        canActivate: [CanActiveGuard],
        resolve: {
          data1: DataResolver1
        },
      },
      {
        path: 'foo2',
        component: FooComponent,
        data: { path: 'foo2' },
        canActivate: [CanActiveGuard2],
        resolve: {
          data2: DataResolver2
        },
      },
      {
        path: 'foo3',
        loadChildren: './lazy-page/lazy-page.module#LazyPageModule'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    urlUpdateStrategy: 'eager'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
