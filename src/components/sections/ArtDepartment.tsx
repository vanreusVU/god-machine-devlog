import { useState } from 'react'
import { ArrowLeft, ArrowRight, ChevronDown, Scissors } from 'lucide-react'
import { section } from '../../content/story'
import { Markdown, Media } from '../Media'
import SectionLabel from '../SectionLabel'

export default function ArtDepartment() {
  const [reveal, setReveal] = useState(50)
  return (
    <section className="art-section">
      <div className="section-wrap">
        <SectionLabel number="04">THE ART DEPARTMENT / HUMAN IN THE LOOP</SectionLabel>
        <div className="art-heading">
          <h2 className="section-title">
            THE MACHINE
            <br />
            DIDN’T MAKE
            <br />
            <span className="acid-text">THE TASTE.</span>
          </h2>
          <div>
            <blockquote>
              “What the hell is wrong
              <br />
              with these meshes?”
            </blockquote>
            <span className="eyebrow muted">NILS, ART DIRECTION / SATURDAY</span>
            <p>
              Hand sketches first. AI passes next. Then a human decides what deserves to exist in
              the game. A lot of it didn’t.
            </p>
          </div>
        </div>
        <div className="art-grid">
          <div className="art-process">
            <div className="screen-label">
              <span>FROM PENCIL TO POLYGONS</span>
              <span>HUMAN → AI → HUMAN</span>
            </div>
            <Media
              file="06-sketch-ai-engine.png"
              caption="Hand sketch, first AI pass, final rig. Three stages, with human work between them."
            />
          </div>
          <div className="art-comparison">
            <div className="comparison-view">
              <img
                src="/media/level-after.webp"
                alt="Sunday: the red fortress, textured and lit in Unreal."
                loading="lazy"
              />
              <img
                className="comparison-before"
                src="/media/level-before.webp"
                alt="Friday: the same level as a white greybox."
                loading="lazy"
                style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
              />
              <span className="comparison-before-tag">DAY 03 / THE BLOCKOUT</span>
              <span className="comparison-tag">DAY 05 / THE FORTRESS</span>
              <div className="comparison-handle" style={{ left: `${reveal}%` }}>
                <ArrowLeft size={13} />
                <ArrowRight size={13} />
              </div>
            </div>
            <label className="comparison-control">
              <span>REVEAL THE TRANSFORMATION</span>
              <input
                type="range"
                min="0"
                max="100"
                value={reveal}
                onChange={(event) => setReveal(Number(event.target.value))}
                aria-label="Reveal greybox to fortress comparison"
              />
            </label>
            <p className="figure-note">Same level. Two days apart. Editor viewport captures.</p>
          </div>
        </div>
        <details className="technical-notes">
          <summary>
            <span>
              <Scissors size={16} /> SHOW THE PROMPT
            </span>
            <span>
              THE REAL INPUT, NOT JUST THE RESULT <ChevronDown size={16} />
            </span>
          </summary>
          <Markdown text={section('One prompt')} />
        </details>
      </div>
    </section>
  )
}
