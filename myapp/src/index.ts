$('.login.page').hide();

//登录界面
class Login {
    $el = $('.login.page');

    $username = this.$el.find('#username');

    $tree = $(`.trunk,.trunk div`)
    carouselId: Number;
    backgroundImages = [`t0169251fe7ced81e85.jpg`
        , '//blackrockdigital.github.io/startbootstrap-stylish-portfolio/img/bg.jpg',
        `http://www.webhek.com/misc-res/unitethelovers/content/image/bg.jpg`,
        't0124b73ea0c50e5380.jpg'];

    //构建器，会在new的时候运行
    constructor() {
        this.$el.fadeIn(4000);  //fadeIn淡入  fadeout 淡出 
        this.carouselBackground();  //背景轮播
        this.carouselTreeColor();//自动更改树的颜色
    }

    carouselTreeColor() {

        //每三秒修改树的颜色
        var carouselTreeColor = setInterval(() => {
            //随机生成rgb颜色
            var [r, g, b] = [
                parseInt(Math.random() * 10 + ''),
                parseInt(Math.random() * 10 + ''),
                parseInt(Math.random() * 10 + '')];
            this.$tree.css('background', `#${r}${g}${b}`);
        }, 1000)
    }
    //登录界面检查用户名
    checkUsername() {
        var username = this.$username.val()
        if (/^1[3-9]\d{9}$/.test(username)) {

        } else {
            alert(`error:${username}`)
        };
    }
    //轮播背景
    carouselBackground() {
        //当前轮播的下标
        var index = 0;
        this.carouselId = setInterval(() => {
            this.$el.fadeOut(1000, () => {
                this.$el.css(`backgroundImage`, `url(${this.backgroundImages[index]})`);
                index = index == this.backgroundImages.length - 1 ? 0 : ++index;
                this.$el.fadeIn(1000);
            });

        }, 5000);
    }
}
var loginPage = new Login();