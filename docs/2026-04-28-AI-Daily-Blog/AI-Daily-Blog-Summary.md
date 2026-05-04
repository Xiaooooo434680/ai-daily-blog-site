# AI Daily Blog - 2026-04-28

> 基于 Karpathy 推荐的 92 个顶级技术博客，AI 精选摘要

## 📝 今日看点

**AI / 机器学习**：Ed Zitron 发布重磅长文 **AI 的经济学站不住脚**，深度分析 GitHub Copilot 商业模式和 AI 行业不可持续的成本结构。The Information 报道 **OpenAI ChatGPT Plus 订阅量预计暴跌 80%**（从 4400 万降至 900 万），公司试图用低价广告订阅填补缺口。Anil Dash 文章 **"一种好的 AI 已经到来"**呼吁在 AI 讨论中跳出二元对立。由 Alec Radford（GPT 系列作者）参与打造的 **talkie：1930 年代风格 13B 语言模型**创意项目发布。

**科技 / 技术**：Mitchell Hashimoto 宣布 **Ghostty 终端离开 GitHub**，引发对开源托管平台依赖的广泛讨论。Armin Ronacher 撰文回忆 **GitHub 之前的开源世界**——SourceForge、Trac、Subversion。Steve Blank 发布网络安全深度文章 **Anthropic Mythos——潘多拉魔盒已被打开**，警告 AI 驱动的网络安全威胁新时代。

**工具 / 开源**：**pip 26.1 发布**，带来锁文件支持和依赖冷却（dependency cooldown）机制。**Ghostty 离开 GitHub** 成为今日最大开源生态事件。nesbitt.io 警告 **GitHub Actions 是 CI/CD 中最薄弱的环节**，指出供应链安全的风险所在。

**观点 / 杂谈**：Matthew Yglesias 表态**"我不想 vibe-code"**——他希望专业软件公司用 AI 辅助做出更好更便宜的产品，而非人人都用 AI 自己写代码。非法状态 vs 不欲状态的编程思维模型值得每位开发者思考。

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 扫描源数 | 92 |
| 抓取文章 | 1918 篇 |
| 精选文章 | 292 篇 |

## 🏆 今日必读 Top 3

### 1. [AI's Economics Don't Make Sense](https://www.wheresyoured.at/ais-economics-dont-make-sense/)

**推荐理由**：Ed Zitron 对 AI 行业商业模式的毁灭性拆解——5000 到 18000 字深度长文，直击 GitHub Copilot 等 AI 产品的经济不可持续性。

**来源**: Where's Your Ed (Ed Zitron) | **发布时间**: 2026-04-28

**摘要**：Ed Zitron 在这篇重磅深度分析中指出，**GitHub Copilot 用户收到了价格大幅上涨的通知**，印证了他一周前的报道。他详细拆解了 AI 辅助编码工具的经济学：大型语言模型的推理成本极高，而订阅收入远不足以覆盖。Zitron 进一步分析了包括 OpenAI、Anthropic 和 NVIDIA 在内的整个 AI 产业链，论证当前 AI 商业模式建立在不可持续的烧钱基础上。这篇 5000-18000 字的深度文章是理解 AI 产业经济现实的必读材料。

**关键词**: `AI 经济学` `GitHub Copilot` `商业模式` `Ed Zitron` `可持续性`

---

### 2. [Introducing talkie: a 13B vintage language model from 1930](https://simonwillison.net/2026/Apr/28/talkie/)

**推荐理由**：Alec Radford（GPT 系列作者之一）参与打造的复古风格语言模型，在 AI 同质化浪潮中展现出极致的创意和趣味。

**来源**: Simon Willison (via talkie-lm.com) | **发布时间**: 2026-04-28

**摘要**：Talkie 是一个**13B 参数的语言模型**，由 Nick Levine、多伦多大学教授 David Duvenaud，以及 GPT/GPT-2/Whisper 的核心作者 **Alec Radford** 联合打造。该模型最大的特色是模仿 **1930 年代的英语风格**——不是简单地添加复古滤镜，而是从模型训练层面还原那个时代的语言特色、表达方式和用词习惯。模型已在 Hugging Face 上开源发布，是一个在 AI 模型日益同质化时代中令人耳目一新的创意项目。

**关键词**: `Talkie` `Alec Radford` `复古语言模型` `GPT 作者` `开源`

---

### 3. [Ghostty Is Leaving GitHub](https://mitchellh.com/writing/ghostty-leaving-github)

