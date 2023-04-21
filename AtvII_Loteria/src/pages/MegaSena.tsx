import Ganhadores from "../components/ganhadores/Ganhadores";
import InforConcurso from "../components/infoConcurso/InforConcurso";
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio";
import NumerosSorteados from "../components/numerosSorteados/NumerosSorteados";
import Titulo from "../components/titulo/titulo";
import Valor from "../components/valor/valor";
import useContexto from "../hooks/useContexto";
import trevoMega from '../assets/trevo-megasena.png'


function MegaSena() {
    const { megasena } = useContexto();

    function verificaMega() {

        if (megasena.quantidadeGanhadores === 1) {
            return `${megasena.quantidadeGanhadores} GANHADOR`
        } if (megasena.quantidadeGanhadores === 0) {
            return 'ACUMULADO'
        } else {
            return `${megasena.quantidadeGanhadores} GANHADORES`
        }
    }

    return (
        <>
            <div className='cont'>

                <div className='direito'>

                    <div className='trevo'><img src={trevoMega} /><Titulo titulo={"Mega-sena"} /> </div>
                    <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${megasena.dataProximoConcurso}:`} />
                    <Valor valor={megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />

                </div>

                <div className='esquerdo'>

                    <NumerosSorteados numeros={megasena.dezenas} />
                    <Ganhadores ganhadores={verificaMega()} />
                    <InforConcurso informacoes={`Concurso: ${megasena.numeroDoConcurso} -`} data={` ${megasena.dataPorExtenso}`} />

                </div>

            </div>
            <hr /> 

        </>
    )
}

export default MegaSena;
