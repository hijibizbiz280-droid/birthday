import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield'
import FloatingHearts from '../components/FloatingHearts'
import Sparkles from '../components/Sparkles'
import PageTransition from '../components/PageTransition'

export default function Ending() {
  return (
    <PageTransition>
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        <Starfield />
        <FloatingHearts />
        <Sparkles active />

        {/* Deep overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,77,141,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-2xl w-full">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="text-7xl mb-8 moon-glow"
          >
            🌙
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="gradient-text font-playfair font-bold leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 5rem)' }}
          >
            I Love You Forever ❤️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="mt-10 text-lg text-pink-100 leading-loose font-playfair italic"
          >
            No matter how many birthdays come and go,<br />
            my heart will always choose you.<br /><br />
            Thank you for existing.<br />
            Thank you for loving me.<br />
            Thank you for being my forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="text-5xl my-8"
            >
              ❤️
            </motion.div>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link to="/">
                <button className="glass px-8 py-3 rounded-full text-pink-200 hover:scale-105 transition-all font-semibold">
                  Replay From Start ✨
                </button>
              </Link>
            </div>

            <p className="mt-10 text-pink-400 font-great-vibes text-3xl">
              The End… But Our Story Never Ends ❤️
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
