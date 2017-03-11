/**
 * Created by 琴瑟 on 2017/3/7.
 */
$(function(){
    init();
    function init(){
        getSiteNav();
    }
    //获取链接数据
    function getSiteNav(){
        $.get('http://139.199.157.195:9090/api/getsitenav',function(data){
            $('.link').html(template('linkTpl',data));
        });
    }
});