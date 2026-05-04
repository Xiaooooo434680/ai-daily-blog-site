# AI Daily Blog - 2026-04-30
> 基于 Karpathy 推荐的 92 个顶级技术博客，AI 精选摘要

## 📝 今日看点
**AI / 机器学习**：**英国 AISI 发布 GPT-5.5 网络攻防能力评估**，结论为其在漏洞发现方面与人类专家相当。**OpenAI Codex CLI 0.128.0 新增 /goal 命令**，实现了 Ralph 循环——AI 代理将持续迭代直到目标达成或 token 预算耗尽。**Zig 项目联合创始人 Andrew Kelley 详解其严格反 AI 贡献政策**，称使用 LLM 的贡献者带有一种可辨识的「数字气味」。

**科技 / 技术**：KrebsOnSecurity 披露巴西一家 **反 DDoS 公司竟在运营僵尸网络攻击竞争对手**，堪称年度网络安全荒诞剧。**WebAssembly 的栈机架构讨论**引发社区热议，文章指出 WASM 因缺少 dup/swap 等操作不能算纯粹栈机。Commodore 破产 32 周年回顾分析其衰落的深层原因。

**工具 / 开源**：**2026 年开源幻想选秀**活动公布，12 支队伍蛇形选秀无薪资上限，创意十足。**RSS 分享 vibe-coding 应用的提议**引发共鸣——当 AI 加速应用开发，发现和分享个性化工具的新机制成为刚需。Cory Doctorow 剖析马里兰州新消费者保护法的漏洞，称其为「如何不禁止监控定价」。

**观点 / 杂谈**：一篇名为「**如果我能打造自己的 GitHub**」的畅想文章获得广泛关注。MacRumors 关于 Apple 可能放弃 MagSafe 的传闻被 Gruber 犀利吐槽。NASA Artemis II 任务照片竟然托管在 Flickr 上的原因也颇具启发性。

## 📊 数据概览
| 指标 | 数值 |
|------|------|
| 扫描源数 | 92 |
| 抓取文章 | 20 篇 |
| 精选文章 | 18 篇 |

## 🏆 今日必读 Top 3
### 1. [英国 AISI 对 GPT-5.5 网络攻防能力的评估](https://www.aisi.gov.uk/blog/our-evaluation-of-openais-gpt-5-5-cyber-capabilities)
**推荐理由**：继 Claude Mythos 之后，权威机构首次评估 GPT-5.5 的网络安全能力
**来源**: UK AISI / simonwillison.net | **发布时间**: 2026-04-30
**摘要**：英国人工智能安全研究所（AISI）发布了对 OpenAI GPT-5.5 网络攻防能力的正式评估报告。研究聚焦于模型在真实 CTF 挑战和漏洞发现场景中的表现，结论显示 GPT-5.5 的能力与人类网络安全专家相当。此前 AISI 已评估过 Anthropic Claude Mythos，此次评估进一步推动了 AI 安全监管的前沿讨论。报告强调需要针对前沿模型的网络能力建立持续评估框架。
**关键词**: `GPT-5.5` `网络安全` `AISI` `AI安全`

### 2. [Codex CLI 新增 /goal 命令：AI 代理的自我循环时代](https://github.com/openai/codex/releases/tag/rust-v0.128.0)
**推荐理由**：OpenAI 编码代理实现「设定目标-自动循环-完成检查」的自主工作模式
**来源**: simonwillison.net / GitHub | **发布时间**: 2026-04-30
**摘要**：OpenAI 的 Codex CLI 编码代理在 0.128.0 版本中引入了 /goal 命令，实现了此前由社区提出的 Ralph 循环模式。用户可以设定一个目标，Codex 将持续迭代直到评估目标完成或达到预设的 token 预算上限。这标志着 AI 编码代理从「单次指令-响应」模式向「目标驱动-自主循环」模式的关键演进，大幅提升了处理复杂多步编程任务的能力。
**关键词**: `Codex CLI` `OpenAI` `/goal` `编码代理`

### 3. [Zig 项目的反 AI 贡献政策：数字气味与代码诚信](https://simonwillison.net/2026/Apr/30/zig-anti-ai/)
**推荐理由**：开源社区对 AI 辅助贡献的最严格立场声明，引发关于代码诚信的深层讨论
**来源**: simonwillison.net / ziglang.org | **发布时间**: 2026-04-30
**摘要**：Zig 编程语言项目维护着开源界最严格的反 LLM 政策之一：禁止在 Issue、PR 和评论中使用 LLM，包括翻译。联合创始人 Andrew Kelley 解释称，人类错误与 LLM 幻觉有本质区别，容易识别，且来自「智能体编码」世界的贡献者带有一种不可忽视的「数字气味」。Zig 的核心信念是代码质量来自人类的深思熟虑，而非模型的概率输出。这一立场在 AI 编码工具日益普及的背景下引发广泛讨论。
**关键词**: `Zig` `反AI政策` `开源` `代码诚信`

