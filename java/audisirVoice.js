// popupControl.js

let gifIndex = 0;
let currentAudioIndex = 1;
let audioTimeout;

const popup = document.getElementById("popupOverlay");
const gifImage = document.getElementById("gifImage");
const homeBtn = document.getElementById("homeBtn");

const audios = [
  document.getElementById("audio1"),
  document.getElementById("audio2"),
  document.getElementById("audio3")
];

function stopAllAudio() {
  clearTimeout(audioTimeout);
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  currentAudioIndex = 1;
}

function playNextAudio() {
  stopAllAudio();
  audios[currentAudioIndex].play();
  currentAudioIndex = (currentAudioIndex + 1) % audios.length;
  audioTimeout = setTimeout(playNextAudio, 25000);
}

homeBtn.addEventListener("click", () => {
  stopAllAudio();
  audios[0].play();

  popup.style.display = "flex";
  gifImage.src = window.gifList[gifIndex]; // dùng biến từ file ngoài
  gifIndex = (gifIndex + 1) % window.gifList.length;

  audioTimeout = setTimeout(playNextAudio, 25000);
});

gifImage.addEventListener("click", () => {
  stopAllAudio();
});

popup.addEventListener("click", (e) => {
  if (e.target.id === "popupOverlay") {
    popup.style.display = "none";
    stopAllAudio();
  }
});