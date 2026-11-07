let words = [];

document.getElementById("fileInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      words = JSON.parse(e.target.result);
      alert("✅ Đã tải dữ liệu từ file JSON (" + words.length + " câu hỏi)");
    } catch (err) {
      alert("⚠️ File không hợp lệ: " + err.message);
    }
  };
  reader.readAsText(file);
});

// =====================================
// A. BIẾN TOÀN CỤC & QUẢN LÝ GIỌNG ĐỌC
// =====================================
let currentItem = null;   // Lưu thông tin item hiện tại đang chơi
let voices = [];

// Lấy danh sách giọng đọc của trình duyệt
speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
};

// Hàm chọn giọng nữ theo ngôn ngữ (Ưu tiên tiếng Việt hoặc tiếng Anh)
function getFemaleVoice(langCode) {
  return voices.find(v => v.lang.startsWith(langCode) && (
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("woman") ||
    v.name.toLowerCase().includes("hoang") ||
    v.name.includes("女")
  )) || voices.find(v => v.lang.startsWith(langCode));
}

// Hàm kiểm tra xem chuỗi có chứa ký tự tiếng Việt hay không
function isVietnamese(text) {
  if (!text) return false;
  const vietnameseRegex = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
  return vietnameseRegex.test(text);
}

// Hàm lấy cấu hình lang và voice thông minh dựa trên nội dung text
function getVoiceConfig(text) {
  if (isVietnamese(text)) {
    return {
      lang: "vi-VN",
      voice: getFemaleVoice("vi") || getFemaleVoice("vi-VN")
    };
  } else {
    return {
      lang: "en-US",
      voice: getFemaleVoice("en") || getFemaleVoice("en-US")
    };
  }
}

// =============================================
// B. CÁC HÀM HỖ TRỢ HIỂN THỊ ALERT & GIAO DIỆN
// =============================================
function showAlert(contentHtml) {
  document.getElementById("alertContent").innerHTML = contentHtml;
  document.getElementById("overlay").style.display = "block"; 
  document.getElementById("alertBox").style.display = "block"; 
}

function closeAlert() {
  document.getElementById("overlay").style.display = "none"; 
  document.getElementById("alertBox").style.display = "none"; 
}

// ===========================================
// C. HỆ THỐNG PHÁT ÂM CHUNG
// ===========================================
function speakText(text) {
  if (text) {
    const utter = new SpeechSynthesisUtterance(text);
    const config = getVoiceConfig(text);
    utter.lang = config.lang;
    if (config.voice) utter.voice = config.voice;
    speechSynthesis.speak(utter);
  }
}

function speakQueue(list) {
  const queue = list.filter(Boolean);
  let idx = 0;

  function speakNext() {
    if (idx < queue.length) {
      const text = queue[idx];
      const utter = new SpeechSynthesisUtterance(text);
      const config = getVoiceConfig(text);
      utter.lang = config.lang;
      if (config.voice) utter.voice = config.voice;
      
      utter.onend = () => {
        idx++;
        speakNext();
      };
      speechSynthesis.speak(utter);
    }
  }
  speakNext();
}

function repeatUtter() {
  if (!currentItem) return;
  speechSynthesis.cancel();
  if (currentItem.word) {
    speakText(currentItem.word);
  }
}

