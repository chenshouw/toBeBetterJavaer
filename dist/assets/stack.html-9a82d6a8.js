import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as l,a as s,d as n,b as e,e as t}from"./app-f5953329.js";const i={},u=s("h1",{id:"_6-4-栈stack",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_6-4-栈stack","aria-hidden":"true"},"#"),n(" 6.4 栈Stack")],-1),r={href:"https://javabetter.cn/collection/gailan.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>栈（stack），有些地方喜欢称呼它为堆栈，我就很不喜欢，很容易和 heap（堆）搞混，尤其是对于新手来说，简直就是虐心。</p><h3 id="栈数据结构" tabindex="-1"><a class="header-anchor" href="#栈数据结构" aria-hidden="true">#</a> 栈数据结构</h3><p>栈是一种非常有用的数据结构，它就像一摞盘子，第一个放在最下面，第二个放在第一个上面，第三个放在第二个上面，最后一个放在最上面。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231217165356.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于这一摞盘子，我们可以做两件事情：</p><ul><li>在最上面放一个新盘子</li><li>把顶部的盘子拿走</li></ul><p>这两件事情做起来很容易，但如果从中间或者底部抽出来一个盘子，就很难办到。如果我们想要拿到最下面的盘子，就必须把它上面的所有盘子都拿走，像这样的一个操作，我们称之为后进先出，也就是“Last In First Out”（简称 LIFO）——最后的一个进的，最先出去。</p><p>对于栈这样一个数据结构来说，它有两个常见的动作：</p><ul><li>push，中文释义有很多种，我个人更喜欢叫它“压入”，非常形象。当我们要把一个元素放入栈的顶部，这个动作就叫做 push。</li><li>pop，同样的，我个人更喜欢叫它“弹出”，带有很强烈的动画效果，有没有？当我们要从栈中移除一个元素时，这个动作就叫做 pop。</li></ul><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/vm-stack-register-20231217165521.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>对于上面这幅图来说，3 这个元素最后放进去，却是最先被移除的——遵循 LIFO 的原则。</p><p>明白了栈的基本操作后，我们需要去深入地思考一下，栈是如何工作的。换句话说，为了使栈这个数据结构按照栈的方式去工作，它需要什么？</p><p>1）栈需要有一个指针，我们称之为 <code>TOP</code>，用它来指向栈中最顶部的那个元素。</p><p>2）当我们初始化一个栈的时候，我们把 <code>TOP</code> 的值设置为 <code>-1</code>，这样我们就可以通过 <code>TOP == -1</code> 来判断栈是否为空。</p><p>3）当我们要在栈中压入一个元素的时候，我们把 <code>TOP</code> 的值加 1，然后把新压入的元素指向 TOP。</p><p>4）当我们要从栈中弹出一个元素的时候，我们把 <code>TOP</code> 的值减 1，然后把保持在最顶部的那个元素指向 TOP。</p><p>5）当我们压入一个元素的时候，需要检查栈是否已经满了。也就是说，需要有一个 <code>isFull()</code> 的方法来判断。</p><p>6）当我们要弹出一个元素的时候，需要检查栈是否已经空了。也就是说，需要有一个 <code>isEmpty()</code> 的方法来判断。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/stack-20240201142407.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>空栈的时候，TOP 等于 -1；把元素 1 压入栈中的时候，<code>stack[0]</code> 为 1，TOP 加 1 变为 0；把元素 2 压入栈中的时候，<code>stack[1]</code> 为 2，TOP 加 1 变为 1；把元素 3 压入栈中的时候，<code>stack[2]</code> 为 3，TOP 加 1 变为 2；把元素 3 从栈中弹出后，返回元素 <code>stack[2]</code>，TOP 减 1 变为 1。</p><h3 id="自定义栈" tabindex="-1"><a class="header-anchor" href="#自定义栈" aria-hidden="true">#</a> 自定义栈</h3><p>假设栈中的元素是 int 类型，我们可以用 Java 语言来自定义一个最简单的栈。它需要 3 个字段：</p><ul><li><code>int arr[]</code>，一个 int 类型的数组，来存放数据</li><li><code>int top</code>，一个 int 类型的标记</li><li><code>int capacity</code>，一个 int 类型的容量</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span> 
     <span class="token keyword">private</span> <span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
     <span class="token keyword">private</span> <span class="token keyword">int</span> top<span class="token punctuation">;</span> 
     <span class="token keyword">private</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化栈：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token keyword">int</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>size<span class="token punctuation">]</span><span class="token punctuation">;</span> 
     capacity <span class="token operator">=</span> size<span class="token punctuation">;</span> 
     top <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>往栈中压入元素：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;溢出\\n程序终止\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
         <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token punctuation">}</span> 
  
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;压入 &quot;</span> <span class="token operator">+</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span> 
     arr<span class="token punctuation">[</span><span class="token operator">++</span>top<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从栈中弹出元素：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;栈是空的&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
         <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token punctuation">}</span> 
     <span class="token keyword">return</span> arr<span class="token punctuation">[</span>top<span class="token operator">--</span><span class="token punctuation">]</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回栈的大小：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token keyword">return</span> top <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查栈是否为空：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token keyword">return</span> top <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查栈是否已经满了：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Boolean</span> <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token keyword">return</span> top <span class="token operator">==</span> capacity <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来个 <code>main()</code> 方法直接测试下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> top<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token punctuation">}</span> 
 <span class="token punctuation">}</span> 
  
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token class-name">Stack</span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
     stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
     stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n弹出元素后&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
     stack<span class="token punctuation">.</span><span class="token function">printStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>压入 1 
压入 2 
压入 3 
压入 4 

弹出元素后 
1 
2 
3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40),k={href:"https://javabetter.cn/array/array.html",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"push",-1),m=s("code",null,"pop",-1),b={href:"https://javabetter.cn/collection/time-complexity.html",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"O(1)",-1),h=t('<p>尽管栈是一种非常简单的数据结构，通过上面的代码大家应该也能感受得出来，轻而易举地就实现了，但是栈却是一种非常强有力的数据结构，可以在很多场景中使用，比如说：</p><p>1）<strong>反转一串字符</strong>：由于栈是 <code>LIFO</code> 的，所以反转一串字符很容易，按照正常的顺序把字符压入栈中，然后再弹出来就行了。</p><p>2）<strong>用于计算器</strong>：记得我实习的时候，公司就给我们新人安排了我们一个小项目——模仿一个 Win 7 的计算机，用来考察我们是不是真材实料，要想计算一个复杂的表达式，比如说 <code>2 + 5 / 3 * (6 - 2)</code>，就需要一个栈来容纳这些数字和运算符，然后按照优先级弹出后进行计算。</p><p>嗯，这个计算要比想象中复杂一些，新手同学可以私底下实现一下，不仅能够提高对栈这种数据结构的理解，还能对运算符的一个优先级进行思考。</p><p>很显然，栈，给我赢得了一次实习的机会，避免了被刷下去的危机。</p><p>3）<strong>用于浏览器</strong>：浏览器的后退按钮会把我们访问的 URL 压入一个栈中，每次我们访问一个新的页面，新的 URL 就压入了栈的顶部，当我们点了后退按钮，最新的那个 URL 就从栈中移除，之前的那个 URL 就被访问到了。</p><p>好了，下课，今天的栈就到此为止吧。</p><h3 id="stack-类" tabindex="-1"><a class="header-anchor" href="#stack-类" aria-hidden="true">#</a> Stack 类</h3>',8),y=s("code",null,"java.util.Stack",-1),f=s("code",null,"Vector",-1),_={href:"https://javabetter.cn/string/builder-buffer.html",target:"_blank",rel:"noopener noreferrer"},w=t(`<p>先来个简单的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王二&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;沉默王三&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;一个文章真特么有趣的程序员&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stack<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Stack 类并不复杂，仅有几个重要的方法，比如说 <code>push</code>、<code>pop</code>、<code>peek</code>、<code>empty</code>、<code>search</code> 等等。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/stack-20240201143317.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们来看一下 <code>push</code> 方法的源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">E</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token function">addElement</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
     <span class="token keyword">return</span> item<span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),j=s("code",null,"push",-1),x={href:"https://javabetter.cn/thread/synchronized-1.html",target:"_blank",rel:"noopener noreferrer"},S=s("code",null,"Vector",-1),E=s("code",null,"addElement",-1),O=s("code",null,"synchronized",-1),z=t(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">addElement</span><span class="token punctuation">(</span><span class="token class-name">E</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     modCount<span class="token operator">++</span><span class="token punctuation">;</span> 
     <span class="token function">ensureCapacityHelper</span><span class="token punctuation">(</span>elementCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     elementData<span class="token punctuation">[</span>elementCount<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再来看一下 <code>pop</code> 方法的源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">E</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
     <span class="token class-name">E</span> obj<span class="token punctuation">;</span> 
     <span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
     obj <span class="token operator">=</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
     <span class="token function">removeElementAt</span><span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  
     <span class="token keyword">return</span> obj<span class="token punctuation">;</span> 
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法添加了 <code>synchronized</code> 关键字，并且先调用 <code>peek</code> 方法获取到栈顶元素：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">E</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span>     len <span class="token operator">=</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">EmptyStackException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">elementAt</span><span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着调用 Vector 类的 <code>removeElementAt</code> 方法移除栈顶元素。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/stack-20240201144113.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>注意该方法如果移除的不是栈顶元素，还会调用 <code>System.arraycopy</code> 进行数组的拷贝，因为栈的底层是由数组实现的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Vector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
    <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elementData<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> elementCount<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> capacityIncrement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>栈是一种非常有用的数据结构，它的特点是后进先出，可以用来反转一串字符、实现计算器、浏览器的后退按钮等等。</p>`,11),q={href:"https://javabetter.cn/collection/arraydeque.html",target:"_blank",rel:"noopener noreferrer"},P=s("p",null,"如果想通过 LeetCode 进行练习的话，可以尝试一下这道题：",-1),L={href:"https://paicoding.com/column/7/20",target:"_blank",rel:"noopener noreferrer"},T=s("hr",null,null,-1),J={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},I={href:"https://javabetter.cn/overview/",target:"_blank",rel:"noopener noreferrer"},V=s("p",null,[n("微信搜 "),s("strong",null,"沉默王二"),n(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),s("strong",null,"222"),n(" 即可免费领取。")],-1),B=s("figure",null,[s("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function C(F,A){const a=c("ExternalLinkIcon");return o(),l("div",null,[u,s("p",null,[n("讲真，Stack 这个类在 Java 应用中并不常用，但栈这个数据结构在整个计算机体系中却十分重要。所以我们还是放到"),s("a",r,[n("集合框架"),e(a)]),n("里来讲一讲。")]),d,s("p",null,[n("由于我们是通过"),s("a",k,[n("数组"),e(a)]),n("来实现的栈，所以 "),v,n(" 和 "),m,n(" 的"),s("a",b,[n("时间复杂度"),e(a)]),n("就是 "),g,n("。")]),h,s("p",null,[n("其实 Java 已经帮我们实现了一个栈，就是 "),y,n("，它继承自 "),f,n("，是线程安全的，有点 "),s("a",_,[n("StringBuffer"),e(a)]),n(" 的感觉，笨笨的。")]),w,s("p",null,[j,n(" 方法虽然没有 "),s("a",x,[n("synchronized"),e(a)]),n(" 关键字，但调用了 "),S,n(" 类的 "),E,n(" 方法，该方法上添加了 "),O,n(" 关键字。")]),z,s("p",null,[n("虽然 Stack 类并不常用，但栈这个数据结构却很重要。在 Java 中，推荐使用 ArrayDeque 来代替 Stack，因为 "),s("a",q,[n("ArrayDeque"),e(a)]),n(" 是非线程安全的，性能更好。")]),P,s("p",null,[s("a",L,[n("有效的括号"),e(a)]),n("，我把题解放到了技术派上，大家可以参考。")]),T,s("p",null,[n("GitHub 上标星 10000+ 的开源知识库《"),s("a",J,[n("二哥的 Java 进阶之路"),e(a)]),n("》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，500+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),s("a",I,[n("太赞了，GitHub 上标星 10000+ 的 Java 教程"),e(a)])]),V,B])}const R=p(i,[["render",C],["__file","stack.html.vue"]]);export{R as default};
