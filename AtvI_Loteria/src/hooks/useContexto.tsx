import { useContext } from "react";
import { Contexto } from "../contexts";

export default function useContexto() {
    const contexto = useContext(Contexto);
    return contexto
}