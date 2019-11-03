import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { TipoFrete } from './../../../modelo/tipoFrete.class';
import { TipoFreteService } from '../../../servicos/tipo-frete.service';

@Injectable()
export class TipoFreteResolveGuard implements Resolve<TipoFrete> {

    constructor(private tipoFreteService: TipoFreteService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params.id;
        return this.tipoFreteService.buscarEntidade(id);
    }
}
