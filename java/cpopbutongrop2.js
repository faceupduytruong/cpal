/*Quản lý các nhóm lệnh trong Cpop playlist video */

/* Nhấn nút homeBtn ♾️ mở các trang hỏi chatbot AI */

const url1 = "https://6hxp77.smartapps.baidu.com/?_chatParams=%7B%22agent_id%22%3A%22RFnALO8z7w7YcjdqQ663J3E7dP1ZhKax%22%2C%22from%22%3A%22q2a%22%2C%22token%22%3A%22yY6%2BUOUnN6h1FGVq1k6MGUNXYaKlUJHqQRrLTO%2BF1IoTdrb956GxpuCmR1hxgtxDVtAH25VRNwzsYGrk1xNwlHeJEUlQBsEULg8fMa9pw88awdAHQ6UAVUKKEn5Ly2V8TMiXAJzPmkuZ7z5l%22%2C%22chat_no_login%22%3Atrue%7D&searchid=bfce2ad00018b8ca&tplname=ai_agent_qa_recommend&srcid=61446&order=5&lid=bfce2ad00018b8ca&_swebScene=3711001210000000";

const url2 = "https://4qv97y.smartapps.baidu.com/?_chatParams=%7B%22agent_id%22%3A%22RFnALO8z7w7YcjdqQ663J3E7dP1ZhKax%22%2C%22from%22%3A%22q2a%22%2C%22token%22%3A%22yY6%2BUOUnN6h1FGVq1k6MGUNXYaKlUJHqQRrLTO%2BF1IoTdrb956GxpuCmR1hxgtxDVtAH25VRNwzsYGrk1xNwlHeJEUlQBsEULg8fMa9pw88awdAHQ6UAVUKKEn5Ly2V8TMiXAJzPmkuZ7z5l%22%2C%22chat_no_login%22%3Atrue%7D&searchid=bfce2ad00018b8ca&tplname=ai_agent_qa_recommend&srcid=61446&order=5&lid=bfce2ad00018b8ca&_swebScene=3711001210000000";

const url3 = "https://aistudy.baidu.com/site/wjzsorv8/8cd47d9a-7797-42f3-9306-b902ded71161";

const url4 = "https://68bpga.smartapps.baidu.com/?_chatParams=%7B%22agent_id%22%3A%22RFnALO8z7w7YcjdqQ663J3E7dP1ZhKax%22%2C%22from%22%3A%22q2a%22%2C%22token%22%3A%22yY6%2BUOUnN6h1FGVq1k6MGUNXYaKlUJHqQRrLTO%2BF1IoTdrb956GxpuCmR1hxgtxDVtAH25VRNwzsYGrk1xNwlHeJEUlQBsEULg8fMa9pw88awdAHQ6UAVUKKEn5Ly2V8TMiXAJzPmkuZ7z5l%22%2C%22chat_no_login%22%3Atrue%7D&searchid=bfce2ad00018b8ca&tplname=ai_agent_qa_recommend&srcid=61446&order=5&lid=bfce2ad00018b8ca&_swebScene=3711001210000000";

const urls = [url1, url2, url3, url4];

function openRightHalfPopup(url, title, w, h) {
  const screenLeft = window.screenLeft ?? window.screenX;
  const screenTop = window.screenTop ?? window.screenY;
  const width = window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height = window.innerHeight ?? document.documentElement.clientHeight ?? screen.height;

  const left = width + 42.5 + screenLeft;
  const top = (height - h) / 2 + screenTop;

  const popupWindow = window.open(url, title, `scrollbars=yes,width=${w},height=${h},top=${top},left=${left}`);
  if (window.focus) popupWindow?.focus();
}

document.getElementById("homeBtn").addEventListener("click", function () {
  const urls = [url1, url2, url3, url4];
  const randomIndex = Math.floor(Math.random() * urls.length);
  const randomUrl = urls[randomIndex];

  openRightHalfPopup(randomUrl, "SmartApp Popup", window.innerWidth, 745);
});

/* Nhấn nút engBtn 👓 mở search Baike */

let baikePopup = null;

