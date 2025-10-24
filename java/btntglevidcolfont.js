// 👉 Nhúng dữ liệu từ các file JS trên GitHub
import { bgVideos } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@8edee09/docs/mxktSources.js';
import { chineseArtists } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@ad3a146/docs/chiengartlist.js';
import { artisticFonts } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@a3bb5ff/docs/artisticfonlist2.js';
import { colors } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@6adac98/docs/coloarramodif.js';

window.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  let isUsingUrl1 = true;

  // 👉 Đổi iframe theo nghệ sĩ
  document.getElementById("homeBtn")?.addEventListener("click", function () {
    const iframe = document.querySelector(".player-container iframe");
    if (!chineseArtists || chineseArtists.length === 0) return;
    const randomArtist = chineseArtists[Math.floor(Math.random() * chineseArtists.length)];
    const dynamicUrl1 = `https://www.n.cn/?q=${encodeURIComponent(randomArtist.english + " " + randomArtist.chinese)}&_chatParams=%7B%22from%22%3A%22q2a%22%2C%22token%22%3A%22qqlyXvxYwHaqSiBJRHFtuj0fMzRB05Y0tLgrZYGxQK1%2BHT%2Fxu5CvjynYHAc8ehhvDN8Dq28EnShTQPKESCOMvXFcZ5rUxrbFTEmv0D2vsKL7jDSVVyeUgyxxKD1o3WSYVvBkdExGsO2I8Wrp%22%2C%22chat_no_login%22%3Atrue%2C%22agent_id%22%3A%22BxxWCDBItDylXCXgdMOK1JQYg9trJwt3%22%7D&tplname=ai_agent_qa_recommend&srcid=61446&order=5&_swebScene=3711001210000000`;
    const dynamicUrl2 = `https://image.so.com/i?q=${encodeURIComponent(randomArtist.english + " " + randomArtist.chinese)}&src=tab_video&inact=1`;
    const nextUrl = isUsingUrl1 ? dynamicUrl1 : dynamicUrl2;
    isUsingUrl1 = !isUsingUrl1;
    if (iframe) iframe.src = nextUrl;
  });

  function openRightHalfPopup(url, title, w, h) {
    const screenLeft = window.screenLeft ?? window.screenX;
    const screenTop = window.screenTop ?? window.screenY;
    const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;
    const left = width + screenLeft;
    const top = (height - h) / 2 + screenTop;
    const popupWindow = window.open(url, title, `scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`);
    if (window.focus) popupWindow?.focus();
  }

  document.getElementById("lyricsBtn")?.addEventListener("click", () => {
    openRightHalfPopup("https://g5v304.smartapps.baidu.com/?_chatParams=%7B%22from%22%3A%22q2a%22%2C%22token%22%3A%22qqlyXvxYwHaqSiBJRHFtuj0fMzRB05Y0tLgrZYGxQK1%2BHT%2Fxu5CvjynYHAc8ehhvDN8Dq28EnShTQPKESCOMvXFcZ5rUxrbFTEmv0D2vsKL7jDSVVyeUgyxxKD1o3WSYVvBkdExGsO2I8Wrp%22%2C%22chat_no_login%22%3Atrue%2C%22agent_id%22%3A%22BxxWCDBItDylXCXgdMOK1JQYg9trJwt3%22%7D&searchid=bfce2ad00018b8ca&tplname=ai_agent_qa_recommend&srcid=61446&order=5&lid=bfce2ad00018b8ca&_swebScene=3711001210000000", "ChatBaidu", window.innerWidth, 745);
  });

  document.getElementById("ahaBtn")?.addEventListener("click", () => {
    openRightHalfPopup("https://x2g7hp.smartapps.baidu.com/?_chatParams=%7B%22from%22%3A%22q2a%22%2C%22token%22%3A%22qqlyXvxYwHaqSiBJRHFtuj0fMzRB05Y0tLgrZYGxQK1%2BHT%2Fxu5CvjynYHAc8ehhvDN8Dq28EnShTQPKESCOMvXFcZ5rUxrbFTEmv0D2vsKL7jDSVVyeUgyxxKD1o3WSYVvBkdExGsO2I8Wrp%22%2C%22chat_no_login%22%3Atrue%2C%22agent_id%22%3A%22BxxWCDBItDylXCXgdMOK1JQYg9trJwt3%22%7D&searchid=bfce2ad00018b8ca&tplname=ai_agent_qa_recommend&srcid=61446&order=5&lid=bfce2ad00018b8ca&_swebScene=3711001210000000", "MetasoTab", window.innerWidth, 745);
  });

  document.getElementById("learnBtn")?.addEventListener("click", () => {
    openRightHalfPopup("https://wa6rs9.smartapps.baidu.com/?_chatParams=%7B%22from%22%3A%22q2a%22%2C%22token%22%3A%22qqlyXvxYwHaqSiBJRHFtuj0fMzRB05Y0tLgrZYGxQK1%2BHT%2Fxu5CvjynYHAc8ehhvDN8Dq28EnShTQPKESCOMvXFcZ5rUxrbFTEmv0D2vsKL7jDSVVyeUgyxxKD1o3WSYVvBkdExGsO2I8Wrp%22%2C%22chat_no_login%22%3Atrue%2C%22agent_id%22%3A%22BxxWCDBItDylXCXgdMOK1JQYg9trJwt3%22%7D&searchid=bfce2ad00018b8ca&tplname=ai_agent_qa_recommend&srcid=61446&order=5&lid=bfce2ad00018b8ca&_swebScene=3711001210000000", "MetasoTab", window.innerWidth, 745);
  });

  // 👉 Nút đổi hiệu ứng
  document.getElementById("toggleEffectBtn")?.addEventListener("click", () => {
    const color = colors[currentIndex];
    document.querySelector(".audio-player-overlay")?.style.backgroundColor = color;
    document.querySelector(".glass-bg")?.style.backgroundColor = color;
    document.querySelector(".player-container")?.style.backgroundColor = color;
    currentIndex = (currentIndex + 1) % colors.length;
    const randomFontIndex = Math.floor(Math.random() * artisticFonts.length);
    const selected = artisticFonts[randomFontIndex];
    const title = document.getElementById("title");
    if (title) {
      title.style.fontFamily = selected.font;
      title.style.fontSize = selected.size;
    }
    const randomVideoIndex = Math.floor(Math.random() * bgVideos.length);
    const bgVideo = document.querySelector(".bg-video");
    if (!bgVideo) return;
    bgVideo.style.opacity = 0;
    setTimeout(() => {
      bgVideo.src = bgVideos[randomVideoIndex];
      bgVideo.load();
      bgVideo.play();
      bgVideo.style.opacity = 1;
    }, 500);
  });
});
