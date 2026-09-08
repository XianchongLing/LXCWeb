// ============================================================
// 个人数据模型 — 凌先冲
// 所有 image 字段为占位资源路径（/images/...），后续把真实图片
// 放到 public/images/ 下同名即可替换；link 为可点击外链。
// ============================================================

export const profile = {
  name: '凌先冲',
  enName: 'LING XIANCHONG',
  title: '统计 · 数据分析 / 游戏策划',
  tagline: '用数据理解世界，用模型驱动决策',
  avatar: '/images/avatar.jpg',
  gender: '男',
  age: 23,
  origin: '安徽 · 马鞍山',
  phone: '13812501341',
  email: 'lingxc2003@163.com',
  wechat: 'pu58up',
  contacts: [
    { label: '电话', value: '13812501341', link: 'tel:13812501341' },
    { label: '邮箱', value: 'lingxc2003@163.com', link: 'mailto:lingxc2003@163.com' },
    { label: '微信', value: 'pu58up', link: '' }
  ],
  // Hero 视频背景。已清理水印与底部提示条，带版本号避免缓存
  heroVideo: '/video/hero.mp4?v=3',
  resumeLink: ''
}

// 求职方向 —— 每个带一个职业图标
export const jobDirections = [
  {
    key: 'data-analysis',
    title: '数据分析',
    en: 'Data Analytics',
    desc: '以统计建模与可视化挖掘业务洞察，支撑决策闭环。',
    icon: 'data-analysis'
  },
  {
    key: 'business-analysis',
    title: '商业分析',
    en: 'Business Analytics',
    desc: '从市场与经营数据出发，构建可落地的商业解决方案。',
    icon: 'business-analysis'
  },
  {
    key: 'user-research',
    title: '用户研究',
    en: 'User Research',
    desc: '通过问卷、访谈与行为数据，定位用户痛点与需求。',
    icon: 'user-research'
  },
  {
    key: 'game-design',
    title: '游戏策划',
    en: 'Game Design',
    desc: '围绕版本迭代与核心系统，平衡数值与玩家体验。',
    icon: 'game-design'
  },
  {
    key: 'quant-invest',
    title: '量化投资',
    en: 'Quantitative Investment',
    desc: '以机器学习与计量模型预测收益、刻画市场情绪。',
    icon: 'quant-invest'
  }
]

// 学历信息
export const education = [
  {
    level: '本科',
    school: '南京邮电大学',
    en: 'Nanjing University of Posts and Telecommunications',
    college: '经济学院',
    major: '金融工程',
    period: '2021.09 – 2025.06',
    gpa: '3.87 / 5.00',
    rank: '前6%',
    honor: '获保研资格',
    research: '商业分析，金融计量',
    courses: [
      '量化投资 100', '统计学 97', '固定收益证券 97', '运筹学 94',
      '金融数据挖掘 93', '金融建模 92', '国际金融 92', '金融工程学 91'
    ],
    badge: '/images/edu/njupt.png',
    link: ''
  },
  {
    level: '硕士',
    school: '湖南大学',
    en: 'Hunan University',
    college: '金融与统计学院',
    major: '应用统计',
    period: '2025.09 – 2027.06',
    gpa: '3.55 / 4.00',
    rank: '前20%',
    honor: '“华为杯”数模竞赛二等奖',
    research: '量化金融，机器学习，自然语言处理',
    courses: [
      '统计学习 96', '金融人工智能 94', '非参数统计 94', '多元统计分析 92'
    ],
    badge: '/images/edu/hnu.png',
    link: ''
  }
]

