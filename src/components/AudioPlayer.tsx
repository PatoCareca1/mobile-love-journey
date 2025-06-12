// src/components/AudioPlayer.tsx
interface AudioPlayerProps {
  title: string;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export default function AudioPlayer({ title, isPlaying, onTogglePlay }: AudioPlayerProps) {
  return (
    <div className="w-full max-w-md bg-black bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg flex items-center p-4 gap-4">
      <div className="flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-300"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      </div>
      <div className="flex-grow text-left">
        <p className="text-white font-bold text-sm truncate">{title}</p>
        <p className="text-pink-200 text-xs">{isPlaying ? 'Tocando agora...' : 'Pausado'}</p>
      </div>
      <div className="flex-shrink-0">
        <button onClick={onTogglePlay} className="w-12 h-12 rounded-full bg-pink-400 text-white flex items-center justify-center shadow-lg hover:bg-pink-500" aria-label={isPlaying ? 'Pausar música' : 'Tocar música'}>
          {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14.016 5.016H18V18.984H14.016V5.016ZM6 18.984V5.016H9.984V18.984H6Z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M8.016 5.016L18.984 12L8.016 18.984V5.016Z"/></svg>}
        </button>
      </div>
    </div>
  );
}