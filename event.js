//重要的事件
//events是系统提供好的模块（注意：要是引用自定义的模块一定要有路径）
var event = require('events');
//事件驱动
//1.实例化事件对象
var myEmitter = new event.EventEmitter();
//2.注册事件
myEmitter.on("sbqEvent",function(msg){
	console.log("sbqEvent事件被触发！");
	console.log(msg);
});
//3.激活事件
myEmitter.emit("sbqEvent",456);

