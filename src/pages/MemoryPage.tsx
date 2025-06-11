// src/pages/MemoryPage.tsx
import { useParams } from 'react-router-dom';
import { memories } from '../data/memories';
import MemoryContent from '../components/MemoryContent';
import NextMemoryButton from '../components/NextMemoryButton';

export default function MemoryPage() {
  const { id } = useParams<{ id: string }>();
  const memory = memories.find(m => m.id === Number(id));

  if (!memory) return <p className="p-4 text-center">Memória não encontrada.</p>;

  return (
    <div className="
      min-h-screen flex flex-col justify-between
      items-center p-4 bg-pink-50
    ">
      <div className="
        w-full max-w-xs sm:max-w-md
        flex flex-col items-center
        bg-white rounded-xl shadow-lg
        pt-4 pb-7 px-3 mb-6
        relative
        before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2
        before:w-11/12 before:h-6 before:bg-white before:rounded-b-lg
        before:shadow-sm
      ">
        <div className="relative w-full aspect-[3/4] bg-gray-200 rounded-t-lg overflow-hidden">
          <img
            src={memory.images[0]}
            alt={memory.caption}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* “Barra” maior na parte de baixo para simular a borda da polaroide */}
        <div className="w-full h-8 flex items-center justify-center">
          <span className="text-xs text-gray-600">{memory.caption}</span>
        </div>
      </div>

      <MemoryContent caption={memory.caption} note={memory.note} />

      <NextMemoryButton current={memory} allMemories={memories} />
    </div>
  );
}
