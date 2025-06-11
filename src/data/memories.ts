import type { Memory } from '../types/Memory';

export const memories: Memory[] = [
  {
    id: 1,
    images: ['/assets/memories/1.jpeg'],
    caption: '3 de março de 2024',
    note: 'Ela chegou, sentindo antes de pensar.',
  },
  {
    id: 2,
    images: ['/assets/memories/2.jpg'],
    caption: '3 de março de 2024',
    note: 'Ele observou, pensando antes de sentir.',
  },
  {
    id: 3,
    images: ['/assets/memories/3.jpg'],
    caption: '13 de março de 2024',
    note: 'Duas línguas — nenhuma tradução necessária.',
  },
  {
    id: 4,
    images: ['/assets/memories/4.jpg'],
    caption: '30 de março de 2024',
    note: 'Ela é maré: oscila e envolve.',
  },
  {
    id: 5,
    images: ['/assets/memories/5.jpg'],
    caption: '21 de abril de 2024',
    note: 'Ele é rocha: firme e contido.',
  },
  {
    id: 6 ,
    images: ['/assets/memories/6.jpg'],
    caption: '21 de abril de 2024',
    note: 'Coração dela sempre exposto.',
  },
  {
    id: 7 ,
    images: ['/assets/memories/7.jpg'],
    caption: '15 de julho de 2024',
    note: 'Calor dele, silencioso.',
  },
  {
    id: 8 ,
    images: ['/assets/memories/8.jpg'],
    caption: '28 de julho de 2024',
    note: ' Ela fala com riso.',
  },
  {
    id: 9 ,
    images: ['/assets/memories/9.jpg'],
    caption: '20 de setembro de 2024',
    note: ' Ele escuta com silêncio.',
  },
  {
    id: 10 ,
    images: ['/assets/memories/10.jpg'],
    caption: '20 de setembro de 2024',
    note: ' Ela pede presença.',
  },
  {
    id: 11 ,
    images: ['/assets/memories/11.jpg'],
    caption: '15 de outubro de 2024',
    note: ' Ele oferece constância.',
  },
  {
    id: 12 ,
    images: ['/assets/memories/12.webp'],
    caption: '3 de novembro de 2024',
    note: 'Injustiças lhes doem igualmente.',
  },
  {
    id: 13 ,
    images: ['/assets/memories/13.jpeg'],
    caption: '8 de novembro de 2024',
    note: 'Ela se emociona; ele parte para a ação.',
  },
  {
    id: 14 ,
    images: ['/assets/memories/15.jpg'],
    caption: '30 de novembro de 2024',
    note: 'A dor do mundo toca a pele dela.',
  },
  {
    id: 15 ,
    images: ['/assets/memories/15.jpg'],
    caption: '30 de novembro de 2024',
    note: 'Ele conserta o que está oculto.',
  },
  {
    id: 16 ,
    images: ['/assets/memories/16.webp'],
    caption: '12 de janeiro de 2025',
    note: 'Ela ama o agora.',
  },
  {
    id: 17 ,
    images: ['/assets/memories/17.jpg'],
    caption: '13 de janeiro de 2025',
    note: 'Ele constrói o depois.',
  },
  {
    id: 18 ,
    images: ['/assets/memories/18.jpg'],
    caption: '16 de janeiro de 2025',
    note: 'Pontes nascem das diferenças.',
  },
  {
    id: 19 ,
    images: ['/assets/memories/19.jpg'],
    caption: '21 de janeiro de 2025',
    note: 'Primeiro, curiosidade mútua.',
  },
  {
    id: 20,
    images: ['/assets/memories/20.webp'],
    caption: '22 de janeiro de 2025',
    note: 'Ecoa um convite: “quem é?”',
  },
  {
    id: 21,
    images: ['/assets/memories/21.jpg'],
    caption: '24 de janeiro de 2025',
    note: 'Ele ama com raízes.',
  },
  {
    id: 22,
    images: ['/assets/memories/22.jpg'],
    caption: '25 de janeiro de 2025',
    note: 'Ela sente com asas.',
  },
  {
    id: 23,
    images: ['/assets/memories/23.jpg'],
    caption: '2 de fevereiro de 2025',
    note: 'Frestas acesas por ela.',
  },
  {
    id: 24,
    images: ['/assets/memories/24.jpg'],
    caption: '4 de fevereiro de 2025',
    note: 'Cantos cuidados por ele.',
  },
  {
    id: 25,
    images: ['/assets/memories/25.jpg'],
    caption: '5 de fevereiro de 2025',
    note: 'Diferentes, mas mesma essência.',
  },
  {
    id: 26,
    images: ['/assets/memories/26.jpg'],
    caption: '23 de fevereiro de 2025',
    note: 'Pertencer sem se perder.',
  },
  {
    id: 27,
    images: ['/assets/memories/27.jpg'],
    caption: '18 de março de 2025',
    note: ' Amor do jeito certo.',
  },
  {
    id: 28,
    images: ['/assets/memories/28.jpg'],
    caption: '19 de março de 2025',
    note: 'Verdade, ainda que conflituosa.',
  },
  {
    id: 29,
    images: ['/assets/memories/29.jpg'],
    caption: '23 de março de 2025',
    note: 'Ela é caos bonito.',
  },
  {
    id: 30,
    images: ['/assets/memories/30.jpg'],
    caption: '30 de maio de 2025',
    note: 'Ele, ordem que acolhe.',
  },
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