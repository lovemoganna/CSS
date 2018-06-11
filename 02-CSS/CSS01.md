## CSS
Cascading Style Sheet-层叠样式表.

CSS样式会叠加.
可以直观的看出叠加效果.

### 基本规则
```html
选择器{
    属性:值;(分隔符)
    属性:值;
}

选择器:
1.主要是用来匹配HTML元素.
有不同的匹配规则.
多个选择器是可以叠加的.

 <style>
        body{
            padding: 10px;
            font-size: 14px;
            background:red; 
        }
        /*这个选择器会叠加上面的选择器,因为带class,权重会高一些.*/
        /*元素选择器+类选择器,二者叠加在一起.*/
        body.body{
            font-size: 20px;
            background: red;
        }
        /*它的权重会更高,会叠加在最上面*/
        #body{
            background: blue;
        }
    </style>
 ```
 ### 分类和权重.
 ```


<body class="body" id="body">
    Hello CSS!
    <div>
        <a class="hello">aaa</a>
    </div>
</body>

比如要给a加上一个样式:

<style>
    .body div .hello{
        color:red;
    }
</style>

那么浏览器是如何解析的哪?

其实浏览器是从右往左来解析的,先找到hello这个类选择器,看存不存在,如果存在,继续往左边找div,直至找到body.

其实这是出于性能的考虑.
```
### 选择器的分类
```
元素选择器--- a{}
伪元素选择器--- ::before{}
类选择器--- .link{}
属性选择器--- [type=radio]{}
伪类选择器--- :hover{}
ID选择器--- #id{}
组合选择器--- [type=checkbox]+label{}
否定选择器--- :not(.link){}
通用选择器--- *{}

伪元素是:: 
伪类是:

伪元素是一种真实存在的元素,是一个新的元素.在页面中可以有内容,样式.(真实存在的一种元素)
伪类表示鼠标指向一个元素的时候,是一种将有状态的样式.(伪类是一个元素的状态)

伪元素刚刚出现的时候,之前是用:
```
```
### 选择器的权重
ID选择器 #id{} +100
类 属性 伪类 +10
元素 伪元素 +1
其他选择器 +0

下面举1个例子,来计算不进位的数字.

#id .link a[href]
  
#id + 100
.link + 10
a + 1
[href] + 0
结果是111.

#id .link.active

#id + 100
.ink + 10
.active + 10
结果120.

现在有2个选择器也就是说,下面的选择器权重比较高,所以下面的选择器的优先级会更高些.
也就是说先应用上面的选择器样式,再用后面的选择器样式进行覆盖.


但是我们要明白不进位数字的含义.

并不是说有11个类选择器,那么该选择器就比一个ID选择器的权重要高.

比如11个类选择器如果和ID选择器比较,计算是/*011,十位是11,百位是0*/,所以ID选择器的权重永远比类选择器要大.因为类选择器计算数字的时候是不进位的.

```
### 优先级
```
除此之外,我们还要明白顶级的优先级.

1.!import 优先级是最高的.

2.元素属性优先级高.

下面的例子会显示blue.
<style>
#test3{
   color:red;
}
</style>
<body>
    <div id="test3" style="color:blue">
            test3
    </div>
</body>


3.相同权重,后写的生效.

查看priority02.html
```
## 非布局样式(字体)
包括:
```html
字体,字重,颜色,大小,行高.

背景,边框.

滚动,换行.

粗体,斜体,下划线.
```
1.字体族
- 衬线字体 黑体 等宽字体        手写体   花体(华丽的字体) 
- serif sans-serif monospace cursive fantasy

衬线字体包括:宋体.
非衬线字体:微软雅黑.

2.多字体fallback

3,网络字体,自定义字体.

4.iconfont.(文字当图标使用.)

详情见fonts.html

