import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from './../../environments/environment';
import { ResponseServer } from '../modelo/servidor/ResponseServer.class';
import { ContentRequest } from '../modelo/servidor/ContentRequest.class';

@Injectable({
  providedIn: 'root'
})
export abstract class GenericService<T> {

  private apiUrl: string;

  constructor(public httpClient: HttpClient) {
    this.apiUrl = `${environment.apiUrl}${this.getResource()}`;
  }

  public listar(contentRequest: ContentRequest): Observable<ResponseServer<T>> {
    if (!contentRequest) {
      return this.httpClient.get<ResponseServer<T>>(`${this.apiUrl}`).pipe(take(1));
    }
    return this.httpClient.get<ResponseServer<T>>(`${this.apiUrl}/?page=${contentRequest.pageCurrent}&size=${contentRequest.size}`)
      .pipe(take(1));
  }

  public pesquisarConteudo(contentRequest: ContentRequest): Observable<ResponseServer<T>> {
    if (!contentRequest.content) {
      return this.listar(contentRequest);
    }
    return this.httpClient
      .get<ResponseServer<T>>(`${this.apiUrl}/${contentRequest.content}/search?
      page=${contentRequest.pageCurrent}&size=${contentRequest.size}`)
      .pipe(take(1));
  }

  public buscarEntidade(identificador: any): Observable<T> {
    return this.httpClient.get<T>(`${this.apiUrl}/${identificador}`);
  }

  public salvar(t: T) {
    return this.httpClient.post<T>(this.apiUrl, t).pipe(take(1));
  }

  public excluir(codigo: any) {
    return this.httpClient.delete(`${this.apiUrl}/${codigo}`).pipe(take(1));
  }

  public abstract getResource(): string;

  get getApiUrl(): string {
    return this.apiUrl;
  }

  get getHttpClient(): HttpClient {
    return this.httpClient;
  }

}
