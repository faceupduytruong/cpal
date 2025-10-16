import { resSources } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@a455d1e/docs/resSources.js';

// 👉 Chèn CSS vào DOM
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

// 👉 Logic đổi video
const video = document.getElementById('bgVideo');
let currentIndex = -1;

function getRandomIndex(excludeIndex) {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * resSources.length);
  } while (newIndex === excludeIndex);
  return newIndex;
}

function loadBackgroundVideo(index) {
  video.style.opacity = 0;

  setTimeout(() => {
    video.src = resSources[index];
    video.load();

    video.oncanplay = () => {
      video.style.opacity = 1;
    };
  }, 1000);
}

currentIndex = getRandomIndex(-1);
loadBackgroundVideo(currentIndex);

setInterval(() => {
  currentIndex = getRandomIndex(currentIndex);
  loadBackgroundVideo(currentIndex);
}, 30000);

document.getElementById("toggleEffectBtn")?.addEventListener("click", () => {
  currentIndex = getRandomIndex(currentIndex);
  loadBackgroundVideo(currentIndex);

});






