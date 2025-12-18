---
title: "Docker 容器化部署入门"
description: "为什么现在的后端开发离不开 Docker？本文将手把手教你编写 Dockerfile，实现应用的容器化部署。"
publishedAt: "2025-12-19T13:00:00"
category: "tech"
---

Docker 解决了“在我的机器上能跑”的经典问题。通过将应用及其依赖打包进容器，我们可以保证环境的一致性。

## 编写 Dockerfile

一个典型的 Node.js 应用 Dockerfile：

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

## Docker Compose

使用 `docker-compose.yml` 可以定义和运行多容器 Docker 应用程序，非常适合本地开发环境的搭建（如同时启动 App、DB、Redis）。
