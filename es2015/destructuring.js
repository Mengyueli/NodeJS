//分布操作符 解构 argument参数
// let sum = function(){
// 	console.log(arguments);//是一个对象{ '0': 2, '1': 3, '2': 4, '3': 5 }
// 	// console.log(typeof(arguments));//object
// }

//es5(错误的)
//arguments.reduce(回调函数，会传两个参数) 2,3  5,4  9,5
// let sum = function(){
// 	return arguments.reduce(function(prev,curr){
// 		return prev + curr;
// 	});
// }

//es5
// let sum = function(){
// 	return Array.prototype.reduce.call(arguments,function(prev,curr){
// 		// console.log(prev,curr);
// 		return prev + curr;
// 	});
// }
// let sum11 = sum(2,3,4,5);
// console.log(sum11);

//call apply bind
// var obj = {num : 2};
// var addToThis = function(a){
// 	console.log(this);
// 	return this.num + a;
// }
// console.log(addToThis.call(obj,3));
//call方法的作用：1、为方法增加对象参数 2.改变this的指向

var obj = {num : 2};
var addToThis = function(a,b,c){
	// console.log(this);
	return this.num + a + b + c;
}
var arr = [1,2,3];
// console.log(addToThis.apply(obj,arr));//8
// console.log(addToThis.call(obj,arr));

var obj = {num : 2};
var addToThis = function(a,b,c){
	// console.log(this);
	return this.num + a + b + c;
}
var arr = [1,2,3];
let method = addToThis.bind(obj);
// console.log(method(1,2,3));


//es6 分布操作符接收外部传过来的数据
// let sum = function(...args){
// 	console.log(args);//[ 2, 3, 4, 5 ]
// }

// let sum = function(...args){
// 	return args.reduce((prev,curr) =>{
// 		return prev + curr;
// 	})
// }
// console.log(sum(2,3,4,5));//14


// let numbers = [4,6,3,8];
// let array = [1,2,...numbers,5,7];
// console.log(array);//[ 1, 2, 4, 6, 3, 8, 5, 7 ]

//ES5求最大值
// let max = Math.max(4,1,56,2);
// console.log(max);

//Es5求最大值，传数组(不行)
// let numbers = [4,36,7,9];
// let max = Math.max.apply(null,numbers);
// console.log(max);

//Es6求最大值，传数组
let numbers = [5,213,63,36];
let max = Math.max(...numbers);
console.log(max);

