/**
 * Created by Administrator on 2017/3/8.
 */
$(function () {
    getGoodsDetail();
    getProductCom();

    function getGoodsDetail(){
        var productid=getUrlParameter("productid");
        var brandName=getUrlParameter("brandName");
        $(".breadcrumb li:last-of-type").text(brandName);
        $.ajax({
            type:'get',
            url:'http://139.199.157.195:9090/api/getproduct',
            data:{'productid':productid},
            success: function (res) {
                var html=template("goodsDetailTpl",res);
                $("#goods-compare").append(html);
            }

        })
    };


    /*ªÒ»°Õ¯”—∆¿º€*/
    function getProductCom() {
        var productid=getUrlParameter("productid");
        $.get("http://139.199.157.195:9090/api/getproductcom?productid=" + productid, function (res) {
            var html = template("comListTpl", res);
            $("#goods-compare .product-com-list ul").html(html);
        });
    }


})
