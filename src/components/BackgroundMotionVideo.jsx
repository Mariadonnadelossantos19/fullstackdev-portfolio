import { useRef } from 'react'
import bgVideo from '../assets/videos/bg.mp4'

export function BackgroundMotionVideo() {
  const videoRef = useRef(null)

  const handleEnded = () => {
    // Fallback: some browsers can miss native loop on large files.
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <div className="background-video-layer" aria-hidden>
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onEnded={handleEnded}
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="background-video-tint" />
      <div className="background-video-vignette" />
    </div>
  )
}
