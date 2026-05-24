import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    // Attempt autoplay — browsers may block it until user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.4
      audioRef.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
    }
  }, [])

  const toggle = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggle}
        className="glass px-4 py-2 rounded-full text-sm font-semibold hover:scale-110 transition-all flex items-center gap-2"
      >
        {playing ? '🎵' : '🔇'}
        <span className="flex items-end gap-[2px] h-4">
          {[0.8, 0.5, 1, 0.65].map((d, i) => (
            <span
              key={i}
              className="music-bar"
              style={{ '--d': `${d}s`, opacity: playing ? 1 : 0.3 }}
            />
          ))}
        </span>
        <span>{playing ? 'Music On' : 'Music Off'}</span>
      </button>

      {/* 🎵 Drop your mp3 into src/assets/music/romantic.mp3 */}
      <audio ref={audioRef} loop>
        {/* <source src="/src/assets/music/romantic.mp3" type="audio/mp3" /> */}
      </audio>
    </div>
  )
}
