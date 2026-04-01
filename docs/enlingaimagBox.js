// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Easy-to-play Game</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2017/11/dao-vang-co-dien/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/09/dao-vang-co-dien-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đào vàng cổ điển (Gold Miner)</div>
      </div>
    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/02/dao-vang/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/08/09/dao-vang-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Đào vàng cải tiến (Gold Miner)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2014/09/pikachu/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2024/09/05/pikachu-300.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Pikachu Online</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/12/noi-kim-cuong-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/12/30/noi-kim-cuong-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Nối kim cương 2</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/09/mui-ten-phep-thuat-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/09/12/mui-ten-phep-thuat-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Mũi tên phép thuật 2 (Bois DArc)</div>
      </div>

 </div>

        <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Deep Sea Survival</h2>
     <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/rvvASMiM/9ff4c1c62da64af98d32fe1a1b44ac0a/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5nYW1lZmxhcmUuY29tL2VtYmVkL21lZ2Etc2hhcmsvIiwicGFyZW50RG9tYWluIjoiZ2FtZWZsYXJlLmNvbSIsInRvcERvbWFpbiI6ImdhbWVmbGFyZS5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://www.dropbox.com/scl/fi/ammar1wnx9t9jgcsncbvg/Mega-Shark.webp?rlkey=xfekjbtzv3yajv7vsnowurfmb&st=w5e4hsp1&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Mega Shark</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://html5.gamedistribution.com/rvvASMiM/9ff4c1c62da64af98d32fe1a1b44ac0a/index.html?gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5nYW1lZmxhcmUuY29tL2VtYmVkL21lZ2Etc2hhcmsvIiwicGFyZW50RG9tYWluIjoiZ2FtZWZsYXJlLmNvbSIsInRvcERvbWFpbiI6ImdhbWVmbGFyZS5jb20iLCJoYXNJbXByZXNzaW9uIjpmYWxzZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xOCJ9', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/07/23/ca-map-sieu-bao-chua-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập siêu bạo chúa 1</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2019/09/ca-map-sieu-bao-chua-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2019/09/06/ca-map-sieu-bao-chua-2-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập siêu bạo chúa 2</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2021/04/ca-map-sieu-bao-chua-3/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2021/04/02/ca-map-sieu-bao-chua-3-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Cá mập siêu bạo chúa 3</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2016/10/ham-ca-map/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2016/10/19/ham-ca-map-105.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hàm cá mập</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://e.gamevui.vn/web/2023/02/ham-ca-map-2/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://st.gamevui.vn/images/image/2023/02/07/ham-ca-map-200.jpg" alt="Ảnh 1">
</div>
        <div class="caption">Hàm cá mập 2</div>
      </div>
      
 </div>

        <!-- Hàng thứ 3 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Plants & Zoombie</h2>
    
 </div>

       <!-- Hàng thứ 4 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Arcade Racer</h2>

 </div>

       <!-- Hàng thứ 5 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Playing Shooters</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.gameflare.com/embed/duckmageddon/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
       <img src="https://www.dropbox.com/scl/fi/oq4nhngblpd108etuw9jf/B-n-v-t-Online-Duckmageddon.png?rlkey=6mdoped0ureeygyjtmg2bbjp6&st=4gn6iurd&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Bắn vịt Online (Duckmageddon)</div>
      </div>

 </div>

       <!-- Hàng thứ 6 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Stickman Revival</h2>

</div>
 
      <!-- Hàng thứ 7 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Battle Game</h2>

 </div>

       <!-- Hàng thứ 8 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Role-playing Games</h2>
      
 </div>

      <!-- Hàng thứ 9 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Intellectual Games</h2>

 </div>
 
      <!-- Hàng thứ 10 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Two-player Game</h2>

 </div>

    <!-- Hàng thứ 11 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Gaming Station</h2>
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.msn.com/en-us/play?cgfrom=cg_dsb_seeMore&cgdsbut=a&ocid=winpsearchboxexpcta2&cvid=29f698d2763f47bcaedbe41fe3eac233&nclid=C454E3BDEBC302605749250B25E31342&ts=1774102755469&nclidts=1774102755&tsms=469&PC=WSBDSB', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/4w2xxfqr20e1t6mu2i69c/Tr-m-Game-1-MSN.png?rlkey=vkxdu1wca3ljpvxirm0put79u&st=ocjmo65o&raw=1">
</div>
        <div class="caption">Trạm game 1 (MSN)</div>
      </div>

      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.y8.com/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/qsveqacu4m198midpc3kd/Tr-m-Game-2-Y8-Games.webp?rlkey=509ohvqszj8h57i5o431ssouy&st=q1ocavi2&raw=1">
</div>
        <div class="caption">Trạm game 2 (Y8 Games)</div>
      </div>

      <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.gameflare.com/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/xdbvsf43lbmld7km43tqh/Tr-m-Game-3-360-Games.webp?rlkey=qzs0vijn164zl58ueeaiwcj8b&st=09yqb1ds&raw=1">
</div>
        <div class="caption">Trạm game 3 (Gameflare)</div>
      </div>
      
      <div class="image-box">
  <div onclick="openRightHalfPopup('https://gamevui.vn/', 'SmartApp Popup', window.innerWidth*2+45, 745)">
          <img src="https://www.dropbox.com/scl/fi/enl69sscfuizkg8xpynyf/Tr-m-Game-4-360-Games.png?rlkey=seqnl4ajx2noji0c8qkccsd0s&st=z3xdu9h1&raw=1">
</div>
        <div class="caption">Trạm game 4 (Game vui)</div>
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
