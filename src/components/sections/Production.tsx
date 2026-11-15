import { useState } from 'react'
import { ArrowDown, ChevronDown, Scissors, X } from 'lucide-react'
import { days } from '../../content/story'
import { Markdown, Media } from '../Media'
import SectionLabel from '../SectionLabel'

export default function Production() {
  const [dayIndex, setDayIndex] = useState(0)
  const [fullDay, setFullDay] = useState(false)
  const day = days[dayIndex]
  return (
    <section className="production-section" id="production">
      <div className="section-wrap">
        <SectionLabel number="02">THE PRODUCTION / NOVEMBER 11—15</SectionLabel>
        <div className="production-heading">
          <h2 className="section-title">
            FIVE DAYS.
            <br />
            <span className="outline-text">NO RESHOOTS.</span>
          </h2>
          <p>
            What we built. What broke.
            <br />
            What got left on the cutting-room floor.
            <br />
            <span className="muted">Featuring actual quotes from nine very long calls.</span>
          </p>
        </div>
        <div className="day-tabs" role="tablist" aria-label="Production days">
          {days.map((item, index) => (
            <button
              role="tab"
              id={`day-tab-${index}`}
              aria-controls="day-panel"
              aria-selected={dayIndex === index}
              tabIndex={dayIndex === index ? 0 : -1}
              onClick={() => {
                setDayIndex(index)
                setFullDay(false)
              }}
              onKeyDown={(event) => {
                if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
                  event.preventDefault()
                  const next =
                    event.key === 'Home'
                      ? 0
                      : event.key === 'End'
                        ? 4
                        : (dayIndex + (event.key === 'ArrowRight' ? 1 : -1) + days.length) %
                          days.length
                  setDayIndex(next)
                  setFullDay(false)
                  document.getElementById(`day-tab-${next}`)?.focus()
                }
              }}
              className={dayIndex === index ? 'day-tab active' : 'day-tab'}
              key={item.id}
            >
              <span>
                DAY {item.id}
                <small>{item.date}</small>
              </span>
              <span className="tab-caption">{item.short}</span>
              {dayIndex === index && <ArrowDown size={15} />}
            </button>
          ))}
        </div>
        <div
          className="day-panel"
          role="tabpanel"
          id="day-panel"
          aria-labelledby={`day-tab-${dayIndex}`}
        >
          <div className="day-copy">
            <span className="eyebrow">
              <span className="tiny-square" />
              {day.tag} <span className="muted">/ TAKE {day.id}</span>
            </span>
            <h3>
              {day.title.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <p>{day.summary}</p>
            <button
              className="text-link"
              onClick={() => setFullDay(!fullDay)}
              aria-expanded={fullDay}
              aria-controls="day-full-story"
            >
              {fullDay ? 'CLOSE THE FIELD NOTES' : 'READ THE FIELD NOTES'}
              <ChevronDown size={16} className={fullDay ? 'rotated' : ''} />
            </button>
            <div className="cut-note">
              <Scissors size={17} />
              <span>
                <strong>ON THE CUTTING-ROOM FLOOR</strong>
                {day.cut}
              </span>
            </div>
          </div>
          <div className="day-media">
            <Media
              file={`${day.image}.${['01', '03'].includes(day.id) ? 'gif' : day.id === '05' ? 'jpg' : 'png'}`}
              caption={
                day.id === '04'
                  ? '71 generated. Many failed review. The human part of the pipeline.'
                  : day.id === '05'
                    ? 'RC3 footage. Yes, that is a very large walker.'
                    : day.id === '03'
                      ? 'Two levers. One ID. The ghost does exactly the wrong thing.'
                      : day.id === '02'
                        ? 'The one we kept. “The final cut is where every take is in.”'
                        : 'Night one’s deleted scenes. Most pitches got the CUT stamp.'
              }
            />
            <span className="day-stamp" aria-hidden="true">
              {day.id === '04' ? 'REJECTED' : day.id === '05' ? 'PRINT IT' : 'KEEP ROLLING'}
            </span>
          </div>
        </div>
        {fullDay && (
          <div className="full-day" id="day-full-story">
            <div className="full-day-label">
              <span className="eyebrow">UNCUT / DAY {day.id}</span>
              <button className="text-link" onClick={() => setFullDay(false)}>
                CLOSE <X size={15} />
              </button>
            </div>
            <Markdown text={day.body} />
          </div>
        )}
        <div className="production-footer">
          <span>THESE EVENTS ARE REAL. THE SLEEP DEPRIVATION WAS ALSO REAL.</span>
          <span>0{dayIndex + 1} / 05</span>
        </div>
      </div>
    </section>
  )
}
