import { ConfirmationService, MessageService } from 'primeng/api';
import { GenericService } from '../servicos/generic.service';

export abstract class Componente<T> {

    paginaAtual = 0;
    totalRegistro = 10;
    entidades: T[];
    pesquisa: string;

    constructor(
        private genericService: GenericService<T>
        , public confirmationService: ConfirmationService
        , public messageService: MessageService
    ) {
    }

    public listarEntidades(): void {
        this.genericService.listar(this.paginaAtual, this.totalRegistro)
            .subscribe(
                success => {
                    this.entidades = success['content'];
                },
                error => {
                    console.log(error);
                }
            );
    }

    public pesquisar(): void {
        this.genericService.pesquisarConteudo(this.pesquisa, this.paginaAtual, this.totalRegistro)
            .subscribe(
                success => {
                    this.entidades = success['content'];
                },
                error => {
                    console.log(error);
                }
            );
    }

    public salvar(entidade: T): void {
        console.log('passou aqui');
        this.genericService.salvar(entidade)
            .subscribe(
                success => {
                    this.messageService.add({ severity: 'success', summary: 'Cliente salvo com sucesso!!' });
                },
                error => {
                    console.log(error);
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
