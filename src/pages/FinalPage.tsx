// src/pages/FinalPage.tsx
import { finalPageData } from '../data/memories';
import PhotoCarousel from '../components/PhotoCarousel';
import AudioPlayer from '../components/AudioPlayer';

export default function FinalPage() {
  const { declaration, carouselImages, music } = finalPageData;

  return (
    <div className="
      min-h-screen w-full flex flex-col justify-center items-center 
      p-4 text-center text-white gap-8
    ">
      <div className="bg-black bg-opacity-40 p-6 rounded-xl shadow-2xl max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold font-handwriting text-pink-300 mb-4">
          Nossa Jornada de Amor
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          {declaration}
        </p>
      </div>

      <PhotoCarousel images={carouselImages} />

      <AudioPlayer src={music} />
    </div>
  );
}