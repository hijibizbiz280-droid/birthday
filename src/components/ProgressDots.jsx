export default function ProgressDots({ total = 5, current = 0 }) {
  return (
    <div className="progress-dots">
      {[...Array(total)].map((_, i) => (
        <div key={i} className={`pdot ${i === current ? 'active' : ''}`} />
      ))}
    </div>
  )
}