// 荣誉奖项（获奖图片与奖项协调展示）
export const awards = [
  { name: '研究生数学建模竞赛', detail: '国家级二等奖（第二十二届）', level: '国家级', year: '2025', image: '/images/awards/shuomo.png', link: '' },
  { name: '全国大学生统计建模大赛', detail: '省级一等奖（第十届）', level: '省级', year: '2025', image: '/images/awards/tongji-1.png', link: '' },
  { name: '全国大学生统计建模大赛', detail: '省级二等奖（第九届）', level: '省级', year: '2023', image: '/images/awards/tongji-2.png', link: '' },
  { name: '长三角高校暑期社会实践', detail: '省级优秀调研报告（2022）', level: '省级', year: '2022', image: '/images/awards/changsanjiao.png', link: '' },
  { name: '“东方财富杯”金融挑战赛', detail: '省级二等奖（第十届）', level: '省级', year: '2024', image: '/images/awards/dfcf.png', link: '' },
  { name: '“挑战杯”创业计划竞赛', detail: '校级三等奖（2023）', level: '校级', year: '2023', image: '/images/awards/tiaozhanbei-1.png', link: '' },
  { name: '“创新杯”课外学术科技作品竞赛', detail: '校级二等奖（第二十四届）', level: '校级', year: '2022', image: '/images/awards/chuangxinbei.png', link: '' },
  { name: '“挑战杯”创业计划竞赛', detail: '校级三等奖（2022）', level: '校级', year: '2022', image: '/images/awards/tiaozhanbei-2.png', link: '' },
  { name: 'CMAU 市场研究与商业策划大赛', detail: '校级二等奖（第一届）', level: '校级', year: '2022', image: '/images/awards/cmau.png', link: '' },
  { name: '“外研社·国才杯”英语演讲大赛', detail: '校级二等奖（2021）', level: '校级', year: '2021', image: '/images/awards/yingyu.png', link: '' },
  { name: '三好学生', detail: '南京邮电大学 2022/2023 学年', level: '校级', year: '2023', image: '/images/awards/sanhao-1.png', link: '' },
  { name: '三好学生', detail: '南京邮电大学 2021/2022 学年', level: '校级', year: '2022', image: '/images/awards/sanhao-2.png', link: '' }
]

// 实习经历（公司 LOGO 大卡片）
export const internships = [
  {
    company: '腾讯',
    dept: 'IEG K1合作部',
    role: '游戏策划实习生',
    period: '2026.09至今',
    logo: '/images/intern/tencent.png',
    link: '',
    points: [
      '用户研究：围绕游戏新版本迭代、核心系统设计开展用户调研工作，设计问卷并进行数据分析，输出完整用户研究报告；结合玩家反馈与版本运营目标，迭代优化现有策划方案，驱动游戏内容体验优化。',
      '数值测试：跟进新版本枪械、技能数值落地测试，平衡竞技强度与商业卖点，把控伤害衰减、弹道散布、射速、穿透系数等核心战斗参数，在不破坏公平生态前提下保留顶尖武器差异化优势，规避数值崩坏。',
      '数据复盘：结合对局大数据与玩家调研反馈，统计枪械胜率、出场率、击杀效率维度数据，定位强势/弱势武器痛点，输出数值微调方案与复盘报告，支撑版本数值迭代，有效优化玩家对战体验与生态平衡。'
    ]
  },
  {
    company: '九号公司',
    dept: '用户研究组',
    role: '数据分析实习生',
    period: '2026.05-2026.08',
    logo: '/images/intern/ninebot.png',
    link: '',
    points: [
      '看板搭建：基于电动车用户调研数据，独立搭建30+业务可视化看板，覆盖用户画像、用车行为、产品体验等核心维度，直观呈现用户与产品现状，为产品迭代、用户研究提供可视化数据支撑。',
      '数仓取数：依托Hive数仓，配合AI Coding编写50+SQL脚本，针对上亿级分区表数据集，提取车辆运行、用户信息等多类业务需求数据，完成数据清洗、关联和聚类计算，保障上游分析工作的数据供给。',
      '用户研究：参与5+专项用户研究课题，协助有关调研问卷设计，对相关数据开展统计分析，挖掘用户痛点与行为特征，梳理核心结论并协助输出2份完整用户研究报告，为产品与业务决策提供参考依据。'
    ]
  },
  {
    company: '江苏国准信息技术研究院',
    dept: '',
    role: '数据分析实习生',
    period: '2024.11-2025.08',
    logo: '/images/intern/guozhun.png',
    link: '',
    points: [
      '数据收集：基于Wind、CSMAR、CFPS、CHARLS等各类数据库，结合Python爬虫抓取财经、社交文本数据，累计处理120万+条结构化/非结构化原始数据；使用Pandas、Stata完成缺失值填充、异常值剔除等数据清洗工作，统一构建100+标准化业务变量，变量复用率超80%。',
      '数据分析：使用Python、Stata、SPSS搭建OLS、LASSO等计量模型与随机森林、XGBoost等机器学习模型，参与48项政企数据分析项目，累计编写1.6万+行分析代码；完成数据间关系识别，数据预测评价，并基于Claude输出50+标准化数据分析报告服务高校课题与地方政策咨询，绘制可视化图表400+。'
    ]
  },
  {
    company: '交通银行',
    dept: '金融科技部',
    role: '信用卡数据运营',
    period: '2023.06-2023.08',
    logo: '/images/intern/bocom.png',
    link: '',
    points: [
      '数据监控：编写多表联查、聚合统计、窗口函数SQL脚本，每日提取10万+信用卡用户申请信息、交易流水数据；搭建逾期率、资产负债率、透支额度等核心风控指标看板，使用Tableau实现指标可视化。',
      '信息评估：完整梳理审核52份信用卡大额授信申请档案，通过线下走访、电话回访交叉核验23位高额度客户收支、资产信息；每周输出用户信用风险分析报表，统计客户分层授信、逾期分布数据。'
    ]
  }
]

