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
        nome: "Lumbar Rotation Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 2,
        nome: "Lumbar Rotation Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 3,
        nome: "Hamstring Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 4,
        nome: "Hamstring Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 5,
        nome: "Piriformis Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 6,
        nome: "Piriformis Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 7,
        nome: "Tall Kneeling Hip Flexor Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 8,
        nome: "Knelling Hamstring Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 9,
        nome: "Tall Kneeling Hip Flexor Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 10,
        nome: "Kneeling Hamstring Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 11,
        nome: "Seated Spine Rotation Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 12,
        nome: "Seated Spine Rotation Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 13,
        nome: "Chilld's Pose Stretch",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 14,
        nome: "Upper Back Extension",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 15,
        nome: "Upper Trap Stretch (Right)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 16,
        nome: "Upper Trap Stretch (Left)",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
];

const exerciciosFatBurning: Exercicio[] = [
    {
        id: 1,
        nome: "Warmup",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 2,
        nome: "Burpees",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 3,
        nome: "Jumping Jacks",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 4,
        nome: "Switching Lunges",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 5,
        nome: "Squat Taps",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 6,
        nome: "Switching Mountain Climbers",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 7,
        nome: "Shoulder to Shoulder",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 8,
        nome: "Seated In & Outs",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 9,
        nome: "Seated Leg Flutters",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 10,
        nome: "Bicycles",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 11,
        nome: "Full Pank Position",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 12,
        nome: "Full Push-Up Position",
        descricao: "Exemplo de descrição",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    }
];

const PaginaExercicios: React.FC = () => {
    const [cronometroAtivoStretching, setCronometroAtivoStretching] = useState<number | null>(null);
    const [cronometroAtivoFatBurning, setCronometroAtivoFatBurning] = useState<number | null>(null);
    const [fimDoTempoStretching, setFimDoTempoStretching] = useState(30);
    const [fimDoTempoFatBurning, setFimDoTempoFatBurning] = useState(45);
    const [exercicioConcluidoStretching, setExercicioConcluidoStretching] = useState<{ [key: number]: boolean }>({});
    const [exercicioConcluidoFatBurning, setExercicioConcluidoFatBurning] = useState<{ [key: number]: boolean }>({});
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
        setCronometroAtivoStretching(id);
        let count = 30;
        setFimDoTempoStretching(count);
        const timer = setInterval(() => {
            count--;
            setFimDoTempoStretching(count);
            if (count === 0) {
                clearInterval(timer);
                audioRef.current.play();
                setTimeout(() => {
                    setCronometroAtivoStretching(null);
                    setExercicioConcluidoStretching((prev) => ({ ...prev, [id]: true }));
                }, 5000);
            }
        }, 1000);
    };

    const dispararCronometroFatBurning = (id: number) => {
        setCronometroAtivoFatBurning(id);
        let count = 45;
        setFimDoTempoFatBurning(count);
        const timer = setInterval(() => {
            count--;
            setFimDoTempoFatBurning(count);
            if (count === 0) {
                clearInterval(timer);
                audioRef.current.play();
                setTimeout(() => {
                    setCronometroAtivoFatBurning(null);
                    setExercicioConcluidoFatBurning((prev) => ({ ...prev, [id]: true }));
                }, 5000);
            }
        }, 1000);
    };

    return (
        <section className="area-geral-exercicios">
            <h1 style={{ zIndex: 1, fontSize: '25pt' }} >Lista de Exercícios</h1>
            <p style={{ zIndex: 1, fontSize: '15pt', color: 'gray', marginBottom: '20px' }} >Stretching & Fat Burning</p>
            <section className="area-stretching">
                <div className="area-titulo-exercicios">
                    <h1>Stretching</h1>
                    <button onClick={() => setExibirStretching(!exibirStretching)}>{exibirStretching ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button>
                </div>
                {exibirStretching && (
                    <div className="area-listagem-exercicios">
                        <div className="lista-exercicios">
                            {exerciciosStretching.map(({id, nome, descricao, imagem, video}) => (
                                <ul>
                                    <li>
                                        <div>
                                            <input type="checkbox" checked={exercicioConcluidoStretching[id] || false} readOnly />
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
                                        
                                    </li>
                                    <div className="cronometro-exercicios">
                                        {cronometroAtivoStretching !== id ? (
                                            <button onClick={() => dispararCronometroStretching(id)}>Iniciar</button>
                                        ) : (
                                            <div className="full-screen-timer">
                                                <h1>{fimDoTempoStretching}</h1>
                                            </div>
                                        )}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            <section className="area-fat-burning">
                <div className="area-titulo-exercicios">
                    <h1>Fat Burning</h1>
                    <button onClick={() => setExibirFatBurning(!exibirFatBurning)}>{exibirFatBurning ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button>
                </div>
                {exibirFatBurning && (
                    <div className="area-listagem-exercicios">
                        <div className="lista-exercicios">
                            {exerciciosFatBurning.map(({id, nome, descricao, imagem, video}) => (
                                <ul>
                                    <li>
                                        <div>
                                            <input type="checkbox" checked={exercicioConcluidoFatBurning[id] || false} readOnly />
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
                                    </li>
                                    <div className="cronometro-exercicios">
                                        {cronometroAtivoFatBurning !== id ? (
                                            <button onClick={() => dispararCronometroFatBurning(id)}>Iniciar</button>
                                        ) : (
                                            <div className="full-screen-timer">
                                                <h1>{fimDoTempoFatBurning}</h1>
                                            </div>
                                        )}
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
            </section>
            <section className="area-botao-conclusao-treino">
                <button className="botao-conclusao-treino">
                    Encerrar treino
                </button>
            </section>
        </section>
    );
};

export default PaginaExercicios;