import styled from "styled-components"

function Carregando() {
    return(
        <CarregandoStyle>
            Carregando....
        </CarregandoStyle>
    )
}

function Erro() {
    return(
        <CarregandoStyle>
            Not Found
        </CarregandoStyle>
    )
}

export  {
    Carregando,
    Erro
}

const CarregandoStyle = styled.div`
    text-Align: center; 
    font-Size: 30px; 
    margin-Top: 300px;
`