// 科研经历
export const research = [
  {
    type: '学术论文',
    title: 'Capital Market Internationalization Ignites Investor Sentiment: Evidence from China',
    zh: '资本市场国际化对投资者情绪的影响',
    meta: 'Economic Modelling · JCR Q1 / 中科院 2 区',
    role: '第一作者 · 见刊',
    period: '2026.03',
    points: [
      '以 MSCI 新兴市场指数纳入 A 股为准自然实验，运用多时点 DID 模型量化资本市场国际化对投资者情绪的作用；设计内部动机与外部鞭策的双中介机制检验路径，完成面板数据计量回归、稳健性检验与异质性分析。'
    ],
    icon: 'paper',
    image: '/images/research/paper-1.png',
    link: 'https://www.sciencedirect.com/science/article/pii/S0264999326002233'
  },
  {
    type: '科研竞赛',
    title: '基于物理先验和 CORAL 迁移学习的智能故障特征诊断模型的高速列车轴承故障研究',
    zh: '高速列车轴承故障智能诊断',
    meta: '研究生数学建模竞赛 · 国家级二等奖',
    role: '队长 · 建模手',
    period: '2025.10',
    points: [
      '对轴承加速度数据做傅里叶变换提取时频特征，通过物理先验打分筛选高区分度特征集；对比 MLP、逻辑回归、XGBoost、LightGBM 完成源域故障诊断，采用 CORAL 对齐源域与目标域特征分布，实现无标签样本的故障分类。'
    ],
    icon: 'model',
    image: '/images/research/model-1.png',
    link: ''
  }
]

