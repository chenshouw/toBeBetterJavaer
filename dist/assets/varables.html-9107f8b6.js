import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as c,c as u,a as s,d as n,b as t,e as p}from"./app-f5953329.js";const i={},l=p(`<h1 id="_5-5-java可变参数" tabindex="-1"><a class="header-anchor" href="#_5-5-java可变参数" aria-hidden="true">#</a> 5.5 Java可变参数</h1><p>为了让铁粉们能白票到阿里云的服务器，我当了整整两天的客服，真正体验到了什么叫做“为人民群众谋福利”的不易和辛酸。正在我眼睛红肿打算要休息之际，三妹跑过来问：“Java 的可变参数究竟是怎么一回事？”我一下子又清醒了，我爱 Java，我爱传道解惑，也享受三妹的赞许（😂）。</p><p>可变参数是 Java 1.5 的时候引入的功能，它允许方法使用任意多个、类型相同（<code>is-a</code>）的值作为参数。就像下面这样。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> strs<span class="token punctuation">)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态方法 <code>print()</code> 就使用了可变参数，所以 <code>print(&quot;沉&quot;)</code> 可以，<code>print(&quot;沉&quot;, &quot;默&quot;)</code> 也可以，甚至 3 个、 4 个或者更多个字符串都可以作为参数传递给 <code>print()</code> 方法。</p>`,5),k={href:"https://javabetter.cn/pdf/ali-java-shouce.html",target:"_blank",rel:"noopener noreferrer"},r=p(`<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/varables-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>意思就是尽量不要使用可变参数，如果要用的话，可变参数必须要在参数列表的最后一位。既然坑位有限，只能在最后，那么可变参数就只能有一个（悠着点，悠着点）。如果可变参数不在最后一位，IDE 就会提示对应的错误，如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/varables-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可变参数看起来就像是个语法糖，它背后究竟隐藏了什么呢？让我们来一探究竟，在追求真理这条路上我们要执着。</p><p>其实也很简单。<strong>当使用可变参数的时候，实际上是先创建了一个数组，该数组的大小就是可变参数的个数，然后将参数放入数组当中，再将数组传递给被调用的方法</strong>。</p><p>这就是为什么可以使用数组作为参数来调用带有可变参数的方法的根本原因。代码如下所示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;沉&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;默&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;王&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;二&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> strs<span class="token punctuation">)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那如果方法的参数是一个数组，然后像使用可变参数那样去调用方法的时候，能行得通吗？</p><p>“三妹，给你留个思考题：一般什么时候使用可变参数呢？”</p><p>可变参数，可变参数，顾名思义，当一个方法需要处理任意多个相同类型的对象时，就可以定义可变参数。Java 中有一个很好的例子，就是 String 类的 <code>format()</code> 方法，就像下面这样。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;年纪是: %d&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;年纪是: %d 名字是: %s&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>%d</code> 表示将整数格式化为 10 进制整数，<code>%s</code> 表示输出字符串。</p><p>如果不使用可变参数，那需要格式化的参数就必须使用“+”号操作符拼接起来了。麻烦也就惹上身了。</p>`,13),d={href:"https://javabetter.cn/gongju/slf4j.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://javabetter.cn/gongju/log4j.html",target:"_blank",rel:"noopener noreferrer"},m=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Logger</span> logger <span class="token operator">=</span> <span class="token class-name">LoggerFactory</span><span class="token punctuation">.</span><span class="token function">getLogger</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;名字是{}&quot;</span><span class="token punctuation">,</span> mem<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;名字是{}，年纪是{}&quot;</span><span class="token punctuation">,</span> mem<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mem<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看源码就可以发现，<code>debug()</code> 方法使用了可变参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">debug</span><span class="token punctuation">(</span><span class="token class-name">String</span> format<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“那在使用可变参数的时候有什么注意事项吗？”三妹问。</p><p>有的。我们要避免重载带有可变参数的方法——这样很容易让编译器陷入自我怀疑中。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> a <span class="token operator">:</span> strs<span class="token punctuation">)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> ints<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> i <span class="token operator">:</span> ints<span class="token punctuation">)</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候，编译器完全不知道该调用哪个 <code>print()</code> 方法，<code>print(String... strs)</code> 还是 <code>print(Integer... ints)</code>，傻傻分不清。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/basic-extra-meal/varables-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>假如真的需要重载带有可变参数的方法，就必须在调用方法的时候给出明确的指示，不要让编译器去猜。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> strs <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Integer</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> ints <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token function">print</span><span class="token punctuation">(</span>ints<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> ints<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段代码是可以编译通过的。因为编译器知道参数是 String 类型还是 Integer 类型，只不过为了运行时不抛出 <code>NullPointerException</code>，两个 <code>print()</code> 方法的内部要做好判空操作。</p><p>“好了，关于可变参数，我们就先讲到这里吧。三妹，你都理解了吧？”</p><p>“嗯嗯，不难，我理解了，哥。”三妹最近的学习状态真不错，能看得出来，她有在认真地做笔记📒。</p><hr>`,14),g={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},b={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),y=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function q(w,h){const a=e("ExternalLinkIcon");return c(),u("div",null,[l,s("p",null,[n("说到可变参数，我想起来"),s("a",k,[n("阿里巴巴开发手册"),t(a)]),n("上有这样一条规约。")]),r,s("p",null,[n("在实际的项目代码中，"),s("a",d,[n("slf4j"),t(a)]),n(" 的日志输出就经常要用到可变参数（"),s("a",v,[n("log4j"),t(a)]),n(" 就没法使用可变参数，日志中需要记录多个参数时就痛苦不堪了）。就像下面这样。")]),m,s("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),s("a",g,[n("二哥的 Java 进阶之路"),t(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",b,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(a)])]),f,y])}const S=o(i,[["render",q],["__file","varables.html.vue"]]);export{S as default};