```html
/*等宽字体*/
    /*monaco只能设置英文,所以中文会找默认字体来渲染*/
     font-family: "monaco";
 
 //系统找不到这些字体,就会选择设置的字体来进行渲染,再找不到就用系统默认的字体.    
 font-family: "aaaaa", "monaco", "PingFang SC";
 
 
 /*一般我们在mac平台下设置"PingFang SC",在win环境下设置"Microsoft Yahei",不知道就设置monospace.*/
 
 .chinese{
             font-family: "PingFang SC", "Microsoft Yahei", monospace;
              font-family: "Microsoft Yahei", serif;
              font-family: "serif"; 
         }
```
**字体的设置就是要适配不同的平台**

### 自定义的字体
```html
<style>
@font-face {
            font-family: "IF";
            /*跨域:要求对方服务器出示cors的头.允许跨域.*/
            /*设置网络字体,url*/
            /*还可以引用远程CSS,比如<link rel="stylesheet" href="http://xxx.com/sss.css"> ,直接调用就可以了*/
            src: url("./IndieFlower.ttf");
        }
 .custom-font{
            font-family: IF;
        }
</style>
<div class="custom-font">你好 Hello World</div>

此时显示的字体是:
Indie Flower—Network resource(12 glyphs)
Microsoft YaHei—Local file(2 glyphs)
```

iconfont:给一个手机的图标.如何变成一个字体?

 在线工具:`iconfont.cn` 图标矢量库.
 
 cellphone.加入项目,形成一套字体.自己看说明书,就可以嵌入中去了.
 
 `自定义字符是需要先有字符,然后用字体变成那样的.`
 实际上使用伪元素(::before)也可以做到,只不过它是声明在CSS当中了.
 
 **多平台下的字体设置: fallback机制.**
 
 ## 非布局样式(行高)
 主要包括:
 
 1.行高的构成.
 
 行高是由linebox来决定的,linebox是由inlinebox组成的.最高的inlinebox会决定行高的高度.
 
 2.行高相关的现象和方案.
 
 3.行高的调整.
 
 ```html
行高是由最高的linebox来撑起来的.
默认情况下是按照基线来对齐:也就是文字的底部来对齐.
居中对齐/顶部对齐: vertical-align: middle/top;
vertical-align: 5px;//向上移动5个像素
vertical-align: 0px;//底部基线居中

图片之后有空白:
原理是按照inline来进行排版.
Img遵守行高的构成,按照(Baseline)基线对齐.
基线对齐就意味着在基线到底线之间还是有一段空隙的.

空隙大小视字体大小而定,如果文字带下是是12px,那么图片空隙大小是3px.
经典的图片3px空隙问题.

去掉空隙的方法:

1.遵守垂直对齐方式.
所以我们改成按底线对齐的方式就可以了.即设置成 vertical-align: bottom;

2.修改inline为block.即 display: block;

还有inlineblock的布局,我们要记住有这个事.
```
## 非布局样式(背景)

背景: 容器底层的铺垫,不会影响容器正文的排布.

主要包括:

### 背景颜色.
```html
background
1.16进制的表示.
红色--- #FF0000;
2.rgb的表示方式.
3.hsl的表示方式. 
色相,饱和度,亮度.

色相:0-360(角度)
饱和度:0-100%
亮度:0-100%
background: hsl(0,100%,50%);
hsla:比上面多了一个透明度.
0.3的透明度
background: hsla(230,50%,65%,.3);
background: rgb(255,0,0);
透明度设置为0.3
background: rgba(255,0,0,.3);

设置为背景图:
background:url(./test.png);
```
2.渐变色背景.

