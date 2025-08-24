 <!-- 👉 Gọi 3 loại Sound Siri -->
<audio id="audio1" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/sound/Sound%201.mp3"></audio>
<audio id="audio2" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/sound/Sound%202.mp3"></audio>
<audio id="audio3" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/sound/Sound%203.mp3"></audio>
  
 <!-- 👉 Ấn nút Delbtn thì dòng chữ biến mất -->
document.getElementById("DelBtn").addEventListener("click", () => {
  const el = document.getElementById("clipboardText");
  el.style.opacity = "0";
});


  <!-- 👉 JavaScript cho vệc hiển thị & tự động ẩn dòng chữ hiện ra -->
   window.addEventListener("DOMContentLoaded", () => {
     function showClipboardText(text) {
      const el = document.getElementById("clipboardText");
      el.innerText = text;
      el.style.display = "inline-block";
      el.style.opacity = "1";

      setTimeout(() => {
        el.style.opacity = "0";
        setTimeout(() => {
          el.style.display = "none";
        }, 300);
      }, 300000); // 5 phút
    }
    // Lắng nghe sự kiện paste
    document.addEventListener("paste", (e) => {
      const pastedText = e.clipboardData.getData("text");
      if (pastedText) {
        showClipboardText(pastedText);
      }
    });


  <!-- 👉 Ấn nút Paste thì dòng chữ trong clipboard hiện ra -->
document.getElementById("PasteBtn").addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    showClipboardText(text || "Không có nội dung trong clipboard");
  } catch (err) {
    showClipboardText("Không thể truy cập clipboard");
    console.error("Lỗi khi đọc clipboard:", err);
  }
 });
});

  <!-- 👉 Hiển thị popup khi nhấn homeBtn -->
  document.getElementById("homeBtn").onclick = () => {
    document.getElementById("popupOverlay").style.display = "block";
  };

  <!-- 👉 Hiển thị dòng chữ "I'm Siri, Your Virtual Assisstant khi ấn homeBtn -->
  document.getElementById("homeBtn").addEventListener("click", () => {
    showClipboardText("I'm Siri, Your Virtual Assistant");
  });

  <!-- 👉 Dòng chữ hiển thị nội dung clipboard -->
document.getElementById("PasteBtn").addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById("clipboardText").textContent = text || "Không có nội dung trong clipboard";
  } catch (err) {
    document.getElementById("clipboardText").textContent = "Không thể truy cập clipboard";
    console.error("Lỗi khi đọc clipboard:", err);
  }
});


<!-- 👉 Xử lý file ghi âm và lưu lại file ogg -->
  let mediaRecorder;
  let audioChunks = [];
  let audioBlob;

 document.getElementById("startBtn").onclick = async () => {
  stopAllAudio(); // ✅ Dừng Siri voice
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mimeType = 'audio/webm';
  mediaRecorder = new MediaRecorder(stream, { mimeType });
  audioChunks = [];
  mediaRecorder.start();

  mediaRecorder.ondataavailable = event => {
    audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    audioBlob = new Blob(audioChunks, { type: mimeType });
    const audioUrl = URL.createObjectURL(audioBlob);
    document.getElementById("audioPlayback").src = audioUrl;
    document.getElementById("downloadBtn").disabled = false;
  };

  document.getElementById("stopBtn").disabled = false;
};

document.getElementById("stopBtn").onclick = () => {
  stopAllAudio(); // ✅ Dừng Siri voice
  mediaRecorder.stop();
  document.getElementById("stopBtn").disabled = true;
};

document.getElementById("downloadBtn").onclick = () => {
  stopAllAudio(); // ✅ Dừng Siri voice
  if (!audioBlob) {
    alert("⚠️ Chưa có bản ghi âm để tải về.");
    return;
  }

document.getElementById("audioPlayback").addEventListener("play", () => {
  stopAllAudio(); // ✅ Dừng các audio Siri khi phát bản ghi âm
});

  const audioUrl = URL.createObjectURL(audioBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = audioUrl;
  downloadLink.download = "recording.ogg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};



<!-- 👉 Dừng âm thanh Voice Siri khi ấn 3 nút Record, Stop, Download -->
  function stopAllSiriSounds() {
    const sounds = ['audio1', 'audio2', 'audio3'];
    sounds.forEach(id => {
      const audio = document.getElementById(id);
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  // Gắn vào các nút
  document.getElementById("startBtn").addEventListener("click", () => {
    stopAllSiriSounds();
    // ... ghi âm bắt đầu
  });

  document.getElementById("stopBtn").addEventListener("click", () => {
    stopAllSiriSounds();
    // ... ghi âm dừng
  });

  document.getElementById("downloadBtn").addEventListener("click", () => {
    stopAllSiriSounds();
    // ... xử lý tải về
  });





