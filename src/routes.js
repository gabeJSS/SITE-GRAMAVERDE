import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Usuario from "./components/Usuario";

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Sobre />} path="/sobre"/>
                <Route element={<Usuario />} path="/usuario" />
            </Routes>
        </BrowserRouter>
    )
}