>也就是线性渐变,从左到右,从上到下的渐变.左上角到右上角的渐变.中心渐变.(中间是一个颜色,向四周辐射的渐变.)
```html
/*线性渐变:从一个颜色变成另外一个颜色.(也就是从左边开始,开始颜色是红色,结束颜色是绿色.)*/
  /*按着角度写:0度是从上到下,45度是从左上角到右下角,90度是从左往右,180度从下往上*/
            /* background: linear-gradient(180deg, red, green); */
            
<!--添加多种颜色.-->
background: linear-gradient(135deg, red 0, green 10%, yellow 50%, blue 100%);    
```
3.多个背景的叠加
>可以为一个容器指定不同的背景,或者两个2渐变色.
```html
<!--多个背景的叠加-->
 /*45度角开始,0-49.5%是透明的,49.5%-50.5%是绿色的*/
background: linear-gradient(135deg, transparent 0, transparent 49.5%, green 49.5%, green 50.5%, transparent 50.5%, transparent 100%), 
linear-gradient(45deg, transparent 0, transparent 49.5%, red 49.5%, red 50.5%, transparent 50.5%, transparent 100%);
            background-size: 30px 30px;      
```
4.背景图片和属性(雪碧图)
>做背景的时候把不同的素材集中到一张图片中.好处是减少HTTP的请求.100个图标,需要下载100张图片,也就是100个HTTP图片,但是要是集中到一张图片中,用雪碧图的方式去做,那么就只需要一张图,也就是一个HTTP请求.
```
/*常规情况下是平铺的*/
height:900px;
background:red url(./test.png);
/*但是我们不想要平铺，所以设置为no-repeat*/
/*或者选择平铺的方向:repeat-x*/
background-repeat: no-repeat;
/*背景图在顶部中间出现*/
 /*background-position: center top;*/
/*具体的位置,是相对于容器来说的.*/
 background-position: 20px 30px;
/*指定背景图的大小*/
 background-size:100px 50px;
 
 /*可以添加在此元素的基线下面的外边框200px*/
 margin-bottom: 200px;
```
5.base64和性能优化.
```html
文本格式.使用base64的图片,不是一个图片,而是一个文本.
也就是将图片转化成base64.
1.在此过程中,图片体积会增大(变为原来的3/4).
2.图片由单独的文件,变为CSS里面中的文件,将CSS给撑大了.

这种模式只适合小图标.
虽然base64 在传输上具有优势,减少HTTP的连接数.
但是增大了体积的开销.
增加了解码的开销.(拿到一张图片后,先由base64转换为图片)
```
6.多分辨率的适配.
```html
适配移动端的时候.移动端的分辨率比较高.
简单的方法就是把图片缩小去做.
```


##  非布局样式(边框)

### 边框的属性:线型 大小 颜色
```html
/*线性框*/
border: 1px solid red;
/* border:5px solid red; */
/*实线框*/
/*border:5px dotted red;*/
/*虚线框*/
/*border:5px dashed red;*/

按照指定图片填充.

/*直接指定30px*/
/*border-width: 30px;*/
/*透明*/
border:30px solid transparent;
/*按整数填充*/
border-image:url(./border.png) 30 round;
/*按方块填充*/
/*border-image:url(./border.png) 30 repeat;*/
/*border-image:url(./border.png) 30;*/
```

边框背景图:用的不多
### 边框衔接(三角形)

斜切获得.
```html
/*基于基线红色边框*/
border-bottom:30px solid red;
/*基于右侧蓝色边框*/
/* border-right:30px solid blue; */

我们可以发现二者的拼接是基于斜线交接的.

/*基于左侧线性透明*/
/*border-left:30px solid transparent;*/
/*基于右侧线性透明*/
/*border-right:30px solid transparent;*/

最终剩下的图案会变成一个等边梯形.
如果直接把width设为0px,那么就直接变成了一个三角形.

border-radius---用长度值设置对象的圆角半径长度
border-radius: 100px;那么图形就会变成一个扇形.
```

## 非布局样式(滚动)
当内容比容器多的时候,就会产生滚动.

### 滚动行为和滚动条
```html
1.滚动条隐藏:visible
容器部分显示不了整个内容,它会把内容直接显示出来,撑出容器区.
2.滚动条隐藏:hidden
也就是超出容器的部分进行隐藏.
3.滚动条显示:acroll
超出容器后允许用户滚动.
4.滚动条自动显示:auto
超出容器后会滚动,只有需要的时候才会有滚动条.

 .c1{
background:red;
height:200px;
overflow: auto;
overflow: hidden;
overflow: visible;
overflow: acroll;
        }
```

## 非布局样式(文字折行)

一行盛不下,需要换行,我们需要考虑换行的问题.

是否换行?什么时候换行?在哪个地方换行?

