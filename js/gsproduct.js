/**
 * Created by Administrator on 2017/3/7.
 */
$(function () {

    //��ʼ��ҳ��
    getData(0, 0);

    //�̵��ȡ������Ⱦ
    $.get('http://mmb.ittun.com/api/getgsshop', function (data) {
        $(".shop>ul").html(template('shopTpl', {list: data.result}));
        $(".shop>ul").children().first().addClass('active');
    });

    //�̵���¼�������shopId&areaId��Ⱦ��Ʒ��Ϣ
    $(".shop>ul").on('click', 'li>a', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $("#shopBtn").children().html($(this).text() + '<i></i>');
        getData($(this).data("shopid"), $(".area li[class=active]").children('a').data('areaid'));
        $('.shop>ul').slideUp();
    })


    //������ȡ������Ⱦ
    $.get('http://mmb.ittun.com/api/getgsshoparea', function (data) {
        $(".area>ul").html(template('areaTpl', {list: data.result}));
        $(".area>ul").children().first().addClass('active');
    })

    //�������¼�������shopId&areaId��Ⱦ��Ʒ��Ϣ
    $(".area>ul").on('click', 'li>a', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().addClass('active');
        $("#areaBtn").children().html($(this).text().slice(0, 2) + '<i></i>');
        getData($(".shop li[class=active]").children('a').data('shopid'), $(this).data('areaid'));
        $('.area>ul').slideUp();
    })


    //��װ��ȡshopId&areaId����������Ⱦ��Ʒ��Ϣ����
    function getData(shopId, areaId) {
        $.get('http://mmb.ittun.com/api/getgsproduct', {shopid: shopId, areaid: areaId}, function (data) {
            $(".product>ul").html(template('productTpl', {list: data.result}));
            //��ƷͼƬ������
            $("img.lazy").lazyload();
        });
        //��ȡ�۸�?����
        template.helper('slice', function (str) {
            return str.slice(1);
        });
    }


    //ͳһ���ĸ���ť���¼�
    btnClick('#shopBtn', '.shop>ul', '.area>ul', '.allPrice>ul', '.searchBox', '#searchBtn');
    btnClick('#areaBtn', '.area>ul', '.shop>ul', '.allPrice>ul', '.searchBox', '#searchBtn');
    btnClick('#priceBtn', '.allPrice>ul', '.shop>ul', '.area>ul', '.searchBox', '#searchBtn');
    btnClick('#searchBtn', '.searchBox', '.shop>ul', '.area>ul', '.allPrice>ul');

    //��װ��ť���¼�����
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

    //�̶�������
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
