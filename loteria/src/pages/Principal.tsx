import Home from "../components/home/Home";
import { useContexto } from "../hooks";

export default function Principal() {
  const {megasena} = useContexto()
  return (
    <>
      {megasena.numeroDoConcurso ?
        <div>
          <Home />
        </div>
        :
        <div>Carregando....</div>}

    </>
  )
}
