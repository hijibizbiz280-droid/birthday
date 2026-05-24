import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressDots from '../components/ProgressDots'

const MEMORIES = [
  { emoji:'🌹', gradient:'linear-gradient(135deg,#3d1a3a,#7b2d5e)', title:'The Day We Met',    text:'The day my world changed ❤' },
  { emoji:'🌙', gradient:'linear-gradient(135deg,#1a1a3d,#2d2d7b)', title:'Moonlit Nights',    text:'Stars were jealous of you ✨' },
  { emoji:'💐', gradient:'linear-gradient(135deg,#3d1a2a,#8b2252)', title:'Every Morning',     text:'My favourite hello ever' },
  { emoji:'⭐', gradient:'linear-gradient(135deg,#2a1a3d,#5e2d7b)', title:'Forever Yours',     text:'Every life, I\'d choose you' },
]

export default function Memories() {
  return (
    <div className="page-wrap">
      <motion.div
        style={{ width:'100%', maxWidth:'420px', textAlign:'center', position:'relative', zIndex:2 }}
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:0.9 }}
      >
        <h2 className="font-cormorant" style={{ fontSize:'2rem', color:'#ffd6ea', marginBottom:'4px', fontStyle:'italic' }}>
          Our Memories
        </h2>
        <p style={{ fontSize:'0.8rem', color:'rgba(196,160,180,0.55)', marginBottom:'0' }}>
          little moments, forever kept
        </p>

        <div className="mem-grid">
          {MEMORIES.map((m, i) => (
            <motion.div
              key={i}
              className="mem-card"
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay: i * 0.12, duration:0.6 }}
              whileHover={{ scale:1.04 }}
            >
              <div className="mem-img" style={{ background: m.gradient }}>{m.emoji}</div>
              <div className="mem-caption">
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <Link to="/letter">
          <button className="btn-glow">Continue ♥</button>
        </Link>
      </motion.div>

      <ProgressDots total={5} current={2} />
    </div>
  )
}
