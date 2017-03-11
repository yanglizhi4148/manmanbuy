/**
 * Created by Administrator on 2017/3/7.
 */
$(function () {

    //初始化页面
    getData(0, 0);

    //商店获取数据渲染
    $.get('http://mmb.ittun.com/api/getgsshop', function (data) {
        $(".shop>ul").html(template('shopTpl', {list: data.result}));
        $(".shop>ul").children().first().addClass('active');
    });

    //商店绑定事件并根据shopId&areaId渲染商品信息
    $(".shop>ul").on('click', 'li>a', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $("#shopBtn").children().html($(this).text() + '<i></i>');
        getData($(this).data("shopid"), $(".area li[class=active]").children('a').data('areaid'));
        $('.shop>ul').slideUp();
    })


    //地区获取数据渲染
    $.get('http://mmb.ittun.com/api/getgsshoparea', function (data) {
        $(".area>ul").html(template('areaTpl', {list: data.result}));
        $(".area>ul").children().first().addClass('active');
    })

    //地区绑定事件并根据shopId&areaId渲染商品信息
    $(".area>ul").on('click', 'li>a', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $("#areaBtn").children().html($(this).text().slice(0, 2) + '<i></i>');
        getData($(".shop li[class=active]").children('a').data('shopid'), $(this).data('areaid'));
        $('.area>ul').slideUp();
    })


    //封装获取shopId&areaId发送请求渲染商品信息函数
    function getData(shopId, areaId) {
        $.get('http://mmb.ittun.com/api/getgsproduct', {shopid: shopId, areaid: areaId}, function (data) {
            $(".product>ul").html(template('productTpl', {list: data.result}));
            //商品图片懒加载
            $("img.lazy").lazyload();
        });
        //截取价格?符号
        template.helper('slice', function (str) {
            return str.slice(1);
        });
    }


    //统一给四个按钮绑定事件
    btnClick('#shopBtn', '.shop>ul', '.area>ul', '.allPrice>ul', '.searchBox', '#searchBtn');
    btnClick('#areaBtn', '.area>ul', '.shop>ul', '.allPrice>ul', '.searchBox', '#searchBtn');
    btnClick('#priceBtn', '.allPrice>ul', '.shop>ul', '.area>ul', '.searchBox', '#searchBtn');
    btnClick('#searchBtn', '.searchBox', '.shop>ul', '.area>ul', '.allPrice>ul');

    //封装按钮绑定事件函数
    function btnClick(btn, showSel1, hideSel2, hideSel3, hideSel4, btn2) {
        $(btn).on('click', function () {
            $(this).toggleClass('on');
            $(showSel1).slideToggle();
            $(hideSel2).slideUp();
            $(hideSel3).slideUp();
            $(hideSel4).slideUp();
            $(this).siblings().removeClass('on');
            $(btn2).removeClass('on');
            return false;
        })
    }

    //固定导航栏
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > $(".topPart").height()) {
            $(".topPart").addClass('fixed');
            $(".product")[0].style.paddingTop = $(".topPart").height() + 'px';
        }
        else if (scrollTop < 10) {
            $(".topPart").removeClass('fixed');
            $(".product").get(0).style.paddingTop = 0;
        }
    })


    $(".allPrice>ul").children().on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $("#priceBtn").children().html($(this).text() + '<i></i>');
    })

    $(".sort>ul").children().on('click', function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

})
