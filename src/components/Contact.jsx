import React from 'react'
import { profile } from '../data/profile.js'
import { Icon } from './Icon.jsx'

export default function Contact() {
  const links = [
    { icon: 'phone', label: '电话', value: profile.phone, href: `tel:${profile.phone}` },
    { icon: 'mail', label: '邮箱', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'wechat', label: '微信', value: profile.wechat, href: '' }
  ]
  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true">
        <div className="contact__grid" />
        <div className="contact__blob contact__blob--1" />
        <div className="contact__blob contact__blob--2" />
        <div className="contact__blob contact__blob--3" />
      </div>
      <div className="contact__inner">
        <span className="contact__kicker">GET IN TOUCH</span>
        <h2 className="contact__title">一起，用数据创造点什么</h2>
        <p className="contact__sub">{profile.name} · {profile.title}</p>

        <div className="contact__cards">
          {links.map((l) => (
            <a
              key={l.label}
              className="contact__card"
              href={l.href || undefined}
              target={l.href?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span className="contact__card-icon"><Icon name={l.icon} size={22} /></span>
              <span className="contact__card-label">{l.label}</span>
              <span className="contact__card-value">{l.value}</span>
            </a>
          ))}
        </div>

        <div className="contact__foot">
          <span>© 2026 {profile.name}</span>
          <span className="contact__foot-dot" />
          <span>Build With WorkBuddy</span>
        </div>
      </div>
    </section>
  )
}
