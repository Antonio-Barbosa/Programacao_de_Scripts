import './proximoSorteio.css'

function ProximoSorteio({ informacoes, data }: any) {
    return (
        <div className='informacoesProx'>
            <h4>
                {informacoes}{data}
            </h4>
        </div>
    );
}
export default ProximoSorteio;
