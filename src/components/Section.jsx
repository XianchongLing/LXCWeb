import React from 'react'

// 统一的区块外壳：版心 1700px、mono 序号、克制小标题。
export default function Section({ id, index, kicker, title, desc, descNowrap, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section__inner">
        <div className="section__head">
          <div className="section__index">
            <span className="section__num">{index}</span>
            <span className="section__kicker">{kicker}</span>
          </div>
          <div className="section__titlewrap">
            <h2 className="section__title">{title}</h2>
            {desc && <p className={`section__desc${descNowrap ? ' section__desc--nowrap' : ''}`}>{desc}</p>}
          </div>
        </div>
        <div className="section__body">{children}</div>
      </div>
    </section>
  )
}
