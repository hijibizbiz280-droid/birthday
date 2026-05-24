import { useEffect, useRef } from 'react'

const SPARKLE_EMOJIS = ['✨', '⭐', '💫', '🌟']

export default function Sparkles({ active = true }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!active) return
    const interval = setInterval(() => {
      if (!containerRef.current) return
      const el = document.createElement('div')
      el.className = 'sparkle'
      el.textContent = SPARKLE_EMOJIS[Math.floor(Math.random() * SPARKLE_EMOJIS.length)]
      el.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        font-size: ${Math.random() * 16 + 8}px;
        --dur: ${(Math.random() * 1 + 1).toFixed(1)}s;
      `
      containerRef.current.appendChild(el)
      setTimeout(() => el.remove(), 2000)
    }, 300)
    return () => clearInterval(interval)
  }, [active])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" />
}
