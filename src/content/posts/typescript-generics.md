---
title: "深入理解 TypeScript 泛型"
description: "泛型是 TypeScript 中最强大的特性之一。本文将从基础语法讲起，逐步深入到高级用法，助你掌握类型编程的精髓。"
publishedAt: "2025-12-19T10:00:00"
category: "tech"
---

TypeScript 的泛型（Generics）允许我们在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型。

## 基础语法

```typescript
function identity<T>(arg: T): T {
	return arg;
}

let output = identity<string>("myString");
```

## 泛型约束

有时候我们需要对泛型进行约束，比如要求泛型必须包含某个属性：

```typescript
interface Lengthwise {
	length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
	console.log(arg.length); // 现在我们知道 arg 有 length 属性了
	return arg;
}
```

## 泛型工具类型

TypeScript 内置了很多实用的工具类型，如 `Partial<T>`, `Readonly<T>`, `Pick<T, K>` 等，熟练掌握它们可以大大提高开发效率。
