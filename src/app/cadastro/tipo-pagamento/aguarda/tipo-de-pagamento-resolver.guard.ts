import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TipoPagamento } from './../../../modelo/tipoPagamento.class';
import { TipoPagamentoService } from '../../../servicos/tipo-pagamento.service';

@Injectable()
export class TipoPagamentoResolveGuard implements Resolve<TipoPagamento> {

    constructor(private tipoPagamentoService: TipoPagamentoService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params.id;
        return this.tipoPagamentoService.buscarEntidade(id);
    }
}
