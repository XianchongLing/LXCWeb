import React from 'react'
import { profile } from '../data/profile.js'
import { Icon } from './Icon.jsx'

export default function Hero() {
  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="hero">
      {/* 视频背景（可选）：将真实视频放到 public/video/hero.mp4 即自动启用 */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      >
        <source src={profile.heroVideo} type="video/mp4" />
      </video>

      {/* 动画网格背景（视频缺失时作为高级感底图） */}
      <div className="hero__scrim" aria-hidden="true" />
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__blob hero__blob--4" />
        <div className="hero__ring" />
        <div className="hero__scanline" />
      </div>

      <div className="hero__inner">
        <span className="hero__status">
          <i className="hero__status-dot" />
          27 届秋招 · 求职中
        </span>

        <div className="hero__meta">
          <span className="hero__kicker">PERSONAL WEBSITE · 2027</span>
          <span className="hero__dot" />
          <span className="hero__kicker">{profile.title}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">凌先冲</span>
          <span className="hero__title-sub">{profile.enName}</span>
        </h1>

        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={() => go('about')}>
            了解我
            <Icon name="arrow" size={16} />
          </button>
          <button className="btn btn--ghost" onClick={() => go('contact')}>
            取得联系
          </button>
        </div>

        <div className="hero__stats">
          <div className="hstat"><span className="hstat__v">4</span><span className="hstat__k">段实习经历</span></div>
          <div className="hstat"><span className="hstat__v">7</span><span className="hstat__k">科研 / 项目</span></div>
          <div className="hstat"><span className="hstat__v">30+</span><span className="hstat__k">款游戏沉淀</span></div>
          <div className="hstat"><span className="hstat__v">20+</span><span className="hstat__k">荣誉奖项</span></div>
        </div>
      </div>

      <button className="hero__scroll" onClick={() => go('about')} aria-label="向下滚动">
        <span>SCROLL</span>
        <span className="hero__scroll-line" />
      </button>
    </section>
  )
}
