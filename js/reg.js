/**
 * Created by 琴瑟 on 2017/3/9.
 */
$(function(){
    //用户名
    $('#one').focus(function(){
        var value=$(this).val();
        if(value=='请输入用户名'){
            $(this).val('');
        }

    }).blur(function(){
        var value=$(this).val();
        if(value==''){
            $(this).val('请输入用户名');
            $('#p1').css('display','block');
        }

    });
    //密码
    $('#two').focus(function(){
        var value=$(this).val();
        if(value=='密码(6-20个字符)'){
            $(this).val('');
        }

    }).blur(function(){
        var value=$(this).val();
        if(value==''){
            $(this).val('密码(6-20个字符)');
            $('#p2').css('display','block');
        }
    });
    //手机号
    $('#three').focus(function(){
        var value=$(this).val();
        if(value=='请输入手机号'){
            $(this).val('');
        }else{
            $(this).val($(this).val());
        }
    }).blur(function(){
        var value=$(this).val();
        if(value==''){
            $(this).val('请输入手机号');
        }else{
            $(this).val($(this).val());
        }
    });
    //手机验证码
    $('#four').focus(function(){
        var value=$(this).val();
        if(value=='请输入手机验证码'){
            $(this).val('');
        }
    }).blur(function(){
        var value=$(this).val();
        if(value==''){
            alert('请先输入手机号码，并获取验证码');
            $('#p4').css('display','block');
            $(this).val('请输入手机验证码');
        }
    });
    //邮箱
    $('#five').focus(function(){
        var value=$(this).val();
        if(value=='请输入邮箱'){
            $(this).val('');
        }

    }).blur(function(){
        var value=$(this).val();
        if(value==''){
            $(this).val('请输入邮箱');
            $('#p5').css('display','block');
        }
    });
});