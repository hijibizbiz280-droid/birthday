import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const LINKS = [
  { to: '/',         label: '🏠 Home' },
  { to: '/memories', label: '📸 Memories' },
  { to: '/letter',   label: '💌 Letter' },
  { to: '/surprise', label: '🎁 Surprise' },
  { to: '/ending',   label: '🌙 Ending' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center gap-2 py-3 px-4"
    >
      <div className="glass flex gap-1 px-4 py-2 rounded-full">
        {LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-pink-500 text-white shadow-[0_0_12px_#ff4d8d]'
                  : 'text-pink-200 hover:text-white hover:bg-white/10'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </motion.nav>
  )
}
