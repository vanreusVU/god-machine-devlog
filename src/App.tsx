import { ArrowUpRight, Check } from 'lucide-react'
import { Brand, Header, ReadingProgress } from './components/Layout'
import Hero from './components/sections/Hero'
import GameIntro from './components/sections/GameIntro'
import Production from './components/sections/Production'
import Experiment from './components/sections/Experiment'
import ArtDepartment from './components/sections/ArtDepartment'
import HonestCut from './components/sections/HonestCut'
import FullStory from './components/sections/FullStory'
import Crew from './components/sections/Crew'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ReadingProgress />
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <GameIntro />
        <Production />
        <Experiment />
        <ArtDepartment />
        <div className="quote-break">
          <span className="quote-symbol">“</span>
          <blockquote>THIS GAME IS SERIOUS.</blockquote>
          <span className="eyebrow">
            MARGUS / IMMEDIATELY AFTER SOMEONE SUGGESTED FUNNY TANK WRECKS
          </span>
          <span className="quote-cross" aria-hidden="true">
            +
          </span>
        </div>
        <HonestCut />
        <FullStory />
        <Crew />
      </main>
      <footer className="site-footer">
        <Brand small />
        <span>GOD MACHINE © 2026 PIRATES</span>
        <span>BUILT IN FIVE DAYS. REMEMBERED IN TAKES.</span>
        <a href="#top" aria-label="Back to top">
          BACK TO TOP
          <ArrowUpRight size={15} />
        </a>
      </footer>
      <div className="film-grain" aria-hidden="true" />
      <div className="bottom-slate" aria-hidden="true">
        <span>
          <Check size={11} />
          ALL TAKES RETAINED
        </span>
        <span>GM / DIRECTOR’S CUT</span>
      </div>
    </>
  )
}
