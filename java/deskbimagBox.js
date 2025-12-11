// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Photoshop</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://elements.envato.com/learn/c/design/add-ons/tutorials' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://img.freepik.com/free-vector/graphic-designer-desk-with-different-objects_23-2148520373.jpg?semt=ais_hybrid&w=740&q=80" alt="Ảnh 1">
</div>
        <div class="caption">Design Tutorials</div>
      </div>
      
 </div>


    <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">GIMP</h2>
  <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.gimp.org/tutorials/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
          <img src="https://static.macupdate.com/products/14597/l/gimp-logo.png?v=1670261112">
</div>
        <div class="caption">Gimp Tutorials</div>
      </div>

  <div class="image-box">
  <div onclick="openRightHalfPopup('https://www.gimp.org/tutorials/legacy/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
          <img src="https://files.softicons.com/download/system-icons/crystal-project-icons-by-everaldo-coelho/png/256x256/apps/gimp.png">
</div>
        <div class="caption">Gimp Tutorials Legacy</div>
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
