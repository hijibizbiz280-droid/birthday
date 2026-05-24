import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FloatingHearts from '../components/FloatingHearts'
import Starfield from '../components/Starfield'
import PageTransition from '../components/PageTransition'

const TAGLINES = [
  'Every heartbeat of mine whispers your name… 💫',
  'You are the poem I never knew how to write ✍️',
  'My favourite place in the world is next to you 🌹',
  'You make every day feel like a gift 🎁',
]

export default function Landing() {
  const [tagline, setTagline] = useState('')
  const [tagIdx, setTagIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const full = TAGLINES[tagIdx]
    let i = 0
    let timer

    if (typing) {
      timer = setInterval(() => {
        i++
        setTagline(full.slice(0, i))
        if (i >= full.length) {
          clearInterval(timer)
          setTimeout(() => setTyping(false), 2200)
        }
      }, 55)
    } else {
      timer = setInterval(() => {
        i = tagline.length
        i--
        setTagline(full.slice(0, i))
        if (i <= 0) {
          clearInterval(timer)
          setTagIdx(p => (p + 1) % TAGLINES.length)
          setTimeout(() => setTyping(true), 300)
        }
      }, 25)
    }

    return () => clearInterval(timer)
  }, [tagIdx, typing])

  return (
    <PageTransition>
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-6">
        <Starfield />
        <FloatingHearts />

        {/* Ambient radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,77,141,0.1) 0%, transparent 70%)'
        }} />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="glass max-w-3xl w-full p-12 rounded-3xl relative z-10"
          style={{ boxShadow: '0 0 80px rgba(255,77,141,0.12)' }}
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-6xl mb-4"
          >
            🌸
          </motion.div>

          <h1
            className="gradient-text font-playfair font-bold leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            Happy Birthday<br />My Love ❤️
          </h1>

          <p className="mt-6 text-pink-200 font-playfair italic text-lg">
            Today the universe celebrates the most beautiful soul…
          </p>

          <div className="mt-4 h-8 flex items-center justify-center">
            <span className="text-pink-300 text-base typewriter">{tagline}</span>
          </div>

          <div className="mt-10">
            <Link to="/memories">
              <button className="btn-glow text-xl px-12 py-4">
                Start The Surprise ✨
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
