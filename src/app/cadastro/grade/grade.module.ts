import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationService, MessageService } from 'primeng/api';
import { PrimengGeralModule } from './../../primeng/primeng-geral.module';

import { GradeRoutingModule } from './grade-routing.module';
import { GradeComponent } from './grade.component';
import { GradeService } from 'src/app/servicos/grade.service';
import { GradeResolveGuard } from './guarda/grade-resolve.guard';


@NgModule({
  declarations: [
    GradeComponent
  ],
  imports: [
    CommonModule,
    PrimengGeralModule,
    GradeRoutingModule
  ],
  providers: [
    GradeService,
    GradeResolveGuard,
    ConfirmationService,
    MessageService,
  ]
})
export class GradeModule { }
