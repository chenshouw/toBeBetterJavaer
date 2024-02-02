import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as n,d as a,b as t,e}from"./app-f5953329.js";const i={},u=n("h1",{id:"_12-7-java为什么无法实现真正的泛型",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_12-7-java为什么无法实现真正的泛型","aria-hidden":"true"},"#"),a(" 12.7 Java为什么无法实现真正的泛型")],-1),r=n("p",null,"“二哥，为啥 Java 不能实现真正的泛型啊？”三妹开门见山地问。",-1),d={href:"https://javabetter.cn/basic-extra-meal/generic.html",target:"_blank",rel:"noopener noreferrer"},k=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cmower</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Arraylist&lt;String&gt; list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Date</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Arraylist&lt;Date&gt; list&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“三妹，你是不是认为 <code>ArrayList&lt;String&gt; list</code> 和 <code>ArrayList&lt;Date&gt; list</code> 是两种不同的类型，因为 String 和 Date 是不同的类。”我问。</p><p>“嗯。”三妹点点头。</p><p>但由于类型擦除的原因，以上代码是不会编译通过的——编译器会提示一个错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&#39;method(ArrayList&lt;String&gt;)&#39; clashes with &#39;method(ArrayList&lt;Date&gt;)&#39;; both methods have same erasure
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也就是说，两个 <code>method()</code> 方法经过类型擦除后的方法签名是完全相同的，Java 是不允许这样做的。</p><p>也就是说，按照我们的假设：如果 Java 能够实现真正意义上的泛型，两个 <code>method()</code> 方法是可以同时存在的，就好像方法重载一样。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cmower</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">Date</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“为什么 Java 不能实现真正意义上的泛型呢？背后的原因是什么？快告诉我呀！”三妹着急了。</p><p>“保持耐心，好不好？”我安慰道。</p><p><strong>第一，兼容性</strong></p><p>Java 在 2004 年已经积累了较为丰富的生态，如果把现有的类修改为泛型类，需要让所有的用户重新修改源代码并且编译，这就会导致 Java 1.4 之前打下的江山可能会完全覆灭。</p><p>想象一下，你的代码原来运行的好好的，就因为 JDK 的升级，导致所有的源代码都无法编译通过并且无法运行，是不是会非常痛苦？</p><p>类型擦除就完美实现了兼容性，Java 1.5 之后的类可以使用泛型，而 Java 1.4 之前没有使用泛型的类也可以保留，并且不用做任何修改就能在新版本的 Java 虚拟机上运行。</p><p>老用户不受影响，新用户可以自由地选择使用泛型，可谓一举两得。</p><p><strong>第二，不是“实现不了”</strong>。Pizza，1996 年的实验语言，在 Java 的基础上扩展了泛型。</p>`,16),v={href:"http://pizzacompiler.sourceforge.net/doc/tutorial.html",target:"_blank",rel:"noopener noreferrer"},m=e(`<p>“1996 年？”三妹表示很吃惊。</p><p>“嗯，你那会还没出生。”我说，“插一下 Java 的版本历史吧，你好有一个时间线上的观念。”</p><ul><li>1995年5月23日，Java语言诞生</li><li>1996年1月，JDK1.0 诞生</li><li>1997年2月18日，JDK1.1发布</li><li>1998年2月，JDK1.1被下载超过2,000,000次</li><li>2000年5月8日，JDK1.3发布</li><li>2000年5月29日，JDK1.4发布</li><li>2004年9月30日18:00 PM，J2SE1.5 发布</li></ul><p>也就是说，Pizza 在 JDK 1.0 的版本上就实现了“真正意义上的”泛型，我引过来两段例子，你一看就明白了。</p><p>首先是 StoreSomething，一个泛型类，标识符是大写字母 A 而不是我们熟悉的大写字母 T。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">StoreSomething</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">A</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
     <span class="token class-name">A</span> something<span class="token punctuation">;</span>

     <span class="token class-name">StoreSomething</span><span class="token punctuation">(</span><span class="token class-name">A</span> something<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>something <span class="token operator">=</span> something<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">A</span> something<span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">this</span><span class="token punctuation">.</span>something <span class="token operator">=</span> something<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

     <span class="token class-name">A</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> something<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个 A 呢，可以是任何合法的 Java 类型：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">StoreSomething</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StoreSomething</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m a string!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StoreSomething</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StoreSomething</span><span class="token punctuation">(</span><span class="token number">17</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

b<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> i <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对吧？这就是我们想要的“真正意义上的泛型”，A 不仅仅可以是引用类型 String，还可以是基本数据类型。要知道，Java 的泛型不允许是基本数据类型，只能是包装器类型。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/generic/true-generic-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>除此之外，Pizza 的泛型还可以直接使用 <code>new</code> 关键字进行声明，并且 Pizza 编译器会从构造方法的参数上推断出具体的对象类型，究竟是 String 还是 int。要知道，Java 的泛型因为类型擦除的原因，程序员是无法知道一个 ArrayList 究竟是 <code>ArrayList&lt;String&gt;</code> 还是 <code>ArrayList&lt;Integer&gt;</code> 的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>ints<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>strs<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class java.util.ArrayList
class java.util.ArrayList
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>都是 ArrayList 而已。</p><p>“那 Pizza 这种“真正意义上的泛型”为什么没有被 Java 采纳呢？”三妹很关心这个问题。</p><p>事实上，Java 的核心开发组对 Pizza 的泛型设计非常感兴趣，并且与 Pizza 的设计者 Martin 和 Phil 取得了联系，新合作了一个项目 Generic Java，争取在 Java 中添加泛型支持，但不引入 Pizza 的其他功能，比如说函数式编程。</p><p><em>这里再补充一点维基百科上的资料，Martin Odersky 是一名德国计算机科学家，他和其他人一起设计了 Scala 编程语言，以及 Generic Java（还有之前的 Pizza），他实现的 Generic Java 编译器成为了 Java 编译器 javac 的基础。</em></p><p>站在马后炮的思维来看，Pizza 的泛型设计和函数式编程非常具有历史前瞻性。然而 Java 的核心开发组在当时似乎并不想把函数式编程引入到 Java 中。</p><p>以至于 Java 在 1.4 之前仍然是不支持泛型的。</p><p>“为什么 Java 1.5 的时候又突然支持泛型了呢？”三妹问。</p><p>“当然是到了不支持不行的时候了。”我说。</p><p>没有泛型之前，我们可以这样写代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不管是 String 类型，还是 Date 类型，都可以一股脑塞进 ArrayList 当中，这看起来似乎很方便，但取的时候就悲剧了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样取行吗？不行。还得加上强制转换。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> list<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但我们知道，这行代码在运行的时候必然会出错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Exception in thread &quot;main&quot; java.lang.ClassCastException: java.util.Date cannot be cast to java.lang.String
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这就又回到“兼容性”的问题了。</p><p>Java 语言和其他编程语言不一样，有着沉重的历史包袱，1.5 之前已经有大量的程序部署在生产环境下了，这时候如果一刀切，原来没有使用泛型的代码直接扼杀了，后果不堪想象。</p><p>Java 一直以来都强调兼容性，我认为这也是 Java 之所以能被广泛使用的主要原因之一，开发者不必担心 Java 版本升级的问题，一个在 JDK 1.4 上可以跑的代码，放在 JDK 1.5 上仍然可以跑。</p><p>这里必须得说明一点，J2SE1.5 的发布，是 Java 语言发展史上的重要里程碑，为了表示该版本的重要性，J2SE1.5 也正式更名为 Java SE 5.0，往后去就是 Java SE 6.0，Java SE 7.0。。。。</p><p>但 Java 并不支持高版本 JDK 编译生成的字节码文件在低版本的 JRE（Java 运行时环境）上跑。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/generic/true-generic-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>针对泛型，兼容性具体表现在什么地方呢？来看下面这段代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ints <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ArrayList</span> list<span class="token punctuation">;</span>
list <span class="token operator">=</span> ints<span class="token punctuation">;</span>
list <span class="token operator">=</span> strs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“兼容性表现在上面这段代码必须得能够编译运行。怎么办呢？”我扭头看了一下旁边的三妹，继续说。</p><p>“只能搞类型擦除了！”我妹肯定地回答。</p><p>“是滴。”</p><p>编译前进行泛型检测，<code>ArrayList&lt;Integer&gt;</code> 只能放 Integer，<code>ArrayList&lt;String&gt;</code> 只能放 String，取的时候就不用担心类型强转出错了。</p><p>但编译后的字节码文件里，是没有泛型的，放的都是 Object。</p><p>Java 神奇就神奇在这，表面上万物皆对象，但为了性能上的考量，又存在 int、double 这种原始类型，但原始类型又没办法和 Object 兼容，于是我们就只能写 <code>ArrayList&lt;Integer&gt;</code> 这样很占用内存空间的代码。</p><p>这恐怕也是 Java 泛型被吐槽的原因之一了。</p><p>一个好消息是 Valhalla 项目正在努力解决这些因为泛型擦除带来的历史遗留问题。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/generic/true-generic-03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Project Valhalla：正在进行当中的 OpenJDK 项目，计划给未来的 Java 添加改进的泛型支持。</p>`,48),g={href:"http://openjdk.java.net/projects/valhalla/",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"让我们拭目以待吧！",-1),h=n("p",null,"“怎么样？三妹，这下全部都明白了吧！”我问。",-1),y=n("p",null,"“嗯嗯。二哥，你讲得可真棒👍”三妹夸奖得我有点小开心，嘿嘿。",-1),J=n("hr",null,null,-1),f={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},j={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),a(" 即可免费领取。")],-1),S=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function w(A,x){const s=c("ExternalLinkIcon");return o(),l("div",null,[u,r,n("p",null,[a("简单来回顾一下"),n("a",d,[a("类型擦除"),t(s)]),a("，看下面这段代码。")]),k,n("blockquote",null,[n("p",null,[a("Pizza 教程地址："),n("a",v,[a("http://pizzacompiler.sourceforge.net/doc/tutorial.html"),t(s)])])]),m,n("blockquote",null,[n("p",null,[a("源码地址："),n("a",g,[a("http://openjdk.java.net/projects/valhalla/"),t(s)])])]),b,h,y,J,n("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),n("a",f,[a("二哥的 Java 进阶之路"),t(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",j,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(s)])]),_,S])}const D=p(i,[["render",w],["__file","true-generic.html.vue"]]);export{D as default};
