//创建了app的控制器模块
angular.module('starter,controllers', [])

    //登录界面的控制器。所有登录界面的操作都会在这里执行
    .controller('signinCtrl', function ($scope, $timeout, $http) {
        //默认登录界面，没有任何数据
        $scope.user = { username: '', password: '' };
        $scope.checkUsername = function () {
            if (/^1[3-9]\d{9}$/.test($scope.user.username)) {
                return true;
            } else {
                $scope.isError = true;
                $scope.errorMsg = "用户名不合法";
                $timeout(function () {
                    $scope.isError = false;
                }, 3000);
                return false;
            }
        }

        //登录请求
        $scope.login = function () {
            console.log($scope.user);
            //如果用户名合法，且密码不为空，发送ajax请求登录
            if ($scope.checkUsername() && $scope.user.password != "") {
                $http.get('http://localhost:4000/trader/signin', {
                    params: {
                        username: $scope.username,
                        password: $scope.user.password
                    }
                }).then(function (rtn) {
                    console.log(rtn);
                })
            }
            //用户名不合法
            else {
                $scope.isError = true;
                $scope.checkUsername() ? "" : $scope.errorMsg = "用户名不合法";
                $scope.checkUsername ? "" : $scope.errorMsg = "请输入密码";
                $timeout(function () {
                    $scope.isError = false;
                }, 3000);
            }
        }

    })