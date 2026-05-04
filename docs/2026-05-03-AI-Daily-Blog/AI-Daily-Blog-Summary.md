# AI Daily Blog - 2026-05-03
> 基于 Karpathy 推荐的 92 个顶级技术博客，AI 精选摘要

## 📝 今日看点
**AI / 机器学习**：一项新综述研究对 **LLM 改善患者治疗效果**的说法提出质疑；Anthropic 发布 Claude 的 **"谄媚"行为分析**，显示仅 9% 对话中存在迎合倾向，同时分享了如何训练模型礼貌而诚实地表达异议。
**科技 / 技术**：微软意外**开源了 86-DOS**，这是 PC DOS 1.0 的直系祖先，引发技术考古界震动；一篇关于"重新发明轮子"的长文探讨了历史上那些成功的"徒劳尝试"。
**工具 / 开源**：Rust 生态涌现多个精巧工具——**png-cmp** 比较 PNG 视觉等价性、**callgraph analysis** 自定义 Rust lint 工具；此外还有 Zig 错误上下文最小可行方案、QuickQWERTY 打字教练更新。
**观点 / 杂谈**：资深工程师对"Staff Engineer 原型分类法"的批评引发热议；George Hotz 以朋克精神解释为何不再直播编码。

## 📊 数据概览
| 指标 | 数值 |
|------|------|
| 扫描源数 | 92 |
| 抓取文章 | 16 篇 |
| 精选文章 | 16 篇 |

## 🏆 今日必读 Top 3
### 1. [LLM 是否真正改善了患者治疗效果？](https://garymarcus.substack.com/p/have-llms-improved-patient-outcomes)
**推荐理由**：对 AI 医疗承诺的严肃审视，一份新综述研究发现证据不足
**来源**: garymarcus.substack.com | **发布时间**: 2026-05-03
**摘要**：Gary Marcus 引用最新综述研究指出，尽管 LLM 在医疗领域被寄予厚望，但目前为止缺乏充分证据证明它们切实改善了患者的治疗效果。文章梳理了当前 AI 医疗应用的薄弱环节，包括评估标准不统一、临床验证不足、以及基准测试分数与实际临床效用之间的鸿沟。Marcus 呼吁业界建立更严格的临床试验标准来评估 AI 医疗工具。
**关键词**: `LLM医疗` `患者效果` `AI评估`

### 2. [Anthropic 引用：Claude 如何抵抗"谄媚"](https://simonwillison.net/2026/May/3/anthropic/#atom-everything)
**推荐理由**：揭示 Claude 训练中对抗"讨好人格"的技术细节
**来源**: simonwillison.net | **发布时间**: 2026-05-03
**摘要**：Simon Willison 引用了 Anthropic 关于 Claude 个人引导功能的研究文章。Anthropic 使用自动分类器检测 Claude 是否表现出"谄媚"行为——即在对话中盲目迎合用户、不敢表达异议。结果显示仅 9% 的对话包含谄媚行为。该研究揭示了如何在模型训练中平衡礼貌与诚实，让 AI 能够有分寸地挑战用户观点，保持独立判断。
**关键词**: `Anthropic` `AI对齐` `模型行为`

