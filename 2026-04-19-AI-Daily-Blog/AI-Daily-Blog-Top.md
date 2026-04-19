# AI Daily Blog 今日必读 Top 3 - 2026-04-19

> 每日精选 3 篇最重要文章，附完整正文中文翻译

---

## 1. [Claude Opus 4.6 与 4.7 系统提示词变化详解](https://simonwillison.net/2026/Apr/18/opus-system-prompt/#atom-everything)

**推荐理由**：Anthropic 唯一公开系统提示词的头部 AI 实验室，这篇详细分析揭示了 Claude 4.7 相较于 4.6 的关键行为变化，对 AI 开发者和研究者具有重要参考价值。

**来源**: simonwillison.net

**发布时间**: 2026-04-18

---

### 完整正文

# Claude Opus 4.6 与 4.7 系统提示词变化详解

Anthropic 是唯一一家公开系统提示词的主流 AI 实验室。他们的系统提示词档案可以追溯到 2024 年 7 月的 Claude 3，在发布新模型时查看系统提示词的演变总是很有趣。

Opus 4.7 于 4 月 16 日发布（4 月 18 日在我的 RSS 中出现），我花了一些时间详细比较了它与 Opus 4.6 的差异。

## 命名更新

"developer platform" 更名为 "Claude Platform"

## 新增 Claude 工具

Claude 在多个平台推出了 AI 代理功能：Chrome 浏览器（浏览代理）、Excel（电子表格代理）以及 **PowerPoint（幻灯片代理）**。

## 儿童安全扩展

新增 `<critical_child_safety_instructions>` 标签包裹的扩展儿童安全条款。其中一条新增内容："一旦 Claude 因儿童安全原因拒绝某个请求，同一对话中的所有后续请求都必须极其谨慎地处理。"

## 减少催促行为

当用户表示想要结束对话时，Claude 不再请求用户留下或试图引导用户继续对话。

## "行动 vs 澄清"部分

当细节未指定时，Claude 应该"现在就做出合理尝试，而不是先被采访"。"优先使用工具行动，而不是让用户自己查询"——Claude 应该将任务完成到底。

## 工具搜索机制

Claude 现在会调用 `tool_search` 来检查可用工具，然后再声称无法访问位置、记忆、日历、文件或过去的对话。

## 鼓励简洁

"Claude 保持回答重点突出、简洁明了，避免用冗长的回答让用户应接不暇。"

## 移除限制

取消了禁止使用星号表情符号的规则，以及避免使用"确实"、"坦白说"或"直接"等词的限制。

## 新增饮食失调部分

当用户表现出饮食失调迹象时，Claude 不应提供"精确的营养、饮食或锻炼指导——不提供具体数字、目标或分步骤计划"。

## 公正性部分

对于"复杂或争议性问题"，Claude 可以拒绝"简单的肯定或否定回答"，而是提供 nuanced（细致入微的）回应。

## 删除 Trump 说明

关于 Trump 是总统的表述已被删除，反映了 2026 年 1 月的新知识截止日期。

## 工具描述说明

文章指出，公开的系统提示词不包含完整的工具描述。Claude 可用的命名工具列表包括：

- `ask_user_input_v0`, `bash_tool`, `conversation_search`, `create_file`, `fetch_sports_data`, `image_search`, `message_compose_v1`, `places_map_display_v0`, `places_search`, `present_files`, `recent_chats`, `recipe_display_v0`, `recommend_claude_apps`, `search_mcp_registry`, `str_replace`, `suggest_connectors`, `view`, `weather_fetch`, `web_fetch`, `web_search`, `tool_search`, `visualize:read_me`, `visualize:show_widget`

---

## 2. [LLM 如何在训练中变得更加连贯](https://www.gilesthomas.com/2026/04/how-an-llm-becomes-more-coherent-over-training)

**推荐理由**：Giles Thomas 通过复现 Karpathy 2015 年的经典实验，用现代 LLM 展示了训练过程中模型输出的演变历程，对理解大模型工作原理极具启发性。

**来源**: gilesthomas.com

**发布时间**: 2026-04-17

---

### 完整正文

# LLM 如何在训练中变得更加连贯

