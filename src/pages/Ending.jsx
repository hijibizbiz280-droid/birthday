import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressDots from '../components/ProgressDots'

export default function Ending() {
  return (
    <div className="page-wrap">
      <div style={{ width:'100%', maxWidth:'420px', textAlign:'center', position:'relative', zIndex:2 }}>

        {/* SVG Moon */}
        <motion.svg
          viewBox="0 0 80 80" width="80" height="80"
          style={{ marginBottom:'16px' }}
          animate={{ y:[0,-14,0] }}
          transition={{ repeat:Infinity, duration:3.5, ease:'easeInOut' }}
        >
          <defs>
            <radialGradient id="moonG" cx="40%" cy="35%" r="60%">
              <stop offset="0%"   stopColor="#fff9e0"/>
              <stop offset="60%"  stopColor="#ffe0b2"/>
              <stop offset="100%" stopColor="#ffb74d"/>
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="28" fill="url(#moonG)"/>
          <circle cx="52" cy="30" r="20" fill="#0c0a14"/>
          <circle cx="40" cy="40" r="25" fill="none" stroke="#ffe0b2" strokeWidth="0.5" opacity="0.5"/>
        </motion.svg>

        <motion.h1
          className="font-cormorant"
          style={{ fontSize:'2.4rem', color:'#ffd6ea', lineHeight:1.2, marginBottom:'16px' }}
          initial={{ opacity:0, scale:0.88 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:1.1, ease:[0.23,1,0.32,1] }}
        >
          I Love You<br/>
          <span style={{ fontStyle:'italic', color:'#ff9ec4' }}>Forever</span>
        </motion.h1>

        <div className="divider" />

        <motion.p
          className="font-cormorant"
          style={{ fontSize:'1.05rem', fontStyle:'italic', color:'#e8c0d4', lineHeight:2, margin:'0 auto 24px' }}
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ delay:0.5, duration:0.9 }}
        >
          No matter how many birthdays come and go,<br/>
          my heart will always choose you.<br/><br/>
          Thank you for existing.<br/>
          Thank you for loving me.
        </motion.p>

        {/* SVG Heart */}
        <motion.svg
          viewBox="0 0 60 55" width="56" height="52"
          style={{ display:'block', margin:'0 auto 16px' }}
          animate={{ scale:[1,1.12,1] }}
          transition={{ repeat:Infinity, duration:2 }}
        >
          <path d="M30,50 C10,36 2,26 2,16 C2,7 9,2 16,2 C22,2 27,6 30,10 C33,6 38,2 44,2 C51,2 58,7 58,16 C58,26 50,36 30,50 Z"
            fill="#e91e8c" opacity="0.9"/>
          <path d="M30,46 C12,33 6,24 6,16 C6,10 11,6 16,6 C21,6 26,10 30,14"
            fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
        </motion.svg>

        <motion.p
          className="font-vibes"
          style={{ fontSize:'2rem', color:'#ff9ec4', marginBottom:'28px' }}
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.2 }}
        >
          The End… but our story never ends ♥
        </motion.p>

        <Link to="/home">
          <button className="btn-glow btn-ghost">Replay from start</button>
        </Link>
      </div>

      <ProgressDots total={5} current={4} />
    </div>
  )
}
