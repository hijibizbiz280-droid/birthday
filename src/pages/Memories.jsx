import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Starfield from '../components/Starfield'
import MemoryCard from '../components/MemoryCard'
import PageTransition from '../components/PageTransition'

const MEMORIES = [
  {
    emoji: '🌹',
    gradient: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
    title: 'The Day We Met',
    text: 'The day my world changed forever ❤️',
  },
  {
    emoji: '🌙',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    title: 'Our Moonlit Nights',
    text: 'Every smile of yours heals me ✨',
  },
  {
    emoji: '💫',
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    title: 'Forever Together',
    text: 'No matter where life goes, I choose you ❤️',
  },
  {
    emoji: '🌺',
    gradient: 'linear-gradient(135deg, #fddb92, #d1fdff)',
    title: 'Every Little Moment',
    text: 'Even the ordinary ones feel magical with you 🌸',
  },
  {
    emoji: '☕',
    gradient: 'linear-gradient(135deg, #c79081, #dfa579)',
    title: 'Morning Coffee',
    text: 'You are better than coffee on a cold morning ☀️',
  },
  {
    emoji: '🌟',
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    title: 'My Favourite Star',
    text: 'In all the universe, you shine the brightest 💫',
  },
]

export default function Memories() {
  return (
    <PageTransition>
      <div className="relative min-h-screen px-6 py-24 overflow-hidden">
        <Starfield />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gradient-text font-playfair font-bold text-center mb-16"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Our Beautiful Memories 📸
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEMORIES.map((m, i) => (
              <MemoryCard key={i} {...m} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-16"
          >
            <Link to="/letter">
              <button className="btn-glow text-xl px-12 py-4">
                Continue ❤️
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
