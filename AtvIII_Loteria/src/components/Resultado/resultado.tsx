import styled from "styled-components"

function NumerosSorteados({ numeros }: any) {
    return (
        
        <UlStyle>
            {numeros ? numeros.map((numero: any) => {
                return <LiStyle>{numero}</LiStyle>
            }) : ""}
        </UlStyle>
        
    )
}

export default NumerosSorteados
const UlStyle = styled.ul`
    margin-left: 150px;
    margin-top: 50PX;
`

const LiStyle = styled.li`
    display: inline-block;
    color: ${props =>props.theme.bolafonte};
    font-size: 1.5rem;
    width: 14%;
    border-radius: 100%;
    background-color: ${props =>props.theme.bola};
    margin-right: 1px;
    text-align: center;
    line-height: 2em;
    font-weight: bold;
`

