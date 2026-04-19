import { defineConfig } from 'vitepress'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { readdirSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

function getDateDirs() {
  try {
    const docsDir = join(__dirname, '..')
    return readdirSync(docsDir)
      .filter(n => /^\d{4}-\d{2}-\d{2}-AI-Daily-Blog$/.test(n))
      .sort()
  } catch {
    return []
  }
}

const dateDirs = getDateDirs()

const sidebarItems = dateDirs.map(date => ({
  text: date.replace(/-AI-Daily-Blog/, ''),
  items: [
    { text: '今日概要', link: `/${date}/AI-Daily-Blog-Summary` },
    { text: '今日必读 Top 3', link: `/${date}/AI-Daily-Blog-Top` }
  ]
}))

export default defineConfig({
  title: 'AI Daily Blog',
  description: '基于 Karpathy 推荐的 92 个顶级技术博客，AI 精选摘要',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'AI Daily Blog',

    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: sidebarItems.length > 0
      ? [{ text: '📅 日报归档', items: sidebarItems }]
      : [],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Xiaooooo434680/ai-daily-blog-site' }
    ],

    footer: {
      message: '基于 Karpathy 推荐的 92 个顶级技术博客',
      copyright: 'AI Daily Blog'
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],

  appearance: 'dark'
})
