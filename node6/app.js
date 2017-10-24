//初识express
var express = require("express");//得到一个方法
var app = express();//调用方法，得到一个对象
app.get("/",(req,res) => {//"127.0.0.1:3000",箭头函数(回调函数)
	// console.log("Hello World!");
	// console.log(req.url);//当前的路径
	// console.log(req);
	res.send("This is home page!");//res.end();
});
app.get("/contact",(req,res) => {//有多少页面就写多少app.get
	res.send("this is contact page!");
})
//路由参数(/:结尾，一般是以id结尾)
app.get('/blogs/:sbqid',(req,res) =>{
	console.log(req);//Url属性里： params: { sbqid: '121' },
	res.send("具体的路由参数为：" + req.params.sbqid);
})
app.listen(3000);//第二个参数可写可不写（公司的是外网）
