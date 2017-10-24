//引入bodyParser(url传过来的是进制流的形式：body-parser解析)
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var data =[{item:"Dog"},{item:"East"},{item:"West"}];
module.exports = function(app){
	// console.log(app);
	//查询
	app.get("/todo",(req,res)=>{
		// res.send(req.url);
		res.render('todos',{todos:data});
	});
	//添加
	app.post("/todo",urlencodedParser,(req,res)=>{
		//拿到传输的数据
		// console.log(req.body);
		data.push(req.body);
		res.json(data);
	});
	//删除
	app.delete("/todo/:name",(req,res)=>{
		// console.log(req.params.name);
		//filter遍历数组es6新出的 
		//ES6 == ES2015 （ecma）专门针对数组的方法：(for...of filter map)
		//filter:过滤(条件满足的留下，不满足的干掉)
		// data = data.filter(function(todo){
		// 	var value = todo.item !== req.params.name;
		// 	console.log(value);
		// 	return value;
		// })
		for(var i in data){
			if(data[i].item == req.params.name){
				data.splice(i,1);
			}
		}
		res.json(data);
	});
}