  // 👉 Nhúng file JS danh sách video wallpaper
  import { bgVideos } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/move/mxktSources.js';
  import { chineseArtists } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/docs/chiengartlist.js';
  import { artisticFonts } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/docs/artisticfonlist1.js';
  // 👉 Nhúng js các loại bubble gif vào html
  import { bubbleEffects } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/docs/bubbeffgifimg.js';

  // 👉 Viết toàn bộ logic xử lý ở đây
document.getElementById("homeBtn").addEventListener("click", function () {
  const iframe = document.querySelector(".iframe-wrapper iframe");
  if (iframe) {
    const randomIndex = Math.floor(Math.random() * chineseArtists.length);
    const selectedArtist = chineseArtists[randomIndex];
    const query = encodeURIComponent(`${selectedArtist.english} ${selectedArtist.chinese} + 艺人`);
    iframe.src = `https://image.so.com/i?q=${query}&src=tab_video&inact=1`;
  }
});

document.getElementById("lyricsBtn").addEventListener("click", function () {
  openRightHalfPopup("https://chat.baidu.com", "ChatBaidu", window.innerWidth, 745);
});

document.getElementById("ahaBtn").addEventListener("click", function () {
  openRightHalfPopup("https://metaso.cn/", "MetasoTab", window.innerWidth, 745);
});

document.getElementById("learnBtn").addEventListener("click", function () {
  openRightHalfPopup("https://metaso.cn/study", "MetasoTab", window.innerWidth, 745);
});

let currentVideoIndex = 0;

document.getElementById("toggleEffectBtn").addEventListener("click", function () {
  // 👉 Đổi font
  const randomFontIndex = Math.floor(Math.random() * artisticFonts.length);
  const selectedFont = artisticFonts[randomFontIndex];
  document.getElementById("title").style.fontFamily = selectedFont;

 // 👉 Đổi hiệu ứng bong bóng ngẫu nhiên
  currentEffectIndex = Math.floor(Math.random() * bubbleEffects.length);

  // 👉 Đổi video nền ngẫu nhiên
  const randomVideoIndex = Math.floor(Math.random() * bgVideos.length);
  const bgVideo = document.querySelector(".bg-video");
  bgVideo.style.opacity = 0;

  setTimeout(() => {
    bgVideo.src = bgVideos[randomVideoIndex];
    bgVideo.load();
    bgVideo.play();
    bgVideo.style.opacity = 1;
  }, 500);
});

  let currentEffectIndex = 0;

  // 👉 Tạo bong bóng với ảnh hiện tại
  function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.style.left = Math.random() * window.innerWidth + "px";
    bubble.style.width = bubble.style.height = (Math.random() * 15 + 10) + "px";

    bubble.style.backgroundImage = `url('${bubbleEffects[currentEffectIndex]}')`;

    document.getElementById("bubble-container").appendChild(bubble);
    setTimeout(() => bubble.remove(), 4000);
  }

  // 👉 Tạo bong bóng liên tục
  setInterval(createBubble, 300);

const audioPlayer = document.querySelector(".audio-player");
const overlay = document.querySelector(".audio-player-overlay");
