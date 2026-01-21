import { bgVideos } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/docs/mxktSources.js';

// Gán vào window để dùng ở script thường
window.bgVideos = bgVideos;

const video = document.getElementById('bgVideo');
let currentIndex = -1;

function getRandomIndex(excludeIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * window.bgVideos.length);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function loadBackgroundVideo(index) {
  video.style.opacity = 0;

  setTimeout(() => {
    video.src = window.bgVideos[index];
    video.load();

    video.oncanplay = () => {
      video.style.opacity = 1;
    };
  }, 1000);
}

// Khởi tạo video đầu tiên
window.addEventListener("DOMContentLoaded", () => {
  currentIndex = getRandomIndex(-1);
  loadBackgroundVideo(currentIndex);

  // Tự động chuyển video sau mỗi 30 giây
  setInterval(() => {
    currentIndex = getRandomIndex(currentIndex);
    loadBackgroundVideo(currentIndex);
  }, 40000);
});
