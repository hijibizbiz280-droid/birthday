import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield'
import Envelope from '../components/Envelope'
import PageTransition from '../components/PageTransition'

const LETTER = `My Love,

You are the most beautiful chapter of my life. Every smile of yours quietly heals something deep inside me, and every hug of yours feels like finally coming home after a long, long journey.

The world is louder, brighter, and infinitely more beautiful because you are in it. I notice it in the way the morning light looks softer now, the way music sounds better, the way ordinary moments feel like poetry when you are near.

On your birthday, I just want you to know — you mean everything to me. Loving you is the easiest, most natural thing I have ever done.

I love you endlessly, completely, and forever.`

export default function LoveLetter() {
  const [opened, setOpened] = useState(false)
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!opened) return
    let i = 0
    setText('')
    setDone(false)
    const timer = setInterval(() => {
      i++
      setText(LETTER.slice(0, i))
      if (i >= LETTER.length) {
        clearInterval(timer)
        setDone(true)
      }
    }, 22)
    return () => clearInterval(timer)
  }, [opened])

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
        <Starfield />

        <div className="relative z-10 max-w-2xl w-full">
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.div
                key="envelope"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.7 }}
                className="text-center"
              >
                <h1 className="gradient-text font-playfair font-bold mb-8"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  A Letter For You 💌
                </h1>
                <Envelope onOpen={() => setOpened(true)} />
              </motion.div>
            ) : (
              <motion.div
                key="letter"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                className="glass p-10 rounded-3xl"
                style={{ boxShadow: '0 0 60px rgba(255,77,141,0.15)' }}
              >
                <h2 className="font-great-vibes gradient-text text-center mb-8"
                  style={{ fontSize: '3rem' }}>
                  My Love Letter ❤️
                </h2>

                <pre
                  className="text-pink-100 leading-loose whitespace-pre-wrap font-playfair italic"
                  style={{ fontSize: '1.05rem' }}
                >
                  {text}
                </pre>

                <AnimatePresence>
                  {done && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="font-great-vibes text-pink-300 text-4xl mt-6 text-right">
                        Forever Yours ❤️
                      </div>

                      <div className="text-center mt-8">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="text-6xl mb-6"
                        >
                          💖
                        </motion.div>
                        <Link to="/surprise">
                          <button className="btn-glow text-xl px-12 py-4">
                            Open Birthday Surprise 🎁
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}
