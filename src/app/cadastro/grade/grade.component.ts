import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MessageService, ConfirmationService } from 'primeng/api';

import { GradeService } from './../../servicos/grade.service';
import { Grade } from './../../modelo/grade.class';

import { Componente } from 'src/app/components/componente.class';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent extends Componente<Grade> implements OnInit {

  constructor(
    gradeService: GradeService, confirmationService: ConfirmationService, messageService: MessageService,
    private route: ActivatedRoute
  ) {
    super(gradeService, confirmationService, messageService);
  }

  ngOnInit() {
    this.buscarEntidade(this.route, new Grade());
  }

}
