import { useMemo } from 'react'

const SHAPES = ['✦', '·', '◦', '∘', '✧']

export default function Petals() {
  const petals = useMemo(() =>
    [...Array(16)].map((_, i) => ({
      id: i,
      char:  SHAPES[Math.floor(Math.random() * SHAPES.length)],
      left:  Math.random() * 100,
      size:  Math.random() * 8 + 8,
      opacity: (Math.random() * 0.2 + 0.05).toFixed(2),
      dur:   (Math.random() * 7 + 8).toFixed(1),
      delay: (Math.random() * 10).toFixed(1),
    }))
  , [])

  return (
    <>
      {petals.map(p => (
        <div key={p.id} className="petal" style={{
          left: `${p.left}%`,
          color: `rgba(255,150,196,${p.opacity})`,
          '--s': `${p.size}px`,
          '--dur': `${p.dur}s`,
          '--delay': `${p.delay}s`,
        }}>
          {p.char}
        </div>
      ))}
    </>
  )
}
