/**
 * Created by ASUS on 2017/3/7.
 */
    $(function() {
        var res = getQueryString('id');
        var thisImg = [];
        $.get('http://mmb.ittun.com/api/getcouponproduct', {couponid: res}, function (data) {
            $("#coupon_product_model").html(template('coupon_product_tpl', data));
            var index;
            thisImg = data.result;
           // console.log(thisImg);
            //单击事件遮罩层显示
            $('#coupon_product_model').on('click', 'a', function (e) {
                //淡入
                $("#coupon_mask").fadeIn();
                $(".coupon_arrow").css('display', 'block');
                $("#coupon_mask").css('background-color', 'rgba(0, 0,0, 0.75)');

                var thisId = $(this).parent().attr('data_id');
                    //  getImg(thisId);

                $("#coupon_mask").html(template('coupon_mask_tpl', data.result[thisId]));
               // console.log(thisId);
                    index=thisId;
            });

            //单击击遮罩层隐藏
            $("#coupon_mask").on('click',function () {
                // $("#coupon_mask").css("display","none");
                //给左键注册单击事件
            /*    $('.coupon_arrow_left').click(function(){
                    if(index == 0){
                        $('.coupon_mask_box').css('animation','moveLeft 0.8s');
                    }else if (index > 0){
                        thisMaskWidth = $('.coupon_mask_box').width();
                        index--;
                        $.each(thisImg,function(i,val){
                            thisImg[i][val.couponProductId]=index;
                            //  console.log(thisImg[i][val.couponProductId]);
                            $('.coupon_mask_box').css('-webkit-transform','translateX('+(-thisMaskWidth*index+thisMaskWidth)+'px)');
                            $("#coupon_mask").html(template('coupon_mask_tpl', data.result[index]));
                        })
                    }
                });*/

                //右键点击事件
               /* $('.coupon_arrow_right').click(function(){
                    if(index == thisImg.length){
                        $('.coupon_mask_box').css('animation',' moveRight 0.8s');
                        return false;
                    }else if (index >= 0){
                        thisMaskWidth = $('.coupon_mask_box').width();
                        index++;
                        $.each(thisImg,function(i,val){
                            thisImg[i][val.couponProductId]=index;
                            $('.coupon_mask_box').css('-webkit-transform','translateX('+(thisMaskWidth*index+thisMaskWidth)+'px)');
                            $("#coupon_mask").html(template('coupon_mask_tpl', data.result[index]));
                        })
                    }
                });*/

                $("#coupon_mask").fadeOut();
                $(".coupon_arrow").css('display', 'none');
            });


        })
       /* var coupon_arrow_left=document.querySelector('.coupon_arrow_left');
        var coupon_arrow_right=document.querySelector('.coupon_arrow_right');
        //鼠标移入按键透明度变高
        coupon_arrow_left.mouseover(function () {
            mouseover('.coupon_arrow_left');
        });

        coupon_arrow_right.mouseover(function () {
            mouseover('.coupon_arrow_right');

        });
        //鼠标移出按键变回原来的样子

        coupon_arrow_left.mouseout(function () {
            mouseout('.coupon_arrow_left');
        });

        coupon_arrow_right.mouseout(function () {
            mouseout('.coupon_arrow_right');

        });*/

        //封装了移入之后的改变
        function mouseover(select) {
            $(select).css('opacity', '1');
            $(select).css('transition', 'opacity .2s');
            $(select).css('-webkit-transition', 'opacity .2s');
            $(select).css('-o-transition', 'opacity .2s');
            $(select).css('-moz-transition', 'opacity .2s');
        };
        //封装了移出之后的改变
        function mouseout(select) {
            $(select).css('opacity', '0.3');
            $(select).css('transition', 'opacity .2s');
            $(select).css('-webkit-transition', 'opacity .2s');
            $(select).css('-o-transition', 'opacity .2s');
            $(select).css('-moz-transition', 'opacity .2s');
        };
     /*   $('#coupon_mask').css('width', $('.layout').width()+'px');
        $('#coupon_mask').css('height', $(window).innerHeight()+'px');
        $('.coupon_mask_box').css('width', $('#coupon_mask').width()+'px');
        $('.coupon_mask_box').css('height',$('#coupon_mask').height()+'px');
        $('.coupon_arrow').css('width', $('#coupon_mask').width()+'px');
        $('.coupon_arrow').css('height',$('#coupon_mask').height()+'px');*/
    })


