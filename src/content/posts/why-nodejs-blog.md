---
title: "为什么我选择用 Node.js 搭建个人博客"
description: "探讨在众多博客方案中，为何最终选择了基于 Node.js 的技术栈，以及这一选择背后的技术思考。"
publishedAt: "2024-05-20"
tags: ["Node.js", "Astro", "Blog"]
category: "tech"
readingTime: 5
---

在当今的技术生态中，搭建个人博客有无数种选择：从成熟的 WordPress，到简洁的 Hugo、Hexo，再到现代化的 Next.js、Nuxt.js。作为一名全栈开发者，我最终选择了基于 Node.js 生态的 Astro 框架，这不仅仅是因为熟悉，更是基于对性能、开发体验和长期维护的综合考量。

## 为什么是 Node.js 生态？

Node.js 拥有庞大且活跃的社区（NPM），这意味着我几乎可以找到任何我需要的功能模块，无论是 Markdown 解析、代码高亮，还是图像处理。

## 为什么选择 Astro？

Astro 是一个现代化的静态站点生成器，它引入了 "Islands Architecture"（群岛架构）的概念。

1. **极致的性能**：默认发送 0KB JavaScript 到客户端，除非你明确需要交互。
2. **框架无关**：我可以在同一个项目中混合使用 React、Vue、Svelte 组件。
3. **内容优先**：专为内容驱动的网站（如博客）设计。

## 结语

选择技术栈不仅是为了完成任务，更是为了享受创造的过程。Node.js + Astro 给了我足够的自由度和掌控感，让我能够专注于内容创作，同时拥有一个高性能的展示平台。
