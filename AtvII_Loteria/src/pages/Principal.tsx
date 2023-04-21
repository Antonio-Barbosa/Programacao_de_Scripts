
import { useContexto } from "../hooks";
import Rota from "../routes";


export default function Principal() {
  const { megasena } = useContexto()
  return (
    <>
      {
        megasena.numeroDoConcurso ?
          <div>
            <Rota />
          </div>
          :
          <div className="carregando">
            <h1>Loading....</h1>
          </div>
      }

    </>
  )
}
