import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProgressDots from '../components/ProgressDots'

export default function PasswordGate() {
  const [pw, setPw]       = useState('')
  const [error, setError] = useState('')
  const navigate          = useNavigate()

  const handleUnlock = () => {
    if (!pw || pw === 'foreverlove') { setError(''); navigate('/home') }
    else setError('Wrong password, my love 💔')
  }

  return (
    <div className="page-wrap">
      <motion.div
        className="glass-card"
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1,    opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.23,1,0.32,1] }}
      >
        <motion.div
          style={{ fontSize:'3.2rem', marginBottom:'12px' }}
          animate={{ scale:[1,1.1,1] }}
          transition={{ repeat:Infinity, duration:2.5 }}
        >
          🔒
        </motion.div>

        <h1 className="font-cormorant" style={{ fontSize:'2rem', color:'#ffd6ea', marginBottom:'6px' }}>
          A Secret Surprise
        </h1>
        <p style={{ fontSize:'0.85rem', color:'#c4a0b4', marginBottom:'4px' }}>
          Enter our little password to unlock your birthday gift…
        </p>

        <input
          className={`pw-input ${error ? 'error' : ''}`}
          type="password"
          placeholder="· · · · · · · ·"
          value={pw}
          onChange={e => { setPw(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleUnlock()}
          autoComplete="off"
        />

        <p style={{ color:'#ff7eb3', fontSize:'0.8rem', minHeight:'18px', marginBottom:'12px' }}>
          {error}
        </p>

        <button className="btn-glow" onClick={handleUnlock}>Unlock ♥</button>

        <p style={{ marginTop:'14px', fontSize:'0.72rem', color:'rgba(196,160,180,0.4)' }}>
          hint: foreverlove
        </p>
      </motion.div>

      <ProgressDots total={5} current={0} />
    </div>
  )
}
