// src/pages/FinalPage.tsx
import { useState, useEffect } from 'react';
// 1. IMPORTAÇÃO CORRIGIDA: Adicionamos `finalPageData` à importação
import { memories, finalPageData } from '../data/memories';
import type { Memory } from '../types/Memory';
import { useAudio } from '../context/AudioContext';
import AudioPlayer from '../components/AudioPlayer';
import PhotoCarousel from '../components/PhotoCarousel';
import PolaroidModal from '../components/PolaroidModal';

export default function FinalPage() {
  const { playSong2, isPlaying, toggleCurrentSong, currentSongName } = useAudio();
  // 2. EXTRAÇÃO DA VARIÁVEL: Extraímos o `declaration` do `finalPageData`
  const { declaration } = finalPageData;
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  useEffect(() => {
    playSong2();
  }, [playSong2]);

  const handleImageClick = (memory: Memory) => setSelectedMemory(memory);
  const handleCloseModal = () => setSelectedMemory(null);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center p-4 text-center text-white gap-10">
      <AudioPlayer 
        title={currentSongName}
        isPlaying={isPlaying}
        onTogglePlay={toggleCurrentSong}
      />
      <PhotoCarousel memories={memories} onImageClick={handleImageClick} />
      <div className="w-full max-w-2xl bg-black bg-opacity-40 p-6 rounded-xl shadow-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold font-handwriting text-pink-300 mb-6">
          "Dois Mundos e um Encontro"
        </h1>
        {/* 3. EXIBIÇÃO DO POEMA: Colocamos a variável `declaration` aqui */}
        <p className="whitespace-pre-wrap text-left text-base sm:text-lg leading-relaxed font-sans">
          {declaration}
        </p>
      </div>
      {selectedMemory && (
        <PolaroidModal memory={selectedMemory} onClose={handleCloseModal} />
      )}
    </div>
  );
}