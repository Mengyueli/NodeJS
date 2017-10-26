
/*这个文件会自动识别*/
//nodejs里提供的模块
// const path = require("path");
module.exports = {
	//配置入口起点（入口文件）
	entry:"./src/js/app.js",
	//出口文件（ webpack 如何输出结果的相关选项）
	output:{
		path:__dirname+"/dist",
		// path:path.resolve(__dirname);
		filename:"bundle.js",

	},
	//模块配置(第三方库，加载器，插件)
	module:{
		/*加载器*/
		/*
		loaders是一个数组，其中的元素是我们使用的所有loader
		test是加载器要匹配的文件后缀正则，
		loader是使用的加载器，
		“!”用来分隔不同的加载器。
		上述loader配置表示，webpack在打包过程中，遇到后缀为css的文件，就会使用style-loader和css-loader去加载这个文件。*/
		loaders:[
			{
				test:/\.css$/,//拿到所有css文件
				loader:"style-loader!css-loader"
			},
			{
				test:/\.js$/,
				loader:"babel-loader",
				//哪一个文件不需要转换
				exclude:/node_mudules/,
				//执行我们要加载谁
				query:{
					presets:["es2015"]
				}
			}
		]

	}
}