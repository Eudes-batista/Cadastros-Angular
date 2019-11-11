import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Produto } from './../../../modelo/produto.class';
import { ProdutoService } from 'src/app/servicos/produto.service';

@Injectable()
export class ProdutoResolveGuard implements Resolve<Produto> {

    constructor(private produtoService: ProdutoService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Produto> | Promise<Produto> | Produto {
        const id = route.params.id;
        return this.produtoService.buscarEntidade(id);
    }
}
