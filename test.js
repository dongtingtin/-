var num = 1;
/**
* [mdn indexof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)



var test = "abcdefgf";
var position = test.indexOf('f'); //查找第一个'f'的位置
/*console.log(position);

console.log(test.lastIndexOf('f'));  //查找最后一个'f'的位置

test = test.replace(/f/g, '')
console.log(test);   //删掉'f'

var test = test.toLocaleUpperCase();  //转大写
console.log(test);

var position = test.indexOf('f',2);  //截取
var test = test.slice(0, position);
console.log(test);

var test = "abcdewwfgf";
var test = test.split('f', 2);
console.log(test);  //根据f拆分字符串成数组

var test = [{ name: 'a', age: 23 }, { name: 'b', age: 24 }];
test.sort((a, b) => a.age - b.age)  //字符串 test.sort((a, b) =parseInt(a.age)  - parseInt(b.age))
console.log(test);
//var test = test.filter(person => person.name == 'b');
//console.log(test);

//var results = peoples.every(person => test.age >= 18);
//console.log(results);


var people = [{ name: 'a', age: 23 }, { name: 'b', age: 24 }];
people.filter()

var week = new Date().getTime();
console.log(new Date(1478764360180));

var week = new Date();
week.setFullYear(2010);
week.setMonth(10);
week.setDate(15);
console.log(week.toLocaleString());

//getDate() 根据本地时间，返回一个指定的日期对象为一个月中的第几天
var test = new Date().getDate();
console.log(test);
 
//gerDay()根据本地时间，显示当前星期几；  星期
var test = new Date().getDay();  
console.log(test);

var test = new Date().getFullYear();  //年份
console.log(test);*/

var test = new Date().getHours(); //小时
console.log(test);

var test = new Date().getMilliseconds(); //毫秒数
console.log(test);

var test = new Date().getMinutes();  //分钟
console.log(test);

var test = new Date().getSeconds();  //秒
console.log(test);

var test = new Date().getTime();
console.log(new Date(1478768563261).toLocaleString());
