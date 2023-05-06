import NumerosSorteados from "../Resultado/resultado"
import InforConcurso from "../Data/data"
import styled from "styled-components"
import Ganhadores from "../Acumulou/Acumulou"


function Direita({ numeros, quantidadeGanhadores, numeroDoConcurso, data }: any) {
    return (
        <DireitaStyle>
            <NumerosSorteados numeros={numeros} />
            <Ganhadores ganhadores={quantidadeGanhadores ? `${quantidadeGanhadores} GANHADORES` : "ACUMULOU"} />
            <InforConcurso informacoes={`Concuso: ${numeroDoConcurso} -`} data={` ${data}`} />
        </DireitaStyle>
    );

}

const DireitaStyle = styled.div`
    display: inline-block;
`



export default Direita;