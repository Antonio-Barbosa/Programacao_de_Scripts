export interface LoteriaProps {
    megasena: Props;
    setMegasena: Function;
    quina: Props;
    setQuina: Function;
    timemania: Props;
    setTimemania: Function;
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