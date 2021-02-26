---
title: IDEA常用快捷键
tags:
 - IDEA
categories:
 - DevTools
date: 2020-05-11
---

**二.选择当前行**

按Home（定位到行首）然后按Shift+Dnd（行尾） 
或者 
按End(定位到行尾)然后按Shift+Home 
或者 
按Home（定位到行首）然后按Shift+↓

## 查找替换

|         快捷键         |             介绍             |
| :--------------------: | :--------------------------: |
|        Ctrl + F        |    在当前文件进行文本查找    |
|        Ctrl + R        |    在当前文件进行文本替换    |
|    Shift + Ctrl + F    |      在项目进行文本查找      |
|    Shift + Ctrl + R    |      在项目进行文本替换      |
|     Shift + Shift      |           快速搜索           |
|        Ctrl + N        |          查找class           |
|    Ctrl + Shift + N    |           查找文件           |
| Ctrl + Shift + Alt + N | 查找symbol（查找某个方法名） |

## 跳转切换

| 快捷键           | 介绍                  |
| :--------------- | :-------------------- |
| Ctrl + E         | 最近文件              |
| Ctrl + Tab       | 切换文件              |
| Ctrl + Alt + ←/→ | 跳转历史光标所在处    |
| Alt + ←/→ 方向键 | 切换子tab             |
| Ctrl + G         | go to（跳转指定行号） |

## 编码相关

|           快捷键            |                             介绍                             |
| :-------------------------: | :----------------------------------------------------------: |
|          Ctrl + W           |                           快速选中                           |
|  (Shift + Ctrl) + Alt + J   |                        快速选中同文本                        |
| Ctrl + C/Ctrl + X/Ctrl + D  |                        快速复制或剪切                        |
| 多行选中 Tab / Shift + Tab  |                             tab                              |
|          Ctrl + Y           |                           删除整行                           |
|    滚轮点击变量/方法/类     |                 快速进入变量/方法/类的定义处                 |
|       Shift + 点击Tab       |                         快速关闭tab                          |
| Ctrl + Z 、Ctrl + Shift + Z |                    后悔药，撤销/取消撤销                     |
|    Ctrl + Shift + enter     |                    自动收尾，代码自动补全                    |
|         Alt + enter         | IntelliJ IDEA 根据光标所在问题，提供快速修复选择，光标放在的位置不同提示的结果也不同 |
|          Alt + ↑/↓          |                         方法快速跳转                         |
|             F2              |               跳转到下一个高亮错误 或 警告位置               |
|        Alt + Insert         | 代码自动生成，如生成对象的 set / get 方法，构造函数，toString() 等 |
|      Ctrl + Shift + L       |                          格式化代码                          |
|         Shift + F6          |            快速修改方法名、变量名、文件名、类名等            |
|          Ctrl + F6          |                       快速修改方法签名                       |

## 代码阅读相关

|           快捷键           |                介绍                |
| :------------------------: | :--------------------------------: |
|          Ctrl + P          |          方法参数提示显示          |
|      Ctrl + Shift + i      | 就可以在当前类里再弹出一个窗口出来 |
|          Alt + F7          |   可以列出变量在哪些地方被使用了   |
| 光标在子类接口名，Ctrl + u |            跳到父类接口            |
|     Alt + F1 + 1， esc     |                                    |
|    (Shift) + Ctrl + +/-    |             代码块折叠             |
|     Ctrl + Shift + ←/→     |           移动窗口分割线           |
|      Ctrl + (Alt) + B      |         跳转方法定义/实现          |
|          Ctrl + H          |            类的层级关系            |
|         Ctrl + F12         |    Show Members 类成员快速显示     |

## 版本管理相关

|    快捷键    |       介绍       |
| :----------: | :--------------: |
|   Ctrl + D   |    Show Diff     |
| (Shift) + F7 | （上）下一处修改 |

`Ctrl + Alt + T`提供的是代码块包裹功能 - Surround With。可以快速将选中的代码块，包裹到选择的语句块中。