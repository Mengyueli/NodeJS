//系统提供好的fs模块
var fs = require("fs");
//同步读取文件
//fs.readFileSync(path[, options])
var readMe = fs.readFileSync('readMe.txt','utf8');
// console.log(readMe);
//同步写入文件
// fs.writeFileSync('writeMe.txt',readMe);
//每次都次重新写入，会覆盖原来的
fs.writeFileSync('writeMe.txt','Hello World');
//fs.writeFileSync(file, data[, options])

//异步 读取&写入
fs.readFile("readMe.txt","utf8",function(err,data){
	if (err) throw err;//抛出异常
	// console.log(data);
});
// console.log(123);
// fs.writeFile("writeMe.txt","Hello Everybody",function(err,data){
// 	if(err) throw err;
// 	// console.log(data);
// })
//异步读取文件并将读取的文件内容写入到writeMe中
// fs.readFile('readMe.txt',"utf8",function(err,data){
// 	if(err) throw err;
// 	fs.writeFile('writeMe.txt',data);
// })
//删除文件
fs.unlink('writeMe.txt',function(err){
	if(err) throw err;
});
//创造文件夹
fs.mkdir("stuff",function(err){
	if(err) throw err;
});

fs.rmdir("stuff",function(err){
	if(err) throw err;
});