var fs = require("fs");
//读取 （读取的文件路径，读取文件的格式）
var myReadStream = fs.createReadStream(__dirname+"/readMe.txt","utf8");
// console.log(myReadStream);
//01.注册事件(在这里必须叫data)
myReadStream.on("data",function(chunk){
	//返回的数据流是一段一段的
	console.log("============接受chunk================");
	console.log(chunk);
});