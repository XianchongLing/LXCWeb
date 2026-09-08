把真实素材放到 public/ 下对应路径即可自动替换（无需改代码）：

public/
├─ video/
│  └─ hero.mp4                 ← 首页全屏视频背景（可选，缺失时显示动画网格底图）
├─ images/
│  ├─ avatar.jpg              ← 头像
│  ├─ edu/
│  │  ├─ njupt.png            ← 南京邮电大学校徽
│  │  └─ hnu.png              ← 湖南大学校徽
│  ├─ awards/                 ← 13 张获奖证书/图片（与 profile.js 中 awards[].image 对应）
│  ├─ intern/                 ← 4 张实习公司 LOGO（tencent / ninebot / guozhun / bocom）
│  ├─ research/               ← 2 张科研成果图
│  ├─ projects/               ← 5 张项目概括图
│  └─ games/                  ← 28 张游戏 LOGO（与 profile.js 中 games[].logo 对应）

命名与 src/data/profile.js 中的 image 字段一一对应。
放入文件后刷新页面，占位 SVG 会自动替换为真实图片。
