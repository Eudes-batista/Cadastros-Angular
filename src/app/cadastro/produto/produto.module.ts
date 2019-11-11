import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PrimengGeralModule } from './../../primeng/primeng-geral.module';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Interceptor } from 'src/app/servicos/http-interceptor.module';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoResolveGuard } from './guarda/produto-resolver.guard';
import { ProdutoService } from 'src/app/servicos/produto.service';


@NgModule({
  declarations: [
    ProdutoComponent, ProdutoCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    PrimengGeralModule,
    Interceptor,
    ProdutoRoutingModule
  ],
  providers: [
    ProdutoResolveGuard,
    ProdutoService,
    ConfirmationService,
    MessageService,
  ]
})
export class ProdutoModule { }
