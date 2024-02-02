import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-f5953329.js";const e={},p=t(`<h3 id="_01、前世今生" tabindex="-1"><a class="header-anchor" href="#_01、前世今生" aria-hidden="true">#</a> 01、前世今生</h3><p>你好呀，我是 JUnit，一个开源的 Java 单元测试框架。在了解我之前，先来了解一下什么是单元测试。单元测试，就是针对最小的功能单元编写测试代码。在 Java 中，最小的功能单元就是方法，因此，对 Java 程序员进行单元测试实际上就是对 Java 方法的测试。</p><p>为什么要进行单元测试呢？因为单元测试可以确保你编写的代码是符合软件需求和遵循开发规范的。单元测试是所有测试中最底层的一类测试，是第一个环节，也是最重要的一个环节，是唯一一次能够达到代码覆盖率 100% 的测试，是整个软件测试过程的基础和前提。可以这么说，单元测试的性价比是最好的。</p><p>微软公司之前有这样一个统计：bug 在单元测试阶段被发现的平均耗时是 3.25 小时，如果遗漏到系统测试则需要 11.5 个小时。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-5b0afb32-c60e-4218-98b1-44288705e472.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>经我这么一说，你应该已经很清楚单元测试的重要性了。那在你最初编写测试代码的时候，是不是经常这么做？就像下面这样。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factorial</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">fact</span><span class="token punctuation">(</span><span class="token keyword">long</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            r <span class="token operator">=</span> r <span class="token operator">*</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;通过&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要测试 <code>fact()</code> 方法正确性，你在 <code>main()</code> 方法中编写了一段测试代码。如果你这么做过的话，我只能说你也曾经青涩天真过啊！使用 <code>main()</code> 方法来测试有很多坏处，比如说：</p><p>1）测试代码没有和源代码分开。</p><p>2）不够灵活，很难编写一组通用的测试代码。</p><p>3）无法自动打印出预期和实际的结果，没办法比对。</p><p>但如果学会使用我——JUnit 的话，就不会再有这种困扰了。我可以非常简单地组织测试代码，并随时运行它们，还能给出准确的测试报告，让你在最短的时间内发现自己编写的代码到底哪里出了问题。</p><h3 id="_02、上手指南" tabindex="-1"><a class="header-anchor" href="#_02、上手指南" aria-hidden="true">#</a> 02、上手指南</h3><p>好了，既然知道了我这么优秀，那还等什么，直接上手吧！我最新的版本是 JUnit 5，Intellij IDEA 中已经集成了，所以你可以直接在 IDEA 中编写并运行我的测试用例。</p><p>第一步，直接在当前的代码编辑器窗口中按下 <code>Command+N</code> 键（Mac 版），在弹出的菜单中选择「Test...」。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-fe29e8b8-9264-4aa3-9139-6ebb39af88a1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>勾选上要编写测试用例的方法 <code>fact()</code>，然后点击「OK」。</p><p>此时，IDEA 会自动在当前类所在的包下生成一个类名带 Test（惯例）的测试类。如下图所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-756305d6-7166-4737-8665-89d24a1eefae.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果你是第一次使用我的话，IDEA 会提示你导入我的依赖包。建议你选择最新的 JUnit 5.4。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-91bf986d-3586-4175-9ca2-959e5eb62e9c.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>导入完毕后，你可以打开 pom.xml 文件确认一下，里面多了对我的依赖。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
    &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
    &lt;version&gt;RELEASE&lt;/version&gt;
    &lt;scope&gt;compile&lt;/scope&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二步，在测试方法中添加一组断言，如下所示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">fact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token class-name">Factorial</span><span class="token punctuation">.</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">Factorial</span><span class="token punctuation">.</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token class-name">Factorial</span><span class="token punctuation">.</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token class-name">Factorial</span><span class="token punctuation">.</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Test</code> 注解是我要求的，我会把带有 <code>@Test</code> 的方法识别为测试方法。在测试方法内部，你可以使用 <code>assertEquals()</code> 对期望的值和实际的值进行比对。</p><p>第三步，你可以在邮件菜单中选择「Run FactorialTest」来运行测试用例，结果如下所示。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-7daf1a3d-a321-4d42-9d16-134043161a29.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>测试失败了，因为第 20 行的预期结果和实际不符，预期是 100，实际是 120。此时，你要么修正实现代码，要么修正测试代码，直到测试通过为止。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-5b71c36f-684d-4d30-b1a1-faef453603ae.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>不难吧？单元测试可以确保单个方法按照正确的预期运行，如果你修改了某个方法的代码，只需确保其对应的单元测试通过，即可认为改动是没有问题的。</p><h3 id="_03、瞻前顾后" tabindex="-1"><a class="header-anchor" href="#_03、瞻前顾后" aria-hidden="true">#</a> 03、瞻前顾后</h3><p>在一个测试用例中，可能要对多个方法进行测试。在测试之前呢，需要准备一些条件，比如说创建对象；在测试完成后呢，需要把这些对象销毁掉以释放资源。如果在多个测试方法中重复这些样板代码又会显得非常啰嗦。</p><p>这时候，该怎么办呢？</p><p>我为你提供了 <code>setUp()</code> 和 <code>tearDown()</code>，作为一个文化人，我称之为“瞻前顾后”。来看要测试的代码。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Calculator</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">-</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建测试用例的时候记得勾选<code>setUp</code> 和 <code>tearDown</code>。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongju/junit-afa3c969-a2d2-439c-b440-5b7480592d52.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>生成后的代码如下所示。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">CalculatorTest</span> <span class="token punctuation">{</span>
    <span class="token class-name">Calculator</span> calculator<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@BeforeEach</span>
    <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        calculator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Calculator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@AfterEach</span>
    <span class="token keyword">void</span> <span class="token function">tearDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        calculator <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span>calculator<span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span>calculator<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@BeforeEach</code> 的 <code>setUp()</code> 方法会在运行每个 <code>@Test</code> 方法之前运行；<code>@AfterEach</code> 的 <code>tearDown()</code> 方法会在运行每个 <code>@Test</code> 方法之后运行。</p><p>与之对应的还有 <code>@BeforeAll</code> 和 <code>@AfterAll</code>，与 <code>@BeforeEach</code> 和 <code>@AfterEach</code> 不同的是，All 通常用来初始化和销毁静态变量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DatabaseTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token class-name">Database</span> db<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@BeforeAll</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        db <span class="token operator">=</span> <span class="token function">createDb</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@AfterAll</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">drop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_03、异常测试" tabindex="-1"><a class="header-anchor" href="#_03、异常测试" aria-hidden="true">#</a> 03、异常测试</h3><p>对于 Java 程序来说，异常处理也非常的重要。对于可能抛出的异常进行测试，本身也是测试的一个重要环节。</p><p>还拿之前的 Factorial 类来进行说明。在 <code>fact()</code> 方法的一开始，对参数 n 进行了校验，如果小于 0，则抛出 IllegalArgumentException 异常。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factorial</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">fact</span><span class="token punctuation">(</span><span class="token keyword">long</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;参数不能小于 0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            r <span class="token operator">=</span> r <span class="token operator">*</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 FactorialTest 中追加一个测试方法 <code>factIllegalArgument()</code>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">factIllegalArgument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThrows</span><span class="token punctuation">(</span><span class="token class-name">IllegalArgumentException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Executable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
            <span class="token class-name">Factorial</span><span class="token punctuation">.</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我为你提供了一个 <code>assertThrows()</code> 的方法，第一个参数是异常的类型，第二个参数 Executable，可以封装产生异常的代码。如果觉得匿名内部类写起来比较复杂的话，可以使用 Lambda 表达式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">factIllegalArgumentLambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">assertThrows</span><span class="token punctuation">(</span><span class="token class-name">IllegalArgumentException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">Factorial</span><span class="token punctuation">.</span><span class="token function">fact</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_04、忽略测试" tabindex="-1"><a class="header-anchor" href="#_04、忽略测试" aria-hidden="true">#</a> 04、忽略测试</h3><p>有时候，由于某些原因，某些方法产生了 bug，需要一段时间去修复，在修复之前，该方法对应的测试用例一直是以失败告终的，为了避免这种情况，我为你提供了 <code>@Disabled</code> 注解。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">DisabledTestsDemo</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Disabled</span><span class="token punctuation">(</span><span class="token string">&quot;该测试用例不再执行，直到编号为 43 的 bug 修复掉&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testWillBeSkipped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">testWillBeExecuted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Disabled</code> 注解也可以不需要说明，但我建议你还是提供一下，简单地说明一下为什么这个测试方法要忽略。在上例中，如果团队的其他成员看到说明就会明白，当编号 43 的 bug 修复后，该测试方法会重新启用的。即便是为了提醒自己，也很有必要，因为时间长了你可能自己就忘了，当初是为什么要忽略这个测试方法的。</p><h3 id="_05、条件测试" tabindex="-1"><a class="header-anchor" href="#_05、条件测试" aria-hidden="true">#</a> 05、条件测试</h3><p>有时候，你可能需要在某些条件下运行测试方法，有些条件下不运行测试方法。针对这场使用场景，我为你提供了条件测试。</p><p>1）不同的操作系统，可能需要不同的测试用例，比如说 Linux 和 Windows 的路径名是不一样的，通过 <code>@EnabledOnOs</code> 注解就可以针对不同的操作系统启用不同的测试用例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@EnabledOnOs</span><span class="token punctuation">(</span><span class="token constant">MAC</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">onlyOnMacOs</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@TestOnMac</span>
<span class="token keyword">void</span> <span class="token function">testOnMac</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@EnabledOnOs</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token constant">LINUX</span><span class="token punctuation">,</span> <span class="token constant">MAC</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">onLinuxOrMac</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@DisabledOnOs</span><span class="token punctuation">(</span><span class="token constant">WINDOWS</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">notOnWindows</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）不同的 Java 运行环境，可能也需要不同的测试用例。<code>@EnabledOnJre</code> 和 <code>@EnabledForJreRange</code> 注解就可以满足这个需求。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@EnabledOnJre</span><span class="token punctuation">(</span><span class="token constant">JAVA_8</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">onlyOnJava8</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@EnabledOnJre</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token constant">JAVA_9</span><span class="token punctuation">,</span> <span class="token constant">JAVA_10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">onJava9Or10</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Test</span>
<span class="token annotation punctuation">@EnabledForJreRange</span><span class="token punctuation">(</span>min <span class="token operator">=</span> <span class="token constant">JAVA_9</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token constant">JAVA_11</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">fromJava9to11</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_06、尾声" tabindex="-1"><a class="header-anchor" href="#_06、尾声" aria-hidden="true">#</a> 06、尾声</h3><p>最后，给你说三句心里话吧。在编写单元测试的时候，你最好这样做：</p><p>1）单元测试的代码本身必须非常名单明了，能一下看明白，决不能再为测试代码编写测试代码。</p><p>2）每个单元测试应该互相独立，不依赖运行时的顺序。</p><p>3）测试时要特别注意边界条件，比如说 0，<code>null</code>，空字符串&quot;&quot; 等情况。</p><p>希望我能尽早的替你发现代码中的 bug，毕竟越早的发现，造成的损失就会越小。see you！</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,68),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","junit.html.vue"]]);export{r as default};
