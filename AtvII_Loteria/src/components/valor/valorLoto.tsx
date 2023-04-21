import './valor.css'

function Valor({ valor }: any) {
    return (
        <div className="valorLoto">
            <h2>
                {valor}
            </h2>
        </div>
    )
}

export default Valor
