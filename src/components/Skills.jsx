import React from 'react'
import Section from './Section.jsx'
import { skills } from '../data/profile.js'
import { Icon } from './Icon.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="06"
      kicker="SKILLS"
      title="技能水平"
      desc="工具是手段，判断力才是核心。下面是我赖以工作的语言、软件、AI 与底层能力。"
    >
      <div className="sk">
        <article className="sk__card sk__card--wide">
          <div className="sk__card-head">
            <Icon name="data-analysis" size={18} />
            <span>专业软件</span>
          </div>
          <div className="sk__bars">
            {skills.tools.map((t) => (
              <div className="bar" key={t.name}>
                <div className="bar__top">
                  <span className="bar__name">{t.name}</span>
                  <span className="bar__pct">{t.level}</span>
                </div>
                <div className="bar__track">
                  <div className="bar__fill" style={{ width: `${t.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="sk__card sk__card--ai">
          <div className="sk__card-head">
            <Icon name="ai" size={18} />
            <span>AI 能力</span>
          </div>
          <div className="sk__ai">
            <div className="sk__ai-group">
              <span className="sk__ai-label">常用工具</span>
              <div className="sk__ai-chips">
                {skills.ai.tools.map((tool) => (
                  <span className="sk__ai-chip" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
            <div className="sk__ai-group">
              <span className="sk__ai-label">应用场景</span>
              <div className="sk__ai-chips">
                {skills.ai.abilities.map((ab) => (
                  <span className="sk__ai-chip" key={ab}>{ab}</span>
                ))}
              </div>
            </div>
          </div>
        </article>

        <article className="sk__card">
          <div className="sk__card-head">
            <Icon name="user-research" size={18} />
            <span>语言能力</span>
          </div>
          <ul className="sk__lang">
            {skills.languages.map((l) => (
              <li key={l.name}>
                <span className="sk__lang-name">{l.name}</span>
                <span className="sk__lang-score">{l.score}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="sk__card sk__card--eval">
          <div className="sk__card-head">
            <Icon name="quant-invest" size={18} />
            <span>核心能力</span>
          </div>
          <ul className="sk__eval">
            {skills.evaluation.map((e, i) => (
              <li key={i}>
                <span className="sk__eval-no">0{i + 1}</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  )
}
