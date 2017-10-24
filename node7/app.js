var express = require("express");
var app = express();
//设置，告诉服务器用的是ejs
app.set("view engine","ejs");//（view engine是固定的）
//style.css引入的时候(路径，文件名)
// app.use("/assets",express.static(__dirname +'/assets'));
app.use("/assets",express.static("./assets"));
app.get("/",(req,res) =>{
	//浏览器不能直接识别ejs
	// res.sendFile(__dirname + "/views/index.ejs");
	//可以解析ejs文件(返回给浏览器的时候是浏览器可以识别的)模板引擎：用于网站的模板引擎就会生成一个标准的HTML文档
	res.render("index");
});
app.get("/contact",(req,res) =>{
	// res.sendFile(__dirname + "/views/contact.ejs");
	res.render("contact");
});
//路由参数
app.get("/blogs/:sbqid",(req,res) =>{
	// var sbqdata = {title:"博客1",author:"henry",body:"this is first blog"};
	var sbqdata = [{title:"博客1",author:"henry",body:"this is first blog"},
					{title:"博客2",author:"bucky",body:"this is second blog"},
					{title:"博客3",author:"emily",body:"this is third blog"}]
	res.render("blog",{id:req.params.sbqid,data:sbqdata});//跳转的文件(view可以自动识别)
});

app.listen(3000);
//express没有办法与html进行对接，所以需要一个模板引擎(ejs)