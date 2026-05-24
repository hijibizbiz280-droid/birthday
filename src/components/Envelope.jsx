import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Envelope({ onOpen }) {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => onOpen?.(), 600)
  }

  return (
    <div className="flex flex-col items-center">
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="envelope"
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer"
            onClick={handleOpen}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-9xl select-none"
            >
              💌
            </motion.div>
            <p className="text-center text-pink-300 mt-4 text-sm animate-pulse">
              Tap to open your love letter ❤️
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
