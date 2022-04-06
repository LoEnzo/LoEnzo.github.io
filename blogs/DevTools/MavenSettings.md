---
title: Maven Settings配置详解
tags:
 - Maven
categories:
 - DevTools
date: 2020-06-22
---

::: tip
maven Settings配置详解，各参数解释，[转载自](https://segmentfault.com/a/1190000020534274)

:::

<!-- more -->

本文使用的maven版本为3.5.4

### 配置

首先maven setting可以被声明为两个级别：

**用户级别**。默认在`${user.home}/.m2/settings.xml`。可以通过命令行`-s /path/to/user/settings.xml`修改。
**全局级别**。默认在`${maven.conf}/settings.xml`。可以通过命令行`-gs /path/to/global/settings.xml`修改。
下面对配置中的每一个元素进行说明。

#### **localRepository**

本地仓库地址，默认值`${user.home}/.m2/repository`。

如果复制了别人的setting，也要注意下这个值和原来的是否相同，不然又要重下一遍。

##### **interactiveMode**

是否需要和用户输入进行交互。如果为false，则会使用合理的默认值。默认为true。

这个配置没怎么使用过，可以通过创建工程的命令对比下：如果为false，命令如下

```bash
mvn archetype:generate -DgroupId=com.zworks -DartifactId=maven-setting -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```


需要指定groupId、artifactId、archetypeArtifactId，如果不指定会报错，因为这些是无法推测出值的。

如果为true，命令如下

```xml
mvn archetype:generate
```


后面会让你选择或输入`archetype`、`groupId`、`artifactId`、`version`、`package`、为false的时候之所以不用指定`version`和`package`是因为这两个都有默认值。

##### **offline**

是否使用离线模式，默认值为false，这个应该不会设置成true的，要用通过命令行-o指定就可以了。

#### **pluginGroups**

如果plugin没有指定groupId，会从设置的这些里查找。默认会有`org.apache.maven.plugins`和`org.codehaus.mojo`。

比如，有了如下配置

```xml
<pluginGroups>
    <pluginGroup>
        org.mortbay.jetty
    </pluginGroup>
</pluginGroups>
```


就可以通过`mvn jetty run`替代长命令`mvn org.mortbay.jetty:jetty-maven-plugin:run`

#### **proxies**

代理配置，可以配置多个，如果没有指定会使用第一个激活的配置。

可配置的属性

|     元素      |  类型   |          描述          |
| :-----------: | :-----: | :--------------------: |
|    active     | boolean |  是否激活，默认为true  |
|   protocol    | String  | 代理的协议，默认为http |
|   username    | String  |         用户名         |
|   password    | String  |          密码          |
|     port      |   int   |    端口号，默认8080    |
|     host      | String  |          host          |
| nonProxyHosts | String  | 不代理的host，用\|分隔 |
|      id       | String  |   id，默认为default    |

#### **servers**

用于认证，支持两种方式

* 密码
* privateKey
  比如公司搭建了一个私服，上传和下载需要认证，就需要在这里配置。

| 元素                 | 类型   | 描述                                                   |
| -------------------- | ------ | ------------------------------------------------------ |
| username             | String | 用户名                                                 |
| password             | String | 密码，与username一起使用                               |
| privateKey           | String | privateKey路径                                         |
| passphrase           | String | 和privateKey一起使用                                   |
| filePermissions      | String | 新创建的文件权限                                       |
| directoryPermissions | String | 新创建的文件夹的权限                                   |
| configuration        | DOM    | 配置                                                   |
| id                   | String | id，默认default，id需要与repository/mirror中的id相对应 |

使用密码

```xml
<server>
    <id>deploymentRepo</id>
    <username>repouser</username>
    <password>repopwd</password>
</server>
```

使用privateKey

```xml
<server>
    <id>siteServer</id>
    <privateKey>/path/to/private/key</privateKey>
    <passphrase>optional; leave empty if not used.</passphrase>
</server>
```

#### **mirrors**

仓库的镜像，如果仓库配置了镜像，就会去镜像中下载。

| 元素            | 类型   | 描述                                       |
| --------------- | ------ | ------------------------------------------ |
| mirrorOf        | String | 镜像的仓库id，也就是说是那个仓库的镜像     |
| name            | String | 镜像的名字                                 |
| url             | String | 地址                                       |
| layout          | String | layout，默认default                        |
| mirrorOfLayouts | String | 镜像的仓库的layout，默认值为default,legacy |
| id              | String | id，默认default                            |

##### **mirrorOf**

- `*`匹配所有的仓库
- `external:*`匹配所有远程仓库，使用localhost的除外，使用file://协议的除外。也就是说，匹配所有不在本机上的远程仓库。
- 多个仓库可以使用英文逗号分隔
- 使用感叹号排除指定的仓库

举例：

`repo,repo1`匹配repo 或者 repo1

`*,!repo1`匹配除了repo1的所有

在匹配的时候，会先找精确匹配的，如果没有用第一个匹配的。

#### **layout**

layout在Maven 2/3中都是default，只有在Maven 1.x中才是legacy，所以也不太用管。

legacy的目录结构

```xml
  groupId
  |--artifactId
     |--jars
        `--artifact
```


default的目录结构

```xml
  groupId
  |--artifactId
     |--version
     |  `---artifact
     |---metadata
```

配置国内镜像

```xml
<mirror>
    <id>alimaven</id>
    <name>aliyun maven</name>
    <url>https://maven.aliyun.com/repository/central</url>
    <mirrorOf>central</mirrorOf>
</mirror>
```

#### **profiles**

setting中的profile主要为了提供本地的路径以及定义构建中要使用到的仓库。

##### **profile in setting VS profile in pom**

setting中的profile一般存放的是不太会变且不会影响构建过程的元素，对全局都影响。

pom中的profile有更多的设置项，但是影响范围只有自身以及子模块。

##### **profile的激活方式**

- 通过setting中的activeProfiles指定。
- 检测操作系统信息是否匹配。
- 检查环境变量是否匹配。
- 检测文件是否存在。
- 检测JDK版本是否匹配。
- 通过命令行`-P`指定。

| 元素               | 类型             | 描述           |
| ------------------ | ---------------- | -------------- |
| activation         | Activation       | 激活的条件     |
| properties         | Properties       | 配置           |
| repositories       | List< Repository> | 远程仓库       |
| pluginRepositories | List< Repository> | 远程插件仓库   |
| id                 | String           | Id,默认default |

#### **activation**

profile的激活条件，满足条件则激活。

| 元素            | 类型               | 描述                      |
| --------------- | ------------------ | ------------------------- |
| activeByDefault | boolean            | 是否默认激活              |
| jdk             | String             | 如果JDK版本匹配则激活     |
| os              | ActivationOS       | 如果操作系统匹配则激活    |
| property        | ActivationProperty | 如果系统属性匹配则激活    |
| file            | ActivationFile     | 如果文件存在/不存在则激活 |

#### **jdk**

- 前缀匹配，比如1.8能匹配jdk1.8.0_181
- [1.5,1.8)能匹配1.5、1.6、1.7，语法具体可以参看[Version Range Specification](https://maven.apache.org/enforcer/enforcer-rules/versionRanges.html)

##### **ActivationOS**

| 元素    | 类型   | 描述                       |
| ------- | ------ | -------------------------- |
| name    | String | 系统的名称                 |
| family  | String | 系统的系列，如windows、mac |
| arch    | String | Cpu的架构                  |
| version | String | 系统版本                   |

##### **ActivationProperty**

| 元素  | 类型   | 描述         |
| ----- | ------ | ------------ |
| name  | String | 系统属性名称 |
| value | String | 系统属性值   |

##### **ActivationFile**

| 元素    | 类型   | 描述                           |
| ------- | ------ | ------------------------------ |
| missing | String | 文件名称，当该文件不存在时激活 |
| exists  | String | 文件名称，当该文件存在时激活   |

##### **repository**

这里是经常需要修改的地方，公司里一般都有自己的私服，就需要把相应的仓库加进来。就是因为仓库没配置，才会有一些包下不下来。

| 元素      | 类型             | 描述                  |
| --------- | ---------------- | --------------------- |
| releases  | RepositoryPolicy | 如何下载releases      |
| snapshots | RepositoryPolicy | 如何下载snapshots     |
| id        | String           | 仓库的唯一标示        |
| name      | String           | 仓库的名称            |
| url       | String           | 仓库的地址            |
| layout    | String           | layout，默认值default |

##### **RepositoryPolicy**

| 元素           | 类型    | 描述                                                         |
| -------------- | ------- | ------------------------------------------------------------ |
| enabled        | boolean | 是否启用该仓库去下载这个类型的artifact                       |
| updatePolicy   | String  | 更新的频率，可选值always（总是）、daily（每天，默认值）、interval:XXX（间隔多少分钟）、never（从不） |
| checksumPolicy | String  | 如果校验失败该如何做，可选值fail、warn                       |

##### **pluginRepository**

插件仓库，配置的值和repository是一样的。

#### **activeProfiles**

激活的配置，可以配置多个。

```xml
<activeProfiles>
    <activeProfile>alwaysActiveProfile</activeProfile>
    <activeProfile>anotherAlwaysActiveProfile</activeProfile>
</activeProfiles>
```

## 参考

- [maven setting 官方文档](http://maven.apache.org/ref/3.5.4/maven-settings/settings.html)
- [Maven Create Java Project – Interactive vs Non-interactive modes](https://howtodoinjava.com/maven/create-java-project-maven/)
- [Maven settings.xml配置解读](https://www.cnblogs.com/question-sky/p/6538909.html)
- [Deploy an artifact in legacy layout](https://maven.apache.org/plugins/maven-deploy-plugin/examples/deploying-in-legacy-layout.html)
- [Using Mirrors for Repositories](https://maven.apache.org/guides/mini/guide-mirror-settings.html)
- [Introduction to Build Profiles](https://maven.apache.org/guides/introduction/introduction-to-profiles.html)