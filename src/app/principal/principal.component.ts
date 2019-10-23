import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastros',
        items: [
          { label: 'Cliente', routerLink: '/cliente' },
          { label: 'Tipo de Pagamento', routerLink: '/tipo-de-pagamento' },
          { label: 'Forma de Pagamento', routerLink: '/forma-de-pagamento' },
        ]
      }
    ];
  }

}
