import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PasswordGate from './pages/PasswordGate'
import Landing      from './pages/Landing'
import Memories     from './pages/Memories'
import LoveLetter   from './pages/LoveLetter'
import Surprise     from './pages/Surprise'
import Ending       from './pages/Ending'
import MusicPlayer  from './components/MusicPlayer'
import Navbar       from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <MusicPlayer />

      <Routes>
        {/* Password gate — shown first */}
        <Route path="/" element={<PasswordGate />} />

        {/* Main experience — navbar visible */}
        <Route path="/home"      element={<><Navbar /><Landing /></>} />
        <Route path="/memories"  element={<><Navbar /><Memories /></>} />
        <Route path="/letter"    element={<><Navbar /><LoveLetter /></>} />
        <Route path="/surprise"  element={<><Navbar /><Surprise /></>} />
        <Route path="/ending"    element={<><Navbar /><Ending /></>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
