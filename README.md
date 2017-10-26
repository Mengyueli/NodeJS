# lesson-jsonServer
### 快速伪造后台接口 可以用来测试接口是否可用
### 步骤：
	01.安装全局的json-server
		（mac：sudo cnpm install -g json-server）
	02.cd到相关文件JSONSERVER下，初始化 cnpm init --yes
	03. 安装json-server
		(cnpm install json-server --save-dev)
	04.package.json
		修改："scripts":{
			"名字1":"json-server --watch json文件名字2.json"
		}
	05.新建一个json文件名字2.json文件（与上次文件名相同），并添加相应的json数据(一定要有id)
	06.终端运行 cnpm run 名字1
		找到home，粘贴下面的网址并运行到浏览器
	07.下载postman并安装
	08.操作数据
		*1.GET：get方法（查）
			详情参考JSONSERVER文件夹下的readMe.md直接粘贴到地址栏就可以访问到相应的内容
		*2.POST:
			需要修改headers和Body，key：Content-Type，Value：application/json
			http://localhost:3000/users就可以直接访问了
		*3.PATCH：添加
			在body>Raw里直接填写要添加的对象即可
		*4DELETE：删除
			地址/要删除的id
		*5PUT:修改
			地址/要修改的id,在body>Raw里直接填写要修改的对象即可 



