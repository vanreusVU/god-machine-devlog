import { X } from 'lucide-react'

export default function HonestCut() {
  return (
    <section className="section-wrap honest-section">
      <div className="honest-grid">
        <div>
          <span className="eyebrow">
            <i className="status-dot danger" />
            DIRECTOR’S COMMENTARY
          </span>
          <h2 className="section-title">
            A LITTLE
            <br />
            ROUGH AROUND
            <br />
            <span className="outline-text">THE EVERYTHING.</span>
          </h2>
          <p>
            We shipped a game. We didn’t ship a miracle.
            <br />
            Here’s the honest cut.
          </p>
        </div>
        <div className="honest-list">
          {[
            ['GHOSTS STILL DRIFT.', 'The snap-back helps. A ghost can still get stuck.'],
            ['THE WALKER IS A SET PIECE.', 'It walks its 80-metre path. It is not an enemy.'],
            ['NO MAIN MENU.', 'You start in the level, paused. Very avant-garde.'],
            ['NO MISSILE LAUNCH AT TIMEOUT.', 'Some finales remain in the backlog.'],
          ].map(([title, text], index) => (
            <div key={title}>
              <span className="honest-number">0{index + 1}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <X size={17} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
