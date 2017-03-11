$(function(){
    var proId = getQueryString();
    getdiscountproduct();

//获取指定id的产品
    function getdiscountproduct(){
        //发送请求
        $.get("http://mmb.ittun.com/api/getdiscountproduct",{productid:proId},function(data){
            var html=template("productInfo-tpl",{list:data.result});
            $(".layout .session").append(html);
            //title
            var html2=template("productInfo-tpl2",{list:data.result});
            $("head").append(html2);
        })
    }

//封装获取产品id函数
    function getQueryString(){
        //去掉字符串首字母?号
        var search = location.search.slice(1);
        var searchArr = search.split("=");
        //console.log(searchArr[1]);
        return searchArr[1];
    }
//点击返回顶部的动画效果
    $("#backTop").on("click",function(){
        // console.log("成功");
        $(document.body).animate({"scrollTop": "0px"},800);
    })
})
