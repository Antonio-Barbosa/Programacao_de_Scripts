import styled from "styled-components";

function ProximoSorteio({ informacoes, data }: any) {
    return (
        <DataStyle>
            <h4>
                {informacoes}{data}
            </h4>
        </DataStyle>
    );
}
export default ProximoSorteio;

const DataStyle = styled.div`
    margin-left: 17vh;
    max-width: 250px;
    color: #4c556c;
`