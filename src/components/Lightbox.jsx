import React, { useEffect, useCallback } from 'react'
import { Icon } from './Icon.jsx'
import Img from './Img.jsx'

export default function Lightbox({ image, title, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!image) return null

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__overlay" />
      <button className="lightbox__close" onClick={onClose} aria-label="关闭">
        <Icon name="close" size={28} />
      </button>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <Img src={image} alt={title || ''} className="lightbox__img" />
        {title && <p className="lightbox__title">{title}</p>}
      </div>
    </div>
  )
}
