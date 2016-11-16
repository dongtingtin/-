

//类型转换

//toString(),parseInt(),parseFloat(),Number()
// var str = 'str';
// var num = 1;
// var num2 = 2.3;
// var ok = true;
// var fn = function () {

// }
// var obj = {};
// console.log(`
// 数据类型的toString()
// str:${str.toString()};
// num:${num.toString()};
// num2:${num2.toString()};
// ok:${ok.toString()};
// fn:${fn.toString()};
// obj:${obj.toString()};
// `)
// str = '123';
// num2 = 2.3;
// strFloat = '23.3'
// console.log(`
// 数据转换成number()
// str:${parseInt(str) + 1};
// num2:${parseInt(num2)};
// `)

// var result = parseInt(prompt("请输入你的工资"));
// alert(result + 1000);
// if (isNaN()) { alert("请输入数字！"); }

// var result = prompt("请输入你的工资！");
// alert(parseInt(result) + 1000);
// if (isNaN()) { alert("请输入数字！"); }

// var age = 18;
// var isYang = age < 19 && age > 17;
// console.log(`isYang:${isYang}`);
// if (isYang) {
//     console.log(`18岁`);
// }

// var ok = true;
// console.log(`
//     !的使用
//     ok:${ok};
//     !ok:${!ok};
//     !!str=>boolean;
//     !!str:${!!str};
//     `)

//isNaN()函数的使用
//[isNaN的使用](插入网址链接)
console.log(`
'3f':${isNaN('3f')}
33:${isNaN(33)}
'23':${isNaN('23')}
`)

console.log(`
    trueTrue:${true || true}
    trueFalse:${true || false}
    falseFalse:${false || false}
`)

var a = 1;
var b = 2;
//console.log(a+"+"+b+"="+(a+b));
console.log(`${a}+${b}=${a + b}`);
var age = 19
var isYang = age < 18 ? 'to yong to simple' : age;
console.log(isYang);

var result = parseInt(prompt("请输入数字！"));
alert(result % 2);
if (result) {
    console.log("奇数");
    // return 1;
} else {
    console.log("偶数");
}
