import { motion } from 'framer-motion'

export default function GlowingText({ children, className = '', as: Tag = 'h1' }) {
  return (
    <motion.div
      animate={{
        textShadow: [
          '0 0 10px #ff4d8d88, 0 0 20px #ff4d8d44',
          '0 0 24px #ff4d8d, 0 0 48px #ff4d8d88',
          '0 0 10px #ff4d8d88, 0 0 20px #ff4d8d44',
        ],
      }}
      transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
    >
      <Tag className={`gradient-text ${className}`}>{children}</Tag>
    </motion.div>
  )
}
