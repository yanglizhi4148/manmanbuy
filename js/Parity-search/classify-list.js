/**
 * Created by Administrator on 2017/3/6.
 */
$(function () {
    getClassify();
    getgetClassifyList();



    //获取比价搜索分类标题
    function getClassify() {
        $.get("http://139.199.157.195:9090/api/getcategorytitle", function (res) {
            var html = template("classifyTpl", res);
            $(".brief .briefin").html(html);
        })
    };
    //获取比价搜索分类标题下拉列表
    function getgetClassifyList() {
        $(".brief .briefin").on('click', '.fl_t', function () {

            var titleid = $(this).find("a").attr("value");
            var self = $(this);
            if ($(this).find(".fl_all").length > 0) {
                /**
                 * 1.首先，如果某个fl_t已经有了fl_all，再点它是就会移除fl_all，实现点击自己进行闭合。
                 * 但是点击其他fl_t的length还是为0，点击其他fl_t时，并不会执行下面的代码，而是会渲染这个新点击
                 * 按钮对应的fl_all，这时页面就有了多个fl_all，就需要在成功渲染前清除下所有fl_all
                 * */
                $(this).find(".fl_all").remove();
            } else {
                $.ajax({
                    type: 'get',
                    url: 'http://mmb.ittun.com/api/getcategory',
                    data: {'titleid': titleid},
                    success: function (res) {
                        //2.最后，成功渲染fl_all之前，先清除所有fl_all
                        //如果只写这段代码，那么不能实现点击自己实现闭合
                        self.parent().find(".fl_all").remove();
                        var html = template("classifyListTpl", res);
                        self.append(html);
                        self.find(".fl_all").show();

                            ////方案一：与官网保持一致
                            //var lastNId=self.find(".fl_all div:last-of-type a").attr("value");
                            //var firstNId=self.find(".fl_all div:first a").attr("value");
                            //console.log(lastNId-firstNId);
                            //var number=lastNId-firstNId+1;
                            //if(number%3==1){
                            //
                            //}
                        //方案二：觉得这样好看
                        var lastDiv = self.find(".fl_all div:last-of-type");
                        var lastDivBefore = self.find(".fl_all div:nth-last-child(2)");
                        var lastNId = self.find(".fl_all div:last-of-type a").attr("value");
                        var firstNId = self.find(".fl_all div:first a").attr("value");
                        var number = lastNId - firstNId + 1;
                        if (number % 3 == 1) {
                            $(".fl_all").append('<div class="col-sm-4 col-xs-4" style="border-bottom:none"></div>')
                            lastDiv.css({
                                "border-bottom": "none"
                            });
                        }else if(number % 3 ==2){
                            $(".fl_all").append('<div class="col-sm-4 col-xs-4" style="border-bottom:none"></div>')
                            lastDiv.css({
                                "border-bottom": "none"
                            });
                            lastDivBefore.css({
                                "border-bottom":"none"
                            });
                        }
                        }


                })
            }

        })


};



})


