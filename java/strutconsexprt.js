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
  const googleUrl = `https://www.google.com/search?q=site:ketcausoft.com+${encodeURIComponent(queryValue)}`;
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
    alert("Vui lòng nhập ý tưởng keyword");
    return;
  }

  try {
    const textToCopy = "Giả sử bạn là chuyên gia kết cấu xây dựng nhà dân dụng và công nghiệp, bạn hãy chia sẻ kiến thức chuyên sâu giùm tôi về chủ đề " + queryValue + " và dùng công cụ tạo hình ảnh để vẽ hình ảnh minh họa 3D về chủ đề trên";
    await navigator.clipboard.writeText(textToCopy);
    alert("Ý tưởng keyword đã được copy vào clipboard. Bạn chỉ cần paste vào " + toolName);

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

import { createStationPopup } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@7800ef9/docs/strutstationpop.js';

document.addEventListener("DOMContentLoaded", () => {
  // Toggle popup khi nhấn 🐟
  document.getElementById("btn-station").addEventListener("click", () => {
    const queryValue = document.getElementById("query").value.trim();
    if (!queryValue) {
      alert("Vui lòng nhập keyword trước");
      return;
    }
    // Xóa popup cũ nếu có
    const oldPopup = document.getElementById("stationPopup");
    if (oldPopup) oldPopup.remove();
    // Tạo popup mới với query
    createStationPopup(queryValue);
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
        alert("Vui lòng nhập keyword");
        return;
      }
      try {
        await navigator.clipboard.writeText(queryValue);
        alert("Keyword đã được copy vào clipboard");
        window.open(url, "_blank");
      } catch (err) {
        alert("Không thể copy vào clipboard");
        console.error(err);
      }
    }
  });
});

function refreshStationPopup() {
  const oldPopup = document.getElementById("stationPopup");
  if (oldPopup) oldPopup.remove();
  const queryValue = document.getElementById("query").value.trim();
  createStationPopup(queryValue);
}

function togglePopup(element, popupId) {
  const popup = document.getElementById(popupId);
  if (popupId === "popup1") {
    const iframe = document.getElementById("bookFrame");
    iframe.src = element.getAttribute("data-src");
  }
  popup.style.display = "block";
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);
  if (popupId === "popup1") {
    document.getElementById("bookFrame").src = "";
  }
  popup.style.display = "none";
}
