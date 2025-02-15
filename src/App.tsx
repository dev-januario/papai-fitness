import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PaginaInicial, PaginaExercicios } from "./pages";

const App: FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/home" element={<PaginaInicial />} />
                <Route path="/exercicios" element={<PaginaExercicios />} />
                <Route element={<PaginaInicial />} />
            </Routes>
        </Router>
    );
};

export default App;