import React from "react";
import '../assets/css/index.css';
import { useNavigate } from "react-router-dom";

const PaginaInicial: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="area-geral">
            <div className="area-treino-inicio">
                <div className="titulo-inicio">
                    <h1>INICIAR TREINO</h1>
                    <hr />
                    <p>Esse treino foi baseado em algumas aulas de Stretching For Beginners e Fat Burning Workout</p>
                </div>
                <div className="botao-inicio">
                    <button
                        onClick={ () => navigate('/exercicios') }
                    >COMEÇAR</button>
                </div>
                <div className="aviso-inicio">
                    <p>
                        <strong>Observação: </strong>
                        <br /><br />
                        Antes de iniciar o treino, lembre-se que cada exercício de alongamento (Stretching) tem a duração de 30 segundos, enquanto os exercícios para queima de gordura (Fat Burning) duram 45 segundos. Além disso, haverá uma pausa de 1 minuto entre cada exercício para um descanso rápido.
                    </p>
                </div>
            </div>
            <footer className="rodape-inicio">Desenvolvido por <a href="https://github.com/dev-januario" target="_blank" rel="noreferrer" >Alysson Januário</a></footer>
        </section>
    );
};

export default PaginaInicial;