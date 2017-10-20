//在Nodejs中经常使用函数表达式
//正常
function sayHi1(){
	console.log('hello world');
}
//函数表达式 （右左法则：函数表达式比正常函数执行快，先执行等号右边的）；
var sayHi2 = function(){
	console.log('Hello MiaoJie!');
}
// sayHi();//Hello MiaoJie!(函数只有在调用的时候才会保存在内存中)

//函数回调
function callFunction(foo){
	foo();
}
callFunction(sayHi2);
