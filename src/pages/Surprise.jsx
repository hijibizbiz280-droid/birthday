import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import BirthdayCake from '../components/BirthdayCake'
import ProgressDots from '../components/ProgressDots'

export default function Surprise() {
  const [giftOpen, setGiftOpen] = useState(false)

  return (
    <div className="page-wrap">
      <div style={{ width:'100%', maxWidth:'420px', textAlign:'center', position:'relative', zIndex:2 }}>
        <motion.h2
          className="font-cormorant"
          style={{ fontSize:'2rem', color:'#ffd6ea', fontStyle:'italic', marginBottom:'4px' }}
          initial={{ opacity:0, y:-20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
        >
          Birthday Surprise
        </motion.h2>
        <p style={{ fontSize:'0.8rem', color:'rgba(196,160,180,0.55)', marginBottom:'16px' }}>
          a surprise made with all my love
        </p>

        <BirthdayCake onBlown={() => setTimeout(() => setGiftOpen(true), 700)} />

        <AnimatePresence>
          {giftOpen && (
            <motion.div
              className="glass-card"
              style={{ marginTop:'20px', padding:'28px' }}
              initial={{ scale:0, opacity:0 }}
              animate={{ scale:1, opacity:1 }}
              transition={{ type:'spring', stiffness:200, damping:16 }}
            >
              <motion.div
                style={{ fontSize:'2.2rem', marginBottom:'10px' }}
                animate={{ scale:[1,1.1,1] }}
                transition={{ repeat:Infinity, duration:2 }}
              >
                ❤️
              </motion.div>
              <p className="font-cormorant" style={{ fontSize:'1.1rem', fontStyle:'italic', color:'#f0d4e4', lineHeight:1.9 }}>
                My greatest gift is having you in my life.<br/>
                You are my happiness, my peace, my forever.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {giftOpen && (
            <motion.div
              style={{ marginTop:'20px' }}
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.5 }}
            >
              <Link to="/ending">
                <button className="btn-glow">Final Message 🌙</button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ProgressDots total={5} current={4} />
    </div>
  )
}
