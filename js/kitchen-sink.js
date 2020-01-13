var hostname = window.location.hostname;
var SOAPDOMAIN = 'https://soap.soha.vn/';
var DOMAINGAME = window.location.origin;
switch (hostname) {
    case 'soap.local':
        SOAPDOMAIN = 'https://dev.soap.soha.vn/';
        break;
    case 'soapdev.local':
        SOAPDOMAIN = 'http://soapdev.local/';
        break;
    case 'nap.sohagame.vn':
        SOAPDOMAIN = 'https://soap.soha.vn/';
        break;
    case 'beta.soap.soha.vn':
        SOAPDOMAIN = 'https://beta.soap.soha.vn/';
        break;
}

var APIV1 = SOAPDOMAIN + 'api/a/';

var CHARACTER       = APIV1 + 'GET/util/CharacterWeb';
var ALLGAME         = APIV1 + 'GET/util/Allgame';
var PAYLIST         = APIV1 + 'GET/payweb/Paylist';
var REGISTEREMAIL   = APIV1 + 'GET/auth/Loginquick';
var CHANGEMONEY     = APIV1 + 'POST/payweb/CardIngame';
var CHARGE          = APIV1 + 'POST/payweb/Charge';
var TRANSFERHISTORY = APIV1 + 'GET/pay/TransferHistory';
var LOGIN_URL       = APIV1 + 'POST/auth/loginmobile';
var CONFIRM_OTP     = APIV1 + 'GET/auth/ConfirmOtp';
var RESEND_OTP      = APIV1 + 'GET/auth/ResendOtp';
var INFOGAME        = APIV1 + 'POST/util/GameInfo';
var CHECKEMAILPHONE = APIV1 + 'GET/auth/checkaccount';
var REGISTERPHONE   = APIV1 + 'GET/auth/Loginquick';
var VERIFYOTP       = APIV1 + 'GET/auth/Verifyotp';
var PAYGATE         = SOAPDOMAIN + 'dialog/payweb/PayGateRedirectNew';
var PAYPALGATE      = SOAPDOMAIN + 'dialog/payweb/PaypalRedirect';
var WALLETPAYMEMT         = SOAPDOMAIN + 'dialog/payweb/WalletRedirect';
var TRUEMONEYPACKAGE    = APIV1 + 'POST/payweb/TrueMoneyPackage';
var GETUSDRATE      = APIV1 + 'GET/payweb/ExchangeRateUsd';
var PAYSMS          = SOAPDOMAIN + 'dialog/payweb/sms';
var LOGINFB         = APIV1 + 'GET/auth/loginbig4';
var GETUSERINFO     = APIV1 + 'GET/Me/userinfo';
var GETUSERPAYMENTCODE = APIV1 + 'GET/Me/UserPaymentCode';
var DETECHDOMAIN    = APIV1 + 'POST/payweb/Infobydomain';
var TRACKERROR      = APIV1 + 'get/auth/trackError';
var VERIFYCOUPON    = APIV1 + 'post/util/VerifyCoupon';
var CHECKSMS9029DONE= APIV1 + 'post/service/CheckSms9029Done';
var USERPAYSMSBYDAY = APIV1 + 'post/service/UserPaySmsByDay';
var CHECKBOUGHTPROMOTIONPACKAGE     = APIV1 + 'post/payweb/CheckBoughtPromotionPackage';
var CHECKSCOINCHANGE = APIV1 + 'POST/payweb/currentScoin';
var LISTACTIVEGAME = APIV1 + 'GET/payweb/listgameActive';
var INCOMPLETEDORDERS = APIV1 + 'GET/payweb/incompletedorders';
var RECHECKORDER = APIV1 + 'post/payweb/recheckorder';
var CONFIRMCARD = APIV1 + 'post/payweb/confirmcard';

var bankPayNow = false;
var momoPayNow = false;
var paypalPayNow = false;
var SMSPayNow = false;
var truemoneyPayNow = false;
var viettelPayNow = false;
var vnpayPayNow = false;

//gĂ³i náº¡p
var PacketChare = {
    //roleid: '',
    areaid: '',
    order_info: ''
};

var pay_sms_err = false;
var DatasendBig4 = {
    app_id: '',
    big4_access_token: '',
    big4_type: 2
};
var dataLogin = {
    email: '',
    password: '',
    app_id: 'd24bad4220f0a2a7ab542e1e8d1b80e0',
    game_code : '',
};
var dataRegister = {
    phone: ''
};
var dataVerify = {
    phone: '',
    otp: '',
    app_id: ''
};
var dataINFOGAME = {
    app_key: 'd24bad4220f0a2a7ab542e1e8d1b80e0'
};
var user_info = {
    scoin: 0,
    user_id: 0
};

var CharacterSelected = {
    roleid: '',
    areaid: '',
    rolename: '',
    areaname: ''
};

var statusPayment = {
    title: '',
    msg: '',
    btn: '',
    action: '',
    title_tk: ''
};

var viettelPrefix = ['096','097','098','0162','0163','0164','0165','0166','0167','0168','0169','032','033','034','035','036','037','038','039','086'];
var vinaPrefix = ['091','094','088','0123','0124','0125','0127','0129','081','082','083','084','085'];
var mobiPrefix = ['090','093','089','0120','0121','0122','0126','0128','070','079','077','076','078'];

var smsInfo = {
    phone : '',
    price : '',
    type  : 0
};

var promotionTruemoney = true;

var VIETTEL_TYPE = 1;
var VINA_TYPE    = 2;
var MOBI_TYPE    = 3;

var Infogame = {
    icon:'',
    vi_name:'',
    channeling : false,
    hide_brand : false,
    integratedMomo : false,
    integratedTrueMoney : false,
    integratedSmsViettel : false,
    integratedSmsMobifone : false,
    mobifoneSyntax : '',
    integratedViettelPay: false
};

var listpacket = new Array();

// Init App
// var myApp = new Framework7({
//     modalTitle: 'Thông báo',
//     modalButtonOk: 'Äá»“ng Ă½',
//     modalButtonCancel: 'Há»§y',
//     material: true,
// });

var link_agency = '<a onclick="window.open(\'https://sohacoin.vn/tim-noi-mua/\')" style="cursor: pointer; white-space: initial;color: blue;font-weight: 600; font-size: 15px;">Xem danh sĂ¡ch Ä‘á»‹a Ä‘iá»ƒm bĂ¡n tháº» SohaCoin trĂªn toĂ n quá»‘c</a>';


// Expose Internal DOM library
var $$ = Dom7;
// Add main view
var mainView = myApp.addView('.view-main', {});

var urlQuery = $$.parseUrlQuery();

var status_pay = urlQuery.status;
var order_info_pay = urlQuery.order_info;
var areaid_pay = urlQuery.areaid;
var roleid_pay = urlQuery.roleid;
var transid = urlQuery.trans_id;
// var is_test = urlQuery.user;
//
// if(is_test == 'tester_sohagame') setCookie('test_sms',1);


if(urlQuery.data_callback){
    setCookie('data_callback_chatbot', urlQuery.data_callback, 0.042);//LÆ°u vĂ o cookie trong vĂ²ng 1h
} else {
    if(areaid_pay == undefined && roleid_pay == undefined && order_info_pay == undefined) {
        setCookie('data_callback_chatbot', null, -1);
    }
}

var callAPILOGIN = function (method, url, datasend, callbackSuccess, callbackError) {
    if (navigator.onLine) {
        $$.ajax({
            type: method,
            url: url,
            data: datasend,
            cache: false,
            crossDomain: true,
            dataType: 'json',
            success: function (data, status) {
                if (data.status == 'fail') {
                    if(data.error_code == '1002') {
                        setCookie('access_token', null, -1);
                        login();
                    }
                    if (callbackError) callbackError(data);
                } else {
                    if (callbackSuccess) callbackSuccess(data);
                }
            },
            error: function (xhr, status) {
      
                // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
            }
        });
    } else {
        myApp.alert('Vui lĂ²ng kiá»ƒm tra káº¿t ná»‘i máº¡ng vĂ  thá»­ láº¡i', 'Lá»—i káº¿t ná»‘i');
    }
};

// var callAPIGETUSERINFO = function (method, url, datasend, callbackSuccess, callbackError) {
//     if (navigator.onLine) {
//         $$.ajax({
//             type: method,
//             url: url,
//             data: datasend,
//             cache: false,
//             crossDomain: true,
//             dataType: 'json',
//             success: function (data, status) {
//                 if (data.status == 'fail' || data.status == 'notice') {
//                     if(data.error_code == '1002'){
//                         var msg = data.message || 'KhĂ´ng thá»ƒ truy cáº­p tĂ i khoáº£n cá»§a báº¡n, liĂªn há»‡ bá»™ pháº­n CSKH cá»§a chĂºng tĂ´i Ä‘á»ƒ biáº¿t thĂªm chi tiáº¿t.';
//                         myApp.alert(msg, 'Thông báo', function () {
//                             setCookie('access_token', null, -1);
//                             showLoginNormal();
//                         });
//                     }
//                     if (callbackError !== undefined) callbackError(data);
//                 } else {
//                     if (callbackSuccess !== undefined) callbackSuccess(data);
//                 }
//             },
//             error: function (xhr, status) {
                // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
//             }
//         });
//     } else {
//         myApp.alert('Vui lĂ²ng kiá»ƒm tra káº¿t ná»‘i máº¡ng vĂ  thá»­ láº¡i', 'Lá»—i káº¿t ná»‘i');
//     }
// };

var callAPI = function(method, url, datasend, callbackSuccess, callbackError){
    if (navigator.onLine && getCookie('access_token')) {
        $$.ajax({
            //method: method,
            type: method,
            url: url,
            data: datasend,
            cache: false,
            crossDomain: true,
            dataType: 'json',
            success: function (data, status) {
                if (data.status == 'fail') {
                    if(data.error_code == '1002'){
                        setCookie('access_token', null, -1);
                        login();
                    }
                    if (callbackError) callbackError(data);
                } else {
                    if (callbackSuccess) callbackSuccess(data);
                }
            },
            error: function (xhr, status) {
                // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
            }
        });
    } else {
        // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
    }
};

$$(document).on('modal:opened', '.modal', function (e) {
    if($$(this).find('#login-modal').length && dataLogin.google_id) {
        showGoogleLogin();
    }
});

(function () { //Get info by domain
    var path = window.location.pathname;
    path = path.replace('/', '');
    if(path){
        var data = {
            domain: 'nap.' + path + '.vn'
        };
        if (hostname == 'soapdev.local') data.domain = 'nap.mongvolam.vn';

        callAPILOGIN('POST', DETECHDOMAIN, data, function (res) {
            dataLogin.game_code = res.data.game_code;
            dataLogin.app_id = res.data.app_id;
            dataLogin.fb_id = res.data.fb_id;
            dataLogin.google_id = res.data.google_id;
            //dataLogin.fb_id = '1081988102192438';
            dataINFOGAME.app_key = res.data.app_id;

            setCookie('fb_id', res.data.fb_id);
            //setCookie('fb_id', '1081988102192438');
            // setCookie('app_id', res.data.app_key);
            // setCookie('vi_name', res.data.vi_name);
            Infogame.hide_brand = res.data.hide_brand;
            Infogame.vi_name = res.data.vi_name;
            Infogame.icon = res.data.icon_game;
            Infogame.channeling = res.data.channeling;
            Infogame.integratedMomo = res.data.integratedMomo;
            Infogame.integratedTrueMoney = res.data.integratedTrueMoney;
            Infogame.integratedSmsViettel = res.data.integratedSmsViettel;
            Infogame.integratedSmsMobifone = res.data.integratedSmsMobifone;
            Infogame.mobifoneSyntax = res.data.mobifoneSyntax;
            Infogame.integratedViettelPay = res.data.intergratedViettelPay;
            Infogame.scoinChargeMaintain = res.data.scoinChargeMaintain;
            Infogame.packageMessages = res.data.packageGroupMessage;
            Infogame.newPackageList = res.data.newPackageList;
            document.querySelector('link[rel="shortcut icon"]').href = Infogame.icon;
            if (Infogame.hide_brand) document.querySelector('a[href="cskh.php"]').remove();
            ggSignOut();

            login();
        }, function(res){
            // myApp.alert("CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.", "Thông báo");
        });
    } else {
        mainView.router.loadPage('list_game.php');
    }
})();

function showGoogleLogin() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: dataLogin.google_id
        });
    });
    //Ä‘Ă­nh sá»± kiá»‡n cho nĂºt login google
    gapi.signin2.render('google-signin2', {
        'scope': 'profile email',
        'onsuccess': onSignIn,
        longtitle: true,
    });
}

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('facebook') >= 0 ) {
        window.location.href = e.detail.xhr.requestUrl;
        return;
    }
    if(e.detail.xhr.requestUrl.indexOf('9029') >= 0) return;
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function (e) {
    myApp.hideIndicator();
});

function login() {
    var act = getCookie('access_token');
    if (!act) {
        var login_select = myApp.modal({
            title: 'Chá»n hĂ¬nh thá»©c Ä‘Äƒng nháº­p',
            text: '',
            afterText: '' +
            '<div class="list-block my-modal-body">' +
                '<ul>' +
                    '<li class="item-content">' +
                        '<div class="item-inner">' +
                            '<div class="item-input">' +
                                '<a class="modal-button button button-big button-fill button-raised">ÄÄƒng nháº­p</a>' +
                            '</div>' +
                        '</div>' +
                    '</li>' +
                    '<li class="item-content">' +
                         '<div class="item-inner">' +
                             '<div class="item-input">' +
                                '<a class="modal-button button button-big button-fill button-raised login-fb">Facebook</a>' +
                            '</div>' +
                        '</div>' +
                    '</li>' +
                    '<li class="item-content"' + (!dataLogin.google_id ? 'style="display:none"' : '') + '>' +
                        '<div id="google-signin2" class="item-inner">' +
                            '<img src="images/google-animation.gif" class="google-animation" />' +
                        '</div>' +
                    '</li>' +
                '</ul>' +
            '</div><div id="login-modal"></div>',
            buttons: [{
                text: 'Login',
                onClick: function () {
                    showLoginNormal();
                }
            }, {
                text: 'Facebook',
                onClick: function () {
                    LoginFB();
                }
            }, {
                text: 'Há»§y',
                onClick: function () {
                    cancelLogin();
                }
            }]
        });

    } else {
        if(getCookie('user_payment_code') == '') {
            logout();
        } else {
            getAppInfo();
        }
    }
}

function cancelLogin() {
    window.location.href = 'https://nap.sohagame.vn';
}

