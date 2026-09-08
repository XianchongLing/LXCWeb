import React, { useState } from 'react'

// 图片组件：优先加载真实资源（public/images/...），
// 加载失败则回退到传入的占位节点，保证无素材时页面依然协调。
export default function Img({ src, alt = '', fallback = null, className = '', style }) {
  const [failed, setFailed] = useState(!src)
  if (failed) {
    return (
      <div className={`img-fallback ${className}`} style={style} aria-label={alt}>
        {fallback}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
