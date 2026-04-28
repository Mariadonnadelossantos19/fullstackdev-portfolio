import bgVideo from '../assets/videos/bg.mp4'

export function BackgroundMotionVideo() {
  return (
    <div className="background-video-layer" aria-hidden>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="background-video-tint" />
      <div className="background-video-vignette" />
    </div>
  )
}
