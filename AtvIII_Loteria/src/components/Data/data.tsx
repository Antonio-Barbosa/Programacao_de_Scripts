import styled from "styled-components";

function InforConcurso({ informacoes, data } : any) {
    return (
        <DataStyle>
            <h4>
                {informacoes}{data}
            </h4>
        </DataStyle>
    );

}
export default InforConcurso;

const DataStyle = styled.div`
    margin-left: 200px;
    max-width: 400px;
    color: ${props =>props.theme.data};
`