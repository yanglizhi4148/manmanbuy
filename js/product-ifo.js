$(function(){
    var proId = getQueryString();
    getdiscountproduct();

//��ȡָ��id�Ĳ�Ʒ
    function getdiscountproduct(){
        //��������
        $.get("http://mmb.ittun.com/api/getdiscountproduct",{productid:proId},function(data){
            var html=template("productInfo-tpl",{list:data.result});
            $(".layout .session").append(html);
            //title
            var html2=template("productInfo-tpl2",{list:data.result});
            $("head").append(html2);
        })
    }

//��װ��ȡ��Ʒid����
    function getQueryString(){
        //ȥ���ַ�������ĸ?��
        var search = location.search.slice(1);
        var searchArr = search.split("=");
        //console.log(searchArr[1]);
        return searchArr[1];
    }
//������ض����Ķ���Ч��
    $("#backTop").on("click",function(){
        // console.log("�ɹ�");
        $(document.body).animate({"scrollTop": "0px"},800);
    })
})
