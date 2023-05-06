import { ThemeProvider } from "styled-components"
import { PrincipalComponente } from "../../components/Principal/Principal"
import { useContexto } from "../../hooks"
import { timemaniaStyle } from "../../styles/theme"
import trevotimemania from '../../assets/trevo-timemania.png'

export default function Timemania() {
  const {timemania} = useContexto()

  return (
    <ThemeProvider theme={timemaniaStyle}>
      <PrincipalComponente contexto={timemania} trevo={trevotimemania} titulo={"timemania"}></PrincipalComponente>
    </ThemeProvider>
  )

}