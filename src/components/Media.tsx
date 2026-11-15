import { useEffect, useRef, useState } from 'react'
import { Maximize2, Pause, Play, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { mediaPath, normalizeMedia } from '../content/story'

export function Media({
  file,
  caption,
  compact = false,
}: {
  file: string
  caption?: string
  compact?: boolean
}) {
  const animated = file.endsWith('.gif')
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (expanded) dialog.current?.showModal()
    else dialog.current?.close()
  }, [expanded])

  async function toggle() {
    if (!video.current) return
    if (video.current.paused) {
      try {
        await video.current.play()
      } catch {
        setPlaying(false)
      }
    } else video.current.pause()
  }

  return (
    <figure className={`media-figure ${compact ? 'media-compact' : ''}`}>
      <div className="media-frame">
        {animated ? (
          <>
            <video
              ref={video}
              src={`/media/${file.replace('.gif', '.mp4')}`}
              poster={mediaPath(file)}
              loop
              muted
              playsInline
              preload="none"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              aria-label={caption || file}
            />
            <button
              className="media-play"
              onClick={toggle}
              aria-label={playing ? 'Pause clip' : 'Play clip'}
            >
              {playing ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
              <span>{playing ? 'PAUSE TAKE' : 'PLAY TAKE'}</span>
            </button>
          </>
        ) : (
          <img src={mediaPath(file)} alt={caption || ''} loading="lazy" decoding="async" />
        )}
        <button
          className="media-expand"
          onClick={() => {
            video.current?.pause()
            setExpanded(true)
          }}
          aria-label={`Expand ${caption || 'image'}`}
        >
          <Maximize2 size={16} />
        </button>
      </div>
      {caption && (
        <figcaption>
          <span className="caption-mark">↳</span>
          {caption}
        </figcaption>
      )}
      <dialog
        ref={dialog}
        className="media-dialog"
        aria-label={caption || 'Expanded media'}
        onCancel={() => setExpanded(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setExpanded(false)
        }}
        onClose={() => setExpanded(false)}
      >
        <button
          className="dialog-close"
          onClick={() => setExpanded(false)}
          aria-label="Close expanded media"
        >
          <X />
        </button>
        {expanded &&
          (animated ? (
            <video
              src={`/media/${file.replace('.gif', '.mp4')}`}
              poster={mediaPath(file)}
              controls
              autoPlay
              muted
              loop
              playsInline
              aria-label={caption || 'Expanded clip'}
            />
          ) : (
            <img src={mediaPath(file)} alt={caption || ''} />
          ))}
        {caption && <p>{caption}</p>}
      </dialog>
    </figure>
  )
}

export function Markdown({ text }: { text: string }) {
  return (
    <div className="prose">
      <ReactMarkdown
        components={{
          p: ({ children }) => <div className="prose-paragraph">{children}</div>,
          img: ({ src, alt }) => <Media file={(src || '').split('/').pop() || ''} caption={alt} />,
        }}
      >
        {normalizeMedia(text)}
      </ReactMarkdown>
    </div>
  )
}
