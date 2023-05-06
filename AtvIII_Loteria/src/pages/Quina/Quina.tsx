import { ThemeProvider } from "styled-components"
import { PrincipalComponente } from "../../components/Principal/Principal"
import { useContexto } from "../../hooks"
import trevoquina from "../../assets/trevo-quina.png"
import { quinaStyle } from "../../styles/theme"

export default function Quina(){
    const {quina} = useContexto()
    return(
      <ThemeProvider theme={quinaStyle}>
        <PrincipalComponente contexto={quina} trevo={trevoquina} titulo={"Quina"}></PrincipalComponente>
      </ThemeProvider>
    )
}