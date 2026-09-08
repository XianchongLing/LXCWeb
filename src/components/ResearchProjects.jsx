import React from 'react'
import Section from './Section.jsx'
import Img from './Img.jsx'
import { research, projects } from '../data/profile.js'
import { Icon } from './Icon.jsx'

function formatDesc(text) {
  if (!text) return ''
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br/>')
}

function TileFallback({ icon }) {
  return (
    <div className="tile">
      <Icon name={icon} size={30} />
    </div>
  )
}

function Card({ item, kind }) {
  return (
    <article className="rp__card">
      <div className="rp__media">
        <Img src={item.image} alt={item.title} fallback={<TileFallback icon={item.icon} />} className="rp__media-img" />
        <span className="rp__kind">{kind}</span>
      </div>
      <div className="rp__main">
        <div className="rp__meta">
          <span className="rp__type">{item.type || '项目'}</span>
          <span className="rp__period">{item.period}</span>
        </div>
        <h3 className="rp__title">{item.title}</h3>
        {item.zh && <p className="rp__zh">{item.zh}</p>}
        {item.meta && <p className="rp__sub">{item.meta}</p>}
        {item.role && <p className="rp__role">{item.role}</p>}
        {item.points && (
          <ul className="intern__points">
            {item.points.map((p, i) => {
              if (p.includes('：')) {
                const [head, ...rest] = p.split('：')
                return (
                  <li key={i}>
                    <span className="intern__pt-head">{head}：</span>
                    <span>{rest.join('：')}</span>
                  </li>
                )
              }
              return <li key={i}>{p}</li>
            })}
          </ul>
        )}
        {item.tags && (
          <div className="rp__tags">
            {item.tags.map((t) => <span className="rp__tag" key={t}>{t}</span>)}
          </div>
        )}
        {item.link && (
          <a className="rp__link" href={item.link} target="_blank" rel="noreferrer">
            查看原文 / 报道 <Icon name="arrow" size={14} />
          </a>
        )}
      </div>
    </article>
  )
}

export default function ResearchProjects() {
  return (
    <Section
      id="research"
      index="05"
      kicker="RESEARCH & PROJECTS"
      title="科研 + 项目经历"
      desc="两篇代表性科研成果，加五个从商业分析到机器学习、从问卷到文本挖掘的完整项目。"
    >
      <div className="rp">
        <div className="rp__group">
          <span className="rp__group-label">科研 · RESEARCH</span>
          <div className="rp__grid">
            {research.map((r, i) => <Card key={i} item={r} kind="科研" />)}
          </div>
        </div>
        <div className="rp__group">
          <span className="rp__group-label">项目 · PROJECTS</span>
          <div className="rp__grid">
            {projects.map((p, i) => <Card key={i} item={p} kind="项目" />)}
          </div>
        </div>
      </div>
    </Section>
  )
}
