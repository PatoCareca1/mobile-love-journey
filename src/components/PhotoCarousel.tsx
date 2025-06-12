// src/components/PhotoCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import type { Memory } from '../types/Memory';

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface PhotoCarouselProps {
  memories: Memory[];
  onImageClick: (memory: Memory) => void;
}

export default function PhotoCarousel({ memories, onImageClick }: PhotoCarouselProps) {
  return (
    <div className="w-full max-w-2xl">
      {/* --- DOCUMENTAÇÃO DA MUDANÇA ---
        Aumentámos a altura novamente para dar ainda mais destaque.
        Experimente os valores `h-96` (altura fixa) e `sm:h-[32rem]` (altura em telas maiores).
        Ajuste-os se achar necessário!
      --- FIM DA DOCUMENTAÇÃO --- */}
      <Swiper
        effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="h-96 sm:h-[32rem]" // Aumentámos a altura aqui
      >
        {memories.map((memory) => (
          <SwiperSlide 
            key={memory.id} 
            className="w-72 h-72 sm:w-96 sm:h-96 bg-gray-300 cursor-pointer group" // Aumentámos o slide
            onClick={() => onImageClick(memory)}
          >
            <img src={memory.images[0]} alt={memory.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"/>
          </SwiperSlide>
        ))}
        <div className="slider-controler mt-4">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}