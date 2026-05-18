// Toggle theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Khôi phục theme khi load trang
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

let mediaRecorder;
let audioChunks = [];
let audioBlob;

// Toggle panel
document.getElementById("toolsBtn").addEventListener("click", () => {
  const panel = document.getElementById("toolsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

// Start recording
document.getElementById("startRecordBtn").addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
  audioChunks = [];
  mediaRecorder.start();

  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

  mediaRecorder.onstop = () => {
    audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    const audioUrl = URL.createObjectURL(audioBlob);
    document.getElementById("recordPlayback").src = audioUrl;
    document.getElementById("downloadRecordBtn").disabled = false;
  };

  document.getElementById("stopRecordBtn").disabled = false;
});

// Stop recording
document.getElementById("stopRecordBtn").addEventListener("click", () => {
  mediaRecorder.stop();
  document.getElementById("stopRecordBtn").disabled = true;
});

// Download recording
document.getElementById("downloadRecordBtn").addEventListener("click", () => {
  if (!audioBlob) {
    alert("⚠️ Chưa có bản ghi âm để tải về.");
    return;
  }
  const audioUrl = URL.createObjectURL(audioBlob);
  const link = document.createElement("a");
  link.href = audioUrl;
  link.download = "recording.ogg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// 👉 Nút Convert mở Speaknotes
document.getElementById("convertBtn").addEventListener("click", () => {
  const url = "https://speaknotes.io/free-tools/transcribe/ogg";
  const title = "Transcribe OGG";
  openRightHalfPopup(url, title, window.innerWidth * 2 + 45, 745);
});

// 👉 Nút Translate mở Google Dịch
document.getElementById("translateBtn").addEventListener("click", async () => {
  try {
    // Đọc clipboard (chỉ hoạt động khi trang được mở qua HTTPS hoặc localhost)
    const text = await navigator.clipboard.readText();
    const encodedText = encodeURIComponent(text);
    const url = `https://translate.google.com.vn/?sl=auto&tl=vi&text=${encodedText}&op=translate`;
    const title = "Google Dịch";

    openRightHalfPopup(url, title, window.innerWidth * 2 + 45, 745);
  } catch (err) {
    alert("Không thể đọc clipboard. Hãy cấp quyền truy cập.");
    console.error(err);
  }
});

// 👉 Nút Google: tìm trên Google với soundcloud.com + query
document.getElementById("google-btn").addEventListener("click", () => {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập cụm từ cần tìm");
    return;
  }
  const googleUrl = `https://www.google.com/search?q=site:soundcloud.com+${encodeURIComponent(queryValue)}`;
  window.open(googleUrl, "_blank");
});

// Khi click vào AI Playlist thì hiện nhóm công cụ
document.getElementById("ai-btn").addEventListener("click", () => {
  const toolsPanel = document.getElementById("ai-tools");
  toolsPanel.style.display = toolsPanel.style.display === "none" ? "block" : "none";
});

// Hàm mở công cụ tương ứng
async function openTool(toolName) {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập ý tưởng playlist");
    return;
  }

  try {
    const textToCopy = "tạo giùm tôi playlist âm nhạc và dùng tính năng tạo hình ảnh để làm bìa đĩa cover cho playlist hình vuông phù hợp với chủ đề " + queryValue;
    await navigator.clipboard.writeText(textToCopy);
    alert("Ý tưởng playlist đã được copy vào clipboard. Bạn chỉ cần paste vào " + toolName);

    let url = "";
    switch (toolName) {
      case "gemini":
        url = "https://gemini.google.com";
        break;
      case "copilot":
        url = "https://copilot.microsoft.com";
        break;
      case "chatgpt":
        url = "https://chat.openai.com";
        break;
      case "chaton":
        url = "https://chat.chaton.ai/my/main";
        break;
      case "deepseek":
        url = "https://chat.deepseek.com";
        break;
    }
    window.open(url, "_blank");
  } catch (err) {
    alert("Không thể copy vào clipboard. Hãy cấp quyền truy cập.");
    console.error(err);
  }
}

// Đảm bảo gọi được từ HTML
window.openTool = openTool;

// Gắn hàm vào window để gọi từ HTML onclick
window.loadRandomPlaylist = loadRandomPlaylist;
window.loadPlaylist = loadPlaylist;

import { createStationPopup } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@08edc7a/docs/mustationpop.js';

document.addEventListener("DOMContentLoaded", () => {
  // tạo popup
  createStationPopup();

  // Toggle popup khi nhấn 🐟
  document.getElementById("btn-station").addEventListener("click", () => {
    document.getElementById("stationPopup").classList.toggle("popup-hidden");
  });

  // Đóng popup khi nhấn ❌
  document.addEventListener("click", (e) => {
    if (e.target && e.target.id === "closeStationPopup") {
      document.getElementById("stationPopup").classList.add("popup-hidden");
    }
  });

  // Gắn sự kiện cho siteBtn
  document.addEventListener("click", async (e) => {
    if (e.target.closest(".siteBtn")) {
      const btn = e.target.closest(".siteBtn");
      const url = btn.getAttribute("data-url");
      const queryValue = document.getElementById("query").value.trim();
      if (!queryValue) {
        alert("Vui lòng nhập ý tưởng playlist");
        return;
      }
      try {
        const textToCopy = "playlist " + queryValue;
        await navigator.clipboard.writeText(textToCopy);
        alert("Ý tưởng playlist đã được copy vào clipboard. Bạn chỉ cần paste vào trang nhạc.");
        window.open(url, "_blank");
      } catch (err) {
        alert("Không thể copy vào clipboard. Hãy cấp quyền truy cập.");
        console.error(err);
      }
    }
  });
});
