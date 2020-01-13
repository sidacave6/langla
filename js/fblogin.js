
var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{1,10})+$/;
var phonefilter10 = /((0)+([0-9]{9})\b)/g;
var phonefilter11 = /((0)+([0-9]{10})\b)/g;
//khai báo biến
$.validator.addMethod("validateAccount", function (value, element) {
    return this.optional(element) || emailfilter.test(value)||phonefilter10.test(value)|| phonefilter11.test(value) ;
}, "Không tìm thấy tài khoản trong hệ thống");
$().ready(function() {
    $("#loginsoha").validate({
        onfocusout: false,
        onkeyup: false,
        onclick: false,
        rules: {
            "Acc": {
                required: true,
                validateAccount: true,

            },
            "Pass": {
                required: true,
                minlength: 5,
                maxlength:32,
            },
            
        },
        messages: {
            "Acc": {
                required: "Vui lòng nhập tài khoản",

            },
            "Pass": {
                required: "Vui lòng nhập mật khẩu",
                minlength: "Mật khẩu không chính xác",
                maxlength: "Mật khẩu không chính xác",
            },
           
        }
    });
});
