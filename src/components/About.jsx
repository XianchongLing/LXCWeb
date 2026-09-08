import React from 'react'
import Section from './Section.jsx'
import Img from './Img.jsx'
import { profile } from '../data/profile.js'
import { Icon } from './Icon.jsx'

function AvatarFallback() {
  return (
    <div className="avatar__fallback">
      <span>凌</span>
      <div className="avatar__ring" />
    </div>
  )
}

export default function About() {
  const p = profile
  const facts = [
    { k: '性别', v: p.gender },
    { k: '年龄', v: `${p.age}` },
    { k: '籍贯', v: p.origin }
  ]
  return (
    <Section
      id="about"
      index="01"
      kicker="ABOUT"
      title="关于我"
      desc="用数据说话，用模型决策；既能在数仓里写 SQL，也愿意钻进游戏里做运营分析、深入商业中做用户研究。"
      descNowrap
    >
      <div className="about">
        <div className="about__media">
          <div className="about__avatar">
            <Img src={p.avatar} alt="凌先冲 头像" fallback={<AvatarFallback />} className="about__avatar-img" />
            <span className="about__avatar-frame" />
          </div>
          <div className="about__facts">
            {facts.map((f) => (
              <div className="fact" key={f.k}>
                <span className="fact__k">{f.k}</span>
                <span className="fact__v">{f.v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about__intro">
          <p className="about__lead">
            我是 <strong>凌先冲</strong>，一名统计专业的应届研究生。
            本科毕业于南京邮电大学金融工程，现于湖南大学攻读应用统计硕士。
          </p>
          <p className="about__text">
            五年下来，我把自己训练成一个“能从原始数据走到业务结论”的人：
            在交通银行做过信用卡风控看板，在江苏国准参与过 48 项政企数据分析项目，
            也在九号公司做过电动车看板与取数，
            还在腾讯 IEG 钻进游戏版本里做用户研究与数值测试。无论是计量建模、
            机器学习，还是玩家访谈，我都相信——好的判断，来自对数据的敬畏与对细节的执着。
          </p>
          <div className="about__contacts">
            {p.contacts.map((c) => (
              <a
                key={c.label}
                className="chip"
                href={c.link || undefined}
                target={c.link?.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <Icon name={c.label === '邮箱' ? 'mail' : c.label === '微信' ? 'wechat' : 'phone'} size={15} />
                <span className="chip__label">{c.label}</span>
                <span className="chip__value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
