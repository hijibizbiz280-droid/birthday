import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Starfield from '../components/Starfield'

export default function PasswordGate() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)
  const navigate = useNavigate()

  const handleUnlock = () => {
    if (password === 'foreverlove') {
      setError('')
      navigate('/home')
    } else {
      setError('Wrong password my love 💔')
      setShake(true)
      setTimeout(() => setShake(false), 600)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 overflow-hidden relative">
      <Starfield />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,77,141,0.12) 0%, transparent 70%)',
        }} />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : { scale: 1, opacity: 1 }}
        className="glass p-10 rounded-3xl max-w-md w-full text-center relative z-10"
        style={{ boxShadow: '0 0 60px rgba(255,77,141,0.15)' }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-7xl mb-6"
        >
          💖
        </motion.div>

        <h1 className="font-great-vibes gradient-text text-5xl mb-2">Secret Entry</h1>
        <p className="text-pink-200 text-sm mb-8 opacity-70">Enter our little secret to unlock the surprise…</p>

        <input
          type="password"
          placeholder="✦ our password ✦"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleUnlock()}
          className="w-full p-4 rounded-2xl text-center text-white text-lg tracking-widest outline-none transition-all"
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: error ? '1px solid #ff6b9d' : '1px solid rgba(255,77,141,0.35)',
            fontFamily: 'Nunito, sans-serif',
          }}
        />

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pink-400 text-sm mt-3"
          >
            {error}
          </motion.p>
        )}

        <button
          onClick={handleUnlock}
          className="btn-glow mt-6 w-full"
        >
          Unlock Love ❤️
        </button>

        <p className="text-pink-300 text-xs mt-4 opacity-50">Hint: "foreverlove"</p>
      </motion.div>
    </div>
  )
}
