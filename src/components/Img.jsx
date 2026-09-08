import React, { useState } from 'react'

// 统一拼接 Vite base 路径，解决 GitHub Pages 子路径（/LXCWeb/）下
// 代码里写死的绝对路径（/images/...、/video/...）被解析成站点根导致 404 的问题。
export const withBase = (p) => {
  if (!p || typeof p !== 'string') return p
  if (p.startsWith('/')) {
    const base = import.meta.env.BASE_URL || '/'
    return base.replace(/\/$/, '') + p
  }
  return p
}

// 图片组件：优先加载真实资源（public/images/...），
// 加载失败则回退到传入的占位节点，保证无素材时页面依然协调。
export default function Img({ src, alt = '', fallback = null, className = '', style }) {
  const resolved = withBase(src)
  const [failed, setFailed] = useState(!resolved)
  if (failed) {
    return (
      <div className={`img-fallback ${className}`} style={style} aria-label={alt}>
        {fallback}
      </div>
    )
  }
  return (
    <img
      src={resolved}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
