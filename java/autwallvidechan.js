  import { resSources } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@
f5bc25e/docs/resSources.js';

  const video = document.getElementById('bgVideo');
  let currentIndex = -1;

  function getRandomIndex(excludeIndex) {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * resSources.length);
    } while (newIndex === excludeIndex); // tránh lặp lại video hiện tại
    return newIndex;
  }

  function loadBackgroundVideo(index) {
    video.style.opacity = 0;

    setTimeout(() => {
      video.src = resSources[index]; // Sử dụng đúng tên biến đã import
      video.load();

      video.oncanplay = () => {
        video.style.opacity = 1;
      };
    }, 1000);
  }

  // Khởi tạo video đầu tiên
  currentIndex = getRandomIndex(-1);
  loadBackgroundVideo(currentIndex);

  // Tự động chuyển video ngẫu nhiên sau mỗi 30 giây
  setInterval(() => {
    currentIndex = getRandomIndex(currentIndex);
    loadBackgroundVideo(currentIndex);
  }, 30000);