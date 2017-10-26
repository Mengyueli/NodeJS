# lesson-webpack
### 模块打包器（module bundler）
### 具体步骤：
	01.安装全局的 
		*npm init --yes
		*cnpm install -g webpack
	02.cd 到webpackapp文件夹下
		*npm init --yes
		*cnpm install webpack --save-dev
	03.自己的文件index.html
		文件夹 src：js文件>app.js和people.js
				css文件>style.css
		index.html中引入./dist/bundle.js
		app.js作为入口文件，所有需要引入的文件或模板或插件都可在其中引入
		//引入js文件的时候直接引入即可
		//引入css文件时，需要引入两个模块style-loader和css-loader
	04.修改package.json 中的
		"scripts": {
		    "build":"webpack"
		 }
		 build名字自取
		npm run build 运行	
	05.配置文件
	建立webpack.config.js（文件名可以被自动识别）
	进行文件配置和模块配置以及第三方插件配置
	模块：babel
		*1.安装babel
		cnpm install babel-core babel-loader babel-preset-es2015 --save-dev 
		*2.文件配置（webpack.config.js）
		模块配置




