import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PrimengGeralModule } from 'src/app/primeng/primeng-geral.module';

import { TipoFreteRoutingModule } from './tipo-frete-routing.module';
import { TipoFreteComponent } from './tipo-frete.component';
import { TipoFreteCadastroComponent } from './tipo-frete-cadastro/tipo-frete-cadastro.component';
import { TipoFreteService } from './../../servicos/tipo-frete.service';
import { TipoFreteResolveGuard } from './guarda/tipo-frete-guard';

@NgModule({
  declarations: [
    TipoFreteComponent,
    TipoFreteCadastroComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimengGeralModule,
    TipoFreteRoutingModule
  ],
  providers: [
    TipoFreteService,
    TipoFreteResolveGuard
  ]
})
export class TipoFreteModule { }
