import colors from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/java/coloarramodif.js';

const glassElements = document.querySelectorAll(".glass-bg");
const searchInput = document.getElementById("searchInput");
const overlay = document.querySelector(".audio-player-overlay");
const playerContainer = document.querySelector(".player-container");

let colorIndex = 0;

// 👉 Hàm đổi màu
function applyColor(index) {
  const color = colors[index];

  glassElements.forEach(el => {
    el.style.backgroundColor = color;
  });

  if (searchInput) {
    searchInput.style.backgroundColor = color;
  }

  if (overlay) {
    overlay.style.backgroundColor = color;
  }

  if (playerContainer) {
    playerContainer.style.backgroundColor = color;
  }
}

// 👉 Tự động đổi màu mỗi 6 giây
setInterval(() => {
  applyColor(colorIndex);
  colorIndex = (colorIndex + 1) % colors.length;
}, 6000);

// 👉 Đổi màu khi nhấn nút toggle
document.getElementById("toggleEffectBtn").addEventListener("click", () => {
  applyColor(colorIndex);
  colorIndex = (colorIndex + 1) % colors.length;
});

// 👉 Ngăn Popup đóng khi nhấn nút toggle
document.getElementById("toggleEffectBtn").addEventListener("click", function(event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
});
