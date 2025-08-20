import { resSources } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/docs/resSources.js';

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