**推荐理由**：Mitchell Hashimoto（HashiCorp 联合创始人）宣布 Ghostty 终端项目离开 GitHub，开源生态平台依赖问题再引热议。

**来源**: Mitchell Hashimoto | **发布时间**: 2026-04-28

**摘要**：Mitchell Hashimoto 宣布其开发的高性能终端模拟器 **Ghostty** 正式离开 GitHub，迁移到自托管平台。作为 HashiCorp 联合创始人和著名开源开发者，Hashimoto 的这一决定在开发者社区引发强烈反响。文章讨论了离开 GitHub 的具体原因，包括对集中化平台的控制权、CI/CD 依赖、以及开源项目长期可持续性的考量。这一事件也与同日的"Before GitHub"（Armin Ronacher 回忆 GitHub 之前的开源世界）形成呼应，构成关于开源基础设施未来的深度对话。

**关键词**: `Ghostty` `GitHub` `Mitchell Hashimoto` `开源` `自托管` `平台依赖`

---

## 📚 分类文章列表

### 🤖 AI / 机器学习

1. [**AI 的经济学站不住脚——Copilot 涨价背后的不可持续商业模式**](https://www.wheresyoured.at/ais-economics-dont-make-sense/)
   - 来源: Where's Your Ed | 2026-04-28
   - Ed Zitron 万字深度分析，拆解 AI 代码助手高昂推理成本与微薄订阅收入之间的巨大鸿沟。
   - 关键词: `AI 经济学` `Copilot` `成本` `可持续性`

2. [**OpenAI ChatGPT Plus 订阅量预计暴跌 80%：从 4400 万到 900 万**](https://www.wheresyoured.at/openai-projects-chatgpt-plus-subscriptions-to-drop-by-80-from-44-million-in-2025-to-9-million-in-2026-made-up-using-cheaper-subscriptions-somehow/)
   - 来源: Where's Your Ed | 2026-04-28
   - The Information 报道 OpenAI 内部预测 Plus 订阅暴跌，拟用广告版 ChatGPT Go 填补收入。
   - 关键词: `OpenAI` `ChatGPT Plus` `订阅量` `收入预测` `商业分析`

3. [**Introducing talkie：1930 年代风格 13B 复古语言模型**](https://simonwillison.net/2026/Apr/28/talkie/)
   - 来源: Simon Willison | 2026-04-28
   - Alec Radford 参与打造的创意项目，Hugging Face 开源发布，还原 1930 年代英语特色。
   - 关键词: `Talkie` `Alec Radford` `复古模型` `Hugging Face`

4. [**"一种好的 AI 已经到来"——Anil Dash 谈跳出 AI 二元对立**](https://anildash.com/2026/04/28/one-good-ai-is-here/)
   - 来源: Anil Dash | 2026-04-28
   - AI 批评者与狂热者都忽视了：存在不靠窃取数据、环境影响透明的"好 AI"。
   - 关键词: `AI 伦理` `开源模型` `环境影响` `Anil Dash`

5. [**OpenAI Codex 有趣发现：禁止谈论小精灵、浣熊等生物**](https://simonwillison.net/2026/Apr/28/openai-codex/)
   - 来源: Simon Willison | 2026-04-28
   - Codex 系统提示中明确禁止提及 goblins、raccoons 等，除非与用户查询绝对相关。
   - 关键词: `OpenAI Codex` `系统提示` `有趣发现`

### 💻 科技 / 技术

1. [**Ghostty 离开 GitHub——开源基础设施的独立宣言**](https://mitchellh.com/writing/ghostty-leaving-github)
   - 来源: Mitchell Hashimoto | 2026-04-28
   - HashiCorp 联合创始人的终端项目脱离 GitHub 集中化平台，引发开源生态未来讨论。
   - 关键词: `Ghostty` `GitHub` `开源` `平台依赖`

2. [**GitHub Actions 是最薄弱的环节——CI/CD 供应链安全警示**](https://nesbitt.io/2026/04/28/github-actions-is-the-weakest-link.html)
   - 来源: nesbitt.io | 2026-04-28
   - 警告 GitHub Actions 工作流中的安全风险，Anne Robinson 也要找 .github/workflows 谈话。
   - 关键词: `GitHub Actions` `CI/CD` `供应链安全` `DevOps`

3. [**Anthropic Mythos——潘多拉魔盒已被打开：量子与 AI 时代的网络安全**](https://steveblank.com/2026/04/28/anthropic-mythos-weve-opened-pandoras-box/)
   - 来源: Steve Blank | 2026-04-28
   - 网络安全社区曾预测量子计算破解密码学，但 AI 威胁来得更早更猛烈。
   - 关键词: `网络安全` `AI 威胁` `量子计算` `密码学`

4. [**TRS-80 Model 100：第一台笔记本电脑的诞生史**](https://dfarq.homeip.net/trs-80-model-100/)
   - 来源: The Silicon Underground | 2026-04-28
   - 由 Kyocera 制造、Radio Shack 销售，这款早期笔记本的硬件设计和销售传奇。
   - 关键词: `TRS-80` `笔记本历史` `Kyocera` `复古计算`

5. [**非法状态 vs 不欲状态：编程中的微妙思维模型**](https://buttondown.com/hillelwayne/archive/illegal-vs-unwanted-states/)
   - 来源: Hillel Wayne | 2026-04-28
   - 很多我们想要标记为"非法"的状态实际上只是"不欲"——日历应用双订会议的案例。
   - 关键词: `编程模型` `状态管理` `设计思维`

6. [**圆弧近似：从 chord 到 arc 的数学技巧**](https://www.johndcook.com/blog/2026/04/28/circular-arc-approximation/)
   - 来源: John D. Cook | 2026-04-28
   - 通过已知 chord 长度和半 chord 长度近似圆弧长度，优雅的几何计算技术。
   - 关键词: `几何` `圆弧` `数学` `近似算法`

### 🔧 工具 / 开源

1. [**pip 26.1 发布：锁文件和依赖冷却机制来了！**](https://simonwillison.net/2026/Apr/28/pip-261/)
   - 来源: Simon Willison | 2026-04-28
   - Python 包管理器重大更新，新增 lockfile 支持和 dependency cooldown，同时不再支持 Python 3.9。
   - 关键词: `pip` `Python` `依赖管理` `lockfile` `包管理`

2. [**Ghostty 离开 GitHub：自托管时代的开源项目管理**](https://mitchellh.com/writing/ghostty-leaving-github)
   - 来源: Mitchell Hashimoto | 2026-04-28
   - 高性能终端模拟器脱离 GitHub，对集中化托管平台依赖的深度反思。
   - 关键词: `Ghostty` `GitHub` `自托管` `开源项目`

3. [**Before GitHub：回忆 GitHub 之前的开源世界**](https://lucumr.pocoo.org/2026/4/28/before-github/)
   - 来源: Armin Ronacher | 2026-04-28
   - Flask 作者回忆 SourceForge、Trac、Subversion 时代，以及 Bitbucket 作为 Git 替代的历史。
   - 关键词: `GitHub` `开源历史` `SourceForge` `Bitbucket` `Subversion`

4. [**跨进程 Reader/Writer 锁开发：第一部分——信号量**](https://devblogs.microsoft.com/oldnewthing/20260428-00/?p=112278)
   - 来源: The Old New Thing | 2026-04-28
   - Raymond Chen 详解 Windows 跨进程读写锁的信号量实现基础。
   - 关键词: `Windows` `进程同步` `读写锁` `信号量`

### 💭 观点 / 杂谈

1. [**Matthew Yglesias：我不想 vibe-code，我想买专业公司用 AI 做的产品**](https://simonwillison.net/2026/Apr/28/matthew-yglesias/)
   - 来源: Simon Willison | 2026-04-28
   - 知名评论员表示希望专业软件公司使用 AI 辅助做出更好更便宜的产品，而非每个人都用 AI 自建。
   - 关键词: `Vibe-Coding` `AI 辅助` `软件产业` `消费者视角`

2. [**Vicky Osterweil 的《The Extended Universe》：Disney 如何杀死电影并统治世界**](https://pluralistic.net/2026/04/27/mouseketeers/)
   - 来源: Pluralistic (Cory Doctorow) | 2026-04-28
   - 深度书评，分析 Disney 通过 IP 扩张和特许经营策略对电影产业和文化的影响。
   - 关键词: `Disney` `IP 经济` `电影产业` `Cory Doctorow` `文化批评`

3. [**Before GitHub：一个开源老兵的平台迁移回忆录**](https://lucumr.pocoo.org/2026/4/28/before-github/)
   - 来源: Armin Ronacher | 2026-04-28
   - 经历了从自托管 Trac/SVN 到 GitHub 集中化的全过程，对平台垄断的怀旧式反思。
   - 关键词: `GitHub` `开源` `平台变迁` `Armin Ronacher`
