import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function launchConfetti() {
  const colors  = ['#e91e8c','#f48fb1','#ce93d8','#fff9c4','#ff8a65','#80cbc4','#fff']
  const shapes  = ['♥','✦','★','✿','◆']
  for (let i = 0; i < 50; i++) {
    const el = document.createElement('div')
    el.className = 'confetti-piece'
    const dur   = (Math.random() * 2 + 2.2).toFixed(1)
    const delay = (Math.random() * 1.4).toFixed(1)
    el.style.cssText = `left:${Math.random()*100}%;color:${colors[Math.floor(Math.random()*colors.length)]};font-size:${Math.random()*14+10}px;--dur:${dur}s;--delay:${delay}s;`
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)]
    document.body.appendChild(el)
    setTimeout(() => el.remove(), (parseFloat(dur) + parseFloat(delay) + 0.5) * 1000)
  }
}

export default function BirthdayCake({ onBlown }) {
  const [blown, setBlown] = useState(false)
  const [showSmoke, setShowSmoke] = useState(false)

  const handleBlow = () => {
    if (blown) return
    setBlown(true)
    setShowSmoke(true)
    launchConfetti()
    setTimeout(() => setShowSmoke(false), 1400)
    onBlown?.()
  }

  return (
    <div style={{ textAlign:'center', position:'relative', display:'inline-block' }}>
      <div
        className="cake-clickable"
        onClick={handleBlow}
        title="Click the flame to blow it out!"
      >
        <svg viewBox="0 0 260 260" width="260" height="260" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="flameG" cx="50%" cy="80%" r="60%">
              <stop offset="0%"   stopColor="#fff9e0"/>
              <stop offset="30%"  stopColor="#ffe066"/>
              <stop offset="65%"  stopColor="#ff9800"/>
              <stop offset="100%" stopColor="#e65100" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="innerFlame" cx="50%" cy="70%" r="50%">
              <stop offset="0%"   stopColor="#ffffff"/>
              <stop offset="40%"  stopColor="#fff3e0"/>
              <stop offset="100%" stopColor="#ff9800" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="glowR" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#ff9800" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#ff9800" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="cakeBot" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#f48fb1"/>
              <stop offset="100%" stopColor="#c2185b"/>
            </linearGradient>
            <linearGradient id="cakeMid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#f8bbd9"/>
              <stop offset="100%" stopColor="#e91e8c"/>
            </linearGradient>
            <linearGradient id="cakeTop" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#fce4ec"/>
              <stop offset="100%" stopColor="#f48fb1"/>
            </linearGradient>
            <linearGradient id="plateG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#fff9c4"/>
              <stop offset="100%" stopColor="#f9a825"/>
            </linearGradient>
            <linearGradient id="candleG" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#ffe0b2"/>
              <stop offset="40%"  stopColor="#fff8e1"/>
              <stop offset="100%" stopColor="#ffcc80"/>
            </linearGradient>
            <linearGradient id="frostTop" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#fff"/>
              <stop offset="50%"  stopColor="#fce4ec"/>
              <stop offset="100%" stopColor="#fff"/>
            </linearGradient>
            <clipPath id="clipB"><rect x="30"  y="185" width="200" height="50" rx="6"/></clipPath>
            <clipPath id="clipM"><rect x="45"  y="145" width="170" height="42" rx="6"/></clipPath>
            <clipPath id="clipT"><rect x="60"  y="110" width="140" height="38" rx="6"/></clipPath>
          </defs>

          {/* plate shadow */}
          <ellipse cx="130" cy="242" rx="105" ry="10" fill="#1a0a2e" opacity="0.5"/>
          {/* plate */}
          <ellipse cx="130" cy="236" rx="108" ry="10" fill="url(#plateG)"/>
          <ellipse cx="130" cy="234" rx="108" ry="9"  fill="#fdd835" opacity="0.4"/>

          {/* BOTTOM TIER */}
          <rect x="30" y="185" width="200" height="52" rx="8" fill="url(#cakeBot)"/>
          <g clipPath="url(#clipB)">
            <line x1="30" y1="201" x2="230" y2="201" stroke="rgba(255,255,255,0.25)" strokeWidth="2"/>
            <line x1="30" y1="217" x2="230" y2="217" stroke="rgba(255,255,255,0.2)"  strokeWidth="1.5"/>
            <circle cx="65"  cy="209" r="4" fill="rgba(255,255,255,0.35)"/>
            <circle cx="95"  cy="209" r="4" fill="rgba(255,255,255,0.35)"/>
            <circle cx="125" cy="209" r="4" fill="rgba(255,255,255,0.35)"/>
            <circle cx="155" cy="209" r="4" fill="rgba(255,255,255,0.35)"/>
            <circle cx="185" cy="209" r="4" fill="rgba(255,255,255,0.35)"/>
          </g>
          <path d="M30,188 Q50,178 70,188 Q90,178 110,188 Q130,178 150,188 Q170,178 190,188 Q210,178 230,188"
            fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.85"/>
          <path d="M40,188 Q45,200 50,188"  fill="#fff" opacity="0.7"/>
          <path d="M80,188 Q87,204 92,188"  fill="#fff" opacity="0.7"/>
          <path d="M115,188 Q120,198 128,188" fill="#fff" opacity="0.65"/>
          <path d="M155,188 Q161,203 167,188" fill="#fff" opacity="0.7"/>
          <path d="M195,188 Q200,197 206,188" fill="#fff" opacity="0.6"/>

          {/* MIDDLE TIER */}
          <rect x="45" y="143" width="170" height="44" rx="7" fill="url(#cakeMid)"/>
          <g clipPath="url(#clipM)">
            <text x="75"  y="170" fontSize="14" textAnchor="middle" fill="rgba(255,255,255,0.4)">♥</text>
            <text x="105" y="162" fontSize="10" textAnchor="middle" fill="rgba(255,255,255,0.3)">♥</text>
            <text x="130" y="171" fontSize="16" textAnchor="middle" fill="rgba(255,255,255,0.45)">♥</text>
            <text x="158" y="163" fontSize="10" textAnchor="middle" fill="rgba(255,255,255,0.3)">♥</text>
            <text x="185" y="170" fontSize="13" textAnchor="middle" fill="rgba(255,255,255,0.4)">♥</text>
          </g>
          <path d="M45,146 Q62,136 78,146 Q95,136 112,146 Q128,136 145,146 Q162,136 178,146 Q195,136 215,146"
            fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round" opacity="0.85"/>
          <path d="M55,146 Q60,157 66,146"  fill="#fff" opacity="0.7"/>
          <path d="M92,146 Q98,160 104,146" fill="#fff" opacity="0.65"/>
          <path d="M135,146 Q140,156 146,146" fill="#fff" opacity="0.7"/>
          <path d="M172,146 Q178,159 184,146" fill="#fff" opacity="0.65"/>

          {/* TOP TIER */}
          <rect x="60" y="108" width="140" height="38" rx="7" fill="url(#cakeTop)"/>
          <g clipPath="url(#clipT)">
            <rect x="78"  y="118" width="12" height="3" rx="1.5" fill="#e91e8c" opacity="0.5" transform="rotate(-20,84,120)"/>
            <rect x="100" y="122" width="10" height="3" rx="1.5" fill="#9c27b0" opacity="0.5" transform="rotate(15,105,124)"/>
            <rect x="120" y="116" width="14" height="3" rx="1.5" fill="#ff5722" opacity="0.4" transform="rotate(-10,127,118)"/>
            <rect x="145" y="123" width="10" height="3" rx="1.5" fill="#2196f3" opacity="0.4" transform="rotate(25,150,125)"/>
            <rect x="165" y="117" width="12" height="3" rx="1.5" fill="#4caf50" opacity="0.4" transform="rotate(-15,171,119)"/>
          </g>
          <path d="M60,111 Q75,101 88,111 Q102,101 116,111 Q130,101 144,111 Q158,101 172,111 Q186,101 200,111"
            fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.9"/>
          <path d="M70,111 Q75,120 80,111"   fill="#fff" opacity="0.75"/>
          <path d="M103,111 Q108,122 114,111" fill="#fff" opacity="0.7"/>
          <path d="M140,111 Q145,119 150,111" fill="#fff" opacity="0.75"/>
          <path d="M174,111 Q179,121 185,111" fill="#fff" opacity="0.7"/>

          {/* Frosting top surface */}
          <ellipse cx="130" cy="108" rx="70" ry="7"   fill="url(#frostTop)" opacity="0.95"/>
          <ellipse cx="130" cy="108" rx="68" ry="5.5" fill="#fff" opacity="0.3"/>

          {/* CANDLE */}
          <rect x="122" y="72" width="16" height="38" rx="3" fill="url(#candleG)"/>
          <rect x="125" y="75" width="4"  height="30" rx="2" fill="rgba(255,255,255,0.5)"/>
          <line x1="130" y1="72" x2="130" y2="66" stroke="#5d4037" strokeWidth="1.5" strokeLinecap="round"/>

          {/* FLAME */}
          {!blown && (
            <motion.g
              className="flame-animate"
              animate={{ scaleX:[1,1.12,0.88,1.06,0.95,1], scaleY:[1,0.88,1.1,0.96,1.05,1], rotate:[-2,3,-1,2,-3,-2] }}
              transition={{ repeat: Infinity, duration: 0.45, ease:'easeInOut' }}
              style={{ transformOrigin:'130px 68px' }}
            >
              <ellipse cx="130" cy="55" rx="18" ry="18" fill="url(#glowR)" opacity="0.6"
                style={{ animation:'glowPulse 0.9s ease-in-out infinite' }}/>
              <path d="M130,40 C138,44 142,50 140,58 C138,65 134,68 130,68 C126,68 122,65 120,58 C118,50 122,44 130,40 Z"
                fill="url(#flameG)"/>
              <path d="M130,46 C134,49 135,54 133,59 C132,63 131,65 130,65 C129,65 128,63 127,59 C125,54 126,49 130,46 Z"
                fill="url(#innerFlame)"/>
              <path d="M130,38 C131,41 132,43 130,48 C128,43 129,41 130,38 Z" fill="#fff9e0" opacity="0.9"/>
            </motion.g>
          )}

          {/* Smoke puffs */}
          <AnimatePresence>
            {showSmoke && (
              <g>
                <motion.ellipse cx="130" cy="62" rx="5" ry="3" fill="#888" initial={{opacity:0.7,y:0,scale:1}} animate={{opacity:0,y:-40,scale:2.5}} transition={{duration:1.2}}/>
                <motion.ellipse cx="128" cy="54" rx="4" ry="3" fill="#999" initial={{opacity:0.5,y:0,scale:1}} animate={{opacity:0,y:-40,scale:2.5}} transition={{duration:1.2,delay:0.2}}/>
              </g>
            )}
          </AnimatePresence>

          {/* Warm light on top from candle */}
          {!blown && <ellipse cx="130" cy="108" rx="40" ry="8" fill="#ff9800" opacity="0.1"/>}
        </svg>
      </div>

      {!blown && (
        <p style={{ marginTop:'8px', fontSize:'0.78rem', color:'rgba(240,98,146,0.7)', letterSpacing:'0.03em' }}>
          click the flame to make a wish ✦
        </p>
      )}
      {blown && (
        <motion.p
          initial={{ opacity:0, y:8 }}
          animate={{ opacity:1, y:0 }}
          style={{ marginTop:'8px', fontSize:'0.85rem', color:'#f48fb1' }}
        >
          🎉 Wish made! ✦
        </motion.p>
      )}
    </div>
  )
}
