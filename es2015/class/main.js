//ES5 类
function Plane(){
	this.wings = 2;
	this.speed = 100;
	this.altutide = 0;
}
const myPlane = new Plane();
//给Plane类再定义一个属性
Plane.prototype.fly = function(){
	this.altutide = 3000;
}
myPlane.fly();
console.log(myPlane.altutide);
//创建另外一个类，
function FighterPlane(){
	this.speed = 1000;
}
FighterPlane.prototype = new Plane();
var fighterPlane = new FighterPlane();
fighterPlane.fly();
// console.log(fighterPlane.altutide);//3000




//ES6
"use strict"
class Person{
	constructor(name,age,weight){
		this.name = name;
		this.age = age;
		this.weight = weight;
	}
	displayWeight(){
		console.log(this.weight);
	}
}
let person1 = new Person("Henry",18,90);
// console.log(person1.name);
person1.displayWeight();

class Programmer extends Person{
	constructor(name,age,weight,language){
		//调用父类的constructor
		super(name,age,weight);
		this.language = language;
	}
	displayWeight(){
		console.log(this.weight + "Kg");
	}
}
let Gaochao = new Programmer("chao","30","70","go");
console.log(Gaochao.language);//go
Gaochao.displayWeight();//70kg




