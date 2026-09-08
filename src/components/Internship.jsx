import React from 'react'
import Section from './Section.jsx'
import Img from './Img.jsx'
import { internships } from '../data/profile.js'
import { Icon } from './Icon.jsx'

const LOGO = {
  腾讯: { s: 'TX', c: '#0a0a0a' },
  九号公司: { s: '9', c: '#1f6fff' },
  '江苏国准信息技术研究院': { s: 'GZ', c: '#0f6b5c' },
  交通银行: { s: 'BCM', c: '#0b3d91' }
}

function LogoFallback({ company }) {
  const cfg = LOGO[company] || { s: company.slice(0, 2), c: '#333' }
  return (
    <div className="logo" style={{ '--logo-c': cfg.c }}>
      <span>{cfg.s}</span>
    </div>
  )
}

export default function Internship() {
  return (
    <Section
      id="internship"
      index="04"
      kicker="INTERNSHIP"
      title="实习经历"
      desc="从金融科技到互联网游戏，四段实习让我在真实业务里反复验证数据分析的价值。"
    >
      <div className="intern">
        {internships.map((it) => (
          <article className="intern__card" key={it.company}>
            <div className="intern__logo">
              <Img src={it.logo} alt={`${it.company} LOGO`} fallback={<LogoFallback company={it.company} />} className="intern__logo-img" />
            </div>
            <div className="intern__main">
              <div className="intern__head">
                <div>
                  <h3 className="intern__company">{it.company}</h3>
                  {it.dept && <span className="intern__dept">{it.dept}</span>}
                </div>
                <div className="intern__rolebox">
                  <span className="intern__role">{it.role}</span>
                  <span className="intern__period">{it.period}</span>
                </div>
              </div>
              <ul className="intern__points">
                {it.points.map((p, i) => {
                  const [head, ...rest] = p.split('：')
                  return (
                    <li key={i}>
                      <span className="intern__pt-head">{head}：</span>
                      <span>{rest.join('：')}</span>
                    </li>
                  )
                })}
              </ul>
              {it.link && (
                <a className="intern__link" href={it.link} target="_blank" rel="noreferrer">
                  查看详情 <Icon name="arrow" size={14} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
