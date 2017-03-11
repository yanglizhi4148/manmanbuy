$(function () {
    //调用方法
    productList();

    //定义方法
    //获取ajax请求
    function productList() {
        $.ajax({
            url: "http://mmb.ittun.com/api/getinlanddiscount",
            success: function (data) {
                rend(lazy(data));
                //添加滚动事件
                $(window).on("scroll",function(){
                    //进行判断 当数组中没有值了就停止加载
                    if(data.result.length < 0){
                        return;
                    }
                    var height = $(".product").height()+$("header").height();
                    var top = $(window).height()+ $(document).scrollTop();
                    if(height - top < 100){
                        rend(lazy(data));
                    }
                });
            }
        });
    }

    //将获取到的数据通过模板引擎渲染到页面上
    function rend(info) {
        var html = template("product-tpl", info);
        console.log(html);//测试利用模板生成的数据
        $(".product ul").append(html);
    }
    function lazy(data){
        //创建一个新的对象用来存放要添加到页面上的
        var info = {
            result:[]
        }
        var a = 4;
        //判断传过来的数据是否还有
        if(data.result.length > 0){
            //判断如果最后剩下的不够4个那么a就等于剩下的个数
            data.result.length < 4? a = data.result.length:"";
            //判断页面上是否是第一次添加
            if($(".product li").length == 0){
                a = 6;
            }
            console.log($(".product  li").length);
            //将需要的内容添加到新的对象中 将原对象上的删除
            for(var i = 0;i < a;i++){
                info.result.push(data.result.shift());
                console.log(info);
            }
        }
        //console.log(info);
        //返回新的对象
        return info;
    }
     //点击返回顶部的动画效果
    $("#backTop").on("click",function(){
        // console.log("成功");
        $(document.body).animate({"scrollTop": "0px"},1500);
    })
});
