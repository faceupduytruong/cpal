// 👉 Tạo hiệu ứng lá rơi và chèn CSS vào trang

const style = document.createElement('style');

style.textContent = `

.leaf {
  position: fixed;
  top: -50px;
  width: 40px;
  height: 40px;
  background-image: url('https://dl.glitter-graphics.net/pub/2883/2883321c7fmw0234w.gif');
  background-size: cover;
  opacity: 0.8;
  animation: fall linear infinite;
  pointer-events: none;
  z-index: 9999;
}

@keyframes fall {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    top: 100vh;
    transform: translateX(200px) rotate(360deg);
  }
}
`;
document.head.appendChild(style);

// 👉 Hàm tạo lá rơi
function createLeaf() {
  const leaf = document.createElement('div');
  leaf.className = 'leaf';
  leaf.style.left = Math.random() * window.innerWidth + 'px';
  leaf.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(leaf);

  setTimeout(() => leaf.remove(), 10000); // xóa sau 10s
}

// 👉 Tạo lá rơi mỗi 500ms
setInterval(createLeaf, 500);
