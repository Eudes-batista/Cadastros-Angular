import { GradeService } from './../../../servicos/grade.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Grade } from './../../../modelo/grade.class';

@Injectable()
export class GradeResolveGuard implements Resolve<Grade> {

    constructor(private gradeService: GradeService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Grade> | Promise<Grade> | Grade {
        const id = route.params.id;
        return this.gradeService.buscarEntidade(id);
    }
}
