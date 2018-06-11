## CSS布局

CSS布局是CSS知识体系中的重中之重!

早期以table为主(简单).

后来以技巧性的布局为主(比较有难度的).

移动端:响应式布局时必备知识.

### 常用的布局方法

table---表格布局

float浮动 + margin

inline-block 布局

flexbox布局(比较正统)


## 表格布局

table表格布局
```html
 table {
            width: 800px;
            height: 200px;
            /*设置表的边框:collapse： 相邻边被合并*/
            /*文字表现为左右居中*/
            border-collapse: collapse;
}

<table>
    <tr>
        <td class="left">左</td>
        <td class="right">右</td>
    </tr>
</table>

```
### 和表格布局相似的方法
```text
<style>
  .table {
            margin-top: 20px;
            display: table;
            width: 800px;
            height: 200px;
        }

        .table-row {
            display: table-row;
        }

        .table-cell {
            vertical-align: middle;
            display: table-cell;
        }
</style>   
<!--设定一个元素,让它长得像表格-->
<div class="table">
    <!--一行-->
    <div class="table-row">
        <!--单元格-->
        <div class="left table-cell">
            左
        </div>
        <div class="right table-cell">
            右
        </div>
    </div>
</div>
```
## 一些布局属性

### 盒子模型

从外到里面:margin(外边距) --->border(边框)--->padding(填充)--->content(内容区)

为一个盒子设置的width和height都是相对于content来说的. 

**一个盒子占用的空间和一个盒子设置的空间是不一样的.**

一个盒子的占用空间= 内容区+padding区+border区

### display/position

#### 确定元素的显示类型:

block/inline/inline-block

块级元素/内联元素/内联块级级元素

```html
<style>
        .block{
            height:200px;
            background:red;
            /*修改对齐方式*/
            vertical-align:bottom;
        }
        .inline{
            display: inline;
            background: green;
            vertical-align:bottom;
        }
        .inline-block{
            display: inline-block;
            width:200px;
            height:100px;
            background:blue;
            vertical-align:bottom;
        }
   </style>


<!--block元素有独立的宽高,默认会独占一行的.-->
    <div class="block">
        block
    </div>
<!--inline一般是文本内容,不会独占一行. 不能设置宽高-->
<div class="inline">inline</div>
    <div class="inline">inline</div>
    <!--inline-block对内表现为block,可以有宽高,对外表现为inline,与其他元素排在同一行.-->
    <div class="inline-block">inline-block</div>
```

#### 确定元素的位置

static(默认值,静态位置)/relative(相对位置)/absolute(绝对位置)/fixed(固定位置)

**relative不会因为偏移而改变布局的计算.他做出的偏移是相对于自身的content来算的**

**absolute做出的偏移是相对于body来说的,一旦设置为absolute,他就从文档流中脱离,会影响文本,但不会影响其他的布局.**

**fixed也是脱离文档流的,但是fixed是相对于屏幕的.**

**absolute是相对于什么定位哪?**

不一定是相对于body定位的.

absolute是相对于最近的父级elative或者absolute来定位的.也就是说absolute遵循就近原则.

**层级问题.**

默认情况下,会按照顺序去层叠,但是要想改变它的层叠顺序的话,我们就要设置`z-index=2`

```
/*设置越高,层级越高,也就越在上面*/
z-index: 2;
```

## flexbox布局

1.flexbox称为弹性盒子,也就是每个盒子是可以伸缩的.

2.盒子本来就是并列的.所以我们只需要解决并列的问题.

3.指定宽度即可.

```html
//自定义宽度
 .flex1{
    background:red;
    /*要固定宽度*/
    width:50px;
    flex:none;
}
//要几份
.flex2{
    background:red;
    margin:5px;
    flex:2;
}
//剩下的均分
.flex{
    background:red;
    margin:5px;
    /*占一份flex*/
    flex:1
}
```
 
### flex问题
主要存在于兼容性上,IE或者低版本的浏览器是不支持flex的.

版本更迭很快,语法可能变化了很多.移动端,微信小程序也是支持的.

