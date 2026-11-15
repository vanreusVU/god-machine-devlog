import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Clapperboard, Play, X } from 'lucide-react'

function FootageDialog({ open, close }: { open: boolean; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    if (open) dialog.current?.showModal()
    else dialog.current?.close()
  }, [open])
  return (
    <dialog
      className="footage-dialog"
      aria-label="God Machine RC3 gameplay footage"
      ref={dialog}
      onClose={close}
      onCancel={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
    >
      <div className="footage-top">
        <span className="eyebrow">GOD MACHINE / RC3 GAMEPLAY</span>
        <button className="icon-button" onClick={close} aria-label="Close gameplay footage">
          <X />
        </button>
      </div>
      {open && (
        <video
          src="/media/16-gameplay.mp4"
          poster="/media/16-gameplay.webp"
          autoPlay
          muted
          loop
          controls
          playsInline
          aria-label="God Machine RC3 gameplay"
        />
      )}
      <p>
        An actual take from the RC3 build. Short, silent, and considerably more stressful in person.
      </p>
    </dialog>
  )
}

export default function Hero() {
  const [footage, setFootage] = useState(false)
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/media/00-walker-in-fog.webp"
          alt="A colossal walker towers over a red-fog battlefield in God Machine."
          fetchPriority="high"
        />
        <div className="hero-vignette" />
        <div className="hero-inner">
          <div className="hero-meta">
            <span>
              <i className="status-dot active" />
              2026 EPIC AI MEGAJAM
            </span>
            <span>THEME: DIRECTOR’S CUT</span>
            <span className="hero-meta-right">A GAME BY FIVE PEOPLE & THEIR PAST SELVES</span>
          </div>
          <h1 id="hero-title">
            GOD MACHINE
            <span className="title-registration">
              +<br />
              NO. 001
            </span>
          </h1>
          <div className="hero-subline">
            <span>A FIVE-DAY PRODUCTION</span>
            <span>EST. 11—15 NOVEMBER 2026</span>
          </div>
          <div className="hero-bottom">
            <div className="hero-copy">
              <span className="eyebrow">THE MAKING OF A TIME-LOOP SHOOTER</span>
              <h2>
                YOU DIED.
                <br />
                GREAT. <span>YOU’RE HIRED.</span>
              </h2>
              <p>
                45 seconds to save the world. Every failed run comes back to help. Finally, a
                productive use for your mistakes.
              </p>
              <a className="button acid" href="#production">
                EVERY TAKE STAYS IN
                <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-footage">
              <button
                onClick={() => setFootage(true)}
                className="footage-button"
                aria-label="Watch gameplay footage"
              >
                <span className="play-circle">
                  <Play size={19} fill="currentColor" />
                </span>
                <span>
                  ROLL THE FOOTAGE<small>ACTUAL GAMEPLAY / RC3</small>
                </span>
                <ArrowUpRight size={18} />
              </button>
              <p>
                PS1 bones. Unreal muscle.
                <br />
                One extremely large walker.
              </p>
            </div>
          </div>
        </div>
        <div className="hero-coordinate">FIELD RECORDING / SOMEWHERE IN THE RED FOG</div>
      </section>
      <div className="production-strip">
        <span>
          <Clapperboard size={16} /> DIRECTOR’S CUT
        </span>
        <span>5 HUMANS</span>
        <span>5 DAYS</span>
        <span>9 RECORDED CALLS</span>
        <span>0 TAKES WASTED</span>
        <span className="strip-end">
          KEEP ROLLING <ArrowDown size={14} />
        </span>
      </div>
      <FootageDialog open={footage} close={() => setFootage(false)} />
    </>
  )
}
