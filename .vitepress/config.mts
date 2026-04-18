import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { fileURLToPath } from 'url'
import { glob } from 'glob'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { readdir, stat } from 'fs/promises'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 生成侧边栏配置
async function generateSidebar() {
  const docsDir = join(__dirname, '../docs')

  try {
    const entries = readdir(docsDir)
    const dateDirs = (await entries)
      .filter(n => /^\d{4}-\d{2}-\d{2}-AI-Daily-Blog$/.test(n))
      .sort()

    const groups = dateDirs.map(date => {
      return {
        text: date.replace(/-AI-Daily-Blog/, ''),
        items: [
          { text: '今日概要', link: `/${date}/AI-Daily-Blog-Summary` },
          { text: '今日必读 Top 3', link: `/${date}/AI-Daily-Blog-Top` }
        ]
      }
    })

    return groups.length > 0 ? [{ text: '📅 日报归档', items: groups }] : []
  } catch {
    return []
  }
}

// 使用 await
const sidebarConfig = await generateSidebar()

export default withMermaid(defineConfig({
  title: 'AI Daily Blog',
  description: '基于 Karpathy 推荐的 92 个顶级技术博客，AI 精选摘要',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Daily Blog',

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: sidebarConfig,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/super-xiao/ai-daily-blog-site' }
    ],

    footer: {
      message: '基于 Karpathy 推荐的 92 个顶级技术博客',
      copyright: 'AI Daily Blog'
    }
  },

  mermaid: {
    theme: 'dark',
    themeVariables: {
      primaryColor: '#1e3a5f',
      primaryTextColor: '#e0e0e0',
      primaryBorderColor: '#4a9eed',
      lineColor: '#4a9eed',
      secondaryColor: '#2d4a3e',
      tertiaryColor: '#2d2d3d',
      background: '#1a1a2e',
      mainBkg: '#1e3a5f',
      nodeBorder: '#4a9eed',
      clusterBkg: '#16213e',
      titleColor: '#e0e0e0',
      edgeLabelBackground: '#1a1a2e'
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  appearance: 'dark'
}))
