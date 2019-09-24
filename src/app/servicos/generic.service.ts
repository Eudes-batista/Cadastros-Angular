import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';

import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {

  private apiUrl: string;

  constructor(public httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}${this.getResource()}`;
  }

  public listar(pagina: number, quantidadeRegistro: number) {
    if (!pagina && !quantidadeRegistro) {
      return this.httpClient.get(`${this.apiUrl}`).pipe(take(1));
    }
    return this.httpClient.get(`${this.apiUrl}/?page=${pagina}&size=${quantidadeRegistro}`).pipe(take(1));
  }

  public pesquisarConteudo(pesquisa: string, pagina: number, quantidadeRegistro: number) {
    return this.httpClient.get(`${this.apiUrl}/pesquisa/${pesquisa}?page=${pagina}&size=${quantidadeRegistro}`).pipe(take(1));
  }

  public salvar(t: T) {
    return this.httpClient.post(this.apiUrl, t).pipe(take(1));
  }

  public excluir(codigo: any) {
    return this.httpClient.delete(`${this.apiUrl}/${codigo}`).pipe(take(1));
  }

  public abstract getResource(): string;

}
