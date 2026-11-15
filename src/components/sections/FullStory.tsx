import { ChevronDown } from 'lucide-react'
import { section } from '../../content/story'
import { Markdown } from '../Media'
import SectionLabel from '../SectionLabel'

export default function FullStory() {
  const chapters = [
    ['At a glance', 'THE CALL SHEET'],
    ['How the agents worked', 'THE AGENTS & THE RULES'],
    ['What we think about AI', 'WE DON’T ALL AGREE'],
    ['What is not true yet', 'THE COMPLETE HONEST CUT'],
    ['Tools and licences', 'TOOLS & THIRD-PARTY CONTENT'],
  ]
  return (
    <section className="section-wrap full-story-section" id="full-story">
      <SectionLabel number="05">THE EXTENDED CUT / ALL THE RECEIPTS</SectionLabel>
      <div className="archive-heading">
        <h2>
          FOR THE PEOPLE
          <br />
          WHO STAY FOR THE CREDITS.
        </h2>
        <p>
          The original story, the workflow, the disagreements.
          <br />
          No facts left on the cutting-room floor.
        </p>
      </div>
      <div className="story-accordion">
        {chapters.map(([title, label], index) => (
          <details key={title}>
            <summary>
              <span className="accordion-number">0{index + 1}</span>
              <span>{label}</span>
              <ChevronDown size={20} />
            </summary>
            <Markdown text={section(title)} />
          </details>
        ))}
      </div>
    </section>
  )
}