```html
overflow-wrap(word-wrap)通用换行控制.
--- 是否保留单词.如果保留单词的话,50个字符以内不换行.

word-break 针对多字节文字.
--- 中文句子也是单词.设置句子换行...

white-space 空白处是否断行,
---很多时候是以空格作为换行的依据的,

overflow-wrap: break-word;//把单词折行.

word-break: break-all;//打断所有单词

word-break: keep-all;//所有单词都是一个单位,中文句子也会保持完整.
    
white-space: nowrap;//整个句子不换行.    
```
      
## 非布局样式(装饰性属性及其他)

### 字重(粗体) font-weight
```html
/*默认的.*/
/*粗体:400*/
font-weight: normal;
/*更粗:700*/
font-weight: bold;
/*下面比父级用的字重要大一些*/
font-weight: bolder;
font-weight: lighter;
/*范围是100-900,从最细到最粗*/
font-weight: 200;

斜体 font-style:itatic            
下划线 text-decoration
指针 cursor
```
## CSS Hack

```html
Hack即不合法但生效的写法.

主要用于区分不同的浏览器.

缺点:难理解,难维护,易失效.

替代方案:特性检测.

替代方案:针对性的加Class,    .IE6...
```
### 解决浏览器兼容性的方案
```css
一定要记住:标准属性写在前面.hack属性写在后面.
body{
    width:200;//IE,标准浏览器会生效.
    width:180px\9;//只在IE上会生效.但是会覆盖前面的东西.
}
```

## checkbox

```html
之前的雪碧图,主要设置图片的background,设position,以及背景图的大小,把各个图标合并在一起.也可以做一些纹理. 

之前也做了(border)边框的衔接,绘制了三角形.
```
**美化CheckBox的图标设置.**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>checkbox</title>
    <style>
        .checkbox{

        }
        .checkbox input{
            /*将选中框隐藏*/
            display: none;
        }
        /*注意点击label就相当于点击CheckBox*/
        /*初始化背景图片*/
        .checkbox input + label{
            background:url(./checkbox1.png) left center no-repeat;
            background-size:20px 20px;
            padding-left:20px;
        }
        /*选中就显示这张图片*/
        .checkbox input:checked + label{
            background-image:url(./checkbox2.png);
        }
    </style>
</head>
<body>
    <div class="checkbox">
        <input type="checkbox" id="handsome"/>
        <label for="handsome">我很帅</label>
    </div>
</body>
</html>
```
网址`www.thecssninja.com/demo/css_tree`

## 问题

### CSS样式(选择器)的优先级.

1.计算权重确定,谁的权重大谁的优先级高,计算权重是不进位的.

2.!import处在顶级优先级.唯一能覆盖的就是再加一个!import.

3.内联样式,直接写在元素的属性上的优先级高.

4.后写的优先级高.

### 雪碧图的作用.
原理:
```html
利用background的属性来调整图片的大小和位置.
主要是利用background-position的位移来进行定位,把不同的图标合并到一张图片上面.

```
作用:
```html
减少HTTP请求书,提高加载性能.
有一些情况下可以减少图片大小.(PNG图片)
```
### 自定义字体的使用场景.
原理
```html
用网络字体,在CSS引用定义它.
``` 
使用场景:
```html
1.宣传/品牌/banner等固定文案.
2.字体图标:把图标做成一个一个的文字.然后定义一个特别的字体,然后需要使用的地方使用图标就可以了.
```
### base64的使用.
原理:
```html
把图片进行编码,变成文本的方式,嵌入到CSS当中去使用.
```
作用:
```html
1.用于减少HTTP请求,增加了加载的性能.
2.适用于小图片.
3.Base64的体积约为原始图片大小的3/4.
```

### 伪类和伪元素的区别?

```html
伪类是一种状态:元素正在被鼠标悬停,元素是一个链接(link),此时表示一种状态.

伪元素是真的有这个元素. ::before,::after

伪类用单引号(:hover)表示.
伪元素用双引号表示.
```
### 美化CheckBox
```html
1.存在label[for]和id,也就是label[for="handsome"]指向checkbox的(id="handsome")
2.隐藏原生的input.也就是隐藏CheckBox,所有的样式由label来搞定.
3.通过 :checked+ label来切换CheckBox的样式.

```
 