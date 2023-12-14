---
title: Java常用时间日期转换
tags:
 - JDK8
 - LocalDateTime
 - LocalDate
 - Date
categories:
 - JavaNotes
date: 2020-05-15
---

::: tip
java常用时间日志转换

:::

# 常用时间转换

### Date -> LocalDate

```java
public static LocalDate DateToLocalDate(Date date) {
    Instant instant = date.toInstant();
    ZoneId zone = ZoneId.systemDefault();
    return LocalDateTime.ofInstant(instant, zone).toLocalDate();
}

public static LocalDate DateToLocalDate(Date date) {
    return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
}
```

### LocalDate -> Date

```java
public static Date LocalDateTodate(LocalDate) {
    ZoneId zone = ZoneId.systemDefault();
    Instant instant = localDate.atStartOfDay().atZone(zone).toInstant();
    return Date.from(instant);
}
```

### Date -> LocalTime

```java
public static LocalTime DateToLocalTime(Date date) {
    Instant instant = date.toInstant();
    ZoneId zone = ZoneId.systemDefault();
    return LocalDateTime.ofInstant(instant, zone).toLocalTime();
}
```

### LocalTime -> Date

```java
public static Date LocalDateTimeToUdate(LocalTime localTime) {
    ZoneId zone = ZoneId.systemDefault();
    return Date.from(localDateTime.atZone(zone).toInstant());
}
```

### Date -> LocalDateTime

```java
public static LocalDateTime DateToLocalDateTime(Date date) {
    Instant instant = date.toInstant();
    ZoneId zone = ZoneId.systemDefault();
    return LocalDateTime.ofInstant(instant, zone);
}

public static LocalDateTime dateToLocalDateTime(Date date) {
    return LocalDateTime.ofInstant(date.toInstant(), ZoneId.systemDefault());
}
```

### LocalDateTime -> Date

```java
public static Date LocalTimeToDate(LocalDateTime localDateTime) {
    ZoneId zone = ZoneId.systemDefault();
    Instant instant = localDateTime.atZone(zone).toInstant();
    return Date.from(instant);
}

public static Date localDateTimeToDate(LocalDateTime localDateTime) {
    return Date.from(localDateTime.atZone(ZoneId.systemDefault()).toInstant());
}
```



### 常用日期Fomatter

```java
/**
 * HHmm
 */
public static final DateTimeFormatter FORMATTER_HHmm = DateTimeFormatter.ofPattern("HHmm");
/**
 * yyyyMMdd
 */
public static final DateTimeFormatter FORMATTER_yyyyMMdd = DateTimeFormatter.ofPattern("yyyyMMdd");
/**
 * yyyy-MM-dd
 */
public static final DateTimeFormatter FORMATTER_yyyyMMdd2 = DateTimeFormatter.ofPattern("yyyy-MM-dd");
/**
 * yyyyMMddHHmm
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmm = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
/**
 * yyyy-MM-dd HHmm
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmm2 = DateTimeFormatter.ofPattern("yyyy-MM-dd HHmm");
/**
 * yyyy-MM-dd HH:mm
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmm3 = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
/**
 * yyyy-MM-dd HH:mm:ss
 */
public static final DateTimeFormatter FORMATTER_yyyyMMddHHmmss = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
/**
 * yyMMdd
 */
public static final DateTimeFormatter FORMATTER_yyMMdd = DateTimeFormatter.ofPattern("yyMMdd");
/**
 * ddMMMyy 支持大写的月份
 */
public static final DateTimeFormatter FORMATTER_ddMMMyy = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("ddMMMyy").toFormatter(Locale.ENGLISH);
/**
 * ddMMM 支持大写的月份
 */
public static final DateTimeFormatter FORMATTER_ddMMM = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("ddMMM").toFormatter(Locale.ENGLISH);
/**
 * ddMMMyyHHmm
 */
public static final DateTimeFormatter FORMATTER_ddMMMyyHHmm = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("ddMMMyyHHmm").toFormatter(Locale.ENGLISH);
/**
 * yyMMMddHHmmss
 */
public static final DateTimeFormatter FORMATTER_yyMMMddHHmmss = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("yyMMMddHHmmss").toFormatter(Locale.ENGLISH);
/**
 * yyMMddHHmmss
 */
public static final DateTimeFormatter FORMATTER_yyMMddHHmmss = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("yyMMddHHmmss").toFormatter(Locale.ENGLISH);
/**
 * yyMMMdd
 */
public static final DateTimeFormatter FORMATTER_yyMMMdd = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("yyMMMdd").toFormatter(Locale.ENGLISH);
/**
 * ddMMMyyyyHHmm
 */
public static final DateTimeFormatter FORMATTER_ddMMMyyyyHHmm = new DateTimeFormatterBuilder().parseCaseInsensitive().appendPattern("ddMMMyyyyHHmm").toFormatter(Locale.ENGLISH);
```

### String -> LocalDate

```java
public static LocalDate stringToLocalDate(String date) {
    return LocalDateTime.parse(time, FORMATTER_yyyyMMdd);
}
```

### String -> LocalTime

```java
public static LocalTime stringToLocalTime(String date) {
    return LocalDateTime.parse(time, FORMATTER_ddMMMyyHHmm);
}
```

### String -> LocalDateTime

```java
public static LocalDateTime stringToLocalDateTime(String date) {
 	return LocalDateTime.parse(time, FORMATTER_ddMMMyyHHmm);
}
```

### LocalDate -> String 

```java
public static String localDateToString(LocalDate localDate) {
    return FORMATTER_yyyyMMdd.format(localDate);
}
```

### LocalTime -> String

```java
public static String localTimeToString(LocalTime localTime) {
    return FORMATTER_yyyyMMdd.format(localTime);
}
```

### LocalDateTime -> String

```java
public static String LocalDateTimeToString(LocalDateTime localDateTime ) {
    return FORMATTER_ddMMMyyHHmm.format(localDateTime);
}
```

