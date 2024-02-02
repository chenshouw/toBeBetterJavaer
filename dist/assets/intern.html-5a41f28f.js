import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,a as n,d as a,b as t,e as r}from"./app-f5953329.js";const l={},c=n("h1",{id:"_4-7-string-intern详解",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-7-string-intern详解","aria-hidden":"true"},"#"),a(" 4.7 String.intern详解")],-1),u=n("p",null,"“哥，你发给我的那篇文章我看了，结果直接把我给看得不想学 Java 了！”三妹气冲冲地说。",-1),d=n("p",null,"“哪一篇啊？”看着三妹面色沉重，我关心地问到。",-1),g={href:"https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"String.intern()",-1),v=n("p",null,"“哦，我想起来了，不挺好一篇文章嘛，深入浅出，精品中的精品，看完后你应该对 String 的 intern 方法彻底理解了才对呀。”",-1),m=n("p",null,"“好是好，但我就是看不懂！”三妹委屈地说，“哥，还是你亲自给我讲讲吧？”",-1),_={href:"https://javabetter.cn/string/constant-pool.html",target:"_blank",rel:"noopener noreferrer"},h=r(`<p>“嗯。”三妹微微的点了点头。</p><p>要理解美团技术团队的这篇文章，你只需要记住这几点内容：</p><p>第一，使用双引号声明的字符串对象会保存在字符串常量池中。</p><p>第二，使用 new 关键字创建的字符串对象会先从字符串常量池中找，如果没找到就创建一个，然后再在堆中创建字符串对象；如果找到了，就直接在堆中创建字符串对象。</p><p>第三，针对没有使用双引号声明的字符串对象来说，就像下面代码中的 s1 那样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;三妹&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想把 s1 的内容也放入字符串常量池的话，可以调用 <code>intern()</code> 方法来完成。</p><p>不过，需要注意的是，Java 7 的时候，字符串常量池从永久代中移动到了堆中，虽然此时永久代还没有完全被移除。Java 8 的时候，永久代被彻底移除。</p><p>这个变化也直接影响了 <code>String.intern()</code> 方法在执行时的策略，Java 7 之前，执行 <code>String.intern()</code> 方法的时候，不管对象在堆中是否已经创建，字符串常量池中仍然会创建一个内容完全相同的新对象； Java 7 之后呢，由于字符串常量池放在了堆中，执行 <code>String.intern()</code> 方法的时候，如果对象在堆中已经创建了，字符串常量池中就不需要再创建新的对象了，而是直接保存堆中对象的引用，也就节省了一部分的内存空间。</p><p>“还没有理解清楚，二哥”，三妹很苦恼。</p><p>“嗯。。。别怕，三妹，先来猜猜这段代码输出的结果吧。”我说。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥三妹&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“哥，这我完全猜不出啊，还是你直接解释吧。”三妹说。</p><p>“好吧。”</p><p>第一行代码，字符串常量池中会先创建一个“二哥三妹”的对象，然后堆中会再创建一个“二哥三妹”的对象，s1 引用的是堆中的对象。</p><p>第二行代码，对 s1 执行 <code>intern()</code> 方法，该方法会从字符串常量池中查找“二哥三妹”这个字符串是否存在，此时是存在的，所以 s2 引用的是字符串常量池中的对象。</p><p>也就意味着 s1 和 s2 的引用地址是不同的，一个来自堆，一个来自字符串常量池，所以输出的结果为 false。</p><p>“来看一下运行结果。”我说。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“我来画幅图，帮助你理解下。”看到三妹惊讶的表情，我耐心地说。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/intern-01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“这下理解了吧？”我问三妹。</p><p>“嗯嗯，一下子就豁然开朗了！”三妹说。</p><p>“好，我们再来看下面这段代码。”</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;二哥&quot;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;三妹&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>“难道也输出 false ？”三妹有点不确定。</p><p>“不，这段代码会输出 true。”我否定了三妹的猜测。</p><p>“为啥呀？”三妹迫切地想要知道答案。</p><p>第一行代码，会在字符串常量池中创建两个对象，一个是“二哥”，一个是“三妹”，然后在堆中会创建两个匿名对象“二哥”和“三妹”，最后还有一个“二哥三妹”的对象（稍后会解释），s1 引用的是堆中“二哥三妹”这个对象。</p><p>第二行代码，对 s1 执行 <code>intern()</code> 方法，该方法会从字符串常量池中查找“二哥三妹”这个对象是否存在，此时不存在的，但堆中已经存在了，所以字符串常量池中保存的是堆中这个“二哥三妹”对象的引用，也就是说，s2 和 s1 的引用地址是相同的，所以输出的结果为 true。</p><p>“来看一下运行结果。”我胸有成竹地说。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>“我再来画幅图，帮助你理解下。”</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/string/intern-02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>“哇，我明白了！”三妹长舒一口气，大有感慨 intern 也没什么难理解的意味，“不过，我有一个疑惑，“二哥三妹”这个对象是什么时候创建的呢？”</p><p>“三妹，不错嘛，能抓住问题的关键。再来解释一下 <code>String s1 = new String(&quot;二哥&quot;) + new String(&quot;三妹&quot;)</code> 这行代码。”我对三妹的表现非常开心。</p><ol><li>创建 &quot;二哥&quot; 字符串对象，存储在字符串常量池中。</li><li>创建 &quot;三妹&quot; 字符串对象，存储在字符串常量池中。</li><li>执行 <code>new String(&quot;二哥&quot;)</code>，在堆上创建一个字符串对象，内容为 &quot;二哥&quot;。</li><li>执行 <code>new String(&quot;三妹&quot;)</code>，在堆上创建一个字符串对象，内容为 &quot;三妹&quot;。</li><li>执行 <code>new String(&quot;二哥&quot;) + new String(&quot;三妹&quot;)</code>，会创建一个 StringBuilder 对象，并将 &quot;二哥&quot; 和 &quot;三妹&quot; 追加到其中，然后调用 StringBuilder 对象的 toString() 方法，将其转换为一个新的字符串对象，内容为 &quot;二哥三妹&quot;。这个新的字符串对象存储在堆上。</li></ol><p>也就是说，当编译器遇到 <code>+</code> 号这个操作符的时候，会将 <code>new String(&quot;二哥&quot;) + new String(&quot;三妹&quot;)</code> 这行代码编译为以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new StringBuilder().append(&quot;二哥&quot;).append(&quot;三妹&quot;).toString();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实际执行过程如下：</p><ul><li>创建一个 StringBuilder 对象。</li><li>在 StringBuilder 对象上调用 append(&quot;二哥&quot;)，将 &quot;二哥&quot; 追加到 StringBuilder 中。</li><li>在 StringBuilder 对象上调用 append(&quot;三妹&quot;)，将 &quot;三妹&quot; 追加到 StringBuilder 中。</li><li>在 StringBuilder 对象上调用 toString() 方法，将 StringBuilder 转换为一个新的字符串对象，内容为 &quot;二哥三妹&quot;。</li></ul>`,41),q={href:"https://javabetter.cn/string/builder-buffer.html",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"不过需要注意的是，尽管 intern 可以确保所有具有相同内容的字符串共享相同的内存空间，但也不要烂用 intern，因为任何的缓存池都是有大小限制的，不能无缘无故就占用了相对稀缺的缓存空间，导致其他字符串没有坑位可占。",-1),S=n("p",null,"另外，字符串常量池本质上是一个固定大小的 StringTable，如果放进去的字符串过多，就会造成严重的哈希冲突，从而导致链表变长，链表变长也就意味着字符串常量池的性能会大幅下降，因为要一个一个找是需要花费时间的。",-1),f=n("p",null,"“好了，三妹，关于 String 的 intern 就讲到这吧，这次理解了吧？”我问。",-1),x=n("p",null,"“哥，你真棒！”",-1),w=n("p",null,"看到三妹一点一滴的进步，我也感到由衷的开心。",-1),j=n("hr",null,null,-1),B={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},J={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[a("微信搜 "),n("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),a(" 即可免费领取。")],-1),N=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function V(z,I){const s=o("ExternalLinkIcon");return p(),i("div",null,[c,u,d,n("p",null,[a("“就是"),n("a",g,[a("美团技术团队深入解析 "),k,a(" 那篇"),t(s)]),a("啊！”三妹回答。")]),v,m,n("p",null,[a("“好吧，上次学的"),n("a",_,[a("字符串常量池"),t(s)]),a("你都搞清楚了吧？”")]),h,n("p",null,[a("关于 "),n("a",q,[a("StringBuilder"),t(s)]),a("，我们随后会详细地讲到。今天先了解到这。")]),b,S,f,x,w,j,n("p",null,[a("GitHub 上标星 10000+ 的开源知识库《"),n("a",B,[a("二哥的 Java 进阶之路"),t(s)]),a("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",J,[a("太赞了，GitHub 上标星 10000+ 的 Java 教程"),t(s)])]),y,N])}const G=e(l,[["render",V],["__file","intern.html.vue"]]);export{G as default};
