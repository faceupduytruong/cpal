// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Easy-to-play Game</h2>    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/87/1705/index.html?gameName=%E9%BB%84%E9%87%91%E7%9F%BF%E5%B7%A5&gameId=1705&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1567222&ad_source=iaa&djsource=F8ljcx&srcid=youyusi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/5b972755d1d2dc0500f94a3b646380aa.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Những người khai thác vàng</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/63/1579/index.html?gameName=%E6%AC%A2%E4%B9%90%E7%89%88%E5%8D%95%E6%9C%BA%E6%96%97%E5%9C%B0%E4%B8%BB&gameId=1579&category=%E5%A8%B1%E4%B9%90&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1552655&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/7fdacbced5d5e7f943d93f2ca4d7e50c.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Card Duel</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/56/507/index.html?gameName=%E7%A5%96%E7%8E%9B%E5%AE%8C%E6%95%B4%E7%89%881.0&gameId=507&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551191&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/be80cad9f445f7c9fda2cf01cd3e1b32.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Zuma 1.0</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/52/1701/index.html?gameName=%E6%B6%88%E6%B6%88%E4%B9%90%E5%A4%A7%E6%8B%9B%E7%89%88&gameId=1701&category=%E7%9B%8A%E6%99%BA&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1550089&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/d62106b9bba2a3bb7075172f5743e655.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Chọn 3 con vật</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/47/1024/index.html?gameName=%E6%89%93%E5%B7%A5%E4%BA%BA%E7%94%9F%E6%B4%BB%E6%A8%A1%E6%8B%9F&gameId=1024&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549437&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/daed1b78c5010f50f89ec115bbbc2776.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Mô phỏng cuộc sống làm việc</div>
      </div>

 </div>

        <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Plants & Zoombie</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/47/2586/index.html?gameName=%E6%A4%8D%E7%89%A9%E6%89%93%E8%B4%A5%E5%83%B5%E5%B0%B8&gameId=2586&category=%E7%AD%96%E7%95%A5&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549437&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/84cf099b2e831ee1f0fecfc4c1f081c3.png" alt="Ảnh 1">
</div>
        <div class="caption">Cây trồng đánh bại thây ma</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/294/3392/index.html?gameName=%E6%A4%8D%E7%89%A9%E5%A4%A7%E4%B9%B1%E6%96%97&gameId=3392&category=%E7%AD%96%E7%95%A5&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1648178&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/6163d20dccc69c3e780dae56ee46ebe2.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Cây cối đấu với thây ma</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/52/344/index.html?gameName=%E6%A4%8D%E7%89%A9%E6%9A%B4%E6%8F%8D%E5%83%B5%E5%B0%B8&gameId=344&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1550089&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/8f9fe70a052db5dda3e33ca72cd405c1.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Cây cối đánh bại thây ma</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/56/411/index.html?gameName=%E5%90%88%E6%88%90%E6%A4%8D%E7%89%A9%E6%89%93%E5%83%B5%E5%B0%B8&gameId=411&category=%E7%AD%96%E7%95%A5&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551191&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1&windowPmp=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/3091709c79a2a5fc644af3a3f2f2671e.png" alt="Ảnh 1">
