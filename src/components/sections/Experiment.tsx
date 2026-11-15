import { ChevronDown, Crosshair } from 'lucide-react'
import { section } from '../../content/story'
import { Markdown } from '../Media'
import ReplayLab from '../ReplayLab'
import SectionLabel from '../SectionLabel'

export default function Experiment() {
  return (
    <section className="section-wrap experiment-section" id="replay">
      <SectionLabel number="03">THE MECHANIC / A SECOND CHANCE AT TEAMWORK</SectionLabel>
      <div className="experiment-grid">
        <div className="experiment-copy">
          <span className="eyebrow muted">DON’T JUST READ ABOUT IT</span>
          <h2 className="section-title">
            MEET YOUR
            <br />
            <span className="acid-text">NEW TEAMMATE.</span>
            <br />
            IT’S YOU.
          </h2>
          <p>
            Your past self carries the shield.
            <br />
            Your current self gets the cover.
            <br />
            Your future self gets the credit.
          </p>
          <p className="muted">
            Try this little diagram of the replay idea. Record a shield run, restart the take, and
            follow your own ghost.
          </p>
          <span className="handwritten">
            a team-building exercise
            <br />
            with fewer people ↗
          </span>
        </div>
        <ReplayLab />
      </div>
      <details className="technical-notes">
        <summary>
          <span>
            <Crosshair size={16} /> OPEN THE BLACK BOX
          </span>
          <span>
            HOW REPLAY ACTUALLY WORKS <ChevronDown size={16} />
          </span>
        </summary>
        <Markdown text={section('How the take system works')} />
      </details>
    </section>
  )
}
