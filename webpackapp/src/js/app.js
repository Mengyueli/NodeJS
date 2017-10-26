// alert("Hello World!");
// alert(require("./people.js"));//自己定义的文件同路径下也要写路径

/*loader是加载器
  webpack loader 会将这些文件（.css, .html, .scss, .jpg, etc.)转换为模块，
  而转换后的文件会被添加到依赖图表中。也就是可以借助对应的加载器进行引入了*/

/*style-loader:作用是在HTML中添加style标签，让html可以识别样式
  css-loader: 让打包文件可以获取到css样式，并且在入口文件中可以引入*/
//require之前要在终端下载style-loader，css-loader
//引入style.css
// require("!style-loader!css-loader!./style.css");//在webpack.config.js文件配置loaders之前要这么写，配置之后只需要写css文件的路径就好了
require("../css/style.css");
let people = require("./people.js");//自己定义的文件同路径下也要写路径
// console.log(people);
// console.log(people[0].name);
//cnpm install jquery --save-dev 命令行中输入
//引入第三方类库
let $ = require("jquery");//引入了它就可以使用jQuery

// $("body").append(`<h1>${people[0].name}</h1>`);
$.each(people,function(key,value){
	$("body").append(`<h1>${people[key].name}</h1>`);
})