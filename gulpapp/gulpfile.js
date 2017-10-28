//require gulp
//const 常量
const gulp = require("gulp");
//定义一个具体任务
gulp.task("message",() =>{
	console.log("执行具体任务，需要在终端运行gulp (空格)message(任务名)");
})
//001gulp-copy
const gulpCopy = require("gulp-copy");
//在执行任务的时候，拷贝src中的文件
//定义拷贝任务
gulp.task("copyHtml",() =>{
	//01.找到需要拷贝文件的路径(拷贝所有html文件)gulp.src("src/index.html");(拷贝具体的文件)
	gulp.src("src/*.html")
		//02.把找到的html文件拷贝到dist文件夹之下
		.pipe(gulp.dest('dist'));//destination(目标)
	
})
//002gulp-imagemin
const minImage = require('gulp-imagemin');
//定义压缩图片任务
gulp.task("imageMin",() =>{
	//找到需要压缩的图片路径
	gulp.src('src/images/*')
		.pipe(minImage())//执行图片压缩方法
		.pipe(gulp.dest('dist/images'));//把压缩之后的图片放到指定文件夹下

});
//003gulp-uglify
//定义压缩js代码任务
//01.下载模块
//02.引入模块
const uglify = require("gulp-uglify"); 
//03.定义任务
gulp.task("compress",() =>{
	gulp.src('src/js/compress.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
})
//04.在src下创建一个js文件，并随便写一个函数
//05.实现任务

/*
	常用方法：
	gulp.task--定义任务
	gulp.src--输入文件路径
	gulp.dest--输出文件路径
	gulp.watch--监听文件变化
	--node方法--
	pipe：管道
*/
//sass文件less文件
//定义sass转css任务
//01.下载sass模块
//02.引入
const sass = require("gulp-sass");
gulp.task("sass",() =>{
	gulp.src('src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest("dist/css"));
});
//01.定义一个默认任务
// gulp.task('default',() =>{//默认default，function
// 	console.log("default是必须这样写，才是默认任务");
// });
//02.定义一个默认任务
gulp.task('default',["message","copyHtml","imageMin","compress","sass"]);
//004监听任务(监听的文件夹下的文件如果有变化，通过监听下，会自动改变)
gulp.task("watch1",function(){
	gulp.watch("src/js/*.js",["compress"]);
	gulp.watch("src/images/*",["imageMin"]);
	gulp.watch("src/sass/*.scss",["sass"]);
	gulp.watch("src/*.html",["copyHtml"]);
});
//webserver
//服务器
const webserver = require("gulp-webserver");
gulp.task("webserver",() =>{
	return gulp.src("app")
			.pipe(webserver({
				port:8000,
				livereload:true,//热更新
				open:true//自动打开
			}))
});
gulp.task("watch",function(){
	gulp.watch("app",["webserver"]);
});



