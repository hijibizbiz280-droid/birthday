import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressDots from '../components/ProgressDots'

const TAGLINES = [
  'Every heartbeat of mine whispers your name…',
  'You are the poem I never knew how to write.',
  'My favourite place in the world is next to you.',
  'You make every day feel like a gift.',
]

export default function Landing() {
  const [display, setDisplay] = useState('')
  const [idx, setIdx]         = useState(0)
  const [typing, setTyping]   = useState(true)

  useEffect(() => {
    const full = TAGLINES[idx]
    let i = typing ? display.length : full.length
    const timer = setInterval(() => {
      if (typing) {
        i++
        setDisplay(full.slice(0, i))
        if (i >= full.length) { clearInterval(timer); setTimeout(() => setTyping(false), 2400) }
      } else {
        i--
        setDisplay(full.slice(0, i))
        if (i <= 0) {
          clearInterval(timer)
          setIdx(p => (p + 1) % TAGLINES.length)
          setTimeout(() => setTyping(true), 350)
        }
      }
    }, typing ? 60 : 28)
    return () => clearInterval(timer)
  }, [idx, typing])

  return (
    <div className="page-wrap">
      <motion.div
        className="glass-card"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.23,1,0.32,1] }}
      >
        <motion.div
          style={{ fontSize:'2.6rem', marginBottom:'8px' }}
          animate={{ scale:[1,1.08,1] }}
          transition={{ repeat:Infinity, duration:2.6 }}
        >
          🌸
        </motion.div>

        <h1 className="font-cormorant" style={{ fontSize:'2.5rem', color:'#ffd6ea', lineHeight:1.25, marginBottom:'8px' }}>
          Happy Birthday<br />
          <span style={{ fontStyle:'italic', color:'#ff9ec4' }}>My Love</span>
        </h1>

        <div className="divider" />

        <p className="font-cormorant typewriter" style={{
          fontSize:'1.1rem', fontStyle:'italic', color:'#e8c0d4', minHeight:'3em', lineHeight:1.7
        }}>
          {display}
        </p>

        <div style={{ marginTop:'28px' }}>
          <Link to="/memories">
            <button className="btn-glow">Begin the Surprise ✦</button>
          </Link>
        </div>
      </motion.div>

      <ProgressDots total={5} current={1} />
    </div>
  )
}
