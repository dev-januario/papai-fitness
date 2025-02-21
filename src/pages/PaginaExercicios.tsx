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
        descricao: "Deite-se de costas, levante a perna direita em 90 graus e puxe-a com o braço esquerdo, segurando-a sobre a perna esquerda.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 2,
        nome: "Lumbar Rotation Stretch (Left)",
        descricao: "Deite-se de costas, levante a perna esquerda em 90 graus e puxe-a com o braço direito, segurando-a sobre a perna direita.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 3,
        nome: "Hamstring Stretch (Right)",
        descricao: "Deite-se de costas e levante a perna direita o máximo que conseguir, segurando-a com ambas as mãos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 4,
        nome: "Hamstring Stretch (Left)",
        descricao: "Deite-se de costas e levante a perna esquerda o máximo que conseguir, segurando-a com ambas as mãos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 5,
        nome: "Piriformis Stretch (Right)",
        descricao: "Deite-se de costas, levante a perna esquerda em 90 graus e cruze a perna direita sobre ela.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 6,
        nome: "Piriformis Stretch (Left)",
        descricao: "Deite-se de costas, levante a perna direita em 90 graus e cruze a perna esquerda sobre ela.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 7,
        nome: "Tall Kneeling Hip Flexor Stretch (Right)",
        descricao: "Ajoelhe-se, faça um ângulo de 90 graus com a perna esquerda para frente e estique a direita para trás.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 8,
        nome: "Knelling Hamstring Stretch (Left)",
        descricao: "Ajoelhe-se, estique a perna esquerda para frente e chegue perto de sentar sobre o pé direito.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 9,
        nome: "Tall Kneeling Hip Flexor Stretch (Left)",
        descricao: "Ajoelhe-se, faça um ângulo de 90 graus com a perna direita para frente e estique a esquerda para trás.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 10,
        nome: "Kneeling Hamstring Stretch (Right)",
        descricao: "Ajoelhe-se, estique a perna direita para frente e chegue perto de sentar sobre o pé esquerdo.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 11,
        nome: "Seated Spine Rotation Stretch (Right)",
        descricao: "Sente-se, estique a perna direita e cruze a esquerda sobre ela, apoiando o braço esquerdo atrás e o cotovelo direito no joelho esquerdo.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 12,
        nome: "Seated Spine Rotation Stretch (Left)",
        descricao: "Sente-se, estique a perna esquerda e cruze a direita sobre ela, apoiando o braço direito atrás e o cotovelo esquerdo no joelho direito.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 13,
        nome: "Chilld's Pose Stretch",
        descricao: "Ajoelhe-se, sente-se sobre os pés e estique os braços à frente.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 14,
        nome: "Upper Back Extension",
        descricao: "Sente-se com as costas retas, coloque as mãos na cabeça e curve-se para frente, depois retorne à posição ereta com os braços abertos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 15,
        nome: "Upper Trap Stretch (Right)",
        descricao: "Sente-se com as costas retas e puxe o pescoço para a esquerda.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 16,
        nome: "Upper Trap Stretch (Left)",
        descricao: "Sente-se com as costas retas e puxe o pescoço para a direita.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
];

const exerciciosFatBurning: Exercicio[] = [
    {
        id: 1,
        nome: "Butt Kicks",
        descricao: "Em pé, jogue os braços para trás e pule, batendo os calcanhares nas mãos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 2,
        nome: "Burpees",
        descricao: "Apoie-se nos braços, faça uma flexão e, em seguida, pule levantando os joelhos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 3,
        nome: "Jumping Jacks",
        descricao: "Em pé, pule abrindo as pernas e batendo as mãos acima da cabeça, fechando as pernas ao abaixar os braços.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 4,
        nome: "Switching Lunges",
        descricao: "Em pé, coloque o joelho esquerdo à frente e o direito para trás, intercalando pulos e agachamentos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 5,
        nome: "Squat Taps",
        descricao: "Em pé, feche as pernas e abra ao tocar a mão esquerda no chão, alternando as mãos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 6,
        nome: "Switching Mountain Climbers",
        descricao: "Apoie-se nos braços e chute o ar alternando os joelhos.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 7,
        nome: "Shoulder to Shoulder",
        descricao: "Apoie-se nos braços e toque alternadamente os ombros, dorso, cintura, joelhos e pés.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 8,
        nome: "Seated In & Outs",
        descricao: "Sentado, com as mãos atrás da cintura, estique as pernas e traga as pernas ao peito, voltando a esticar.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 9,
        nome: "Seated Leg Flutters",
        descricao: "Sentado, com as mãos atrás da cintura, estique as pernas e intercale-as, levantando uma de cada vez.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 10,
        nome: "Bicycles",
        descricao: "Deite-se de costas, coloque as mãos na cabeça e toque o cotovelo direito no joelho esquerdo e vice-versa.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 11,
        nome: "Full Pank Position",
        descricao: "Apoie-se nos antebraços e pés, mantenha o corpo reto e apoiado.",
        imagem: "../assets/image/image-video.png",
        video: "../assets/video/video-exemplo.mp4"
    },
    {
        id: 12,
        nome: "Full Push-Up Position",
        descricao: "Fique em prancha alta, abaixe o peito em direção ao chão e empurre de volta à posição inicial.",
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
    const timerRef = useRef<NodeJS.Timeout | null>(null);

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
        
        timerRef.current = setInterval(() => {
            count--;
            setFimDoTempoStretching(count);
            if (count === 0) {
                clearInterval(timerRef.current!);
                audioRef.current?.play();
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
        
        timerRef.current = setInterval(() => {
            count--;
            setFimDoTempoFatBurning(count);
            if (count === 0) {
                clearInterval(timerRef.current!);
                audioRef.current?.play();
                setTimeout(() => {
                    setCronometroAtivoFatBurning(null);
                    setExercicioConcluidoFatBurning((prev) => ({ ...prev, [id]: true }));
                }, 5000);
            }
        }, 1000);
    };

    const pararCronometroStretching = () => {
        clearInterval(timerRef.current!);
        setCronometroAtivoStretching(null);
        setFimDoTempoStretching(0);
    };

    const pararCronometroFatBurning = () => {
        clearInterval(timerRef.current!);
        setCronometroAtivoFatBurning(null);
        setFimDoTempoFatBurning(0);
    };

    return (
        <section className="area-geral-exercicios">
            <h1 style={{ zIndex: 1, fontSize: '25pt' }} >Lista de Exercícios</h1>
            <p style={{ zIndex: 1, fontSize: '15pt', color: 'gray', marginBottom: '20px' }} >Stretching & Fat Burning</p>
            <section className="area-aviso-exercicios">
                <div className="aviso-exercicios">
                    <h3>Atenção:</h3>
                    <p>- Utilize um tapete de yoga para maior conforto.</p>
                    <p>- Use calçados apropriados para atividades físicas.</p>
                    <p>- Execute os exercícios de forma confortável, sem forçar o corpo.</p>
                </div>
            </section>
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
                                            <>
                                                <button onClick={() => dispararCronometroStretching(id)}>Iniciar</button>
                                                <button onClick={pararCronometroStretching} >Parar</button>
                                            </>
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
                                            <>
                                                <button onClick={() => dispararCronometroFatBurning(id)}>Iniciar</button>
                                                <button onClick={pararCronometroFatBurning} >Parar</button>
                                            </>
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