function showLoginNormal(error) {
    var show_err = error ? "block" : "none";
    var login_normal = myApp.modal({
        title: 'ÄÄƒng nháº­p',
        text: 'CĂ³ thá»ƒ Ä‘Äƒng nháº­p báº±ng sá»‘ Ä‘iá»‡n thoáº¡i, Email cá»§a báº¡n.',
        afterText: '<p class="error" style="display: ' + show_err + '">' + error + '</p>' +
        '<div class="list-block my-modal-body">' +
            '<ul>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<input type="email" placeholder="Phone / Email" id="phoneOrEmail" class="input" />' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">ÄÄƒng nháº­p</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised login-fb">Facebook</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content"' + (!dataLogin.google_id ? 'style="display:none"' : '') + '>' +
                    '<div id="google-signin2" class="item-inner">' +
                        '<img src="images/google-animation.gif" class="google-animation" />' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">Há»§y</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
            '</ul>' +
        '</div><div id="login-modal"></div>',
        buttons: [{
            text: 'Login',
            onClick: function () {
                var email = $$('#phoneOrEmail').val();
                if (email) {
                    dataLogin.email = email;
                    callAPILOGIN('POST', CHECKEMAILPHONE, dataLogin, function (res) {
                        if (res.data) {
                            getConfirmPassWord();
                        } else {
                            if (isNaN(email)) {
                                SendOTPMail(email);
                            } else {
                                dataRegister.phone = email;
                                SendOTP();
                            }
                        }
                    }, function (res) {
                        showLoginNormal(res.message);
                    });
                } else {
                    showLoginNormal('Email hoáº·c sá»‘ Ä‘iá»‡n thoáº¡i khĂ´ng Ä‘á»ƒ trá»‘ng');
                }
            }
        }, {
            text: 'Facebook',
            onClick: function () {
                LoginFB();
            }
        }, {
            text: 'Há»§y',
            onClick: function () {
                cancelLogin();
            }
        }]
    });
}

function getConfirmPassWord(error) {
    var show_err = error ? "block" : "none";
    var login_pass = myApp.modal({
        title: 'ÄÄƒng nháº­p',
        text: 'TĂ i khoáº£n ' + dataLogin.email + ' Ä‘Ă£ tá»“n táº¡i, má»i báº¡n nháº­p máº­t kháº©u',
        afterText: '<p class="error" style="display: ' + show_err + '">' + error + '</p>' +
        '<div class="list-block my-modal-body">' +
            '<ul>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<input type="password" placeholder="Máº­t kháº©u" id="oldPassword" class="input" />' +
                            '<i class="material-icons icon_password" id="off_password" style="display: none" onclick="Offpass()">visibility</i>'+
                            '<i class="material-icons icon_password" id="show_password" onclick="Showpass()">visibility_off</i>'+
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">ÄÄƒng nháº­p</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised login-fb">Facebook</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">Há»§y</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
            '</ul>' +
        '</div>',
        buttons: [{
            text: 'Login',
            onClick: function () {
                var password = $$('#oldPassword').val();
                if (password) {
                    dataLogin.password = password;
                    callAPILOGIN('POST', LOGIN_URL, dataLogin, loginSuccess, function (res) {
                        getConfirmPassWord(res.message);
                    });
                } else {
                    getConfirmPassWord('Máº­t kháº©u khĂ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng.');
                }
            }
        }, {
            text: 'Facebook',
            onClick: function () {
                LoginFB();
            }
        }, {
            text: 'Há»§y',
            onClick: function () {
                cancelLogin();
            }
        }]
    });

}

var loginSuccess = function (res) {
    if (res.status == 'confirm_otp') {
        setCookie('otp_token', res.otp_token, 3);
        confirmLoginOTP('', res.message);
    } else if (res.status == 'success') {
        getUserInfoAndSaveToClient(res.access_token, dataLogin.app_id, function (userInfo) {
            callAPILOGIN('GET', GETUSERPAYMENTCODE, {'access_token' : res.access_token}, function (data) {
                setCookie('user_payment_code',data.user_payment_code)
                setCookie('access_token', res.access_token, 30);
                setCookie('app_id', dataLogin.app_id, 30);
                getAppInfo();
            }, function (res) {
                // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
            });
        });
    }
};

function getUserInfoAndSaveToClient (act, appId, callback) {
    var data = {
        'access_token': act,
        'app_id': appId
    };
    callAPIGETUSERINFO('GET', GETUSERINFO, data, function (res) {
        setCookie('email', res.user_info.email, 30);
        setCookie('username', res.user_info.username, 30);
        callback(res);
    }, function (res) {
        // myApp.alert(res.message, 'Thông báo');
    });
}

function confirmLoginOTP(error, description) {
    var show_err = error ? "block" : "none";
    var description  = description ? description : "Báº¡n hĂ£y nháº­p mĂ£ OTP tá»« App Google Authentication";
    var text = description + '<br><a href="" id="resend">Gá»­i láº¡i mĂ£ OTP.</a> <div id="result-send-again"></div>';
    var login_otp = myApp.modal({
        title: 'ÄÄƒng nháº­p',
        text: text,
        afterText: '<p class="error" style="display: ' + show_err + '">' + error + '</p>' +
        '<div class="list-block my-modal-body">' +
            '<ul>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<input type="tel" name="authentication" placeholder="MĂ£ OTP" class="input" />' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">ÄÄƒng nháº­p</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised login-fb">Facebook</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">Há»§y</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
            '</ul>' +
        '</div>',
        buttons: [{
            text: 'ÄÄƒng nháº­p',
            onClick: function () {
                var code = $$('input[name="authentication"]').val();
                if (code) {
                    var dataOTP = {
                        otp_token: getCookie('otp_token'),
                        code: code,
                        app_id: dataLogin.app_id
                    };

                    callAPILOGIN('GET', CONFIRM_OTP, dataOTP, loginSuccess, function(res){
                        confirmLoginOTP(res.message, description);
                    });
                } else {
                    confirmLoginOTP('Vui lĂ²ng nháº­p mĂ£ OTP', description);
                }
            }
        }, {
            text: 'Facebook',
            onClick: function () {
                LoginFB();
            }
        }, {
            text: 'Há»§y',
            onClick: function () {
                cancelLogin();
            }
        }]
    });

    $$(login_otp).find("#resend").on('click', function (e) {
        var _data = {
            otp_token: getCookie('otp_token')
        };
        callAPILOGIN("GET", RESEND_OTP, _data, function (res) {
            setCookie('otp_token', res.otp_token, 3);
            $$('#result-send-again').text('MĂ£ OTP Ä‘Ă£ Ä‘Æ°á»£c gá»­i láº¡i.');
            setTimeout(function(){
                $$('#result-send-again').text('');
            }, 5000);
        }, function (res) {
            getConfirmOTPMail(res.message);
        });
    });
}

function SendOTP() {
    callAPILOGIN("GET", REGISTERPHONE, dataRegister, function (res) {
        getConfirmOTP();
    }, function (res) {
        if (res.message == 'Vui lĂ²ng nháº­p Ä‘Ăºng Ä‘á»‹nh dáº¡ng sá»‘ Ä‘iá»‡n thoáº¡i.' || res.message == 'Báº¡n nháº­p sai sá»‘ Ä‘iá»‡n thoáº¡i!') {
            showLoginNormal(res.message);
        } else {
            getConfirmOTP(res.message);
        }
    });
}

function SendOTPMail(email){
    dataRegister.phone = email;
    callAPILOGIN("GET", REGISTEREMAIL, dataRegister, function (res) {
        getConfirmOTPMail();
    }, function (res) {
        if (res.message == 'Vui lĂ²ng nháº­p Ä‘Ăºng Ä‘á»‹nh dáº¡ng sá»‘ Ä‘iá»‡n thoáº¡i.' || res.message == 'Báº¡n nháº­p sai sá»‘ Ä‘iá»‡n thoáº¡i!' || res.message == 'Vui lĂ²ng nháº­p Ä‘Ăºng Ä‘á»‹nh dáº¡ng email.') {
            showLoginNormal(res.message);
        } else {
            getConfirmOTPMail(res.message);
        }
    });
}

function getConfirmOTPMail(error) {
    var show_err = error ? "block" : "none";
    var login_otp = myApp.modal({
        title: 'ÄÄƒng nháº­p',
        text: 'Nháº­p mĂ£ OTP Ä‘Ă£ Ä‘Æ°á»£c gá»­i vĂ o Ä‘á»‹a chá»‰ email ' + dataRegister.phone + '<br><a id="resend">áº¤n vĂ o Ä‘Ă¢y Ä‘á»ƒ nháº­n láº¡i.</a><div id="result-send-again"></div>',
        afterText: '<p class="error" style="display: ' + show_err + '">' + error + '</p>' +
        '<div class="list-block my-modal-body">' +
            '<ul>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<input type="text" placeholder="MĂ£ OTP" id="code_otp" class="input" />' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">ÄÄƒng nháº­p</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised login-fb">Facebook</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">Há»§y</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
            '</ul>' +
            '</div>',
        buttons: [{
            text: 'Login',
            onClick: function () {
                var otp = $$('#code_otp').val();
                if(otp) {
                    dataVerify.phone = dataRegister.phone;
                    dataVerify.otp = otp;
                    dataVerify.app_id = dataLogin.app_id;
                    callAPILOGIN("GET", VERIFYOTP, dataVerify, function (res) {
                        setCookie('access_token', res.data.access_token);
                        setCookie('email', dataRegister.phone);
                        getAppInfo();
                    }, function (res) {
                        getConfirmOTPMail(res.message);
                    });
                } else {
                    getConfirmOTPMail('Vui lĂ²ng nháº­p mĂ£ OTP.');
                }
            }
        }, {
            text: 'Facebook',
            onClick: function () {
                LoginFB();
            }
        }, {
            text: 'Há»§y',
            onClick: function () {
                cancelLogin();
            }
        }]
    });

    $$(login_otp).find("#resend").on('click', function (e) {
        callAPILOGIN("GET", REGISTEREMAIL, dataRegister, function (res) {
            $$('#result-send-again').text('MĂ£ OTP Ä‘Ă£ Ä‘Æ°á»£c gá»­i láº¡i.');
            setTimeout(function(){
                $$('#result-send-again').text('');
            }, 5000);
        }, function (res) {
            getConfirmOTPMail(res.message);
        });
    });
}

function getConfirmOTP(error) {
    var show_err = error ? "block" : "none";
    var sub_phone = 'xxxxxxx' + dataRegister.phone.substr(7);
    var text = 'Nháº­p mĂ£ OTP Ä‘Ă£ Ä‘Æ°á»£c gá»­i vĂ o sá»‘ Ä‘iá»‡n thoáº¡i ' + sub_phone + '<br><a id="resend">áº¤n vĂ o Ä‘Ă¢y Ä‘á»ƒ nháº­n láº¡i.</a> <div id="result-send-again"></div>';

    var login_otp = myApp.modal({
        title: 'ÄÄƒng nháº­p',
        text: text,
        afterText: '<p class="error" style="display: ' + show_err + '" id="text_error">' + error + '</p>' +
        '<div class="list-block my-modal-body">' +
            '<ul>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<input type="tel" placeholder="MĂ£ OTP" id="code_otp" class="input"/>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">ÄÄƒng nháº­p</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised login-fb">Facebook</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
                '<li class="item-content">' +
                    '<div class="item-inner">' +
                        '<div class="item-input">' +
                            '<a class="modal-button button button-big button-fill button-raised">Há»§y</a>' +
                        '</div>' +
                    '</div>' +
                '</li>' +
            '</ul>' +
            '</div>',
        buttons: [{
            text: 'Login',
            onClick: function () {
                var otp = $$('#code_otp').val();
                if(otp) {
                    dataVerify.phone = dataRegister.phone;
                    dataVerify.otp = otp;
                    dataVerify.app_id = dataLogin.app_id;
                    callAPILOGIN("GET", VERIFYOTP, dataVerify, function (res) {
                        setCookie('access_token', res.data.access_token);
                        setCookie('email', dataRegister.phone);
                        getAppInfo();
                    }, function (res) {
                        getConfirmOTP(res.message);
                    });
                } else {
                    getConfirmOTP('Vui lĂ²ng nháº­p mĂ£ OTP.');
                }
            }
        }, {
            text: 'Facebook',
            onClick: function () {
                LoginFB();
            }
        },{
            text: 'Há»§y',
            onClick: function () {
                 cancelLogin();
            }
        }]
    });

    $$(login_otp).find("#resend").on('click', function (e) {
        callAPILOGIN("GET", REGISTERPHONE, dataRegister, function (res) {
            $$('#result-send-again').text('MĂ£ OTP Ä‘Ă£ Ä‘Æ°á»£c gá»­i láº¡i.');
            setTimeout(function(){
                $$('#result-send-again').text('');
            }, 5000);
        }, function (res) {
            getConfirmOTP(res.message);
        });
    });
}

function getAppInfo() {
    SuccesPayLoad();
    ShowEmail();

    //Update thong tin email cho chatbot
    var data_callback = getCookie('data_callback_chatbot');
    if(data_callback) sendDataToChatBot(data_callback, getCookie('email'));
}
function ShowEmail() {
    $$('#title_user').text(getCookie('email'));
}

