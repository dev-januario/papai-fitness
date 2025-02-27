import React, { useState, useRef } from "react";
import { ChevronUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
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
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/lumbar-rotation-stretch-right.mp4"
    },
    {
        id: 2,
        nome: "Lumbar Rotation Stretch (Left)",
        descricao: "Deite-se de costas, levante a perna esquerda em 90 graus e puxe-a com o braço direito, segurando-a sobre a perna direita.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/lumbar-rotation-stretch-left.mp4"
    },
    {
        id: 3,
        nome: "Hamstring Stretch (Right)",
        descricao: "Deite-se de costas e levante a perna direita o máximo que conseguir, segurando-a com ambas as mãos.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/hamstring-stretch-right.mp4"
    },
    {
        id: 4,
        nome: "Hamstring Stretch (Left)",
        descricao: "Deite-se de costas e levante a perna esquerda o máximo que conseguir, segurando-a com ambas as mãos.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/hamstring-stretch-left.mp4"
    },
    {
        id: 5,
        nome: "Piriformis Stretch (Right)",
        descricao: "Deite-se de costas, levante a perna esquerda em 90 graus e cruze a perna direita sobre ela.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/piriformis-stretch-right.mp4"
    },
    {
        id: 6,
        nome: "Piriformis Stretch (Left)",
        descricao: "Deite-se de costas, levante a perna direita em 90 graus e cruze a perna esquerda sobre ela.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/piriformis-stretch-left.mp4"
    },
    {
        id: 7,
        nome: "Tall Kneeling Hip Flexor Stretch (Right)",
        descricao: "Ajoelhe-se, faça um ângulo de 90 graus com a perna esquerda para frente e estique a direita para trás.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/tall-kneeling-hip-flexor-stretch-right.mp4"
    },
    {
        id: 8,
        nome: "Knelling Hamstring Stretch (Left)",
        descricao: "Ajoelhe-se, estique a perna esquerda para frente e chegue perto de sentar sobre o pé direito.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/kneeling-hamstring-stretch-left.mp4"
    },
    {
        id: 9,
        nome: "Tall Kneeling Hip Flexor Stretch (Left)",
        descricao: "Ajoelhe-se, faça um ângulo de 90 graus com a perna direita para frente e estique a esquerda para trás.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/tall-kneeling-hip-flexor-stretch-left.mp4"
    },
    {
        id: 10,
        nome: "Kneeling Hamstring Stretch (Right)",
        descricao: "Ajoelhe-se, estique a perna direita para frente e chegue perto de sentar sobre o pé esquerdo.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/kneeling-hamstring-stretch-right.mp4"
    },
    {
        id: 11,
        nome: "Seated Spine Rotation Stretch (Right)",
        descricao: "Sente-se, estique a perna direita e cruze a esquerda sobre ela, apoiando o braço esquerdo atrás e o cotovelo direito no joelho esquerdo.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/seated-spine-rotation-stretch-right.mp4"
    },
    {
        id: 12,
        nome: "Seated Spine Rotation Stretch (Left)",
        descricao: "Sente-se, estique a perna esquerda e cruze a direita sobre ela, apoiando o braço direito atrás e o cotovelo esquerdo no joelho direito.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/seated-spine-rotation-stretch-left.mp4"
    },
    {
        id: 13,
        nome: "Chilld's Pose Stretch",
        descricao: "Ajoelhe-se, sente-se sobre os pés e estique os braços à frente.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/childs-pose-stretch.mp4"
    },
    {
        id: 14,
        nome: "Upper Back Extension",
        descricao: "Sente-se com as costas retas, coloque as mãos na cabeça e curve-se para frente, depois retorne à posição ereta com os braços abertos.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/upper-back-extension.mp4"
    },
    {
        id: 15,
        nome: "Upper Trap Stretch (Right)",
        descricao: "Sente-se com as costas retas e puxe o pescoço para a esquerda.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/upper-trap-stretch-right.mp4"
    },
    {
        id: 16,
        nome: "Upper Trap Stretch (Left)",
        descricao: "Sente-se com as costas retas e puxe o pescoço para a direita.",
        imagem: "/assets/image/stretching.png",
        video: "/assets/video/stretching/upper-trap-stretch-left.mp4"
    },
];