</div>
        <div class="caption">Tổng hợp thực vật để chống lại thây ma</div>
      </div>

 </div>

       <!-- Hàng thứ 3 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Arcade Racer</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/47/1686/index.html?gameName=%E6%9C%80%E5%BC%BA%E8%B5%9B%E8%BD%A6&gameId=1686&category=%E7%AB%9E%E6%8A%80&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549437&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/6099af98d59b6a271a1ec20ba87d2e3c.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Chiếc xe đua mạnh nhất</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/47/423/index.html?gameName=%E9%AA%91%E6%89%8B%E8%AF%B7%E5%B0%B1%E4%BD%8D&gameId=423&category=%E5%86%92%E9%99%A9&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549437&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/e631000024bf7875349605d32c0c52b7.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Tay đua xe đạp</div>
      </div>

 </div>
 
      <!-- Hàng thứ 4 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Battle Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/294/3428/index.html?gameName=%E7%81%AB%E6%9F%B4%E4%BA%BA%E7%8E%8B%E8%80%85%E5%BD%92%E6%9D%A5&gameId=3428&category=%E5%8A%A8%E4%BD%9C&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1648178&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&novipbtn=0&expe=10261_10271_10242_10217_10266_10273_10269_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/f237a2260b41192a9672393ebe52e13a.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Vua Người Que Trở Lại</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/48/448/index.html?gameName=%E6%AD%BB%E7%A5%9EVS%E7%81%AB%E5%BD%B1&gameId=448&category=%E5%8A%A8%E4%BD%9C&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549664&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/d5bd39a30dfc27db53a9fe0e0a79f3f9.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Bleach đấu với Naruto</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/56/1054/index.html?gameName=%E5%A4%8D%E6%B4%BB%E7%9A%84%E5%8B%87%E5%A3%AB&gameId=1054&category=%E5%86%92%E9%99%A9&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551191&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1&windowPmp=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/7b965418a68c7ec87b0e3e97302e8dff.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Chiến binh hồi sinh</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/52/2163/index.html?gameName=%E6%97%A0%E5%B0%BD%E6%88%98%E4%BA%89&gameId=2163&category=%E5%86%92%E9%99%A9&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1550089&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/654e32f66162433dd22bd39007d96e7c.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Chiến tranh bất tận</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/56/1257/index.html?gameName=%E8%8D%A3%E8%80%80%E8%8B%B1%E9%9B%84&gameId=1257&category=%E7%AB%9E%E6%8A%80&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551191&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/03c4dcb3ef98efd46494a61fdaa468f2.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Vinh quang anh hùng</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/131/1623/index.html?gameName=%E5%8F%98%E5%BD%A2%E6%9C%BA%E7%94%B2%E9%BE%99&gameId=1623&category=%E7%AD%96%E7%95%A5&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1586225&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/7c137e948b58c125416ecd91b2e20fda.png" alt="Ảnh 1">
</div>
        <div class="caption">Rồng máy biến hình</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/55/1090/index.html?gameName=%E6%A8%B1%E8%8A%B1%E6%A0%A1%E5%9B%AD%E6%A8%A1%E6%8B%9F%E5%99%A8&gameId=1090&category=%E6%A8%A1%E6%8B%9F&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1550256&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/acc3fa6cd27a61e8aace685b64727556.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Trình mô phỏng trường Sakura</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/52/1187/index.html?gameName=%E7%90%83%E5%9C%BA%E5%A4%A7%E5%B8%88%E8%B5%9B&gameId=1187&category=%E5%8A%A8%E4%BD%9C&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1550089&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1&windowPmp=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/8d61f19a4d5b62ed1e747b883475d889.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Chơi quần vợt</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/48/719/index.html?gameName=%E8%9A%82%E8%9A%81%E8%BF%9B%E5%8C%963D&gameId=719&category=%E5%8A%A8%E4%BD%9C&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549664&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/a9a9b88369c3ade1b3c21e4cfc173836.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Tiến hóa của loài kiến ​​3D</div>
      </div>

 </div>

      <!-- Hàng thứ 5 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Intellectual Games</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/294/3390/index.html?gameName=%E7%81%AB%E6%9F%B4%E4%BA%BA%E7%9F%A5%E9%9A%BE%E8%80%8C%E4%B8%8A&gameId=3390&category=%E7%9B%8A%E6%99%BA&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1648178&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&novipbtn=0&expe=10261_10271_10242_10217_10266_10273_10269_10202&iaaStyle=1&iaaAheadClick=1&hb=1&windowPmp=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/d48efb6c3dd67048e9c34d34adbd20a7.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Người que sẵn sàng đối mặt với thử thách</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/58/1167/index.html?gameName=%E5%B0%8F%E8%9B%87%E7%88%B1%E8%8B%B9%E6%9E%9C&gameId=1167&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551243&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/270e66c559ffb8f3214e4f452ce32c61.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Chú rắn nhỏ thích táo</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/58/1721/index.html?gameName=%E6%8B%AF%E6%95%91%E5%B0%8F%E7%BB%B5%E7%BE%8A&gameId=1721&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551243&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/9d484cbd9974f31f2f32fb377e6b2fa0.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Giải cứu những chú cừu non</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/47/2186/index.html?gameName=%E6%AC%A2%E4%B9%90%E5%83%8F%E7%B4%A0%E5%86%9C%E5%9C%BA&gameId=2186&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549437&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10261_10272_10241_10216_10266_10273_10270_10202&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/1ca32a0c8ea2ded40710f570c02bfebc.png" alt="Ảnh 1">
