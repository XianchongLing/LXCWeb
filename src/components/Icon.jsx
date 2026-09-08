import React from 'react'

// 统一的线性图标系统（科技感 / 发丝描边）。
// 所有图标 24x24，currentColor 着色，便于在浅色主题下克制使用。

const P = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

const paths = {
  // —— 求职方向 ——
  'data-analysis': (
    <>
      <path d="M3 3v18h18" {...P} />
      <path d="M7 14l3-4 3 3 4-6" {...P} />
    </>
  ),
  'business-analysis': (
    <>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" {...P} />
      <circle cx="10" cy="4" r="1.4" {...P} />
    </>
  ),
  'user-research': (
    <>
      <circle cx="11" cy="8" r="3.2" {...P} />
      <path d="M4.5 20c0-3.3 2.9-5.5 6.5-5.5 1.3 0 2.5.3 3.5.9" {...P} />
      <path d="M16 14l4 4M20 14l-4 4" {...P} />
    </>
  ),
  'game-design': (
    <>
      <rect x="3" y="8" width="18" height="9" rx="3" {...P} />
      <path d="M7 11.5v3M5.5 13h3" {...P} />
      <circle cx="15.5" cy="12.5" r="0.9" {...P} />
      <circle cx="17.5" cy="14.5" r="0.9" {...P} />
      <path d="M12 4v2M9.5 5h5" {...P} />
    </>
  ),
  'quant-invest': (
    <>
      <path d="M4 16l4-4 3 2 5-7" {...P} />
      <path d="M16 7h4v4" {...P} />
      <path d="M4 21h16" {...P} />
    </>
  ),

  // —— AI / 科技图标 ——
  ai: (
    <>
      <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4.8 6.4a6 6 0 1 1-4.4 0C7 14.5 5 12 5 9a7 7 0 0 1 7-7z" {...P} />
      <path d="M12 6v6M9 9h6" {...P} />
      <circle cx="12" cy="12" r="1.5" {...P} />
    </>
  ),

  // —— 科研 / 项目概括性图标 ——
  paper: (
    <>
      <path d="M6 3h9l4 4v14H6z" {...P} />
      <path d="M14 3v5h5" {...P} />
      <path d="M9 12h7M9 15h7M9 18h4" {...P} />
    </>
  ),
  model: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" {...P} />
      <path d="M12 3v18M4 7.5l8 4.5 8-4.5" {...P} />
    </>
  ),
  chain: (
    <>
      <circle cx="6" cy="6" r="2.4" {...P} />
      <circle cx="18" cy="18" r="2.4" {...P} />
      <path d="M8 6h6a3 3 0 0 1 3 3v6" {...P} />
    </>
  ),
  stock: (
    <>
      <path d="M4 14l4-4 3 2 5-6" {...P} />
      <path d="M16 6h4v4" {...P} />
      <path d="M3 20h18" {...P} />
    </>
  ),
  food: (
    <>
      <path d="M5 3v8a2 2 0 0 0 4 0V3M7 11v10" {...P} />
      <path d="M16 3c-1.5 1-2 3-2 5s.5 3 2 3v10" {...P} />
      <path d="M16 3c1.5 1 2 3 2 5s-.5 3-2 3" {...P} />
    </>
  ),
  survey: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" {...P} />
      <path d="M8 8h8M8 12h8M8 16h5" {...P} />
    </>
  ),
  meta: (
    <>
      <circle cx="12" cy="12" r="9" {...P} />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" {...P} />
    </>
  ),

  // —— 游戏类型图标 ——
  'g-fps': (
    <>
      <path d="M3 12h4l2-5 3 10 3-10 2 5h4" {...P} />
    </>
  ),
  'g-moba': (
    <>
      <circle cx="12" cy="12" r="8.5" {...P} />
      <path d="M12 3.5v17M3.5 12h17" {...P} />
    </>
  ),
  'g-arena': (
    <>
      <path d="M12 3l8 5v8l-8 5-8-5V8z" {...P} />
    </>
  ),
  'g-open': (
    <>
      <circle cx="9" cy="9" r="4" {...P} />
      <path d="M15 15l5 5" {...P} />
      <path d="M12 13l-2 3M17 11l3-1" {...P} />
    </>
  ),
  'g-race': (
    <>
      <path d="M5 17h11a3 3 0 1 0-3-3" {...P} />
      <circle cx="8" cy="17" r="1.6" {...P} />
      <path d="M16 9l3-3 0 3 3 0-3 3" {...P} />
    </>
  ),
  'g-sport': (
    <>
      <circle cx="12" cy="12" r="9" {...P} />
      <path d="M12 7v5l3 2" {...P} />
    </>
  ),
  'g-single': (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" {...P} />
      <path d="M8 12l3 3 5-6" {...P} />
    </>
  ),
  'g-idle': (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" {...P} />
      <circle cx="10" cy="10" r="1.4" {...P} />
      <circle cx="14" cy="14" r="1.4" {...P} />
    </>
  ),

  // —— UI 图标 ——
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" {...P} />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" {...P} />
      <path d="M3 7l9 6 9-6" {...P} />
    </>
  ),
  phone: (
    <>
      <path d="M6 3h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" {...P} />
    </>
  ),
  wechat: (
    <>
      <path d="M9 4C5 4 2 6.7 2 10c0 1.9 1 3.5 2.6 4.6L4 17l2.8-1.5c.7.2 1.5.3 2.2.3" {...P} />
      <path d="M22 15c0-2.8-2.7-5-6-5s-6 2.2-6 5 2.7 5 6 5c.7 0 1.4-.1 2-.3L20 21l-.6-1.7C21 18.3 22 16.8 22 15z" {...P} />
    </>
  ),
  link: (
    <>
      <path d="M9 15l6-6" {...P} />
      <path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1" {...P} />
      <path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1" {...P} />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" {...P} />
      <circle cx="12" cy="9" r="2.4" {...P} />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" {...P} />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" {...P} />
    </>
  )
}

export function Icon({ name, size = 22, className = '', style }) {
  const node = paths[name] || paths['link']
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      aria-hidden="true"
    >
      {node}
    </svg>
  )
}

// 游戏类型 -> 图标 key
export function gameIconKey(type, platform) {
  const t = (type || '').toLowerCase()
  if (t.includes('fps')) return 'g-fps'
  if (t.includes('moba')) return 'g-moba'
  if (t.includes('竞速')) return 'g-race'
  if (t.includes('体育')) return 'g-sport'
  if (t.includes('开放')) return 'g-open'
  if (t.includes('单人') || t.includes('单机')) return 'g-single'
  if (t.includes('放置')) return 'g-idle'
  if (t.includes('多人')) return 'g-arena'
  if (t.includes('动作')) return 'g-single'
  return 'g-arena'
}

// 游戏类型 -> 彩虹色 key
export function gameColorKey(type) {
  const t = (type || '').toLowerCase()
  if (t.includes('fps')) return 'fps'
  if (t.includes('moba')) return 'moba'
  if (t.includes('竞速')) return 'race'
  if (t.includes('体育')) return 'sport'
  if (t.includes('开放')) return 'open'
  if (t.includes('单人') || t.includes('单机')) return 'single'
  if (t.includes('放置')) return 'idle'
  if (t.includes('多人')) return 'arena'
  if (t.includes('动作')) return 'action'
  return 'fps'
}

export default Icon
