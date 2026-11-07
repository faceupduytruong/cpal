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

function getFemaleVoice(langCode) {
  return voices.find(v => v.lang.startsWith(langCode) && (
    v.name.toLowerCase().includes("female") ||
    v.name.toLowerCase().includes("woman") ||
    v.name.toLowerCase().includes("hoang") ||
    v.name.includes("女")
  )) || voices.find(v => v.lang.startsWith(langCode));
}

function isVietnamese(text) {
  if (!text) return false;
  const vietnameseRegex = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i;
  return vietnameseRegex.test(text);
}

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

function repeatUtter() {
  if (!currentItem) return;
  speechSynthesis.cancel();
  if (currentItem.word) {
    speakText(currentItem.word);
  }
}

// ==========================================
// 1. TRÒ CHƠI 1: QUIZ (HỎI ĐÁP / ĐIỀN NGHĨA)
// ==========================================
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
        addPoint(item.word); // 👉 Cộng điểm khi đúng

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
            <p style="margin:5px 0;">Câu hỏi: <b style="font-size:2.5em;">${item.word}</b></p>
            <p style="margin:5px 0;">Đáp án: <b style="font-size:2.5em;color:orange;">${item.meaning}</b></p>
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
            <p style="margin:5px 0;">Bạn gõ: <b style="font-size:2.5em">${userValue || "(trống)"}</b></p>
            <p style="margin:5px 0;">Đáp án đúng: <b style="font-size:2.5em;color:green;">${item.meaning}</b></p>
            <p style="margin:5px 0;font-size:2.5em;color:orange;">(Hãy thử lại nhé!)</p>
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

