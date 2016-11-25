// //window:history、screen、
// //BOM 浏览器对象模型
// window.close()//关闭网页
// window.history.back  //后退
// window.history.forward //前进
// window.navigator.appName
// //screen  屏幕
// screen.width //屏幕的宽
// var table = <HTMLTableElement>document.getElementById('table');
// for (var i = 0; i < table.rows.length; i++) {
//     var row = table.rows.item(i);
//     if (i % 2 == 0) {
//         row.style.background = "red";
//     }
// }
var table = document.getElementById('table');
for (var i = 0; i < 100; i++) {
    var row = table.insertRow();
    row.textContent = "新增一行";
    var _a = [
        parseInt(Math.random() * 10 + ''),
        parseInt(Math.random() * 10 + ''),
        parseInt(Math.random() * 10 + '')], r = _a[0], g = _a[1], b = _a[2];
    row.style.background = "#" + r + "#" + g + "#" + b;
}
//# sourceMappingURL=1.js.map