// 项目经历
export const projects = [
  {
    title: '贪心向链：基于贪心-滚动优化的加工门店与运输路线协同布局',
    role: '队长 · 策略搭建 · 算法建模',
    period: '2026.04 – 2026.05',
    tags: ['美团商业分析大赛', '贪心算法', '滚动优化', '选址-路径-成本'],
    points: [
      '需求建模：基于21家门店经纬度测算距离，结合销量与产能构建兼顾产能、时效与成本的选址模型。',
      '选址算法：拆解金杯、三轮、骑手三种运输方式约束，用贪心算法做最短路径规划，滚动筛选5家最优门店，满足3小时时效。',
      '成本测算：统一核算设备摊销、仓租、租金与运输成本；首月骑手配送降本，稳定期转组合模式，形成日均成本最优方案。',
      '迁移价值：搭建"选址—路径—成本"一体化逻辑，可复用于前置仓、中央厨房、社区自提点等场景。'
    ],
    icon: 'chain',
    image: '/images/projects/p1.png',
    link: ''
  },
  {
    title: '投资者情绪分歧下的股票收益率预测——基于多重机器学习的视角',
    role: '负责人',
    period: '2026.03 – 2026.05',
    tags: ['自然语言处理', '信息熵', 'SHAP', 'LightGBM'],
    points: [
      '分歧构建：利用A股股吧评论文本，调用多种LLM做情感分析，将评论分为正/负/中性，基于信息熵计算情绪分歧指数。',
      '因子选取：构建35个基础预测因子，用SHAP筛选出累积贡献达90%的因子。',
      '收益预测：用Ridge、Lasso、ExtraTrees、LightGBM等模型训练预测，加入分歧因子后MSE下降、R2与IC上升，多空组合收益上升24.81%。'
    ],
    icon: 'stock',
    image: '/images/projects/p2.png',
    link: ''
  },
  {
    title: 'O2O 模式下外卖店铺的经营情况研究——基于南京三区外卖店与传统店的对比',
    role: '负责人',
    period: '2024.01 – 2024.04',
    tags: ['爬虫', 'Logit 回归', 'K-means', '4P 营销'],
    points: [
      '数据体系：爬取美团数据1506条，结合227篇文献、477份问卷及18家门店访谈，构建多维分析体系。',
      '经营诊断：外卖店以18%门店占比贡献33.63%销售额，月均1832单，好评率高3个百分点；面包蛋糕、简餐外卖化率超20%，火锅、奶茶等品类渗透不足。',
      '客群建模：基于Logit回归与K-means聚类定位18–29岁核心客群，提炼食品安全、价格、优惠力度三大决策因子，诊断刷单返现、料理包滥用、平台抽成偏高等痛点。'
    ],
    icon: 'food',
    image: '/images/projects/p3.png',
    link: 'https://www.hanspub.org/journal/PaperInformation?paperID=86208'
  },
  {
    title: '基于消费者问卷的速食产品消费市场调查',
    role: '负责人',
    period: '2023.06 – 2023.10',
    tags: ['SEM', '结构方程', '问卷调查', '消费意愿'],
    points: [
      '调研设计：面向215名消费者开展问卷抽样调查，信效度优异；结合描述性、交叉分析与SEM完成多维度实证研究。',
      '行业洞察：中国速食市场2022年规模5961亿元、有望破万亿，中式速食占比近七成；自热食品、预制菜、料理包成主流品类，但存在食品安全、营养失衡、同质化严重等问题。',
      '消费行为：消费者偏好即烹类食品，电商为核心渠道；核心动因是烹煮便捷、渠道方便、价格优惠，健康卫生认可偏低；主流消费50元以下，口味呈年龄差异。',
      '建模结论：SEM显示健康、价格、品牌营销、口味为影响消费意愿的四大因素，健康正向影响最强，价格与口味负向，品牌营销正向驱动，便捷性无显著影响。'
    ],
    icon: 'survey',
    image: '/images/projects/p4.png',
    link: 'https://www.hanspub.org/journal/PaperInformation?paperID=92179'
  },
  {
    title: '破碎抑或重构：面向元宇宙的青年信仰构建及路径解决研究',
    role: '负责人',
    period: '2022.06 – 2022.10',
    tags: ['问卷调查', '深度访谈', '红色数字传承'],
    points: [
      '立足网络社会青年信仰现状，通过问卷、访谈与实地走访，前瞻性提出在虚拟世界数字复刻红色景点、数字化传承红色信仰的解决路径。报告获长三角优秀调研报告，受扬子晚报等媒体报道，阅读量超 30 万。'
    ],
    icon: 'meta',
    image: '/images/projects/p5.png',
    link: 'https://wap.yzwb.net/wap/news//2345345.html?timestamp=1740665386709'
  }
]

// 技能水平
export const skills = {
  languages: [
    { name: '英语六级 (CET-6)', score: '503' },
    { name: '英语四级 (CET-4)', score: '579' },
    { name: '普通话', score: '二级甲等' }
  ],
  tools: [
    { name: 'SQL', level: 93 },
    { name: 'Power BI', level: 92 },
    { name: 'Python', level: 88 },
    { name: 'R', level: 80 },
    { name: 'SPSS', level: 90 },
    { name: 'Stata', level: 95 },
    { name: 'Excel', level: 93 },
    { name: 'Word / PPT', level: 92 }
  ],
  ai: {
    tools: ['Codex', 'WorkBuddy', 'Claude', 'Chat GPT', 'DeepSeek'],
    abilities: ['Vibe Coding', 'AI 分析报告', 'Prompt Engineering', 'RAG', 'find-skills', '多模态 AI 应用', 'AI 自动工作流', 'Agent 智能体搭建']
  },
  evaluation: [
    '扎实的专业基础与数据分析能力',
    '丰富的科研写作与建模经验',
    '快速的学习能力与持续的抗压能力'
  ]
}