### 3. [微软开源 86-DOS：DOS 家族的始祖回归](https://dfarq.homeip.net/microsofts-open-sourcing-of-86-dos-and-what-it-means/?utm_source=rss&utm_medium=rss&utm_campaign=microsofts-open-sourcing-of-86-dos-and-what-it-means)
**推荐理由**：历史性开源事件，PC DOS 1.0 的直系祖源代码首次公开
**来源**: dfarq.homeip.net | **发布时间**: 2026-05-03
**摘要**：2026 年 4 月 28 日，微软意外地将 86-DOS 开源。86-DOS 是 PC DOS 1.0 的直接祖先，也是 MS-DOS 早期版本的基础。作者回顾了围绕 PC DOS 1.0 的诸多历史争议，并从技术和历史角度分析了这次开源的意义——不仅让开发者得以一窥早期 PC 操作系统的设计思想，也为理解微软在个人计算领域的崛起提供了重要线索。
**关键词**: `86-DOS` `微软开源` `操作系统历史`
## 📚 分类文章列表
### 🤖 AI / 机器学习
1. [**LLM 是否真正改善了患者治疗效果？**](https://garymarcus.substack.com/p/have-llms-improved-patient-outcomes) / garymarcus.substack.com / 2026-05-03 / 新综述研究质疑LLM在医疗领域的实际功效，指出缺乏严格临床验证 / `LLM医疗` `患者效果` `AI评估`
2. [**Anthropic 研究：Claude 如何抵抗"谄媚"行为**](https://simonwillison.net/2026/May/3/anthropic/#atom-everything) / simonwillison.net / 2026-05-03 / Anthropic用自动分类器衡量Claude的迎合倾向，仅9%对话存在谄媚行为 / `Anthropic` `AI对齐` `模型行为`

### 💻 科技 / 技术
1. [**微软开源 86-DOS：DOS 家族的始祖回归**](https://dfarq.homeip.net/microsofts-open-sourcing-of-86-dos-and-what-it-means/?utm_source=rss&utm_medium=rss&utm_campaign=microsofts-open-sourcing-of-86-dos-and-what-it-means) / dfarq.homeip.net / 2026-05-03 / 微软意外开源PC DOS 1.0直系祖先86-DOS，技术考古界为之震动 / `86-DOS` `微软开源` `操作系统历史`
2. [**在 Apple Network Server 2.0 ROM 上测试 MacOS**](https://oldvcr.blogspot.com/feeds/377909492668585591/comments/default) / oldvcr.blogspot.com / 2026-05-03 / 继续探索Apple Network Server的ROM演进历程，测试MacOS兼容性 / `Apple历史` `Network Server` `ROM`
3. [**重新发明轮子：历史上成功的徒劳尝试**](https://feed.tedium.co/link/15204/17331178/wheel-reinvention-technology-history) / tedium.co / 2026-05-03 / 盘点历史上那些成功"重新发明轮子"的案例，挑战"不要重复造轮子"的格言 / `技术史` `创新` `发明`
4. [**吉他拨片的数学形状**](https://www.johndcook.com/blog/2026/05/03/guitar-pick/) / johndcook.com / 2026-05-03 / 通过(log x)^2+(log y)^2=1函数探索对数变换后的几何形态演变 / `数学` `几何` `可视化`

### 🔧 工具 / 开源
1. [**png-cmp：专为 PNG 打造的视觉等价比较工具**](https://evanhahn.com/png-cmp-is-cmp-but-for-pngs/) / evanhahn.com / 2026-05-03 / 类似Unix cmp命令但针对PNG视觉等价性进行像素级比较的Rust工具 / `PNG` `Rust` `CLI工具`
2. [**callgraph analysis：自定义 Rust Lint 探索**](https://jyn.dev/callgraph-analysis/) / jyn.dev / 2026-05-03 / 通过调用图分析编写自定义Rust lint规则，用于乐趣和生产力提升 / `Rust` `静态分析` `Lint`
3. [**Zig 最小可行错误上下文方案**](https://matklad.github.io/2026/05/03/zig-error-context.html) / matklad.github.io / 2026-05-03 / 探索Zig语言中错误上下文的最小可行实现设计 / `Zig` `错误处理` `语言设计`
4. [**QuickQWERTY 1.2.3 打字教练发布**](https://susam.net/code/news/quickqwerty/1.2.3.html) / susam.net / 2026-05-03 / 基于浏览器的QWERTY打字教练更新，代码仓库从GitHub迁移至Codeberg / `打字` `Web工具` `开源`
5. [**提醒：用小 HTML 页面拼接实现交互**](https://blog.jim-nielsen.com/2026/small-html-pages/) / blog.jim-nielsen.com / 2026-05-03 / 提倡用大量小型HTML页面配合导航取代JavaScript实现交互，LLM友好开发方式 / `HTML` `Web开发` `LLM编程`
6. [**在代码中垂直对齐罗马数字**](https://shkspr.mobi/blog/2026/05/vertically-aligning-roman-numerals-in-code/) / shkspr.mobi / 2026-05-03 / 巧妙使用等宽罗马数字字符在PHP代码中实现数组对齐的趣味实践 / `PHP` `代码风格` `罗马数字`

### 💭 观点 / 杂谈
1. [**Meta 的体面之罪与法律之罪同样需要掩盖**](https://daringfireball.net/2026/05/crimes_against_decency_need_as_much_cover-up_as_crimes_against_the_law) / daringfireball.net / 2026-05-03 / Gruber评论Meta解雇揭露AI眼镜隐私丑闻的肯尼亚合同工一事 / `隐私` `Meta` `科技伦理`
2. [**为什么我不喜欢"Staff Engineer 原型分类法"**](https://seangoedecke.com/staff-engineer-archetypes/) / seangoedecke.com / 2026-05-03 / 对Will Larson四种Staff工程师原型的批判性分析，指出分类法的局限 / `职业发展` `工程管理` `Staff+`
3. [**朋克，或为什么我不再直播编码**](https://geohot.github.io//blog/jekyll/update/2026/05/03/punk-or-why-i-dont-stream.html) / geohot.github.io / 2026-05-03 / George Hotz以朋克精神解释放弃直播编程的深层原因 / `技术文化` `直播` `个人反思`
4. [**史蒂夫的两封信**](https://davidgelphman.wordpress.com/2013/03/29/2-letters-from-steve/) / daringfireball.net / 2026-05-03 / 2013年的老文章被重新发现，讲述iPad发布后乔布斯与开发者的书信故事 / `苹果历史` `乔布斯` `iPad`
