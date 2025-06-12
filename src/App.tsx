// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MemoryPage from './pages/MemoryPage';
import FinalPage from './pages/FinalPage';
import HeartsBackground from './components/HeartsBackground';
import { AudioProvider } from './context/AudioContext'; // Importamos o nosso Provider

export default function App() {
  return (
    // Envolvemos toda a aplicação com o AudioProvider
    <AudioProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <HeartsBackground />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/memory/:id" element={<MemoryPage />} />
          <Route path="/final" element={<FinalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AudioProvider>
  );
}