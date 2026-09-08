import React, { useState } from 'react'
import Section from './Section.jsx'
import Img from './Img.jsx'
import Lightbox from './Lightbox.jsx'
import { education, awards } from '../data/profile.js'
import { Icon } from './Icon.jsx'

const SHORT = { '南京邮电大学': '南邮', '湖南大学': '湖大' }

function Emblem({ school }) {
  const short = SHORT[school] || school.slice(0, 2)
  return (
    <svg viewBox="0 0 120 120" className="emblem" aria-label={school}>
      <defs>
        <linearGradient id={`g-${school}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1b2a4a" />
          <stop offset="1" stopColor="#2f4d80" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="56" fill={`url(#g-${school})`} />
      <circle cx="60" cy="60" r="56" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="rgba(255,255,255,.18)" strokeWidth="1" />
      <text x="60" y="58" textAnchor="middle" fontSize="30" fontWeight="700" fill="#fff" fontFamily="serif">
        {short}
      </text>
      <text x="60" y="82" textAnchor="middle" fontSize="9" letterSpacing="2" fill="rgba(255,255,255,.7)" fontFamily="monospace">
        EST. UNIV
      </text>
    </svg>
  )
}

function CertFallback() {
  return (
    <div className="cert">
      <Icon name="paper" size={26} />
      <span>CERT</span>
    </div>
  )
}

const LEVEL_CLASS = { 国家级: 'is-gold', 省级: 'is-prov', 校级: 'is-school' }

export default function Education() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (award) => setLightbox({ image: award.image, title: `${award.name} · ${award.detail}` })
  const closeLightbox = () => setLightbox(null)

  return (
    <Section
      id="education"
      index="02"
      kicker="EDUCATION"
      title="学历信息"
      desc="两段求学：从南京邮电大学的金融工程本科，到湖南大学应用统计的硕士研究。"
    >
      <div className="edu">
        {education.map((e) => (
          <article className="edu__card" key={e.school}>
            <div className="edu__badge">
              <Img src={e.badge} alt={`${e.school} 校徽`} fallback={<Emblem school={e.school} />} className="edu__badge-img" />
            </div>
            <div className="edu__main">
              <div className="edu__topline">
                <span className="edu__level">{e.level}</span>
                <span className="edu__period">{e.period}</span>
              </div>
              <h3 className="edu__school">{e.school}</h3>
              <p className="edu__en">{e.en}</p>
              <p className="edu__line">
                <span className="edu__tag">{e.college}</span>
                <span className="edu__major">{e.major}</span>
              </p>
              <div className="edu__stats">
                <div className="edu__stat">
                  <span className="edu__stat-k">GPA</span>
                  <span className="edu__stat-v">{e.gpa}</span>
                </div>
                <div className="edu__stat">
                  <span className="edu__stat-k">排名</span>
                  <span className="edu__stat-v">{e.rank}</span>
                </div>
                <div className="edu__stat">
                  <span className="edu__stat-k">研究方向</span>
                  <span className="edu__stat-v">{e.research}</span>
                </div>
              </div>
              <div className="edu__courses">
                {e.courses.map((c) => (
                  <span className="course" key={c}>{c}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="awards">
        <div className="awards__head">
          <Icon name="link" size={16} />
          <span>荣誉奖项</span>
          <span className="awards__count">12+ 项</span>
        </div>
        <div className="awards__grid">
          {awards.map((a, i) => (
            <button
              key={i}
              type="button"
              className={`award ${LEVEL_CLASS[a.level] || ''}`}
              onClick={() => openLightbox(a)}
              aria-label={`查看 ${a.name}`}
            >
              <div className="award__media">
                <Img src={a.image} alt={a.name} fallback={<CertFallback />} className="award__img" />
                {a.year && <span className="award__year">{a.year}</span>}
              </div>
              <div className="award__body">
                <span className="award__level">{a.level}</span>
                <span className="award__name">{a.name}</span>
                <span className="award__detail">{a.detail}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          image={lightbox.image}
          title={lightbox.title}
          onClose={closeLightbox}
        />
      )}
    </Section>
  )
}