## float布局

元素**浮动**之后,会脱离**文档流**,但是不脱离**文本流**.

**查看04float.html中p1与p2的分布.**

```text
<div class="container">
        <span class="p1">
            float
        </span>
        <!--尽管float没有占据p2的空间,但是把p2的文字排挤出去了.看看效果就知道-->
        <div class="p2">
            很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字很长的文字
        </div>
    </div>
```
float元素对自身的影响:

### 形成"块"(BFC).
    
    **float属性使内联元素具备了宽高的属性.**
    
我们注意到上述p1,是在span里面的,span是一个inline元素.所以不能设置宽高,但是由于之前设置了float:left,所以转换成了"BFC",也就是块,于是就具备了宽高的属性.

但是要是把`float:left`去掉,他就不会具备宽高这个属性了.
```text
.p1 {
    background: green;
    /* float: left; */
    width: 200px;
    height: 50px;
}
```
### 位置尽量靠上,位置尽量靠左
元素宽度能保证的情况下,float尽量靠上,尽量靠左,float宽度不够,float会往下掉.


### 对兄弟元素的影响

上面贴非float元素.旁边贴float元素.

不影响其他块级元素的位置.影响其他块级元素内部文本.

### 对父级元素的影响和清除浮动

从布局上"消失",会造成高度崩塌.

float width=100px,我们期望父级元素撑成100px,但是父级里面没有其他的元素能够撑起100px的话,父级的高度就会变成0.

我们要想让他自己管自己.

也就是让他拥有float的属性,让内联元素具备BFC的属性,内联元素就可以具备像块级元素一样可以管理自己的宽高了.

#### 第一种方式
```text
/*元素超出的时候,让其自动滚动.*/
/*overflow: auto/hidden;*/
```

#### 第二种方式
或者添加一个别的元素撑起来,父元素自己撑不起来高度,我们就要别人来帮它来撑起高度.

也就是添加一个元素,将两侧的浮动清除,并设置为块级别的元素,并且隐藏它的内容.并把高度设置为0,就基本可以了.

我们可以找到container2的之后的伪元素.来进行设置.
```text
 .container2::after{
        content: 'aaa';
        /*保证这些元素的左右两边都是干净的,没有其他元素.*/
        clear:both;
        display: block;
        /*隐藏aaa*/
        visibility: hidden;
        /*直接把后面的高度设置为0*/
        height:0;
    }
    
 <div class="container container2">
    <!--元素宽度能保证的情况下,float尽量靠上,尽量靠左,宽度不够,会往下掉-->
    <span>写几个字</span>
    <span class="p1">
        float
    </span>
    <span class="p1">
        float
    </span>
</div>
```
### float布局

2栏的设置:
左边的向左浮动,浮动之后,右边给一个margin-left,左边多宽,右边就多宽.
即右边可以下面这样设置:
```text
 /*相当于把左边的给空出来,正好把文本显示出来,此时不用管absolute带来的脱离文档流的问题了.*/
/*margin-left: 200px;*/
/*要想移动文字,就可以添加填充padding了*/
/*padding-left:200px;*/
```

三栏的设置:
```text
.middle{
/*左右各空出200px;*/
margin-left:200px;
margin-right:200px;
        }
```
浮动的元素会尽量的往上靠,但是中间元素没办法绕过去.但是我们可已调整位置,这样就可以解决了.

### 如何用margin和float实现两栏和3栏?上面就是
```text
利用absolute也可以做到,但是我们尽量不要这样做,因为他会脱离文档流.

推荐使用float类型.来进行布局.
```

## inline-block布局

之前的布局我们几乎都是在做横向的布局.

但是inline-block要求我们:

1.像文本一样来排列block元素.

2.没有清除浮动等问题.

3.需要处理间隙.

```text
处理方法1:
把inline-block当做文字,即设置font-size=0就可以规避掉间隙的问题.

处理方法2:
去掉块级元素之间的空白,即div之间的间距.
就是让两个标签挨着.
<div></div><div></div>
```
但是inline-block没有像使用float加margin这样更加舒服.

