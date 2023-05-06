import { ThemeProvider } from "styled-components"
import { PrincipalComponente } from "../../components/Principal/Principal"
import { useContexto } from "../../hooks"
import { megaStyle } from "../../styles/theme"
import trevomega from "../../assets/trevo-megasena.png"


export default function Megasena(){
    const {megasena} = useContexto()
      return(
        <ThemeProvider theme={megaStyle}>
          <PrincipalComponente contexto={megasena} trevo={trevomega} titulo={"mega-sena"}></PrincipalComponente>
        </ThemeProvider>
      )
  }
