//import './titulo.css'
import styled from 'styled-components'

function Titulo({ titulo }: any) {
    return (
        <LoteriaStyle>
            <h1>
                {titulo}
            </h1>
        </LoteriaStyle>
    )
}

export default Titulo;

const LoteriaStyle = styled.div`
    display: inline-block;
    color: ${props =>props.theme.loteria};
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-left: 10px;
    max-width: 300px;
`
