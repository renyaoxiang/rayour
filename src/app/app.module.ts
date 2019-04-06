import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooComponent } from './foo/foo.component';
import { DataResolver } from './guard/DataResolver';
import { CanActiveChildGuard } from './guard/CanActiveChildGuard';
import { SessionService } from './service/SessionService';
import { APP_TOKENS } from './token/tokens';

@NgModule({
  declarations: [
    AppComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [SessionService, ...APP_TOKENS],
  bootstrap: [AppComponent]
})
export class AppModule { }
