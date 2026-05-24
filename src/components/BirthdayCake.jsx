import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ConfettiBlast from './ConfettiBlast'

export default function BirthdayCake({ onBlown }) {
  const [blown, setBlown] = useState(false)

  const handleBlow = () => {
    if (blown) return
    setBlown(true)
    onBlown?.()
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8 relative select-none">
      <ConfettiBlast trigger={blown} />

      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="relative"
      >
        {/* Candle */}
        <div className="relative flex justify-center mb-1">
          <div className="w-5 h-20 bg-gradient-to-b from-yellow-200 to-orange-400 rounded-full relative z-20 shadow-lg">
            <AnimatePresence>
              {!blown && (
                <motion.div
                  key="flame"
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.15, 1], opacity: [1, 0.85, 1] }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 0.45 }}
                  onClick={handleBlow}
                  className="flame absolute -top-8 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-yellow-300 cursor-pointer"
                  style={{ boxShadow: '0 0 18px #ffd740, 0 0 40px #ff6f0088' }}
                  title="Click to blow!"
                />
              )}
            </AnimatePresence>

            {blown && (
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl"
              >
                💨
              </motion.div>
            )}
          </div>
        </div>

        {/* Cake body */}
        <div className="w-72 h-36 rounded-3xl relative overflow-hidden flex items-center justify-around text-3xl px-4"
          style={{ background: 'linear-gradient(135deg, #f06292, #e91e8c)', boxShadow: '0 0 50px #e91e8c88' }}
        >
          <div className="absolute inset-0 opacity-20 bg-white blur-2xl" />
          <span>🍓</span><span>🍒</span><span>🎂</span><span>🍒</span><span>🍓</span>
        </div>

        {/* Cake plate */}
        <div className="w-80 h-10 rounded-full mt-1"
          style={{ background: 'linear-gradient(180deg, #ffd54f, #f9a825)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
        />
      </motion.div>

      {!blown && (
        <p className="mt-5 text-pink-200 text-base text-center animate-pulse">
          Click the candle flame to blow it out ✨
        </p>
      )}
      {blown && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 text-pink-300 text-base text-center"
        >
          🎉 You blew it out! Make a wish! 💖
        </motion.p>
      )}
    </div>
  )
}
