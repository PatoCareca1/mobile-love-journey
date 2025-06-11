// src/pages/MemoryPage.tsx
import { useState, useEffect } from 'react'; // 1. Importamos os hooks useState e useEffect
import { useParams } from 'react-router-dom';
import { memories } from '../data/memories';
import MemoryContent from '../components/MemoryContent';
import NextMemoryButton from '../components/NextMemoryButton';

export default function MemoryPage() {
  const { id } = useParams<{ id: string }>();
  const memory = memories.find(m => m.id === Number(id));

  // --- Início da Documentação da Lógica Aleatória ---
  // 2. Criamos um estado para guardar o valor da rotação. Começa em 0.
  const [rotation, setRotation] = useState(0);

  // 3. Usamos useEffect para executar um código uma única vez quando o componente é montado.
  // A lista de dependências vazia `[]` no final garante que ele só rode na montagem.
  useEffect(() => {
    // Geramos um número aleatório entre -5 e 5.
    // Math.random() -> gera um número entre 0 e 1 (ex: 0.7)
    // * 10         -> escala para 0 a 10 (ex: 7)
    // - 5          -> desloca o intervalo para -5 a 5 (ex: 2)
    const randomRotation = Math.random() * 10 - 5;
    setRotation(randomRotation); // 4. Atualizamos o estado com o nosso valor aleatório.
  }, [id]); // Adicionamos `id` como dependência, para que a rotação mude ao navegar para outra memória.

  if (!memory) return <p className="p-4 text-center">Memória não encontrada.</p>;
  
  // --- Fim da Documentação ---

  return (
    <div className="
      min-h-screen flex flex-col justify-center
      items-center p-4 gap-8
    ">
      {/* Container da Polaroide 
        Removemos a classe "-rotate-3" e adicionamos o atributo `style`.
      */}
      <div
        className="
          w-full max-w-xs sm:max-w-sm
          bg-white p-4 pb-16 shadow-lg
          relative
          transition-transform duration-300 ease-in-out
        "
        // 5. Aplicamos a rotação dinamicamente usando o valor do nosso estado.
        // O React transforma este objeto em um estilo inline: `transform: rotate(2deg);`
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

      <MemoryContent caption={memory.caption} note={memory.note} />

      <NextMemoryButton current={memory} allMemories={memories} />
    </div>
  );
}