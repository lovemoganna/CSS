## 内容
```text
1.HTML常见元素和理解.
2.HTML版本.
3.HTML元素分类.
4.HTML元素嵌套关系.
5.HTML元素默认样式和定制化.
6.题目
```

## HTML常见元素
```text
meta
title
style
link
script
base
```
```text
div/section/article/aside/header/fotter 
div-万能元素,层/区域/容器,其他都是有明确含义的区域.

p
表示段落.

span/em/strong(默认斜体/粗体)
表示行内元素的字段.

table/thead/tbody/tr/td(行/单元格)
表格样式

ul/ol/li/dl/dt/dd
列表(无序/有序)(定义列表/标题/内容)

a
(链接)

from/input/select/textarea(下拉框/文本框)/button
表单
```
适配移动端的最重要的一步就是加上viewport.

```text
<meta charset="utf-8"> 字符集

<meta name="viewport" content="width=device-width,
initial-scale=1.0,maximum-scale=1.0,user-scalable=no">

viewport指的视图窗口的大小.视口宽度=设备宽度.初始化视框=1,最大视框=1,用户不能缩放视口.

viewport代表手机屏幕页面的尺寸大小.苹果手机不指定大小的话,默认宽度就是980px.
所以我们需要设置width=device-width来确保视口宽度=设备的宽度 .

phone5.width = 320px

<base href="/"> 指定一个基础的路径,指定之后,所有有的链接都是以这个路径为基准来进行计算.

```

## HTML重要属性
```text
a[href,target]
target =self//在当前窗口打开
target=_blank//在新窗口打开
还可以指定在哪一个框架中打开

img[src,alt]
alt//可替换的资源,图片不可用的时候,图片的时候就可以显示文本内容,至少知道写的什么东西

table td[colspan,rowspan]
合并单元格,用到colspan,rowspan.

form[target,method,enctype]
表单:表单提交到哪里/提交方式:get,post.../编码格式()
主要针对post:第一种:通过urlencode的方式把文本提交上去,第二种:fromdata的方式对数据做一个编码,之后提交上去,好处就是可以上传文件.

input[type,value]
密码,单选,复选,下拉框.

button[type]
select>option[value]

label[for]
与表单项关联.标签.
```

## 问题

如果是ajax去请求的话,并不通过from表单去提交?是否需要from元素?

1.不一定需要.但是仍然建议去这样做.因为有submit,reset这样的特性在里面.

2.可以一些方式去批量的获取表单.比如说Jquery中有serialize方法.可以获取整个表单的所有数据.

3.有from的时候,可以跟框架结合,去做表单验证.

4.用户喜欢的特性,Chrome会记住密码.对开发者没意义.

## 理解HTML

HTML它是描述文档的结构,本质上就是一个文档,Document.

HTML就和word文档一样,他也有区块和大纲一说.
```text
//一个区块
<section>
    <h1>我们</h1>
    <section>
        <h1>nimen</h1>
        <p>爱爱</p>
    </section>
    
    <section>
        <h1>nimen</h1>
        <p>爱爱</p>
    </section>
    //广告区域
    <aside>
        <p>women</p>
    </aside>
</section>

//页脚
<fotter>
    <p>2011</p>
</fotter>

2个区域,1个广告位.
最后就是一个页脚:简介.

so: you can see it is :

section:
    section
    section
    aside
fotter:    
```

## HTML工具地址
`http://h5o.github.io`
`Chrome插件:HTML5 Outliner`

## HTML版本
HTML4/4.01(SGML)

HTML4-基于一种标记语言(SGML)来写的.
XML-一种可扩展性的标记语言.
XHTML(XML)-所有标签/属性都是小写的,所有的属性必须有值.

HTML5是基于HTML4的,并没有特别要求有严格的要求.
并不强调代码的正确性,而是保证开发者的感受.写的代码也基本很规范.

