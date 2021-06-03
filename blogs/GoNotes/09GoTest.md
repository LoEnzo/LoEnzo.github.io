---
title: Go测试
tags:
 - go
 - gotext
categories: 
 - GoNotes
date: 2021-05-21
---

::: tip 
:::

# go test工具

go test用于编译单元测试，检测方法函数是否有问题，熟悉下相关参数，可以让测试过程更新快捷

*  直接运行编译整个项目的测试文件

  ```go
  go test
  ```

* 测试单个测试文件，被测文件和对应单元测试成对出现，顺序可调换

  ```go
  go test math.go math_test.go
  ```

* 查看详细结果

  ```go
  go test -v
  ```

* 只测试某个函数，或者某几个函数，-run支持正则，如只测试 TestAddMore，TestAddMoreAndMore

  ```go
  go test -v -run="TestAddMore"
  ```

* 生成test的二进制文件，加 -c 参数

  ```go
  go test -c 
  ```

* 执行这个text测试文件，加 -o 参数

  ```go
  go test -v -o math.test.exe
  ```

* 查看覆盖率，加 -cover 参数

  ```go
  go test -v -cover math.go math_test.go
  ```

  

# go单元测试

创建一个`math.go`，写一个add的Func函数，如下

```go
package main

func Add(x, y int) int {
	return x + y
}
```

同级建立一个`math_test.go`的测试文件

```go
package Test

import "testing"

type TestTable struct {
	xArg int
	yArg int
}

// 简单测试，单元测试
func TestAdd(t *testing.T) {
	t.Log(Add(1, 2))
}

// 少量样例测试，表组测试
func TestAddMore(t *testing.T) {
	sum := Add(1, 2)
	if sum == 3 {
		t.Log("the result is ok")
	} else {
		t.Fatal("the result is wrong")
	}

	sum = Add(2, 4)
	if sum == 6 {
		t.Log("the result is ok")
	} else {
		t.Fatal("the result is wrong")
	}
}

// 大量测试样例，表格测试法
func TestAddMoreAndMore(t *testing.T) {
	tables := []TestTable{
		{1, 2},
		{2, 4},
		{4, 8},
		{5, 10},
		{6, 12},
	}

	for _, table := range tables {
		result := Add(table.xArg, table.yArg)
		if result == (table.xArg + table.yArg) {
			t.Log("the result is ok")
		} else {
			t.Fatal("the result is wrong")
		}
	}
}
// === RUN   TestAdd
// math_test.go:12: 3
// --- PASS: TestAdd (0.00s)
// === RUN   TestAddMore
// math_test.go:19: the result is ok
// math_test.go:26: the result is ok
// --- PASS: TestAddMore (0.00s)
// === RUN   TestAddMoreAndMore
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// math_test.go:45: the result is ok
// --- PASS: TestAddMoreAndMore (0.00s)
// PASS
```

## go单元测试编写原则

* 单元测试以`_test.go`结尾，最好就是 `被测试文件_test.go`，
* 单元测试函数名必须以 `Test`开口，如`TestAdd`
* 单元测试函数接口一个指向 `testing.T` 类型的指针，而且不返回任何值

# go mock工具

[参考](https://geektutu.com/post/quick-gomock.html)，未尝试

# 练习源码

[Test](https://gitee.com/myMagicRain/go-study/tree/master/src/Test)



