import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import JobDirection from './components/JobDirection.jsx'
import Internship from './components/Internship.jsx'
import ResearchProjects from './components/ResearchProjects.jsx'
import Skills from './components/Skills.jsx'
import Gaming from './components/Gaming.jsx'
import Contact from './components/Contact.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import GhostFibers from './components/GhostFibers.jsx'

export default function App() {
  useEffect(() => {
    // 区块进入视口时轻微上浮（克制的高级感动效）
    const els = document.querySelectorAll('.section, .hero__inner, .contact__inner')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="app">
      <ScrollProgress />
      <div className="bg-fibers" aria-hidden="true">
        <GhostFibers />
      </div>
      <div className="global-blobs" aria-hidden="true">
        <div className="global-blobs__blob global-blobs__blob--1" />
        <div className="global-blobs__blob global-blobs__blob--2" />
        <div className="global-blobs__blob global-blobs__blob--3" />
        <div className="global-blobs__blob global-blobs__blob--4" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <JobDirection />
        <Internship />
        <ResearchProjects />
        <Skills />
        <Gaming />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}