document.getElementById("engBtn").addEventListener("click", function () {
  const url = "https://baike.so.com/doc/430855-456301.html";
  const name = "BaikePage";
  const width = window.innerWidth;
  const height = 745;
  const left = window.innerWidth + width;
  const top = (window.innerHeight - height) / 2;

  const features = `width=${width},height=${height},left=${left},top=${top}`;

  if (!baikePopup || baikePopup.closed) {
    baikePopup = window.open(url, name, features);
  } else {
    baikePopup.location.href = url;
    baikePopup.focus();
  }
});

/* Nhấn vào nút lyricsBtn 🐟 luân phiên mở YouTube và Bilibili */

document.getElementById("lyricsBtn").addEventListener("click", function () {
  document.getElementById("lyricsPopup").style.display = "flex";
});

document.getElementById("closeLyricsPopup").addEventListener("click", function () {
  document.getElementById("lyricsPopup").style.display = "none";
});

// Xử lý khi nhấn vào từng nút nền tảng
document.querySelectorAll(".siteBtn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const url = btn.getAttribute("data-url");

    const width = window.innerWidth;
    const height = 745;
    const left = window.innerWidth + width;
    const top = (window.innerHeight - height) / 2;
    const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes`;

    window.open(url, "popupWindow", features);

    document.getElementById("lyricsPopup").style.display = "none";
  });
});

/* Nhấn vào nút ahaBtn 💧 mở popup Tìm kiếm tên bài hát và tên ca sĩ */

document.getElementById("ahaBtn").addEventListener("click", function () {
  openRightHalfPopup("https://www.aha-music.com/identify-songs-music-recognition-online#record-div", "aha-music", window.innerWidth, 745);
});

/* Nhấn nút sheBtn 🔄 nhập tên bài hát, tên ca sĩ và search bài hát */

let musicPopup = null;
let searchStep = 0;

document.getElementById("sheBtn").addEventListener("click", function () {
  document.getElementById("customPopup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("customPopup").classList.add("popup-hidden");
});

document.getElementById("searchBtn").addEventListener("click", function () {
  const songName = document.getElementById("songInput").value.trim();
  const singerName = document.getElementById("singerInput").value.trim();

  if (!songName || !singerName) {
    alert("Vui lòng nhập đầy đủ tên bài hát và ca sĩ!");
    return;
  }

  const keyword = encodeURIComponent(`"${songName}" "${singerName}"`);
  let searchUrl = "";

  switch (searchStep % 5) {
    case 0:
      searchUrl = `https://www.youtube.com/results?search_query=${keyword}`;
      break;
    case 1:
      searchUrl = `https://search.bilibili.com/all?keyword=${keyword}`;
      break;
    case 2:
      searchUrl = `https://open.spotify.com/search/${keyword}`;
      break;
    case 3:
      const querySo = encodeURIComponent(`music.163.com ${songName} ${singerName}`);
      searchUrl = `https://www.so.com/s?ie=utf-8&src=360se7_addr_xztest4&q=${querySo}`;
      break;
    case 4:
      searchUrl = `https://www.163.com/search?keyword=${keyword}`;
      break;
  }

  const name = "Kết quả tìm kiếm";
  const width = window.innerWidth;
  const height = 745;
  const left = window.innerWidth + width;
  const top = (window.innerHeight - height) / 2;
  const features = `width=${width},height=${height},left=${left},top=${top}`;

  if (!musicPopup || musicPopup.closed) {
    musicPopup = window.open(searchUrl, name, features);
  } else {
    musicPopup.location.href = searchUrl;
    musicPopup.focus();
  }

  document.getElementById("customPopup").classList.add("popup-hidden");
  searchStep++;
});

/* Nhấn vào nút close-btn ❌ tắt popup nhập liệu */

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("customPopup").style.display = "none";
});

/* Nhấn vào nút learnBtn 🐋 mở popup AI nhạc lý */
document.getElementById("learnBtn").addEventListener("click", function () {
  openRightHalfPopup("https://metaso.cn/study", "MetasoStudy", window.innerWidth, 745);
});
