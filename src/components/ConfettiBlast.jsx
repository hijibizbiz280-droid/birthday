import { useEffect } from 'react'

const EMOJIS = ['🎉', '🎊', '🎀', '✨', '💖', '🌸', '🎈', '⭐', '💕', '🌟']

export default function ConfettiBlast({ trigger }) {
  useEffect(() => {
    if (!trigger) return
    const pieces = []
    for (let i = 0; i < 50; i++) {
      const el = document.createElement('div')
      el.className = 'confetti-piece'
      el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]
      const dur = (Math.random() * 2 + 2).toFixed(1)
      const delay = (Math.random() * 1.5).toFixed(1)
      el.style.cssText = `
        left: ${Math.random() * 100}%;
        top: 0;
        font-size: ${Math.random() * 14 + 12}px;
        --dur: ${dur}s;
        --delay: ${delay}s;
      `
      document.body.appendChild(el)
      pieces.push(el)
      setTimeout(() => el.remove(), (parseFloat(dur) + parseFloat(delay) + 0.5) * 1000)
    }
    return () => pieces.forEach(p => p.remove())
  }, [trigger])

  return null
}
