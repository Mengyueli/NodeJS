var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	/*
	*text/plain:返回的是纯文本
	*text/html:返回的是html
	*application/json:返回的是json
	*/
	// res.writeHead(200,{"Content-type":"text/plain"});
	// res.writeHead(200,{"Content-type":"text/html"});
	res.writeHead(200,{"Content-type":"application/json"});
	// var myReadStream = fs.createReadStream(__dirname + "/index.html","utf8");
	//1.请求json数据
	// var myReadStream = fs.createReadStream(__dirname + "/users.json","utf8");
	// myReadStream.pipe(res);
	//2.后台返回的是一个对象,转化成json返回给客户端
	var users = {
		"name":"Henry",
		"age":"30",
		"gender":"male"
	};
	res.end(JSON.stringify(users));
});
server.listen(3000,"127.0.0.1");
console.log("server is running");