import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from './generic.service';
import { Grade } from './../modelo/grade.class';

@Injectable()
export class GradeService extends GenericService<Grade> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  public getResource(): string {
    return 'grade';
  }
}
