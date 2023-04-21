import trevoMega from '../../assets/trevo-megasena.png'
import trevoLoto from '../../assets/trevo-lotofacil.png'
import useContexto from '../../hooks/useContexto';
import Ganhadores from '../ganhadores/Ganhadores';
import InforConcurso from '../infoConcurso/InforConcurso';
import ProximoSorteio from '../infoProximoSorteio/ProximoSorteio';
import NumerosSorteados from '../numerosSorteados/NumerosSorteados';
import NumerosSorteadosLoto from '../numerosSorteados/NumerosSorteadosLoto';
import Titulo from '../titulo/titulo';
import TituloLoto from '../titulo/tituloLoto';
import Valor from '../valor/valor';
import ValorLoto from '../valor/valorLoto';

export default function Megasena() {

  const { megasena } = useContexto()
  const { lotofacil } = useContexto()

  function verificaMega() {

    if (megasena.quantidadeGanhadores === 1) {
      return `${megasena.quantidadeGanhadores} GANHADOR`
    } if (megasena.quantidadeGanhadores === 0) {
      return 'ACUMULADO'
    } else {
      return `${megasena.quantidadeGanhadores} GANHADOR`
    }
  }

  function verificaLoto() {

    if (lotofacil.quantidadeGanhadores === 1) {
      return `${lotofacil.quantidadeGanhadores} GANHADOR`
    } if (lotofacil.quantidadeGanhadores === 0) {
      return 'ACUMULADO'
    } else {
      return `${lotofacil.quantidadeGanhadores} GANHADOR`
    }
  }

  return (
    <div>
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

      <div className='cont'>

        <div className='direito'>

          <div className='trevo'><img src={trevoLoto} /><TituloLoto titulo={"Loto facil"} /></div>
          <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${lotofacil.dataProximoConcurso}:`} />
          <ValorLoto valor={lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />

        </div>
        <div className='esquerdo'>
          <NumerosSorteadosLoto numeros={lotofacil.dezenas} />
          <Ganhadores ganhadores={verificaLoto()} />
          <InforConcurso informacoes={`Concurso: ${lotofacil.numeroDoConcurso} -`} data={` ${lotofacil.dataPorExtenso}`} />

        </div>

      </div>
    </div>
  )
}
