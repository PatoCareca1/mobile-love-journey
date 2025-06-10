import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MemoryPage from './pages/MemoryPage';
import FinalPage from './pages/FinalPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/memory/:id" element={<MemoryPage />} />
      <Route path="/final" element={<FinalPage />} />
      {/* redireciona para home se rota não existir */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
