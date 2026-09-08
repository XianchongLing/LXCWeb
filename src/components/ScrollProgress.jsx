import React, { useEffect, useState } from 'react'

// 顶部细线滚动进度（克制科技感）
export default function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      setW(max > 0 ? (h.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return <div className="scroll-progress" style={{ width: `${w}%` }} aria-hidden="true" />
}
