import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield'
import BirthdayCake from '../components/BirthdayCake'
import Fireworks from '../components/Fireworks'
import PageTransition from '../components/PageTransition'

export default function Surprise() {
  const [giftOpen, setGiftOpen] = useState(false)
  const [fireworks, setFireworks] = useState(false)

  const handleBlown = () => {
    setFireworks(true)
    setTimeout(() => setGiftOpen(true), 900)
  }

  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        <Starfield />
        <Fireworks trigger={fireworks} />

        <div className="relative z-10 text-center max-w-2xl w-full">
          <motion.h1
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="gradient-text font-playfair font-bold mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Birthday Surprise 🎉
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-pink-300 text-base mb-8 font-playfair italic"
          >
            A surprise made with all my love, just for you 💕
          </motion.p>

          <BirthdayCake onBlown={handleBlown} />

          <AnimatePresence>
            {giftOpen && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="glass mt-10 p-10 rounded-3xl text-center"
                style={{ boxShadow: '0 0 60px rgba(255,77,141,0.2)' }}
              >
                <h2 className="gradient-text font-playfair font-bold text-3xl mb-4">
                  Surprise! ❤️
                </h2>
                <p className="text-pink-100 text-lg leading-loose">
                  My greatest gift is having you in my life.<br />
                  You are my happiness, my peace, my forever.<br />
                  Today, tomorrow, and always — I celebrate <em>you</em>!
                </p>
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-6xl mt-6"
                >
                  💝
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: giftOpen ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <Link to="/ending">
              <button className="btn-glow text-xl px-12 py-4">
                Final Message 🌙
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
