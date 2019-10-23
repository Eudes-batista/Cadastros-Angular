import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimengGeralModule } from 'src/app/primeng/primeng-geral.module';

import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    PrimengGeralModule,
    PrincipalRoutingModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
