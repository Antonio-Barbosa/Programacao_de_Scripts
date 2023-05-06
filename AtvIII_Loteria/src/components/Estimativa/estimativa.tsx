import styled from "styled-components"

function Valor({ valor }: any) {
    return (
        <ValorStyle>
            <h2>
                R$ {valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </h2>
        </ValorStyle>
    )
}

export default Valor

const ValorStyle = styled.div`
    color: ${props =>props.theme.estimativa};
    font-weight: bold;
    margin-left: 17vh;
    max-width: 200px;
`
