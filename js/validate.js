var Seri11 =    /^[0-9]{11}$/;
var Seri14 =    /^[0-9]{14}$/;
var Mathe13 =   /^[0-9]{13}$/;
var Mathe15 =   /^[0-9]{15}$/;

$.validator.addMethod("validateCardSeriViettel", function(value, element) {
	return this.optional(element) ||  Seri11.test(value)||  Seri14.test(value);
}, "Sai định dạng thẻ Viettel");
$.validator.addMethod("validateCardMatheViettel", function(value, element) {
	return this.optional(element) ||  Mathe13.test(value)||  Mathe15.test(value);
}, "Sai định dạng thẻ Viettel");


        //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
        $(document).ready(function() {

        //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
        $("#checkcard").validate({
        	errorPlacement: function(label, element) {
        		label.addClass('arrow');
        		label.insertAfter(element);
        	},

        	wrapper: 'span',
        	rules: {
        		Sever: "required",
                Tennv: "required",
        		Loaithe: "required",
        		Sotien: "required",
        		"SeriViettel": {
        			required: true,         
        			validateCardSeriViettel:true
        		},
        		"MatheViettel": {
        			required: true,
        			validateCardMatheViettel:true  
        		},
        		"SeriVinaphone": {
        			required: true,
        			minlength: 14,
        			maxlength: 14     
        		},
        		"MatheVinaphone": {
        			required: true,
        			minlength: 14,
        			maxlength: 14
        		}

        	},
        	messages: {
        		"Sever": {
        			required: "Vui lòng chọn sever"
        		},
                "Tennv": {
                    required: "Vui lòng nhập tên nhân vật"
                },
        		"Loaithe": {
        			required: "Vui lòng chọn loại thẻ"
        		},
        		"Sotien": {
        			required: "Vui lòng chọn mệnh giá thẻ"
        		},
        		"SeriViettel": {
        			required: "Vui lòng nhập seri"        
        		},
        		"MatheViettel": {
        			required: "Vui lòng nhập mã thẻ"   
        		},
        		"SeriVinaphone": {
        			required: "Vui lòng nhập Seri",
        			minlength: "Vinaphone: Seri thiếu số",
        			maxlength: "Vinaphone: Seri thừa số",
        			number: "Seri không đúng định dạng."
        		},
        		"MatheVinaphone": {
        			required: "Vui lòng nhập Mã thẻ",
        			minlength: "Vinaphone: Mã thẻ thiếu số",
        			maxlength: "Vinaphone: Mã thẻ thừa số",
        			number: "Mã thẻ không đúng định dạng."
        		}

        	}
        });

    });