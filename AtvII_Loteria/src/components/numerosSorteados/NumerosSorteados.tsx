
import './numerosSorteados.css'

function NumerosSorteados({ numeros }: any) {
    return (
        <div className='numeros'>
            <ul>
                {numeros ? numeros.map((numero: any) => {
                    return <li>{numero}</li>
                }) : ""}
            </ul>
        </div>
    )
}

export default NumerosSorteados