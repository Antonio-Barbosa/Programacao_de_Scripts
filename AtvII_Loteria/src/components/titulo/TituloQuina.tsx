import './titulo.css'

function TituloQuina({ titulo }: any) {
    return (
        <div className="tituloQuina">
            <h1>
                {titulo}
            </h1>
        </div>
    )
}

export default TituloQuina;