var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//OOP object-oriented progroming 
var login = (function () {
    function login() {
        //登录界面的页面元素
        /**
         * 访问修饰符，private 私有属性 只能在类中访问，protected在当前类和其子类中可以访问
         *
         * 关键字|当前类中访问|子类访问|所有地方都可以访问
         * -|-|-|-
         * private | √  | x | x
         * protected | √ | √ |x
         * public | √ | √ | √
         *
         */
        this.$el = $(".login.page");
        //登录界面内的用户输入框
        this.$username = this.$el.find('#username');
        //淡入
        this.$el.fadeIn(3000, function () {
            alert('淡入已经完成了');
        });
        //用户的输入
        this.$username.val();
    }
    //static 关键字 属性也是属于类的，不属于类的实例
    login.phoneRegexp = /^1[3-9]\d{9}$/;
    return login;
}());
// loginPage实例 或者说叫做对象，login是类
var loginPage = new Login();
// protected 关键字 在外部不可以被访问
// loginPage.$el;
var LoginInput = (function (_super) {
    __extends(LoginInput, _super);
    function LoginInput() {
        _super.apply(this, arguments);
    }
    LoginInput.prototype.inputUsername = function () {
        // 访问父类的$el
        this.$el;
    };
    return LoginInput;
}(Login));
//函数的继承性
var Animal = (function () {
    function Animal() {
    }
    //能动 私有属性 只能在当前类中使用，默认public
    Animal.prototype.do = function () {
        console.log('我能动');
    };
    Animal.prototype.say = function () {
        console.log("i',m a animal");
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        _super.apply(this, arguments);
    }
    Cat.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i'm also a Cat");
    };
    return Cat;
}(Animal));
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        _super.apply(this, arguments);
    }
    Dog.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i'm also a Dog");
    };
    return Dog;
}(Animal));
var Pig = (function (_super) {
    __extends(Pig, _super);
    function Pig() {
        _super.apply(this, arguments);
    }
    Pig.prototype.say = function () {
        _super.prototype.say.call(this);
        console.log("i'm also a Pig");
    };
    return Pig;
}(Animal));
var cat = new Cat();
cat.say();
//只有public 权限最高 能在外部，子类，内部都使用
cat.do();
var dog = new Dog();
dog.say();
dog.do();
//# sourceMappingURL=oop.js.map