export interface LoteriaProps {
    megasena: Props;
    lotofacil: Props;
    setMegasena: Function;
    setLotofacil: Function;
    quina: Props;
    setQuina: Function;
}

export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
}