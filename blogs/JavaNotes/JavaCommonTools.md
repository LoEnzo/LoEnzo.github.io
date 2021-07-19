---
title: Java常用的一些工具类
tags:
 - javaCommonTools
categories:
 - JavaNotes
date: 2020-06-17
---

::: tip

:::

<!-- more -->

## 正则匹配

```java
private final static Pattern NAME_PATTERN = Pattern.compile("[\\s\\S]*NAME[\\s|\\n]");

private static String matchFirst(String requestJson, Pattern pattern) {
	Matcher match = pattern.matcher(requestJson);
	if (match.find() && match.groupCount() > 0) {
		return match.group(1);
	}
	return "";
}
```

