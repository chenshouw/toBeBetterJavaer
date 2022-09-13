import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as r,c as l,a as e,b as i,e as d,d as n}from"./app.610296d2.js";const c={},o=d(`<p>Java \u540E\u7AEF\u9762\u8BD5\u7684\u65F6\u5019\uFF0C\u9762\u8BD5\u5B98\u7ECF\u5E38\u4F1A\u95EE\u5230 @Transactional \u7684\u539F\u7406\uFF0C\u4EE5\u53CA\u5BB9\u6613\u8E29\u7684\u5751\uFF0C\u4E4B\u524D\u4E00\u9762\u767E\u5EA6\uFF0C\u5C31\u9047\u5230\u8FC7\uFF0C\u4ECA\u5929\u5C31\u5E26\u5927\u5BB6\u628A\u8FD9\u51E0\u5757\u77E5\u8BC6\u5403\u900F\u3002</p><p>\u8FD9\u7BC7\u6587\u7AE0\uFF0C<strong>\u4F1A\u5148\u8BB2\u8FF0 @Transactional \u7684 4 \u79CD\u4E0D\u751F\u6548\u7684 Case\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u6E90\u7801\u89E3\u8BFB\uFF0C\u5206\u6790 @Transactional \u7684\u6267\u884C\u539F\u7406\uFF0C\u4EE5\u53CA\u90E8\u5206 Case \u4E0D\u751F\u6548\u7684\u771F\u6B63\u539F\u56E0\u3002</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-912703df-775a-48b9-abbb-0e951d9da1bf.jpg" alt=""></p><h2 id="\u9879\u76EE\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u51C6\u5907" aria-hidden="true">#</a> \u9879\u76EE\u51C6\u5907</h2><p>\u4E0B\u9762\u662F DB \u6570\u636E\u548C DB \u64CD\u4F5C\u63A5\u53E3\uFF1A</p><table><thead><tr><th>uid</th><th>uname</th><th>usex</th></tr></thead><tbody><tr><td>1</td><td>\u5F20\u4E09</td><td>\u5973</td></tr><tr><td>2</td><td>\u9648\u6052</td><td>\u7537</td></tr><tr><td>3</td><td>\u697C\u4ED4</td><td>\u7537</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u63D0\u4F9B\u7684\u63A5\u53E3
public interface UserDao {
    // select * from user_test where uid = &quot;#{uid}&quot;
    public MyUser selectUserById(Integer uid);
    // update user_test set uname =#{uname},usex = #{usex} where uid = #{uid}
    public int updateUser(MyUser user);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u7840\u6D4B\u8BD5\u4EE3\u7801\uFF0CtestSuccess() \u662F\u4E8B\u52A1\u751F\u6548\u7684\u60C5\u51B5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Service
public class UserController {
    @Autowired
    private UserDao userDao;

    public void update(Integer id) {
        MyUser user = new MyUser();
        user.setUid(id);
        user.setUname(&quot;\u5F20\u4E09-testing&quot;);
        user.setUsex(&quot;\u5973&quot;);
        userDao.updateUser(user);
    }

    public MyUser query(Integer id) {
        MyUser user = userDao.selectUserById(id);
        return user;
    }

    // \u6B63\u5E38\u60C5\u51B5
    @Transactional(rollbackFor = Exception.class)

    public void testSuccess() throws Exception {
        Integer id = 1;
        MyUser user = query(id);
        System.out.println(&quot;\u539F\u8BB0\u5F55:&quot; + user);
        update(id);
        throw new Exception(&quot;\u4E8B\u52A1\u751F\u6548&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E8B\u52A1\u4E0D\u751F\u6548\u7684\u51E0\u79CD-case" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u52A1\u4E0D\u751F\u6548\u7684\u51E0\u79CD-case" aria-hidden="true">#</a> \u4E8B\u52A1\u4E0D\u751F\u6548\u7684\u51E0\u79CD Case</h2><p>\u4E3B\u8981\u8BB2\u89E3 4 \u79CD\u4E8B\u52A1\u4E0D\u751F\u6548\u7684 Case\uFF1A</p><ul><li><strong>\u7C7B\u5185\u90E8\u8BBF\u95EE</strong>\uFF1AA \u7C7B\u7684 a1 \u65B9\u6CD5\u6CA1\u6709\u6807\u6CE8 @Transactional\uFF0Ca2 \u65B9\u6CD5\u6807\u6CE8 @Transactional\uFF0C\u5728 a1 \u91CC\u9762\u8C03\u7528 a2\uFF1B</li><li><strong>\u79C1\u6709\u65B9\u6CD5</strong>\uFF1A\u5C06 @Transactional \u6CE8\u89E3\u6807\u6CE8\u5728\u975E public \u65B9\u6CD5\u4E0A\uFF1B</li><li><strong>\u5F02\u5E38\u4E0D\u5339\u914D</strong>\uFF1A@Transactional \u672A\u8BBE\u7F6E rollbackFor \u5C5E\u6027\uFF0C\u65B9\u6CD5\u8FD4\u56DE Exception \u7B49\u5F02\u5E38\uFF1B</li><li><strong>\u591A\u7EBF\u7A0B</strong>\uFF1A\u4E3B\u7EBF\u7A0B\u548C\u5B50\u7EBF\u7A0B\u7684\u8C03\u7528\uFF0C\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38\u3002</li></ul><h3 id="case-1-\u7C7B\u5185\u90E8\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#case-1-\u7C7B\u5185\u90E8\u8BBF\u95EE" aria-hidden="true">#</a> Case 1: \u7C7B\u5185\u90E8\u8BBF\u95EE</h3><p>\u6211\u4EEC\u5728\u7C7B UserController \u4E2D\u65B0\u589E\u4E00\u4E2A\u65B9\u6CD5 testInteralCall()\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void testInteralCall() throws Exception {
    testSuccess();
    throw new Exception(&quot;\u4E8B\u52A1\u4E0D\u751F\u6548\uFF1A\u7C7B\u5185\u90E8\u8BBF\u95EE&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC testInteralCall() \u6CA1\u6709\u6807\u6CE8 @Transactional\uFF0C\u6211\u4EEC\u518D\u770B\u4E00\u4E0B\u6D4B\u8BD5\u7528\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void main(String[] args) throws Exception {
    ApplicationContext applicationContext = new ClassPathXmlApplicationContext(&quot;applicationContext.xml&quot;);
    UserController uc = (UserController) applicationContext.getBean(&quot;userController&quot;);
    try {
        uc.testSuccess();
    } finally {
        MyUser user =  uc.query(1);
        System.out.println(&quot;\u4FEE\u6539\u540E\u7684\u8BB0\u5F55:&quot; + user);
    }
}
// \u8F93\u51FA\uFF1A
// \u539F\u8BB0\u5F55:MyUser(uid=1, uname=\u5F20\u4E09, usex=\u5973)
// \u4FEE\u6539\u540E\u7684\u8BB0\u5F55:MyUser(uid=1, uname=\u5F20\u4E09-testing, usex=\u5973)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4E0A\u9762\u7684\u8F93\u51FA\u53EF\u4EE5\u770B\u5230\uFF0C\u4E8B\u52A1\u5E76\u6CA1\u6709\u56DE\u6EDA\uFF0C\u8FD9\u4E2A\u662F\u4EC0\u4E48\u539F\u56E0\u5462\uFF1F</p><p>\u56E0\u4E3A @Transactional \u7684\u5DE5\u4F5C\u673A\u5236\u662F\u57FA\u4E8E AOP \u5B9E\u73B0\uFF0CAOP \u662F\u4F7F\u7528\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0\u7684\uFF0C\u5982\u679C\u901A\u8FC7\u4EE3\u7406\u76F4\u63A5\u8C03\u7528 testSuccess()\uFF0C\u901A\u8FC7 AOP \u4F1A\u524D\u540E\u8FDB\u884C\u589E\u5F3A\uFF0C\u589E\u5F3A\u7684\u903B\u8F91\u5176\u5B9E\u5C31\u662F\u5728 testSuccess() \u7684\u524D\u540E\u5206\u522B\u52A0\u4E0A\u5F00\u542F\u3001\u63D0\u4EA4\u4E8B\u52A1\u7684\u903B\u8F91\uFF0C\u540E\u9762\u7684\u6E90\u7801\u4F1A\u8FDB\u884C\u5256\u6790\u3002</p><p>\u73B0\u5728\u662F\u901A\u8FC7 testInteralCall() \u53BB\u8C03\u7528 testSuccess()\uFF0CtestSuccess() \u524D\u540E\u4E0D\u4F1A\u8FDB\u884C\u4EFB\u4F55\u589E\u5F3A\u64CD\u4F5C\uFF0C\u4E5F\u5C31\u662F<strong>\u7C7B\u5185\u90E8\u8C03\u7528\uFF0C\u4E0D\u4F1A\u901A\u8FC7\u4EE3\u7406\u65B9\u5F0F\u8BBF\u95EE\u3002</strong></p><blockquote><p>\u5982\u679C\u8FD8\u662F\u4E0D\u592A\u6E05\u695A\uFF0C\u63A8\u8350\u518D\u770B\u770B\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u91CC\u9762\u6709\u5B8C\u6574\u793A\u4F8B\uFF0C\u975E\u5E38\u5B8C\u7F8E\u8BE0\u91CA\u201C\u7C7B\u5185\u90E8\u8BBF\u95EE\u201D\u4E0D\u80FD\u524D\u540E\u589E\u5F3A\u7684\u539F\u56E0\uFF1Ahttps://blog.csdn.net/Ahuuua/article/details/123877835</p></blockquote><h3 id="case-2-\u79C1\u6709\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#case-2-\u79C1\u6709\u65B9\u6CD5" aria-hidden="true">#</a> Case 2: \u79C1\u6709\u65B9\u6CD5</h3><p>\u5728\u79C1\u6709\u65B9\u6CD5\u4E0A\uFF0C\u6DFB\u52A0 @Transactional \u6CE8\u89E3\u4E5F\u4E0D\u4F1A\u751F\u6548\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Transactional(rollbackFor = Exception.class)

private void testPirvateMethod() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;\u539F\u8BB0\u5F55:&quot; + user);
    update(id);
    throw new Exception(&quot;\u6D4B\u8BD5\u4E8B\u52A1\u751F\u6548&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u76F4\u63A5\u4F7F\u7528\u65F6\uFF0C\u4E0B\u9762\u8FD9\u79CD\u573A\u666F\u4E0D\u592A\u5BB9\u6613\u51FA\u73B0\uFF0C\u56E0\u4E3A IDEA \u4F1A\u6709\u63D0\u9192\uFF0C\u6587\u6848\u4E3A: Methods annotated with &#39;@Transactional&#39; must be overridable\uFF0C<strong>\u81F3\u4E8E\u6DF1\u5C42\u6B21\u7684\u539F\u7406\uFF0C\u6E90\u7801\u90E8\u5206\u4F1A\u7ED9\u4F60\u89E3\u8BFB\u3002</strong></p><h3 id="case-3-\u5F02\u5E38\u4E0D\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#case-3-\u5F02\u5E38\u4E0D\u5339\u914D" aria-hidden="true">#</a> Case 3: \u5F02\u5E38\u4E0D\u5339\u914D</h3><p>\u8FD9\u91CC\u7684 @Transactional \u6CA1\u6709\u8BBE\u7F6E rollbackFor = Exception.class \u5C5E\u6027\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Transactional
public void testExceptionNotMatch() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;\u539F\u8BB0\u5F55:&quot; + user);
    update(id);
    throw new Exception(&quot;\u4E8B\u52A1\u4E0D\u751F\u6548\uFF1A\u5F02\u5E38\u4E0D\u5339\u914D&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6D4B\u8BD5\u65B9\u6CD5\uFF1A\u540C Case1

// \u8F93\u51FA\uFF1A
// \u539F\u8BB0\u5F55:User[uid=1,uname=\u5F20\u4E09,usex=\u5973]
// \u4FEE\u6539\u540E\u7684\u8BB0\u5F55:User[uid=1,uname=\u5F20\u4E09-test,usex=\u5973]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@Transactional \u6CE8\u89E3\u9ED8\u8BA4\u5904\u7406\u8FD0\u884C\u65F6\u5F02\u5E38\uFF0C\u5373\u53EA\u6709\u629B\u51FA\u8FD0\u884C\u65F6\u5F02\u5E38\u65F6\uFF0C\u624D\u4F1A\u89E6\u53D1\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u5426\u5219\u5E76\u4E0D\u4F1A\u56DE\u6EDA\uFF0C<strong>\u81F3\u4E8E\u6DF1\u5C42\u6B21\u7684\u539F\u7406\uFF0C\u6E90\u7801\u90E8\u5206\u4F1A\u7ED9\u4F60\u89E3\u8BFB\u3002</strong></p><h3 id="case-4-\u591A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#case-4-\u591A\u7EBF\u7A0B" aria-hidden="true">#</a> Case 4: \u591A\u7EBF\u7A0B</h3><p>\u4E0B\u9762\u7ED9\u51FA\u4E24\u4E2A\u4E0D\u540C\u7684\u59FF\u52BF\uFF0C\u4E00\u4E2A\u662F\u5B50\u7EBF\u7A0B\u629B\u5F02\u5E38\uFF0C\u4E3B\u7EBF\u7A0B ok\uFF1B\u4E00\u4E2A\u662F\u5B50\u7EBF\u7A0B ok\uFF0C\u4E3B\u7EBF\u7A0B\u629B\u5F02\u5E38\u3002</p><h4 id="\u7236\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u7236\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38" aria-hidden="true">#</a> \u7236\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38</h4><p>\u7236\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38\uFF0C\u5B50\u7EBF\u7A0B\u4E0D\u629B\u51FA\u5F02\u5E38\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void testSuccess() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;\u539F\u8BB0\u5F55:&quot; + user);
    update(id);
}
@Transactional(rollbackFor = Exception.class)

public void testMultThread() throws Exception {
    new Thread(new Runnable() {
        @SneakyThrows
        @Override
        public void run() {
            testSuccess();
        }
    }).start();
    throw new Exception(&quot;\u6D4B\u8BD5\u4E8B\u52A1\u4E0D\u751F\u6548&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7236\u7EBF\u7A0B\u629B\u51FA\u7EBF\u7A0B\uFF0C\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u56E0\u4E3A\u5B50\u7EBF\u7A0B\u662F\u72EC\u7ACB\u5B58\u5728\uFF0C\u548C\u7236\u7EBF\u7A0B\u4E0D\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u4E2D\uFF0C\u6240\u4EE5\u5B50\u7EBF\u7A0B\u7684\u4FEE\u6539\u5E76\u4E0D\u4F1A\u88AB\u56DE\u6EDA\uFF0C</p><h4 id="\u5B50\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#\u5B50\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38" aria-hidden="true">#</a> \u5B50\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38</h4><p>\u7236\u7EBF\u7A0B\u4E0D\u629B\u51FA\u5F02\u5E38\uFF0C\u5B50\u7EBF\u7A0B\u629B\u51FA\u5F02\u5E38\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public void testSuccess() throws Exception {
    Integer id = 1;
    MyUser user = query(id);
    System.out.println(&quot;\u539F\u8BB0\u5F55:&quot; + user);
    update(id);
    throw new Exception(&quot;\u6D4B\u8BD5\u4E8B\u52A1\u4E0D\u751F\u6548&quot;);
}
@Transactional(rollbackFor = Exception.class)

public void testMultThread() throws Exception {
    new Thread(new Runnable() {
        @SneakyThrows
        @Override
        public void run() {
            testSuccess();
        }
    }).start();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u5B50\u7EBF\u7A0B\u7684\u5F02\u5E38\u4E0D\u4F1A\u88AB\u5916\u90E8\u7684\u7EBF\u7A0B\u6355\u83B7\uFF0C\u6240\u4EE5\u7236\u7EBF\u7A0B\u4E0D\u629B\u5F02\u5E38\uFF0C\u4E8B\u52A1\u56DE\u6EDA\u6CA1\u6709\u751F\u6548\u3002</p><h2 id="\u6E90\u7801\u89E3\u8BFB" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u89E3\u8BFB" aria-hidden="true">#</a> \u6E90\u7801\u89E3\u8BFB</h2><p><strong>\u4E0B\u9762\u6211\u4EEC\u4ECE\u6E90\u7801\u7684\u89D2\u5EA6\uFF0C\u5BF9 @Transactional \u7684\u6267\u884C\u673A\u5236\u548C\u4E8B\u52A1\u4E0D\u751F\u6548\u7684\u539F\u56E0\u8FDB\u884C\u89E3\u8BFB\u3002</strong></p><h3 id="transactional-\u6267\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#transactional-\u6267\u884C\u673A\u5236" aria-hidden="true">#</a> @Transactional \u6267\u884C\u673A\u5236</h3><p>\u6211\u4EEC\u53EA\u770B\u6700\u6838\u5FC3\u7684\u903B\u8F91\uFF0C\u4EE3\u7801\u4E2D\u7684 interceptorOrInterceptionAdvice \u5C31\u662F TransactionInterceptor \u7684\u5B9E\u4F8B\uFF0C\u5165\u53C2\u662F this \u5BF9\u8C61\u3002</p><blockquote><p>\u7EA2\u8272\u65B9\u6846\u6709\u4E00\u6BB5\u6CE8\u91CA\uFF0C\u5927\u81F4\u7FFB\u8BD1\u4E3A \u201C\u5B83\u662F\u4E00\u4E2A\u62E6\u622A\u5668\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8C03\u7528\u5373\u53EF\uFF1A\u5728\u6784\u9020\u6B64\u5BF9\u8C61\u4E4B\u524D\uFF0C\u5C06\u9759\u6001\u5730\u8BA1\u7B97\u5207\u5165\u70B9\u3002\u201D</p></blockquote><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-3995e575-2cd3-4f62-80d9-c0fbba3c99b9.jpg" alt=""></p><p>this \u662F ReflectiveMethodInvocation \u5BF9\u8C61\uFF0C\u6210\u5458\u5BF9\u8C61\u5305\u542B UserController \u7C7B\u3001testSuccess() \u65B9\u6CD5\u3001\u5165\u53C2\u548C\u4EE3\u7406\u5BF9\u8C61\u7B49\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-47edf894-16e1-423b-a59a-cbb1bf1f5fba.jpg" alt=""></p><p>\u8FDB\u5165 invoke() \u65B9\u6CD5\u540E\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-a4464977-3c8f-4800-8ffd-c4e458828b0e.jpg" alt=""></p><p><strong>\u524D\u65B9\u9AD8\u80FD\uFF01\uFF01\uFF01\u8FD9\u91CC\u5C31\u662F\u4E8B\u52A1\u7684\u6838\u5FC3\u903B\u8F91\uFF0C\u5305\u62EC\u5224\u65AD\u4E8B\u52A1\u662F\u5426\u5F00\u542F\u3001\u76EE\u6807\u65B9\u6CD5\u6267\u884C\u3001\u4E8B\u52A1\u56DE\u6EDA\u3001\u4E8B\u52A1\u63D0\u4EA4\u3002</strong></p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-4b46998f-2c1a-4e7c-abc7-e34113ea33f3.jpg" alt=""></p><h3 id="private-\u5BFC\u81F4\u4E8B\u52A1\u4E0D\u751F\u6548\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#private-\u5BFC\u81F4\u4E8B\u52A1\u4E0D\u751F\u6548\u539F\u56E0" aria-hidden="true">#</a> private \u5BFC\u81F4\u4E8B\u52A1\u4E0D\u751F\u6548\u539F\u56E0</h3><p>\u5728\u4E0A\u9762\u8FD9\u5E45\u56FE\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u7EA2\u6846\u533A\u57DF\u8C03\u7528\u4E86\u65B9\u6CD5 getTransactionAttribute()\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u83B7\u53D6 txAttr \u53D8\u91CF\uFF0C\u5B83\u662F\u7528\u4E8E\u8BFB\u53D6 @Transactional \u7684\u914D\u7F6E\uFF0C\u5982\u679C\u8FD9\u4E2A txAttr = null\uFF0C\u540E\u9762\u5C31\u4E0D\u4F1A\u8D70\u4E8B\u52A1\u903B\u8F91\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B\u8FD9\u4E2A\u53D8\u91CF\u7684\u542B\u4E49\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-d87a548a-cdf7-4027-8a8c-6e37a2cb908f.jpg" alt=""></p><p>\u6211\u4EEC\u76F4\u63A5\u8FDB\u5165 getTransactionAttribute()\uFF0C\u91CD\u70B9\u5173\u6CE8\u83B7\u53D6\u4E8B\u52A1\u914D\u7F6E\u7684\u65B9\u6CD5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-d5397df4-4a66-4187-92fe-6b7f991aff1a.jpg" alt=""></p><p><strong>\u524D\u65B9\u9AD8\u80FD\uFF01\uFF01\uFF01\u8FD9\u91CC\u5C31\u662F private \u5BFC\u81F4\u4E8B\u52A1\u4E0D\u751F\u6548\u7684\u539F\u56E0\u6240\u5728</strong>\uFF0CallowPublicMethodsOnly() \u4E00\u76F4\u8FD4\u56DE false\uFF0C\u6240\u4EE5\u91CD\u70B9\u53EA\u5173\u6CE8 isPublic() \u65B9\u6CD5\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-be1475dd-5e66-4685-9009-34c2bc1eed00.jpg" alt=""></p><p>\u4E0B\u9762\u901A\u8FC7\u4F4D\u4E0E\u8BA1\u7B97\uFF0C\u5224\u65AD\u662F\u5426\u4E3A Public\uFF0C\u5BF9\u5E94\u7684\u51E0\u7C7B\u4FEE\u9970\u7B26\u5982\u4E0B\uFF1A</p><ul><li>PUBLIC: 1</li><li>PRIVATE: 2</li><li>PROTECTED: 4</li></ul><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-5b4f2786-0507-4c14-af2b-79a492317bb0.jpg" alt=""></p><p>\u770B\u5230\u8FD9\u91CC\uFF0C\u662F\u4E0D\u662F\u8C41\u7136\u5F00\u6717\u4E86\uFF0C\u6709\u6CA1\u6709\u89C9\u5F97\u5F88\u6709\u610F\u601D\u5462~~</p><h3 id="\u5F02\u5E38\u4E0D\u5339\u914D\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#\u5F02\u5E38\u4E0D\u5339\u914D\u539F\u56E0" aria-hidden="true">#</a> \u5F02\u5E38\u4E0D\u5339\u914D\u539F\u56E0</h3><p>\u6211\u4EEC\u7EE7\u7EED\u56DE\u5230\u4E8B\u52A1\u7684\u6838\u5FC3\u903B\u8F91\uFF0C\u56E0\u4E3A\u4E3B\u65B9\u6CD5\u629B\u51FA Exception() \u5F02\u5E38\uFF0C\u8FDB\u5165\u4E8B\u52A1\u56DE\u6EDA\u7684\u903B\u8F91\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-244514a1-f700-4781-aebe-cc6617c682e2.jpg" alt=""></p><p>\u8FDB\u5165 rollbackOn() \u65B9\u6CD5\uFF0C\u5224\u65AD\u8BE5\u5F02\u5E38\u662F\u5426\u80FD\u8FDB\u884C\u56DE\u6EDA\uFF0C\u8FD9\u4E2A\u9700\u8981\u5224\u65AD\u4E3B\u65B9\u6CD5\u629B\u51FA\u7684 Exception() \u5F02\u5E38\uFF0C\u662F\u5426\u5728 @Transactional \u7684\u914D\u7F6E\u4E2D\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-32c3759b-7673-4a0a-8e6d-d9e4b0d5cd7d.jpg" alt=""></p><p>\u6211\u4EEC\u8FDB\u5165 getDepth() \u770B\u4E00\u4E0B\u5F02\u5E38\u89C4\u5219\u5339\u914D\u903B\u8F91\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5BF9 @Transactional \u914D\u7F6E\u4E86 rollbackFor = Exception.class\uFF0C\u6240\u4EE5\u80FD\u5339\u914D\u6210\u529F\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-d4e16c96-45b4-49b6-bd5e-8061469b7aab.jpg" alt=""></p><p>\u793A\u4F8B\u4E2D\u7684 winner \u4E0D\u4E3A null\uFF0C\u6240\u4EE5\u4F1A\u8DF3\u8FC7\u4E0B\u9762\u7684\u73AF\u8282\u3002\u4F46\u662F\u5F53 winner = null \u65F6\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u8BBE\u7F6E rollbackFor \u5C5E\u6027\u65F6\uFF0C\u4F1A\u8D70\u9ED8\u8BA4\u7684\u5F02\u5E38\u6355\u83B7\u65B9\u5F0F\u3002</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-f08272b5-7365-47c1-a0a1-72307200c08a.jpg" alt=""></p><p><strong>\u524D\u65B9\u9AD8\u80FD\uFF01\uFF01\uFF01\u8FD9\u91CC\u5C31\u662F\u5F02\u5E38\u4E0D\u5339\u914D\u539F\u56E0\u7684\u539F\u56E0\u6240\u5728</strong>\uFF0C\u6211\u4EEC\u770B\u4E00\u4E0B\u9ED8\u8BA4\u7684\u5F02\u5E38\u6355\u83B7\u65B9\u5F0F\uFF1A</p><p><img src="http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-5cc091e2-bcd6-4d81-92ba-ee04509990b7.jpg" alt=""></p><p>\u662F\u4E0D\u662F\u8C41\u7136\u5F00\u6717\uFF0C<strong>\u5F53\u6CA1\u6709\u8BBE\u7F6E rollbackFor \u5C5E\u6027\u65F6\uFF0C\u9ED8\u8BA4\u53EA\u5BF9 RuntimeException \u548C Error \u7684\u5F02\u5E38\u6267\u884C\u56DE\u6EDA\u3002</strong></p><hr>`,76),u=n("\u4E00\u4E2A\u4EBA\u53EF\u4EE5\u8D70\u5F97\u5F88\u5FEB\uFF0C\u4F46\u4E00\u7FA4\u4EBA\u624D\u80FD\u8D70\u5F97\u66F4\u8FDC\u3002\u6B22\u8FCE\u52A0\u5165"),b={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},v=n("\u4E8C\u54E5\u7684\u7F16\u7A0B\u661F\u7403"),p=n("\uFF0C\u91CC\u9762\u7684\u6BCF\u4E2A\u7403\u53CB\u90FD\u975E\u5E38\u7684\u53CB\u5584\uFF0C\u9664\u4E86\u9F13\u52B1\u4F60\uFF0C\u8FD8\u4F1A\u7ED9\u4F60\u63D0\u51FA\u5408\u7406\u7684\u5EFA\u8BAE\u3002\u661F\u7403\u63D0\u4F9B\u7684\u4E09\u4EFD\u4E13\u5C5E\u4E13\u680F\u300AJava \u9762\u8BD5\u6307\u5357\u300B\u3001\u300A\u7F16\u7A0B\u55B5 \u{1F431}\uFF08Spring Boot+Vue \u524D\u540E\u7AEF\u5206\u79BB\uFF09\u5B9E\u6218\u9879\u76EE\u7B14\u8BB0\u300B\u3001\u300AJava \u7248 LeetCode \u5237\u9898\u7B14\u8BB0\u300B\uFF0C\u5E72\u8D27\u6EE1\u6EE1\uFF0C\u4EF7\u503C\u8FDE\u57CE\u3002"),m=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-3ad64454-3033-40f1-840a-8bd90880b065.png",alt:""})],-1),h=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-853616ff-76bd-40f6-9261-5e45285d3d56.png",alt:""})],-1),g=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-976002e6-741c-4948-a4a4-a32ec44a903a.png",alt:""})],-1),x=n("\u5DF2\u7ECF\u6709 "),_=e("strong",null,"670 \u591A\u540D",-1),y=n(" \u5C0F\u4F19\u4F34\u52A0\u5165"),q={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},w=n("\u4E8C\u54E5\u7684\u7F16\u7A0B\u661F\u7403"),f=n("\u4E86\uFF0C\u5982\u679C\u4F60\u4E5F\u9700\u8981\u4E00\u4E2A\u826F\u597D\u7684\u5B66\u4E60\u6C1B\u56F4\uFF0C"),j={href:"https://mp.weixin.qq.com/s/e5Q4aJCX9xccTzBBGepx4g",target:"_blank",rel:"noopener noreferrer"},T=n("\u6233\u94FE\u63A5"),E=n("\u52A0\u5165\u6211\u4EEC\u7684\u5927\u5BB6\u5EAD\u5427\uFF01\u8FD9\u662F\u4E00\u4E2A Java \u5B66\u4E60\u6307\u5357 + \u7F16\u7A0B\u5B9E\u6218 + LeetCode \u5237\u9898\u7684\u79C1\u5BC6\u5708\u5B50\uFF0C\u4F60\u53EF\u4EE5\u5411\u4E8C\u54E5\u63D0\u95EE\u3001\u5E2E\u4F60\u5236\u5B9A\u5B66\u4E60\u8BA1\u5212\u3001\u8DDF\u7740\u4E8C\u54E5\u4E00\u8D77\u505A\u5B9E\u6218\u9879\u76EE\uFF0C\u51B2\u51B2\u51B2\u3002"),k=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-6938df3e-6bd3-423e-879a-2b4dafa86bee.png",alt:""})],-1),U=e("p",null,[e("img",{src:"http://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-gongsxlygtsbtransactionalswzxyydlhcq-3e6e49be-d833-4c4d-9e23-5d54f4132a9a.png",alt:""})],-1),C=e("hr",null,null,-1),S=e("p",null,"\u6CA1\u6709\u4EC0\u4E48\u4F7F\u6211\u505C\u7559\u2014\u2014\u9664\u4E86\u76EE\u7684\uFF0C\u7EB5\u7136\u5CB8\u65C1\u6709\u73AB\u7470\u3001\u6709\u7EFF\u836B\u3001\u6709\u5B81\u9759\u7684\u6E2F\u6E7E\uFF0C\u6211\u662F\u4E0D\u7CFB\u4E4B\u821F\u3002",-1),z=e("p",null,[e("strong",null,"\u63A8\u8350\u9605\u8BFB"),n("\uFF1A")],-1),I={href:"https://mp.weixin.qq.com/s/ja_fEGFBBWM3TLhdT0aeMw",target:"_blank",rel:"noopener noreferrer"},M=n("\u4ECA\u5E74\u8FD9\u60C5\u51B5\uFF0C\u771F\u6709\u70B9\u60F3\u8BFB\u7814\u4E86"),B={href:"https://mp.weixin.qq.com/s/yH42DxmRBSjrr0SW9N3MFg",target:"_blank",rel:"noopener noreferrer"},A=n("\u4E13\u5347\u672C\u4E0A\u5CB8\u7684\u79D8\u8BC0"),P={href:"https://mp.weixin.qq.com/s/miOagyv4x3HrqVaU38uh4w",target:"_blank",rel:"noopener noreferrer"},D=n("\u6124\u6012\uFF0C\u4E00\u4E2A\u7834\u57F9\u8BAD\u73ED\u8981\u4EF7 28 \u4E07"),F={href:"https://mp.weixin.qq.com/s/s7KwW0cw2ZPR60SPFc6K0Q",target:"_blank",rel:"noopener noreferrer"},O=n("\u516C\u53F8\u4E0D\u5361\u5B66\u5386\uFF0C\u5374\u62C5\u5FC3\u81EA\u5DF1\u5B9E\u529B\u4E0D\u591F"),R={href:"https://mp.weixin.qq.com/s/iETW0dCfxxTTiRt1-WmeNw",target:"_blank",rel:"noopener noreferrer"},N=n("\u4ECA\u5E74\u9762\u8BD5\u6709\u70B9\u5C0F\u96BE\uFF0C\u8FD8\u662F\u8981\u51B2"),V={href:"https://mp.weixin.qq.com/s/9Naa2r7Xkf9D4d9tqEdgVQ",target:"_blank",rel:"noopener noreferrer"},J=n("\u4EBA\u751F\u5F53\u4E2D\u6323\u5230\u7684\u7B2C\u4E00\u4E2A 1 \u4E07\u5143"),L={href:"https://mp.weixin.qq.com/s/2IUe50xBhuEWKDzARVd51A",target:"_blank",rel:"noopener noreferrer"},Q=n("\u65B0\u4E00\u4EE3\u5F00\u6E90\u514D\u8D39\u7684\u7EC8\u7AEF\u5DE5\u5177\uFF0C\u592A\u9177\u4E86"),W={href:"https://mp.weixin.qq.com/s/3lqp4x1B5LI1hNjWAi6v1g",target:"_blank",rel:"noopener noreferrer"},X=n("Java \u540E\u7AEF\u56DB\u4EF6\u5957\u5B66\u4E60\u8D44\u6599"),G=n("\u53C2\u8003\u94FE\u63A5\uFF1A"),K={href:"https://mp.weixin.qq.com/s/APhxZ7ddmU8d9SEOr4w-iQ",target:"_blank",rel:"noopener noreferrer"},Z=n("https://mp.weixin.qq.com/s/APhxZ7ddmU8d9SEOr4w-iQ"),H=n("\uFF0C\u51FA\u5904\uFF1Amacrozheng\uFF0C\u6574\u7406\uFF1A\u6C89\u9ED8\u738B\u4E8C");function Y($,ee){const t=a("ExternalLinkIcon");return r(),l("div",null,[o,e("p",null,[u,e("a",b,[v,i(t)]),p]),m,h,g,e("p",null,[x,_,y,e("a",q,[w,i(t)]),f,e("a",j,[T,i(t)]),E]),k,U,C,S,z,e("ul",null,[e("li",null,[e("a",I,[M,i(t)])]),e("li",null,[e("a",B,[A,i(t)])]),e("li",null,[e("a",P,[D,i(t)])]),e("li",null,[e("a",F,[O,i(t)])]),e("li",null,[e("a",R,[N,i(t)])]),e("li",null,[e("a",V,[J,i(t)])]),e("li",null,[e("a",L,[Q,i(t)])]),e("li",null,[e("a",W,[X,i(t)])])]),e("blockquote",null,[e("p",null,[G,e("a",K,[Z,i(t)]),H])])])}var ie=s(c,[["render",Y],["__file","gongsxlygtsbtransactionalswzxyydlhcq.html.vue"]]);export{ie as default};
