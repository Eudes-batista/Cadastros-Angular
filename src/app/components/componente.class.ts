import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { GenericService } from '../servicos/generic.service';
import { ContentRequest } from '../modelo/servidor/ContentRequest.class';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

export abstract class Componente<T> {

    contentRequest: ContentRequest;
    entidades: T[];
    entidade: T;
    inscricaoAlterar$: Subscription;
    totalRegistro: number;
    carregar = true;

    constructor(
        private genericService: GenericService<T>, public confirmationService: ConfirmationService, public messageService: MessageService
    ) {
        this.contentRequest = new ContentRequest(0, 5);
    }

    public listarEntidades(): void {
        this.genericService.listar(this.contentRequest)
            .subscribe(
                success => {
                    this.entidades = success.content;
                    this.totalRegistro = success.totalElements;
                },
                error => {
                    this.messageService.add({ severity: 'error', summary: error.message });
                }
            );
    }
    public pesquisar(): void {
        this.genericService.pesquisarConteudo(this.contentRequest)
            .subscribe(
                success => {
                    this.entidades = success.content;
                    this.totalRegistro = success.totalElements;
                },
                error => {
                    this.messageService.add({ severity: 'error', summary: error.message });
                }
            );
    }

    public buscarEntidade(route: ActivatedRoute, t: T): void {
        this.inscricaoAlterar$ = route.data.subscribe(response => this.entidade = !response.id ? t : response.id);
    }

    public salvar(): void {
        this.genericService.salvar(this.entidade)
            .subscribe(
                success => {
                    this.messageService.add({ severity: 'success', summary: 'Cliente salvo com sucesso!!' });
                },
                error => {
                    this.messageService.add({ severity: 'error', summary: error });
                }
            );
    }

    public excluir(codigo): void {
        this.confirmationService.confirm({
            message: 'Deseja mesmo excluir?',
            accept: () => {
                this.genericService.excluir(codigo).subscribe(
                    success => {
                        this.listarEntidades();
                        this.messageService.add({ severity: 'success', summary: 'Cliente excluido com sucesso!!' });
                    },
                    error => {
                        this.messageService.add({ severity: 'error', summary: 'Erro ao excluir cliente' });
                    }
                );
            }
        });
    }

}