var SuccesPayLoad = function() {
    showAppInfo(true);

    var check_flagPayBank = getCookie('flagPayBank');
    var check_flagPayVisa = getCookie('flagPayVisa');
    var check_flagPaySMS = getCookie('flagPaySMS');
    var check_flagPayMomo = getCookie('flagPayMomo');
    var check_flagPayPaypal = getCookie('flagPayPaypal');
    var check_flagPayTrueMoney = getCookie('flagPayTrueMoney');
    var check_flagPayPayoo = getCookie('flagPayPayoo');
    var check_flagViettelPay = getCookie('flagPayViettel');
     var check_flagVnpay = getCookie('flagPayVnpay');

     if (check_flagPayBank == 'true' || check_flagPaySMS  == 'true' || check_flagPayMomo == 'true' || check_flagPayTrueMoney == 'true' || check_flagPayPaypal == 'true' || check_flagPayVisa == 'true' || check_flagPayPayoo == 'true' || check_flagViettelPay == 'true' || check_flagVnpay == 'true') {
        CharacterSelected.areaid = getCookie('areaid');
        CharacterSelected.roleid = getCookie('roleid');
        CharacterSelected.rolename = getCookie('rolename');
        CharacterSelected.level = getCookie('level');
        CharacterSelected.areaname = getCookie('areaname');

        PacketChare.order_info = order_info_pay;
        PacketChare.areaid = areaid_pay;
        PacketChare.roleid = roleid_pay;
    }

    if (status_pay =='success' && (check_flagPayBank == 'true' || check_flagPaySMS  == 'true' || check_flagPayMomo == 'true' || check_flagPayTrueMoney == 'true'  || check_flagPayPaypal == 'true' || check_flagPayVisa == 'true' || check_flagPayPayoo == 'true' || check_flagViettelPay == 'true' || check_flagVnpay == 'true') ) {
        var data = {
            app_id: getCookie('app_id'),
            access_token: getCookie('access_token'),
            order_info: PacketChare.order_info,
            areaid: PacketChare.areaid,
            roleid: PacketChare.roleid
        };

        callAPILOGIN('POST', PAYLIST, data, function (res) {
            user_info.scoin = res.user_info.scoin;
            statusPayment.title = 'Náº¡p tiá»n thĂ nh cĂ´ng';
            statusPayment.title_tk = 'TĂ i khoáº£n cĂ²n';
            statusPayment.btn = 'Náº¡p thĂªm tiá»n';
            statusPayment.action = 'buy_more';
            if (urlQuery.notice) {
                statusPayment.msg = urlQuery.notice.replace(/\+/g, " ");
            }

            if(order_info_pay != 'pay_now'){
                statusPayment.title = 'Mua váº­t pháº©m thĂ nh cĂ´ng';
                statusPayment.btn = 'Mua váº­t pháº©m khĂ¡c';
                statusPayment.action = 'buy_others_item';
            }

            $$.each(res.data, function (key, item) { listpacket.push(item); });

            //Push dá»¯ liá»‡u tá»›i chat bot náº¿u cĂ³ params chatbot truyá»n sang vĂ  user mua tiá»n game
            var data_callback = getCookie('data_callback_chatbot');
            if(order_info_pay != 'pay_now' && data_callback) {
                var money = listpacket.filter(function(item) { return item.order_info == order_info_pay })[0].scoin * 1000;
                var balance = user_info.scoin * 1000;
                sendDataToChatBot(data_callback, getCookie('email'), money, balance, transid);
            }
            //=================================================================================
            if(mainView.activePage.name == 'buy'){
                setTimeout(myApp.showIndicator,0);
                setTimeout(function(){
                    loadContentBuy();
                    myApp.hideIndicator();
                },1000);
            }
            else mainView.router.loadPage('buy.php');
        }, function (res) {
            // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
            setCookie('flagPayBank', null, -1);
            setCookie('flagPayVisa', null, -1);
            setCookie('flagPaySMS', null, -1);
            setCookie('flagPayMomo', null, -1);
            setCookie('flagPayTrueMoney', null, -1);
            setCookie('flagPayPaypal', null, -1);
            setCookie('flagPayPayoo', null, -1);
            setCookie('flagPayViettel', null, -1);
            setCookie('flagPayVnpay', null, -1);
        });
    } else if(status_pay == 'fail' &&( check_flagPayBank == 'true' || check_flagPaySMS  == 'true' || check_flagPayMomo == 'true' || check_flagPayTrueMoney == 'true' ||  check_flagPayPaypal == 'true' || check_flagPayVisa == 'true' || check_flagPayPayoo == 'true' || check_flagViettelPay == 'true' || check_flagVnpay == 'true') ){
        var data = {
            app_id: getCookie('app_id'),
            access_token: getCookie('access_token'),
            order_info: PacketChare.order_info,
            areaid: PacketChare.areaid,
            roleid: PacketChare.roleid,
        };

        callAPILOGIN('POST', PAYLIST, data, function (result) {
            $$.each(result.data, function (key, item) { listpacket.push(item); });

            user_info.scoin = result.user_info.scoin;
            statusPayment.title = 'Náº¡p tiá»n khĂ´ng thĂ nh cĂ´ng';
            statusPayment.title_tk = 'TĂ i khoáº£n cĂ²n';
            statusPayment.btn       = 'Náº¡p thĂªm tiá»n';
            statusPayment.action    = 'buy_more';
            statusPayment.msg = urlQuery.message.replace(/\+/g, " ");

            if (PacketChare.order_info  == 'pay_now') {
                statusPayment.error_msg = '';
            } else {
                var data_packet_select = getPacketSelect(PacketChare.order_info);
                var need_more = (data_packet_select.scoin - user_info.scoin) + ' SohaCoin';
                statusPayment.error_msg = 'KhĂ´ng Ä‘á»§ tiá»n Ä‘á»ƒ thanh toĂ¡n váº­t pháº©m , xin vui lĂ²ng náº¡p thĂªm ' + need_more + ' Ä‘á»ƒ thanh toĂ¡n váº­t pháº©m';
            }

            mainView.router.loadPage('buy.php');
        }, function (res) {
            // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
            setCookie('flagPayBank', null, -1);
            setCookie('flagPayVisa', null, -1);
            setCookie('flagPaySMS', null, -1);
            setCookie('flagPayMomo', null, -1);
            setCookie('flagPayTrueMoney', null, -1);
            setCookie('flagPayPaypal', null, -1);
            setCookie('flagPayPayoo', null, -1);
            setCookie('flagPayViettel', null, -1);
            setCookie('flagPayVnpay', null, -1);
        });
    } else {
        callAPILOGIN('POST', INFOGAME, dataINFOGAME, function (res) {
            setCookie('icon', res.data.img_120_120);
            setCookie('app_id', res.data.app_key);
            setCookie('vi_name', res.data.vi_name);

            Infogame.vi_name = res.data.vi_name;

            mainView.router.loadPage('listchar.php');
        }, function (res) {
            // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
        });
    }
};

var listGame = [];

myApp.onPageInit('list_game', function (page) {
    var path = window.location.pathname;
    path = path.replace('/', '');
//    if(!path){
//        $$('body.framework7-root').addClass('list-game');
//    }
    //addCss("css/index.css");
    callAPILOGIN('GET', LISTACTIVEGAME, {}, function (res) {
        listGame = res.data;
        renderListGame(res.data);
    }, function () {
        // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
    });

    var direction = 'next';
    if($$('.swiper-container').length > 0) {
        var swiperInterval = setInterval(function() {
            if(!$$('.swiper-container').length) {
                clearInterval(swiperInterval);
                return;
            }

            var mySwiper = $$('.swiper-container')[0].swiper;
            if(direction == 'next') {
                if(!mySwiper.slideNext()) {
                    direction = 'prev';
                }
            } else {
                if(!mySwiper.slidePrev()) {
                    direction = 'next';
                }
            }
        }, 2000);
    }

    $$('#searchGameInput').off('keyup');
    $$('#searchGameInput').keyup(function(){
        if($$(this).val().length > 1) {
        var searchQ = $$(this).val().toLowerCase();
            listGameClone = listGame.filter(function(game){
                return game.game_display_name.toLowerCase().indexOf(searchQ) > -1;
            });

            renderListGame(listGameClone);
        } else {
            renderListGame(listGame);
        }
    })
});

function redirectToGame(domain) {
    history.pushState({}, null, splitDomain(domain));
    var data = {
        domain: domain
    };
    if (hostname == 'soapdev.local') data.domain = 'nap.mongvolam.vn';

    callAPILOGIN('POST', DETECHDOMAIN, data, function (res) {
        //$$('body.framework7-root').removeClass('list-game');
        dataLogin.game_code = res.data.game_code;
        dataLogin.app_id = res.data.app_id;
        dataLogin.fb_id = res.data.fb_id;
        dataLogin.google_id = res.data.google_id;
        //dataLogin.fb_id = '1081988102192438';
        dataINFOGAME.app_key = res.data.app_id;

        setCookie('fb_id', res.data.fb_id);
        //init láº¡i fb
        window.fbAsyncInit = function () {
            FB.init({
                appId:  res.data.fb_id,
                cookie: true,  // enable cookies to allow the server to access
                               // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.8' // use graph api version 2.8
            });
        };

        fbAsyncInit();
        //setCookie('fb_id', '1081988102192438')
        // setCookie('app_id', res.data.app_key);
        // setCookie('vi_name', res.data.vi_name);
        Infogame.hide_brand = res.data.hide_brand;
        Infogame.vi_name = res.data.vi_name;
        Infogame.icon = res.data.icon_game;
        Infogame.channeling = res.data.channeling;
        Infogame.integratedMomo = res.data.integratedMomo;
        Infogame.integratedTrueMoney = true;
        Infogame.integratedSmsViettel = res.data.integratedSmsViettel;
        Infogame.integratedSmsMobifone = res.data.integratedSmsMobifone;
        Infogame.mobifoneSyntax = res.data.mobifoneSyntax;
        Infogame.integratedViettelPay = res.data.intergratedViettelPay;
        Infogame.scoinChargeMaintain = res.data.scoinChargeMaintain;
        Infogame.packageMessages = res.data.packageGroupMessage;
        Infogame.newPackageList = res.data.newPackageList;
        document.querySelector('link[rel="shortcut icon"]').href = Infogame.icon;
        if (Infogame.hide_brand) document.querySelector('a[href="cskh.php"]').remove();
        ggSignOut();

        login();
    }, function(res){
        // myApp.alert("CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.", "Thông báo");
    });
}

function renderListGame(games) {
    $$('#listGame').html('');
    if(!games.length) {
        $$('#listGame').append('<h3>KhĂ´ng cĂ³ game phĂ¹ há»£p.</h3>');
    }
    $$.each(games, function(k, v) {
        var html = '<div class="game">';
        if(v.is_new) {
            html += '<span class="iNew"></span>';
        } else if (v.is_hot) {
            html += '<span class="iHot"></span>';
        } else {
            html = '<div class="game not-hot-new">';
        }
        html +='<a data-path="' + splitDomain(v.domain) + '" href="javascript:void(0)" onclick="redirectToGame(' + "'" + v.domain + "'" + ')" class="game_icon">' +
            '<img src="' + v.game_icon + '" alt="" class="imgFull">' +
            '</a>' +
        '<a href="javascript:void(0)" class="game_name">' + v.game_display_name + '</a>';
        if(v.maintain) {
            html += '<a href="javascript:void(0)" class="warning">( Báº£o trĂ¬ payment )</a>';
        }

        html +='</div>';

        $$('#listGame').append(html);
    });
}

function splitDomain(domain){
    if(domain == 'https://nap.ngokhong.sohagame.vn') {
        return 'ngokhong.sohagame';
    }
    var d = domain.split('.');
    return d[1];
}

function showAppInfo(show, pageName) {
    var text_info = link_agency;

    var userInfoPayment = '<div style="float: left;width: 100%; padding: 0">ID cù‰a bà£n là€ : <span style="font-weight: bold;color: #06a092">' + getCookie('user_payment_code') + '</span></div>';
    pageName = pageName || mainView.activePage.name;
    // var text_info = '';
    if (CharacterSelected.rolename && CharacterSelected.areaname && show) {
        text_info = '<h6><i class="material-icons">computer</i> Server: ' + CharacterSelected.areaname + '</h6>'+
            '<h6><i class="material-icons">person</i> ' + CharacterSelected.rolename + ' - Level: ' + CharacterSelected.level +'</h6>';
    }
    $$('.link_agency').html(link_agency);

    var content = '<img src="' + Infogame.icon + '"><div><h5>' + Infogame.vi_name + '</h5>' + text_info + userInfoPayment + '</div>';
    $$('.view .pages .page[data-page="' + pageName + '"] .appinfo').html(content);
}

myApp.onPageInit('listchar', function (page) {
    var data = {
        app_id: getCookie('app_id'),
        access_token: getCookie('access_token')
    };

    callAPILOGIN('GET', CHARACTER, data, function (res) {
        showAppInfo(false, 'listchar');
        var dataCharacter = res.data;
        var size = Object.size(dataCharacter);
        if (size > 0) {
            $$('#status_charactor').text('Chá»n nhĂ¢n váº­t');
            var rowTemplate = '<li class="list_ngang">' +
                                '<a class="item-link item-content {{suggested}}">' +
                                    '<div class="item-inner">' +
                                        '<div class="item-title">' +
                                            '<i class="material-icons computer">computer</i> <span class="areaname">Server: {{areaname}}</span><br>' +
                                            '<i class="material-icons person">person</i> <span class="rolename">{{rolename}} - Level: {{level}}</span>' +
                                        '</div>' +
                                        '{{suggestPay}}' +
                                    '</div>' +
                                '</a>' +
                            '</li>';
            $$.each(dataCharacter, function (keyChild, itemChild) {
                var roleid = itemChild.roleid;
                var areaid = itemChild.areaid;

                if(roleid) {
                    itemChild.suggestPay = itemChild.suggest ? '<div class="item-after"><span class="badge bg-red">Äá» cá»­ náº¡p</span></div>' : '';
                    itemChild.suggested = itemChild.suggest ? 'character-suggested' : '';
                    var content = parseTemplate(rowTemplate, itemChild);

                   $$(content).appendTo("#list_character").find('a').on('click', function (e) {
                       CharacterSelected.roleid = itemChild.roleid;
                       CharacterSelected.areaid = itemChild.areaid;
                       CharacterSelected.rolename = itemChild.rolename;
                       CharacterSelected.level = itemChild.level;
                       CharacterSelected.areaname = itemChild.areaname;
                       setCookie('roleid', roleid);
                       setCookie('areaid', areaid);
                       setCookie('rolename', itemChild.rolename);
                       setCookie('level', itemChild.level);
                       setCookie('areaname', itemChild.areaname);
                       if (navigator.onLine) {
                           mainView.router.loadPage('select_packet.php');
                       } else {
                           myApp.alert('Vui lĂ²ng kiá»ƒm tra káº¿t ná»‘i máº¡ng vĂ  thá»­ láº¡i', 'Lá»—i káº¿t ná»‘i');
                       }
                   });
               }
            });
        }
    }, function () {
        // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
    });
});

myApp.onPageInit('select_packet', function (page) {
    showAppInfo(true, 'select_packet');
    var data = {
        app_id: getCookie('app_id'),
        access_token: getCookie('access_token')
    };

    callAPILOGIN('POST', PAYLIST, data, function (rs) {
        var package = rs.data;
        var now = Date.parse(new Date) / 1000;
        var promotionList = package.filter(function (item) { return item.promotion && item.promotion_time > now; });

        user_info.scoin = rs.user_info.scoin;
        user_info.user_id = rs.user_info.user_id;
        // renderPayPacket('', 'MĂ£ coupon', 0, 'nháº­p ngay', 'pay_now' , rs);
        renderPayPacket('./images/napgame/scoin.png', 'Mua SohaCoin', 0, 'pay_now');
        if (promotionList.length) renderPromotionList(promotionList);
        if (Object.keys(rs.buyNowPromotion).length > 0) renderbuyNowPromotionList(rs.buyNowPromotion);
        for (var i in package) {
            var item = package[i];
            if(listpacket.length < package.length) listpacket.push(item);
            if (item.promotion && item.promotion_time > now) continue;
            if (!Infogame.newPackageList) {
                renderPayPacket(item.images, item.description, item.scoin, item.order_info);
            } else {
                renderPayPacketNew(item.images, item.description, item.scoin, item.order_info, item.group, item.status);
            }
        }
        //hiá»‡n message cho tá»«ng group package
        if (Infogame.newPackageList && Infogame.packageMessages.length) {
            $$("#group_packet_1").html(Infogame.packageMessages[0]);
            $$("#group_packet_2").html(Infogame.packageMessages[1]);
            $$('#list_packet_new').show();
        }
        $$(".current-scoin span").html(user_info.scoin);

        // hiá»‡n cháº¥m Ä‘á» cho tab 2
        if(!getCookie('clicked' + (new Date()).toString().slice(0,10).replace(/-/g,"") + '_' + getCookie('user_payment_code') + '_' + dataLogin.app_id)) {
            $$('#special-promotion').addClass('marked');
        }
    }, function () {  });
});

var renderPayPacketNew = function(images, description, scoin, order_info, group, status) {
    var buttonColor = order_info == 'pay_now' ? 'theme-orange' : '';
    var buttonText = order_info == 'pay_now' ? 'MUA NGAY' : (scoin + ' SohaCoin');
    var button =  '<a class="pay-button button button-fill"><div class="scoin-icon"></div>' + buttonText + '</a>';
    if(status == '1') {
        var packageIcon = '<img src="images/status_hot.png" class="package_status" />';
    } else if (status == '2') {
        var packageIcon = '<img src="images/status_new.png" class="package_status" />';
    } else if (status == '3') {
        var packageIcon = '<img src="images/status_1_day.png" class="package_status" />';
    } else if (status == '4') {
        var packageIcon = '<img src="images/status_50.png" class="package_status" />';
    } else if (status == '5') {
        var packageIcon = '<img src="images/status_100.png" class="package_status" />';
    } else {
        var packageIcon = '';
    }

    var content ='<li class="normal-package ' + order_info + '">' +
        '<div class="item-inner">' +
        '<div class="package-description-wrapper">' +
            '<img class="package-img" src="' + images + '" onerror="this.src=/images/napgame/coin.png;">' +
            '<span class="package-description">' + description + '</span>' +
            packageIcon +
        '</div>' +
        '<div class="package-button-wrapper">' + button + '</div>' +
        '</div>' +
        '</li>';

    if(group == '2') {
        $$(content).appendTo("#list_packet_2").find('a.pay-button').on('click', function (e) {
            clickChooseAPacket(order_info, scoin, description);
        });
    } else {
        $$(content).appendTo("#list_packet_1").find('a.pay-button').on('click', function (e) {
            clickChooseAPacket(order_info, scoin, description);
        });
    }
}
var renderPayPacket = function(images, description, scoin, order_info) {
    var buttonColor = order_info == 'pay_now' ? 'theme-orange' : '';
    var buttonText = order_info == 'pay_now' ? 'MUA NGAY' : (scoin + ' SohaCoin');
    var button =  '<a class="pay-button button button-fill"><div class="scoin-icon"></div>' + buttonText + '</a><br>';

    var content ='<li class="normal-package ' + order_info + '">' +
        '<div class="item-content ' + buttonColor + '">' +
        '<div class="item-inner"> ' +
        '<div class="item-icon"><img src="' + images + '" onerror="this.src=/images/napgame/coin.png;"></div>' +
        '<div class="item-des">' + description + '</div>' +
        '<div class="item-after">' + button + '</div>' +
        '</div>' +
        '</div>' +
        '</li>';

    $$(content).appendTo("#list_packet").find('a.pay-button').on('click', function (e) {
        clickChooseAPacket(order_info, scoin, description);
    });
};

