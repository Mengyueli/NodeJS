let name = "Henry";
console.log(name);
//let & var 区别
// let name = "Henry";
// console.log(name);
//let & var 的区别
//let拥有域的概念

//var函数
// function sayName(){
//   var name = "Henry";
// }
// sayName();
// console.log(name);//undefined
//在js中，var的变量作用域仅限于函数中

//let函数 if for
// function sayName(){
//   let name = "Henry";
// }
// sayName();
// console.log(name);//undefined

//if
// if(true){
//   let name = "Henry";//undefined
//   var name = "Henry";//Henry
// }
// console.log(name);
// for(let i = 0;i<10;i++){
//   console.log(i);
// }
// console.log("循环外",i);//var 可以打印出10 let:i is not defined
{
  let name = "Henry";
}
console.log(name);
//总结let作用域仅限于自身的{}内

//常量是在程序运行过程中，不可以被改变的量
const API_KEY = "onfdfa64";
// API_KEY = "465";
console.log(API_KEY);
//var 和let可以改变变量的值，常量不会

//template模板语法
var firstName = "Henry";
var lastName = "Wu";
// console.log("我的全名是：" + firstName + lastName);
console.log(`我的全名是:${firstName}${lastName}`);