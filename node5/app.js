//路由(没有加载环节，直接跳转)
// var http = require("http");
// var fs = require("fs");
// var server = http.createServer(function(req,res){
// 	//favicon解决掉
// 	if(req.url !== "/favicon.ico"){
// 		// console.log(req.url);
// 		if (req.url == '/' || req.url == "/home") {
// 			res.writeHead(200,{"Content-type":"text/plain"});
// 			res.end("这是Home主页");
// 		}else if(req.url == "/about"){
// 			res.writeHead(200,{"Content-type":"text/plain"});
// 			res.end("这是About页面");
// 		}else if(req.url == "/contact"){
// 			res.writeHead(200,{"Content-type":"text/plain"});
// 			res.end("这是联系我们页面");
// 		}else{
// 			res.writeHead(200,{"Content-type":"text/plain"});
// 			res.end("404:找不到您要的页面");
// 		}
// 		res.end("Hello World");
// 	}
// 	// res.writeHead(200,{"Content-type":"application/json"});
// 	// var myReadStream = fs.createReadStream(__dirname + "/users.json","utf8");
// 	// myReadStream.pipe(res);
// 	// res.end(JSON.stringify(users));
	

// });
// server.listen(3000,"127.0.0.1");
// console.log("server is running");

//练习
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	console.log("已连接");
	var myReadStream_home = fs.createReadStream(__dirname + "/home.html","utf8");
	var myReadStream_contact = fs.createReadStream(__dirname + "/contact.html","utf8");
	var myReadStream_about = fs.createReadStream(__dirname + "/about.html","utf8");
	if(req.url !== "/favicon.ico"){
		if(req.url == "/home"){
			res.writeHead(200,{"Content-type":"text/html"});
			myReadStream_home.pipe(res);
		}
		else if(req.url == "/about"){
			res.writeHead(200,{"Content-type":"text/html"});
			myReadStream_about.pipe(res);
		}
		else if(req.url == "/contact"){
			res.writeHead(200,{"Content-type":"text/html"});
			myReadStream_contact.pipe(res);
		}
		else{
			res.writeHead(200,{"Content-type":"text/plain"});
			res.end("404:找不到您要的页面");
		}
	}

});
server.listen(8000,"127.0.0.1");