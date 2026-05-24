import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressDots from '../components/ProgressDots'

const LETTER = `My Love,

You are the most beautiful chapter of my life. Every smile of yours quietly heals something deep inside me.

Every hug of yours feels like finally coming home after a long, long journey.

On your birthday, I want you to know — you mean everything to me. I love you endlessly, completely, forever.`

export default function LoveLetter() {
  const [opened, setOpened]   = useState(false)
  const [text, setText]       = useState('')
  const [done, setDone]       = useState(false)
  const [sigVisible, setSig]  = useState(false)

  useEffect(() => {
    if (!opened) return
    let i = 0; setText(''); setDone(false); setSig(false)
    const t = setInterval(() => {
      i++; setText(LETTER.slice(0, i))
      if (i >= LETTER.length) {
        clearInterval(t)
        setTimeout(() => setSig(true),  400)
        setTimeout(() => setDone(true), 1300)
      }
    }, 22)
    return () => clearInterval(t)
  }, [opened])

  return (
    <div className="page-wrap">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="env"
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            exit={{ opacity:0, scale:0.85 }}
            style={{ textAlign:'center', position:'relative', zIndex:2 }}
          >
            <h2 className="font-cormorant" style={{ fontSize:'2rem', color:'#ffd6ea', fontStyle:'italic', marginBottom:'24px' }}>
              A Letter For You 💌
            </h2>
            <motion.div
              animate={{ y:[0,-10,0] }}
              transition={{ repeat:Infinity, duration:2.2 }}
              style={{ fontSize:'5rem', cursor:'pointer', userSelect:'none' }}
              onClick={() => setOpened(true)}
            >
              💌
            </motion.div>
            <p style={{ marginTop:'14px', fontSize:'0.82rem', color:'rgba(240,98,146,0.7)' }}>
              tap to open your letter ♥
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            className="glass-card"
            style={{ maxWidth:'420px' }}
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.8, ease:[0.23,1,0.32,1] }}
          >
            <h2 className="font-vibes" style={{ fontSize:'2.6rem', color:'#ff9ec4', marginBottom:'20px' }}>
              My Love Letter
            </h2>

            <p className="letter-body">{text}</p>

            <div className="letter-sig" style={{ opacity: sigVisible ? 1 : 0 }}>
              Forever Yours ♥
            </div>

            <AnimatePresence>
              {done && (
                <motion.div
                  initial={{ opacity:0, y:12 }}
                  animate={{ opacity:1, y:0 }}
                  style={{ marginTop:'24px' }}
                >
                  <Link to="/surprise">
                    <button className="btn-glow">Open Birthday Surprise 🎁</button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <ProgressDots total={5} current={3} />
    </div>
  )
}