function renderPromotionPacket(item) {
    var button =  '<a class="pay-button button button-fill"><i class="scoin"></i>&nbsp;' + item.scoin + ' SohaCoin</a>';
    var content = '<div class="promotion-packet">' +
        '<div class="p-inner">' +
        '<div class="p-header"><img src="' + item.images + '" onerror="this.src=/images/napgame/coin.png;"> ' + item.description + '</div>' +
        '<div class="p-des"><p>' + item.promotion_message + '</p>&nbsp;<a>chi tiáº¿t</a></div>' +
        button +
        '<div class="remain-time">Thá»i gian cĂ²n : <span class="p-time">26:24</span></div>' +
        '</div>' +
        '</div>';
    var element = $$(content).appendTo(".promotion-list");
    element.find('a.pay-button').on('click', function (e) {
        clickChooseAPacket(item.order_info, item.scoin, item.description);
    });
    element.find('.p-des a').on('click', function (e) {
        myApp.alert($$(this).prev().html(), 'Chi tiáº¿t');
    });

    var now = Date.parse(new Date) / 1000;
    var remainTime = item.promotion_time - now;
    setUpRemainTime(remainTime, element.find('.remain-time .p-time'));
}

function momoPromotionClickHandler() {
    if(Infogame.scoinChargeMaintain) {
        mainView.router.loadPage('scoin_maintain.php');
        return;
    }

    if(Infogame.integratedMomo) {
        momoPayNow = false;
        PacketChare.order_info = 'pay_now';
        setCookie('provider', 'momo');
        mainView.router.loadPage('card.php');
    }
}
function renderBuyNowPromotionPackage(item)
{
    for (var key in item.common){
        var content = '';
        if(key != 'momo'){
        var button =  '<a class="pay-button button button-fill" onclick="window.location=\''+ item.common[key].link +'\'"><i class="scoin"></i>&nbsp; Mua Ngay </a>';
        content = '<div class="promotion-packet">' +
            '<div class="p-inner">' +
            '<div class="p-header"> ' +
            '<span style="display: block;">' + item.common[key].title + '</span>' +
            (item.common[key].sub_title ? ('<span style="display: block;">' + item.common[key].sub_title + '</span>') : '') +
            ' </div>' +
            button +
            '<div class="remain-time">' + item.common[key].text +'</div>' +
            '</div>' +
            '</div>';
        } else {
            if(Infogame.integratedMomo) {
                var button =  '<a class="pay-button button button-fill" onclick="momoPromotionClickHandler()"><i class="scoin"></i>&nbsp; Mua Ngay </a>';
                content = '<div class="promotion-packet momo-packet">' +
                '<div class="p-inner">' +
                '<div class="p-header"> ' +
                '<span style="display: block;">' + item.common[key].title + '</span>' +
                (item.common[key].sub_title ? ('<span style="display: block;">' + item.common[key].sub_title + '</span>') : '') +
                ' </div>' +
                button +
                '<div class="remain-time" style="color: white">' + item.common[key].text +'</div>' +
                '</div>' +
                '</div>';
            }
        }
        $$(content).appendTo(".promotion-list");
    }
}

function checkBoughtPackage(merchant,price)
{
    var data = {
        access_token : getCookie('access_token'),
        merchant : merchant,
        price : price
    };
    setCookie('before_buy', user_info.scoin);
    // callAPILOGIN('POST', CHECKBOUGHTPROMOTIONPACKAGE , data , function(res){
    //     if(res.message != 'success') myApp.alert(res.message);
    //     else
            redirectToPayGate(merchant,price,true);
    // }, function (res) {
    //     myApp.alert('CĂ³ lá»—i xáº£y ra, Vui lĂ²ng thá»­ láº¡i sau');
    // });
}

function setRemainTime(remainTime, element) {
    var h = Math.floor(remainTime / 60 / 60);
    var m = Math.floor(remainTime / 60 % 60);
    element.html(h + ':' + m);
}

function setUpRemainTime (remainTime, element) {
    setRemainTime(remainTime, element);
    var itv = setInterval(function () {
        remainTime -= 60;
        setRemainTime(remainTime, element);
        if ((remainTime - 60) <= 0) {
            clearInterval(itv);
            window.location.reload();
        }
    }, 60000);
}

function clickChooseAPacket(order_info, scoin, description) {
    PacketChare.order_info = order_info;
    PacketChare.areaid = CharacterSelected.areaid;
    PacketChare.roleid = CharacterSelected.roleid;

    if (user_info.scoin >= scoin && order_info !== 'pay_now') {
        getConfirmPayment(order_info, scoin);
    } else {
        getPaymentMethod(order_info, scoin, description);
    }
}

function renderPromotionList(list) {
    var wrapper = '<li class="promotions-package">' +
                    '<h3 class="promotions-title">GĂ³i náº¡p khuyáº¿n mĂ£i</h3>'+
                    '<div class="promotion-list">' +

                    '</div>' +
                '</li>';
    $$(wrapper).appendTo("#list_packet");

    for (var i in list) {
        renderPromotionPacket(list[i]);
    }
}

function renderbuyNowPromotionList(list) {
    var wrapper = '<li class="promotions-package">' +
                    '<h3 class="promotions-title">GĂ³i náº¡p khuyáº¿n mĂ£i</h3>'+
                    '<div class="promotion-list">' +

                    '</div>' +
                '</li>';
    $$(wrapper).appendTo("#list_packet");

     renderBuyNowPromotionPackage(list);
}
/*
// Coupon cho User .
myApp.onPageInit('coupon', function (page) {
    showAppInfo(true);
    $$(".current-scoin span").html(format_number(user_info.scoin * 1000));

    $$("#btn_verifycoupon").on('click',function(e){
        var giftcode = $$("#giftcode").val();
        if (giftcode == "") {
            $$("#coupon_err").html("HĂ£y nháº­p mĂ£ coupon Ä‘áº§y Ä‘á»§");
        }else{
            var coupon = {
                role_id: getCookie('roleid'),
                area_id: getCookie('areaid'),
                giftcode : giftcode,
                access_token: getCookie('access_token'),
            };

            callAPI('POST',VERIFYCOUPON,coupon,function(res){
                $$('#coupon_success').html('Sá»­ dá»¥ng mĂ£ coupon thĂ nh cĂ´ng !');
                $$('#coupon_err').html('');
            },function (res) {
                $$('#coupon_err').html(res.message);
                $$('#coupon_success').html('');
            });
        }

    });
    $$('.col_right').css({
        "float": "none",
        "width": "100%"
    });
});
*/

myApp.onPageInit('card', function (page) {
    showAppInfo(true, 'card');
    handleCardPageContent();

    $$("#btn_napcard").on('click', function (e) {
        var seri = $$("#seri_card").val();
        var code = $$("#code_card").val();
        if (seri == "" || code == "") {
            $$("#card_err").html("HĂ£y nháº­p MĂ£ tháº» cĂ o vĂ  sá»‘ Seri Ä‘áº§y Ä‘á»§.");
        } else {
            var card = {
                app_id: getCookie('app_id'),
                order_info: PacketChare.order_info,
                roleid: getCookie('roleid'),
                areaid: getCookie('areaid'),
                cardcode: code,
                serialnum: seri,
                access_token: getCookie('access_token'),
                provider: getCookie('provider'),
            };
            if (PacketChare.order_info == 'pay_now')  card.pay_game = 0;
            callAPILOGIN('POST', CHANGEMONEY, card, function (res) {
                user_info.scoin = res.data.scoin;
                statusPayment.title_tk = 'TĂ i khoáº£n cĂ²n';

                if (PacketChare.order_info == 'pay_now') {
                    statusPayment.title     = res.message;
                    statusPayment.btn       = 'Náº¡p thĂªm tiá»n';
                    statusPayment.action    = 'buy_more';
                    statusPayment.error_msg = '';
                    statusPayment.msg       = '';
                } else {
                    if (res.data.status_pay_ingame == 'fail') {
                        statusPayment.title     = 'Mua váº­t pháº©m khĂ´ng thĂ nh cĂ´ng';
                        statusPayment.btn       = 'Náº¡p thĂªm tiá»n';
                        statusPayment.action    = 'buy_more';
                        var data_packet_select = getPacketSelect(PacketChare.order_info);
                        var need_more = (data_packet_select.scoin - user_info.scoin) + ' SohaCoin';
                        statusPayment.error_msg = 'KhĂ´ng Ä‘á»§ tiá»n Ä‘á»ƒ thanh toĂ¡n váº­t pháº©m, xin vui lĂ²ng náº¡p thĂªm ' + need_more + ' Ä‘á»ƒ thanh toĂ¡n váº­t pháº©m';
                        statusPayment.msg       = res.message;
                    } else {
                        statusPayment.title = 'Mua váº­t pháº©m thĂ nh cĂ´ng';
                        statusPayment.btn = 'Mua váº­t pháº©m khĂ¡c';
                        statusPayment.action = 'buy_others_item';
                        statusPayment.msg = '';
                        statusPayment.error_msg = '';

                        //Push dá»¯ liá»‡u tá»›i chat bot náº¿u cĂ³ params chatbot truyá»n sang vĂ  user mua tiá»n game
                        var data_callback = getCookie('data_callback_chatbot');
                        if(PacketChare.order_info != 'pay_now' && data_callback) {
                            var money = listpacket.filter(function(item) { return item.order_info == card.order_info })[0].scoin * 1000;
                            var balance = res.data.scoin * 1000;
                            sendDataToChatBot(data_callback, getCookie('email'), money, balance, res.data.trans_id);
                        }
                        //=================================================================================
                    }
                }

                mainView.router.loadPage('buy.php');
            }, function (res) {
                $$('#card_err').html(res.message);
            });
        }
    });

    // $$("#btn_choosebank2").on('click', function (e) {
    //     var chooseLevel = $$("#level_card2").val().replace(/[.]/g, '');
    //     var provider = getCookie('provider');
    //     if(chooseLevel >= 50 && chooseLevel <= 50000){
    //         redirectToPayGate(provider,chooseLevel, true);
    //     } else {
    //         var message = chooseLevel == "" ? 'Vui lĂ²ng nháº­p giĂ¡ trá»‹ gĂ³i náº¡p' : 'Giá»›i háº¡n gĂ³i náº¡p tá»« 50.000 VNÄ Ä‘áº¿n 50.000.000 VNÄ';
    //         myApp.alert(message, 'Thông báo');
    //         $$('#level_card2').val('');
    //     }
    // });
    
    // $$("#btn_choosevisa2").on('click', function (e) {
    //     var chooseLevel = $$("#level_visa2").val().replace(/[.]/g, '');
    //     var provider = getCookie('provider');
    //     if(chooseLevel >= 50 && chooseLevel <= 50000){
    //         redirectToPayGate(provider,chooseLevel, true);
    //     } else {
    //         var message = chooseLevel == "" ? 'Vui lĂ²ng nháº­p giĂ¡ trá»‹ gĂ³i náº¡p' : 'Giá»›i háº¡n gĂ³i náº¡p tá»« 50.000 VNÄ Ä‘áº¿n 50.000.000 VNÄ';
    //         myApp.alert(message, 'Thông báo');
    //         $$('#level_visa2').val('');
    //     }
    // });

    $$("#btn_choosesms").on('click', function (e) {
        $$('#error-phone').remove();
        var choosesms = $$("#level_sms").val();
        var phoneProvider = $$('#phone_provider').val();

        var data = {
            access_token: getCookie('access_token')
        }
        callAPILOGIN('POST', USERPAYSMSBYDAY , data , function(res){
            if(res.data < 100000){
                redirectToPaySMS(choosesms, phoneProvider);
            }else{
                statusPayment.title     = 'Mua váº­t pháº©m khĂ´ng thĂ nh cĂ´ng';
                statusPayment.btn       = 'Mua váº­t pháº©m khĂ¡c';
                statusPayment.action    = 'buy_others_item';
                statusPayment.error_msg = 'TĂ i khoáº£n cá»§a báº¡n Ä‘Ă£ vÆ°á»£t ngÆ°á»¡ng thanh toĂ¡n 100.000 VNÄ/1 ngĂ y qua kĂªnh thanh toĂ¡n nĂ y !';
                PacketChare.order_info = 'pay_now';
                pay_sms_err = true;
                mainView.router.loadPage('buy.php');
            }
        }, function (res) {
            myApp.alert('CĂ³ lá»—i xáº£y ra, Vui lĂ²ng thá»­ láº¡i sau');
        });
    });

});

myApp.onPageInit('buy', function (page) {
    loadContentBuy();
});

myApp.onPageInit('sms', function (page) {
    if((Infogame.integratedSmsViettel != true && smsInfo.type === VIETTEL_TYPE) || (Infogame.integratedSmsMobifone != true && smsInfo.type === MOBI_TYPE)){
        $$('#sms_payment').html(
            ' <div class="general-message info" style="display: block;border: 1px solid #c5c5c5;">Chá»©c nÄƒng SMS chÆ°a Ă¡p dá»¥ng cho Ä‘áº§u sá»‘ cá»§a báº¡n vá»›i Game nĂ y !</div>');
    }else{
        // if (smsInfo.type === VINA_TYPE) {
        //     $$('#sms_payment').html(' <div class="general-message info" style="display: block;border: 1px solid #c5c5c5;">Chá»©c nÄƒng SMS vá»›i Ä‘áº§u sá»‘ VINA Ä‘ang báº£o trĂ¬ !</div>');
        // } else {
            showSMSSyntax();
        // }
    }



});
myApp.onPageInit('cskh', function (page) {

});

