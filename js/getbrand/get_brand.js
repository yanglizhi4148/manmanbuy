/**
 * Created by wyc on 2017/3/6.
 */

function init(){
    getbrandRankTitle()
    getbrand();
    getbrandRank()

}
    init();

    /*获取十大品牌标题*/
function getbrandRankTitle() {
    var brandtitleid = getQueryString('id');
    $.get("http://mmb.ittun.com/api/getbrandtitle", function (data) {
        var html = template('brandTpl', data.result[brandtitleid]);
        $('.nav').append(html);

        var html = template('brandTpl2', data.result[brandtitleid]);
        $('.bandrank .hd').append(html);
        //debugger

        var html = template('brandcommontT', data.result[brandtitleid]);
        $('.commont .hd').append(html);

    });
    template.helper("retGBK1",retGBK);
    function retGBK(str) {
        return  str.slice(0,-4);
    }
}

/* 获取十大数据 */
 function getbrand() {
    // 根据对应的id，渲染相应的页面
    var brandtitleid = getQueryString('id');
    $.get('http://mmb.ittun.com/api/getbrand', {brandtitleid: brandtitleid}, function(data) {
            var html = template('getbrandTpl', data);
            $(".sortlist_title").html(html);

    });

};

/*品牌销量*/
function getbrandRank() {
    // 根据对应的id，渲染相应的页面
    var brandtitleid = getQueryString('id');

    $.get('http://mmb.ittun.com/api/getbrandproductlist', {brandtitleid: brandtitleid,pagesize:4}, function(data) {
        var html = template('bandRankTpl', data);
        $(".prolist").html(html);
        var productId=$('.info>.tip').data('id');
       console.log(productId);
        $.get('http://mmb.ittun.com/api/getproductcom', {productid:productId}, function(data) {
            var html = template('brandcommont', data);
            $(".pllist").html(html);
        });
    });



}
