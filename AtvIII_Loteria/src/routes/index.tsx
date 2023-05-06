import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegaSena from "../pages/Megasena/MegaSena";
import Quina from "../pages/Quina/Quina";
import Timemania from "../pages/Timemania/Timemania";
import Menu from "../components/Menu/Menu";
import { Erro } from "../components/Carregando/carregando";



function Rota() {

    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path="/" element={<MegaSena />} />
                    <Route path="/megasena" element={<MegaSena />} />
                    <Route path="/timemania" element={<Timemania />} />
                    <Route path="/quina" element={<Quina />} />
                    <Route path="*" element={<Erro />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default Rota;