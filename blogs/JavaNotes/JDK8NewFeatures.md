---
title: JDK8新特性学习
tags:
 - JDK8
categories:
 - JavaNotes
date: 2020-05-15
---

::: tip
JDK8新特性，Optional，stream流的相关处理，Function等

[参考1](https://www.wmyskxz.com/2020/08/19/java8-ban-ben-te-xing-xiang-jie/)，[参考2](https://www.jianshu.com/p/bc2dd34cc37c)

:::
<!-- more -->



## 一、Stream

Stream可以对多个元素进行一系列的操作，也可以支持对某些操作进行并发处理。

### 1.1 常用方法列表

Stream对象提供多个非常有用的方法，这些方法可以分成两类： 
中间操作：将原始的Stream转换成另外一个Stream；如filter返回的是过滤后的Stream。 
终端操作：产生的是一个结果或者其它的复合操作；如count或者forEach操作。

* 中间操作

| 方法                            | 说明                                                         |
| ------------------------------- | ------------------------------------------------------------ |
| sequential                      | 返回一个相等的串行的Stream对象，如果原Stream对象已经是串行就可能会返回原对象 |
| parallel                        | 返回一个相等的并行的Stream对象，如果原Stream对象已经是并行的就会返回原对象 |
| unordered                       | 返回一个不关心顺序的Stream对象，如果原对象已经是这类型的对象就会返回原对象 |
| onClose                         | 返回一个相等的Steam对象，同时新的Stream对象在执行Close方法时会调用传入的Runnable对象 |
| close                           | 关闭Stream对象                                               |
| [filter](#二、Stream对象的使用) | 元素过滤：对Stream对象按指定的Predicate进行过滤，返回的Stream对象中仅包含未被过滤的元素 |
| map                             | 元素一对一转换：使用传入的Function对象对Stream中的所有元素进行处理，返回的Stream对象中的元素为原元素处理后的结果 |
| mapToInt                        | 元素一对一转换：将原Stream中的使用传入的IntFunction加工后返回一个IntStream对象 |
| flatMap                         | 元素一对多转换：对原Stream中的所有元素进行操作，每个元素会有一个或者多个结果，然后将返回的所有元素组合成一个统一的Stream并返回； |
| sorted                          | 排序：返回排序后的Stream对象                                 |
| peek                            | 使用传入的Consumer对象对所有元素进行消费后，返回一个新的包含所有原来元素的Stream对象 |
| limit                           | 获取有限个元素组成新的Stream对象返回                         |
| skip                            | 抛弃前指定个元素后使用剩下的元素组成新的Stream返回           |
| takeWhile                       | 如果Stream是有序的（Ordered），那么返回最长命中序列（符合传入的Predicate的最长命中序列）组成的Stream；如果是无序的，那么返回的是所有符合传入的Predicate的元素序列组成的Stream。 |
| dropWhile                       | 与takeWhile相反，如果是有序的，返回除最长命中序列外的所有元素组成的Stream；如果是无序的，返回所有未命中的元素组成的Stream。 |
| distinct                        | 去重：返回一个去重后的Stream对象                             |

* 终端操作

| 方法           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| iterator       | 返回Stream中所有对象的迭代器;                                |
| spliterator    | 返回对所有对象进行的spliterator对象                          |
| forEach        | 对所有元素进行迭代处理，无返回值                             |
| forEachOrdered | 按Stream的Encounter所决定的序列进行迭代处理，无返回值        |
| toArray        | 返回所有元素的数组                                           |
| collect        | 根据传入参数做相关汇聚计算                                   |
| anyMatch       | 只要其中有一个元素满足传入的Predicate时返回True，否则返回False |
| allMatch       | 所有元素均满足传入的Predicate时返回True，否则False           |
| noneMatch      | 所有元素均不满足传入的Predicate时返回True，否则False         |
| collect        | 根据传入参数做相关汇聚计算                                   |
| min            | 返回所有元素中最小值的Optional对象；如果Stream中无任何元素，那么返回的Optional对象为Empty |
| max            | 与Min相反                                                    |
| count          | 所有元素个数                                                 |
| findFirst      | 返回第一个元素的Optioanl对象；如果无元素返回的是空的Optional； 如果Stream是无序的，那么任何元素都可能被返回。 |
| findAny        | 返回任意一个元素的Optional对象，如果无元素返回的是空的Optioanl。 |
| reduce         | 使用一个初始化的值，与Stream中的元素一一做传入的二合运算后返回最终的值。每一个元素做运算后的结果，再与下一个元素做运算。它不保证会按序列执行整个过程。 |

### 1.2 创建Steam对象

```java
public static void main(String[] args) {

    // 创建空的stream
    Stream stream = Stream.empty();

    // 通过集合类中的stream或者parallelStream方法创建
    List<String> list = Arrays.asList("a", "b", "c", "d");
    // 获取串行的Stream对象
    Stream listStream = list.stream();
    // 获取并行的Stream对象
    Stream parallelListStream = list.parallelStream();
    parallelListStream.forEach(out::println);
    // 按顺序输出
    parallelListStream.forEachOrdered(out::println);

    // 通过Stream中的of方法创建
    Stream s = Stream.of("test");
    Stream s1 = Stream.of("a", "b", "c", "d");

    // concat方法将两个Stream连接在一起，合成一个Stream。
    // 若两个输入的Stream都是串行的，则新Stream也是串行的；
    // 若输入的Stream中任何一个是并行的，则新的Stream也是并行的
    Stream.concat(Stream.of(1, 2, 3), Stream.of(4, 5))
        .forEach(integer -> System.out.print(integer + "  "));// 1  2  3  4  5
}
```

### 1.3 filter

```java
public static void main(String[] args) {
    List<String> list = Arrays.asList("abc", "", "bc", "efg", "abcd", "", "jkl");

    List<String> stringList = list.stream().filter(string -> !string.isEmpty()).collect(Collectors.toList());
    System.out.println("去除空字符串的集合为：" + Arrays.toString(stringList.toArray()));

    long count = list.stream().filter(String::isEmpty).count();
    System.out.println("集合种空字符串个数为：" + count);
    System.out.println("并行处理流：" + list.parallelStream().filter(String::isEmpty).count());
}
去除空字符串的集合为：[abc, bc, efg, abcd, jkl]
集合种空字符串个数为：2
并行处理流：2
```

### 1.4 map

```java
public static void main(String[] args) {
    Stream<String> stream = Stream.of("test", "t1", "t2", "teeeee", "aaaa");
    stream.map(n -> n.concat(".txt")).forEach(System.out::println);

    List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
    // 获取对应的平方数
    List<Integer> list = numbers.stream().map(i -> i * i).distinct().collect(Collectors.toList());
    System.out.println("map映射集合结果：" + Arrays.toString(list.toArray()));
}
test.txt
t1.txt
t2.txt
teeeee.txt
aaaa.txt
map映射集合结果：[9, 4, 49, 25]
```

### 1.5 flatMap

```java
public static void main(String[] args) {
    Stream<String> s = Stream.of("test", "t1", "t2", "teeeee", "aaaa");
    s.flatMap(n -> Stream.of(n.split(""))).forEach(System.out::println);
}
t
e
s ...
```

### 1.6 reduce

```java
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
        // 规约,第一个是初始值
        int sum = numbers.stream().reduce(0, Integer::sum);
        // 或者详细的逻辑操作，上面是 加法规约的简写
        int sum = numbers.stream().reduce(0, (x,y) -> x+y);
        System.out.println("reduce结果：" + sum);
    }
```

### 1.7 IntSummaryStatistics

```java
public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);
    // 获取Int类型 numbers集合的统计信息 （其他类型同理）
    IntSummaryStatistics stats = numbers.stream().mapToInt((x) -> x).summaryStatistics();

    System.out.println("最大的数 : " + stats.getMax());
    System.out.println("最小的数 : " + stats.getMin());
    System.out.println("所有数之和 : " + stats.getSum());
    System.out.println("平均数：" + String.format("%.2f", stats.getAverage()));
}
最大的数 : 7
最小的数 : 2
所有数之和 : 25
平均数：3.57
```

## 二、Optional

用于简化Java中对空值的判断处理，以防止出现各种空指针异常。 
Optional实际上是对一个变量进行封装，它包含有一个属性value，实际上就是这个变量的值。

### 2.1 常用方法列表

| 方法名          | 说明                                                         |
| --------------- | ------------------------------------------------------------ |
| get             | 获取Value的值，如果Value值是空值，则会抛出`NoSuchElementException`异常；因此返回的Value值无需再做空值判断，只要没有抛出异常，都会是非空值。 |
| isPresent       | Value是否为空值的判断；                                      |
| ifPresent       | 当Value不为空时，执行传入的Consumer；                        |
| ifPresentOrElse | Value不为空时，执行传入的Consumer；否则执行传入的Runnable对象； |
| filter          | 当Value为空或者传入的Predicate对象调用test(value)返回False时，返回Empty对象；否则返回当前的Optional对象 |
| map             | 一对一转换：当Value为空时返回Empty对象，否则返回传入的Function执行apply(value)后的结果组装的Optional对象； |
| flatMap         | 一对多转换：当Value为空时返回Empty对象，否则传入的Function执行apply(value)后返回的结果（其返回结果直接是Optional对象） |
| or              | 如果Value不为空，则返回当前的Optional对象；否则，返回传入的Supplier生成的Optional对象； |
| stream          | 如果Value为空，返回Stream对象的Empty值；否则返回`Stream.of(value)`的Stream对象； |
| orElse          | Value不为空则返回Value，否则返回传入的值；                   |
| orElseGet       | Value不为空则返回Value，否则返回传入的Supplier生成的值；     |
| orElseThrow     | Value不为空则返回Value，否则抛出Supplier中生成的异常对象；   |

### 2.2 创建Optional对象

```java
public static void main(String[] args){
    // 创建空对象
    Optional o = Optional.empty();
    // 创建非空对象
    o = Optional.of("test"); 
    // 创建对象，传入值可为空
    Optional<String> s = Optional.ofNullable(test());
}
```

### 2.3 ofNullable

判空

```java
// 以前写法
String s = test();
if (null != s) {
    System.out.println(s);
}

// 现在
Optional<String> optional = Optional.ofNullable(test());
optionnal.ifPresent(System.out:println)
```

### 2.4 orElse

判空设默认值

```java
// 以前写法
if (null == s) {
    s = "test";
}
System.out.println(s);

// 现在
Optional<String> o = Optional.ofNullable(s);
System.out.println(o.orElse("test"));
```

### 2.5 orElseThrow

变量为空时抛出异常

```java
// 以前写法
if (null == s) {
    throw new Exception("test");
}
System.out.println(s);

// 现在
Optional<String> o = Optional.ofNullable(s);
System.out.println(o.orElseThrow(()->new Exception("test")));
```

## 三、时间格式化

### 3.1 常用方法列表

| 方法名                                         | 说明                                                         |
| ---------------------------------------------- | ------------------------------------------------------------ |
| **with**（TemporalAdjusters ）                 | 返回LocalDate \| LocalDateTime 指定字段更改为新值后的拷贝    |
| withDayOfYear( )                               | 返回本年的具体某天 1-365                                     |
| withDayOfMonth( )                              | 返回本月的具体某天 1-31                                      |
| withYear( )                                    | 返回指定年份的当前时间                                       |
| withMoth( )                                    | 返回指定月份的当前时间                                       |
| **TemporalAdjusters**                          | 时间调节器                                                   |
| firstDayOfYear( )   firstDayOfMonth( )         | 返回本年 / 本月的第一天                                      |
| lastDayOfYear( )    lastDayOfMonth( )          | 返回本年 / 本月的最后一天                                    |
| firstDayOfNextYear( )   firstDayOfNextMonth( ) | 返回下一年 / 下月 的第一天                                   |
| **firstInMonth**（DayOfWeek）                  | 返回本月的具体周几                                           |
| firstInMonth( DayOfyWeek.MONDAY)               | 返回本月的第一个周几                                         |
| toLocalDate ( )                                | 返回LocalDateTime的 LocalDate 部分                           |
| toLocalTime ( )                                | 返回LocalDateTime的 LocalTime 部分                           |
| toString  ( )                                  | 返回LocalDateTime的字符串表示                                |
| getDayOfYear( )                                | 返回LocalDateTime是年的第几天                                |
| **get( )**                                     | 返回LocalDateTime的指定字段的值                              |
| getDayOfMonth( )                               | 返回LocalDateTime是月的第几天                                |
| getDayOfWeek( )                                | 返回LocalDateTime是周的第几天                                |
| getYear( )                                     | 返回LocalDateTime的年                                        |
| getMonth( )                                    | 返回LocalDateTime的月，英文，JANARAY                         |
| getMonthValue( )                               | 返回LocalDateTime的月                                        |
| getHour( )                                     | 返回LocalDateTime的时                                        |
| getMinute( )                                   | 返回LocalDateTime的分                                        |
| getSecond( )                                   | 返回LocalDateTime的秒                                        |
| isAfter( )                                     | 是否在指定时间之后                                           |
| isBefore( )                                    | 是否在指定时间之前                                           |
| isEqual ( )                                    | 判断两个时间是否相等                                         |
| isLeepYear( )                                  | 判断是否是闰年                                               |
| unit ( locatDateTime, ChronoUnit.Day)          | 返回两个时间差的年数、月数、周数、天数、小时数、分钟数、秒数 |

### 3.2 自定义格式化时间

## 四、Function

### 4.1 常用方法

| 函数接口           | 参数   | 返回类型 | 描述                                                       |
| ------------------ | ------ | -------- | ---------------------------------------------------------- |
| Predicate< T>      | T      | boolean  | 判断某一个对象是否满足条件                                 |
| Consumer< T>       | T      | void     | 接收一个对象进行处理，不返回结果                           |
| Function<T, R>     | T      | R        | 将一个对象T转换为另一个对象R，对象类型可以相同，也可以不同 |
| Supplier< T>       | None   | T        | 提供一个对象，无需传入参数                                 |
| UnaryOperator< T>  | T      | T        | 一元运算符操作，接收对象并返回同类型的对象                 |
| BinaryOperator< T> | (T, T) | T        | 二元操作符，接收两个同类型的对象，并返回一个原类型对象     |

### 4.2 Predicate

#### 4.2.1 方法

```java
// 返回true 或 false
boolean test(T t);

// 与操作，既满足A操作又满足B操作
default Predicate< T> and(Predicate<? super T> other){
     return (t) -> !test(t);
}

// 这个是取反操作
default Predicate< T> negate(){
    Objects.requireNonNull(other);
    return (t) -> test(t) && other.test(t);
}

// 或操作，满足A操作或满足B操作
default Predicate< T> or(Predicate<? super T> other){
    Objects.requireNonNull(other);
    return (t) -> test(t) || other.test(t);
}

// 静态方法，判断是否相等
static < T> Predicate< T> isEqual(Object targetRef){
    return (null == targetRef) ? Objects::isNull : object -> targetRef.equals(object);
}
```

#### 4.2.2 事例

```java
Predicate<Integer> greaterThan = input -> input > 10;
Predicate<Integer> lessThan = input -> input < 20;

// 满足条件，返回true
boolean test = greaterThan.test(11);

// 与操作，返回true
test = greaterThan.and(lessThan).test(15);
// 取反操作，返回false
test = greaterThan.negate().test(15);
// 或操作，返回true
test = greaterThan.or(lessThan).test(15);
// 两个值不同，返回false
test = Predicate.isEqual(15).test(20);
```

### 4.3 Fuction

#### 4.3.1 方法

```java
// 将Function对象应用到输入的参数上，然后返回计算结果
R apply(T t);

// 整合两个Function对象，先执行当前的Function对象，再执行调用的Function对象
default <V> Function<V, R> compose(Function<? super V, ? extends T> before){
    Objects.requireNonNull(before);
    return (V v) -> apply(before.apply(v));
}

// 整合两个Function对象，先执行调用的Function对象，再执行当前的Function对象
default <V> Function<T, V> andThen(Function<? super R, ? extends V> after){
    Objects.requireNonNull(after);
    return (T t) -> after.apply(apply(t));
}

//返回执行了apply方法之后的 输入参数的函数对象
static < T> Function<T, T> identity(){
    return t -> t;
} 
```

#### 4.3.2 事例

 ```java
Function<Integer, Long> add =  input -> input.longValue() * 2;
Function<Long, Integer> square = input -> input.intValue() + 2;

// 将参数运用到add条件上  3*2
long output = add.apply(3);
// 先获取add条件结果，再作为参数进入square条件（3*2）+2
output = add.andThen(square).apply(3);
// 先进行compose条件，然后作为参数进行add条件 （3+2）*2
Long value2 = add.compose(square).apply(3L);
 ```

### 4.4 Consumer

#### 4.4.1 方法

```java
// 将Function对象应用到输入的参数上
void accept(T t);

// 整个两个Consumer，先执行调用的Consumer，再执行当前的Consumer
default Consumer< T> andThen(Consumer<? super T> after){
    Objects.requireNonNull(after);
    return (T t) -> {
        accept(t);
        after.accept(t);
    };
}
```

#### 4.4.2 事例

```java
/**
* Consumer对象表示接收单个输入参数进行处理，并且没有返回值的操作，
* Consumer接口期望执行带有副作用的操作，也就是Consumer的操作可能会更改输入参数的内部状态。
*/
Consumer f = System.out::println;
Consumer f2 = n -> System.out.println(n + "+test1");

//执行完F后再执行F2的Accept方法
f.accept("test");
f.andThen(f2).accept("test");

//连续执行F的Accept方法
f.andThen(f).andThen(f).andThen(f).accept("test");
```

### 4.5 Supplier

#### 4.5.1 方法 事例 

```csharp
Supplier<Person> supplier = () -> new Person("beijing", "wang", 30);
Person person = supplier.get();
System.out.println(person);
```

## 五，其他

### map循环

* 循环 key,value

```java
map.forEach((k,v) -> {
    doSomthing();
})
```

* 循环 key,value (entrySet)，适合大容量

```java
may.entrySet().forEach( entry -> {
    System.out.println( entry.getKey() );
    System.out.println( entry.getValue() )
})
```

* 循环  key,value ，使用 iterator

```java
may.entrySet().iterator().forEachRemaining( iter -> {
    System.out.println( iter.getKey() );
    System.out.println( iter.getValue() )
})
```

* 循环map中的value

```java
map.values().forEach(System.out::println);
```

* 循环map中的key

```java
may.keySet().forEach( key -> {
    System.out.println( key );
    System.out.println( map.getKey(key) )
})
```

### int Integer List互转

```java
int[] data = {4, 5, 3, 6, 2, 5, 1};
        
// int[] 转 List<Integer>
List<Integer> list1 = Arrays.stream(data).boxed().collect(Collectors.toList());
// Arrays.stream(arr) 可以替换成IntStream.of(arr)。
// 1.使用Arrays.stream将int[]转换成IntStream。
// 2.使用IntStream中的boxed()装箱。将IntStream转换成Stream<Integer>。
// 3.使用Stream的collect()，将Stream<T>转换成List<T>，因此正是List<Integer>。

// int[] 转 Integer[]
Integer[] integers1 = Arrays.stream(data).boxed().toArray(Integer[]::new);
// 前两步同上，此时是Stream<Integer>。
// 然后使用Stream的toArray，传入IntFunction<A[]> generator。
// 这样就可以返回Integer数组。
// 不然默认是Object[]。

// List<Integer> 转 Integer[]
Integer[] integers2 = list1.toArray(new Integer[0]);
//  调用toArray。传入参数T[] a。这种用法是目前推荐的。
// List<String>转String[]也同理。

// List<Integer> 转 int[]
int[] arr1 = list1.stream().mapToInt(Integer::valueOf).toArray();
// 想要转换成int[]类型，就得先转成IntStream。
// 这里就通过mapToInt()把Stream<Integer>调用Integer::valueOf来转成IntStream
// 而IntStream中默认toArray()转成int[]。

// Integer[] 转 int[]
int[] arr2 = Arrays.stream(integers1).mapToInt(Integer::valueOf).toArray();
// 思路同上。先将Integer[]转成Stream<Integer>，再转成IntStream。

// Integer[] 转 List<Integer>
List<Integer> list2 = Arrays.asList(integers1);        
```

