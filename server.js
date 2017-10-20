//搭建一份服务器
//1.先引入模块，引入之后会返回一个对象，返回对象之后用这个对象调用一个方法
var http = require('http');
//回调函数的触发：listen触发之后会返回两个参数
var server = http.createServer(function(req,res){
	console.log("客户端和服务器已经建立通讯" + req.url);
	//服务器给客户端返回东西 返回的时候(数据是html数据或json数据)要用响应头，(200是网络状态码)(只要在服务器写了东西都要在终端重启)
	res.writeHead(200,{"Content-type":"text/plain"});
	res.end('Hey NodeJS');
});
//监听 1：端口号 2：主机地址
//浏览器输入127.0.0.1会触发
server.listen(8080,'127.0.0.1');
console.log('server is running....');
