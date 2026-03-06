// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Easy-to-play Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/47/2586/index.html?gameName=%E6%A4%8D%E7%89%A9%E6%89%93%E8%B4%A5%E5%83%B5%E5%B0%B8&gameId=2586&category=%E7%AD%96%E7%95%A5&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1549437&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/84cf099b2e831ee1f0fecfc4c1f081c3.png" alt="Ảnh 1">
</div>
        <div class="caption">Cây trồng đánh bại thây ma</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://fun.em0bu.cn/ssp/56/411/index.html?gameName=%E5%90%88%E6%88%90%E6%A4%8D%E7%89%A9%E6%89%93%E5%83%B5%E5%B0%B8&gameId=411&category=%E7%AD%96%E7%95%A5&hasReal=1&qid=57aba2466da6c02ab0fa9f22f96fbe4e&cp=1551191&ad_source=iaa&djsource=l3vVSF&srcid=youyusiyouxi&lastTime=1772762719670&novipbtn=0&expe=10262_10272_10241_10217_10265_10273_10269_10200&iaaStyle=1&iaaAheadClick=1&hb=1&windowPmp=1', 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://s3m9.mdvdns.com/yiti/3091709c79a2a5fc644af3a3f2f2671e.png" alt="Ảnh 1">
</div>
        <div class="caption">Tổng hợp thực vật để chống lại thây ma</div>
      </div>

 </div>

    <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Architecture Design</h2>
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.facebook.com/groups/109717852235362/user/1843794205/', 'SmartApp Popup', window.innerWidth, 745)">
          <img src="https://www.dropbox.com/scl/fi/88g8nafnlqo3lwu88aeyn/AI-Architect.jpg?rlkey=oa8hya03kykf79bv340xpogx2&st=wjwszm02&raw=1">
</div>
        <div class="caption">KTS Cotin</div>
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