// 游戏经历（游戏图标大卡片）
export const games = [
  { platform: 'PC', type: 'FPS', name: '穿越火线', duration: '14 年', achievement: '元帅 / 枪王3 / 氪金 2000', logo: '/images/games/crossfire.png' },
  { platform: 'PC', type: 'FPS', name: 'CFHD', duration: '400 小时', achievement: '氪金 500', logo: '/images/games/cfhd.png' },
  { platform: 'PC', type: 'FPS', name: 'CSGO2', duration: '600 小时', achievement: '服役勋章×2 / 完美B+ / 氪金 10000', logo: '/images/games/csgo2.png' },
  { platform: 'PC', type: 'FPS', name: 'APEX', duration: '500 小时', achievement: '300 级', logo: '/images/games/apex.png' },
  { platform: 'PC', type: 'FPS', name: '突击英雄', duration: '3 年', achievement: '', logo: '/images/games/sudden-attack.png' },
  { platform: 'PC', type: 'FPS', name: '守望先锋', duration: '4 年', achievement: '', logo: '/images/games/overwatch.png' },
  { platform: 'PC', type: 'FPS', name: '三角洲行动', duration: '500 小时', achievement: '总对局 980 / 总资产 400M', logo: '/images/games/delta-force.png' },
  { platform: 'PC', type: 'FPS', name: '无畏契约', duration: '100 小时', achievement: '', logo: '/images/games/valorant.png' },
  { platform: 'PC', type: 'MOBA', name: '英雄联盟', duration: '10 年', achievement: '110 级 / 黄金 / 1466 场 / 氪金 3000', logo: '/images/games/league-of-legends.png' },
  { platform: 'PC', type: '多人竞技', name: '永劫无间', duration: '2 年', achievement: '', logo: '/images/games/naraka.png' },
  { platform: 'PC', type: '多人竞技', name: 'PUBG', duration: '100 小时', achievement: '', logo: '/images/games/pubg.png' },
  { platform: 'PC', type: '开放世界', name: '我的世界', duration: '10 年', achievement: '', logo: '/images/games/minecraft.png' },
  { platform: 'PC', type: '开放世界', name: 'GTA5', duration: '200 小时', achievement: '', logo: '/images/games/gta5.png' },
  { platform: 'PC', type: '动作冒险', name: '荒野大镖客2', duration: '200 小时', achievement: '', logo: '/images/games/rdr2.png' },
  { platform: 'PC', type: '动作冒险', name: '古墓丽影：崛起', duration: '通关', achievement: '', logo: '/images/games/tomb-raider-rise.png' },
  { platform: 'PC', type: '竞速类', name: '地平线4', duration: '50 小时', achievement: '', logo: '/images/games/forza-horizon-4.png' },
  { platform: 'PC', type: '体育类', name: 'FC Online', duration: '40 小时', achievement: '', logo: '/images/games/fc-online.png' },
  { platform: 'PC', type: '体育类', name: 'FC 足球世界', duration: '20 小时', achievement: '', logo: '/images/games/fc-soccer-world.png' },
  { platform: 'PC', type: '体育类', name: 'eFootball', duration: '55 小时', achievement: '', logo: '/images/games/efootball.png' },
  { platform: 'PC', type: '其他单机', name: '杀手2', duration: '20 小时', achievement: '通关', logo: '/images/games/hitman2.png' },
  { platform: 'PC', type: '其他单机', name: '恶灵附身2', duration: '6 小时', achievement: '通关', logo: '/images/games/evil-within-2.png' },
  { platform: 'PC', type: '其他单机', name: '刺客信条奥德赛', duration: '80 小时', achievement: '通关', logo: '/images/games/assassins-creed-odyssey.png' },
  { platform: 'PC', type: '其他单机', name: '森林', duration: '70 小时', achievement: '通关', logo: '/images/games/the-forest.png' },
  { platform: '手游', type: 'FPS', name: '荒野行动', duration: '1 年', achievement: '', logo: '/images/games/knives-out.png' },
  { platform: '手游', type: 'FPS', name: '和平精英', duration: '7 年', achievement: '荣耀皇冠', logo: '/images/games/peacekeeper-elite.png' },
  { platform: '手游', type: 'FPS', name: '穿越火线枪战王者', duration: '10 年', achievement: '1600 场 / 90 级 / 1.7W 击杀', logo: '/images/games/crossfire-mobile.png' },
  { platform: '手游', type: 'MOBA', name: '英雄联盟手游', duration: '5 年', achievement: '流光翡翠 / 784 场', logo: '/images/games/league-of-legends-mobile.png' },
  { platform: '手游', type: '放置养成', name: '咸鱼之王', duration: '30 小时', achievement: '', logo: '/images/games/xianyu-zhiwang.png' }
]
