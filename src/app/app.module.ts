
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Interceptor } from './servicos/http-interceptor.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengGeralModule } from './primeng/primeng-geral.module';
import { PrincipalModule } from './principal/principal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimengGeralModule,
    PrincipalModule,
    Interceptor,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
