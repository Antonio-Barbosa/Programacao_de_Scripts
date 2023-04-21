import { Link } from 'react-router-dom'
import './menu.css'

export default function Menu() {
    return (
        <div className='menu'>
            <Link to={"/lotofacil"} className='link linklotofacil'> LotoFácil</Link>
            <Link to={"/megasena"} className='link linkmegasena'> Megasena</Link>
            <Link to={"/quina"} className='link linkquina'> Quina</Link>
        </div>
    )
}