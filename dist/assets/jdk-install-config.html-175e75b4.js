import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as c,c as d,a as e,d as a,b as n,e as i}from"./app-f5953329.js";const l={},s=i('<h1 id="_2-2-安装-jdk" tabindex="-1"><a class="header-anchor" href="#_2-2-安装-jdk" aria-hidden="true">#</a> 2.2 安装 JDK</h1><p>因为 Java 程序必须运行在 JVM 之上，所以我们 Java 程序员在学习 Java 之前，要做的第一件事情就是安装 JDK。</p><p>什么？</p><p>又是 JVM 又是 JDK 的，能不能讲清楚一点。</p><p>要扯清楚这两者之间的关系，就必须得再扯出另外一个名词 JRE，哈哈哈。</p><p>它们之间的关系可以用这幅图来表示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-6f6fdb4a-7a44-4e76-b4ea-71c070a5b220.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>真的是人生无常，大肠包小肠啊。</p><h3 id="_01、jvm、jre、jdk-有什么关系" tabindex="-1"><a class="header-anchor" href="#_01、jvm、jre、jdk-有什么关系" aria-hidden="true">#</a> 01、JVM、JRE、JDK 有什么关系</h3><p>JDK（Java Development Kit）是用于开发 Java 应用程序的软件环境。里面包含运行时环境（JRE）和其他 Java 开发所需的工具，比如说解释器（java）、编译器（javac）、文档生成器（javadoc）等等。</p><p>JRE（Java Runtime Environment）是用于运行 Java 应用程序的软件环境。也就是说，如果只想运行 Java 程序而不需要开发 Java 程序的话，只需要安装 JRE 就可以了。</p><p>JVM (Java Virtual Machine) ，也就是 Java 虚拟机，由一套字节码指令集、一组寄存器、一个栈、一个垃圾回收堆和一个存储方法域等组成，屏蔽了不同操作系统（macOS、Windows、Linux）的差异性，使得 Java 能够“一次编译，到处运行”。</p><p>比如说我用 macOS 生成了一个 jar 包（里面是打包好的字节码——可以在 Java 虚拟机上运行的目标代码），可以丢给 Windows 用户直接运行，也可以直接上传到 Linux 服务器运行。</p><p>这是 Oracle 官方给出的 JDK、JRE、JVM 关系图。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-cbc87f87-6351-4356-936b-77850cc682d5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那针对不同的操作系统，官方也提供了不同的 JDK 安装包。</p><p>如果你用百度去搜，嗯。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-31e739ff-b69f-47b6-9db4-8843cd8a716a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>总之，是把官方给吃了。</p>',19),g={href:"https://javabetter.cn/nice-article/itmind/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},b=i('<p>好，如果你想安装 JDK ，到官方下载。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-e5b91a70-2a23-4ebd-896a-5ff19f0075b1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>最新版是 JDK 18（短期版本），上一个长期支持版本是 JDK 17，推荐安装 JDK 8，哈哈哈哈，它升任它升，我用 Java 8。往下翻就能找到了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a32db267-febe-4852-b528-deaacb43247d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据你的操作系统下载对应的安装包，分 Windows（exe 后缀）和 macOS（dmg 后缀）。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jdk-install-config-20230408164612.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下载后双击安装，然后配置环境变量就 OK 了。</p><h3 id="_02、windows-安装-jdk" tabindex="-1"><a class="header-anchor" href="#_02、windows-安装-jdk" aria-hidden="true">#</a> 02、Windows 安装 JDK</h3><p>安装步骤就省略了，傻瓜式下一步就好。这里只说一下环境变量的配置，在电脑桌面右键点击 “此电脑”的“属性”选项。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a0a78e05-886f-425a-8ba9-d27314f7a21c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择“高级系统设置”选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-fdc94ada-ae44-4a93-ba0d-92860119ad9c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击下面的“环境变量”选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-919eb8f0-9869-450c-a6cb-50318dd3e2e5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>点击“系统变量”下面的”新建“选项</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-a4c05c3e-f305-4d6a-96d2-fe345e980c3b.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在”变量名“处填上”Java_Home“，”变量值“为 JDK 安装路径，比如说”<code>D:\\Program Files\\Java\\jdk1.8.0_91</code>“</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/overview/jdk-install-config-26be5706-036d-4fae-99fa-d5f14b7380d4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',18),v={href:"https://www.cnblogs.com/cnwutianhao/p/5487758.html",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"再说一种高级点的安装方法。",-1),u={href:"https://javabetter.cn/gongju/choco.html",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,[a("安装完成后，直接执行 "),e("code",null,"choco install jdk8"),a(" 就可以安装 JDK 8 了，并且会自动将 Java 加入到环境变量中，不用再去「我的电脑」「环境变量」中新建 JAVA_HOME 并复制 JDK 安装路径配置 PATH 变量了")],-1),h=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/choco-80a6ced8-c25d-4371-8096-b95be48af768",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),j=e("h3",{id:"_03、macos-安装-jdk",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_03、macos-安装-jdk","aria-hidden":"true"},"#"),a(" 03、macOS 安装 JDK")],-1),J={href:"https://javabetter.cn/gongju/brew.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,[a("安装完成后，直接执行 "),e("code",null,"brew install openjdk@8"),a(" 就可以安装 JDK 8 了。")],-1),x={href:"https://www.jenv.be/",target:"_blank",rel:"noopener noreferrer"},w=i(`<p>安装：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install jenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 zsh 中配置 jenv：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export PATH=&quot;$HOME/.jenv/bin:$PATH&quot;
eval &quot;$(jenv init -)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code>vim ~/.zshrc</code> 把以上内容添加到配置文件中并保存（source 下可以立即生效）</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jdk-install-config-20230408165518.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>之后通过以下方式添加 JDK 到 jenv 中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv add /usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>JDK 的安装路径可以通过两种方法 get 到。</p><p>一般情况下，JDK 的默认安装路径为 <code>/Library/Java/JavaVirtualMachines/</code>，进入该目录就可以看到。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jdk-install-config-20230408173945.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>还可以通过以下命令获取当前安装的 JDK 路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/libexec/java_home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jdk-install-config-20230408174048.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>添加 JDK 的路径后可以通过 <code>jenv versions</code> 查看所有添加到 jenv 进行管理的 JDK 版本。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/jdk-install-config-20230408174158.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>带 <code>*</code> 的表示当前默认的 JDK 版本。</p><p>可以通过 <code>jenv global xxx</code> 切换全局的 JDK 版本。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jenv global 17
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/brew-cc01fad8-53e9-4474-8923-08e97ac7090a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>是不是贼方便？再也不用整这 <code>echo &#39;export PATH=&quot;/usr/local/opt/openjdk@17/bin:$PATH&quot;&#39; &gt;&gt; ~/.zshrc</code> 玩意添加 JDK 到 PATH 环境变量了！</p><p>想用哪个 JDK 版本可以随时切换。</p><p>爽，实在是爽！</p><hr>`,24),k={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},D={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),a(" 即可免费领取。")],-1),y=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function z(O,H){const t=r("ExternalLinkIcon");return c(),d("div",null,[s,e("p",null,[a("如果你用"),e("a",g,[a("谷歌"),n(t)]),a("去搜“JDK”关键字，能搜到官方的下载链接。")]),e("blockquote",null,[e("p",null,[e("a",p,[a("https://www.oracle.com/java/technologies/downloads/"),n(t)])])]),b,e("p",null,[a("参考链接："),e("a",v,[a("https://www.cnblogs.com/cnwutianhao/p/5487758.html"),n(t)])]),f,e("p",null,[a("Windows 用户建议先安装 "),e("a",u,[a("Chocolatey"),n(t)]),a("，这是一个 Windows 下的命令行软件管理器，可以方便开发者像在 Linux 下使用 yum 命令来安装软件，或者像在 macOS 下使用 brew 命令来安装软件，非常酷炫。")]),m,h,j,e("p",null,[a("macOS 用户建议先安装 "),e("a",J,[a("Homebrew"),n(t)]),a("，这是一个 macOS 下的命令行软件管理器，可以通过一行命令安装 Apple（或 Linux 系统）没有预装但你需要的软件。")]),_,e("p",null,[a("如果需要在 macOS 安装多个版本的 JDK ，比如说 JDK 17，多个版本的 JDK 怎么管理呢？可以安装一下 "),e("a",x,[a("jEnv"),n(t)]),a("，一个帮助我们管理 JAVA_HOME 的命令行工具，在 GitHub 上已经收获 4.3k 的 star。")]),w,e("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),e("a",k,[a("二哥的 Java 进阶之路"),n(t)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),e("a",D,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),n(t)])]),K,y])}const A=o(l,[["render",z],["__file","jdk-install-config.html.vue"]]);export{A as default};
