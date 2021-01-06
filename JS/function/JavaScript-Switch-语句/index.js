/*

switch 语句用于基于不同条件执行不同动作

switch(表达式) {
     case n:
        代码块
        break;
     case n:
        代码块
        break;
     default:
        默认代码块
} 

代码解释：

    计算一次 switch 表达式
    把表达式的值与每个 case 的值进行对比
    如果存在匹配，则执行关联代码


例如下面这个例子,

getDay() 方法返回 0 至 6 之间的周名数字（weekday number）。

(Sunday=0, Monday=1, Tuesday=2 ..)
 */

var day;

switch (new Date().getDay()) {
    case 0:
        day = "星期天";
        break;
    case 1:
        day = "星期一";
         break;
        day = "星期二";
         break;
    case 3:
        day = "星期三";
         break;
    case 4:
        day = "星期四";
         break;
    case 5:
        day = "星期五";
         break;
    case 6:
        day = "星期六";
}

console.log("今天是" + day);

switch(req.url) {
	case "./form":
		if (req.method == "POST") {
			console.log("[200]" + req.method + " to" + req.url)
			
		}
}