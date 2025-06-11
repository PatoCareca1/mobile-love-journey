import { useNavigate } from 'react-router-dom';
import type { Memory } from '../types/Memory';

interface Props {
  current: Memory;
  allMemories: Memory[];
}

export default function NextMemoryButton({ current, allMemories }: Props) {
  const navigate = useNavigate();
  const nextId = current.id + 1;
  const hasNext = allMemories.some(m => m.id === nextId);

  return (
    <button
      onClick={() => navigate(hasNext ? `/memory/${nextId}` : '/final')}
      className="
        mt-8 px-8 py-3
        bg-gradient-to-r from-pink-400 to-pink-500
        text-white font-semibold
        rounded-full shadow-md
        hover:from-pink-500 hover:to-pink-600
        active:scale-95
        transition-all duration-200
      "
    >
      {hasNext ? 'Próxima memória →' : 'Ver resumo final ❤️'}
    </button>
  );
}
