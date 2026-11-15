import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export function ReadingProgress() {
  const bar = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight
      if (bar.current)
        bar.current.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`
    }
    const observer = new ResizeObserver(update)
    observer.observe(document.body)
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', update)
    }
  }, [])
  return <div className="reading-progress" ref={bar} aria-hidden="true" />
}

export function Brand({ small = false }: { small?: boolean }) {
  return (
    <a
      className={`brand ${small ? 'brand-small' : ''}`}
      href="#top"
      aria-label="Pirates, back to top"
    >
      <span className="brand-mark" aria-hidden="true">
        Y
      </span>
      <span>
        PIRATES<span className="brand-sub">INDEPENDENT. QUESTIONABLY QUALIFIED.</span>
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Brand />
      <nav
        aria-label="Main navigation"
        className={open ? 'navigation is-open' : 'navigation'}
        onClick={() => setOpen(false)}
      >
        <a href="#the-film">THE GAME</a>
        <a href="#production">THE FIVE DAYS</a>
        <a href="#crew">THE CREW</a>
      </nav>
      <a className="header-cta" href="#production">
        ENTER THE DEVLOG <ArrowUpRight size={16} />
      </a>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  )
}
