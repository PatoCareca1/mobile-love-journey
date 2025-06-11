// src/components/MemoryContent.tsx

interface MemoryContentProps {
  note: string;
}

export default function MemoryContent({ note }: MemoryContentProps) {
  return (
    // Para dar mais espaço ao texto maior, aumentamos a largura máxima do container.
    <div className="w-full max-w-md text-center"> 
      <p className="font-comic text-opacity-100 whitespace-pre-wrap text-2xl ">
        {note}
      </p>
    </div>
  );
}