// 定义一个简单的函数
function say(word) {
	console.log(word);
}

// 将某个函数作为参数传递给另一个函数.
function execute(someFunction,value) {
	someFunction(value);
}

execute(say,"hello")

// 定义了要传递的某个特定具体的函数
execute(function(word){console.log(word)},"Hello")