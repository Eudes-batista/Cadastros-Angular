import { ClienteService } from './../../../servicos/cliente.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Cliente } from './../../../modelo/cliente.class';

@Injectable()
export class ClienteResolveGuard implements Resolve<Cliente> {

    constructor(private clienteService: ClienteService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params.id;
        return this.clienteService.buscarEntidade(id);
    }
}
