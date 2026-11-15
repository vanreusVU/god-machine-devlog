import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Pause, Play, RotateCcw, Shield } from 'lucide-react'
import { replayFrame, TAKE_LENGTH } from './replay'

export default function ReplayLab() {
  const [take, setTake] = useState(1)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [hasGhost, setHasGhost] = useState(false)
  const animation = useRef(0)
  const last = useRef(0)
  const { finished, progress, shieldX, runnerX } = replayFrame(time)

  useEffect(() => {
    if (!running) return
    last.current = 0
    const step = (now: number) => {
      if (last.current)
        setTime((previous) => Math.min(TAKE_LENGTH, previous + (now - last.current) / 1000))
      last.current = now
      animation.current = requestAnimationFrame(step)
    }
    animation.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animation.current)
  }, [running])

  useEffect(() => {
    if (finished) setRunning(false)
  }, [finished])

  function nextTake() {
    setHasGhost(true)
    setTake(2)
    setTime(0)
    setRunning(true)
  }

  function reset() {
    setTake(1)
    setHasGhost(false)
    setTime(0)
    setRunning(false)
  }

  const title = take === 1 ? 'First, be the shield.' : 'Now, trust your past self.'

  return (
    <div className="replay-lab">
      <div className="lab-topline">
        <span>
          <i className={running ? 'status-dot active' : 'status-dot'} />
          REPLAY SANDBOX
        </span>
        <span>ILLUSTRATION / NOT GAME FOOTAGE</span>
      </div>
      <div className="lab-heading">
        <div>
          <span className="eyebrow">TAKE 0{take} / 02</span>
          <h3>{title}</h3>
        </div>
        <div className="lab-clock">
          00:{Math.floor(time).toString().padStart(2, '0')}
          <small> / 00:08</small>
        </div>
      </div>
      <div className="lab-scene">
        <svg
          viewBox="0 0 720 260"
          role="img"
          aria-label={
            take === 1
              ? 'A soldier carrying a shield moves toward a lever under incoming fire.'
              : 'The previous soldier replays the shield run while a new soldier follows behind.'
          }
        >
          <defs>
            <pattern id="lab-grid" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M36 0H0V36" fill="none" stroke="currentColor" strokeOpacity=".08" />
            </pattern>
            <pattern
              id="lab-hatch"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="3" height="10" fill="currentColor" fillOpacity=".25" />
            </pattern>
          </defs>
          <rect width="720" height="260" fill="url(#lab-grid)" />
          <path d="M40 207H679" stroke="currentColor" strokeOpacity=".3" strokeDasharray="3 6" />
          <path
            d="M100 164H550"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".3"
            strokeDasharray="4 7"
          />
          <text x="38" y="238" className="svg-label">
            SPAWN
          </text>
          <text x="548" y="238" className="svg-label">
            LEVER
          </text>
          <g transform="translate(578 154)">
            <path d="M-13 44V14h26v30z" fill="url(#lab-hatch)" stroke="currentColor" />
            <path
              d={`M0 14L${finished ? 12 : -12} -5`}
              stroke={finished ? 'var(--acid)' : 'currentColor'}
              strokeWidth="4"
            />
            <circle
              cx={finished ? 12 : -12}
              cy="-5"
              r="5"
              fill={finished ? 'var(--acid)' : 'currentColor'}
            />
          </g>
          <g transform="translate(644 91)" className="enemy">
            <path
              d="M-10 64V22h20v42M-10 34h-12M10 34h20"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
            />
            <rect x="-10" y="4" width="20" height="18" fill="currentColor" />
            <path d="M-30 35h-30" stroke="currentColor" strokeWidth="5" />
          </g>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M${590 - ((time * 190 + i * 50) % Math.max(30, 580 - shieldX))} ${121 + i * 15}h-20`}
              className="lab-bullet"
              strokeWidth="2"
              opacity={time > 0 ? 0.7 : 0.16}
            />
          ))}
          <g
            transform={`translate(${shieldX} 127)`}
            className={hasGhost ? 'ghost-soldier' : 'active-soldier'}
          >
            <rect x="-9" y="-16" width="18" height="17" fill="currentColor" />
            <path
              d="M0 4v35M-10 14h25M-5 38l-7 24M5 38l10 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            />
            <path
              d="M21-3l9 4v41l-9 8-9-8V1z"
              fill="var(--surface)"
              stroke="currentColor"
              strokeWidth="3"
            />
            {hasGhost && (
              <text x="-29" y="-31" className="svg-label">
                PAST YOU
              </text>
            )}
          </g>
          {hasGhost && (
            <g transform={`translate(${runnerX} 142)`} className="active-soldier">
              <rect x="-7" y="-15" width="14" height="14" fill="currentColor" />
              <path
                d="M0 4v28M-8 11l18 4M-4 30l-7 21M4 30l12 21"
                fill="none"
                stroke="currentColor"
                strokeWidth="7"
              />
              <text x="-9" y="-31" className="svg-label">
                YOU
              </text>
            </g>
          )}
          <text x="580" y="70" className="svg-label enemy">
            INCOMING FIRE
          </text>
        </svg>
        {finished && (
          <div className="lab-result" role="status">
            {take === 1
              ? 'TAKE RECORDED. YOUR NEXT RUN GETS BACKUP.'
              : 'LEVER REACHED. TEAMWORK, WITH YOURSELF.'}
          </div>
        )}
      </div>
      <label className="lab-scrubber">
        <span className="sr-only">Scrub replay timeline</span>
        <input
          type="range"
          min="0"
          max={TAKE_LENGTH}
          step="0.01"
          value={time}
          onChange={(event) => {
            setRunning(false)
            setTime(Number(event.target.value))
          }}
        />
        <span>RECORDING {Math.round(progress * 100)}%</span>
      </label>
      <div className="lab-controls">
        <button
          className="button acid"
          onClick={() => {
            if (finished) setTime(0)
            setRunning(!running)
          }}
        >
          {running ? <Pause size={16} /> : <Play size={16} fill="currentColor" />}
          {running ? 'PAUSE TAKE' : finished ? 'REPLAY TAKE' : 'ROLL TAKE'}
        </button>
        {take === 1 ? (
          <button className="button outline" onClick={nextTake} disabled={!finished}>
            <Shield size={16} />
            COMMIT & RESTART
            <ArrowRight size={16} />
          </button>
        ) : (
          <button className="button outline" onClick={reset}>
            <RotateCcw size={16} />
            START OVER
          </button>
        )}
      </div>
      <p className="lab-note">
        {take === 1
          ? 'Roll the take. Carry the shield to the lever. Then commit, and your next self gets to hide behind this one. You can also scrub the timeline.'
          : 'Same route. Same shield. A second chance. In the game, every finished take joins the next run.'}
      </p>
    </div>
  )
}
