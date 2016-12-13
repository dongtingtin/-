//创建一个App
// angular.module("myApp", [])
//     //创建一个控制器
//     .controller("indexCtrl", ($scop: ng.IScope) => {
//         $scop['myName'] = "董婷婷";
//         setImmediate(() => {
//             $scop.$apply($scop['myName'] = '的');
//         }, 5000);
//         $scop["logMyName"] = () => {
//             console.log($scop['myName']);
//         }
//         $scop['books'] = ['fghrth,fegdfg'];
//         $scop['addBook']=()
//     })    
//申明一个myApp模块
angular.module("myApp", ['ngRoute'])
    .config(function ($routeProvider) {
    //配置index的路由
    $routeProvider.when('/index', {
        templateUrl: 'pages/index.html'
    }).when('/about', {
        templateUrl: 'pages/about.html'
    })
        .otherwise('/index');
});
//# sourceMappingURL=app.js.map