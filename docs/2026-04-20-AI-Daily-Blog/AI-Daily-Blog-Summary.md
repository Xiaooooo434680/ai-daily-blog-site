# AI Daily Blog - 2026-04-20

> 基于 Karpathy 推荐的 92 个顶级技术博客，AI 精选摘要

## 📝 今日看点

**AI / 机器学习**：Anthropic 发布 Claude Opus 4.7Tokenizer 变化引发关注，Simon Willison 深度分析 4.6 与 4.7 系统提示差异；**Figma 面临 AI 设计工具严峻挑战**，Claude Design 发布使其依赖非设计师座位的模式雪上加霜；Matt Webb 预言**无头服务（Headless）将成为个人 AI 时代主流**，用户通过个人 AI 访问服务比直接使用服务体验更好。

**科技 / 技术**：B-52 轰炸机的星跟踪器内部藏着精密的**机电角度计算机**，在 GPS 出现之前实现自动化天文导航；Mac Mini 与 Mac Studio 面临**供应严重短缺**，高端型号缺货达 12 周；YouTube 和 VLC 无法播放双鱼眼格式视频，需通过 FFmpeg v360 滤镜转换为等距圆柱投影。

**工具 / 开源**：Simon Willison 发布 **Claude Token Counter 升级版**，新增多模型对比功能，可直观比较不同模型的 token 消耗；Wander Console 0.5.0 发布，的去中心化自托管网页控制台新增内置网络爬虫。

**观点 / 杂谈**：Joan Westenberg 追溯时间标准化历程——从 1840 年铁路需要统一时间开始，演化到如今实时传输的**统一纳秒**；欧洲数据主权问题凸显，美国云服务商通过至少三部法律获取欧洲数据访问权，无论服务器是否在欧洲。

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 扫描源数 | 92 |
| 抓取文章 | 2318 篇 |
| 精选文章 | 281 篇 |

## 🏆 今日必读 Top 3

### 1. [Changes in the system prompt between Claude Opus 4.6 and 4.7](https://simonwillison.net/2026/Apr/18/opus-system-prompt/#atom-everything)

**推荐理由**：Anthropic 唯一公开系统提示的大模型厂商，Simon Willison 深度解读 4.6→4.7 升级背后的设计哲学变化

**来源**: simonwillison.net | **发布时间**: 2026-04-18

**摘要**：Anthropic 是唯一一家公开发布系统提示的主要 AI 实验室，其系统提示档案可追溯至 2024 年 7 月的 Claude 3。Opus 4.7 于 4 月 16 日发布，Claude 4.7 是首个改变分词器的模型版本。Samenvatting 分析了 Claude 4.6 与 4.7 之间系统提示的具体差异。

**关键词**: `Claude 4.7` `System Prompt` `Tokenizer` `Anthropic` `分词器变化`

---

### 2. [Figma's woes compound with Claude Design](https://martinalderson.com/posts/figmas-woes-compound-with-claude-design/?utm_source=rss&utm_medium=rss&utm_campaign=feed)

**推荐理由**：深入分析 Figma 为何在这波 AI 设计工具浪潮中处境最为尴尬，揭示 SaaS 增长模式的结构性脆弱

**来源**: martinalderson.com | **发布时间**: 2026-04-19

**摘要**：Figma 的商业模式依赖"设计师座位"增长，但 AI 设计工具（如 Claude Design）正在改变这一前提——任何人都能成为设计师。Figma 的非设计师用户占比使其在 AI 时代尤为脆弱。Claude Design 发布后，Figma 的处境进一步恶化。

**关键词**: `Figma` `Claude Design` `SaaS` `AI 设计工具` `用户增长`

---

### 3. [Headless everything for personal AI](https://simonwillison.net/2026/Apr/19/headless-everything/#atom-everything)

**推荐理由**：Matt Webb 展望个人 AI 时代的服务架构，无头服务模式或将成为 AI 原生应用的新范式

**来源**: simonwillison.net | **发布时间**: 2026-04-19

**摘要**：Matt Webb 认为无头服务（Headless services）将变得更加普及——无头服务对个人 AI 来说比直接使用服务更快、更可靠。原因是使用个人 AI 比直接使用服务体验更好（确实如此），而无头服务对个人 AI 来说比有头服务更高效。

**关键词**: `Headless` `Personal AI` `Matt Webb` `AI Agent` `服务架构`

