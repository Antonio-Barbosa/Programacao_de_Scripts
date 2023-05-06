import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from '../types'
import Loteria from "../services/Loteria";


export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props)
    const [timemania, setTimemania] = useState({} as Props)
    const [quina, setQuina] = useState ({} as Props)

    useEffect(() => {
        (async function () {
            const resp = await Loteria.get();
            setMegasena(resp.megasena);
            setTimemania(resp.timemania);
            setQuina(resp.quina);
        })()
    }, []);

    return (
        <Contexto.Provider value={{ quina, megasena, timemania,setQuina, setMegasena, setTimemania }} >
            <span>{children}</span>
        </Contexto.Provider>
    )
}