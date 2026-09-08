import React, { useEffect, useState } from 'react'
import { Icon } from './Icon.jsx'

// 回到顶部（滚动后出现）
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`to-top ${show ? 'is-show' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="回到顶部"
    >
      <Icon name="arrow" size={18} style={{ transform: 'rotate(-90deg)' }} />
    </button>
  )
}
