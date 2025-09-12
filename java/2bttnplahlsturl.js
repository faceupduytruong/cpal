  const video = document.getElementById('player');
  const playBtn = document.getElementById('playBtn');
  const stopBtn = document.getElementById('stopBtn');
  const hls = new Hls();
  const streamUrl = 'https://vnso-pt-8-tf-multi-playlist-zmp3.zmdcdn.me/nDOW7B2Y4NI/zhls/playback-realtime/audio/97b35e1f625a8b04d24b/audio.m3u8';

  hls.loadSource(streamUrl);
  hls.attachMedia(video);
  video.play();              // Phát tự động


  playBtn.onclick = () => { video.play(); };
  stopBtn.onclick = () => {
    video.pause();
    video.currentTime = 0;

  };
