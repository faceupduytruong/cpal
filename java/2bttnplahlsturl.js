// VIDEO PLAYER SETUP
const video = document.getElementById('player');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const videoHls = new Hls();
const videoStreamUrl = 'https://vnso-pt-8-tf-multi-playlist-zmp3.zmdcdn.me/nDOW7B2Y4NI/zhls/playback-realtime/audio/97b35e1f625a8b04d24b/audio.m3u8';

if (Hls.isSupported()) {
  videoHls.loadSource(videoStreamUrl);
  videoHls.attachMedia(video);
  video.play(); // Tự động phát

  playBtn.onclick = () => { video.play(); };
  stopBtn.onclick = () => {
    video.pause();
    video.currentTime = 0;
  };
}

// AUDIO PLAYER SETUP
    const audio = document.getElementById('audio');
    const audioHls = new Hls();
    const streamURL = "https://vnso-pt-8-tf-multi-playlist-zmp3.zmdcdn.me/nDOW7B2Y4NI/zhls/playback-realtime/audio/97b35e1f625a8b04d24b/audio.m3u8";

    if (Hls.isSupported()) {
      audioHls.loadSource(streamURL);
      audioHls.attachMedia(audio);
      audioHls.on(Hls.Events.MANIFEST_PARSED, () => {
        audio.play();
      });
    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
      audio.src = streamURL;
      audio.addEventListener('loadedmetadata', () => {
        audio.play();
      });
    }
