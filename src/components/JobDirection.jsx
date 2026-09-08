import React from 'react'
import Section from './Section.jsx'
import { jobDirections } from '../data/profile.js'
import { Icon } from './Icon.jsx'

export default function JobDirection() {
  return (
    <Section
      id="jobs"
      index="03"
      kicker="CAREER"
      title="求职方向"
      desc="五个彼此相关、又能互相加成的方向——数据是我的底层能力，游戏与商业是我的兴趣落点。"
    >
      <div className="jobs">
        {jobDirections.map((j, i) => (
          <article className="job" key={j.key}>
            <div className="job__top">
              <span className="job__no">0{i + 1}</span>
              <span className="job__icon"><Icon name={j.icon} size={26} /></span>
            </div>
            <h3 className="job__title">{j.title}</h3>
            <p className="job__en">{j.en}</p>
            <p className="job__desc">{j.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
