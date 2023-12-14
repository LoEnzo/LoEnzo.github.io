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

// 匹配特殊字符
private static final String SPECIAL_CHAR = "[\\x00-\\x08\\x0B-\\x0C\\x0E-\\x1F\\x7F]";
```

## 替换

```java
public static void main(String[] args) {
    String str = "<Code>%d</Code><Text>%s<T/ext>";
    System.out.println(String.format(str, 402, "message"));
}

// <Code>402</Code><Text>message<T/ext>
```

::: details 转换符说明

| 转 换 符 | 说  明                                      | 示  例       |
| -------- | ------------------------------------------- | ------------ |
| %s       | 字符串类型                                  | "mingrisoft" |
| %c       | 字符类型                                    | 'm'          |
| %b       | 布尔类型                                    | true         |
| %d       | 整数类型（十进制）                          | 99           |
| %x       | 整数类型（十六进制）                        | FF           |
| %o       | 整数类型（八进制）                          | 77           |
| %f       | 浮点类型                                    | 99.99        |
| %a       | 十六进制浮点类型                            | FF.35AE      |
| %e       | 指数类型                                    | 9.38e+5      |
| %g       | 通用浮点类型（f和e类型中较短的）            |              |
| %h       | 散列码                                      |              |
| %%       | 百分比类型                                  | ％           |
| %n       | 换行符                                      |              |
| %tx      | 日期与时间类型（x代表不同的日期与时间转换符 |              |

:::

### Base64

```java
import org.apache.commons.codec.binary.Base64;

private HttpEntity<String> fillHttpEntity() {
    HttpHeaders httpHeaders = new HttpHeaders();
    String userInfo = Base64.encodeBase64String((userName + ":" + Password).getBytes());
    httpHeaders.add(AUTHORIZATION_KEY, "Basic " + userInfo);
    httpHeaders.add(CONTENT_TYPE_KEY, CONTENT_TYPE_VALUE);
    return new HttpEntity<>(httpHeaders);
}
```

