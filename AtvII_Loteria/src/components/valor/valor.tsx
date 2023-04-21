import './valor.css'

function Valor({ valor }: any) {
    return (
        <div className="valor">
            <h2>
                {valor}
            </h2>
        </div>
    )
}

export default Valor
