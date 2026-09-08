import React from 'react'
import Section from './Section.jsx'
import { games } from '../data/profile.js'
import { Icon, gameIconKey, gameColorKey } from './Icon.jsx'
import { withBase } from './Img.jsx'

export default function Gaming() {
  return (
    <Section
      id="gaming"
      index="07"
      kicker="GAMING"
      title="游戏经历"
      desc="十年 FPS 老兵，也玩得开开放世界与体育竞技。游戏是我理解用户、数值与体验的第一现场。"
    >
      <div className="game">
        {games.map((g, i) => (
          <article className={`game__card game__card--${gameColorKey(g.type)}`} key={i}>
            <div className="game__icon">
              {g.logo ? (
                <img src={withBase(g.logo)} alt={g.name} className="game__logo" />
              ) : (
                <Icon name={gameIconKey(g.type, g.platform)} size={24} />
              )}
            </div>
            <div className="game__body">
              <div className="game__titlerow">
                <h3 className="game__name">{g.name}</h3>
                <div className="game__tags">
                  <span className="game__tag">{g.platform}</span>
                  <span className="game__tag">{g.type}</span>
                </div>
              </div>
              <div className="game__meta">
                <span className="game__dur">{g.duration}</span>
                {g.achievement && <span className="game__ach">· {g.achievement}</span>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
