import { useState } from 'react'
import { Crosshair, Film, RotateCcw, Scissors, Shield } from 'lucide-react'
import { Media } from '../Media'
import SectionLabel from '../SectionLabel'

export default function GameIntro() {
  const [active, setActive] = useState(0)
  const steps = [
    {
      title: 'MAKE A MISTAKE.',
      text: 'You’re a grunt with 45 seconds to breach a fortress and stop a launch. Predictably, this is a terrible one-person job.',
      icon: <Crosshair />,
      file: '16-gameplay.gif',
      caption: 'RC3 gameplay. Take 1 of 10. Break into the fortress.',
    },
    {
      title: 'HIRE YOUR GHOST.',
      text: 'Die, run out of time, or commit your take. The level resets. Your last run returns and repeats its shots, moves, and lever holds.',
      icon: <RotateCcw />,
      file: '01-ghost-take.gif',
      caption: 'Early test footage. Every take leaves a ghost. No, this one cannot hurt you.',
    },
    {
      title: 'BE YOUR OWN BACKUP.',
      text: 'Let your past self hold a shield or a lever while you push forward. It’s a squad shooter. You’re the entire squad.',
      icon: <Shield />,
      file: '13-shield-by-hand.gif',
      caption: 'The shield, painted by hand. Past-you has excellent taste in cover.',
    },
  ]
  return (
    <section className="section-wrap game-section" id="the-film">
      <SectionLabel number="01">THE PREMISE / CONTROLLED SELF-SABOTAGE</SectionLabel>
      <div className="intro-grid">
        <div>
          <span className="eyebrow muted">A DARK FPS WITH A MEMORY</span>
          <h2 className="section-title">
            DEATH ISN’T
            <br />
            THE END.
            <br />
            <span className="acid-text">IT’S RECRUITMENT.</span>
          </h2>
        </div>
        <div className="intro-description">
          <p className="lead">
            Director’s Cut, except
            <br />
            we kept <em>every</em> take.
          </p>
          <p>
            A quick, dark, first-person time-loop shooter, built in Unreal Engine in five days. A
            fortress in the fog. Ten takes to get it right. And an army made entirely of your
            previous bad decisions.
          </p>
          <span className="annotation">
            <Scissors size={16} /> CUT THE TIMELINE. KEEP THE CONSEQUENCES.
          </span>
        </div>
      </div>
      <div className="premise-grid">
        <div className="premise-steps" role="tablist" aria-label="How the game works">
          {steps.map((step, index) => (
            <button
              key={step.title}
              className={`premise-step ${active === index ? 'selected' : ''}`}
              role="tab"
              id={`premise-tab-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              aria-controls="premise-panel"
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) {
                  event.preventDefault()
                  const next =
                    (active +
                      (['ArrowDown', 'ArrowRight'].includes(event.key) ? 1 : -1) +
                      steps.length) %
                    steps.length
                  setActive(next)
                  document.getElementById(`premise-tab-${next}`)?.focus()
                }
              }}
            >
              <span className="step-number">0{index + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="step-icon">{step.icon}</span>
            </button>
          ))}
        </div>
        <div
          className="premise-screen"
          role="tabpanel"
          id="premise-panel"
          aria-labelledby={`premise-tab-${active}`}
        >
          <div className="screen-label">
            <span>
              <i className="status-dot" />
              FIELD RECORDING / 0{active + 1}
            </span>
            <Film size={15} />
          </div>
          <Media
            key={steps[active].file}
            file={steps[active].file}
            caption={steps[active].caption}
            compact
          />
        </div>
      </div>
    </section>
  )
}
