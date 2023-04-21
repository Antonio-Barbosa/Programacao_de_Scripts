import Ganhadores from "../components/ganhadores/Ganhadores"
import InforConcurso from "../components/infoConcurso/InforConcurso"
import ProximoSorteio from "../components/infoProximoSorteio/ProximoSorteio"
import NumerosSorteadosLoto from "../components/numerosSorteados/NumerosSorteadosLoto"
import TituloLoto from "../components/titulo/tituloLoto"
import ValorLoto from "../components/valor/valorLoto"
import trevoLoto from '../assets/trevo-lotofacil.png'
import { useContexto } from "../hooks"

function LotoFacil() {

    const { lotofacil } = useContexto()

    function verificaLoto() {

        if (lotofacil.quantidadeGanhadores === 1) {
            return `${lotofacil.quantidadeGanhadores} GANHADOR`
        } if (lotofacil.quantidadeGanhadores === 0) {
            return 'ACUMULADO'
        } else {
            return `${lotofacil.quantidadeGanhadores} GANHADORES`
        }
    }
    return (
        <>
            <div className='cont'>

                <div className='direito'>

                    <div className='trevo'><img src={trevoLoto} /><TituloLoto titulo={"Lotofácil"} /></div>
                    <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${lotofacil.dataProximoConcurso}:`} />
                    <ValorLoto valor={lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />

                </div>

                <div className='esquerdo'>

                    <NumerosSorteadosLoto numeros={lotofacil.dezenas} />
                    <Ganhadores ganhadores={verificaLoto()} />
                    <InforConcurso informacoes={`Concurso: ${lotofacil.numeroDoConcurso} -`} data={` ${lotofacil.dataPorExtenso}`} />
                   
                </div>

            </div>
            <hr /> 
        </>
    )
}

export default LotoFacil;