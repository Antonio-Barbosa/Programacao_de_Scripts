import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from '../types'
import Loteria from "../services/Loteria";


export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props)
    const [lotofacil, setLotofacil] = useState({} as Props)
    const [quina, setQuina] = useState ({} as Props)

    useEffect(() => {
        (async function () {
            const resp = await Loteria.get();
            setMegasena(resp.megasena);
            setLotofacil(resp.lotofacil);
            setQuina(resp.quina);
        })()
    }, []);

    return (
        <Contexto.Provider value={{ quina, megasena, lotofacil,setQuina, setMegasena, setLotofacil }} >
            <span>{children}</span>
        </Contexto.Provider>
    )
}