# AI Daily Blog 今日必读 Top 3 - 2026-04-16

> 每日精选 3 篇最重要文章，附完整正文中文翻译

---

## 1. [OpenAI 发布 GPT-5.4-Cyber：AI 网络安全专用模型时代来临](https://simonwillison.net/2026/Apr/14/trusted-access-openai/)

**推荐理由**：继 Anthropic Claude Mythos 之后，OpenAI 正式入局 AI 网络安全赛道

**来源**: Simon Willison

**发布时间**: 2026-04-14

---

### 完整正文

OpenAI 宣布推出 GPT-5.4-Cyber，这是一款专门针对网络安全防御场景微调的新模型。这是继 Anthropic 发布 Claude Mythos 项目之后，AI 安全领域的又一重磅产品。

OpenAI 在公告中表示："为了应对未来几个月日益强大的模型能力，我们正在专门微调模型以实现防御性网络安全用例，从今天开始推出一款基于 GPT-5.4 训练的网络安全版本——GPT-5.4-Cyber。"

此外，OpenAI 还扩展了今年 2 月推出的"网络防御可信访问计划"（Trusted Access for Cyber）。该计划允许用户通过政府签发的身份证照片（由 Persona 处理验证）来验证身份，从而获得访问 OpenAI 模型的"降低摩擦"体验。

Simon Willison 评论道："坦率地说，这个 OpenAI 公告很难理解。他们出人意料地完全没有提及 Anthropic，但公告的大部分内容强调了他们多年来的网络安全工作以及'民主化访问'这些工具的目标，这就是为什么他们强调 2 月份的自助验证流程。"

值得注意的是，如果想访问其最佳安全工具，用户仍然需要通过额外的 Google 表单申请流程，这与 Anthropic 的 Project Glasswing 相比并没有本质区别。

---


## 2. [geohot 发布 zappa：AI 驱动的中间人代理工具](https://geohot.github.io/blog/jekyll/update/2026/04/15/zappa-mitmproxy.html)

**推荐理由**：传奇黑客 geohot 展示 AI 时代网络攻防新范式

**来源**: geohot.github.io

**发布时间**: 2026-04-15

---

### 完整正文

不久之后，AI 将能够以一种与人类无法区分的方式与互联网互动。这可能是一个惊人的机会，将人们从那些瞄准你注意力的目标中解放出来。

我 vibe coding 了这个名为 zappa 的代理工具，虽然还不够完善，但我认为它指明了一个前进方向。为什么我要自己浏览互联网或使用应用程序？当机器可以为我做这些事的时候。那些被价值 1 美分的 Qwen 广告展示所计费的人才是冤大头。

我不会提供源代码，而是把这篇 prompt 包含在这篇文章中。我用 GPT-5.4 来编写它。

---

下载 mitmproxy，配置 Firefox 使用 SOCKS5 代理，并安装所需证书以代理 HTTPS 流量。编写一个 mitmproxy 插件，将所有网站流量通过 Qwen（使用 Cerebras API）路由。你需要代理 HTML、JS 和 CSS。让 Qwen 删除所有广告、弹窗、亮色、移动元素和"扼杀式"垃圾内容，然后返回一个优化版本的网站。再通过代理将这个好版本返回给用户，同时记录所有内容到文件。如果 AI 返回错误，则将错误传递给用户，不要返回未经 AI 转换的页面。

---

