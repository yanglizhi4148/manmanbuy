/**
 * Created by sunny1 on 2017/3/8.
 */
$(function() {
    init();
    function init() {
        var productid = getQueryString("productid");
        getMoneyCtrlProduct(productid);
    }

    /* 获取国内折扣详情*/
    function getMoneyCtrlProduct(productid) {
        $.get("http://139.199.157.195:9090/api/getmoneyctrlproduct?productid=" + productid, function(res) {
            var html = template("moneyProductTpl", res);
            $("#recommen-product").html(html);
        });
    }
});