// =======================================
// 1. TRÒ CHƠI 1: QUIZ (HỎI ĐÁP / ĐIỀN NGHĨA)
// =======================================
function startQuiz() {
  if (words.length === 0) {
    alert("⚠️ Bạn chưa nhập file JSON!");
    return;
  }

  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) {
    alert("⚠️ Không có dữ liệu hợp lệ trong file JSON!");
    return;
  }

  const shuffled = validWords.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 20);

  const container = document.getElementById("game");
  container.innerHTML = "";

  selected.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><b>${item.word}</b></p>
      <input type="text" class="quiz-input" placeholder="Nhập đáp án...">
      <button2>Check</button2>
    `;
    const input = card.querySelector("input");
    const btn = card.querySelector("button2");

    btn.onclick = () => {
      const userValue = input.value.trim();
      
      if (userValue.toLowerCase() === item.meaning.toLowerCase()) {
        currentItem = { ...item, resultType: "quiz" };

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
            <p style="margin:5px 0;">Câu hỏi: <b style="font-size:3em;">${item.word}</b></p>
            <p style="margin:5px 0;">Đáp án: <b style="font-size:3em;color:orange;">${item.meaning}</b></p>
          </div>
        `;
        showAlert(content);
        speechSynthesis.cancel();
        speakText(item.word);

      } else {
        currentItem = { 
          ...item, 
          resultType: "quiz_wrong", 
          wrongChoice: userValue 
        };

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai!</p>
            <p style="margin:5px 0;">Bạn gõ: <b>${userValue || "(trống)"}</b></p>
            <p style="margin:5px 0;">Đáp án đúng: <b style="color:green;">${item.meaning}</b></p>
            <p style="margin:5px 0;color:orange;">(Hãy thử lại nhé!)</p>
          </div>
        `;
        showAlert(content);
        speechSynthesis.cancel();
        speakText(userValue);
      }
    };

    container.appendChild(card);
  });
}

// Trò chơi Quiz Multiple Choice (Trắc nghiệm)
function startQuizMultipleChoice() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ/câu hỏi để chơi trắc nghiệm!");
    return;
  }
  const shuffled = validWords.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  const container = document.getElementById("game");
  container.innerHTML = "";

  selected.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const wrongOptions = validWords
      .filter(w => w.meaning !== item.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.meaning);

    const options = [item.meaning, ...wrongOptions].sort(() => 0.5 - Math.random());

    card.innerHTML = `
      <p><b>${item.word}</b></p>
      ${options.map(opt => `<button2 class="option">${opt}</button2>`).join("")}
    `;

    card.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        if (btn.textContent === item.meaning) {
          const content = `
            <div style="text-align:center;">
              <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
              <p style="margin:5px 0;">Câu hỏi: <b style="font-size:3em;">${item.word}</b></p>
              <p style="margin:5px 0;">Đáp án: <b style="font-size:3em;style="color:orange;">${item.meaning}</b></p>
            </div>
          `;
          showAlert(content);
          speakText(item.word);
          currentItem = { ...item, resultType: "correct" };
        } else {
          const wrongMeaning = btn.textContent;
          const content = `
            <div style="text-align:center;">
              <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai!</p>
              <p style="margin:5px 0;">Bạn chọn: <b>${wrongMeaning}</b></p>
              <p style="margin:5px 0;">Đáp án đúng: <b style="color:green;">${item.meaning}</b></p>
            </div>
          `;
          showAlert(content);
          speakText(wrongMeaning);
          currentItem = { ...item, resultType: "wrong", wrongChoice: wrongMeaning };
        }
      };
    });

    container.appendChild(card);
  });
}

// Trò chơi Flashcards (Lật thẻ)
function startFlashcards() {
  const validWords = words.filter(item => item.word && item.meaning);
  const shuffled = validWords.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  const container = document.getElementById("game");
  container.innerHTML = "";

  selected.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p><b>${item.word}</b></p>
      <p class="hidden" style="color:green; font-weight:bold; margin-top:10px;">${item.meaning}</p>
    `;
    const hidden = card.querySelector(".hidden");
    hidden.style.display = "none";

    card.onclick = () => {
      hidden.style.display = hidden.style.display === "none" ? "block" : "none";
      speakText(item.word);
    };

    container.appendChild(card);
  });
}

// Trò chơi Matching (Ghép đôi)
function startMatching() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ để chơi ghép đôi!");
    return;
  }
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
        alert("❌ Sai!");
      }
    };
  });
}