![效果对比 1](https://geohot.github.io/blog/assets/images/zappa_1.png)
![效果对比 2](https://geohot.github.io/blog/assets/images/zappa_3.png)

在这些测试中我禁用了 uBlock Origin，左边是 Chrome 默认互联网，右边是使用代理的 Firefox——如果你们没法分辨的话。

![效果对比 3](https://geohot.github.io/blog/assets/images/zappa_2.png)
![效果对比 4](https://geohot.github.io/blog/assets/images/zappa_4.png)

正确的方式应该是开发一个浏览器扩展，在某个没有完全限制扩展的浏览器中。它应该很简单，带有可自定义的提示词，这样人们可以像分享 uBlock Origin 过滤列表一样分享提示词。它应该是代理式的，不应该直接返回 HTML，而应该使用工具并保持每个站点的状态。想象一下，一个熟练的软件工程师以 100 倍实时速度运行，在你查看之前为你清理网站。

不要被那些推销给你的 AI 浏览器垃圾所迷惑，那只是他们想要更好地控制你的注意力。你需要一个可以信任的 AI 来反击！

---

我希望广告行业的人看到墙上的字迹，感到恐惧，转向用户友好的商业模式。智能即将变得非常便宜，每个人都将拥有一个全天候、快速运转的个人助理来处理这个"扼杀式"的世界。

你可能会说，他们那边会有更聪明的 AI 来让一切变得更糟。但如果我的 AI 是人类级别的且与我一致，他们必须变得超级强大才能对抗我——那就祝他们好运吧。

图灵测试结束了。享受你的广告费花在展示给我的 Qwen 看吧。

---


## 3. [KrebsOnSecurity：微软 4 月补丁修复 167 个漏洞，含 SharePoint 零日](https://krebsonsecurity.com/2026/04/patch-tuesday-april-2026-edition/)

**推荐理由**：月度安全补丁量级再创新高，企业安全运维压力陡增

**来源**: KrebsOnSecurity

**发布时间**: 2026-04-14

---

### 完整正文

**167 个漏洞：史上第二大补丁日**

微软今日推送安全更新，共修复了 Windows 操作系统及相关软件中的 167 个安全漏洞。这是微软历史上第二大补丁日，仅次于 2024 年 1 月的某个补丁周期。

**关键漏洞详解**

**SharePoint Server 零日（CVE-2026-32201）**：微软警告称，攻击者正在积极利用这个 Microsoft SharePoint Server 中的漏洞，该漏洞允许攻击者通过网络钓鱼和欺骗。CVE-2026-32201 可用于通过在可信的 SharePoint 环境中呈现伪造信息来欺骗员工、合作伙伴或客户。Action1 总裁 Mike Walters 表示："此漏洞可能导致网络钓鱼攻击、未授权数据操作或导致进一步损害的社会工程活动。主动利用的存在显著增加了组织风险。"

**BlueHammer（CVE-2026-33825）**：这是 Windows Defender 中的一个特权提升漏洞。BleepingComputer 报道称，发现该漏洞的研究人员在通知微软后，因对其响应感到恼火而公布了漏洞利用代码。Tharros 高级首席漏洞分析师 Will Dormann 确认，在安装今天的补丁后，公开的 BlueHammer 漏洞利用代码不再有效。

**浏览器漏洞激增**：Rapid7 首席软件工程师 Adam Barnett 称，今天来自微软的补丁总量"是该类别中的新纪录"，因为它包含近 60 个浏览器漏洞。 Barnett 表示，人们可能会忍不住认为这一数量的激增与一周前宣布的 Project Glasswing 有关——这是 Anthropic 推出的一项备受炒作但尚未发布的新 AI 功能，据报道在查找各种软件漏洞方面相当出色。但他指出，微软 Edge 基于 Chromium 引擎，Chromium 维护者承认有广泛的研究人员发现了这些漏洞。

**AI 与漏洞发现的未来**

Barnett 表示："一个安全的结论是，这一数量的增长是由不断扩展的 AI 能力驱动的。随着 AI 模型的能力和可用性进一步扩展，我们应该预期漏洞报告数量会进一步增加。"

**其他重要更新**

- **Google Chrome**：修复了年内第四个零日漏洞（CVE-2026-5281）
- **Adobe Reader**：紧急更新修复可导致远程代码执行的活跃利用漏洞（CVE-2026-34621），据 Tenable 高级安全工程师 Satnam Narang 称，该漏洞自 2025 年 11 月起已有活跃利用

**用户建议**

无论使用什么浏览器浏览网页，定期完全关闭并重启浏览器都很重要。这很容易被推迟（特别是如果你一直开着无数标签页），但这是确保安装任何可用更新的唯一方法。

---


*本文件由 AI 自动生成，基于 Karpathy 推荐的 92 个顶级技术博客。原文获取自各博客原文 URL。*
