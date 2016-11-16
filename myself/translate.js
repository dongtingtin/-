
var result = 1 + '1';
console.log(result);
var onetrue = 1 + true;
var onefalse = 1 + false;
var zerotrue = 0 + true;
var zerofalse = 0 + false;
console.log(`
onetrue:${onetrue}
onefalse:${onefalse}
zerotrue:${zerotrue}
zerofalse:${zerofalse}
`)

var str = 'str';
var strtrue = str + true;
var strfalse = str + false;
console.log(`
string+true:${strtrue};
string+false:${strfalse};
`)

var trueTrue = true + true;
var trueFalse = true + false;
var falseFalse = false + false;
console.log(`
trueTrue:${true + true};
trueFalse:${true + false};
falseFalse:${false + false};
`)

var str = 'str';
var num = 1;
var ok = true;
var fn = function () {

}
var obj = {};
var unDenfin;
console.log(`
str:${typeof str};
num:${typeof num};
ok:${typeof ok};
fn:${typeof fn};
obj:${typeof obj};
unDenfin:${typeof unDenfin};
`)

//隐式类型转换
var str = 'str';
var num = 1;
var ok = true;
var no = false;
console.log(`
str+num:${str + num};
str+ok:${str + ok};
str+no:${str + no};
num+ok:${num + ok};
ok+no:${ok + no};
`)