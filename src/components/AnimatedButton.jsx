import { motion } from 'framer-motion'

export default function AnimatedButton({ children, onClick, className = '', variant = 'primary' }) {
  const base = 'btn-glow px-10 py-4 rounded-full text-xl font-bold cursor-pointer transition-all'
  const secondary = 'glass px-10 py-4 rounded-full text-xl font-semibold cursor-pointer transition-all hover:scale-110'

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={variant === 'primary' ? `${base} ${className}` : `${secondary} ${className}`}
    >
      {children}
    </motion.button>
  )
}
