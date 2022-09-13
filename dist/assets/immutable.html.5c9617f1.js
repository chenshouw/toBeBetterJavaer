import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as t,c as o,a as n,b as c,e as i,d as s}from"./app.610296d2.js";const l={},u=i(`<h1 id="\u6DF1\u5165\u7406\u89E3java\u4E2D\u7684\u4E0D\u53EF\u53D8\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u5165\u7406\u89E3java\u4E2D\u7684\u4E0D\u53EF\u53D8\u5BF9\u8C61" aria-hidden="true">#</a> \u6DF1\u5165\u7406\u89E3Java\u4E2D\u7684\u4E0D\u53EF\u53D8\u5BF9\u8C61</h1><blockquote><p>\u4E8C\u54E5\uFF0C\u4F60\u80FD\u7ED9\u6211\u8BF4\u8BF4\u4E3A\u4EC0\u4E48 String \u662F immutable \u7C7B\uFF08\u4E0D\u53EF\u53D8\u5BF9\u8C61\uFF09\u5417\uFF1F\u6211\u60F3\u7814\u7A76\u5B83\uFF0C\u60F3\u77E5\u9053\u4E3A\u4EC0\u4E48\u5B83\u5C31\u4E0D\u53EF\u53D8\u4E86\uFF0C\u8FD9\u79CD\u5F3A\u70C8\u7684\u613F\u671B\u5C31\u50CF\u60F3\u7814\u7A76\u6D69\u701A\u7684\u661F\u7A7A\u4E00\u6837\u3002\u4F46\u65E0\u5948\u81EA\u8EAB\u529F\u529B\u6709\u9650\uFF0C\u59CB\u7EC8\u89C9\u5F97\u96FE\u91CC\u770B\u82B1\u7EC8\u9694\u4E00\u5C42\u3002\u4E8C\u54E5\u4F60\u7684\u6587\u7AE0\u603B\u662F\u5145\u6EE1\u8DA3\u5473\u6027\uFF0C\u6211\u60F3\u4E00\u5B9A\u80FD\u591F\u8BF4\u660E\u767D\uFF0C\u6211\u4E5F\u4E00\u5B9A\u80FD\u591F\u770B\u660E\u767D\uFF0C\u80FD\u5728\u63A5\u4E0B\u6765\u5199\u4E00\u5199\u5417\uFF1F</p></blockquote><p>\u6536\u5230\u8BFB\u8005\u5C0F R \u7684\u79C1\u4FE1\u540E\uFF0C\u6211\u5C31\u603B\u611F\u89C9\u81EA\u5DF1\u6709\u4E00\u79CD\u4E49\u4E0D\u5BB9\u8F9E\u7684\u8D23\u4EFB\uFF0C\u975E\u8981\u628A immutable \u7C7B\u8BF4\u660E\u767D\u4E0D\u53EF\uFF01</p><h2 id="_01\u3001\u4EC0\u4E48\u662F\u4E0D\u53EF\u53D8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_01\u3001\u4EC0\u4E48\u662F\u4E0D\u53EF\u53D8\u7C7B" aria-hidden="true">#</a> 01\u3001\u4EC0\u4E48\u662F\u4E0D\u53EF\u53D8\u7C7B</h2><p>\u4E00\u4E2A\u7C7B\u7684\u5BF9\u8C61\u5728\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u521B\u5EFA\u540E\u5982\u679C\u72B6\u6001\u4E0D\u4F1A\u518D\u88AB\u6539\u53D8\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u4E00\u4E2A\u4E0D\u53EF\u53D8\uFF08immutable\uFF09\u7C7B\u3002\u5B83\u7684\u6240\u6709\u6210\u5458\u53D8\u91CF\u7684\u8D4B\u503C\u4EC5\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u5B8C\u6210\uFF0C\u4E0D\u4F1A\u63D0\u4F9B\u4EFB\u4F55 setter \u65B9\u6CD5\u4F9B\u5916\u90E8\u7C7B\u53BB\u4FEE\u6539\u3002</p><p>\u8FD8\u8BB0\u5F97\u300A\u795E\u96D5\u4FA0\u4FA3\u300B\u4E2D\u5C0F\u9F99\u5973\u7684\u53E4\u5893\u5417\uFF1F\u968F\u7740\u90A3\u4E00\u58F0\u5DE8\u54CD\uFF0C\u4EC5\u6709\u7684\u901A\u9053\u5C31\u88AB\u65E0\u60C5\u5730\u5173\u95ED\u4E86\u3002\u522B\u8F83\u771F\u90A3\u4E2A\u5BC6\u9053\uFF0C\u6211\u8FD9\u4E48\u8BF4\u53EA\u662F\u4E3A\u4E86\u6253\u5F00\u4F60\u7684\u60F3\u8C61\u529B\uFF0C\u8BA9\u4F60\u5BF9\u4E0D\u53EF\u53D8\u7C7B\u6709\u4E00\u4E2A\u66F4\u76F4\u89C2\u7684\u5370\u8C61\u3002</p><p>\u81EA\u4ECE\u6709\u4E86\u591A\u7EBF\u7A0B\uFF0C\u751F\u4EA7\u529B\u5C31\u88AB\u65E0\u9650\u5730\u653E\u5927\u4E86\uFF0C\u6240\u6709\u7684\u7A0B\u5E8F\u5458\u90FD\u7231\u5B83\uFF0C\u56E0\u4E3A\u5F3A\u5927\u7684\u786C\u4EF6\u80FD\u529B\u88AB\u5145\u5206\u5730\u5229\u7528\u4E86\u3002\u4F46\u4E0E\u6B64\u540C\u65F6\uFF0C\u6240\u6709\u7684\u7A0B\u5E8F\u5458\u90FD\u5BF9\u5B83\u5FC3\u751F\u5FCC\u60EE\uFF0C\u56E0\u4E3A\u4E00\u4E0D\u5C0F\u5FC3\uFF0C\u591A\u7EBF\u7A0B\u5C31\u4F1A\u628A\u5BF9\u8C61\u7684\u72B6\u6001\u53D8\u5F97\u6DF7\u4E71\u4E0D\u582A\u3002</p><p>\u4E3A\u4E86\u4FDD\u62A4\u72B6\u6001\u7684\u539F\u5B50\u6027\u3001\u53EF\u89C1\u6027\u3001\u6709\u5E8F\u6027\uFF0C\u6211\u4EEC\u7A0B\u5E8F\u5458\u53EF\u4EE5\u8BF4\u662F\u7AED\u5C3D\u6240\u80FD\u3002\u5176\u4E2D\uFF0Csynchronized\uFF08\u540C\u6B65\uFF09\u5173\u952E\u5B57\u662F\u6700\u7B80\u5355\u6700\u5165\u95E8\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u5047\u5982\u8BF4\u7C7B\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u90A3\u4E48\u5BF9\u8C61\u7684\u72B6\u6001\u5C31\u4E5F\u662F\u4E0D\u53EF\u53D8\u7684\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u6BCF\u6B21\u4FEE\u6539\u5BF9\u8C61\u7684\u72B6\u6001\uFF0C\u5C31\u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u4F9B\u4E0D\u540C\u7684\u7EBF\u7A0B\u4F7F\u7528\uFF0C\u6211\u4EEC\u7A0B\u5E8F\u5458\u5C31\u4E0D\u5FC5\u518D\u62C5\u5FC3\u5E76\u53D1\u95EE\u9898\u4E86\u3002</p><h2 id="_02\u3001\u5E38\u89C1\u7684\u4E0D\u53EF\u53D8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_02\u3001\u5E38\u89C1\u7684\u4E0D\u53EF\u53D8\u7C7B" aria-hidden="true">#</a> 02\u3001\u5E38\u89C1\u7684\u4E0D\u53EF\u53D8\u7C7B</h2><p>\u63D0\u5230\u4E0D\u53EF\u53D8\u7C7B\uFF0C\u51E0\u4E4E\u6240\u6709\u7684\u7A0B\u5E8F\u5458\u7B2C\u4E00\u4E2A\u60F3\u5230\u7684\uFF0C\u5C31\u662F String \u7C7B\u3002\u90A3\u4E3A\u4EC0\u4E48 String \u7C7B\u8981\u88AB\u8BBE\u8BA1\u6210\u4E0D\u53EF\u53D8\u7684\u5462\uFF1F</p><p>1\uFF09\u5E38\u91CF\u6C60\u7684\u9700\u8981</p><p>\u5B57\u7B26\u4E32\u5E38\u91CF\u6C60\u662F Java \u5806\u5185\u5B58\u4E2D\u4E00\u4E2A\u7279\u6B8A\u7684\u5B58\u50A8\u533A\u57DF\uFF0C\u5F53\u521B\u5EFA\u4E00\u4E2A String \u5BF9\u8C61\u65F6\uFF0C\u5047\u5982\u6B64\u5B57\u7B26\u4E32\u5728\u5E38\u91CF\u6C60\u4E2D\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u5C31\u521B\u5EFA\u4E00\u4E2A\uFF1B\u5047\u5982\u5DF2\u7ECF\u5B58\uFF0C\u5C31\u4E0D\u4F1A\u518D\u521B\u5EFA\u4E86\uFF0C\u800C\u662F\u76F4\u63A5\u5F15\u7528\u5DF2\u7ECF\u5B58\u5728\u7684\u5BF9\u8C61\u3002\u8FD9\u6837\u505A\u80FD\u591F\u51CF\u5C11 JVM \u7684\u5185\u5B58\u5F00\u9500\uFF0C\u63D0\u9AD8\u6548\u7387\u3002</p><p>2\uFF09hashCode \u7684\u9700\u8981</p><p>\u56E0\u4E3A\u5B57\u7B26\u4E32\u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u6240\u4EE5\u5728\u5B83\u521B\u5EFA\u7684\u65F6\u5019\uFF0C\u5176 hashCode \u5C31\u88AB\u7F13\u5B58\u4E86\uFF0C\u56E0\u6B64\u975E\u5E38\u9002\u5408\u4F5C\u4E3A\u54C8\u5E0C\u503C\uFF08\u6BD4\u5982\u8BF4\u4F5C\u4E3A HashMap \u7684\u952E\uFF09\uFF0C\u591A\u6B21\u8C03\u7528\u53EA\u8FD4\u56DE\u540C\u4E00\u4E2A\u503C\uFF0C\u6765\u63D0\u9AD8\u6548\u7387\u3002</p><p>3\uFF09\u7EBF\u7A0B\u5B89\u5168</p><p>\u5C31\u50CF\u4E4B\u524D\u8BF4\u7684\u90A3\u6837\uFF0C\u5982\u679C\u5BF9\u8C61\u7684\u72B6\u6001\u662F\u53EF\u53D8\u7684\uFF0C\u90A3\u4E48\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\uFF0C\u5C31\u5F88\u5BB9\u6613\u9020\u6210\u4E0D\u53EF\u9884\u671F\u7684\u7ED3\u679C\u3002\u800C String \u662F\u4E0D\u53EF\u53D8\u7684\uFF0C\u5C31\u53EF\u4EE5\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u5171\u4EAB\uFF0C\u4E0D\u9700\u8981\u540C\u6B65\u5904\u7406\u3002</p><p>\u56E0\u6B64\uFF0C\u5F53\u6211\u4EEC\u8C03\u7528 String \u7C7B\u7684\u4EFB\u4F55\u65B9\u6CD5\uFF08\u6BD4\u5982\u8BF4 <code>trim()</code>\u3001<code>substring()</code>\u3001<code>toLowerCase()</code>\uFF09\u65F6\uFF0C\u603B\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u800C\u4E0D\u5F71\u54CD\u4E4B\u524D\u7684\u503C\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> cmower <span class="token operator">=</span> <span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458&quot;</span><span class="token punctuation">;</span>
cmower<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cmower<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u6C89\u9ED8\u738B\u4E8C\uFF0C\u4E00\u679A\u6709\u8DA3\u7684\u7A0B\u5E8F\u5458</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u867D\u7136\u8C03\u7528 <code>substring()</code> \u65B9\u6CD5\u5BF9 cmower \u8FDB\u884C\u4E86\u622A\u53D6\uFF0C\u4F46 cmower \u7684\u503C\u6CA1\u6709\u6539\u53D8\u3002</p><p>\u9664\u4E86 String \u7C7B\uFF0C\u5305\u88C5\u5668\u7C7B Integer\u3001Long \u7B49\u4E5F\u662F\u4E0D\u53EF\u53D8\u7C7B\u3002</p><h2 id="_03\u3001\u624B\u64B8\u4E0D\u53EF\u53D8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_03\u3001\u624B\u64B8\u4E0D\u53EF\u53D8\u7C7B" aria-hidden="true">#</a> 03\u3001\u624B\u64B8\u4E0D\u53EF\u53D8\u7C7B</h2><p>\u770B\u61C2\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7C7B\u4E5F\u8BB8\u5BB9\u6613\uFF0C\u4F46\u8981\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u4E0D\u53EF\u53D8\u7C7B\u6050\u6015\u5C31\u6709\u70B9\u96BE\u4E86\u3002\u4F46\u77E5\u96BE\u800C\u8FDB\u662F\u6211\u4EEC\u4F5C\u4E3A\u4E00\u540D\u4F18\u79C0\u7684\u7A0B\u5E8F\u5458\u4E0D\u53EF\u6216\u7F3A\u7684\u54C1\u8D28\uFF0C\u6B63\u56E0\u4E3A\u4E0D\u5BB9\u6613\uFF0C\u6211\u4EEC\u624D\u80FD\u771F\u6B63\u5730\u638C\u63E1\u5B83\u3002</p><p>\u63A5\u4E0B\u6765\uFF0C\u5C31\u8BF7\u548C\u6211\u4E00\u8D77\uFF0C\u6765\u81EA\u5B9A\u4E49\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7C7B\u5427\u3002\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7C7B\uFF0C\u5FC5\u987B\u8981\u6EE1\u8DB3\u4EE5\u4E0B 4 \u4E2A\u6761\u4EF6\uFF1A</p><p>1\uFF09\u786E\u4FDD\u7C7B\u662F final \u7684\uFF0C\u4E0D\u5141\u8BB8\u88AB\u5176\u4ED6\u7C7B\u7EE7\u627F\u3002</p><p>2\uFF09\u786E\u4FDD\u6240\u6709\u7684\u6210\u5458\u53D8\u91CF\uFF08\u5B57\u6BB5\uFF09\u662F final \u7684\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u5B83\u4EEC\u5C31\u53EA\u80FD\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316\u503C\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5728\u968F\u540E\u88AB\u4FEE\u6539\u3002</p><p>3\uFF09\u4E0D\u8981\u63D0\u4F9B\u4EFB\u4F55 setter \u65B9\u6CD5\u3002</p><p>4\uFF09\u5982\u679C\u8981\u4FEE\u6539\u7C7B\u7684\u72B6\u6001\uFF0C\u5FC5\u987B\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002</p><p>\u6309\u7167\u4EE5\u4E0A\u6761\u4EF6\uFF0C\u6211\u4EEC\u6765\u81EA\u5B9A\u4E49\u4E00\u4E2A\u7B80\u5355\u7684\u4E0D\u53EF\u53D8\u7C7B Writer\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Writer \u7C7B\u662F final \u7684\uFF0Cname \u548C age \u4E5F\u662F final \u7684\uFF0C\u6CA1\u6709 setter \u65B9\u6CD5\u3002</p><p>OK\uFF0C\u636E\u8BF4\u8FD9\u4E2A\u4F5C\u8005\u5206\u4EAB\u4E86\u5F88\u591A\u535A\u5BA2\uFF0C\u5E7F\u53D7\u8BFB\u8005\u7684\u559C\u7231\uFF0C\u56E0\u6B64\u67D0\u67D0\u51FA\u7248\u793E\u627E\u4ED6\u5199\u4E86\u4E00\u672C\u4E66\uFF08Book\uFF09\u3002Book \u7C7B\u662F\u8FD9\u6837\u5B9A\u4E49\u7684\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> price<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">int</span> price<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Book{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, price=&quot;</span> <span class="token operator">+</span> price <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2 \u4E2A\u5B57\u6BB5\uFF0C\u5206\u522B\u662F name \u548C price\uFF0C\u4EE5\u53CA getter \u548C setter\uFF0C\u91CD\u5199\u540E\u7684 <code>toString()</code> \u65B9\u6CD5\u3002\u7136\u540E\uFF0C\u5728 Writer \u7C7B\u4E2D\u8FFD\u52A0\u4E00\u4E2A\u53EF\u53D8\u5BF9\u8C61\u5B57\u6BB5 book\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Writer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Book</span> book<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">,</span> <span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>book <span class="token operator">=</span> book<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> book<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u8FFD\u52A0\u4E86 Book \u53C2\u6570\uFF0C\u4EE5\u53CA Book \u7684 getter \u65B9\u6CD5\u3002</p><p>\u5B8C\u6210\u4EE5\u4E0A\u5DE5\u4F5C\u540E\uFF0C\u6211\u4EEC\u6765\u65B0\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u7C7B\uFF0C\u770B\u770B Writer \u7C7B\u7684\u72B6\u6001\u662F\u5426\u771F\u7684\u4E0D\u53EF\u53D8\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WriterDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Web\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        book<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">79</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Writer</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Writer</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C89\u9ED8\u738B\u4E8C&quot;</span><span class="token punctuation">,</span><span class="token number">18</span><span class="token punctuation">,</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B9A\u4EF7\uFF1A&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        writer<span class="token punctuation">.</span><span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token number">59</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4FC3\u9500\u4EF7\uFF1A&quot;</span> <span class="token operator">+</span> writer<span class="token punctuation">.</span><span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u8F93\u51FA\u7684\u7ED3\u679C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\u5B9A\u4EF7\uFF1A<span class="token class-name">Book</span><span class="token punctuation">{</span>name<span class="token operator">=</span>&#39;<span class="token class-name">Web</span>\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&#39;<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token number">79</span><span class="token punctuation">}</span>
\u4FC3\u9500\u4EF7\uFF1A<span class="token class-name">Book</span><span class="token punctuation">{</span>name<span class="token operator">=</span>&#39;<span class="token class-name">Web</span>\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&#39;<span class="token punctuation">,</span> price<span class="token operator">=</span><span class="token number">59</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7CDF\u7CD5\uFF0CWriter \u7C7B\u7684\u4E0D\u53EF\u53D8\u6027\u88AB\u7834\u574F\u4E86\uFF0C\u4EF7\u683C\u53D1\u751F\u4E86\u53D8\u5316\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u4E0D\u53EF\u53D8\u7C7B\u7684\u5B9A\u4E49\u89C4\u5219\u8FFD\u52A0\u4E00\u6761\u5185\u5BB9\uFF1A</p><p>\u5982\u679C\u4E00\u4E2A\u4E0D\u53EF\u53D8\u7C7B\u4E2D\u5305\u542B\u4E86\u53EF\u53D8\u7C7B\u7684\u5BF9\u8C61\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u786E\u4FDD\u8FD4\u56DE\u7684\u662F\u53EF\u53D8\u5BF9\u8C61\u7684\u526F\u672C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CWriter \u7C7B\u4E2D\u7684 <code>getBook()</code> \u65B9\u6CD5\u5E94\u8BE5\u4FEE\u6539\u4E3A\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getBook</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Book</span> clone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    clone<span class="token punctuation">.</span><span class="token function">setPrice</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>book<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    clone<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>book<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> clone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u7684\u8BDD\uFF0C\u6784\u9020\u65B9\u6CD5\u521D\u59CB\u5316\u540E\u7684 Book \u5BF9\u8C61\u5C31\u4E0D\u4F1A\u518D\u88AB\u4FEE\u6539\u4E86\u3002\u6B64\u65F6\uFF0C\u8FD0\u884C WriterDemo\uFF0C\u5C31\u4F1A\u53D1\u73B0\u4EF7\u683C\u4E0D\u518D\u53D1\u751F\u53D8\u5316\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5B9A\u4EF7\uFF1ABook{name=&#39;Web\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&#39;, price=79}
\u4FC3\u9500\u4EF7\uFF1ABook{name=&#39;Web\u5168\u6808\u5F00\u53D1\u8FDB\u9636\u4E4B\u8DEF&#39;, price=79}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04\u3001\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_04\u3001\u603B\u7ED3" aria-hidden="true">#</a> 04\u3001\u603B\u7ED3</h2><p>\u4E0D\u53EF\u53D8\u7C7B\u6709\u5F88\u591A\u4F18\u70B9\uFF0C\u5C31\u50CF\u4E4B\u524D\u63D0\u5230\u7684 String \u7C7B\u90A3\u6837\uFF0C\u5C24\u5176\u662F\u5728\u591A\u7EBF\u7A0B\u73AF\u5883\u4E0B\uFF0C\u5B83\u975E\u5E38\u7684\u5B89\u5168\u3002\u5C3D\u7BA1\u6BCF\u6B21\u4FEE\u6539\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u589E\u52A0\u4E86\u5185\u5B58\u7684\u6D88\u8017\uFF0C\u4F46\u8FD9\u4E2A\u7F3A\u70B9\u76F8\u6BD4\u5B83\u5E26\u6765\u7684\u4F18\u70B9\uFF0C\u663E\u7136\u662F\u5FAE\u4E0D\u8DB3\u9053\u7684\u2014\u2014\u65E0\u975E\u5C31\u662F\u6361\u4E86\u897F\u74DC\uFF0C\u4E22\u4E86\u829D\u9EBB\u3002</p><hr>`,48),r=s("\u6700\u8FD1\u6574\u7406\u4E86\u4E00\u4EFD\u725B\u903C\u7684\u5B66\u4E60\u8D44\u6599\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8EJava\u57FA\u7840\u90E8\u5206\uFF08JVM\u3001Java\u96C6\u5408\u6846\u67B6\u3001\u591A\u7EBF\u7A0B\uFF09\uFF0C\u8FD8\u56CA\u62EC\u4E86 "),k=n("strong",null,"\u6570\u636E\u5E93\u3001\u8BA1\u7B97\u673A\u7F51\u7EDC\u3001\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u3001\u8BBE\u8BA1\u6A21\u5F0F\u3001\u6846\u67B6\u7C7BSpring\u3001Netty\u3001\u5FAE\u670D\u52A1\uFF08Dubbo\uFF0C\u6D88\u606F\u961F\u5217\uFF09 \u7F51\u5173",-1),d=s(" \u7B49\u7B49\u7B49\u7B49\u2026\u2026\u8BE6\u60C5\u6233\uFF1A"),v={href:"https://tobebetterjavaer.com/pdf/programmer-111.html",target:"_blank",rel:"noopener noreferrer"},m=s("\u53EF\u4EE5\u8BF4\u662F2022\u5E74\u5168\u7F51\u6700\u5168\u7684\u5B66\u4E60\u548C\u627E\u5DE5\u4F5C\u7684PDF\u8D44\u6E90\u4E86"),b=n("p",null,[s("\u5173\u6CE8\u4E8C\u54E5\u7684\u539F\u521B\u516C\u4F17\u53F7 "),n("strong",null,"\u6C89\u9ED8\u738B\u4E8C"),s("\uFF0C\u56DE\u590D"),n("strong",null,"111"),s(" \u5373\u53EF\u514D\u8D39\u9886\u53D6\u3002")],-1),g=n("p",null,[n("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/xingbiaogongzhonghao.png",alt:""})],-1);function w(y,h){const a=p("ExternalLinkIcon");return t(),o("div",null,[u,n("p",null,[r,k,d,n("a",v,[m,c(a)])]),b,g])}var B=e(l,[["render",w],["__file","immutable.html.vue"]]);export{B as default};
