const e=JSON.parse('{"key":"v-205a2eee","path":"/oo/inner-class.html","title":"聊聊Java内部类：成员内部类、局部内部类、匿名内部类、静态内部类","lang":"zh-CN","frontmatter":{"title":"聊聊Java内部类：成员内部类、局部内部类、匿名内部类、静态内部类","shortTitle":"Java内部类","description":"本文详细介绍了Java内部类的概念、分类及其在实际编程中的应用。文章将讨论非静态内部类、静态内部类、匿名内部类和局部内部类的特点，以及如何在实际项目中合理地使用内部类来简化代码、提高封装性和灵活性。","category":["Java 核心"],"tag":["面向对象编程"],"head":[["meta",{"name":"keywords","content":"Java,内部类,成员内部类,局部内部类,匿名内部类,静态内部类,java 内部类"}],["meta",{"property":"og:url","content":"https://javabetter.cn/oo/inner-class.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"聊聊Java内部类：成员内部类、局部内部类、匿名内部类、静态内部类"}],["meta",{"property":"og:description","content":"本文详细介绍了Java内部类的概念、分类及其在实际编程中的应用。文章将讨论非静态内部类、静态内部类、匿名内部类和局部内部类的特点，以及如何在实际项目中合理地使用内部类来简化代码、提高封装性和灵活性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"面向对象编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"聊聊Java内部类：成员内部类、局部内部类、匿名内部类、静态内部类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"1）成员内部类","slug":"_1-成员内部类","link":"#_1-成员内部类","children":[]},{"level":3,"title":"2）局部内部类","slug":"_2-局部内部类","link":"#_2-局部内部类","children":[]},{"level":3,"title":"3）匿名内部类","slug":"_3-匿名内部类","link":"#_3-匿名内部类","children":[]},{"level":3,"title":"4）静态内部类","slug":"_4-静态内部类","link":"#_4-静态内部类","children":[]}],"git":{"createdTime":1651204517000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":11},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":6},{"name":"parade岁月","email":"46487578+parade0393@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.64,"words":1691},"filePathRelative":"oo/inner-class.md","localizedDate":"2022年4月29日","excerpt":"<h1> 5.12 Java内部类</h1>\\n<p>“在 Java 中，可以将一个类定义在另外一个类里面或者一个方法里面，这样的类叫做内部类。”我放下手中的枸杞杯，对三妹说，“一般来说，内部类分为成员内部类、局部内部类、匿名内部类和静态内部类。”</p>\\n<h3> <strong>1）成员内部类</strong></h3>\\n<p>成员内部类是最常见的内部类，看下面的代码：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Wanger</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> age <span class=\\"token operator\\">=</span> <span class=\\"token number\\">18</span><span class=\\"token punctuation\\">;</span>\\n    \\n    <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Wangxiaoer</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">int</span> age <span class=\\"token operator\\">=</span> <span class=\\"token number\\">81</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
