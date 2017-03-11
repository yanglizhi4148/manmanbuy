/**
 * Created by ASUS on 2017/3/6.
 */
$(function(){
    $('.layout').css('height',$(window).innerHeight()+'px');
    $.get('http://mmb.ittun.com/api/getcoupon',function(data){
       // console.log(data.result);
        $("#coupon_img_model").html(template('coupon_img_tpl',data));
        $(".coupon_img_tpl_a").mouseout(function(){
            $(this).css("border","1px solid #ccc");
            $(this).children('img').css('-webkit-transform','scale(1,1)');

        });
        $(".coupon_img_tpl_a").mouseover(function(){
            $(this).css("border","1px solid red");
            $(this).children('img').css('-webkit-transform','scale(1.4,1.1)');
        });

    });

    //
    // $(document).mousemove()
})

/*  $('.coupon_arrow_right').click(function () {
 console.log(thisId);
 console.log(data.result.length);
 if (thisId == 0) {
 $('#coupon_mask').css('animation', 'move 0.2s' +
 ' linear');
 console.log(2222);
 thisId++;
 } else if (thisId == data.result.length) {
 console.log(44444444);
 $('#coupon_mask').css('animation', 'move 0.2s linear')
 }
 $("#coupon_mask").html(template('coupon_mask_tpl', data.result[thisId]));

 });*/