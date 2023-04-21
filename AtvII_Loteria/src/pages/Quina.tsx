import Ganhadores from "../components/ganhadores/Ganhadores";
import InforConcurso from "../components/infoConcurso/InforConcurso";
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio";
import trevoQuina from '../assets/trevo-quina.png'
import { useContexto } from "../hooks";
import TituloQuina from "../components/titulo/TituloQuina";
import ValorQuina from "../components/valor/ValorQuina";
import NumerosSorteadosQuina from "../components/numerosSorteados/NumerosSorteadosQuina";

function Quina() {

    const { quina } = useContexto();
    function verifica() {

        if (quina.quantidadeGanhadores === 1) {
            return `${quina.quantidadeGanhadores} GANHADOR`
        } if (quina.quantidadeGanhadores === 0) {
            return 'ACUMULADO'
        } else {
            return `${quina.quantidadeGanhadores} GANHADORES`
        }
    }
    return (
        <>
            <div className='cont'>

                <div className='direito'>

                    <div className='trevo'><img src={trevoQuina} /><TituloQuina titulo={"quina"} /> </div>
                    <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${quina.dataProximoConcurso}:`} />
                    <ValorQuina valor={quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />

                </div>

                <div className='esquerdo'>

                    <NumerosSorteadosQuina numeros={quina.dezenas} />
                    <Ganhadores ganhadores={verifica()} />
                    <InforConcurso informacoes={`Concurso: ${quina.numeroDoConcurso} -`} data={` ${quina.dataPorExtenso}`} />

                </div>

            </div>
            <hr />

        </>
    )
}

export default Quina;
