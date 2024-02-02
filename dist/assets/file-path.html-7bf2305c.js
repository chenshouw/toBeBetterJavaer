const e=JSON.parse('{"key":"v-b8304a1a","path":"/io/file-path.html","title":"Java File：IO 流的起点与终点","lang":"zh-CN","frontmatter":{"title":"Java File：IO 流的起点与终点","shortTitle":"文件流","category":["Java核心"],"tag":["Java IO"],"description":"本文详细介绍了 Java File 类，阐述了其在 IO 流操作中的关键角色，作为输入输出操作的起点与终点。同时，文章还提供了 Java File 类的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解 Java File 类及其在 Java 编程中的重要性，提高文件操作效率。","head":[["meta",{"name":"keywords","content":"Java,Java IO,文件流, file,java文件,java目录,java文件增删改查,java file"}],["meta",{"property":"og:url","content":"https://javabetter.cn/io/file-path.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"Java File：IO 流的起点与终点"}],["meta",{"property":"og:description","content":"本文详细介绍了 Java File 类，阐述了其在 IO 流操作中的关键角色，作为输入输出操作的起点与终点。同时，文章还提供了 Java File 类的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解 Java File 类及其在 Java 编程中的重要性，提高文件操作效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java File：IO 流的起点与终点\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":3,"title":"File 构造方法","slug":"file-构造方法","link":"#file-构造方法","children":[]},{"level":3,"title":"File 常用方法","slug":"file-常用方法","link":"#file-常用方法","children":[]},{"level":3,"title":"RandomAccessFile","slug":"randomaccessfile","link":"#randomaccessfile","children":[]},{"level":3,"title":"Apache FileUtils 类","slug":"apache-fileutils-类","link":"#apache-fileutils-类","children":[]},{"level":3,"title":"Hutool FileUtil 类","slug":"hutool-fileutil-类","link":"#hutool-fileutil-类","children":[]}],"git":{"createdTime":1661211309000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":8}]},"readingTime":{"minutes":13.89,"words":4166},"filePathRelative":"io/file-path.md","localizedDate":"2022年8月23日","excerpt":"<h1> 7.2 文件流</h1>\\n<p>在 IO 操作中，文件的操作相对来说是比较复杂的，但也是使用频率最高的部分，我们几乎所有的项目中几乎都躺着一个叫做 FileUtil 或者 FileUtils 的工具类。</p>\\n<p><code>java.io.File</code> 类是专门对文件进行操作的类，注意只能对文件本身进行操作，不能对文件内容进行操作，想要操作内容，必须借助输入输出流。</p>\\n<p><code>File</code> 类是文件和目录的抽象表示，主要用于文件和目录的创建、查找和删除等操作。</p>\\n<p>怎么理解上面两句话？其实很简单！</p>\\n<p>第一句是说 File 跟流无关，File 类不能对文件进行读和写，也就是输入和输出！</p>"}');export{e as data};