</div>
        <div class="caption">Trang trại hạnh phúc</div>
      </div>

 </div>
 
      <!-- Hàng thứ 6 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Two-player Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/87/1338/index.html?gameName=%E6%A3%AE%E6%9E%97%E5%86%B0%E7%81%AB%E4%BA%BA-%E7%A5%9E%E5%99%A8%E4%B9%8B%E6%88%98&gameId=1338&category=%E4%BC%91%E9%97%B2&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1567222&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/7aeeeeac091ddaecf284510bc798c294.png_.webp" alt="Ảnh 1">
</div>
        <div class="caption">Cháy rừng và băng giá - Cuộc chiến cổ vật</div>
      </div>

 </div>

    <!-- Hàng thứ 7 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Gaming Station</h2>
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://fun.360.cn/?ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/ggoqi0ltuol6dr3wcv28l/Tr-m-Game-1.png?rlkey=pkw8j9r8xf5phrbwxu8hz5c6o&st=c5roloqt&raw=1">
</div>
        <div class="caption">Trạm game 1</div>
      </div>
    
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://g.360.cn/index.html', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/enl69sscfuizkg8xpynyf/Tr-m-Game-2.png?rlkey=seqnl4ajx2noji0c8qkccsd0s&st=5izrwiqw&raw=1">
</div>
        <div class="caption">Trạm game 2</div>
      </div>

      <div class="image-box">
  <div onclick="openRightHalfPopup('https://g.360.cn/zt/summer2017.html', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/b68j4quo75gc73nvjj0xt/Tr-m-Game-3.webp?rlkey=m4btmrh44uc7hygaq4ce9zzpu&st=vpj7ogua&raw=1">
</div>
        <div class="caption">Trạm game 3</div>
      </div>
      
</div>

`;

// Thêm vào DOM
document.body.appendChild(container);

// Định nghĩa style h2
const style = document.createElement('style');
style.textContent = `
  h2 {
    font-family: 'Great Vibes', cursive;
    font-weight: bold;
    color: white;
    animation: greenPulse 7s infinite;
    text-shadow:
      0 0 6px #006400,
      0 0 12px #228B22,
      1px 1px 4px rgba(0,0,0,0.3);
  }

@keyframes greenPulse {
  0% {
    text-shadow: 0 0 5px #7CFC00, 0 0 10px #32CD32, 0 0 20px #228B22;   /* Màu nhấp chớp của Music Station */
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 2px #006400, 0 0 4px #013220;
    opacity: 0.5;
  }
  100% {
    text-shadow: 0 0 5px #7CFC00, 0 0 10px #32CD32, 0 0 20px #228B22;
    opacity: 1;
  }
}
`;

document.head.appendChild(style);

// 👉 Sau khi thêm vào DOM, gọi lại applyColor
const glassElements = document.querySelectorAll(".glass-bg");
const color = colors[0]; // hoặc dùng biến colorIndex nếu có

glassElements.forEach(el => {
  el.style.backgroundColor = color;
});

// Gọi lại sau khi DOM đã có .glass-bg
applyColor(colorIndex);
