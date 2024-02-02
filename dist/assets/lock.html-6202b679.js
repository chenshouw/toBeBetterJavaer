const e=JSON.parse('{"key":"v-46ec2dc2","path":"/thread/lock.html","title":"锁分类以及 JUC 包下的锁介绍，一网打尽","lang":"zh-CN","frontmatter":{"title":"锁分类以及 JUC 包下的锁介绍，一网打尽","shortTitle":"锁分类和 JUC","description":"Java的并发包（java.util.concurrent，简称JUC）提供了许多并发工具类，包括一些用于并发编程的锁。","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,锁,JUC,ReentrantLock,StampedLock,ReadWriteLock,Condition,锁分类"}],["meta",{"property":"og:url","content":"https://javabetter.cn/thread/lock.html"}],["meta",{"property":"og:site_name","content":"二哥的Java进阶之路"}],["meta",{"property":"og:title","content":"锁分类以及 JUC 包下的锁介绍，一网打尽"}],["meta",{"property":"og:description","content":"Java的并发包（java.util.concurrent，简称JUC）提供了许多并发工具类，包括一些用于并发编程的锁。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-08T12:03:00.000Z"}],["meta",{"property":"article:author","content":"沉默王二"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-12-08T12:03:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"锁分类以及 JUC 包下的锁介绍，一网打尽\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-08T12:03:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"沉默王二\\",\\"url\\":\\"/about-the-author/\\"}]}"]]},"headers":[{"level":2,"title":"锁的几种分类","slug":"锁的几种分类","link":"#锁的几种分类","children":[{"level":3,"title":"乐观锁 VS 悲观锁","slug":"乐观锁-vs-悲观锁","link":"#乐观锁-vs-悲观锁","children":[]},{"level":3,"title":"自旋锁 VS 适应性自旋锁","slug":"自旋锁-vs-适应性自旋锁","link":"#自旋锁-vs-适应性自旋锁","children":[]},{"level":3,"title":"无锁偏向锁轻量级锁重量级锁","slug":"无锁偏向锁轻量级锁重量级锁","link":"#无锁偏向锁轻量级锁重量级锁","children":[]},{"level":3,"title":"可重入锁和非可重入锁","slug":"可重入锁和非可重入锁","link":"#可重入锁和非可重入锁","children":[]},{"level":3,"title":"公平锁与非公平锁","slug":"公平锁与非公平锁","link":"#公平锁与非公平锁","children":[]},{"level":3,"title":"读写锁和排它锁","slug":"读写锁和排它锁","link":"#读写锁和排它锁","children":[]}]},{"level":2,"title":"JUC 包下的锁","slug":"juc-包下的锁","link":"#juc-包下的锁","children":[{"level":3,"title":"抽象类 AQS/AQLS/AOS","slug":"抽象类-aqs-aqls-aos","link":"#抽象类-aqs-aqls-aos","children":[]},{"level":3,"title":"接口 Condition/Lock/ReadWriteLock","slug":"接口-condition-lock-readwritelock","link":"#接口-condition-lock-readwritelock","children":[]},{"level":3,"title":"可重入锁ReentrantLock","slug":"可重入锁reentrantlock","link":"#可重入锁reentrantlock","children":[]},{"level":3,"title":"读写锁ReentrantReadWriteLock","slug":"读写锁reentrantreadwritelock","link":"#读写锁reentrantreadwritelock","children":[]},{"level":3,"title":"锁王StampedLock","slug":"锁王stampedlock","link":"#锁王stampedlock","children":[]}]},{"level":2,"title":"JUC 包下的其他工具类","slug":"juc-包下的其他工具类","link":"#juc-包下的其他工具类","children":[{"level":3,"title":"Semaphore","slug":"semaphore","link":"#semaphore","children":[]},{"level":3,"title":"CountDownLatch","slug":"countdownlatch","link":"#countdownlatch","children":[]},{"level":3,"title":"CyclicBarrier","slug":"cyclicbarrier","link":"#cyclicbarrier","children":[]},{"level":3,"title":"Exchanger","slug":"exchanger","link":"#exchanger","children":[]},{"level":3,"title":"Phaser","slug":"phaser","link":"#phaser","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1702036980000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":16},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":41.8,"words":12540},"filePathRelative":"thread/lock.md","localizedDate":"2022年3月23日","excerpt":"<h1> 第十四节：锁分类和 JUC</h1>\\n<p>前面我们介绍了基于对象的原生锁——<a href=\\"https://javabetter.cn/thread/synchronized-1.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">synchronized</a>，实际上，Java 在<code>java.util.concurrent</code>（JUC）包下，还为我们提供了更多的锁类和锁接口（尤其是子包 locks 下），它们有更强大的功能或更牛逼的性能。</p>\\n<p>来看看<code>synchronized</code>的不足之处吧。</p>"}');export{e as data};
