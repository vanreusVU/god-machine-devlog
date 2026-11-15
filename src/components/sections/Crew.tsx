import { RotateCcw } from 'lucide-react'
import { crew } from '../../content/story'
import SectionLabel from '../SectionLabel'

export default function Crew() {
  return (
    <section className="crew-section" id="crew">
      <div className="section-wrap">
        <SectionLabel number="06">CAST & CREW / PIRATES</SectionLabel>
        <div className="crew-heading">
          <h2 className="section-title">
            FIVE PEOPLE.
            <br />
            <span className="acid-text">EVERY TAKE IN.</span>
          </h2>
          <p>
            “We’ll at least release something.”
            <br />
            <span className="eyebrow muted">NILS / THURSDAY</span>
          </p>
        </div>
        <div className="crew-grid">
          {crew.map((person, index) => (
            <div className="crew-member" key={person.name}>
              <span className="crew-index">
                0{index + 1} / {person.role}
              </span>
              <h3>{person.name}</h3>
              <p>{person.detail}</p>
              <span className="crew-plus" aria-hidden="true">
                +
              </span>
            </div>
          ))}
        </div>
        <div className="end-card">
          <span className="eyebrow">PRODUCTION COMPLETE / 15 NOVEMBER 2026</span>
          <h2>
            WE DID.
            <br />
            <span>EVERY TAKE IS IN.</span>
          </h2>
          <a className="button acid" href="#top">
            ONE MORE TAKE?
            <RotateCcw size={17} />
          </a>
          <span className="end-take" aria-hidden="true">
            CUT.
          </span>
        </div>
      </div>
    </section>
  )
}