function showSMSSyntax(){
    var systax_sms = '';
    if(smsInfo.type === VIETTEL_TYPE){ // Game da dang ky voi viettel
        if(dataLogin.game_code == '123') dataLogin.game_code = '21'; // Ä‘Äƒng kĂ½ nháº§m vá»›i Viettel con SG21 vĂ  SG123
        if(dataLogin.game_code == '162') dataLogin.game_code = '158';
        systax_sms = 'SHG ' + dataLogin.game_code + ' NAP' + smsInfo.price + ' ' + user_info.user_id ;
    }

    if(smsInfo.type === VINA_TYPE){ // Game da dang ky voi vina
        systax_sms = 'VC SHG TAI' + smsInfo.price + ' ' + user_info.user_id ;
    }

    if(smsInfo.type === MOBI_TYPE){ // Game da dang ky voi mobi
         // if(hostname == 'nap.huyetchienthienha.vn') {
         //     systax_sms = 'VCC ' + Infogame.mobifoneSyntax + ' NAP' + smsInfo.price + ' ' + user_info.user_id ;
         // } else {
         //     systax_sms = 'VCC SHG NAP' + smsInfo.price + ' ' + user_info.user_id ;
         // }
         systax_sms = 'VCC ' + Infogame.mobifoneSyntax + ' NAP' + smsInfo.price + ' ' + user_info.user_id ;

    }
    
    var contentSms = 'sms:9029&body='+systax_sms;
    $$('#sms_payment').html(
        ' <div class="general-message info" style="display: block;border: 1px solid #c5c5c5;" onclick="window.location=\''+contentSms+'\'">' + systax_sms + '</div>');
    checkSms9029Done();
}

var loading = true;
var lastLoadedIndex = 1;
myApp.onPageInit('history', function (page) {
    loading = true;
    lastLoadedIndex = 1;
    scrollHistory();
    $$('.infinite-scroll').on('infinite', function () {
        scrollHistory();
    });
});
function scrollHistory(){
    if(loading === false) return;
    loading = false;
    var data = {
        access_token: getCookie('access_token'),
        page: lastLoadedIndex
    };
    callAPI('GET', TRANSFERHISTORY, data, function(res){
        var size = Object.size(res);
        if(size == 0){
            myApp.detachInfiniteScroll($$('.infinite-scroll'));
        }else{
            $$('#not_pay').hide();
            $$.each(res, function (key, item) {
                var timepay = convertTime(item.time);
                var text_scoin = item.scoin + ' SohaCoin';
                var listhistory = '<div class="item-content" style="min-height: 25px;">'+
                    '<div class="item-inner" style="min-height: 25px;"> '+
                    '<div class="item-title" style="color: #2196f3;">' + item.game_name + '<div style="font-style: italic; font-size: 11px; color: #757575;">'+timepay+'</div>' +
                    '</div>'+
                    '<div class="item-after" style="max-height: 100px;"><i class="scoin"></i>&nbsp;' + text_scoin + '</div>'+
                    '</div>'+
                    '</div>'+
                    '</li>';
                $$('#nap_history').append(listhistory);
            });
            lastLoadedIndex += 1;
        }
        loading = true;
    }, function(res){
        myApp.alert('Ä‘Ă£ cĂ³ lá»—i xáº£y ra',getCookie('game_display_name'));
    });
}

function getConfirmPayment(order_info, scoin) {

    var select_packet = getPacketSelect(order_info);
    var description = select_packet.description;
    if(description.length >15) description = description.substring(0, 15) + '...';

    var payment_type = myApp.modal({
        afterText: '<div class="full-modal">' +
        '<div class="list-block confirm-pay">' +
        '<ul>' +
        '<li class="item-content modal-header">' +
        '<div class="item-inner">' +
        '<div class="item-title">HoĂ n thĂ nh náº¡p tiá»n</div>' +
        '<div class="close modal-button"><i class="material-icons">close</i></div>' +
        '</div>' +
        '</li>' +
        '<li class="item-content">' +
        '<div class="item-inner">' +
        '<div class="item-title">TĂ i khoáº£n cĂ³</div>' +
        '<div class="item-after"><div class="scoin-icon"></div> ' + user_info.scoin + ' SohaCoin</div>' +
        '</div>' +
        '</li>' +
        '<li class="item-content">' +
        '<div class="item-inner">' +
        '<div class="item-title">Mua váº­t pháº©m</div>' +
        '<div class="item-after"><img src="' + select_packet.images + '" onerror="this.src=/images/napgame/coin.png;">' +description+'</div>' +
        '</div>' +
        '</li>' +
        '<li class="item-content">' +
        '<div class="item-inner">' +
        '<div class="item-title">GiĂ¡</div>' +
        '<div class="item-after"><div class="scoin-icon"></div>' + select_packet.scoin + ' SohaCoin</div>' +
        '</div>' +
        '</li>' +
        '<li class="item-content">' +
        '<div class="item-inner">' +
        '<a class="modal-button button button-fill color-blue ok-btn" id="btn-confirm-pay">Äá»“ng Ă½</a>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>',
        buttons: [{
            text: 'Close',
            onClick: function () {  }
        }, {
            text: 'buy',
            onClick: function () {
                $$("#btn-confirm-pay").hide();
                var data = {
                    app_id: getCookie('app_id'),
                    access_token: getCookie('access_token'),
                    order_info: PacketChare.order_info,
                    areaid: PacketChare.areaid,
                    roleid: PacketChare.roleid,
                    month_card: 0
                };

                callAPI('POST', CHARGE, data, function (res) {
                    callAPI('POST', PAYLIST, data, function (result) {
                        user_info.scoin = result.user_info.scoin;
                        statusPayment.title = 'Mua váº­t pháº©m thĂ nh cĂ´ng';
                        statusPayment.btn = 'Mua váº­t pháº©m khĂ¡c';
                        statusPayment.title_tk = 'TĂ i khoáº£n cĂ²n';
                        statusPayment.action = 'buy_others_item';
                        statusPayment.msg = '';
                        statusPayment.error_msg = '';

                        //Push dá»¯ liá»‡u tá»›i chat bot náº¿u cĂ³ params chatbot truyá»n sang vĂ  user mua tiá»n game
                        var data_callback = getCookie('data_callback_chatbot');
                        if(data_callback) {
                            var money = listpacket.filter(function(item) { return item.order_info == data.order_info })[0].scoin * 1000;
                            var balance = result.user_info.scoin * 1000;
                            sendDataToChatBot(data_callback, getCookie('email'), money, balance, res.data.trans_id);
                        }
                        //=================================================================================

                        mainView.router.loadPage('buy.php');
                    }, function (res) {
                        // myApp.alert('Náº¡p tiá»n thĂ nh cĂ´ng', 'Thông báo');
                    });
                }, function (res) {
                    statusPayment.title = 'Mua váº­t pháº©m khĂ´ng thĂ nh cĂ´ng';
                    statusPayment.btn = 'Thá»­ láº¡i';
                    statusPayment.title_tk = 'TĂ i khoáº£n cĂ³';
                    statusPayment.action = 'buy_retry';
                    statusPayment.msg = res.message;
                    mainView.router.loadPage('buy.php');
                });
            }
        }]
    });
}

function getPaymentMethod(order_info, scoin, description, callback) {
    var hideStr = 'display: none;';
    var Hide = {
        visa: '',
        sohacoin: '',
        viettel: hideStr,
        vcoin: '',
        gate: '',
        vnpay: '',
        sms: (scoin > 0 ? hideStr : ''), // TrÆ°á»ng há»£p náº¡p vĂ o game sáº½ khĂ´ng cĂ³ hĂ¬nh thá»©c SMS
        // sms: hideStr, // Táº¡m áº©n sms
        momo: (Infogame.integratedMomo == false || scoin > 20000) ? hideStr : '',
        truemoney: ( scoin > 5000 || Infogame.integratedTrueMoney == false/* || getCookie('test_sms') != '1'*/) ? hideStr : '',
        // paypal :  getCookie('test_sms') != '1' ? hideStr : '',
        paypal :  '',
        payoo : hideStr,
        viettelpay: hideStr
    };

    //Náº¿u Ä‘Æ°á»£c load tá»« chatbot thĂ¬ sáº½ láº¥y Ä‘Æ°á»£c data nĂ y tá»« cookie
    var data_callback = getCookie('data_callback_chatbot');
    if (data_callback && isMobile.any()) Hide.visa = hideStr;

    var reminder = '';
    if (order_info != undefined && order_info != 'pay_now') {
        var username = '<b> ' + getCookie('username') + ' </b>';
        var sohacoin = '<b>' + user_info.scoin + ' SohaCoin</b>';
        var needMore = '<b>mua thĂªm ' + (scoin - user_info.scoin) + ' SohaCoin</b>';
        reminder = '<li class="reminder">ChĂ o' + username + '<br/>TĂ i khoáº£n cá»§a báº¡n cĂ³ ' + sohacoin + ', vui lĂ²ng ' +
            needMore + ' Ä‘á»ƒ thanh toĂ¡n gĂ³i náº¡p <b>' + description + '</b></li>';
        bankPayNow = false;
        momoPayNow = false;
        truemoneyPayNow = false;
        paypalPayNow = false;
        SMSPayNow = false;
        viettelPayNow = false;
        checkScoinChange(user_info.scoin, continuePay);
    } else {
        bankPayNow = true;
        momoPayNow = true;
        paypalPayNow = true;
        SMSPayNow = true;
        truemoneyPayNow = true;
        viettelPayNow = true;
        vnpayPayNow = true;
        setCookie('before_buy', user_info.scoin);
        continuePay();
    }

    function continuePay() {
    var clickChooseMethod = function () {
        if (typeof callback == 'function') {
            callback();
        } else {
            mainView.router.loadPage('card.php');
        }
    };

    var payment_type = myApp.modal({
        afterText: '<div class="full-modal">' +
        '<div class="list-block chose-pay-method">' +
        '<ul>' +
        '<li class="item-content modal-header">' +
        '<div class="item-inner">' +
        '<div class="item-title">Chá»n hĂ¬nh thá»©c thanh toĂ¡n</div>' +
        '<div class="close modal-button"><i class="material-icons">close</i></div>' +
        '</div>' +
        '</li>' +
        reminder +
        '<li class="modal-button item-content item-link" style="' + Hide.visa + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/icon-pay-atm.png">' +
        '<div class="item-title"><p>Tháº» ngĂ¢n hĂ ng - ATM</p><p class="method-des special">Khuyáº¿n mĂ£i 4% SohaCoin khi thanh toĂ¡n báº±ng tháº» ATM khi náº¡p tá»« 50.000 VNÄ trá»Ÿ lĂªn</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.visa + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/visa.png">' +
        '<div class="item-title"><p>Tháº» Visa,...</p><p class="method-des special">Khuyáº¿n mĂ£i 3% SohaCoin khi thanh toĂ¡n báº±ng tháº» Visa khi náº¡p tá»« 50.000 VNÄ trá»Ÿ lĂªn</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.sohacoin + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/sohacoin.png">' +
        '<div class="item-title"><p>Tháº» SohaCoin</p><p class="method-des">Tá»‰ lá»‡ mua: 10.000 VNÄ nháº­n 10 SohaCoin</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.momo + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/momo.png">' +
        '<div class="item-title"><p>Thanh toĂ¡n qua MoMo</p><p class="method-des special">Khuyáº¿n mĂ£i 3% SohaCoin. Náº¡p tá»‘i Ä‘a 20 triá»‡u/ngĂ y</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.truemoney + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/truemoney.png">' +
        '<div class="item-title"><p>DĂ¹ng vĂ­ TrueMoney</p><p class="method-des special">Khuyáº¿n mĂ£i háº¥p dáº«n 3% cho cĂ¡c gĂ³i náº¡p. Giá»›i háº¡n 5 triá»‡u / 1 láº§n thanh toĂ¡n</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.viettel + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/viettel.png">' +
        '<div class="item-title"><p>Tháº» Viettel</p><p class="method-des">Tá»‰ lá»‡ mua: 10.000 VNÄ nháº­n 10 SohaCoin</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.vcoin + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/vcoin.png">' +
        '<div class="item-title"><p>Tháº» Vcoin</p><p class="method-des">Tá»‰ lá»‡ mua: 10.000 VNÄ nháº­n 9 SohaCoin</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.gate + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/gate.png">' +
        '<div class="item-title"><p>Tháº» Gate</p><p class="method-des">Tá»‰ lá»‡ mua: 10.000 VNÄ nháº­n 9 SohaCoin</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + (Infogame.integratedViettelPay ? '' : Hide.viettelpay) + '">' +
        '<div class="item-inner">' +
        '<img src="https://viettelpay.vn/_images/logo.svg">' +
        '<div class="item-title"><p>ViettelPay</p><p class="method-des special">PhĂ­ 2% (Ă¡p dá»¥ng tá»« 16/9/2019)</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.vnpay + '">' +
        '<div class="item-inner">' +
        '<img src="https://vnpay.vn/wp-content/uploads/2019/01/vnqr.png">' +
        '<div class="item-title"><p>VNPAY QR</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.sms + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/sms.png">' +
        '<div class="item-title"><p>Thanh toĂ¡n qua SMS</p><p class="method-des">Tá»‰ lá»‡ mua: 15.000 VNÄ nháº­n 11 SohaCoin</p></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.paypal + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/paypal-logo.png">' +
        '<div class="item-title"><p>Thanh toĂ¡n qua PayPal</p><table border="0" cellpadding="10" cellspacing="0" align="center" style="margin-top: 3px"><tr><td align="center"></td></tr><tr><td align="center"><img src="./images/napgame/paypal-button.png" style="width: 93%" alt="Check out with PayPal" /></a></td></tr></table></div>' +
        '</div>' +
        '</li>' +
        '<li class="modal-button item-content item-link" style="' + Hide.payoo + '">' +
        '<div class="item-inner">' +
        '<img src="./images/napgame/payoo_logo.png">' +
        '<div class="item-title"><p>Thanh toĂ¡n qua Payoo</p><table border="0" cellpadding="10" cellspacing="0" align="center" style="margin-top: 3px"><tr><td align="center"></td></tr><tr><td align="center"></a></td></tr></table></div>' +
        '</div>' +
        '</li>' +
        '</ul>' +
        '</div>' +
        '</div>',
        buttons: [{
            text: 'Close',
            onClick: function () {  }
            }, {
                text: 'Bank',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }

                    if (bankPayNow) {
                        setCookie('provider', 'bank');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('bank',scoin);
                    }
                }
            },{
                text: 'Visa',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }

                    if (bankPayNow) {
                        setCookie('provider', 'visa');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('visa',scoin);
                    }
                }
            }, {
                text: 'Sohacoin',
                onClick: function () {
                    reloadURL();
                    setCookie('provider', 'sohacoin');
                    clickChooseMethod();
                }
            },
            {
                text: 'Momo',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }

                    if (momoPayNow) {
                        setCookie('provider', 'momo');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('momo',scoin);
                    }
                }
            },
            {
                text: 'TrueMoney',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }

                    if (truemoneyPayNow) {
                        setCookie('provider', 'truemoney');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('truemoney',scoin);
                    }
                }
            },
            {
                text: 'viettel',
                onClick: function () {
                    reloadURL();
                    setCookie('provider', 'viettel');
                    clickChooseMethod();
                }
            }, {
                text: 'Vcoin',
                onClick: function () {
                    reloadURL();
                    setCookie('provider', 'vcoin');
                    clickChooseMethod();
                }
            }, {
                text: 'Gate',
                onClick: function () {
                    reloadURL();
                    setCookie('provider', 'gate');
                    clickChooseMethod();
                }
            }, {
                text: 'ViettelPay',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }

                    if (viettelPayNow) {
                        setCookie('provider', 'viettelpay');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('viettelpay',scoin);
                    }
                }
            }, {
                text: 'VNPAY QR',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }

                    if (vnpayPayNow) {
                        setCookie('provider', 'vnpay');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('vnpay',scoin);
                    }
               }
            }, {
                text: 'SMS',
                onClick: function () {
                    reloadURL();
                    // if (SMSPayNow) {
                        setCookie('provider', 'sms');
                        mainView.router.loadPage('card.php');

                    // }else{
                    //     redirectToPaySMS(scoin);
                    // }

                }
            },
            {
                text: 'PayPal',
                onClick: function () {
                    reloadURL();
                    if (paypalPayNow) {
                        setCookie('provider', 'paypal');
                        mainView.router.loadPage('card.php');
                    } else {
                        redirectToPayGate('paypal',scoin);
                    }
                }
            },
            {
                text: 'Payoo',
                onClick: function () {
                    reloadURL();
                    var skip = { skip : 0 };
                    checkScoinChargeMaintain(skip);
                    if(skip.skip) {
                        return;
                    }
                    setCookie('provider', 'payoo');
                    mainView.router.loadPage('card.php');
                }
            }
            /*{
                text: 'Vietnamobile',
                onClick: function () {
                    reloadURL();
                    setCookie('provider','vietnamobile');
                    mainView.router.loadPage('card.php');
                }
            },
            {
                text: 'Vinaphone',
                onClick: function () {
                    reloadURL();
                    setCookie('provider','vinaphone');
                    mainView.router.loadPage('card.php');
                }
            },
            {
                text: 'MobiFone',
                onClick: function () {
                    reloadURL();
                    setCookie('provider','mobifone');
                    mainView.router.loadPage('card.php');
                }
            },*/
        ]
    });
    }
}

