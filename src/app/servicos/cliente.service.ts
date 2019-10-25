import { HttpClient } from '@angular/common/http';
import { Cliente } from './../modelo/cliente.class';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable()
export class ClienteService extends GenericService<Cliente> {

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  public getResource(): string {
    return 'cliente';
  }

  public buscarRelatorioCliente() {
    const options = { fileName: 'relatorioCliente' };
    return this.getHttpClient.get(`${this.getApiUrl}/pdfreport`, { responseType: 'blob', headers: options });
  }

}
