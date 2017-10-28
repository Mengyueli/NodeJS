//01.合并css
//只要一运行grunt就会执行，会传过来grunt对象
module.exports = function(grunt){
	//2.配置grunt方法
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),//package
		//css压缩合并
		cssmin:{
			combine:{//可以改
				files:{
					"app/css/style.css":["app/css/background.css","app/css/fontsize.css"]//1：合并完之后文件的名字2:

				}
				
			}
		},
		//压缩js
		uglify:{
			dist:{
				files:{
					"app/js/main.min.js":["app/js/main.js"]
				}
			}
		}
	});
	//加载uglify(cssmin)的任务插件
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default",["cssmin","uglify"]);

	//01.注册任务列表("default",'要执行的',回调函数)
	// grunt.registerTask("default",'',function(){
	// 	//打印
	// 	grunt.log.write("在终端运行grunt命令，就会执行这句话");
	// })
}
//02.压缩代码