import React from "react";
import '../assets/css/index.css';
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

const NotFound: React.FC = () => {
    return (
        <section className="area-geral">
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', zIndex: 1, justifyContent: 'start', alignItems: 'center', height: '50vh', padding: '20px' }}>
                <h1 style={{ fontSize: '80pt', color: 'red' }}>404</h1>
                <p style={{ fontSize: '30pt', marginBottom: '50px'}} >URL NOT FOUND</p>
                <h2 style={{ fontSize: '12pt'}} >Essa página está em desenvolvimento, por este motivo, não foi encontrada!</h2>
            </div>
        </section>
    );
};

export default NotFound;