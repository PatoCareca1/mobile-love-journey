// src/components/PhotoCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Importando os estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface PhotoCarouselProps {
  images: string[];
}

// --- Documentação do Componente ---
// Este componente usa Swiper.js para criar um carrossel 3D interativo.
// - EffectCoverflow: Cria o efeito de "cartas" sobrepostas.
// - Pagination: Adiciona as bolinhas de navegação.
// - Navigation: Adiciona as setas de "próximo" e "anterior".
// As configurações no componente <Swiper> podem ser ajustadas para mudar o visual.
// --- Fim da Documentação ---
export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  return (
    <div className="w-full max-w-lg">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-64 sm:h-80"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-48 h-48 sm:w-64 sm:h-64 bg-gray-300">
            <img 
              src={image} 
              alt={`Lembrança ${index + 1}`} 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </SwiperSlide>
        ))}

        {/* Elementos customizados para navegação */}
        <div className="slider-controler mt-4">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}