function checkScoinChargeMaintain(skip) {
    if(Infogame.scoinChargeMaintain) {
        skip.skip = true;
        mainView.router.loadPage('scoin_maintain.php');
        return;
    }
}

function redirectToPayGate(type, scoin, check){
    var data = {
        app_id: getCookie('app_id'),
        order_info: PacketChare.order_info,
        roleid: getCookie('roleid'),
        areaid: getCookie('areaid'),
        price: (scoin - user_info.scoin),
        access_token: getCookie('access_token'),
        pay_game: 1,
    };
    if (check == true) {
        data.pay_game = 0;
        data.price = scoin;
        data.order_info = 'pay_now';
    }
    data.redirect_uri = window.location.href +'?order_info='+data.order_info+'&areaid='+getCookie('areaid')+'&roleid='+getCookie('roleid');

    switch (type){
        case 'bank' :
            setCookie('flagPayBank',true);
            break;
        case 'visa' :
            setCookie('flagPayVisa',true);
            break;
        case 'momo' :
            setCookie('flagPayMomo',true);
            break;
        case 'truemoney' :
            setCookie('flagPayTrueMoney',true);
            break;
        case 'viettelpay' :
            setCookie('flagPayViettel',true);
            break;
        case 'vnpay' :
            setCookie('flagPayVnpay',true);
            break;
        case 'payoo':
            setCookie('flagPayPayoo', true);
            break;
        case 'paypal' :
            setCookie('flagPayPaypal',true);
            PAYGATE = PAYPALGATE;
            break;
    }
    var dataLink = '?price=' + data.price +
        '&access_token=' + data.access_token +
        '&app_id='+data.app_id+
        '&order_info='+data.order_info+
        '&roleid='+data.roleid+
        '&areaid='+data.areaid +
        '&pay_game='+data.pay_game +
        '&type=' + type +
        '&redirect_uri=' + encodeURI(data.redirect_uri);

    link = PAYGATE + encodeURI(dataLink);
    window.location = link;
}

function redirectToPaySMS(scoin, phoneProvider){
    smsInfo.type = parseInt(phoneProvider);

    smsInfo.price = (String(scoin)).slice(0,-3);
    mainView.router.loadPage('sms.php');
}

$$('#logout').on('click', logout);

function logout() {
    setCookie('access_token', null, -1);
    setCookie('infoGame', null, -1);
    setCookie('app_id', null, -1);
    setCookie('email', null, -1);
    setCookie('vi_name', null, -1);
    setCookie('icon', null, -1);
    setCookie('PHPSESSID', null, -1);
    setCookie('areaid', null, -1);
    setCookie('provider', null, -1);
    setCookie('roleid', null, -1);
    setCookie('rolename', null, -1);
    setCookie('level', null, -1);
    setCookie('areaname', null, -1);
    setCookie('before_buy', null, -1);
    setCookie('user_payment_code', null, -1);
    // setCookie('data_callback_chatbot', null, -1);
    CharacterSelected.roleid= '';
    CharacterSelected.areaid= '';
    CharacterSelected.rolename= '';
    CharacterSelected.areaname= '';
    LogoutFB();
    ggSignOut();

    mainView.router.loadPage('#home');
    login();
}

function SHGLoginFaceBook(accessToken) {
    DatasendBig4.app_id = dataINFOGAME.app_key;
    callAPILOGIN("GET", LOGINFB, DatasendBig4, loginSuccess, function (res) {
        myApp.alert(res.message, 'Lá»—i káº¿t ná»‘i', login);
    });
}

function LoginFB() {
    FB.login(function (response) {
        if (response.authResponse) {
            DatasendBig4.big4_access_token = response.authResponse.accessToken;
            SHGLoginFaceBook();
        } else {
            login();
        }
    }, {scope: 'public_profile,email'});
}

window.fbAsyncInit = function () {
    FB.init({
        appId:  getCookie('fb_id'),
        cookie: true,  // enable cookies to allow the server to access
                       // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
    });
};

function LogoutFB() {
    FB.logout(function (response) {
            // console.log(response);
        }
    )
};

function checkLoginState() {
    $$('.waitLogin').show();
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
//    console.log('statusChangeCallback');
    //console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        var accessToken = response.authResponse.accessToken;
        //console.log('accessToken :' + accessToken);
        DatasendBig4.big4_access_token = accessToken;
        SHGLoginFaceBook(accessToken);
    } else {
        LoginFB();
    }
}

////////////////////////////////////////////////
// This is called with the results from from FB.getLoginStatus().
var loginquickSuccess = function (resp) {
    localStorage.setItem('list-character', JSON.stringify(resp));

    $$(".info-err").show(resp.message);

    if (resp.status == 'confirm_otp') {
        $$(".info-err").hide();
        $$(".shg-popup").hide();
        $$('#otp-google').show();
        //dataOTP.otp_token = resp.otp_token;
        setCookie('otp_token', resp.otp_token, 3);

    } else if (resp.status == 'success') {
        $('#back_link').hide();
        $('#menu_link').hide();
        var data_GETUSERINFO = {
            'access_token': resp.access_token,
            'app_id': dataLogin.app_id,
        };
        callAPILOGIN('GET', GETUSERINFO, data_GETUSERINFO, function (rs) {
            setCookie('access_token', resp.access_token, 30);
            setCookie('email', rs.user_info.email, 30);
            setCookie('username', _res.user_info.username, 30);
            setCookie('app_id', dataLogin.app_id, 30);
        }, function (res) {
            //LogOut();
        });

        $$(".shg-popup").hide();
        $$(".cover-full").hide();
        GetCharacter();
        mainView.router.loadPage('listCharacter.html');
        //window.location = BASE_URL;
    }

};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var check_data_callback = getCookie('data_callback_chatbot');
if (check_data_callback) {
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'Messenger'));
}

window.extAsyncInit = function() {};

Object.size = function (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var sendDataToChatBot = function (data_callback, name, money, balance, trans_id) {
    try {
        var chatBotData = JSON.parse(data_callback);
        chatBotData.attribute.name = name;
        if (IsNumeric(name)) {
            chatBotData.attribute.phone = name;
        } else {
            chatBotData.attribute.email = name;
        }

        if (arguments.length > 2 ) {
            chatBotData.attribute.money = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            chatBotData.attribute.balance = balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            chatBotData.attribute.trans_id = trans_id || '';
            chatBotData.attribute.transactionid = trans_id || '';
            chatBotData.attribute.is_update = 0;
        } else {
            chatBotData.attribute.is_update = 1;
        }

        callBotAPI(chatBotData.callback_url, JSON.stringify(chatBotData), function (data, status) {
            // postTrackError('Success', chatBotData, data, status);
        },function (xhr, status) {
            // postTrackError('Error', chatBotData, xhr, status);
        });

    } catch (e) {

    }
};

var callBotAPI = function (endpoint, data, successHandle, errorHandle) {
    $$.ajax({
        type: 'POST',
        url: endpoint, //chatBotData.callback_url,
        data: data, //JSON.stringify(chatBotData),
        cache: false,
        crossDomain: true,
        dataType: 'json',
        contentType : 'text/plain',
        success : function (data, status) {
            typeof successHandle == 'function' && successHandle(data, status);
        },
        error : function (xhr, status) {
            typeof errorHandle == 'function' && errorHandle(xhr, status);
        }
    });
};

var postTrackError = function (w, d, r, s) {
    var log = {
        whereCalled : w,
        requestData : d || {},
        response : r || '',
        status : s
    };
    var data = {params : JSON.stringify(log),
        name : 'chatbottrackError'};
    $$.post(TRACKERROR, data);
};

function handleCardPageContent() {
    var provider = getCookie('provider');

    $$(".current-scoin span").html(user_info.scoin);
    $$('.card-title').text(getPayCardTitle(provider));

    if (PacketChare.order_info == 'pay_now') {
        $$("#hide-money-lack").hide();
        $$(".general-message").show();
        $$('.col_left').hide();
        $$('.col_right').css({ "float": "none", "width": "100%" });
    } else {
        renderSuggestPayCard(PacketChare, user_info);
        renderPayList(listpacket);
    }

    displayCorrespondingViewByProvider(provider);
}

function displayCorrespondingViewByProvider(provider) {
    switch (provider) {
        case 'bank' :
            renderListBankPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_bank').show();
            $$('#card_momo').hide();
             $$('#card_visa').hide();
            $$('#card_truemoney').hide();
            $$('#card_payoo').hide();
            var promotion_message = "Khuyáº¿n mĂ£i 4% SohaCoin khi thanh toĂ¡n báº±ng tháº» ATM khi náº¡p tá»« 50.000 VNÄ trá»Ÿ lĂªn";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'visa' :
            renderListVisaPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_visa').show();
            $$('#card_truemoney').hide();
            $$('#card_payoo').hide();
            var promotion_message = "Khuyáº¿n mĂ£i 3% SohaCoin khi thanh toĂ¡n báº±ng tháº» Visa khi náº¡p tá»« 50.000 VNÄ trá»Ÿ lĂªn";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'payoo' :
            renderListPayooPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_visa').hide();
            $$('#card_payoo').show();
            $$('#card_truemoney').hide();
            var promotion_message = "";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'momo' :
            renderListMomoPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_bank').hide();
            $$('#card_visa').hide();
            $$('#card_momo').show();
            $$('#card_truemoney').hide();
            $$('#card_payoo').hide();
            var promotion_message = "Khuyáº¿n mĂ£i 3% SohaCoin. Giá»›i háº¡n tĂ i khoáº£n náº¡p MoMo : 20.000.000 VND / 1 ngĂ y / 1 tĂ i khoáº£n";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'truemoney' :
            renderListTrueMoneyPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_bank').hide();
            $$('#card_visa').hide();
            $$('#card_momo').hide();
            $$('#card_truemoney').show();
            $$('#card_payoo').hide();
            var promotion_message = "Khuyáº¿n mĂ£i 3% cho tĂ¢̀t cà‰ cĂ¡c gĂ³i náº¡p";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'sms' :
            $$('#card_default').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_truemoney').hide();
            $$('#sms').show();
            $$("#promotion-message").hide();
            $$('.link_agency').hide();
            $$('#card_payoo').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'sohacoin' :
            $$('#sms').hide();
            $$('#card_bank').hide();
            $$('#card_visa').hide();
            $$('#card_momo').hide();
            $$('#card_truemoney').hide();
            $$('#card_default').show();
            $$("#promotion-message").show();
            $$('#card_payoo').hide();
            var promotion_message = "Mua tháº» SohaCoin vá»›i giĂ¡ Æ°u Ä‘Ă£i táº¡i: <a onclick='window.open(\"https://muathe.sohagame.vn/\")'>https://muathe.sohagame.vn/</a>";
            $$('.link_agency').html(link_agency).show();
            $$('#card_vnpay').hide();
            $$('#promotion-message').html(promotion_message).show();
            $$('#card_viettelpay').hide();
            break;
        case 'paypal' :
            renderListPaypalPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_visa').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_paypal').show();
            $$('#card_truemoney').hide();
            $$('#card_payoo').hide();
            var promotion_message = "Thanh toĂ¡n qua <span style='color:#253B80'>Pay</span><span style='color:#169BD7'>Pal</span> ";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').hide();
            break;
        case 'viettelpay' :
            renderListViettelPayPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_visa').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_paypal').hide();
            $$('#card_truemoney').hide();
            $$('#card_payoo').hide();
            var promotion_message = "Thanh toĂ¡n qua <span style='color:#253B80'>ViettelPay</span> ";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_vnpay').hide();
            $$('#card_viettelpay').show();
            break;
        case 'vnpay' :
            renderListVnpayPackage();
            $$('#sms').hide();
            $$('#card_default').hide();
            $$('#card_visa').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_paypal').hide();
            $$('#card_truemoney').hide();
            $$('#card_payoo').hide();
            var promotion_message = "Thanh toĂ¡n qua <span style='color:#253B80'>VNPAY QR</span> ";
            $$('#promotion-message').html(promotion_message).show();
            $$('.link_agency').hide();
            $$('#card_viettelpay').hide();
            $$('#card_vnpay').show();
            break;
        default :
            $$('#sms').hide();
            $$('#card_bank').hide();
            $$('#card_momo').hide();
            $$('#card_truemoney').hide();
            $$('#card_visa').hide();
            $$('#card_default').show();
            $$("#promotion-message").hide();
            $$('.link_agency').hide();
            $$('#card_payoo').hide();
            $$('#card_viettelpay').hide();
            $$('#card_vnpay').hide();
            break;
    }

    $$('.provider').text(provider);
    if (provider == 'sohacoin') $$('.provider').text('SohaCoin');
}

function renderDistributorList () {
    $$(".list-distributors").empty();
    var distributor = [
        {
            key : 'Cá»­a hĂ ng cĂ´ng nghá»‡, Ä‘iá»‡n mĂ¡y',
            value : [
                './images/napgame/ap.png',
                './images/napgame/bn.png',
                './images/napgame/cps.png',
                './images/napgame/dmv.png',
                './images/napgame/fpt.png',
                './images/napgame/h.png',
                './images/napgame/hc.png',
                './images/napgame/hhm.png',
                './images/napgame/lh.png',
                './images/napgame/nk.png',
                './images/napgame/pico.png',
                './images/napgame/pt.png',
                './images/napgame/ta.png',
                './images/napgame/tgÄ‘.png',
                './images/napgame/vc.png',
                './images/napgame/vp.png',
                './images/napgame/vta.png',
            ]
        }
    ];
    $$('<p>Báº¡n cĂ³ thá»ƒ mua tháº» SohaCoin dá»… dĂ ng táº¡i cĂ¡c cá»­a hĂ ng dÆ°á»›i Ä‘Ă¢y :</p>').appendTo(".list-distributors");

    for (var i in distributor) {
        var dis = distributor[i];
        var list = '';
        for (var j in dis.value) {
            list += '<img src="' + dis.value[j] + '" />';
        }
        var content = '<div class="distributors">' +
            '<div class="distributors-title">' + dis.key + '</div>' +
            '<div class="list">' + list + '</div>' +
            '</div>';
        $$(content).appendTo(".list-distributors");
    }
}

