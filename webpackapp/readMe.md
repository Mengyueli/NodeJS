webpack 
webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成少量的 bundle - 通常只有一个，由浏览器加载。

1.安装cli
 npm init --yes
 sudo cnpm install -g webpack
 webpack -v(查看有没有安装成功)
cnpm install webpack --save-dev


<!-- 在终端执行webpack app.js bundle.js 会自动建出bandle.js文件 -->

<!-- css文件一并打包方式 -->
<!-- 引入css-loader  通过注入<style>标签将CSS添加到DOM中-->
<!-- css-style-loader  通过 webpack 配置，CLI或内联使用 loader。-->
cnpm install style-loader css-loader --save-dev


修改了package.json 中的
"scripts": {
    "build":"webpack"
 }
 之后用下面的命令运行

npm run build 运行
npm run build


 cnpm install webpack-dev-server --save-dev
style-loader:webpack的样式加载器
<!-- 建文件过程
	终端输入
	 npm init --yes（init完package.json 文件就自动建出来了）
	 sudo cnpm install -g webpack
	 webpack -v(查看有没有安装成功)
	 cnpm install webpack --save-dev（出来node_modules文件夹）
	 cnpm install style-loader css-loader --save-dev（为了打包css文件）
	 style-loader:作用是在HTML中添加style标签，让html可以识别样式
	 css-loader: 让打包文件可以获取到css样式，并且在入口文件（app.js）中可以引入
	 自己建index.html文件
	 <script src="./dist/bundle.js"></script>路径写出口文件的路径
	 自己建一个webpack.config.js文件（这个文件会被自动识别） 在其中配置入口文件，出口文件等信息
	 建src文件，里面建css和js 文件夹，css文件夹建一个style.css文件，js文件夹建app.js和people.js 文件
	 app.js作为入口文件（入口文件只能有一个，以后要引入css文件什么的都要通过这个入口文件进行引入）细节见这两个文件
	 因为在webpack.config.js文件中设置好了出口文件的路径，名字等，所以当在终端执行webpack app.js bundle.js命令时会自动建所设置的文件夹文件
	 修改了package.json 中的
	"scripts": {
    	"build":"webpack"
	 }
 	之后用下面的命令运行（打包）
	npm run build 运行（执行就开始打包了）


	//建一个服务器实现监听
	cnpm install webpack-dev-server --save-dev
	//下面的start设置完就可以实现实时监听了（--entry入口文件 --output-filename出口文件）
	"scripts": {
	    "start": "webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js",
	    "build": "webpack"
 	 },
 	 npm run starts运行服务器




	 
 -->
<!-- 安装babel -->
 webpackapp lanou3g$ cnpm install babel-core babel-loader babel-preset-es2015 --save-dev
