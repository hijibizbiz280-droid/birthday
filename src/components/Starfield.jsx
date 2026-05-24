import { useMemo } from 'react'

export default function Starfield() {
  const stars = useMemo(() => (
    [...Array(130)].map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.5,
      left: Math.random() * 100,
      top: Math.random() * 100,
      dur: (Math.random() * 4 + 2).toFixed(1),
      delay: (Math.random() * 5).toFixed(1),
    }))
  ), [])

  return (
    <div className="starfield">
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            '--dur': `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
