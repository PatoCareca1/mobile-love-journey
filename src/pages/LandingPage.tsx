// src/pages/LandingPage.tsx
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="
      min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300
      px-4 text-center
    ">
      <h1 className="
        text-4xl sm:text-5xl font-bold mb-8
        text-white drop-shadow-lg
      ">
        Bem-vinda, meu amor!
      </h1>
      <Link
        to="/memory/1"
        className="
          px-10 py-4 
          bg-white bg-opacity-90 text-pink-500 font-semibold
          rounded-full shadow-lg
          hover:bg-opacity-100 hover:shadow-xl
          transition-all duration-300
        "
      >
        Começar nossa jornada
      </Link>
    </div>
  );
}
