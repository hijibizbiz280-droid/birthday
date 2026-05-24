import { useMemo } from 'react'

const EMOJIS = ['❤️', '💕', '💖', '💗', '🌸', '✨', '💝', '🌹']

export default function FloatingHearts() {
  const hearts = useMemo(() => (
    [...Array(22)].map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      dur: (Math.random() * 6 + 7).toFixed(1),
      delay: (Math.random() * 10).toFixed(1),
    }))
  ), [])

  return (
    <div className="pointer-events-none">
      {hearts.map(h => (
        <div
          key={h.id}
          className="heart-particle"
          style={{
            left: `${h.left}%`,
            fontSize: h.size,
            '--dur': `${h.dur}s`,
            '--delay': `${h.delay}s`,
          }}
        >
          {h.emoji}
        </div>
      ))}
    </div>
  )
}