// =================================================
// 2. TRÒ CHƠI 2: QUIZ MULTIPLE CHOICE (TRẮC NGHIỆM)
// =================================================
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
          addPoint(item.word); // 👉 Cộng điểm khi đúng
          const content = `
            <div style="text-align:center;">
              <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
              <p style="margin:5px 0;">Câu hỏi: <b style="font-size:2.5em;">${item.word}</b></p>
              <p style="margin:5px 0;">Đáp án: <b style="font-size:2.5em;color:orange;">${item.meaning}</b></p>
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
              <p style="margin:5px 0;">Bạn chọn: <b style="font-size:2.5em">${wrongMeaning}</b></p>
              <p style="margin:5px 0;">Đáp án đúng: <b style="font-size:2.5em;color:green;">${item.meaning}</b></p>
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

// ===================================
// 3. TRÒ CHƠI 3: FLASHCARDS (LẬT THẺ)
// ===================================
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

// ===========================================
// 4. TRÒ CHƠI 4: TRÒ CHƠI MATCHING (GHÉP ĐÔI)
// ===========================================
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
        addPoint(selectedWord); // 👉 Cộng điểm khi ghép đúng
        alert("✅ Ghép đúng!");
        el.style.visibility = "hidden";
        document.querySelector(`.match-word[data-word="${selectedWord}"]`).style.visibility = "hidden";
      } else {
        alert("❌ Sai!");
      }
    };
  });
}

// =========================================
// 5. TRÒ CHƠI 5: SPEED QUIZ (ĐUA THỜI GIAN)
// =========================================
function startSpeedQuiz() {
  const validWords = words.filter(item => item.word && item.meaning);
  let scoreLocal = 0, index = 0, timer;

  const container = document.getElementById("game");
  container.innerHTML = "<h2>Speed Quiz</h2><div id='quizArea'></div>";

  function nextQuestion() {
    if (index >= 5 || index >= validWords.length) {
      alert("Kết thúc! Điểm số: " + scoreLocal);
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
        scoreLocal++;
        addPoint(item.word); // 👉 Cộng điểm hệ thống
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

// =========================================
// 6. TRÒ CHƠI 6: HANGMAN (ĐOÁN TỪ)
// =========================================
function startHangman() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) return;
  const item = validWords[Math.floor(Math.random() * validWords.length)];
  
  const target = item.meaning;
  let hidden = target.split("").map(c => c === " " ? " " : "_").join("");
  let lives = 6;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Hangman</h2>
    <p>Gợi ý: <b>${item.word}</b></p>
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
      addPoint(item.word); // 👉 Cộng điểm khi thắng
      alert("✅ Bạn thắng! Đáp án đúng là: " + target);
      if (typeof speakText === 'function') speakText(item.word);
    } else if (lives <= 0) {
      alert("❌ Thua! Đáp án đúng là: " + target);
    }

    letterInput.value = "";
    letterInput.focus();
  };
}

// =====================================
// 7. TRÒ CHƠI 7: MEMORY CARDS (LẬT THẺ)
// =====================================
function startMemoryCards() {
  const validWords = words.filter(item => item.word && item.meaning).slice(0, 4);
  const pairs = validWords.flatMap(item => [
    {text: item.word, pair: item.word},
    {text: item.meaning, pair: item.word}
  ]).sort(() => 0.5 - Math.random());

  const container = document.getElementById("game");
  container.innerHTML = "<h2>Memory Cards</h2>";
  pairs.forEach((p) => {
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
        addPoint(flipped[0].dataset.pair); // 👉 Cộng điểm khi lật khớp cặp
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

// ============================================
// 8. TRÒ CHƠI 8: LISTENING QUIZ (NGHE VÀ ĐOÁN)
// ============================================
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
       addPoint(item.word); // 👉 Cộng điểm khi đúng
       alert("✅ Chính xác!\nCâu hỏi: " + item.word + "\nĐáp án: " + item.meaning);
    } else {
       alert("❌ Sai!\nCâu hỏi: " + item.word + "\nĐáp án đúng: " + item.meaning);
    }
  };
}

// =================================================================
// 9. TRÒ CHƠI 9: SYNONYM CHALLENGE (ĐỒNG NGHĨA)
// =================================================================
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
        addPoint(item.word); // 👉 Cộng điểm khi đúng

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
            <p style="margin:5px 0;">Câu hỏi: <b style="font-size:2.5em;">${item.word}</b></p>
            <p style="margin:5px 0;">Đáp án: <b style="font-size:2.5em;color:orange;">${item.meaning}</b></p>
          </div>
        `;
        showAlert(content);

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
            <p style="margin:5px 0;">Bạn chọn: <b style="font-size:2.5em>${opt}</b></p>
            <p style="margin:5px 0;font-size:2.5em;color:orange;">(Hãy thử chọn lại đáp án khác nhé!)</p>
          </div>
        `;
        showAlert(content);
        speakText(opt);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

// ===============================================
// 10. TRÒ CHƠI 10: SPELLING BEE (ĐÁNH VẦN)
// ===============================================
function startSpellingBee() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) return;
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Spelling Bee</h2>
    <p>Gõ lại chính xác đáp án</p>
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
      addPoint(item.word); // 👉 Cộng điểm khi đúng
      result.textContent = "✅ Chính xác! Đáp án: " + item.meaning;
      result.style.color = "green";
      speakText(item.meaning);
    } else {
      result.textContent = "❌ Sai! Đáp án đúng là: " + item.meaning;
      result.style.color = "red";
    }
  };
}

// ================================================================
// 11. TRÒ CHƠI 11: ANTONYM BATTLE (TRÁI NGHĨA / ĐỐ VUI)
// ================================================================
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
        addPoint(item.word); // 👉 Cộng điểm khi đúng

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác!</p>
            <p style="margin:5px 0;">Câu hỏi: <b style="font-size:2.5em;">${item.word}</b></p>
            <p style="margin:5px 0;">Đáp án: <b style="font-size:2.5em;color:green;">${item.meaning}</b></p>
          </div>
        `;
        showAlert(content);

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
            <p style="margin:5px 0;">Bạn chọn: <b style="font-size:2.5em>${opt}</b></p>
            <p style="margin:5px 0;font-size:2.5em;color:orange;">(Hãy thử lại nhé!)</p>
          </div>
        `;
        showAlert(content);
        speakText(opt);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

// ========================================================================
// 12. TRÒ CHƠI 12: QUICK TRANSLATION RACE (ĐUA DỊCH NHANH / TRẢ LỜI NHANH)
// ========================================================================
function startQuickTranslationRace() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) {
    alert("⚠️ Không có dữ liệu hợp lệ trong file JSON!");
    return;
  }

  let localScore = 0; // Biến đếm riêng cho phiên chơi này (nếu cần hiển thị tổng kết phụ)
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
      alert("🏁 Kết thúc cuộc đua!\nSố câu đúng trong phiên: " + localScore + "/10");
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
        localScore++;
        addPoint(item.word); // 👉 Gọi hàm tích điểm hệ thống (chống cộng dồn nếu trùng câu)
        alert("✅ Chính xác!\nĐáp án: " + item.meaning);
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

// ==============================================================
// 13. TRÒ CHƠI 13: QUICK MULTIPLE CHOICE 2 (TRẮC NGHIỆM 2 CHIỀU)
// ==============================================================
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
        addPoint(item.word); // 👉 Gọi hàm tích điểm hệ thống (tự động kiểm tra tránh cộng dồn lặp)
        alert("✅ Chính xác!\nĐáp án: " + correctAnswer);
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
