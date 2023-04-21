import './inforConcurso.css'

function InforConcurso({ informacoes, data } : any) {
    return (
        <div className='informacoes'>
            <h4>
                {informacoes}{data}
            </h4>
        </div>
    );

}
export default InforConcurso;