---

## 📚 分类文章列表

### 🤖 AI / 机器学习

1. [**Claude Token Counter 升级支持模型对比**](https://simonwillison.net/2026/Apr/20/claude-token-counts/#atom-everything)
   - 来源: simonwillison.net | 2026-04-20
   - Simon Willison 升级 Claude Token Counter 工具，新增多模型对比功能，可同时对不同模型运行相同计数任务进行比较。Claude Opus 4.7 是首个改变分词器的模型版本。
   - 关键词: `Claude` `Token Counter` `模型对比` `分词器`

2. [**Google Sheets 中调用 Datasette SQL 函数**](https://simonwillison.net/2026/Apr/20/datasette-sql/#atom-everything)
   - 来源: simonwillison.net | 2026-04-20
   - 介绍在 Google Sheets 中直接查询 Datasette 数据的三种模式：importdata() 函数、命名函数包装、或使用 Google Apps Script 发送带 API token 的 HTTP 请求头。
   - 关键词: `Datasette` `Google Sheets` `SQL` `API`

3. [**Claude 系统提示的 Git 时间线可视化**](https://simonwillison.net/2026/Apr/18/extract-system-prompts/#atom-everything)
   - 来源: simonwillison.net | 2026-04-18
   - Simon Willison 用 Claude 从 GitHub 提取所有 Claude 版本的系统提示，构建成一个可交互的时间线，展示系统提示随模型迭代的演变过程。
   - 关键词: `Claude` `System Prompt` `Git` `Anthropic` `版本历史`

4. [**LLM 的高斯分布权重与 NF4/FP4 量化格式**](https://www.johndcook.com/blog/2026/04/18/qlora/)
   - 来源: johndcook.com | 2026-04-18
   - 解析 QLoRA 中的 NF4（正态分布 4 位浮点）和 FP4（4 位浮点）量化格式，这些是从 Hugging Face 下载量化 LLM 权重时常见的存储格式。
   - 关键词: `LLM` `量化` `NF4` `FP4` `QLoRA`

5. [**Figma 面临 AI 设计工具挑战**](https://martinalderson.com/posts/figmas-woes-compound-with-claude-design/?utm_source=rss&utm_medium=rss&utm_campaign=feed)
   - 来源: martinalderson.com | 2026-04-19
   - Figma 依赖非设计师用户增长使其在 AI 时代格外脆弱，Claude Design 发布使其问题雪上加霜。
   - 关键词: `Figma` `Claude Design` `AI` `设计工具`

6. [**Headless 服务将成为个人 AI 主流**](https://simonwillison.net/2026/Apr/19/headless-everything/#atom-everything)
   - 来源: simonwillison.net | 2026-04-19
   - Matt Webb 认为无头服务对个人 AI 来说更快更可靠，将变得更普及。
   - 关键词: `Headless` `Personal AI` `Matt Webb`

### 💻 科技 / 技术

1. [**B-52 轰炸机星跟踪器的机电角度计算机**](http://www.righto.com/feeds/8382904110431912671/comments/default)
   - 来源: righto.com | 2026-04-18
   - 在 GPS 出现之前，B-52 通过自动化天文导航系统跟踪星体位置计算导航信息。60 年代初开发的机电角度计算机可精确跟踪星体并转换为导航数据。
   - 关键词: `B-52` `天文导航` `机电计算机` `星跟踪器`

2. [**Mac Mini 与 Mac Studio 供应严重短缺**](https://www.wsj.com/tech/personal-tech/apple-mac-mini-supply-3e7a7509?st=fKpr4Q)
   - 来源: daringfireball.net | 2026-04-18
   - 32GB RAM 的 M4 Mac Mini 和 64GB RAM 的 M4 Pro 型号在 Apple.com 显示"目前无货"，部分型号发货等待时间长达 12 周。
   - 关键词: `Apple` `Mac Mini` `Mac Studio` `供应短缺`

3. [**双鱼眼视频转换为等距圆柱投影 (LG 360)**](https://shkspr.mobi/blog/2026/04/reprojecting-dual-fisheye-videos-to-equirectangular-lg-360/)
   - 来源: shkspr.mobi | 2026-04-19
   - LG 360 相机拍摄的 MP4 视频采用双鱼眼格式，VLC 和 YouTube 需要等距圆柱格式才能播放球面视频。使用 FFmpeg v360 滤镜可完成格式转换。
   - 关键词: `FFmpeg` `双鱼眼` `等距圆柱` `LG 360` `视频处理`

4. [**Hitachi Ltd, Part II: H8、PA-RISC 与 SuperH 处理器**](https://www.abortretry.fail/p/hitachi-ltd-part-ii)
   - 来源: abortretry.fail | 2026-04-19
   - 探讨日立公司使用的三种微处理器架构：H8、PA-RISC 和 SuperH 的历史与技术细节。
   - 关键词: `Hitachi` `H8` `PA-RISC` `SuperH` `处理器`

5. [**乔治亚州投票技术失误分析**](https://pluralistic.net/2026/04/18/dominion-sucks-actually/)
   - 来源: pluralistic.net | 2026-04-18
   - 分析 Dominion 投票机的问题，但澄清并非如 Tucker Carlson 所说的问题类型。
   - 关键词: `投票` `Dominion` `乔治亚州`

6. [**2026/04/18 阅读清单**](https://www.construction-physics.com/p/reading-list-04182026)
   - 来源: construction-physics.com | 2026-04-18
   - 本期包括：四足焊接机器人、中国冲击 2.0、变压器初创公司、中国神秘移动卫星等话题。
   - 关键词: `阅读清单` `机器人` `中国` `卫星`

### 🔧 工具 / 开源

1. [**Claude Token Counter 新增多模型对比功能**](https://simonwillison.net/2026/Apr/20/claude-token-counts/#atom-everything)
   - 来源: simonwillison.net | 2026-04-20
   - 升级后的工具可对相同文本在不同模型上的 token 计数进行对比，Claude Opus 4.7 是首个改变分词器的版本。
   - 关键词: `Claude` `Token Counter` `模型对比` `工具`

2. [**Wander Console 0.5.0 发布**](https://susam.net/code/news/wander/0.5.0.html)
   - 来源: susam.net | 2026-04-19
   - Wander 是一个去中心化自托管网页控制台，让访客探索由独立网站所有者社区推荐的有趣网站。新版内置控制台网络爬虫功能。
   - 关键词: `Wander` `去中心化` `自托管` `网页控制台` `开源`

### 💭 观点 / 杂谈

1. [**我们如何失去了活生生的"现在"**](https://www.joanwestenberg.com/how-we-lost-the-living-now/)
   - 来源: joanwestenberg.com | 2026-04-20
   - 1840 年前，布里斯托的正午比伦敦早约 10 分钟，没人介意。铁路需要统一时间才能运行——这个统一时间现在以纳秒级精度实时传输。
   - 关键词: `时间标准化` `铁路` `纳秒` `历史`

2. [**大科技云服务不会因为纸质文件更安全**](https://berthub.eu/articles/posts/big-tech-clouds-niet-veiliger-met-papier/)
   - 来源: berthub.eu | 2026-04-19
   - 将社会、政府托付给美国服务器存在两个问题：只要美国愿意即可切断服务；至少三部法律允许美国获取我们在欧洲的 Microsoft 服务器上的数据。
   - 关键词: `云安全` `数据主权` `美国法律` `欧洲`

3. [**把机器接入机器**](https://blog.jim-nielsen.com/2026/hook-it-up-to-the-machine/)
   - 来源: blog.jim-nielsen.com | 2026-04-19
   - 作者回忆 2000 年代全家乘绿色道奇凯旋旅行的经历，van 总是过热，却在高速公路上正常运转。比喻技术与依赖的关系。
   - 关键词: `技术` `依赖` `回忆` `旅行`

4. [**税收表格简史与 IRS 演变**](https://feed.tedium.co/link/15204/17321557/tax-forms-history-irs)
   - 来源: tedium.co | 2026-04-18
   - 税收令人困惑，但最初引入时同样令人困惑。探讨 1040 表格的历史与 IRS 的演变。
   - 关键词: `税务` `IRS` `1040` `历史`

5. [**Kubrick 1940 年代纽约地铁照片**](https://daringfireball.net/2026/04/kubrick_new_york_subway)
   - 来源: daringfireball.net | 2026-04-18
   - 青少年时期 Stanley Kubrick 拍摄的纽约地铁黑白照片。
   - 关键词: `Kubrick` `摄影` `纽约地铁` `历史`