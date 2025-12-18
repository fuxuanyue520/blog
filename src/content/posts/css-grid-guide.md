---
title: "CSS Grid 布局完全指南"
description: "告别 float 和 position，拥抱现代化的二维布局系统。本文详细介绍了 Grid 布局的各个属性及其应用场景。"
publishedAt: "2025-12-19T11:00:00"
category: "tech"
---

CSS Grid Layout 是 CSS 中最强大的布局系统。与 Flexbox 不同，Grid 是二维布局系统，可以同时处理行和列。

## 定义容器

```css
.container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 100px 100px;
	gap: 10px;
}
```

## 常用属性

- `grid-template-areas`: 通过命名区域来定义布局，非常直观。
- `justify-items` / `align-items`: 控制网格项在单元格内的对齐方式。
- `fr` 单位: 代表网格容器中可用空间的一份。

## 响应式布局

结合 Media Queries，Grid 可以轻松实现复杂的响应式布局，无需大量的计算和 hack。
