import React from "react";
import '../assets/css/index.css';
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="area-geral">
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', zIndex: 1, justifyContent: 'start', alignItems: 'center', height: '50vh', padding: '20px' }}>
                <h1 style={{ fontSize: '80pt', color: 'red', lineHeight: '85px' }}>404</h1>
                <p style={{ fontSize: '25pt', marginBottom: '25px'}} >URL NOT FOUND</p>
                <h2 style={{ fontSize: '10pt'}} >Essa página está em desenvolvimento, por este motivo, não foi encontrada!</h2>
                <button style={{ color: 'black', padding: '5px 20px', borderRadius: '20px', marginTop: '20px' }} className="botao-not-found" onClick={() => navigate('/home')}>Voltar para a página inicial</button>
            </div>
        </section>
    );
};

export default NotFound;