![](https://upload-images.jianshu.io/upload_images/7505161-b72d4b1f2c21a504.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## XHTML的认识

xmlns-命名空间.

也就是规定有哪些元素和属性可以使用.

属性必须有值,属性必须有引号的.反正各种要求很严格.要求都要小写.

回到以前的我写的mybatis的配置文件mapper.xml上去了.

如果要较真的话:`http://validator.w3.org`去验证吧.

## HTML5新增加的内容

```text
新区块的标签:

section:区块,中间可以带标题和内容.
article:区块,中间可以带标题和内容.
nav:导航,也有可能出现在大纲中.
aside:广告.

表单增强:

日期,时间,搜索
    form,input新增了一些类
    search默认是一个圆角的输入框.
表单验证
Placeholder:自动聚焦

HTML5新增的语义:

header/footer 头尾
article里面可以包括header/footer的.

section/article区域
与div的区别:div是万能的,当你知道这是一块的时候,热点(标题)就用section/博客(标题,文章,评论)就用article.
nav导航页面的栏目/当前处在的网站的层级.
aside:不重要的内容.
em/strong(斜体/粗体)==>(强调/强壮),偏样式的命名
i icon(i在HTML4中表示斜体,在HTML5中被保留了,用来作为图标,也就是我们日常所说的icon)
```

## HTML的元素分类
按默认样式分类
```text
块级 block:一个块级元素默认会占据整行.不会给其他元素留出空间.

行内(内联元素) inline:不一定是有规则形状的,不会独占一行,会和其他元素很和谐的在一起.

内联块级元素 inline-block:它想内联元素一样,会和其他元素堆叠在一起.有固定的形状.在一行内和谐共处.
```
如果给内联元素添加一个width = 100px ,那么他就会变得不规则.

![](https://upload-images.jianshu.io/upload_images/7505161-4cc3a204faea5cee.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-7174d5254c7fe7c5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

给块级内联元素添加一个width,他几乎没什么影响.

block-文本相关的元素:em,span,strong.

inline-表单元素:select,input.

按内容模型分类:

![](https://upload-images.jianshu.io/upload_images/7505161-0e4f09ad4115d261.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Flow-文档流中有影响的元素.(也就是可见的元素)

Metadata-(Flow之外的元素:meta,script)

Heading-标题-h1-h6

Sectioning-分区元素:section,article,aside,nav

interactive-和用户有交互的元素:点链接,按钮

Phrasing-短语,不是一个完整的句子.em,

Embedded-嵌入其他的资源,video

详细文档[W#C标准文档](https://www.w3.org/TR/2017/REC-html52-20171214/dom.html#kinds-of-content)

![image.png](https://upload-images.jianshu.io/upload_images/7505161-17b75f0b5dca31c8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![image.png](https://upload-images.jianshu.io/upload_images/7505161-8183517864df7d5d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-ba39fa5e7bc845e6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-6615b20f8914ebf7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-2961360adcc47713.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-a8384ad53218655c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## HTML元素嵌套关系

1.块级元素可以包含行内(内联元素)元素

    div>a---true

2.块级元素不一定可以包含块级元素.

    div>div---true
    
    section>div---true

    p表示一个段落,但是段落里面不能包含div里面的元素.

3.行内元素一般不能包含块级元素.

    span包含一个div,这就不合法;但是a元素可以包含块级元素.

**我们要讨论a为什么包含div是合法的?**

HTML4版本是严格遵循行内元素不能包含块级元素这一标准的.
但是HTML5对此作出了修改.
[具体参见W3C对a标签的描述](https://www.w3.org/TR/html52/textlevel-semantics.html#the-a-element)

关于对a标签内容模型的的描述:
```text
Some elements are described as transparent; they have "transparent" in the description of their content model.
也就是说在内容模型的描述中,a是透明的,也就是不存在的.
```
例子:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>default style</title>
</head>
<body>
    <div><a href="#">DIV &gt; A</a></div>
    <!--在计算合法性的时候,a被视为透明元素.所以可以去掉,只剩下div-->
    <a href="#"><div>A &gt; DIV</div></a>
    <!--a是透明的,p包含div是不合法的.-->
    <p><a href="#"><div>P &gt; A &gt; DIV</div></a></p>
</body>
</html>
```

关于p元素,我们也需要看一下文档.

![](https://upload-images.jianshu.io/upload_images/7505161-fe42e65ee2be6a60.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

p元素是零碎的文本片段.

![](https://upload-images.jianshu.io/upload_images/7505161-8285f16ce5fa9020.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

我们并没有从Phrasing Content中查到div,也就意味着上文包含div是不合法的.

但是此时我们观察一下chrome中代码的布局,可以看出浏览器进入了容错模式.

![](https://upload-images.jianshu.io/upload_images/7505161-6b6f258d11511c68.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

所以我们一定要遵守HTML5的代码的嵌套原则.

验证方法:

1.去[W3C](http://validator.w3.org/)的验证网址去验证.

2.查看W3C文档,自己判断.

## 默认样式和reset

### 默认样式的意义

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>default style</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
    </style>
</head>
<body>
    <div>DIV元素</div>
    <ul>
        <li>LI元素</li>
        <li>LI元素</li>
    </ul>
</body>
</html>
```

**如果不加CSS的设置,内容并不会出现在左上角.那么间距是从何而来哪?**

要注意我们查找间距问题,要从html开始,并非一开始就从body开始.

![](https://upload-images.jianshu.io/upload_images/7505161-a9c3f8ed156db862.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![](https://upload-images.jianshu.io/upload_images/7505161-495175b9da7c229d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


![](https://upload-images.jianshu.io/upload_images/7505161-f8f961fb0e40b552.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

但是浏览器自带的默认样式我们一般不想要,那就需要CSS Reset了.

也就是干掉浏览器的默认设置.

可以去`yui.yahooapis.com`去寻找CSS Reset.

```html
 <!--有争议的写法:所有的边距都初始化了.-->
    <!--主要就是可能会带来性能的问题*代表所有标签,一个个去查找的时候,就会变慢-->
    <style>
        *{
            margin:0;
            padding:0;
        }
    </style>
```
还有一个是Normalize.css,地址是在`http://necolas.gtihub.io`查找css Reset.
这个库会尝试去做一些修正,而不是将margin/padding设置为0.

## HTML问题

1.DOCTYPE的意义
```html
IE有自己的渲染模式,最典型的就是他自己的盒子模型.
如果一个元素设置width,那么实际元素包括padding+margin+width.

如果在IE中设置width=200,padding=10,那么实际宽度就是180.
但是,标准盒子模型就是220.

这样就会出现不兼容的方案,解决方案就是加上DEOCTYPE,IE就会以标准样式渲染,那么此时的宽度就是220px.

还有就是如果写的代码时HTML4的,可能放在现在就不合法.浏览器会出现容错.比如:`<p><div></div></p>>`

总结:
1.让浏览器以标准模式渲染.
2.让浏览器知道元素的合法性.
```
2.HTML XHTML HTML5的关系.
```html
HTML属于SGML.(标记语言)

XHTML属于XML,是HTML进行XML严格化的结果.

HTML5不属于SGML或者XML,比XHML宽松.
```

3.HTML5的变化.
```html
新的语义化元素:section,article,aside,nav,footer.
像font,i,em语义不强的元素不再使用了.

表单增强:新的元素和表单验证增强啦.

新的API(离线,音视频,图形,实时通信,本地存储,设备能力)
applycache.video,SVG,WebSocket,localStorage,

分类和嵌套变更
a元素的变化,a在HTML4嵌套div是不合法的,在HTML5中嵌套div是合法的.
```

4.em和i有什么区别?
```html
主要是语义化上的变化,em和i都是斜体的,

1.em是语义化的标签,表强调.
2.i是纯样式的标签,表斜体.

HTML5中i不推荐是用,一般用作图标(icon).
```
5.语义化的意义是什么?
```html
开发者容易理解.
机器容易理解结构(搜索,读屏,软件)
有助于SEO
semantic microdata:添加新的标记,做进一步的语义化的设置,便于搜索.
```
6.哪些元素可以闭合?
```html
表单元素 input
图片 img
br 换行
hr 水平线
meta link

这些元素可以在HMTL5中不加闭合,但是从XHTML要加闭合.
```
7.HTML和DOM的关系.
```html
1.HTML写出来的是字符串,是"死的".
2.HTML要经过浏览器解析,解析之后才会变成DOM.
  DOM是由HTML解析而来的,是活的.
3.JS可以维护DOM.   

DOMAPI里面提供了应用HTML的属性.
body="一大段HTML";
他其实还是DOM,是由body借由DOM元素提供的API.
body接收到字符串后,它会将其解析成DOM的结构.然后显示出来.

实质上是由HTML经过DOMAPI解析的之后的一段DOM树.
```
8.property和attribute的区别.
```html
DOM中property被称为特性.HTML中attribute被称为属性.

1.attribute---在HTML中元素有属性.(死的)
2.property---HTML被浏览器解析之后的DOM元素会有一个特性.(活的)

比如下面
<input type="text" value="1">

value就是HTML里面的一个属性.
但是在DOM初始化的时候解析,解析之后value是1.也就是赋值给property.此时特性就是值为1.

$0就会获取输入框标签.
$0.value就会获得值.
$0.value ="2";//重新赋值
此时再取,value=2;这就是DOM树的特性.

$0.getAttribute("value")---获得属性,永远都是1.
 也就是说二者互不影响.
```
9.from的作用有哪些?
```html
1.直接提交表单.
2.使用submit/reset按钮.
3.便于浏览器保存表单.
4.第三方库可以整体提取值.(JQuery.serialize:序列表表格内容为字符串。) 
5.第三方库可以进行表单验证.
```
