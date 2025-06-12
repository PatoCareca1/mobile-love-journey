// src/pages/MemoryPage.tsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { memories } from '../data/memories';
import MemoryContent from '../components/MemoryContent';
import NextMemoryButton from '../components/NextMemoryButton';
import { useAudio } from '../context/AudioContext';


export default function MemoryPage() {
  const { playSong1 } = useAudio(); // 2. Pegar a função de tocar a música 1

  useEffect(() => {
    playSong1(); // 3. Tocar a música 1 quando a página de memória carregar
  }, [playSong1]);
  
  const { id } = useParams<{ id: string }>();
  const memory = memories.find(m => m.id === Number(id));

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const randomRotation = Math.random() * 10 - 5;
    setRotation(randomRotation);
  }, [id]);

  if (!memory) return <p className="p-4 text-center">Memória não encontrada.</p>;

  return (
    <div className="
      min-h-screen flex flex-col justify-center
      items-center p-4 gap-8
    ">
      <div
        className="
          w-full max-w-xs sm:max-w-sm
          bg-white p-4 pb-16 shadow-lg
          relative
          transition-transform duration-300 ease-in-out
        "
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="relative w-full aspect-[1/1] bg-gray-200">
          <img
            src={memory.images[0]}
            alt={memory.caption}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <p className="
          absolute bottom-4 left-0 right-0
          text-center font-handwriting text-lg text-gray-800
        ">
          {memory.caption}
        </p>
      </div>

      {/* --- Documentação da Mudança --- */}
      {/* A única alteração aqui foi na chamada do <MemoryContent />. */}
      {/* Atualizámos para passar apenas a `note`, de acordo com a nova versão do componente. */}
      {/* --- Fim da Documentação --- */}
      <MemoryContent note={memory.note} />

      <NextMemoryButton current={memory} allMemories={memories} />
    </div>
  );
}