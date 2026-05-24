import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PasswordGate from './pages/PasswordGate'
import Landing      from './pages/Landing'
import Memories     from './pages/Memories'
import LoveLetter   from './pages/LoveLetter'
import Surprise     from './pages/Surprise'
import Ending       from './pages/Ending'
import MusicPlayer  from './components/MusicPlayer'
import Starfield    from './components/Starfield'
import Petals       from './components/Petals'

export default function App() {
  return (
    <BrowserRouter>
      <Starfield />
      <Petals />
      <MusicPlayer />
      <Routes>
        <Route path="/"         element={<PasswordGate />} />
        <Route path="/home"     element={<Landing />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter"   element={<LoveLetter />} />
        <Route path="/surprise" element={<Surprise />} />
        <Route path="/ending"   element={<Ending />} />
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
