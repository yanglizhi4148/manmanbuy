/**
 * Created by Administrator on 2017/3/6.
 */
$(function () {
    getClassify();
    getgetClassifyList();



    //��ȡ�ȼ������������
    function getClassify() {
        $.get("http://139.199.157.195:9090/api/getcategorytitle", function (res) {
            var html = template("classifyTpl", res);
            $(".brief .briefin").html(html);
        })
    };
    //��ȡ�ȼ�����������������б�
    function getgetClassifyList() {
        $(".brief .briefin").on('click', '.fl_t', function () {

            var titleid = $(this).find("a").attr("value");
            var self = $(this);
            if ($(this).find(".fl_all").length > 0) {
                /**
                 * 1.���ȣ����ĳ��fl_t�Ѿ�����fl_all���ٵ����Ǿͻ��Ƴ�fl_all��ʵ�ֵ���Լ����бպϡ�
                 * ���ǵ������fl_t��length����Ϊ0���������fl_tʱ��������ִ������Ĵ��룬���ǻ���Ⱦ����µ��
                 * ��ť��Ӧ��fl_all����ʱҳ������˶��fl_all������Ҫ�ڳɹ���Ⱦǰ���������fl_all
                 * */
                $(this).find(".fl_all").remove();
            } else {
                $.ajax({
                    type: 'get',
                    url: 'http://mmb.ittun.com/api/getcategory',
                    data: {'titleid': titleid},
                    success: function (res) {
                        //2.��󣬳ɹ���Ⱦfl_all֮ǰ�����������fl_all
                        //���ֻд��δ��룬��ô����ʵ�ֵ���Լ�ʵ�ֱպ�
                        self.parent().find(".fl_all").remove();
                        var html = template("classifyListTpl", res);
                        self.append(html);
                        self.find(".fl_all").show();

                            ////����һ�����������һ��
                            //var lastNId=self.find(".fl_all div:last-of-type a").attr("value");
                            //var firstNId=self.find(".fl_all div:first a").attr("value");
                            //console.log(lastNId-firstNId);
                            //var number=lastNId-firstNId+1;
                            //if(number%3==1){
                            //
                            //}
                        //�����������������ÿ�
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