const exerciciosFatBurning: Exercicio[] = [
    {
        id: 1,
        nome: "Butt Kicks",
        descricao: "Em pé, jogue os braços para trás e pule, batendo os calcanhares nas mãos.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/butt-kicks.mp4"
    },
    {
        id: 2,
        nome: "Burpees",
        descricao: "Apoie-se nos braços, faça uma flexão e, em seguida, pule levantando os joelhos.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/burpees.mp4"
    },
    {
        id: 3,
        nome: "Jumping Jacks",
        descricao: "Em pé, pule abrindo as pernas e batendo as mãos acima da cabeça, fechando as pernas ao abaixar os braços.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/jumping-jacks.mp4"
    },
    {
        id: 4,
        nome: "Switching Lunges",
        descricao: "Em pé, coloque o joelho esquerdo à frente e o direito para trás, intercalando pulos e agachamentos.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/switching-lunges.mp4"
    },
    {
        id: 5,
        nome: "Squat Taps",
        descricao: "Em pé, feche as pernas e abra ao tocar a mão esquerda no chão, alternando as mãos.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/squat-taps.mp4"
    },
    {
        id: 6,
        nome: "Switching Mountain Climbers",
        descricao: "Apoie-se nos braços e chute o ar alternando os joelhos.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/switching-mountain-climbers.mp4"
    },
    {
        id: 7,
        nome: "Shoulder to Shoulder",
        descricao: "Apoie-se nos braços e toque alternadamente os ombros, dorso, cintura, joelhos e pés.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/shoulder-to-shoulder.mp4"
    },
    {
        id: 8,
        nome: "Seated In & Outs",
        descricao: "Sentado, com as mãos atrás da cintura, estique as pernas e traga as pernas ao peito, voltando a esticar.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/seated-in-&-outs.mp4"
    },
    {
        id: 9,
        nome: "Seated Leg Flutters",
        descricao: "Sentado, com as mãos atrás da cintura, estique as pernas e intercale-as, levantando uma de cada vez.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/seated-leg-flutter.mp4"
    },
    {
        id: 10,
        nome: "Bicycles",
        descricao: "Deite-se de costas, coloque as mãos na cabeça e toque o cotovelo direito no joelho esquerdo e vice-versa.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/bicycles.mp4"
    },
    {
        id: 11,
        nome: "Full Plank Position",
        descricao: "Apoie-se nos antebraços e pés, mantenha o corpo reto e apoiado.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/full-plank-position.mp4"
    },
    {
        id: 12,
        nome: "Full Push-Up Position",
        descricao: "Fique em prancha alta, abaixe o peito em direção ao chão e empurre de volta à posição inicial.",
        imagem: "/assets/image/fat-burning.jpg",
        video: "/assets/video/fat-burning/full-push-up-position.mp4"
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
    const audioRef = useRef<HTMLAudioElement>(new Audio('/assets/audio/despertador.mp3'));
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const videoRefsStretching = useRef<{ [key: number]: HTMLVideoElement | null }>({});
    const videoRefsFatBurning = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    const [videoAberto, setVideoAberto] = useState<{ id: number | null, tipo: 'stretching' | 'fatBurning' | null }>({ id: null, tipo: null });
    const [posterAtual, setPosterAtual] = useState<string | null>(null);

    const [modalCronometroVisible, setModalCronometroVisible] = useState(false);
    const [tempoModal, setTempoModal] = useState(0);
    const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | null>(null);

    const toggleExercicioStretching = (id: number) => {
        setExercicioConcluidoStretching(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleExercicioFatBurning = (id: number) => {
        setExercicioConcluidoFatBurning(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const dispararCronometroStretching = (id: number, button: HTMLButtonElement) => {
        setCronometroAtivoStretching(id);
        let count = 30;
        setFimDoTempoStretching(count);
        setTempoModal(count);
    
        const rect = button.getBoundingClientRect();
        setModalPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    
        setModalCronometroVisible(true);
    
        timerRef.current = setInterval(() => {
            count--;
            setFimDoTempoStretching(count);
            setTempoModal(count);
            if (count === 0) {
                clearInterval(timerRef.current!);
                audioRef.current?.play();
                toggleExercicioStretching(id);
    
                setTimeout(() => {
                    audioRef.current?.pause();
                    audioRef.current.currentTime = 0;
                }, 4000);
    
                setTimeout(() => {
                    setCronometroAtivoStretching(null);
                    setModalCronometroVisible(false);
                }, 5000);
            }
        }, 1000);
    };
    
    const dispararCronometroFatBurning = (id: number, button: HTMLButtonElement) => {
        setCronometroAtivoFatBurning(id);
        let count = 45;
        setFimDoTempoFatBurning(count);
        setTempoModal(count);
    
        const rect = button.getBoundingClientRect();
        setModalPosition({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    
        setModalCronometroVisible(true);
    
        timerRef.current = setInterval(() => {
            count--;
            setFimDoTempoFatBurning(count);
            setTempoModal(count);
            if (count === 0) {
                clearInterval(timerRef.current!);
                audioRef.current?.play();
                toggleExercicioFatBurning(id);
    
                setTimeout(() => {
                    audioRef.current?.pause();
                    audioRef.current.currentTime = 0;
                }, 4000);
    
                setTimeout(() => {
                    setCronometroAtivoFatBurning(null);
                    setModalCronometroVisible(false);
                }, 5000);
            }
        }, 1000);
    };

    const pararCronometro = () => {
        clearInterval(timerRef.current!);
        setModalCronometroVisible(false);
        setCronometroAtivoStretching(null);
        setCronometroAtivoFatBurning(null);
    };

    const modalVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 }
    };

    const abrirVideo = (id: number, tipo: 'stretching' | 'fatBurning') => {
        setVideoAberto({ id, tipo });
        const videoElement = tipo === 'stretching' 
            ? videoRefsStretching.current[id] 
            : videoRefsFatBurning.current[id];
        
        if (videoElement) {
            const poster = videoElement.getAttribute('poster');
            setPosterAtual(poster);
            videoElement.setAttribute('data-poster', poster || '');
            videoElement.currentTime = 0;
            videoElement.pause();
        }
    };

    const togglePlayPause = (e: React.MouseEvent<HTMLVideoElement>) => {
        e.stopPropagation(); // Evita que o clique feche o vídeo
        const videoElement = videoAberto.tipo === 'stretching' 
            ? videoRefsStretching.current[videoAberto.id!] 
            : videoRefsFatBurning.current[videoAberto.id!];
        if (videoElement) {
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        }
    };

    const fecharVideo = () => {
        const videoElement = videoAberto.tipo === 'stretching' 
            ? videoRefsStretching.current[videoAberto.id!] 
            : videoRefsFatBurning.current[videoAberto.id!];
        
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
            const posterOriginal = videoElement.getAttribute('data-poster') || posterAtual;
            videoElement.removeAttribute('poster');
            videoElement.setAttribute('poster', posterOriginal || '');
        }
        
        setVideoAberto({ id: null, tipo: null });
    };

    const todosExerciciosConcluidos = () => {
        const todosStretching = exerciciosStretching.every((exercicio) => exercicioConcluidoStretching[exercicio.id] === true);
        const todosFatBurning = exerciciosFatBurning.every((exercicio) => exercicioConcluidoFatBurning[exercicio.id] === true);
        return todosStretching && todosFatBurning;
    };

    return (
        <section className="area-geral-exercicios">
            <h1 style={{ zIndex: 1, fontSize: '25pt' }} >Lista de Exercícios</h1>
            <p style={{ zIndex: 1, fontSize: '15pt', color: 'gray' }} >Stretching & Fat Burning</p>
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
                                <ul key={id} >
                                    <li>
                                        <div>
                                            <input 
                                                type="checkbox" 
                                                checked={exercicioConcluidoStretching[id] || false}
                                                onChange={() => toggleExercicioStretching(id)}
                                                style={{ accentColor: '#1BC250' }}
                                            />
                                        </div>
                                        <div className="detalhes-exercicio">
                                            <div className="image-video">
                                                <video
                                                    ref={(el) => (videoRefsStretching.current[id] = el)}
                                                    src={video}
                                                    poster={imagem}
                                                    data-poster={imagem}
                                                    muted
                                                    loop
                                                    style={{ objectFit: 'cover' }}
                                                    onClick={() => abrirVideo(id, 'stretching')}
                                                />
                                            </div>
                                            <div className="nome-descricao-exercicios">
                                                <h3>{nome}</h3>
                                                <p>{descricao}</p>
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <div className="cronometro-exercicios">
                                        <button 
                                            onClick={(e) => dispararCronometroStretching(id, e.currentTarget)}
                                            disabled={cronometroAtivoStretching === id}
                                        >
                                            {cronometroAtivoStretching === id ? fimDoTempoStretching : 'Iniciar'}
                                        </button>
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
                                <ul key={id} >
                                    <li>
                                        <div>
                                            <input 
                                                type="checkbox" 
                                                checked={exercicioConcluidoFatBurning[id] || false}
                                                onChange={() => toggleExercicioFatBurning(id)}
                                                style={{ accentColor: '#1BC250' }}
                                            />
                                        </div>
                                        <div className="detalhes-exercicio">
                                            <div className="image-video">
                                                <video
                                                    ref={(el) => (videoRefsFatBurning.current[id] = el)}
                                                    src={video}
                                                    poster={imagem}
                                                    data-poster={imagem}
                                                    muted
                                                    loop
                                                    style={{ objectFit: 'cover' }}
                                                    onClick={() => abrirVideo(id, 'fatBurning')}
                                                />
                                            </div>
                                            <div className="nome-descricao-exercicios">
                                                <h3>{nome}</h3>
                                                <p>{descricao}</p>
                                            </div>
                                        </div>
                                    </li>
                                    <div className="cronometro-exercicios">
                                        <button 
                                            onClick={(e) => dispararCronometroFatBurning(id, e.currentTarget)}
                                            disabled={cronometroAtivoFatBurning === id}
                                        >
                                            {cronometroAtivoFatBurning === id ? fimDoTempoFatBurning : 'Iniciar'}
                                        </button>
                                    </div>
                                </ul>
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {videoAberto.id !== null && (
                <div className="video-modal" onClick={fecharVideo}>
                    <div className="video-container" onClick={(e) => e.stopPropagation()}>
                        <video
                            ref={(el) => {
                                if (videoAberto.tipo === 'stretching') {
                                    videoRefsStretching.current[videoAberto.id!] = el;
                                } else {
                                    videoRefsFatBurning.current[videoAberto.id!] = el;
                                }
                            }}
                            src={
                                videoAberto.tipo === 'stretching' 
                                    ? exerciciosStretching[videoAberto.id! - 1].video 
                                    : exerciciosFatBurning[videoAberto.id! - 1].video
                            }
                            style={{ width: '95%', height: '100%' }}
                            onClick={togglePlayPause}
                        />
                    </div>
                </div>
            )}

            {modalCronometroVisible && (
                <motion.div 
                    className="modal-background" 
                    initial="hidden" 
                    animate="visible" 
                    exit="exit"
                    variants={modalVariants}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="modal-cronometro"
                        style={modalPosition ? {
                            position: 'absolute',
                        } : undefined}
                    >
                        <div className="modal-content">
                            <h2>Cronômetro</h2>
                            <h1>{tempoModal}</h1>
                            <button onClick={pararCronometro}>Parar</button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <section className="area-botao-conclusao-treino">
                <button 
                    className="botao-conclusao-treino" 
                    disabled={!todosExerciciosConcluidos()}
                >
                    Encerrar treino
                </button>
            </section>
        </section>
    );
};

export default PaginaExercicios;