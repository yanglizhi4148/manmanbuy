/**
 * Created by 琴瑟 on 2017/3/8.
 */
$(function(){
    $('.name input').focus(function(){
        var value=$(this).val();
        if(value=='用户名'){
            $(this).val('');
        }else{
            $(this).val($(this).val());
        }
    }).blur(function(){
        var value=$(this).val();
        if(value==''){
            $(this).val('用户名');
        }else{
            $(this).val($(this).val());
        }
    });

    $('#login').on('submit',function(){
        var name=$('.name input').val();
        var pwd=$('.pwd input').val();
        if(name==''|| pwd==''){
            alert('用户名或密码不能为空！');
        }
        else{
            if(name=='123'&& pwd=='123456'){
                window.open('../index.html');
            }
        }
    });
});

