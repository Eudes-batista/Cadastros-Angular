import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PrimengGeralModule } from 'src/app/primeng/primeng-geral.module';
import { TipoFreteRoutingModule } from './tipo-frete-routing.module';
import { TipoFreteComponent } from './tipo-frete.component';

@NgModule({
  declarations: [
    TipoFreteComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimengGeralModule,
    TipoFreteRoutingModule
  ]
})
export class TipoFreteModule { }
