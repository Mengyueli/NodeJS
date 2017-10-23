var http = require("http");
var fs = require("fs");
//读取文件流 （读取的文件路径，读取文件的格式）
// var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);
//01.注册事件(在这里必须叫data)
//写入文件流
// var myWriteStream = fs.createWriteStream(__dirname+"/writeMe.txt");
// myReadStream.on("data",function(chunk){
// 	//返回的数据流是一段一段的
// 	// console.log("============接受chunk================");
// 	// console.log(chunk);
// 	myWriteStream.write(chunk);
// });

//管道(nodejs提供的方法)
//拿到数据
// myReadStream.pipe(myWriteStream);//自动化构建工具也会用到
//创建服务器
var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-type":"text/plian"});
	var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
	myReadStream.pipe(res);
});
server.listen(3000,"127.0.0.1");
console.log("server is running");

