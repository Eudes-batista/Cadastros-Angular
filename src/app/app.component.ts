import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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