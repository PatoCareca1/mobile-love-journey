import type { Memory } from '../types/Memory';

export const memories: Memory[] = [
  {
    id: 1,
    images: ['/assets/memories/1.jpg'],
    caption: 'Nosso primeiro encontro no parque',
    note: 'Lembro do frio na barriga quando te vi sorrir pela primeira vez...',
  },
  {
    id: 2,
    images: ['/assets/memories/1.jpg'],
    caption: 'Viagem inesquecível',
    note: 'Aquela vista do pôr-do-sol nunca saiu da minha cabeça.',
  },
  // adicione quantos quiser...
];

export interface FinalPageData {
  declaration: string;
  carouselImages: string[];
  music: string;
}

// Junta todas as imagens das memórias em uma única lista para o carrossel final
const allMemoryImages = memories.flatMap(memory => memory.images);

export const finalPageData: FinalPageData = {
  declaration:
    'Cada um desses momentos é um tijolinho na construção do nosso amor. E que venham os próximos mil capítulos da nossa história. Eu te amo, hoje e sempre!',
  
  // Usamos as imagens de todas as memórias.
  // Você pode adicionar mais imagens manualmente aqui se quiser.
  carouselImages: allMemoryImages,
  
  // IMPORTANTE: Coloque o seu arquivo de música na pasta `public`.
  // Por exemplo, crie a pasta `public/audio` e coloque o arquivo lá.
  // O caminho deve começar com `/`
  music: '/audio/nossa-musica.mp3', 
};