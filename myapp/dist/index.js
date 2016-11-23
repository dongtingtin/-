$('.login.page').hide();
//登录界面
var Login = (function () {
    //构建器，会在new的时候运行
    function Login() {
        this.$el = $('.login.page');
        this.$username = this.$el.find('#username');
        this.$tree = $(".trunk,.trunk div");
        this.backgroundImages = ["t0169251fe7ced81e85.jpg",
            '//blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
            "http://www.webhek.com/misc-res/unitethelovers/content/image/bg.jpg",
            't0124b73ea0c50e5380.jpg'];
        this.$el.fadeIn(4000); //fadeIn淡入  fadeout 淡出 
        this.carouselBackground(); //背景轮播
        this.carouselTreeColor(); //自动更改树的颜色
    }
    Login.prototype.carouselTreeColor = function () {
        var _this = this;
        //每三秒修改树的颜色
        var carouselTreeColor = setInterval(function () {
            //随机生成rgb颜色
            var _a = [
                parseInt(Math.random() * 10 + ''),
                parseInt(Math.random() * 10 + ''),
                parseInt(Math.random() * 10 + '')], r = _a[0], g = _a[1], b = _a[2];
            _this.$tree.css('background', "#" + r + g + b);
        }, 1000);
    };
    //登录界面检查用户名
    Login.prototype.checkUsername = function () {
        var username = this.$username.val();
        if (/^1[3-9]\d{9}$/.test(username)) {
        }
        else {
            alert("error:" + username);
        }
        ;
    };
    //轮播背景
    Login.prototype.carouselBackground = function () {
        var _this = this;
        //当前轮播的下标
        var index = 0;
        this.carouselId = setInterval(function () {
            _this.$el.fadeOut(1000, function () {
                _this.$el.css("backgroundImage", "url(" + _this.backgroundImages[index] + ")");
                index = index == _this.backgroundImages.length - 1 ? 0 : ++index;
                _this.$el.fadeIn(1000);
            });
        }, 5000);
    };
    return Login;
}());
var loginPage = new Login();
//# sourceMappingURL=index.js.map