import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MemoryPage from './pages/MemoryPage';
import FinalPage from './pages/FinalPage';
import HeartsBackground from './components/HeartsBackground';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <HeartsBackground />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/memory/:id" element={<MemoryPage />} />
          <Route path="/final" element={<FinalPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </div>  
  );
}
