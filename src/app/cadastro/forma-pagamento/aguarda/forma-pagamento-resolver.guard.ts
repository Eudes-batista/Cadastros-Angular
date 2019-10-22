import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { FormaPagamentoService } from './../../../servicos/forma-pagamento.service';
import { FormaPagamento } from './../../../modelo/formaPagamento.class';

@Injectable()
export class FormaPagamentoResolveGuard implements Resolve<FormaPagamento> {

    constructor(private formaPagamentoService: FormaPagamentoService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params.id;
        return this.formaPagamentoService.buscarEntidade(id);
    }
}
