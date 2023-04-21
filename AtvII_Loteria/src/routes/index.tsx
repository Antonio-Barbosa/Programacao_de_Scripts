import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegaSena from "../pages/MegaSena";
import LotoFacil from "../pages/LotoFacil";
import Menu from "../components/menu/Menu";
import Quina from "../pages/Quina";

function Erro() {
    return (
        <>
            <div className="carregando">
                <h1>Not found</h1>
            </div>
        </>
    )
}

function Rota() {

    return(
        <>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<MegaSena />} />
                <Route path="/megasena" element={<MegaSena />} />
                <Route path="/lotofacil" element={<LotoFacil />} />
                <Route path="/quina" element={<Quina />}/>
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    </>
    )
   
}

export default Rota;