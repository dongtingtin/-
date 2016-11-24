!DOCTYPE;
html >
    /head>
    < body >
    //for循环
    //固定格式
    //for() //三个参数，1：循环起始位置
    //2，循环结束
    //循环方式：一般两种方式，递增和递减
    /*for(var i=0;i<10;i++)
    {
        if(i%2>0){
          document.write(i+"&nbsp;");
        }
    }
    alert(i);*/
    //数组
    /*var a1=1
    var a2=true;
    
    //创建一个数组
    var arry1=new Array();  //使用new创建一个数组
    var array2=[];   //使用字面量创建数组
    //数组用来存多个元素（元素也可是任何数据类型）
    var array3=[1,true,{},null];
    //alert(array3);
    
    alert(array3.length);  //length操作符 求数组长度
    //通过数组下标取值  //长度从0开始，到length-1
    alert(array[2]);*/
    //遍历数组
    /*for(var i=0;i<array3.length;i++){
        alert(array3[i]);
    }*/
    //DOM 节点树
    ////父节点 子节点 同级节点
    //节点类型  元素节点 文本节点
    id;
"test" > 测试DIV < /div>;
//<div>元素节点
//测试DIV 文本节点
//id="test"  属性节点
//
//
//defer="derfer"   延迟加载
//
//onload事件，延迟加载，当页面加载完成后执行
//
//
//window.onload=function(){
//  alert(document.getElementById('test'))  //object HTMLDivElement  元素节点
//}
////获取特定id的元素节点
alert(document.getElementById('test')); //(通过id来获取节点) 
//返回数组 获取标签队列
//object HTMLCollection
alert(document.getElementsByTangName('p')[0]);
alert(document.getElementaByname('submit')); //(通过name来获取节点，跟name属性配套使用。在没有name属性的标签中使用name属性，属于非法，部分ie浏览器不支持) 
//节点属性
alert(document.getElementById('test').tagName); //标签名 
alert(document.getElementsByTangName('test').innerHTML); //标签中的内容
alert(document.getElementById('test').id); //获取id的值
alert(document.getElementById('test').title); //获取title的值
alert(document.getElementById('test').style); //获取css样式
alert(document.getElementById('test').style.color); //获取css样式颜色
赋值节点
    < /script>
    < /body>
    < /html>;
//# sourceMappingURL=getbootstrap.js.map