function renderPayList(list) {
    $$("#list_demo").empty();
    $$.each(list, function (key, item) {
        var button =  '<a class="pay-button button button-fill"><div class="scoin-icon"></div>' + item.scoin + ' SohaCoin</a><br>';

        var content ='<li class="normal-package ' + item.order_info + '">' +
            '<div class="item-content">' +
            '<div class="item-inner"> ' +
            '<div class="item-icon"><img src="' + item.images + '" onerror="this.src=/images/napgame/coin.png;"></div>' +
            '<div class="item-des">' + item.description + '</div>' +
            '<div class="item-after">' + button + '</div>' +
            '</div>' +
            '</div>' +
            '</li>';
        var element = $$(content).appendTo("#list_demo");
        element.find('a.pay-button').on('click', function (e) {
            PacketChare.order_info = item.order_info;
            PacketChare.areaid = CharacterSelected.areaid;
            PacketChare.roleid = CharacterSelected.roleid;
            if (user_info.scoin >= item.scoin && item.order_info !== 'pay_now') {
                getConfirmPayment(item.order_info, item.scoin);
            } else {
                getPaymentMethod(item.order_info, item.scoin, item.description, function () {
                    $$('.view .pages .page[data-page="' + mainView.activePage.name + '"] .page-content').scrollTop(0);
                    handleCardPageContent();
                });
            }
        });
    });
}

function renderSuggestPayCard(packet, userInfo) {
    var packetSelect = getPacketSelect(packet.order_info);

    $$("#money_lack").html((packetSelect.scoin - userInfo.scoin) + ' SohaCoin');
    $$("#point_buy").html(packetSelect.description);
    $$("#point_buy_value").html('(giĂ¡ <strong>' + packetSelect.scoin + ' SohaCoin</strong>)');

    var suggestCardList = getNumCardNeedPay(packetSelect.scoin - userInfo.scoin);
    var suggestPayCardText = 'Æ¯á»›c lÆ°á»£ng: náº¡p';
    for (var card in suggestCardList) {
        var quantity = suggestCardList[card];
        suggestPayCardText += ' ' + quantity + ' tháº» ' + format_number((card) * 1000);
    }

    $$("#suggest_pay_card").html(suggestPayCardText);
}

function renderListPayooPackage() {
    $$(".list-level-card-payoo ul").empty();
    var list = [100, 300];
    for (var i in list) {
        var value = list[i];
        var money = (value * 1000).toLocaleString('vi-VN');
        var content = '<li>' +
            '<a class="button button-big" onclick="redirectToPayGate(\'payoo\' ,'+ value +', true)">' +
            '<i class="scoin"></i>' +
            '&nbsp; <strong>' + value + ' SohaCoin</strong>' +
            '<img src="images/napgame/longarrow.png"/>' +
            '<strong>' + money + ' VNÄ</strong>' +
            '</a>' +
            '</li>';
        $$(content).appendTo(".list-level-card-payoo ul");
    }
}

function renderListBankPackage() {
    $$(".list-level-card-bank ul").empty();
    // var list = [100, 300, 500, 1000];
    var list = [100, 300, 500, 1000, 2000, 5000];
    for (var i in list) {
        var value = list[i];
        var money = (value * 1000).toLocaleString('vi-VN');
        var content = '<li>' +
            '<a class="button button-big" onclick="redirectToPayGate(\'bank\' ,'+ value +', true)">' +
            '<i class="scoin"></i>' +
            '&nbsp; <strong>' + ( value * 1.04 ) + ' SohaCoin</strong>' +
            '<img src="images/napgame/longarrow.png"/>' +
            '<strong>' + money + ' VNÄ</strong>' +
            '</a>' +
            '</li>';
        $$(content).appendTo(".list-level-card-bank ul");
    }
}

function renderListVisaPackage() {
    $$(".list-level-card-visa ul").empty();
    // var list = [100, 300, 500, 1000];
    var list = [100, 300, 500, 1000, 2000, 5000];
    for (var i in list) {
        var value = list[i];
        var money = (value * 1000).toLocaleString('vi-VN');
        var content = '<li>' +
            '<a class="button button-big" onclick="redirectToPayGate(\'visa\' ,'+ value +', true)">' +
            '<i class="scoin"></i>' +
            '&nbsp; <strong>' + ( value * 1.03 ) + ' SohaCoin</strong>' +
            '<img src="images/napgame/longarrow.png"/>' +
            '<strong>' + money + ' VNÄ</strong>' +
            '</a>' +
            '</li>';
        $$(content).appendTo(".list-level-card-visa ul");
    }
}

function renderListPaypalPackage() {
    callAPILOGIN('GET', GETUSDRATE , {}, function (res) {
        $$(".list-level-card-paypal ul").empty();
        // var list = [100, 300, 500, 1000];
        var list = [100, 300, 500, 1000, 2000, 5000];
        for (var i in list) {
            var value = list[i];
            var money = (Math.round(value / res.data * 100) / 100).toLocaleString('vi-VN');
            var content = '<li>' +
                '<a class="button button-big" onclick="redirectToPayGate(\'paypal\' ,'+ value +', true)">' +
                '<i class="scoin"></i>' +
                '&nbsp; <strong>' + value + ' SohaCoin</strong>' +
                '<img src="images/napgame/longarrow.png"/>' +
                '<strong><span style="font-size:13.5px;font-family: sans-serif;">$</span>' + money + ' USD </strong>' +
                '</a>' +
                '</li>';
            $$(content).appendTo(".list-level-card-paypal ul");
        }
    }, function(res){
        // myApp.alert("CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.", "Thông báo");
    });

}

function renderListMomoPackage() {
    $$(".list-level-card-momo ul").empty();
    // var list = [100, 300, 500, 1000];
    var list = [100, 300, 500, 1000, 2000, 5000];
    for (var i in list) {
        var value = list[i];
        var money = (value *  1000).toLocaleString('vi-VN');
        var content = '<li>' +
            '<a class="button button-big" onclick="redirectToPayGate(\'momo\','+ value +', true)">' +
            '<i class="scoin"></i>' +
            '&nbsp; <strong>' + ( value * 1.03 ) + ' SohaCoin</strong>' +
            '<img src="images/napgame/longarrow.png"/>' +
            '<strong>' + money + ' VNÄ</strong>' +
            '</a>' +
            '</li>';
        $$(content).appendTo(".list-level-card-momo ul");
    }
}

function renderListTrueMoneyPackage() {
    $$(".list-level-card-truemoney ul").empty();
    if(promotionTruemoney == true){
        var data = {
            access_token : getCookie('access_token')
        };
        callAPILOGIN('POST', TRUEMONEYPACKAGE , data, function (res) {
            promotionPakage = res.data;
            var stylePromotion = '';
            var scoin = 0;
            for (var j in promotionPakage){
                if(promotionPakage[j] == 11000){
                    // if(getCookie('test_sms') != 1) continue;
                    stylePromotion = 'color: #ff9327';
                    scoin = promotionPakage[j]/1000;
                }
                else{
                    stylePromotion = '';
                    scoin = j;
                }
                var promotionContent = '<li >' +
                    '<a class="button button-big" onclick="redirectToPayGate(\'truemoney\','+ scoin +', true)">' +
                    '<i class="scoin"></i>' +
                    '&nbsp; <strong style="'+stylePromotion+'">' + j + ' SohaCoin</strong>' +
                    '<img src="images/napgame/longarrow.png"/>' +
                    '<strong style="'+stylePromotion+'">' + promotionPakage[j].toLocaleString('vi-VN') + ' VNÄ</strong>' +
                    '</a>' +
                    '</li>';
                $$(promotionContent).appendTo(".list-level-card-truemoney ul");
            }
        },function (err) {
            // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i');
        });
    } else{
        // var list = [100, 300, 500, 1000];
        var list = [100, 300, 500, 1000, 2000, 5000];
        for (var i in list) {
            var value = list[i];
            var money = (value * 1000).toLocaleString('vi-VN');
            var content = '<li>' +
                '<a class="button button-big" onclick="redirectToPayGate(\'truemoney\','+ value +', true)">' +
                '<i class="scoin"></i>' +
                '&nbsp; <strong>' + value + ' SohaCoin</strong>' +
                '<img src="images/napgame/longarrow.png"/>' +
                '<strong>' + money + ' VNÄ</strong>' +
                '</a>' +
                '</li>';
            $$(content).appendTo(".list-level-card-truemoney ul");
        }
    }
}

function renderListViettelPayPackage() {
    $$(".list-level-card-viettelpay ul").empty();
    var list = [50, 100, 300, 500, 1000, 2000, 5000];
    for (var i in list) {
        var value = list[i];
        var money = (value * 1.02 * 1000).toLocaleString('vi-VN');
        var content = '<li>' +
            '<a class="button button-big" onclick="redirectToPayGate(\'viettelpay\','+ value +', true)">' +
            '<i class="scoin"></i>' +
            '&nbsp; <strong>' + value + ' SohaCoin</strong>' +
            '<img src="images/napgame/longarrow.png"/>' +
            '<strong>' + money + ' VNÄ</strong>' +
            '</a>' +
            '</li>';
        $$(content).appendTo(".list-level-card-viettelpay ul");
    }
}
function renderListVnpayPackage() {
    $$(".list-level-card-vnpayc ul").empty();
    var list = [50, 100, 300, 500, 1000, 2000, 5000];
    for (var i in list) {
        var value = list[i];
        var money = (value * 1000).toLocaleString('vi-VN');
        var content = '<li>' +
            '<a class="button button-big" onclick="redirectToPayGate(\'vnpay\','+ value +', true)">' +
            '<i class="scoin"></i>' +
            '&nbsp; <strong>' + value + ' SohaCoin</strong>' +
            '<img src="images/napgame/longarrow.png"/>' +
            '<strong>' + money + ' VNÄ</strong>' +
            '</a>' +
            '</li>';
        $$(content).appendTo(".list-level-card-vnpay ul");
    }}

function getPayCardTitle(provider) {
    var title = '';
    switch (provider){
        case 'bank' :
            title = 'Náº¡p vĂ o tĂ i khoáº£n';
            break;
        case 'visa' :
            title = 'Náº¡p vĂ o tĂ i khoáº£n';
            break;
        case 'sohacoin' :
            title = 'DĂ¹ng tháº» SohaCoin';
            break;
        case 'viettel' :
            title = 'DĂ¹ng tháº» Viettel';
            break;
        case 'vcoin' :
            title = 'DĂ¹ng tháº» Vcoin';
            break;
        case 'gate' :
            title = 'DĂ¹ng tháº» Gate';
            break;
        case 'sms' :
            title = 'DĂ¹ng SMS';
            break;
        case 'momo' :
            title = 'DĂ¹ng thanh toĂ¡n MoMo';
            break;
        case 'truemoney' :
            title = 'DĂ¹ng vĂ­ TrueMoney';
            break;
        case 'paypal' :
            title = 'Thanh toĂ¡n qua PayPal';
            break;
    }
    return title;
}

function convertTime(unix_timestamp) {
    var a = new Date(unix_timestamp * 1000);
    var months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = hour + ':' + min + ':' + sec +' - '+date + '/' + month + '/' + year ;
    return time;
}

function format_number(scoin) {
    return scoin.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' VNÄ';
}

function getPacketSelect(order_info_rs) {
    var rs = {};
    $$.each(listpacket, function (key, item) {
        if (item.order_info == order_info_rs) {
            rs = item;
        }
    });
    return rs;
}

function getNumCardNeedPay(scoin) {
    if (isNaN(scoin)) return false;

    var rs = {};
    for (; ;) {
        var temp_scoin = detectNumCardNeedPay(scoin);
        scoin = scoin - temp_scoin;

        if(rs[temp_scoin] == undefined) rs[temp_scoin] = 1; else  rs[temp_scoin] = rs[temp_scoin]+1;

        if(scoin <= 0) break;
    }
    //
    return rs;

}

function detectNumCardNeedPay(scoin) {
    var list_card = {
        '10' : '',
        '20' : '',
        '30' : '',
        '50' : '',
        '100' : '',
        '200' : '',
        '300' : '',
        '500' : ''
    };

    var rs = 0;

    $$.each(list_card, function (key, item) {
        if (scoin >= 500) {rs = 500; return false;}
        if (scoin <= key) {rs = key; return false;}
    });
    return parseInt(rs);
}

function reloadURL() {
    history.pushState(null, "", location.href.split("?")[0]);
}

function parseTemplate(template, items) {
    for (var attr in items) template = template.replace('{{' + attr + '}}', items[attr]);
    return template;
}

function IsNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var format_money = function (el) {
    var invalidChars = /[^0-9]/gi;
    if (invalidChars.test(el.value)) el.value = el.value.replace(invalidChars, "");    

    var val = el.value.replace(/[.]/g, '');
    while(val > 50000) val = Math.floor(val / 10) + '';
    el.value = val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

var Showpass = function () {
    $$("#show_password").hide();
    $$("#off_password").show();
    $$('#oldPassword').attr('type', 'text');
};
var Offpass = function() {
    $$("#show_password").show();
    $$("#off_password").hide();
    $$('#oldPassword').attr('type', 'password');
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + encodeURIComponent(value) + ";path=/;expires=" + d.toGMTString();
}

function checkSms9029Done(){
    var data = {
        access_token: getCookie('access_token')
    };

    callAPILOGIN('POST', CHECKSMS9029DONE , data, function (res) {
        statusPayment.error_msg = '';
        status_pay = 'success';
        order_info_pay = 'pay_now';
        areaid_pay = getCookie('areaid');
        roleid_pay = getCookie('roleid');
        smsInfo.price = res.data.toString().slice(0,-3);
        SMSPayNow == true
        pay_sms_err = false;
        setCookie('before_buy', user_info.scoin)
        setCookie('flagPaySMS',true);
        SuccesPayLoad();
    },function(res){ //error or no data
        if(res.message == 'error_sms' || res.message == 'error_amount_byday') {
            statusPayment.title = 'Mua váº­t pháº©m khĂ´ng thĂ nh cĂ´ng';
            statusPayment.btn = 'Mua váº­t pháº©m khĂ¡c';
            statusPayment.action = 'buy_others_item';
            PacketChare.order_info = 'pay_now';
            pay_sms_err = true;
            if (res.message == 'error_sms') {
                statusPayment.error_msg = 'CĂ³ lá»—i xáº£y ra, vui lĂ²ng liĂªn há»‡ vá»›i chĂºng tĂ´i náº¿u tĂ i khoáº£n báº¡n Ä‘Ă£ bá»‹ thu phĂ­ giao dá»‹ch';
            } else if (res.message == 'error_amount_byday') {
                statusPayment.error_msg = 'TĂ i khoáº£n cá»§a báº¡n Ä‘Ă£ vÆ°á»£t ngÆ°á»¡ng thanh toĂ¡n 100.000 VNÄ/1 ngĂ y qua kĂªnh thanh toĂ¡n nĂ y !';
            }
            if (mainView.activePage.name == 'buy') {
                setTimeout(myApp.showIndicator, 0);
                setTimeout(function () {
                    loadContentBuy();
                    myApp.hideIndicator();
                }, 1000);
            }
            else mainView.router.loadPage('buy.php');
        }
        setTimeout(checkSms9029Done, 5000);
    });

}

function loadContentBuy(){
    showAppInfo(true, 'buy');
    var selectPacket = getPacketSelect(PacketChare.order_info);

    $$("#title_buy").html(statusPayment.title);
    $$("#buy_nametk").html(statusPayment.title_tk);
    $$("#buy_tk").html(user_info.scoin + ' SohaCoin');
    $$("#btn_title").html(statusPayment.btn);

    if (statusPayment.msg) {
        $$("#pay_message").show();
        $$('.error').html(statusPayment.msg).show();
    }

    if(statusPayment.error_msg){
        $$("#title_buy").text('Giao dá»‹ch tháº¥t báº¡i');
        $$("#pay_message").show();
        $$('.error').html(statusPayment.error_msg).show();
    }

    if (PacketChare.order_info === 'pay_now' ) {
        if(pay_sms_err == true){
            $$('.pay-item-result').hide();
            $$('.paynow-result').hide();
            $$('.paynow-service-charge').hide();
        }
        else{
            $$('.pay-item-result').hide();
            $$('.paynow-result').show();

            var before_buy = parseInt(getCookie('before_buy')) ;
            if(isNaN(before_buy)) before_buy = user_info.scoin;  // Error payment
            var get_more = user_info.scoin - before_buy;

            var provider = getCookie('provider');
            if (provider == 'sms') {
                if(urlQuery.scoin != undefined) var package_value = parseInt(urlQuery.scoin);
                else var package_value = parseInt(smsInfo.price);
                var service_charge = package_value - get_more;
                $$('.paynow-service-charge').show();
                $$('#service-charge').text(service_charge + ' SohaCoin');
            }

            $$('#before-buy').text(before_buy + ' SohaCoin');
            $$('#get-more').text(get_more + ' SohaCoin');
            $$('#after-buy').text(user_info.scoin + ' SohaCoin');
            bankPayNow = true;
            momoPayNow = true;
            paypalPayNow = true;
            SMSPayNow = true;
            truemoneyPayNow = true;
            viettelPayNow = true;
            vnpayPayNow = true;
        }
    } else {
        $$("#buy_packet").html('<img src="' + selectPacket.images + '" onerror="this.src=/images/napgame/coin.png;">&nbsp;' + selectPacket.description);
        $$("#buy_scoin").html(selectPacket.scoin + ' SohaCoin');
        if (!statusPayment.msg && !statusPayment.error_msg && PacketChare.order_info != 'pay_now') {
            var msg = "Báº¡n vá»«a Ä‘Æ°á»£c cá»™ng thĂªm " + selectPacket.scoin + " Spoint vĂ o tĂ i khoáº£n SohaCare ";
            $$('.spoint-message').html(msg).show();
        }
    }

    setCookie('before_buy', null, -1);
    setCookie('flagPayBank', null, -1);
    setCookie('flagPayVisa', null, -1);
    setCookie('flagPaySMS', null, -1);
    setCookie('flagPayMomo', null, -1);
    setCookie('flagPayPaypal', null, -1);
    setCookie('flagPayTrueMoney', null, -1);
    setCookie('flagPayPayoo', null, -1);
    setCookie('flagPayViettel', null, -1);
    setCookie('flagPayVnpay', null, -1);

    $$("#btn_title").on('click', function (e) {
        if (statusPayment.action == 'buy_more') {
            getPaymentMethod(selectPacket.order_info, selectPacket.scoin, selectPacket.description);
        } else {
            mainView.router.loadPage('select_packet.php');
        }
    });

    $$("#backlistchar").on('click', function (e) {
        mainView.router.loadPage('listchar.php');
    });
    if(SMSPayNow == true) checkSms9029Done();
}

var loading = true;
var lastLoadedIndex = 1;
myApp.onPageInit('order_history', function (page) {
    console.log('toan');
    ordersListLoading = true;
    ordersListLastLoadedIndex = 1;
    renderInCompletedOrders();
    $$('.infinite-scroll').on('infinite', function () {
        renderInCompletedOrders();
    });

    setInterval(function(){
        toogleRecheckOrderButton();
    }, 1000 * 60);
});

function renderInCompletedOrders(){
    if(loading === false) return;
    loading = false;
    var data = {
        access_token: getCookie('access_token'),
        app_id: getCookie('app_id'),
        page: ordersListLastLoadedIndex
    };
    callAPI('GET', INCOMPLETEDORDERS, data, function(res){
        ordersListLastLoadedIndex++;
        var size = Object.size(res.data);
        $$('#orders_list h3').remove();
        if(size == 0) {
            if($$('#orders_list .item-content').length == 0){
                $$('#orders_list').append('<h3 class="content-block-title" style="font-size: 15px;">KhĂ´ng cĂ³ Ä‘Æ¡n hĂ ng chÆ°a hoĂ n thĂ nh trong vĂ²ng 1 tuáº§n.</h3>');
            }
            myApp.detachInfiniteScroll($$('.infinite-scroll'));
        } else {
            $$.each(res.data, function (key, item) {
                var disabled = false;
                if(getCookie('clicked_' + item.transId) != '') {
                    var lastTimeClicked = getCookie('clicked_' + item.transId);
                    var minute = timeDifference(Date.now(), lastTimeClicked);
                    if(minute < 10) {
                        disabled = true;
                    }
                }

                if(disabled) {
                    var recheckButtonDom = '<a href="#" class="recheck-order-button" disabled trans-id="' + item.transId + '" onclick="recheckOrder(this)">' + 'Kiá»ƒm tra' + '</a>';
                } else {
                    var recheckButtonDom = '<a href="#" class="recheck-order-button" trans-id="' + item.transId + '" onclick="recheckOrder(this)">' + 'Kiá»ƒm tra' + '</a>';
                }

                if(item.pending) {
                    var wrapperClass = 'item-content pending-confirm';
                } else {
                    var wrapperClass = 'item-content';
                }

                var ordersList = '<div class="' + wrapperClass + '" id="transaction-' + item.transId + '" style="min-height: 25px;padding-left: 0px">';
                    if(item.confirm) {
                        ordersList += '<div class="item-inner need-confirm" style="width: 160px;padding-left: 0"><i class="material-icons">priority_high</i><span>CĂ¡ÂºÂ§n xĂƒÂ¡c thĂ¡Â»Â±c</span></div>';
                    }

                    ordersList += '<div class="item-inner pending-tran" style="width: 190px;padding-left: 0; display: none"><i class="material-icons" style="padding: 0px 5px">warning</i><span>Ă„Âang xĂƒÂ¡c thĂ¡Â»Â±c</span></div>' +
                    '<div class="item-inner trans-info" style="min-height: 25px;"> '+
                    '<div class="item-title" style="color: #2196f3;">' + item.method + ' - ' + ( item.price * 1000 ).toLocaleString() + '<div style="font-style: italic; font-size: 11px; color: #757575;">'+ item.created +'</div>' +
                    '</div>'+
                    '<div class="item-after" style="max-height: 100px;">';
                    if(!item.pending) {
                        ordersList += '<button class="button button-fill dropbtn" id="' + item.transId + '" onclick="toggleButtonGroup(this)"><i style="font-size:35px" class="material-icons dropbtn">more_horiz</i></button>';
                        ordersList += '<div class="dropdown-btn" id="dropdown-' + item.transId + '">' +
                            recheckButtonDom;

                            if(item.confirm) {
                                ordersList += '<a href="card_confirm.php" onclick="setOrderCookie(' + "'" + item.transId + "'," + item.price + ",'" + item.created + "','" + item.method + "'" + ')">' + 'XĂƒÂ¡c thĂ¡Â»Â±c' + '</a>';
                            }
                        ordersList += '</div>';
                    }

                ordersList +='</div>'+
                    '</div>'+
                    '</div>'+
                    '</li>';
                $$('#orders_list').append(ordersList);
            });
            lastLoadedIndex += 1;
        }
        loading = true;
    }, function(res){
        myApp.alert('Ä‘Ă£ cĂ³ lá»—i xáº£y ra',getCookie('game_display_name'));
    });
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-btn");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                console.log('clicked');
                openDropdown.classList.remove('show');
            }
        }
    }
}

function toggleButtonGroup(btn) {
    $$('.dropdown-btn').removeClass('show');
    var id = $$(btn).attr('id');
    $$('#dropdown-' + id).toggleClass('show');
    console.log('#dropdown-' + id);
}

function setOrderCookie(transId, price, date, payMethod) {
    var order = {
        transactionId : transId,
        transactionPrice : price,
        date: date,
        payMethod: payMethod
    };
    setCookie('order_info', JSON.stringify(order));
}

function recheckOrder(btn) {
    // chá»‰ cho phĂ©p 10' báº¥m 1 láº§n
    var transId = $$(btn).attr('trans-id');
    if(getCookie('clicked_' + transId) != '') {
        var lastTimeClicked = getCookie('clicked_' + transId);
        var minute = timeDifference(Date.now(), lastTimeClicked);
        if(minute < 10) {
            myApp.alert('Báº¡n chá»‰ Ä‘Æ°á»£c phĂ©p kiá»ƒm tra má»—i Ä‘Æ¡n hĂ ng 10 phĂºt 1 láº§n');
            return;
        }
    }

    var data = {
        trans_id: transId,
        access_token: getCookie('access_token'),
        app_id: getCookie('app_id')
    };

    callAPI('POST', RECHECKORDER, data, function(res){
        if(!res.status) {
            myApp.alert('CĂ³ lá»—i xáº£y ra');
        } else {
            if(res.data.status) {
                myApp.alert('ÄĂ£ cá»™ng bĂ¹ ' + res.data.data.scoin + ' scoin cho Ä‘Æ¡n hĂ ng Ä‘Ă£ chá»n', 'Cáº­p nháº­t', function() {
                    location.reload();
                });
            } else {
                myApp.alert(res.data.msg);
            }
        }
    }, function(res){
        myApp.alert('Ä‘Ă£ cĂ³ lá»—i xáº£y ra',getCookie('game_display_name'));
    });

    $$(btn).attr('disabled', 'disabled');
    setCookie('clicked_' + transId, Date.now(), 0.07);
}

function sendCardConfirmInfo() {
    var allowImageExtension = [
        'jpg', 'jpeg', 'png'
    ];
    var data = new FormData();
    var images = [];

    var fileInput = document.getElementById('card-confirm-image');

    if(fileInput.files.length == 0) {
        myApp.alert('Báº¡n chÆ°a chá»n áº£nh');
        return;
    }

    if(fileInput.files.length > 4) {
        myApp.alert('Báº¡n Ä‘Ă£ chá»n quĂ¡ sá»‘ lÆ°á»£ng áº£nh tá»‘i Ä‘a cho phĂ©p (4)');
        return;
    }

    for(var i=0; i < fileInput.files.length; i++) {
        if(allowImageExtension.indexOf(getExtension(fileInput.files[i].name)) > -1) {
            data.append('images[]', fileInput.files[i]);
        } else {
            myApp.alert('Báº¡n Ä‘Ă£ chá»n file khĂ´ng há»£p lá»‡: ' + fileInput.files[i].name + '. Vui lĂ²ng chá»n láº¡i !', 'Lá»—i');
            return;
        }
    }

    var orderInfo = JSON.parse(getCookie('order_info'));
    data.append('transId', orderInfo.transactionId);
    data.append('token', getCookie('access_token'));

    callAPI('POST', CONFIRMCARD, data, function(res){
        if(!res.status) {
            myApp.alert('CĂ³ lá»—i xáº£y ra');
        } else if(res.status == 1) {
            myApp.alert(res.message);
        } else {
            console.log(res);
            myApp.alert('ÄĂ£ gá»­i thĂ´ng tin xĂ¡c thá»±c thĂ nh cĂ´ng.', 'Cáº­p nháº­t', function() {
                // cáº­p nháº­p tráº¡ng thĂ¡i Ä‘Æ¡n hĂ ng Ä‘Ă£ gá»­i xĂ¡c nháº­n thĂ nh cĂ´ng
                $$('#transaction-' + orderInfo.transactionId).addClass('pending-confirm');
                $$('#transaction-' + orderInfo.transactionId).find('.dropbtn').remove();
                mainView.router.back();
            });
        }
    }, function(res){
        myApp.alert('Ä‘Ă£ cĂ³ lá»—i xáº£y ra',getCookie('game_display_name'));
    });
}

myApp.onPageInit('card_confirm', function () {
    var orderInfo = JSON.parse(getCookie('order_info'));
    $$('#trans_payment_method').html(orderInfo.payMethod);
    $$('#trans_price').html((orderInfo.transactionPrice * 1000).toLocaleString());
    $$('#trans_date').html(orderInfo.date);
    $$('#btn-send-confirm').off('click');
    $$('#btn-send-confirm').on('click', function(){
        sendCardConfirmInfo();
    });

    $$('#card-confirm-image').off('change');
    $$('#card-confirm-image').on('change', function(e){
        $$('#chosen-images').html('');
        var images = e.target.files;
        for(var i = 0; i < images.length; i++) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $$('#chosen-images').append('<img style="width:100px; height:auto; margin-right: 5px" src="' + e.target.result + '" />');
            }

            reader.readAsDataURL(images[i]);
        }

    });
});

function toogleRecheckOrderButton() {
    $$.each($$('.recheck-order-button'), function (key, item) {
        var transId = $$(item).attr('trans-id');
        if(getCookie('clicked_' + transId) == '') {
            $$(item).removeAttr('disabled');
        } else {
            var lastTimeClicked = getCookie('clicked_' + transId);
            var minute = timeDifference(Date.now(), lastTimeClicked);
            if(minute < 10) {
                $$(item).attr('disabled', 'disabled');
            } else {
                $$(item).removeAttr('disabled');
            }
        }
    });
}

function timeDifference(time1, time2) {
    var difference = time1 - parseInt(time2);

    var minutesDifference = Math.floor(difference/1000/60);

    return minutesDifference;
}

function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

function checkScoinChange(scoin, callbackAfterCheck) {
    var data = {
        access_token: getCookie('access_token'),
        scoin: scoin,
    };
    
    callAPILOGIN('POST', CHECKSCOINCHANGE , data, function (res) {
        if(res.status == 0) {
            myApp.alert(res.message, 'Lá»—i', function(){
                location.reload();
            });
        } else {
            if(callbackAfterCheck) callbackAfterCheck();
        }
    },function(res){ //error or no data
        // myApp.alert('CĂ³ lá»—i xáº£y ra vui lĂ²ng thá»­ láº¡i sau.', 'Lá»—i káº¿t ná»‘i', function(){
            location.reload();
        });
    });
}

function openLeftMenu() {
    $(".menuLeft").addClass('active');
}

function hideLeftMenu() {
    $(".menuLeft").removeClass('active');
}

function onSignIn(googleUser) {
    myApp.closeModal();
    DatasendBig4.big4_access_token = googleUser.getAuthResponse(true).access_token;
    DatasendBig4.app_id = dataINFOGAME.app_key;
    DatasendBig4.big4_type = 3;
    callAPILOGIN("GET", LOGINFB, DatasendBig4, loginSuccess, function (res) {
        myApp.alert(res.message, 'Lá»—i káº¿t ná»‘i', login);
    });
}

function onLoad() {
//    gapi.load('auth2', function() {
//        gapi.auth2.init();
//    });
}

function ggSignOut() {
    if (!dataLogin.google_id) return;

    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: dataLogin.google_id
        }).then(() => {
            gapi.auth2.getAuthInstance().signOut();
        });
    });
  }

function specialPromotionClickHandler(e) {
    $$(e).removeClass('marked');
    setCookie('clicked' + (new Date()).toString().slice(0,10).replace(/-/g,"") + '_' + getCookie('user_payment_code') + '_' + dataLogin.app_id, 1, 1);
}