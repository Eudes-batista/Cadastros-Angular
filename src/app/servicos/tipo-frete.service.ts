<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TipoFrete } from '../modelo/tipoFrete.class';
import { GenericService } from './generic.service';

@Injectable()
export class TipoFreteService extends GenericService<TipoFrete>{
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GenericService } from 'src/app/servicos/generic.service';
import { TipoFrete } from '../modelo/tipoFrete.class';

@Injectable()
export class TipoFreteService extends GenericService<TipoFrete> {
>>>>>>> 8633cb9bdc756ccbd628610333aed29fb4c2835b

  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }
<<<<<<< HEAD
   public getResource(): string {
=======

  public getResource(): string {
>>>>>>> 8633cb9bdc756ccbd628610333aed29fb4c2835b
    return 'tipoFrete';
  }
}
