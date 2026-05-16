// audioPlayer.js
import 'https://cdn.jsdelivr.net/npm/hls.js@latest';

const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const streamURL = "https://vnso-pt-8-tf-multi-playlist-zmp3.zmdcdn.me/nDOW7B2Y4NI/zhls/playback-realtime/audio/97b35e1f625a8b04d24b/audio.m3u8";

let hls;

function initPlayer() {
  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(streamURL);
    hls.attachMedia(audio);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      audio.play();
    });
  } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
    audio.src = streamURL;
    audio.play();
  }
}

// Tự động phát khi mở trang
window.addEventListener('load', () => {
  initPlayer();
});

// Nút Play
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  }
});

// Nút Stop
stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});
