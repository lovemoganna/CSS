## CSS预处理器
```text
基于CSS的另一种语言.
通过工具编译成CSS.
添加了很多CSS不具备的特性.
能提升CSS文件的组织
```

### CSS预处理器

less -基于Node,编译速度很快.

SASS/Scss-ruby,编译慢.

功能:
```text
1.嵌套,反应层级和约束.
2.变量和计算,减少重复代码.
3.Extend和Mixin代码片段.
4.循环 适用于复杂有规律的样式.
5.import CSS文件模块化.
```

## less嵌套
```text
命令:
lessc 1-nest.less > 1-nest.css
```

## sass命令
```text
node-sass --output-style expanded 1-nest.scss > 1-nest.css

```

## less变量
```
@fontSize: 12px;//带单位运算
@bgColor: red; //背景颜色
@textBgColor: yellow;//文本颜色
@linkBgColor: #f66;//链接颜色
```

## sass变量
```text
$fontSize: 12px;
$bgColor: red;
```
## less mixin

mixin主要是用来处理代码的复用.
```text
假如说我们要在nav & content中使用 block的样式?
在HTML里面是下面这样定义的.


.block(@fontSize){
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);
    .nav{
        .block(@fontSize);
    }
    .content{
        .block(@fontSize + 2px);
        &:hover{
            background:red;
        }
    }
}


<div class = "block nav"></div>
<div class = "block content"></div>

事实上是block这个class一直在被复用.但是CSS本身并没有为我们提供复用这段代码的功能.


//指定fontsize这个参数
//.block是一个mixin,编译后就会消失,其实是跑到调用它的位置去了,
.block(@fontSize){
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

这样的好处就是我们可以直接在样式表中完成样式的复用.
```

## sass mixin

```text
//强制显示声明@mixin.   sass的参数使用$符号.
@mixin block($fontSize){
    font-size: $fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}
```

我们可以设置一个清除浮动,原子类:指定很多独立的样式.

行高,行距,字体.

## less extend

产生的背景:
```text
.wrapper .nav {
  font-size: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.wrapper .content {
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

我们想改造成下面的样式,这样可以避免很多的代码重复使用.
```text
.wrapper .nav,
.wrapper .content {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.wrapper .nav {
  font-size: 12px;
}

.wrapper .content {
  font-size: 14px;
}
```

但是extend可以为我们避免这些问题.

```text

@fontSize: 12px;
@bgColor: red;

.block{
    font-size: @fontSize;
    border: 1px solid #ccc;
    border-radius: 4px;
}

body{
    padding:0;
    margin:0;
}

.wrapper{
    background:lighten(@bgColor, 40%);
    //这就代表.nav的演示是来自于.block扩展的.
    .nav:extend(.block){
        color: #333;
    }
    .content{
        //也可以采用拼接的方式来写.这样可能可读性会好点.
        &:extend(.block);
        &:hover{
            background:red;
        }
    }
}

```
## sass extend 


extend 为我们解决了mixin带来的代码重复的问题.提取公共样式.

但是mixin便于维护.因为它控制的就是变量.

## less loop(循环)

先生成后调用的情况.
```text
.gen-col(@n) when (@n > 0){
    .gen-col(@n - 1);
    .col-@{n}{
        width: 1000px/12*@n;
    }
}

.gen-col(12);
//递归,自调用,符合条件就执行,不符合就退出.
```

```text
n=1的时候.
gen-col(1) when (1 > 0){
          .gen-col(1 - 1);// 此时n= 0,返回开头的条件判断是不成立的.
          但是会直接调用
          .col-@(1){....}
          
接着往上一步走,n =2的时候.
gen-col(2) when (2 > 0){
          .gen-col(2 - 1);// n  =1 ,成立.
            调用.col-@(2){...}    
一直到 n =12.并调用 .col-@(12){...}      
```

如果是下面的这种先调用再生成的话.

```text
.gen-col(@n) when (@n > 0){
    .col-@{n}{
            width: 1000px/12*@n;
        }
    .gen-col(@n - 1);
}

.gen-col(12);//那结果自然是从 12 - 1 了.

```

## sass loop
值得注意的是sass支持for循环
```text
//sass支持if的格式
 @mixin gen-col($n){
     @if $n > 0 {
         @include gen-col($n - 1);
         .col-#{$n}{
             width: 1000px/12*$n;
         }
     }
 }

 @include gen-col(12);

//sass支持for循环
@for $i from 1 through 12 {
    .col-#{$i} {
        width: 1000px/12*$i;
    }
}

```
## less import(模块化)

也就是我们可以按照CSS的模块来组织文件.
```text
//不会做任何合并,只能一个一个区加载,会增加HTTP连接数,会造成性能问题.
//less预处理在经过模块化整合,编译完毕后会把他们整合在一个CSS文件里面.

//预处理器是可以跨文件使用的.
@import "./6-import-variable";//定义变量
@import "./6-import-module1";//使用上面定义的变量
@import "./6-import-module2";

//如下
//@import "logo"; //导入logo模块.
//@import "header";//导入头部模块.
//@import "nav"; //导入导航模块.
//@import "article"; //导入文章模块.
//@import "footer"; //导入底部模块.
```

## 总结

CSS预处理器主要做的事情:
```text
嵌套 反映层级和约束

变量和计算,减少重复代码

Extend 和Mixin 代码片段

循环使用于复杂有规律的样式

import CSS文件模块化

```

## CSS预处理器框架

SASS 里面最出名的就是 Compass框架.(兼容性,获取图片宽高.)

Less 里面最出名的就是 Lesshat/EST(百度).

框架就是提供现成的mixin.类似JS类库,封装常用功能.

要记住一点 ::before ::after 要想显示里面的元素,必须里面配置content 这一项.

```
要注意,只要没有content,伪元素就不会显示.如下所示:
.my-triangle::after{
    content: ' ';
    .triangle(top left, 100px, red, side);
}
//要注意,只要没有content,伪元素就不会显示.
```


