/**
 * Created by 琴瑟 on 2017/3/6.
 */
$(function(){
    init();
    function init(){
        menuToggle();
        getIndexMenu();
        getMoneyCtrl();
    }
    //绑定菜单切换事件
    function menuToggle(){
        $('.menu .row').on('click','>div:nth-child(8)',function(){
            //location.href='#';
            $('.menu .row>div:nth-last-child(-n+4)').slideToggle();
        });
        return false;
    }

    //获取菜单数据
    function getIndexMenu(){
        $.get('http://139.199.157.195:9090/api/getindexmenu',function(data){
            $('.menu .row').html(template('menuTpl',data));
        });
    }
    //获取商品列表数据
    function getMoneyCtrl(){
        $.get('http://139.199.157.195:9090/api/getmoneyctrl',function(data){
            var html=template('listTpl',data);
            $('.list').html(html);
        });
        template.helper('sliceStr1',sliceStr);
        function sliceStr(str){
            var str1='';
            str1=str.slice(1,2);
            return str1;
        }
    }
});