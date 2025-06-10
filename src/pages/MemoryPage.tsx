// src/pages/MemoryPage.tsx
import React from 'react';
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
      items-center p-4
      bg-pink-50
    ">
      <div className="
        w-full max-w-md
        bg-white rounded-2xl shadow-lg
        overflow-hidden
      ">
        <img
          src={memory.images[0]}
          alt={memory.caption}
          loading="lazy"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <MemoryContent
            caption={memory.caption}
            note={memory.note}
          />
        </div>
      </div>

      <NextMemoryButton
        current={memory}
        allMemories={memories}
      />
    </div>
  );
}
