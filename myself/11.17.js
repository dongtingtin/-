// var result = add(1, 2);
// add();
// console.log(`${add()}`);

// function scope() {
//     console.log(result);
//     var secondScope = function () {
//         console.log(`2+3=${add(2, 3)}`);
//     }
// }

//编写一个收银台收款程序，根据商品单价、购买数量及收款金额计算并输出应收金额和找零；当总价大于或等于500时，享8折优惠。
//方法一
var price = parseInt(prompt("请输入商品单价！"));
var quantity = parseInt(prompt("请输入购买数量！"));
var received = parseInt(prompt("请输入收款金额！"));
function arr(a, b) {
    var price = a * b;
    if (price >= 500) {
        return (price * 0.8);
    } else {
        return (price);
    };
};
alert(`
总金额:${arr(price, quantity)}
找零:${received - arr(price, quantity)}
`);

//编写一个收银台收款程序，根据商品单价、购买数量及收款金额计算并输出应收金额和找零；当总价大于或等于500时，享8折优惠。
//如收款金额大于等于应收金额，则计算找零后输出；若收款金额小于应收金额，则输出错误提示信息。
//方法二
var price = parseInt(prompt("请输入商品单价！"));
var quantity = parseInt(prompt("请输入购买数量！"));
var received = parseInt(prompt("请输入收款金额！"));
//sum 应收金额
var sum = (price * quantity);
if (received >= sum) {
    if (sum >= 500) {
        sum = sum * 0.8;
    }//else {
    //sum = sum;
    //}
    alert(`
总金额:${sum}
找零:${received - sum}
`);
} else {
    alert("亲，你的金额不足了哦！");
}; 