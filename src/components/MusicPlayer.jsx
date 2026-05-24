import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {})
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) { audioRef.current.pause(); setPlaying(false) }
    else          { audioRef.current.play();  setPlaying(true)  }
  }

  return (
    <button className="music-btn" onClick={toggle}>
      {playing ? '🎵' : '🔇'}
      <span style={{ display:'flex', alignItems:'flex-end', gap:'2px', height:'14px' }}>
        {[0.8,0.5,1,0.65].map((d,i) => (
          <span key={i} className="music-bar"
            style={{ '--d':`${d}s`, height:'4px', opacity: playing ? 1 : 0.3 }} />
        ))}
      </span>
      {playing ? 'Music On' : 'Music Off'}
      {/* Drop your mp3 → src/assets/music/romantic.mp3 then uncomment: */}
      <audio ref={audioRef} loop>
        {/* <source src="/src/assets/music/romantic.mp3" type="audio/mp3" /> */}
      </audio>
    </button>
  )
}
