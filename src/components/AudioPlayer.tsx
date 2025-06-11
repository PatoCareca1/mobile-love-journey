// src/components/AudioPlayer.tsx
import { useState, useEffect, useMemo } from 'react';
import { Howl } from 'howler';

interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // useMemo garante que o objeto 'sound' só seja criado uma vez
  const sound = useMemo(() => {
    return new Howl({
      src: [src],
      html5: true, // Essencial para funcionar bem em mobile
      loop: true,
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onstop: () => setIsPlaying(false),
    });
  }, [src]);

  // Efeito para parar a música quando o componente for desmontado
  useEffect(() => {
    return () => {
      sound.stop();
    };
  }, [sound]);

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="
        mt-8 px-6 py-3 rounded-full 
        bg-pink-400 text-white font-bold
        shadow-lg hover:bg-pink-500 transition-all
        flex items-center gap-3
      "
    >
      {isPlaying ? 'Pausar música' : 'Tocar nossa música'}
      {/* Ícone de nota musical (SVG) */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
    </button>
  );
}