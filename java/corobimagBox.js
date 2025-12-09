// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Windows<br>System</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/he-thong' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ez9n4aqk8r3eyk02pnqbj/Qu-n-Tr-M-ng-Windows.png?rlkey=b8f4ljlkvdat2gyqtrxx8tdfk&st=7ihiim50&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Windows)</div>
      </div>
</div>

     <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Mac OSX</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/mac-os-x' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ejud8fbcb361dztr88i2o/Qu-n-Tr-M-ng-Mac-OS.png?rlkey=35nojfe2f5uoe4vhh6bl8g5hz&st=jdihzezr&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Mac OS)</div>
      </div>
</div>

     <!-- Hàng thứ 3 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Linux</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/linux-os' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/07z64vb6983gq74qsyp8y/Qu-n-Tr-M-ng-Linux.png?rlkey=0ld4zufw37rspmm2cx45w052s&st=liv1oefw&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Linux)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.howtogeek.com/category/linux/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/hdb9kuhjbuujtmf3wsy41/Howtogeek.png?rlkey=rlhk97knvv9gbthaslmpuenrf&st=qj7exux9&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Howtogeek</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://ribalinux.blogspot.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/fxewdlj7xm0a58oyv1bht/Ribalinux.png?rlkey=qv6hvtbmkwa7v2sg7wwce0b9b&st=8mwqi5o2&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Ribalinux</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://techmaster.vn/posts?keyword=&category=579&author=' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/euxfmgumk31xs3sogmr5j/Techmaster-VN.webp?rlkey=ear5ix6ndncixzo2fme3ovqmw&st=l2e9e58i&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Techmaster VN</div>
      </div>

            <div class="image-box">
       <div onclick="openRightHalfPopup('https://tutonics.com/articles/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/6vebttqx716xn0q1cplma/Tutonics.png?rlkey=4wtv6u05y4roscsiur8igj7m7&st=dnft2vf2&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tutonics</div>
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
