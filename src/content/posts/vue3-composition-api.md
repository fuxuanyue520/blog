---
title: "Vue 3.0 组合式 API 实战指南"
description: "深入解析 Composition API 的设计理念，并通过实战案例展示如何重构大型组件，提升代码复用性和可维护性。"
publishedAt: "2025-12-19T09:00:00"
category: "tech"
---

Vue 3.0 的 Composition API 是对 Options API 的一次重大升级。它不是为了取代前者，而是为了解决复杂组件逻辑复用难的问题。

## 为什么需要 Composition API？

在 Vue 2 中，我们通常使用 Mixins 来复用逻辑，但 Mixins 存在命名冲突和来源不清晰的问题。Composition API 通过函数组合的方式，完美解决了这些痛点。

### 核心优势

1.  **更好的逻辑复用**：将相关业务逻辑封装在独立的 Hook 函数中。
2.  **更灵活的代码组织**：不再受限于 data、methods、computed 的物理分割。
3.  **更好的 TypeScript 支持**：纯函数天然对类型推导友好。

## 实战案例：封装一个 useRequest Hook

```typescript
import { ref } from "vue";

export function useRequest(apiFunc) {
	const loading = ref(false);
	const data = ref(null);
	const error = ref(null);

	const execute = async (...args) => {
		loading.value = true;
		try {
			data.value = await apiFunc(...args);
		} catch (e) {
			error.value = e;
		} finally {
			loading.value = false;
		}
	};

	return { loading, data, error, execute };
}
```

通过这个简单的 Hook，我们就可以在任何组件中轻松管理异步请求的状态，无需重复编写 loading 和 error 的处理逻辑。