// Trò chơi Speed Quiz (Đua thời gian)
function startSpeedQuiz() {
  const validWords = words.filter(item => item.word && item.meaning);
  let score = 0, index = 0, timer;

  const container = document.getElementById("game");
  container.innerHTML = "<h2>Speed Quiz</h2><div id='quizArea'></div>";

  function nextQuestion() {
    if (index >= 5 || index >= validWords.length) {
      alert("Kết thúc! Điểm số: " + score);
      return;
    }
    const item = validWords[index];
    const quizArea = document.getElementById("quizArea");
    quizArea.innerHTML = `
      <p><b>${item.word}</b></p>
      <input type="text" id="answer" class="text-area2" placeholder="Nhập đáp án...">
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
      if (ans.toLowerCase() === item.meaning.toLowerCase()) {
        score++;
        alert("✅ Chính xác!");
      } else {
        alert("❌ Sai! Đáp án: " + item.meaning);
      }
      index++;
      nextQuestion();
    };
  }
  nextQuestion();
}

// Trò chơi Hangman (Đoán từ/đáp án)
function startHangman() {
  const validWords = words.filter(item => item.meaning);
  if (validWords.length === 0) return;
  const item = validWords[Math.floor(Math.random() * validWords.length)];
  const target = item.meaning;
  let hidden = target.split("").map(c => c === " " ? " " : "_").join("");
  let lives = 6;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Hangman</h2>
    <p>Gợi ý: ${item.word}</p>
    <p id="hidden" style="font-size: 2em; letter-spacing: 3px;">${hidden}</p>
    <p id="lives">Lives: ${lives}</p>
    <input id="letter" class="text-area2" maxlength="1" placeholder="Nhập 1 chữ cái">
    <button2 id="guess">Guess</button2>
  `;

  document.getElementById("guess").onclick = () => {
    const letterInput = document.getElementById("letter");
    const letter = letterInput.value.toLowerCase();
    if (!letter) return;
    
    let newHidden = "";
    let correct = false;

    for (let i = 0; i < target.length; i++) {
      if (target[i].toLowerCase() === letter) {
        newHidden += target[i];
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

    if (hidden.toLowerCase() === target.toLowerCase()) {
      alert("✅ Bạn thắng!");
    } else if (lives <= 0) {
      alert("❌ Thua! Đáp án đúng là: " + target);
    }

    letterInput.value = "";
  };
}

// Trò chơi Listening Quiz (Nghe và đoán)
function startListeningQuiz() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) return;
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Listening Quiz</h2>
    <button2 id="play">🔊 Nghe câu hỏi</button2>
    <input id="ans" class="text-area2" placeholder="Nhập đáp án">
    <button2 id="check">Check</button2>
    <p id="result"></p>
  `;

  document.getElementById("play").onclick = () => {
    speakText(item.word);
  };

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    if (ans.toLowerCase() === item.meaning.toLowerCase()) {
       alert("✅ Chính xác!\nCâu hỏi: " + item.word + "\nĐáp án: " + item.meaning);
    } else {
       alert("❌ Sai!\nCâu hỏi: " + item.word + "\nĐáp án đúng: " + item.meaning);
    }
  };
}

// ===================================================
// 12. TRÒ CHƠI 12: SYNONYM CHALLENGE (THAY THẾ BẰNG CÂU HỎI / ĐÁP ÁN)
// ===================================================
function startSynonymChallenge() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 mục trong file JSON để chơi!");
    return;
  }

  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const wrongOptions = validWords
    .filter(w => w.meaning !== item.meaning)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.meaning);

  const options = [item.meaning, ...wrongOptions].sort(() => 0.5 - Math.random());

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Synonym Challenge</h2>
    <p>Chọn nghĩa đúng cho: <b>${item.word}</b></p>
    <div id="options"></div>
    <div style="margin-top: 10px; display: flex; align-items: center; gap: 15px;">
      <button1 id="next-btn" onclick="startSynonymChallenge()">Next ➡️</button1>
    </div>
  `;

  const optionsDiv = document.getElementById("options");
  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === item.meaning) {
        currentItem = { ...item, resultType: "correct" };
        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
            <p style="margin:5px 0;">Câu hỏi: <b style="font-size:3em;">${item.word}</b></p>
            <p style="margin:5px 0;">Đáp án: <b style="font-size:3em;color:orange;">${item.meaning}</b></p>
          </div>
        `;
        showAlert(content);
        addPoint(item.word);

        // Phát âm câu hỏi tự động nhận diện ngôn ngữ và tự động chuyển câu mới khi xong
        speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(item.word);
        const config = getVoiceConfig(item.word);
        utter.lang = config.lang;
        if (config.voice) utter.voice = config.voice;
        
        utter.onend = () => {
          startSynonymChallenge();
        };
        speechSynthesis.speak(utter);

      } else {
        currentItem = { 
          ...item, 
          resultType: "wrong", 
          wrongChoice: opt 
        };

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai!</p>
            <p style="margin:5px 0;">Bạn chọn: <b>${opt}</b></p>
            <p style="margin:5px 0;color:orange;">(Hãy thử chọn lại đáp án khác nhé!)</p>
          </div>
        `;
        showAlert(content);
        speakText(opt);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

// Trò chơi Spelling Bee (Đánh vần / Gõ lại)
function startSpellingBee() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) return;
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const askEnglish = Math.random() < 0.5;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Spelling Bee</h2>
    <p>${askEnglish ? "Nghe phát âm hoặc đọc câu hỏi và gõ lại chính xác" : "Gõ lại chính xác đáp án"}</p>
    <button2 id="play">🔊 Nghe câu hỏi</button2>
    <input id="ans" class="text-area2" placeholder="Nhập câu trả lời...">
    <button2 id="check">Check</button2>
    <p id="result"></p>
  `;

  document.getElementById("play").onclick = () => {
    speakText(item.word);
  };

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    const result = document.getElementById("result");

    if (ans.toLowerCase() === item.meaning.toLowerCase() || ans.toLowerCase() === item.word.toLowerCase()) {
      result.textContent = "✅ Chính xác! Đáp án: " + item.meaning;
      result.style.color = "green";
      speakText(item.meaning);
    } else {
      result.textContent = "❌ Sai! Đáp án đúng là: " + item.meaning;
      result.style.color = "red";
    }
  };
}

// ================================================
// 15. TRÒ CHƠI 15: ANTONYM BATTLE (THAY THẾ BẰNG THỬ THÁCH ĐỐ VUI)
// ================================================
function startAntonymBattle() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 mục trong file JSON để chơi!");
    return;
  }

  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const wrongOptions = validWords
    .filter(w => w.meaning !== item.meaning)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.meaning);

  const options = [item.meaning, ...wrongOptions].sort(() => 0.5 - Math.random());

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Antonym Battle</h2>
    <p>Chọn đáp án cho câu hỏi: <b>${item.word}</b></p>
    <div id="options"></div>
    <div style="margin-top: 10px; display: flex; align-items: center; gap: 15px;">
      <button1 id="next-btn" onclick="startAntonymBattle()">Next ➡️</button1>
    </div>
  `;

  const optionsDiv = document.getElementById("options");
  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === item.meaning) {
        currentItem = { ...item, resultType: "antonym_correct" };

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
            <p style="margin:5px 0;">Câu hỏi: <b style="font-size:1.5em;">${item.word}</b></p>
            <p style="margin:5px 0;">Đáp án: <b style="font-size:1.5em;color:green;">${item.meaning}</b></p>
          </div>
        `;
        showAlert(content);
        addPoint(item.word);

        speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(item.word);
        const config = getVoiceConfig(item.word);
        utter.lang = config.lang;
        if (config.voice) utter.voice = config.voice;
        
        utter.onend = () => {
          startAntonymBattle();
        };
        speechSynthesis.speak(utter);

      } else {
        currentItem = { 
          ...item, 
          resultType: "antonym_wrong", 
          wrongChoice: opt 
        };

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai!</p>
            <p style="margin:5px 0;">Bạn chọn: <b>${opt}</b></p>
            <p style="margin:5px 0;color:orange;">(Hãy thử lại nhé!)</p>
          </div>
        `;
        showAlert(content);
        speakText(opt);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

// Trò chơi Quick Translation Race (Đua dịch nhanh / Trả lời nhanh)
function startQuickTranslationRace() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) {
    alert("⚠️ Không có dữ liệu hợp lệ trong file JSON!");
    return;
  }

  let score = 0;
  let index = 0;
  let timer;
  let timeLeft = 10;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Quick Translation Race</h2>
    <div id="quizArea"></div>
    <p id="progress"></p>
  `;

  function nextQuestion() {
    if (index >= 10 || index >= validWords.length) {
      alert("🏁 Kết thúc cuộc đua!\nĐiểm số của bạn: " + score + "/10");
      return;
    }

    const item = validWords[index];
    const quizArea = document.getElementById("quizArea");
    quizArea.innerHTML = `
      <p><b>${item.word}</b></p>
      <input type="text" id="answer" class="text-area2" placeholder="Nhập đáp án...">
      <button2 id="checkBtn">Check</button2>
      <p id="timer">⏳ 10</p>
    `;
    document.getElementById("progress").textContent = `Câu ${index+1}/10`;

    timeLeft = 10;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = "⏳ " + timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert("❌ Hết giờ! Đáp án đúng: " + item.meaning);
        index++;
        nextQuestion();
      }
    }, 1000);

    document.getElementById("checkBtn").onclick = () => {
      clearInterval(timer);
      const ans = document.getElementById("answer").value.trim();
      if (ans.toLowerCase() === item.meaning.toLowerCase()) {
        score++;
        alert("✅ Chính xác!\nĐáp án: " + item.meaning);
        addPoint(item.word);
        speakText(item.word);
      } else {
        alert("❌ Sai!\nĐáp án đúng: " + item.meaning);
      }
      index++;
      nextQuestion();
    };
  }

  nextQuestion();
}

// Trò chơi Quiz Multiple Choice 2 (Trắc nghiệm 2 chiều)
function startQuizMultipleChoice2() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 mục trong file JSON để chơi!");
    return;
  }

  const item = validWords[Math.floor(Math.random() * validWords.length)];
  const askReverse = Math.random() < 0.5;

  let questionText, correctAnswer, wrongOptions;

  if (askReverse) {
    // Hỏi nghĩa, chọn câu hỏi
    questionText = item.meaning;
    correctAnswer = item.word;
    wrongOptions = validWords
      .filter(w => w.word !== item.word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.word);
  } else {
    // Hỏi câu hỏi, chọn nghĩa
    questionText = item.word;
    correctAnswer = item.meaning;
    wrongOptions = validWords
      .filter(w => w.meaning !== item.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.meaning);
  }

  const options = [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random());

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Multiple Choice Quiz</h2>
                         <p>Chọn đáp án đúng cho: <b>${questionText}</b></p>
                         <div id="options"></div>`;

  const optionsDiv = document.getElementById("options");
  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === correctAnswer) {
        alert("✅ Chính xác!\nĐáp án: " + correctAnswer);
        addPoint(item.word);
      } else {
        alert("❌ Sai!\nĐáp án đúng: " + correctAnswer);
      }

      speakText(item.word);
      
      if (opt === correctAnswer) {
        startQuizMultipleChoice2();
      }
    };
    optionsDiv.appendChild(btn);
  });
}
