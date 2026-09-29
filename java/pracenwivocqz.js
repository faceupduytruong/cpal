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

// 👉 Nút Google: tìm trên Google với dịch + nghĩa + của + từ + query
document.getElementById("search-btn").addEventListener("click", () => {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập cụm từ cần tìm");
    return;
  }
  const searchUrl = `https://www.bing.com/copilotsearch?q=dịch+nghĩa+của+từ+${encodeURIComponent(queryValue)}&FORM=CSSCOP`;
  window.open(searchUrl, "_blank");
});

// 👉 Nút Google: tìm trên Google với dịch + nghĩa + của + từ + query
document.getElementById("google-btn").addEventListener("click", () => {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập cụm từ cần tìm");
    return;
  }
  const googleUrl = `https://www.google.com/search?q=dịch+nghĩa+của+từ+${encodeURIComponent(queryValue)}`;
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

import { createStationPopup } from 'https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@1f6c0a5/docs/vocabstationpop.js';

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

  let words = [];

  document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        words = JSON.parse(e.target.result);
        alert("✅ Đã tải dữ liệu từ file JSON (" + words.length + " từ)");
      } catch (err) {
        alert("⚠️ File không hợp lệ: " + err.message);
      }
    };
    reader.readAsText(file);
  });

  function startQuiz() {
    if (words.length === 0) {
      alert("⚠️ Bạn chưa nhập file JSON!");
      return;
    }

    // Lọc bỏ những từ không hợp lệ (không có word hoặc meaning)
    const validWords = words.filter(item => item.word && item.meaning);

    if (validWords.length === 0) {
      alert("⚠️ Không có dữ liệu hợp lệ trong file JSON!");
      return;
    }

    // Lấy ngẫu nhiên 20 từ (hoặc ít hơn nếu dữ liệu < 20)
    const shuffled = validWords.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);

    const container = document.getElementById("game");
    container.innerHTML = "";

    selected.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <p><b>${item.word}</b> (${item.type || ""})</p>
        <p><i>${item.example || ""}</i></p>
        <input type="text" placeholder="Nghĩa tiếng Việt ?">
        <button2>Check</button2>
      `;
      const input = card.querySelector("input");
      const btn = card.querySelector("button2");
      btn.onclick = () => {
        if (input.value.trim() === item.meaning) {
          alert("✅ Chính xác!");
        } else {
          alert("❌ Sai. Đáp án: " + item.meaning);
        }
      };
      container.appendChild(card);
    });
  }

  function startQuizMultipleChoice() {
     const validWords = words.filter(item => item.word && item.meaning);
     const shuffled = validWords.sort(() => 0.5 - Math.random());
     const selected = shuffled.slice(0, 10); // 10 câu trắc nghiệm
    
     const container = document.getElementById("game");
     container.innerHTML = "";
    
     selected.forEach(item => {
       const card = document.createElement("div");
       card.className = "card";
    
       // tạo 3 nghĩa sai ngẫu nhiên
       const wrongOptions = validWords
         .filter(w => w.meaning !== item.meaning)
         .sort(() => 0.5 - Math.random())
         .slice(0, 3)
         .map(w => w.meaning);
    
       const options = [item.meaning, ...wrongOptions].sort(() => 0.5 - Math.random());
    
       card.innerHTML = `
         <p><b>${item.word}</b> (${item.type || ""})</p>
         <p><i>${item.example || ""}</i></p>
         ${options.map(opt => `<button class="option">${opt}</button>`).join("")}
       `;
    
       card.querySelectorAll(".option").forEach(btn => {
         btn.onclick = () => {
           if (btn.textContent === item.meaning) {
             alert("✅ Chính xác!");
           } else {
             alert("❌ Sai. Đáp án: " + item.meaning);
           }
         };
       });
    
       container.appendChild(card);
     });
   }
    
   function startQuizFillBlank() {
     const validWords = words.filter(item => item.word && item.example);
     const shuffled = validWords.sort(() => 0.5 - Math.random());
     const selected = shuffled.slice(0, 10);
    
     const container = document.getElementById("game");
     container.innerHTML = "";
    
     selected.forEach(item => {
       const sentence = item.example.replace(item.word, "_____");
       const card = document.createElement("div");
       card.className = "card";
       card.innerHTML = `
         <p>${sentence}</p>
         <input type="text" placeholder="Điền từ tiếng Anh">
         <button2>Check</button2>
       `;
       const input = card.querySelector("input");
       const btn = card.querySelector("button2");
       btn.onclick = () => {
         if (input.value.trim().toLowerCase() === item.word.toLowerCase()) {
           alert("✅ Chính xác!");
         } else {
           alert("❌ Sai. Đáp án: " + item.word);
         }
       };
       container.appendChild(card);
     });
   }

   function startFlashcards() {
     const validWords = words.filter(item => item.word && item.meaning);
     const shuffled = validWords.sort(() => 0.5 - Math.random());
     const selected = shuffled.slice(0, 10);
    
     const container = document.getElementById("game");
     container.innerHTML = "";
    
     selected.forEach(item => {
       const card = document.createElement("div");
       card.className = "card";
       card.innerHTML = `<p><b>${item.word}</b></p><p class="hidden">${item.meaning}</p>`;
       const hidden = card.querySelector(".hidden");
       hidden.style.display = "none";
       card.onclick = () => {
         hidden.style.display = hidden.style.display === "none" ? "block" : "none";
       };
       container.appendChild(card);
     });
   }
    
   function startMatching() {
     const validWords = words.filter(item => item.word && item.meaning);
     const shuffled = validWords.sort(() => 0.5 - Math.random()).slice(0, 6);
    
     const container = document.getElementById("game");
     container.innerHTML = "<h2>Matching Game</h2>";
    
     const leftCol = shuffled.map(item => `<div class="match-word" data-word="${item.word}">${item.word}</div>`).join("");
     const rightCol = shuffled.map(item => `<div class="match-meaning" data-word="${item.word}">${item.meaning}</div>`).sort(() => 0.5 - Math.random()).join("");
    
     container.innerHTML += `
       <div style="display:flex;gap:50px;justify-content:center;">
         <div>${leftCol}</div>
         <div>${rightCol}</div>
       </div>
     `;
    
     let selectedWord = null;
     document.querySelectorAll(".match-word").forEach(el => {
       el.onclick = () => { selectedWord = el.dataset.word; };
     });
     document.querySelectorAll(".match-meaning").forEach(el => {
       el.onclick = () => {
         if (selectedWord === el.dataset.word) {
           alert("✅ Ghép đúng!");
           el.style.visibility = "hidden";
           document.querySelector(`.match-word[data-word="${selectedWord}"]`).style.visibility = "hidden";
         } else {
           alert("❌ Sai, thử lại!");
         }
       };
     });
   }

   function startSpeedQuiz() {
     const validWords = words.filter(item => item.word && item.meaning);
     let score = 0, index = 0, timer;
    
     const container = document.getElementById("game");
     container.innerHTML = "<h2>Speed Quiz</h2><div id='quizArea'></div>";
    
     function nextQuestion() {
       if (index >= 5) {
         alert("Kết thúc! Điểm số: " + score);
         return;
       }
       const item = validWords[Math.floor(Math.random() * validWords.length)];
       const quizArea = document.getElementById("quizArea");
       quizArea.innerHTML = `
         <p><b>${item.word}</b> (${item.type || ""})</p>
         <input type="text" id="answer" class="text-area2">
         <button2 id="checkBtn">Check</button2>
         <p id="timer">20</p>
       `;
       let timeLeft = 20;
       timer = setInterval(() => {
         timeLeft--;
         document.getElementById("timer").textContent = timeLeft;
         if (timeLeft <= 0) {
           clearInterval(timer);
           alert("❌ Hết giờ! Đáp án: " + item.meaning);
           index++;
           nextQuestion();
         }
       }, 1000);
    
       document.getElementById("checkBtn").onclick = () => {
         clearInterval(timer);
         const ans = document.getElementById("answer").value.trim();
         if (ans === item.meaning) {
           score++;
           alert("✅ Chính xác!");
         } else {
           alert("❌ Sai. Đáp án: " + item.meaning);
         }
         index++;
         nextQuestion();
       };
     }
     nextQuestion();
   }

   function startHangman() {
     const validWords = words.filter(item => item.word && item.meaning);
     const item = validWords[Math.floor(Math.random() * validWords.length)];
     let hidden = "_".repeat(item.word.length);
     let lives = 6;
    
     const container = document.getElementById("game");
     container.innerHTML = `<h2>Hangman</h2><p>Nghĩa: ${item.meaning}</p><p id="hidden">${hidden}</p><p id="lives">Lives: ${lives}</p><input id="letter" class="text-area2" maxlength="1"><button2 id="guess">Guess</button2>`;
    
     document.getElementById("guess").onclick = () => {
       const letter = document.getElementById("letter").value.toLowerCase();
       let newHidden = "";
       let correct = false;
       for (let i = 0; i < item.word.length; i++) {
         if (item.word[i].toLowerCase() === letter) {
           newHidden += item.word[i];
           correct = true;
         } else {
           newHidden += hidden[i];
         }
       }
       hidden = newHidden;
       document.getElementById("hidden").textContent = hidden;
       if (!correct) {
         lives--;
         document.getElementById("lives").textContent = "Lives: " + lives;
       }
       if (hidden === item.word) alert("✅ Bạn thắng!");
       if (lives <= 0) alert("❌ Thua! Từ đúng là: " + item.word);
     };
   }
    
   function startSentenceBuilder() {
     const validWords = words.filter(item => item.word && item.example);
     const item = validWords[Math.floor(Math.random() * validWords.length)];
     const sentence = item.example.replace(item.word, "_____");
    
     const container = document.getElementById("game");
     container.innerHTML = `<h2>Sentence Builder</h2><p>${sentence}</p>`;
    
     const options = [item.word, ...validWords.slice(0,3).map(w => w.word)].sort(() => 0.5 - Math.random());
     options.forEach(opt => {
       const btn = document.createElement("button2");
       btn.textContent = opt;
       btn.onclick = () => {
         if (opt === item.word) alert("✅ Chính xác!");
         else alert("❌ Sai. Đáp án: " + item.word);
       };
       container.appendChild(btn);
     });
   }

   function startMemoryCards() {
     const validWords = words.filter(item => item.word && item.meaning).slice(0, 4);
     const pairs = validWords.flatMap(item => [
       {text: item.word, pair: item.word},
       {text: item.meaning, pair: item.word}
     ]).sort(() => 0.5 - Math.random());
    
     const container = document.getElementById("game");
     container.innerHTML = "<h2>Memory Cards</h2>";
     pairs.forEach((p, i) => {
       const card = document.createElement("button2");
       card.textContent = "?";
       card.dataset.pair = p.pair;
       card.dataset.text = p.text;
       card.onclick = () => flipCard(card);
       container.appendChild(card);
     });
    
     let flipped = [];
     function flipCard(card) {
       card.textContent = card.dataset.text;
       flipped.push(card);
       if (flipped.length === 2) {
         if (flipped[0].dataset.pair === flipped[1].dataset.pair) {
           alert("✅ Khớp!");
           flipped.forEach(c => c.disabled = true);
         } else {
            alert("❌ Sai!");
           flipped.forEach(c => c.textContent = "?");
         }
          flipped = [];
       }
     }
   }

   function startListeningQuiz() {
     const validWords = words.filter(item => item.word && item.meaning);
     const item = validWords[Math.floor(Math.random() * validWords.length)];
   
     const container = document.getElementById("game");
     container.innerHTML = `
       <h2>Listening Quiz</h2>
       <button2 id="play">🔊 Play Word</button2>
       <input id="ans" class="text-area2" placeholder="Nhập nghĩa tiếng Việt">
       <button2 id="check">Check</button2>
       <p id="result"></p>
     `;
    
     document.getElementById("play").onclick = () => {
       const utter = new SpeechSynthesisUtterance(item.word);
       utter.lang = "en-US";
       speechSynthesis.speak(utter);
     };
    
     document.getElementById("check").onclick = () => {
       const ans = document.getElementById("ans").value.trim();
       if (ans === item.meaning) {
          alert("✅ Chính xác!\nTừ: " + item.word + "\nNghĩa: " + item.meaning);
        } else {
          alert("❌ Sai.\nTừ: " + item.word + "\nĐáp án đúng: " + item.meaning);
        }
       };
   }
