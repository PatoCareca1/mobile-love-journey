// src/context/AudioContext.tsx
import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { Howl } from 'howler';
import { finalPageData } from '../data/memories';

interface AudioContextType {
  playSong1: () => void;
  playSong2: () => void;
  toggleCurrentSong: () => void;
  stopAll: () => void;
  currentSong: 'song1' | 'song2' | null;
  isPlaying: boolean;
  currentSongName: string;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<'song1' | 'song2' | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);
  const onStop = () => setIsPlaying(false);
  const onEnd = () => setIsPlaying(false);

  const song1 = useMemo(() => new Howl({ 
    src: [finalPageData.music1_path], html5: true, loop: true, onplay: onPlay, onpause: onPause, onstop: onStop, onend: onEnd 
  }), []);

  const song2 = useMemo(() => new Howl({ 
    src: [finalPageData.music2_path], html5: true, loop: true, onplay: onPlay, onpause: onPause, onstop: onStop, onend: onEnd 
  }), []);

  const stopAll = useCallback(() => {
    song1.stop();
    song2.stop();
  }, [song1, song2]);

  const playSong1 = useCallback(() => {
    if (currentSong !== 'song1' || !song1.playing()) {
      stopAll();
      song1.play();
      setCurrentSong('song1');
    }
  }, [song1, stopAll, currentSong]);

  const playSong2 = useCallback(() => {
    if (currentSong !== 'song2' || !song2.playing()) {
      stopAll();
      song2.play();
      setCurrentSong('song2');
    }
  }, [song2, stopAll, currentSong]);

  const toggleCurrentSong = useCallback(() => {
    if (currentSong === 'song1') {
      song1.playing() ? song1.pause() : song1.play();
    } else if (currentSong === 'song2') {
      song2.playing() ? song2.pause() : song2.play();
    }
  }, [currentSong, song1, song2]);
  
  const currentSongName = useMemo(() => {
    if (currentSong === 'song1') return finalPageData.music1_name;
    if (currentSong === 'song2') return finalPageData.music2_name;
    return 'Nenhuma música selecionada';
  }, [currentSong]);

  const value = { playSong1, playSong2, toggleCurrentSong, stopAll, currentSong, isPlaying, currentSongName };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within a AudioProvider');
  }
  return context;
};