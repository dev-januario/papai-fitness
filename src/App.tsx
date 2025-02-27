import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PaginaInicial, PaginaExercicios, PaginaFinal, NotFound } from "./pages";

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/home" element={<PaginaInicial />} />
                <Route path="/exercicios" element={<PaginaExercicios />} />
                <Route path="/final" element={<PaginaFinal />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;