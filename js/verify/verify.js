// 注意放置顺序依次排版
$(function () {
    // 事件点击元素 命名 id="SubRefer"
    $("#inp_submit").click(function () {

        // 判断text是否为空
        var UserText = $.trim($("#UserText").val());

        // 邮箱验证
        var Email = $.trim($("#Email").val());

        // 电话验证
        var TelPhone = $.trim($("#TelPhone").val());

        // 手机号码验证
        var MobilePhone = $.trim($("#MobilePhone").val());

        // textarea 验证
        var Massage = $.trim($("#Massage").val());

        // 验证码
        var AuthCode = $.trim($("#AuthCode").val());

        //radio选择     包裹在盒子为 id="RadioChecked" 内部
        var RadioChecked = $('input:radio[name="RadioChecked"]:checked').val();

        // 判断邮箱
        var judgeEmail = /^([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        // 判断电话
        var judgePhone = /(^(\d{3,4}-)?\d{7,8})$|(1[3|4|5|7|8|9]\d{9})$/;
        // 判断手机
        // 限制11位
        // var judgeMobile = /^1[3|4|5|7|8][0-9]\d{8}$/;
        // 限制7~11位
        var judgeMobile = /^1[3|4|5|7|8][0-9]\d{4,8}$/;

        if (UserText == '' && $("#UserText")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写用户名！");
            return false;
        }

        if (Email == '' && $("#Email")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写邮箱！");
            return false;
        } else if (!judgeEmail.test(Email) && $("#Email")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写正确邮箱格式！【注意‘邮箱地址是否完整’、‘@’、‘.’】");
            return false;
        }

        if (TelPhone == '' && $("#TelPhone")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写电话！");
            return false;
        }

        if (!judgePhone.test(TelPhone) && $("#TelPhone")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写正确电话格式！【注意‘电话长度为（7~8）’、‘数字’‘区号长度：例（0755-）或是 不写’】");
            return false;
        }

        if (MobilePhone == '' && $("#MobilePhone")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写手机号码！");
            return false;
        }

        if (!judgeMobile.test(MobilePhone) && $("#MobilePhone")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写正确手机号码格式！【注意‘手机号码长度’、‘号段’、‘数字’、‘不需国际区号：例（+86）’】");
            return false;
        }

        if (Massage == '' && $("#Massage")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写内容！");
            return false;
        }

        if (AuthCode == '' && $("#AuthCode")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写验证码！");
            return false;
        }

        if (RadioChecked == null && $("#RadioChecked")[0]) {
            $(".wfix").css('display', 'block');
            $(".w-content p").text("请填写选择！");
            return false;
        }
});

// 关闭
$(".w-close,.wfix").click(function(){
    $('.wfix').hide();
});

$(".wsbox").click(function(e){
    e.stopPropagation();
}) //阻止在点击弹出窗时关闭窗口

});