## 📚 分类文章列表
### 🤖 AI / 机器学习
1. [**英国 AISI 评估 GPT-5.5 网络攻防能力**](https://www.aisi.gov.uk/blog/our-evaluation-of-openais-gpt-5-5-cyber-capabilities) / UK AISI / 04-30 / GPT-5.5 漏洞发现能力与人类专家相当，推动 AI 安全监管前沿 / `GPT-5.5` `网络安全` `AI安全`
2. [**Codex CLI 0.128.0 新增 /goal 自主循环**](https://github.com/openai/codex/releases/tag/rust-v0.128.0) / GitHub/OpenAI / 04-30 / 实现 Ralph 循环，设定目标后 AI 持续迭代至完成或 token 耗尽 / `Codex` `/goal` `AI代理`
3. [**Zig 项目的严格反 AI 贡献政策**](https://ziglang.org/code-of-conduct/) / ziglang.org / 04-30 / 禁止 Issue、PR、评论使用 LLM，Andrew Kelley 解释「数字气味」理论 / `Zig` `反AI` `开源治理`
4. [**史上最大的资本错配？**](https://garymarcus.substack.com/p/the-greatest-capital-misallocation) / garymarcus.substack.com / 04-30 / Gary Marcus 质疑 AI 领域巨额投资的合理性，称人们开始感到担忧 / `AI投资` `资本` `质疑`
5. [**我们需要 RSS 来分享丰富的 vibe-coded 应用**](https://simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/) / simonwillison.net / 04-30 / Matt Webb 提议用 RSS feed 发现和分享 vibe-coding 时代的海量个性化应用 / `RSS` `vibe-coding` `应用发现`
6. [**ReLU 的三种微分方法**](https://www.johndcook.com/blog/2026/04/30/derivative-of-relu/) / johndcook.com / 04-30 / 针对不可微点的三种广义导数计算方法，应用于 ReLU 激活函数 / `ReLU` `微分` `数学`
7. [**Andrew Kelley 论 LLM 代码质量**](https://simonwillison.net/2026/Apr/30/andrew-kelley/) / simonwillison.net / 04-30 / 人类错误与 LLM 幻觉有本质区别，「能编译通过测试不等于正确安全可维护」 / `LLM代码` `代码质量`

### 💻 科技 / 技术
1. [**反 DDoS 公司竟运营僵尸网络攻击巴西 ISP**](https://krebsonsecurity.com/2026/04/anti-ddos-firm-heaped-attacks-on-brazilian-isps/) / krebsonsecurity.com / 04-30 / 巴西网络安全公司被曝运营僵尸网络攻击竞争对手，CEO 声称遭遇安全入侵 / `DDoS` `网络安全` `巴西`
2. [**WebAssembly 作为栈机的思考**](https://eli.thegreenplace.net/2026/thoughts-on-webassembly-as-a-stack-machine/) / eli.thegreenplace.net / 04-30 / 探讨 WASM 缺少 dup/swap 操作是否影响其作为纯粹栈机的定位 / `WebAssembly` `栈机` `VM`
3. [**跨进程读写锁开发（三）：公平性**](https://devblogs.microsoft.com/oldnewthing/20260430-00/?p=112288) / Microsoft Old New Thing / 04-30 / 继续深入，确保排他获取在共享获取面前获得公平机会 / `Windows` `并发` `公平性`
4. [**炼油厂是如何运作的**](https://www.construction-physics.com/p/how-an-oil-refinery-works) / construction-physics.com / 04-30 / 深入剖析石油精炼的工程流程，理解现代世界能源基础设施 / `石油` `工程` `能源`
5. [**MacRumors 到底在吸什么？**](https://daringfireball.net/2026/04/30/) / daringfireball.net / 04-30 / Gruber 犀利吐槽 MacRumors 关于 Apple 放弃 MagSafe 的离奇传闻 / `Apple` `MagSafe` `辟谣`
6. [**Commodore 为何在 1994 年破产**](https://dfarq.homeip.net/why-commodore-went-bankrupt-in-1994/) / dfarq.homeip.net / 04-30 / 其衰落酝酿十年之久，原因远比表面复杂 / `Commodore` `科技史` `破产`

### 🔧 工具 / 开源
1. [**2026 开源幻想选秀公布**](https://nesbitt.io/2026/04/30/open-source-fantasy-draft.html) / nesbitt.io / 04-30 / 12 支队伍蛇形选秀，无薪资上限，开源社区创意活动 / `开源` `选秀` `社区`
2. [**如何不禁止监控定价**](https://pluralistic.net/2026/04/30/something-must-be-done/) / pluralistic.net / 04-30 / Cory Doctorow 剖析马里兰州消费者保护法的漏洞与虚伪 / `隐私` `消费者保护` `政策`

### 💭 观点 / 杂谈
1. [**如果我能打造自己的 GitHub**](https://matduggan.com/if-i-could-make-my-own-github/) / matduggan.com / 04-30 / 以幽默畅想方式探讨理想代码托管平台应具备的特质 / `GitHub` `理想主义` `畅想`
2. [**伦敦出现新 Banksy 作品**](https://www.instagram.com/reel/DXwf7pis6KT/) / Instagram / 04-30 / 精彩的雕像与风趣的介绍视频，当代最伟大的街头艺术家 / `Banksy` `艺术` `伦敦`
3. [**你可能吃错了止痛药**](https://dynomight.net/painkillers/) / dynomight.net / 04-30 / 对乙酰氨基酚 vs 布洛芬的对比分析，帮助读者做出更明智选择 / `健康` `止痛药` `对比`
4. [**Artemis II 照片为何在 Flickr 上？**](https://anildash.com/2026/04/30/artemis-photos-flickr/) / anildash.com / 04-30 / 解释 NASA 选择 Flickr 的原因：Web 2.0 时代用户数据控制权的遗产 / `NASA` `Flickr` `Web 2.0`
5. [**2026 年 4 月笔记**](https://evanhahn.com/notes-from-april-2026/) / evanhahn.com / 04-30 / 月度阅读和技术笔记汇总，包含 GitHub 可用性讨论等 / `月度总结` `笔记`
