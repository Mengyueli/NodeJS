var counter = function(array){
	return `数组中拥有${array.length}个元素`;
}
// console.log(counter(['1','2','3']));
var adder = function (a,b){
	return `两个数的和为${a+b}`;
}
var pi = 3.14159265;
//把当前需要的名字对外公开(只有使用module.exports之后，其他文件才可以引用)
//module.exports此时传过去的是有一个对象
// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;


//模块模式 Module Patterns
//最终优化版(最标准的)
module.exports = {
	counter:counter,
	adder:adder,
	pi:pi
}