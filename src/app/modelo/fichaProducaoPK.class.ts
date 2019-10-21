import { Grade } from './grade.class';
import { FichaProdutoItemPK } from './fichaProducaoItemPK.class';
export class FichaProducaoItem {
    fichaProdutoItemPK: FichaProdutoItemPK;
    grade: Grade;
    quantidade: number;
}
