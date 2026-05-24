import { motion } from 'framer-motion'

export default function MemoryCard({ emoji, gradient, title, text, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.05, rotate: -1.5 }}
      className="mem-card glass overflow-hidden rounded-3xl shadow-2xl"
    >
      <div
        className="h-52 flex items-center justify-center text-6xl"
        style={{ background: gradient }}
      >
        {emoji}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-pink-300 font-playfair">{title}</h3>
        <p className="mt-2 text-sm text-pink-100 opacity-80">{text}</p>
      </div>
    </motion.div>
  )
}
