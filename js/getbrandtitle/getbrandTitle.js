/**
 * Created by wyc on 2017/3/6.
 */
$(function () {
    /*==========方法的调用============*/
    init();
    /*==========方法的定义============*/
    /*初始化*/
    function  init() {
       getbrandTitle();
    }

    /* 获取首页菜单数据 */
    function  getbrandTitle() {
        $.get("http://mmb.ittun.com/api/getbrandtitle",function (res) {
            // console.table(res.result);
            var html=template("getbrandTitleTpl",res);
            $("#detail_b").html(html);
        })

    }
})