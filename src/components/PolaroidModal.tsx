// src/components/PolaroidModal.tsx
import type { Memory } from "../types/Memory";

interface PolaroidModalProps {
  memory: Memory;
  onClose: () => void;
}

export default function PolaroidModal({ memory, onClose }: PolaroidModalProps) {
  return (
    // --- DOCUMENTAÇÃO DA MUDANÇA ---
    // A MÁGICA ESTÁ AQUI:
    // 1. `backdrop-blur-sm`: Esta classe do Tailwind desfoca tudo o que está atrás deste elemento.
    // 2. `bg-opacity-50`: Reduzimos a opacidade do fundo para que o desfoque seja mais visível.
    // --- FIM DA DOCUMENTAÇÃO ---
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-pink-300 z-10"
        aria-label="Fechar modal"
        onClick={onClose}
      >
        &times;
      </button>
      
      <div
        className="
          w-full max-w-xs sm:max-w-md
          bg-white p-4 pb-20 shadow-xl
          transform rotate-1
          relative
        "
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="relative w-full aspect-[1/1] bg-gray-200">
          <img
            src={memory.images[0]}
            alt={memory.caption}
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="
          absolute bottom-5 left-0 right-0
          text-center font-handwriting text-2xl text-gray-800
        ">
          {memory.caption}
        </p>
      </div>
    </div>
  );
}