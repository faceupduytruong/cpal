// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Windows<br>System</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/he-thong' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://timoday.edu.vn/wp-content/uploads/2016/02/windows-store.png" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Windows)</div>
      </div>
</div>

     <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Mac OSX</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/mac-os-x' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://dreamlogic.io/img/brands/logos/apple.png" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Mac OS)</div>
      </div>
</div>

     <!-- Hàng thứ 3 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Linux</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/linux-os' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/OS-Linux-icon.png" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Linux)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.howtogeek.com/category/linux/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://dtv-ebook.com.vn/images/Cover/aldiko.png" alt="Ảnh 1">
</div>
        <div class="caption">Howtogeek</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://ribalinux.blogspot.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://geetagames.com/wp-content/uploads/2012/05/Linux_Package.png" alt="Ảnh 1">
</div>
        <div class="caption">Ribalinux</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://techmaster.vn/posts?keyword=&category=579&author=' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://media.techmaster.vn/api/static/8103/bsb9k1451cob9t3q7m4g" alt="Ảnh 1">
</div>
        <div class="caption">Techmaster VN</div>
      </div>

            <div class="image-box">
       <div onclick="openRightHalfPopup('https://tutonics.com/articles/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.honga.net/totalwar/warhammer3/images/warhammer3/flags/wh3_main_kho_exiles_of_khorne/mon_256.png" alt="Ảnh 1">
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
