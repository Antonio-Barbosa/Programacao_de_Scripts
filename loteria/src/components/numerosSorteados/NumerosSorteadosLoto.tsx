import './numerosSorteados.css'

function NumerosSorteadosLoto({ numeros }: any) {

    return (
        <div className='numerosLoto'>
            <ul>
                {numeros ? numeros.map((numero: any) => {
                    return <li>{numero}</li>
                }) : ""}
            </ul>
        </div>
    )
}


export default NumerosSorteadosLoto