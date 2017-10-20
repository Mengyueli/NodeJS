
//自己创建的文件要加上文件路径
var stuff = require("./module");
//stuff接受到的是一个对象
console.log(stuff.counter(['1','2','3']));
console.log(stuff.adder(1,2));
console.log(stuff.pi);