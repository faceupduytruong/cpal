import { bgVideos } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@99f1cc3/docs/bgvdSources.js';

const style = document.createElement('style');
style.textContent = `
  .bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    transition: opacity 1s ease-in-out;
  }

  #bgVideo {
    transition: opacity 1s ease-in-out;
  }
`;
document.head.appendChild(style);

const video = document.getElementById('bgVideo');
let currentIndex = -1;

function getRandomIndex(excludeIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * bgVideos.length);
  } while (newIndex === excludeIndex);
  return newIndex;
}

export function loadRandomBackgroundVideo() {
  currentIndex = getRandomIndex(currentIndex);
  video.style.opacity = 0;

  setTimeout(() => {
    video.src = bgVideos[currentIndex];
    video.load();
    video.oncanplay = () => {
      video.style.opacity = 1;
    };
  }, 1000);
}

// 👉 Khởi động video đầu tiên
loadRandomBackgroundVideo();

// 👉 Tự động đổi video mỗi 30 giây
setInterval(() => {
  loadRandomBackgroundVideo();
}, 30000);
