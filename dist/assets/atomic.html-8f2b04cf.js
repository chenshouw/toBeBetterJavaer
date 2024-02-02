import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,d as s,b as e,e as t}from"./app-f5953329.js";const i={},u=n("h1",{id:"第二十七节-原子操作类-atomic",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#第二十七节-原子操作类-atomic","aria-hidden":"true"},"#"),s(" 第二十七节：原子操作类 Atomic")],-1),r={href:"https://javabetter.cn/thread/cas.html",target:"_blank",rel:"noopener noreferrer"},d=t(`<p>像递增运算 count++ 就不是一个原子操作，在多线程环境下并不能得到正确的结果，因为 count++ 操作实际上分为三个步骤：</p><ol><li>读取 count 变量的值；</li><li>将 count 变量的值加 1；</li><li>将 count 变量的值写入到内存中；</li></ol><p>假定线程 A 正在修改 count 变量，为了保证线程 B 在使用 count 的时候是线程 A 修改过后的状态，可以用 synchronized 关键字同步一手。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">long</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我寻了半生的春天，你一笑便是了。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但多个线程之间访问 <code>write()</code> 方法是互斥的，线程 B 访问的时候必须要等待线程 A 访问结束，有没有更好的办法呢？</p><p>AtomicInteger 是 JDK 提供的一个原子操作的 Integer 类，它提供的加减操作是线程安全的。于是我们可以这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我寻了半生的春天，你一笑便是了。&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    count<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你看，这下是不是就舒服多了，不用加锁，也能保证线程安全。OK，接下来，我们来看看原子操作类都有哪些？</p><h2 id="原子操作的基本数据类型" tabindex="-1"><a class="header-anchor" href="#原子操作的基本数据类型" aria-hidden="true">#</a> 原子操作的基本数据类型</h2><p>基本类型的原子操作主要有这些：</p><ol><li>AtomicBoolean：以原子更新的方式更新 boolean；</li><li>AtomicInteger：以原子更新的方式更新 Integer;</li><li>AtomicLong：以原子更新的方式更新 Long；</li></ol><p>这几个类的用法基本一致，这里以 AtomicInteger 为例。</p><ol><li><code>addAndGet(int delta)</code> ：增加给定的 delta，并获取新值。</li><li><code>incrementAndGet()</code>：增加 1，并获取新值。</li><li><code>getAndSet(int newValue)</code>：获取当前值，并将新值设置为 newValue。</li><li><code>getAndIncrement()</code>：获取当前值，并增加 1。</li></ol><p>还有一些方法，可以直接查看 API，都很好理解。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/atomic-20230824144636.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>为了能够弄懂 AtomicInteger 的实现原理，以 getAndIncrement 方法为例，来看下源码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用Unsafe类中的getAndAddInt方法原子地增加AtomicInteger的当前值</span>
    <span class="token comment">// 第一个参数this是AtomicInteger的当前实例</span>
    <span class="token comment">// 第二个参数valueOffset是一个偏移量，它指示在AtomicInteger对象中的哪个位置可以找到实际的int值</span>
    <span class="token comment">// 第三个参数1表示要加到当前值上的值（即增加的值）</span>
    <span class="token comment">// 此方法返回的是增加前的原始值</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，该方法实际上是调用了 unsafe 对象的 getAndAddInt 方法，unsafe 对象是通过通过 UnSafe 类的静态方法 getUnsafe 获取的：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),k={href:"https://javabetter.cn/thread/cas.html",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>Unsafe 类是 Java 中的一个特殊类，用于执行低级、不安全的操作。getAndIncrement 方法就是利用了 Unsafe 类提供的 CAS（Compare-And-Swap）操作来实现原子的 increment 操作。CAS 是一种常用的无锁技术，允许在多线程环境中原子地更新值。</p><p>好，下面用一个简单的例子来说明 AtomicInteger 的用法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>AtomicLong 和 AtomicInteger 的实现原理基本一致，只不过一个针对的是 long 型，一个针对的是 int 型。</p><p>AtomicBoolean 类是怎样实现更新的呢？核心方法是<code>compareAndSet</code> 方法，其源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> expect<span class="token punctuation">,</span> <span class="token keyword">boolean</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 将expect布尔值转化为整数，true为1，false为0</span>
    <span class="token keyword">int</span> e <span class="token operator">=</span> expect <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 将update布尔值转化为整数，true为1，false为0</span>
    <span class="token keyword">int</span> u <span class="token operator">=</span> update <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 使用Unsafe类中的compareAndSwapInt方法尝试原子地更新AtomicBoolean的当前值</span>
    <span class="token comment">// 第一个参数this是AtomicBoolean的当前实例</span>
    <span class="token comment">// 第二个参数valueOffset是一个偏移量，它指示在AtomicBoolean对象中的哪个位置可以找到实际的int值</span>
    <span class="token comment">// 第三个参数e是我们期望的当前值（转换为整数后的值）</span>
    <span class="token comment">// 第四个参数u是我们想要更新的值（转换为整数后的值）</span>
    <span class="token comment">// 如果当前值与期望值e相等，它会被原子地设置为u，并返回true；否则返回false。</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> e<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法尝试将当前值从expect设置为update，但这种设置只会在当前值确实为expect时成功。方法返回true表示更新成功，否则返回false。</p><h2 id="原子操作的数组类型" tabindex="-1"><a class="header-anchor" href="#原子操作的数组类型" aria-hidden="true">#</a> 原子操作的数组类型</h2><p>如果需要原子更新数组里的某个元素，atomic 也提供了相应的类：</p><ol><li>AtomicIntegerArray：这个类提供了一些原子更新 int 整数数组的方法。</li><li>AtomicLongArray：这个类提供了一些原子更新 long 型证书数组的方法。</li><li>AtomicReferenceArray：这个类提供了一些原子更新引用类型数组的方法。</li></ol><p>这几个类的用法一致，就以 AtomicIntegerArray 来总结下常用的方法：</p><ol><li><code> addAndGet(int i, int delta)</code>：以原子更新的方式将数组中索引为 i 的元素与输入值相加；</li><li><code>getAndIncrement(int i)</code>：以原子更新的方式将数组中索引为 i 的元素自增加 1；</li><li><code>compareAndSet(int i, int expect, int update)</code>：将数组中索引为 i 的位置的元素进行更新</li></ol><p>可以看出，AtomicIntegerArray 与 AtomicInteger 的方法基本一致，只不过在 AtomicIntegerArray 的方法中会多一个数组索引 i。下面举一个简单的例子：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>
    <span class="token comment">//    private static AtomicInteger atomicInteger = new AtomicInteger(1);</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicIntegerArray</span> integerArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicIntegerArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//对数组中索引为1的位置的元素加5</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> integerArray<span class="token punctuation">.</span><span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>integerArray<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>7
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 getAndAdd 方法将位置为 1 的元素加 5，从结果可以看出索引为 1 的元素变成了 7，该方法返回的也是相加之前的数为 2。</p><h2 id="原子操作的引用类型" tabindex="-1"><a class="header-anchor" href="#原子操作的引用类型" aria-hidden="true">#</a> 原子操作的引用类型</h2><p>如果需要原子更新引用类型的话，atomic 也提供了相关的类：</p><ol><li>AtomicReference：原子更新引用类型；</li><li>AtomicReferenceFieldUpdater：原子更新引用类型里的字段；</li><li>AtomicMarkableReference：原子更新带有标记位的引用类型；</li></ol><p>这几个类的使用方法也是基本一样，以 AtomicReference 为例，来说明这些类的基本用法。下面是一个 demo：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> reference <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        reference<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>user1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> reference<span class="token punctuation">.</span><span class="token function">getAndSet</span><span class="token punctuation">(</span>user2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>reference<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userName <span class="token operator">=</span> userName<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;userName=&#39;&quot;</span> <span class="token operator">+</span> userName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                    <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>User{userName=&#39;a&#39;, age=1}
User{userName=&#39;b&#39;, age=2}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>首先将对象 User1 用 AtomicReference 进行封装，然后调用 getAndSet 方法进行赋值，从结果可以看出，该方法会原子更新 user 对象，变为 <code>User{userName=&#39;b&#39;, age=2}</code>。</p><h2 id="原子更新字段类型" tabindex="-1"><a class="header-anchor" href="#原子更新字段类型" aria-hidden="true">#</a> 原子更新字段类型</h2><p>如果需要更新对象的某个字段，atomic 同样也提供了相应的原子操作类：</p>`,29),v=n("li",null,"AtomicIntegeFieldUpdater：原子更新整型字段类；",-1),b=n("li",null,"AtomicLongFieldUpdater：原子更新长整型字段类；",-1),g={href:"https://javabetter.cn/thread/cas.html#aba%E9%97%AE%E9%A2%98",target:"_blank",rel:"noopener noreferrer"},A=t(`<p>使用原子更新字段需要两步：</p><ol><li>通过静态方法<code>newUpdater</code>创建一个更新器，并且设置想要更新的类和字段；</li><li>字段必须使用<code>public volatile</code>进行修饰；</li></ol><p>以 AtomicIntegerFieldUpdater 为例来看看具体的使用：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AtomicDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">AtomicIntegerFieldUpdater</span> updater <span class="token operator">=</span> <span class="token class-name">AtomicIntegerFieldUpdater</span><span class="token punctuation">.</span><span class="token function">newUpdater</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> oldValue <span class="token operator">=</span> updater<span class="token punctuation">.</span><span class="token function">getAndAdd</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>oldValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>updater<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
        <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>userName <span class="token operator">=</span> userName<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&quot;User{&quot;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;userName=&#39;&quot;</span> <span class="token operator">+</span> userName <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                    <span class="token string">&quot;, age=&quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                    <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从示例中可以看出，创建<code>AtomicIntegerFieldUpdater</code>是通过它提供的静态方法进行创建的，<code>getAndAdd</code>方法会将指定的字段加上输入的值，并返回相加之前的值。user 对象中 age 字段原值为 1，加 5 之后变成了 6。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Java 中的 java.util.concurrent.atomic 包提供了一系列类，这些类支持原子操作（即线程安全而无需同步）在单个变量上，这大大减少了并发编程的复杂性。</p><p>原子操作类主要有这些：</p><ol><li>原子操作的基本数据类型：AtomicBoolean、AtomicInteger、AtomicLong；</li><li>原子操作的数组类型：AtomicIntegerArray、AtomicLongArray、AtomicReferenceArray；</li><li>原子操作的引用类型：AtomicReference、AtomicReferenceFieldUpdater、AtomicMarkableReference；</li></ol>`,11),h={href:"https://github.com/CL0610/Java-concurrency/blob/master/24.Java%E4%B8%ADatomic%E5%8C%85%E4%B8%AD%E7%9A%84%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E7%B1%BB%E6%80%BB%E7%BB%93/Java%E4%B8%ADatomic%E5%8C%85%E4%B8%AD%E7%9A%84%E5%8E%9F%E5%AD%90%E6%93%8D%E4%BD%9C%E7%B1%BB%E6%80%BB%E7%BB%93.md",target:"_blank",rel:"noopener noreferrer"},y={href:"https://mp.weixin.qq.com/s/K5JrXsKVWoJ5JF3P95_P3w",target:"_blank",rel:"noopener noreferrer"},f=n("hr",null,null,-1),w={href:"https://github.com/itwanger/toBeBetterJavaer",target:"_blank",rel:"noopener noreferrer"},_={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://javabetter.cn/thread/",target:"_blank",rel:"noopener noreferrer"},U=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/stutymore/wangzhe-thread-20230904125125.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function j(B,E){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("我们前面讲过 "),n("a",r,[s("CAS"),e(a)]),s("，相信大家都还有印象，Java 中的原子操作类，如 AtomicInteger 和 AtomicLong，底层就是利用 CAS 来确保变量更新的原子性的。")]),d,n("p",null,[s("Unsafe 类我们在讲 "),n("a",k,[s("CAS"),e(a)]),s(" 的时候也讲过，包括 AtomicInteger 类，相信大家还有印象。")]),m,n("ol",null,[v,b,n("li",null,[s("AtomicStampedReference：原子更新引用类型，这种更新方式会带有版本号，是为了解决 "),n("a",g,[s("CAS 的 ABA 问题"),e(a)]),s("，ABA 问题我们前面也讲过。")])]),A,n("blockquote",null,[n("p",null,[s("编辑：沉默王二，编辑前的内容主要来自于CL0610的 GitHub 仓库"),n("a",h,[s("https://github.com/CL0610/Java-concurrency"),e(a)]),s("。推荐阅读："),n("a",y,[s("码农参上的Unsafe类详解"),e(a)])])]),f,n("p",null,[s("GitHub 上标星 10000+ 的开源知识库《"),n("a",w,[s("二哥的 Java 进阶之路"),e(a)]),s("》第二份 PDF 《"),n("a",_,[s("并发编程小册"),e(a)]),s("》终于来了！包括线程的基本概念和使用方法、Java的内存模型、sychronized、volatile、CAS、AQS、ReentrantLock、线程池、并发容器、ThreadLocal、生产者消费者模型等面试和开发必须掌握的内容，共计 15 万余字，200+张手绘图，可以说是通俗易懂、风趣幽默……详情戳："),n("a",I,[s("太赞了，二哥的并发编程进阶之路.pdf"),e(a)])]),n("p",null,[n("a",x,[s("加入二哥的编程星球"),e(a)]),s("，在星球的第二个置顶帖「"),n("a",S,[s("知识图谱"),e(a)]),s("」里就可以获取 PDF 版本。")]),U])}const D=p(i,[["render",j],["__file","atomic.html.vue"]]);export{D as default};
