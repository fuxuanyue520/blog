# Qiulan Blog (秋兰以为佩的博客)

一个基于 Astro + Tailwind CSS 构建的现代化个人博客系统。极简设计，高性能体验。

## 📸 项目预览

![alt text](image.png)

## ✨ 核心特性

- **极致性能**: 基于 Astro 静态生成 (SSG)，Lighthouse 评分接近满分。
- **现代化 UI**: 深度集成的 Tailwind CSS，支持平滑的深色/浅色模式切换。
- **响应式设计**: 完美适配桌面、平板和移动端设备。
- **平滑过渡**: 启用 Astro View Transitions，提供类似 SPA 的无刷新页面切换体验。
- **功能丰富**:
  - 文章分类与标签系统
  - 自动生成分页
  - 字数统计与阅读时间估算
  - 随机高清风景背景图
  - 响应式侧边栏与导航
  - SEO 优化（Meta 标签、Sitemap）

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **图标**: [Iconify](https://icon-sets.iconify.design/)
- **部署**: Netlify / Vercel / GitHub Pages

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/fuxuanyue520/Blog.git
cd X_blog
```

### 2. 安装依赖

```bash
pnpm install
# 或者
npm install
# 或者
yarn
```

### 3. 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:4321` 即可预览。

### 4. 构建生产版本

```bash
pnpm build
```

构建产物将位于 `dist/` 目录下。

## 📂 目录结构

```text
src/
├── components/    # 通用组件 (Navbar, Banner, Cards...)
├── content/       # 博客内容 (Markdown 文件)
├── layouts/       # 页面布局 (BaseLayout, PageLayout)
├── pages/         # 路由页面 (index, posts, about...)
├── styles/        # 全局样式
└── utils/         # 工具函数
```

## 📝 撰写文章

在 `src/content/posts/` 目录下创建 `.md` 文件即可发布新文章。

**Frontmatter 格式示例：**

```yaml
---
title: "我的第一篇文章"
description: "文章的简短描述..."
publishedAt: "2025-12-19T12:00:00"
category: "tech" # 可选值: tech, essay, project
tags: ["astro", "blog"] # 可选
coverImage: "https://example.com/image.jpg" # 可选
---
```

## 🤝 贡献

欢迎提交 Issue 或 Pull Request 来改进这个项目！

## 📄 许可证

MIT License © 2025 秋兰以为佩
