
type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';

export interface Lembrete {
    id: number;
    conteudo: string;
    arquivao: boolean;
    prioridade: prioridade;
    modificado: string;
}
