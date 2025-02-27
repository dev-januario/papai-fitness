import React, { useState, useEffect } from "react";
import '../assets/css/index.css';
import { useNavigate } from "react-router-dom";

const PaginaFinal: React.FC = () => {
    const navigate = useNavigate();
    const [treinosConcluidos, setTreinosConcluidos] = useState<number>(0);

    useEffect(() => {
        const savedTreinos = localStorage.getItem('treinosRealizados');
        setTreinosConcluidos(savedTreinos ? parseInt(savedTreinos, 10) : 0);
    }, []);

    return (
        <section className="area-geral">
            <div style={{ zIndex: 1 }} className="area-titulo-final" >
                <h1>Parabéns!</h1>
                <p>Você concluiu mais um treino.</p>
            </div>

            <div style={{ zIndex: 1 }} className="area-conclusao-final">
                <h3>Dias concluídos:</h3>
                <div>{treinosConcluidos}</div>
            </div>

            <div style={{ zIndex: 1 }}>
                <button
                    style={{ color: 'black', padding: '10px 40px', borderRadius: '40px', marginTop: '20px', fontSize: '15pt' }}
                    className="botao-not-found"
                    onClick={() => navigate('/home')}
                >
                    Voltar para a página inicial
                </button>
            </div>
        </section>
    );
};

export default PaginaFinal;