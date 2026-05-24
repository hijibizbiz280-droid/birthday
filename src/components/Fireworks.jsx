import { useEffect } from 'react'

export default function Fireworks({ trigger }) {
  useEffect(() => {
    if (!trigger) return
    const colors = ['#ff4d8d', '#ffd700', '#ff8fb3', '#c084fc', '#60a5fa', '#34d399']
    for (let burst = 0; burst < 6; burst++) {
      const cx = Math.random() * window.innerWidth
      const cy = Math.random() * (window.innerHeight * 0.6)
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          const el = document.createElement('div')
          el.className = 'firework-particle'
          const angle = (i / 20) * Math.PI * 2
          const dist = Math.random() * 120 + 60
          const dur = (Math.random() * 0.5 + 0.7).toFixed(2)
          el.style.cssText = `
            left: ${cx}px; top: ${cy}px;
            width: ${Math.random() * 5 + 3}px;
            height: ${Math.random() * 5 + 3}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            --tx: ${Math.cos(angle) * dist}px;
            --ty: ${Math.sin(angle) * dist}px;
            --dur: ${dur}s;
          `
          document.body.appendChild(el)
          setTimeout(() => el.remove(), parseFloat(dur) * 1000 + 100)
        }
      }, burst * 250)
    }
  }, [trigger])

  return null
}
