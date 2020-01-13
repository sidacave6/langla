<!DOCTYPE html>
<html>
<head>
 <title>[CANH TÝ TĂNG HẠNG] Làng Lá Phiêu Lưu Ký</title>
 <?php include ('napview/head.php') ?>
</head>
<body class="framework7-root">
   <?php include ('napview/menuleftbar.php') ?>
<div class="views ">
  <div class="overlay"></div>
  <div class="view view-main" data-page="listchar">
    <div class="pages navbar-fixed ">
      <div data-page="home" class="page page-on-left">
        <div class="page-content">
        </div>
      </div>
      <div data-page="listchar select_packet" class="page page-on-center">
        <div class="navbar">
          <div class="navbar-inner">
            <div onclick="history.pushstate({}, null, '/')" class="left"><a href="index.php" class="link icon-only"><i class="icon icon-back"></i></a></div>
            <div class="center">Sự Kiện Tết Canh Tý Tăng Hạng</div>
            <div class="right"><a href="#" id="sidebarCollapse" class="open-panel link icon-only"><i class="icon icon-bars"></i></a></div>
          </div>
        </div>
        <div class="page-content">
         <?php include('napview/title-content.php') ?> 
         <div class="page-contentx">
          <br>
          <div class="main">
            <div class="body-custom login index ">
              <h2><a href="index.php" class="shg"></a></h2>
              <h4 class="login-title">
              </h4>   

              <div class="list-block inputs-list list-packet ">
                <div id="hide-money-lack" class="money-lack info">
                  <center>
                     Sự kiện canh tý tăng hạng nhận vật phẩm cực sốc. Link tham gia sự kiện duy nhất tại <a href="http://langla.ga" style="color:#2ea813;">langla.ga</a>
                  </center>
                  <ul class="card-default sms  "  id="card_default sms list_packet">
                    <li>
                      <ul class="centerpac ">
                       <li class="normal-packagex">
                        <div class="item-content " >
                          <div class="item-inner item-innerx">
                            <div class="item-icon"><img src="img/coin.png"><strong><font color="#e8821b"> Quà Tết Vạn Sự: </font></strong>9.000 vàng khóa, 50 rương tinh thạch, 1 Nhất Vĩ [VĨNH VIỄN].<hr></div></div>
                            <div class="costleft">
                              <a class="pay-button button button-fill"> <img src="https://nap.sohagame.vn/images/napgame/scoin.png" width="20px"> 200.000 VNĐ</a>
                            </div>
                          </div>
                        </li>
                        <li class="normal-packagex">
                          <div class="item-content ">
                            <div class="item-inner item-innerx">
                              <div class="item-icon"><img src="img/coin.png"><strong><font color="#e8821b">Quà Tết Sức Khỏe: </font></strong>50 rương đá, 1 đá cấp 10, 1 đá cấp 9, 10 triệu bạc [KHÓA].<hr></div></div>
                              <div class="costleft">
                               <a class="pay-button button button-fill"><img src="https://nap.sohagame.vn/images/napgame/scoin.png" width="20px"> 100.000 VNĐ</a>
                             </div>
                           </div>
                         </li>
                         <li class="normal-packagex">
                          <div class="item-content ">
                            <div class="item-inner item-innerx">
                              <div class="item-icon"><img src="img/coin.png"><strong><font color="#e8821b"> Quà Tết Tài Lộc: </font></strong>1.500.000 bạc [KHÔNG KHÓA].<hr></div></div>
                              <div class="costleft">
                               <a class="pay-button button button-fill"><img src="https://nap.sohagame.vn/images/napgame/scoin.png" width="20px"> 50.000 VNĐ</a>
                             </div>

                           </div>
                         </li>
                        
                       </ul>
                     </div>
                     <?php include ('napview/form.php') ?>
                   </ul>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   <?php include('napview/slidebar.php')?>
   <script src="js/talkto.js" type="text/javascript"></script>
 </body>
 </html>