import React, { useState, useRef } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react';
import '../assets/css/index.css';

interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    video: string;
}

const exerciciosStretching: Exercicio[] = [
    {
        id: 1,
        nome: "Exemplo",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 2,
        nome: "Outro exemplo",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    }
];

/*
const exerciciosFatBurning: Exercicio[] = [
    {
        id: 1,
        nome: "Exemplo",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    }
];
*/

const PaginaExercicios: React.FC = () => {
    const [cronometroAtivo, setCronometroAtivo] = useState<number | null>(null);
    const [fimDoTempoStretching, setFimDoTempoStretching] = useState(30);
    const [exercicioConcluido, setExercicioConcluido] = useState<{ [key: number]: boolean }>({});
    const [exibirStretching, setExibirStretching] = useState(true);
    const [exibirFatBurning, setExibirFatBurning] = useState(true);
    const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});
    const audioRef = useRef<HTMLAudioElement>(new Audio(''));

    const handleMouseEnter = (id: number) => {
        const videoElement = videoRefs.current[id];
        if (videoElement) {
            videoElement.play();
        }
    };
    
    const handleMouseLeave = (id: number) => {
        const videoElement = videoRefs.current[id];
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    };

    const dispararCronometroStretching = (id: number) => {
        setCronometroAtivo(id);
        let count = 30;
        setFimDoTempoStretching(count);
        const timer = setInterval(() => {
            count--;
            setFimDoTempoStretching(count);
            if (count === 0) {
                clearInterval(timer);
                audioRef.current.play();
                setTimeout(() => {
                    setCronometroAtivo(null);
                    setExercicioConcluido((prev) => ({ ...prev, [id]: true }));
                }, 5000);
            }
        }, 1000);
    };

    return (
        <section className="area-geral-exercicios">
            <section className="area-stretching">
                <div className="area-titulo-exercicios">
                    <h1>Stretching</h1>
                    <button onClick={() => setExibirStretching(!exibirStretching)}>{exibirStretching ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button>
                </div>
                {exibirStretching && (
                    <div className="area-listagem-exercicios">
                        <div className="lista-exercicios">
                            <ul>
                                {exerciciosStretching.map(({id, nome, descricao, imagem, video}) => (
                                    <li>
                                        <div>
                                            <input type="checkbox" checked={exercicioConcluido[id] || false} readOnly />
                                        </div>
                                        <div className="detalhes-exercicio">
                                            <div className="image-video">
                                                <video 
                                                    ref={(el) => (videoRefs.current[id] = el)} 
                                                    src={video} 
                                                    poster={imagem}
                                                    muted 
                                                    loop
                                                    onMouseEnter={() => handleMouseEnter(id)}
                                                    onMouseLeave={() => handleMouseLeave(id)}
                                                    />
                                            </div>
                                            <div className="nome-descricao-exercicios">
                                                <h3>{nome}</h3>
                                                <p>{descricao}</p>
                                            </div>
                                        </div>
                                        <div className="cronometro-exercicios">
                                            {cronometroAtivo !== id ? (
                                                <button onClick={() => dispararCronometroStretching(id)}>Iniciar</button>
                                            ) : (
                                                <div className="full-screen-timer">
                                                    <h1>{fimDoTempoStretching}</h1>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </section>

            <section className="area-fat-burning">
                <div className="area-titulo-exercicios">
                    <h1>Fat Burning</h1>
                    <button onClick={() => setExibirFatBurning(!exibirFatBurning)}>{exibirStretching ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button>
                </div>
                {exibirFatBurning && (
                    <div className="area-listagem-exercicios">
                        <div className="lista-exercicios">
                            
                        </div>
                    </div>
                )}
            </section>
        </section>
    );
};

export default PaginaExercicios;