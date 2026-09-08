import React, { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import { Icon } from './Icon.jsx'

const NAV = [
  { id: 'about', label: '关于' },
  { id: 'education', label: '学历' },
  { id: 'jobs', label: '方向' },
  { id: 'internship', label: '实习' },
  { id: 'research', label: '科研·项目' },
  { id: 'skills', label: '技能' },
  { id: 'gaming', label: '游戏' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    NAV.forEach((n) => {
      const el = document.getElementById(n.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <button className="nav__brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="nav__brand-mark">LX</span>
          <span className="nav__brand-name">{profile.name}</span>
          <span className="nav__brand-en">PORTFOLIO</span>
        </button>

        <nav className="nav__links">
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`nav__link ${active === n.id ? 'is-active' : ''}`}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button className="nav__cta" onClick={() => go('contact')}>
          联系我
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </header>
  )
}