### 响应式设计和布局

响应式设计通俗的讲就是在不同的设备上都能正常的使用,PC&phone.

我们在工作中一般处理到的就是屏幕大小的问题.

是否支持鼠标,是否支持读屏软件,是否支持一些样式.

但是我们现在只考虑屏幕大小.

主要方法:

1.隐藏 + 折行 + 自适应空间.

也就是说将不重要的部分隐藏,像导航,个人信息,一般采用点击菜单弹出来的方式显示.

折行:特性列表.

一行显示一个/2个.

自适应空间:logo是固定的,其他自适应就可以了.

rem: 通过HTML的字体大小来确定元素大小的办法. 针对不同大小的屏幕.给出不同字体的字号.元素就会跟着缩放.
viewport:确定整个界面放到多大.
media query:媒体查询.根据不同设备的特性来确定不同的样式.为小屏幕写一段样式,为小屏幕写一段样式.

 #### 适配移动端
 
1. 加viewport ,也就是让可视区域 = 屏幕大小.

2.通过隐藏的方式适配移动端.
```text
 /*把左边不重要的东西隐藏*/
        /*媒体样式:也就是这段代码在宽度<=640px的设备上生效*/
        @media (max-width: 640px){
            .left{
                display: none;
            }
        }
```

3.页面宽度,等比放大.
```text
  <meta name="viewport" content="width=320">
       <script>
          // 实时获取屏幕的宽度
          // 取到之后,比例是多大,判断width是多大.然后做动态适配.
          console.log(window.innerWidth);
      </script>
```
4. 根据font-size去修改rem的值,就可以进行移动端的适配.

像素意味着大小不能改变.但是我们可以按照上述方法来进行改变.

然后把移动端@media的设置,范围大的放在上面,范围小的放在下面.

但是我们可以改另外一种单位,让其可变,即rem.

**rem的设置与font-size有关.**
```text
font-size: 20px;

我们可以设置为:
width = 9rem; = 180px
height = 9rem; = 180px
line-height = 9rem; = 180px
border-redius: 4.5rem; = 90px
margin:.3rem; = 6px
```

对精确度比较高的地方,不要使用它来布局,因为可能会有小数部分,难以处理.

## 主流网站的布局

float的布局,也就是float往左,float往右.

苹果网站: flexbox布局.

### 题目

1.实现两栏(三栏)的布局的方法.
```text
1.表格布局.
2.float+margin的布局.(兼容性好),要清清除浮动(overflow:auto).或者添加元素,将其撑起来.
3.inline-block布局.(会有间隙需要处理)
4.flexbox布局(对于兼容性并不是太好.)
```

2.position:absolute/fixed有什么区别?
```text
主要就是参照物不同,前者相对最近的absolute/relative来进行定位.

后者是相对于屏幕(移动端相对于viewport,早期并不是,但是老设备不能使用.)
```

3.display:inline-block的间隙?
```text
原因:就是存在空白字符,空白字符会产生间距.

解决方案:消灭字符或者消灭间距.

1.把标签直接写在一起,中间不留空白.

2.直接把字体设置为0.
```
4.如何清除浮动?
```text
为什么消除浮动?
浮动元素它不会占据父元素的布局空间.
也就是父元素布局的时候不会管浮动元素,有可能浮动元素会超出父元素,对其他的元素造成影响.

所以作为一个父元素,一定要清除浮动,保证对外边没有影响.

解决方式:
1.让盒子负责自己的布局        overflow:hidden(auto)
2.添加元素,放到浮动元素的后面.保证父元素一定包含浮动元素,并清除两侧的浮动.      ::after{clear:both}

```
5.如何适配移动端页面?
```text
1.把页面的viewport进行适配,页面宽度要和移动端视频.
2.大小方面的适配:rem/viewport/media query
3.设计上:隐藏 折行 自适应
不重要的隐藏.
在PC端横排的,我们可以竖排,甚至少排.
留下自适应的空间.
```





