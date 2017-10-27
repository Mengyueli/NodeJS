//箭头函数
// let add = (a,b) => {
//   return a + b;
// }
// console.log(add(3,2));

//练习
let numbers = [5,6,34,6];
//将数组中的值进行翻倍
// let arr = [];
// for(let i = 0;i<numbers.length;i++){
//   arr.push(numbers[i] *2);
// }
// console.log(arr);
let doubles = numbers.map(n =>{//只有一个参数可以这样写(n)括号省去
  return n*2;
});
//map遍历数组，调用时会有一个回调函数(每一个元素都给了回调函数作为参数)

// console.log(doubles);

//箭头函数2
// let person = {
//   name:"Henry",
//   sayName:function(){
//     console.log(`Hello ${this.name}`);
//   }
// }

//这样不行
// let person = {
//   name:"Henry",
//   sayName:() =>{
//     console.log(`Hello ${this.name}`);//name is undefined
//   }
// }

//es6中，框架的对象要这样写
// let person = {
//   name:"Henry",
//   sayName(){
//     console.log(`Hello ${this.name}`);
//   }
// }
// person.sayName();

//实现es5数组遍历（this指向找不到的时候直接指向window）
// let person = {
//   name:"Henry",
//   hobbies:["打篮球","写代码","王者荣耀"],
//   showHobbies:function(){
//   	let self = this;
//     this.hobbies.forEach(function(hobby){
// 	    console.log(this);//windows
// 	    console.log(`${self.name}的爱好是${hobby}`);
//     })//同map方法
//   }
// }
// person.showHobbies();
                  
//实现es6数组遍历
let person = {
  name:"Henry",
  hobbies:["打篮球","写代码","王者荣耀"],
  showHobbies(){
    this.hobbies.forEach((hobby) => {
	    console.log(`${this.name}的爱好是${hobby}`);
    })//同map方法
  }
}
person.showHobbies();

//es6中的箭头函数的this指向指的是上一级（找不到任何this指向时，直接指向上一级）
