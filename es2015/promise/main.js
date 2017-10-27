//严格模式
"use strict";
//在函数内，严格模式，
// function worthless(){
// 	console.log(this);//undefined
// }
// worthless();

//实例化
let myPromise = new Promise((resolve,reject) => {
//resolve成功的话，reject失败的话
	setTimeout(() =>{
		resolve("成功的时候会显示这句话");
	},1000);
	// setTimeout(() => {
	// 	reject("error：网络连接失败");
	// },500)

});
//成功的话执行第一个回调函数，失败的话执行第二个
// myPromise.then((data) =>{
// 	console.log(data);
// },(err) => {
// 	console.log(err);
// });
// console.log(myPromise);
//正式的写法
// myPromise.then((data) => {
// 	console.log(data);
// })
// .catch((err)=>{
// 	console.log(err);
// }) 


let myPromise2 = new Promise((resolve,reject) =>{
	setTimeout(() =>{
		resolve("队列中的第二个成功时调用的数据");
	},1500);
});
Promise.all([myPromise,myPromise2])
	.then((data) =>{
		// console.log(data);
	})
	.catch((err) =>{
		// console.log(err);
	})

/*
	*Promise:
	*then():第一个回调函数在成功时触发，第二个在失败时触发
	*catch():主要负责捕捉异常错误信息

*/

//json placeholder的数据
fetch("http://localhost:3000/users")
	.then((res) => {
		//解析拿到的res
		res.json().then((data) => {
			console.log(data);
		})
		
	})
	.catch((err) => {
		console.log("error：请求失败");
	});