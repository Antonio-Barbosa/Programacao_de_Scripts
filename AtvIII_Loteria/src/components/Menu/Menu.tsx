import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const mega = {
    cor: "#209869"
}
const quina = {
    cor: "#260085"
}
const time = {
    cor: "#00ff48"
}

const Padrao = {
    cor: "#ddd"
}

export default function Menu() {
    const linkAtual = useLocation()
    return(
        <MenuStyle>
            <LinkStyle theme={linkAtual.pathname === "/timemania"? Padrao: time} to={"/timemania"}> Timemania</LinkStyle>
            <LinkStyle theme={linkAtual.pathname === "/megasena"? Padrao: mega} to={"/megasena"} > Megasena</LinkStyle>
            <LinkStyle  theme={linkAtual.pathname === "/quina"? Padrao: quina} to={"/quina"} > Quina</LinkStyle>
        </MenuStyle>
    )
}

const MenuStyle = styled.div`
    margin-top: 1%;
    margin-left: 5.5%;
`

const LinkStyle = styled(Link)`
text-decoration: none;
color: ${props =>props.theme.cor};
padding: 12px;
font-size: 25px;
font-weight: bold; 
text-align: center;
`