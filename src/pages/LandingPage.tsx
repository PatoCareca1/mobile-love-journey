// src/pages/LandingPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const [isOpening, setIsOpening] = useState(false);
  const navigate = useNavigate();

  const startJourney = () => {
    // Inicia a animação de abertura
    setIsOpening(true);
    
    // Após a animação, navega para a primeira memória
    setTimeout(() => {
      navigate('/memory/1');
    }, 1500); // Tempo total da animação
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#ffcdac] to-[#fff3e8] p-5">
      <div className="flex flex-col items-center gap-6 text-center">
        {/* Mensagens Românticas */}
        <h1 className="font-great-vibes text-[#991938] text-6xl leading-none" style={{ textShadow: '2px 2px 8px #ffe3d1' }}>
          Olá, meu amor!
        </h1>
        <p className="font-quicksand text-[#a33e5a] text-lg font-medium">
          Esse é um pequeno gesto para lembrar que te amo muito.
        </p>
        <p className="font-quicksand text-[#a33e5a] text-lg font-medium -mt-4">
          Vamos iniciar nossa jornada e ver onde tudo começou?
        </p>

        {/* Envelope Animado */}
        <div className={`envelope-wrapper relative w-[280px] h-[190px] mt-4 ${isOpening ? 'opening' : ''}`}>
          {/* Corpo do Envelope */}
          <div className="envelope-body absolute bottom-0 w-full h-full bg-[#f7d9c4] rounded-md shadow-lg overflow-hidden z-20">
            {/* Carta */}
            <div className="letter absolute bottom-0 w-[90%] h-[90%] left-[5%] bg-white rounded-md shadow-inner flex justify-center items-center">
              <button 
                onClick={startJourney} 
                className="pulse-btn bg-[#991938] text-[#fff3e8] font-quicksand font-bold text-base py-2 px-6 rounded-full shadow-md hover:scale-105 hover:-translate-y-1 transition-all"
              >
                Clique para começar
              </button>
            </div>
          </div>
          {/* Aba do Envelope */}
          <div className="flap absolute top-0 w-full h-[55%] bg-[#f7d9c4] z-30">
            {/* Selo de Coração */}
            <div className="heart-seal absolute top-[45%] left-1/2 -translate-x-1/2 w-8 h-8 text-[#c0392b] z-40">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}