我记得很有趣的是，2015 年 Andrej Karpathy 发布了关于 RNN 的文章，并给出了训练过程中输出如何改善的例子。用一个（相对）现代的基于 Transformer 的 LLM 会是什么样子？

我最近训练了一个 GPT-2 小型风格的 LLM，有 1.63 亿参数，在约 32 亿个 token 的 FineWeb 数据集上训练。

每隔一段时间，我会用"Every effort moves you"这个提示生成一次补全，观察输出如何随着训练的进行而改善。以下是我发现的结果：

## 训练前的状态

模型的输出"本质上是毫无内容的 token 色拉，没有结构或连贯性"，包含看似随机的单词组合。

## 早期进展（第 617 步）

模型"基本上学会了哪些 token 最常见"，产生碎片化的、类似列表的输出。

## 形成中的连贯性（第 1,234 步）

输出"有了某种意义的曙光"，但整体仍然毫无意义。

## 真正的连贯性（第 2,468 步）

模型产生的文本"实际上有一定道理（至少开头部分）"。例如：

> "Every effort moves you to a different country. For all the most part, a world map can only see the world map."

## 中期训练（第 9,255-10,489 步）

到训练约三分之一处（已处理超过 10 亿个 token），模型产生了"相当连贯的文本"，尽管通常是老套的商业励志内容。

## 核心洞察

作者强调"大部分改进已经发生"在三分之一处。后期的训练较少关注生成合理的文本，更多关注确保正确性。正如 Thomas 所指出的：

> "当然，问题是我们不仅仅想要合理的文本生成器——我们还希望内容有道理且正确。"

他用例子说明：如果问法国的首都是什么，应该得到"巴黎"而不是"一个合理但错误的答案，比如'鲁昂'"。

## 值得注意的现象

后期的检查点显示了常见 LLM 的问题：
- 重复措辞（第 25,297 和 26,531 步）
- 过早用 end-of-text token 终止文档（第 27,765 步）
- 偶尔有真正高质量的输出（第 28,382 步）：
> "Every effort moves you, however, towards a better future, and that's what counts as a win."

![训练损失曲线图](https://www.gilesthomas.com/post-assets/llm-from-scratch-32k-interventions-training-our-best-model-locally-gradient-accumulation/interventions-loss-chart.png)

---

## 3. [Claude 系统提示词作为 Git 时间轴](https://simonwillison.net/2026/Apr/18/extract-system-prompts/#atom-everything)

**推荐理由**：Simon Willison 巧妙的工具将 Anthropic 的系统提示词历史转化为 Git 提交历史，让研究者可以用熟悉的 Git 命令追踪 AI 模型行为的演变，是 AI 可解释性的优秀实践。

**来源**: simonwillison.net

**发布时间**: 2026-04-18

---

### 完整正文

# 研究：Claude 系统提示词作为 Git 时间轴

Anthropic 发布的 Claude 系统提示词历史已被转化为基于 Git 的探索工具，将单一的 Markdown 源文件拆分为细粒度的文件和时间戳提交。

## 方法论

通过按模型、系列和版本组织提取的提示词，研究者可以利用 `git log`、`diff` 和 `blame` 来追踪提示词演变、比较差异，并将变更归因于特定日期。

## 核心价值

这种方法改变了系统提示词的分析方式：

- **版本对比**：轻松比较任意两个版本之间的差异
- **变更溯源**：用 `git blame` 查看特定行的来源和时间
- **演进可视化**：用 `git log` 查看完整的提示词演变历史
- **粒度分析**：将 monolithic 文件拆分为模块化结构

## 资源链接

- [Anthropic 系统提示词页面](https://platform.claude.com/docs/en/release-notes/system-prompts)
- [GitHub 仓库](https://github.com/simonw/research/tree/main/extract-system-prompts)
- [Simon Willison 关于 Opus 4.6 vs 4.7 变化的详细笔记](https://simonwillison.net/2026/Apr/18/opus-system-prompt/#atom-everything)

## 技术实现

这个工具的创新之处在于将结构化数据（系统提示词）转换为开发者熟悉的 Git 版本控制语义，使得：

1. 非技术背景的人也能理解 AI 模型行为的变化
2. 研究者可以用标准工具分析提示词演变
3. 为 AI 可解释性研究提供了新的方法论范式
