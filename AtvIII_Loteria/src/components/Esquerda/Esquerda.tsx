import  Titulo from "../NomeLoteria/nomeLoteria"
import Valor from "../Estimativa/estimativa"
import ProximoSorteio from "../infoProximoSorteio/ProximoSorteio"
import styled from "styled-components"


function Esquerda({titulo, trevo, data, valor }:any) {
    return(
        <EsquerdaStyle>

            <Trevo>
                <img src={trevo} /><Titulo titulo={titulo} /> 
            </Trevo>
            <ProximoSorteio informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${data}:`} />
            <Valor valor={valor} />

        </EsquerdaStyle>
    )
    
}

const EsquerdaStyle = styled.div`
    display: inline-block;
`
const Trevo = styled.div`
    margin-top: 20px;
    margin-left: 10vh;
    max-width: 300px;
`


export default Esquerda;