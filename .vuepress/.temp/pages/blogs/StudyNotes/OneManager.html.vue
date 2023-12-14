<template><div><p>::: tip</p>
<p>利用heroku搭建免费的OneManager，拉取**<a href="https://github.com/qkqpttgf/OneManager-php" target="_blank" rel="noopener noreferrer">GitHub开源网址</a>**，部署到<code v-pre>heroku</code>，也可以fork到自己仓库，方便自己修改主题什么的，在<code v-pre>heroku</code>链接<code v-pre>github</code>，一个仓库的代码可以支持多个<code v-pre>heroku</code>应用，也就是说可以设置多个<code v-pre>OneDrive账号</code>（个人账号30G，另外单独买了个oneDrive账号），然后可以利用<code v-pre>cloudfare</code>的works功能，自定义域名。</p>
<p>转载自**<a href="https://gyh.im/posts/7386aa8e/#%E5%89%8D%E8%A8%80" target="_blank" rel="noopener noreferrer">元洪博客</a>**，</p>
<p><a href="https://www.2bboy.com/archives/176.html" target="_blank" rel="noopener noreferrer">onemanager拓展性设置参考</a></p>
<p>:::</p>
<!-- more -->
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>onemanager是一款强大的OneDrive目录列表程序，支持的功能比OneIndex更多。支持无服务器一键搭建，支持腾讯SCF服务搭建，基本上能用的搭建方式都支持，而且支持OneDrive商业版、OneDrive个人版和世纪互联版。支持多盘绑定，支持访客上传文件，图床模式，可以让访客上传文件做为图床使用，非常的方便。</p>
<h3 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h3>
<p>注册</p>
<p>GitHub开源网址：https://github.com/qkqpttgf/OneManager-php</p>
<p>进入到github中，可以看到这个醒目的button，这篇文章正是利用heroku搭建免费的onemanager，不需要其他的服务器和主机。
点击那个按钮，进入注册（需要富强，注册引入了google人机验证），qq邮箱已被屏蔽，推荐使用gmail</p>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(0).png" alt="images"></p>
<h3 id="创建app" tabindex="-1"><a class="header-anchor" href="#创建app" aria-hidden="true">#</a> 创建app</h3>
<ul>
<li>在“App name”填写您的应用名称，“Choose a region”选择一个服务区域选择“United States”。 注意：“App name”填写的应用名称就是您次域名.herokuapp.com的前缀，名称必须以小写字母开头</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(1).png" alt="images"></p>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(2).png" alt="images"></p>
<ul>
<li>点击“Deploy app”部署应用稍等片刻即可完成初始化。再点击“Manager APP”管理应用程序</li>
<li>点击“Setting”设置应用，直接往下拉在“Domains”处可以看到您的次域名（如果您已经填加了信用卡账户已验证，可以绑定自己的域名）点击您的次域名。</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(3).png" alt="images">
<img src="@source/blogs/StudyNotes/images/OneManager/1(4).png" alt="images"></p>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<ul>
<li>单击此处“Click to install the project”安装OneManager-PHP项目</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(5).png" alt="images"></p>
<ul>
<li>点击“新建API Key”获得API，在“API Key”处点击后面的“Reveal”显示您的API Key，复制API Key粘贴至API Key。“Set admin password”设置管理员密码，点击“确认”。</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(6).png" alt="images">
<img src="@source/blogs/StudyNotes/images/OneManager/1(7).png" alt="images"></p>
<ul>
<li>安装完成后登陆➠管理➠设置，添加OneDrive盘。</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(8).png" alt="images">
<img src="@source/blogs/StudyNotes/images/OneManager/1(9).png" alt="images">
<img src="@source/blogs/StudyNotes/images/OneManager/1(10).png" alt="images"></p>
<ul>
<li>选择“MSC:国际版，自己申请应用ID与机密”，点击“申请应用ID与机密”。申请教育版的OneDrive账户即可申请获取ID和钥密，目前普通帐号也已经可以申请获取应用ID和钥密。<strong>我自己申请没有成功，直接点的确认</strong></li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(11).png" alt="images">
<img src="@source/blogs/StudyNotes/images/OneManager/1(12).png" alt="images">
<img src="@source/blogs/StudyNotes/images/OneManager/1(13).png" alt="images"></p>
<ul>
<li>将获取的应用机密和应用ID分别填入client_secret和client_id，点击“确认”。之后就会跳转到下买你的界面</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(14).png" alt="images"></p>
<h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3>
<p><strong>自选cloudflare节点</strong></p>
<p>由于heroku不绑定信用卡，就不能自定义域名。我觉得在heroku上绑卡没必要。所以我利用了cloudflare的workers功能实现了自定义域名。</p>
<p>首先你需要把域名添加进cloudflare，有两种方式，一种是通过dns接入，这种方式完全把域名交给cloudflare了。另一方式是通过cloudflare Partners的方式，这种方式可以不用dns接入。我是用的是<a href="https://cdn.moeelf.com/" target="_blank" rel="noopener noreferrer">萌精灵</a>，详细的cf自选节点方法参见：<a href="https://gyh.im/posts/f019efb0/" target="_blank" rel="noopener noreferrer">cloudflare自选节点</a></p>
<ul>
<li>
<p>进入萌精灵，登录你的cloudflare账号，添加域名。</p>
<p><em><em>注意：萌精灵我添加了域名，发现设置还是要回到cloudfare，最后发现先再自己购买的域名商处添加cloudfare的nameserver，等再cloudfare设置workers完成后，再切换回之前的（我用的是DNSPOD），在dnspod处添加一个cname，指向最终添加works，rout路由生的域名</em>，即可用自定义域名访问</em>*</p>
</li>
<li>
<p>添加好域名后就需要进入<a href="https://www.cloudflare.com/" target="_blank" rel="noopener noreferrer">cloudflare</a>,进入你刚才添加的域名中，找到<code v-pre>workers</code>-&gt;<code v-pre>manager workers</code>，第一次要叫你设置一个域名<code v-pre>你需要设置的前缀（默认为你邮箱前缀）.workers.dev</code></p>
</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(15).png" alt="images"></p>
<ul>
<li>点<code v-pre>create a worker</code></li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(16).png" alt="images"></p>
<ul>
<li>将下面的代码加入左边方框中，注意修改为自己的app名称</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>LispaddEventListener(
    &quot;fetch&quot;,event =&gt; {
        let url=new URL(event.request.url);     
        url.hostname=&quot;应用名称.herokuapp.com&quot;;  
        let request=new Request(url,event.request);    
        event. respondWith(       
            fetch(request)    
        )  
    }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blogs/StudyNotes/images/OneManager/1(17).png" alt="images"></p>
<ul>
<li>完成后返回这里，点击添加<code v-pre>route</code></li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(18).png" alt="images"></p>
<ul>
<li>添加一个<code v-pre>route</code>,格式为<code v-pre>前缀.你的域名/*</code>，比如<code v-pre>pan.gyh.im/*</code>,worker选择你刚才创建的</li>
</ul>
<p><img src="@source/blogs/StudyNotes/images/OneManager/1(20).png" alt="images"></p>
</div></template>


