import './numerosSorteados.css'

function NumerosSorteadosQuina({ numeros }: any) {

    return (
        <div className='numerosQuina'>
            <ul>
                {numeros ? numeros.map((numero: any) => {
                    return <li>{numero}</li>
                }) : ""}
            </ul>
        </div>
    )
}

export default NumerosSorteadosQuina;