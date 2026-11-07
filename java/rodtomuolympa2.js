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

// =====================================
// A. BIẾN TOÀN CỤC & QUẢN LÝ GIỌNG ĐỌC
// =====================================

// Hàm hỗ trợ chọn giọng nữ phù hợp với ngôn ngữ (vi-VN hoặc en-US)
function getFemaleVoice(langCode) {
  const voices = speechSynthesis.getVoices();
  const langVoices = voices.filter(v => v.lang.toLowerCase().includes(langCode.toLowerCase()));
  
  let voice = langVoices.find(v => 
    v.name.toLowerCase().includes('female') || 
    v.name.toLowerCase().includes('zira') || 
    v.name.toLowerCase().includes('hoai') ||
    v.name.toLowerCase().includes('google')
  );
  
  return voice || langVoices[0] || null;
}

// ===========================================
// B. HỆ THỐNG PHÁT ÂM CHUNG (QUEUE & REPEAT)
// ===========================================

// Hàm phát âm tổng quát: Tự nhận diện tiếng Việt hay tiếng Anh để phát âm giọng nữ
function speakText(text) {
  if (!text) return;
  speechSynthesis.cancel();
  
  const utter = new SpeechSynthesisUtterance(text);
  
  const isVietnamese = /[àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]/i.test(text);
  const langCode = isVietnamese ? "vi" : "en";
  
  utter.lang = isVietnamese ? "vi-VN" : "en-US";
  
  const voice = getFemaleVoice(langCode);
  if (voice) {
    utter.voice = voice;
  }
  
  speechSynthesis.speak(utter);
}

// Đảm bảo load trước danh sách giọng đọc của trình duyệt
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => getFemaleVoice('en');
}

// =============================================
// C. CÁC HÀM HỖ TRỢ HIỂN THỊ ALERT & GIAO DIỆN
// =============================================

// Quản lý hiển thị messageBox
let currentItem = null;

function showMessage(item) {
  currentItem = item;
  const box = document.getElementById("messageBox");
  if (!box) return;
  
  box.innerHTML = `
    <p>Từ: <b><span style="font-size:2.5em;">${item.word}</span></b></p>
    <p>Nghĩa từ: <b><span style="font-size:2.5em;color:orange">${item.meaning}</span></b></p>
    <br>
    <button2 onclick="repeatUtter()">Nói lại</button2>
    <button2 onclick="closeMessage()">Đóng</button2>
  `;
  
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.style.display = "block";
  box.style.display = "block";
}

function closeMessage() {
  const overlay = document.getElementById("overlay");
  if (overlay) overlay.style.display = "none";
  
  const box = document.getElementById("messageBox");
  if (box) box.style.display = "none";
}

function repeatUtter() {
  if (currentItem && currentItem.word) {
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
      <input type="text" placeholder="Nghĩa tiếng Việt ?">
      <button2>Check</button2>
    `;
    const input = card.querySelector("input");
    const btn = card.querySelector("button2");

    btn.onclick = () => {
      // Chuẩn hóa chuỗi người dùng nhập và đáp án sang chữ thường để so sánh không phân biệt hoa/thường
      const userAns = input.value.trim().toLowerCase();
      const correctAns = item.meaning.trim().toLowerCase();

      if (userAns === correctAns) {
        showMessage(item);
        if (typeof addPoint === 'function') addPoint(item.word);
        speakText(item.word);
      } else {
        alert("❌ Sai. Đáp án: " + item.meaning);
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
      ${options.map(opt => `<button class="option">${opt}</button>`).join("")}
    `;

    card.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        if (btn.textContent === item.meaning) {
          showMessage(item);
          if (typeof addPoint === 'function') addPoint(item.word);
          speakText(item.word);
        } else {
          alert("❌ Sai. Cần phải chọn lại từ khác !");
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
    card.innerHTML = `<p><b>${item.word}</b></p><p class="hidden">${item.meaning}</p>`;
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

// =========================================
// 5. TRÒ CHƠI 5: SPEED QUIZ (ĐUA THỜI GIAN)
// =========================================
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
      <p><b>${item.word}</b></p>
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
        showMessage(item);
        if (typeof addPoint === 'function') addPoint(item.word);
        speakText(item.word);
      } else {
        alert("❌ Sai. Đáp án: " + item.meaning);
      }
      index++;
      nextQuestion();
    };
  }
  nextQuestion();
}

// =========================================
// 6. TRÒ CHƠI 6: HANGMAN (ĐOÁN TỪ / ĐÁP ÁN)
// =========================================
function startHangman() {
  const validWords = words.filter(item => item.word && item.meaning);
  const item = validWords[Math.floor(Math.random() * validWords.length)];
  let hidden = "_".repeat(item.word.length);
  let lives = 6;

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Hangman</h2>
                         <p>Nghĩa: ${item.meaning}</p>
                         <p id="hidden">${hidden}</p>
                         <p id="lives">Lives: ${lives}</p>
                         <input id="letter" class="text-area2" maxlength="1">
                         <button2 id="guess">Guess</button2>`;

  document.getElementById("guess").onclick = () => {
    const letterInput = document.getElementById("letter");
    const letter = letterInput.value.toLowerCase();
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

    if (hidden === item.word) {
      showMessage(item);
    }
    if (lives <= 0) {
      alert("❌ Thua! Từ đúng là: " + item.word);
    }

    letterInput.value = "";
  };
}

// Trò chơi Memory Cards (Lật thẻ)
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

// ============================================
// 7. TRÒ CHƠI 7: LISTENING QUIZ (NGHE VÀ ĐOÁN)
// ============================================
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
    speakText(item.word);
  };

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    if (ans === item.meaning) {
       showMessage(item);
       if (typeof addPoint === 'function') addPoint(item.word);
     } else {
       alert("❌ Sai.\nTừ: " + item.word + "\nĐáp án đúng: " + item.meaning);
     }
  };
}

// Trò chơi Word Scramble (Xếp chữ)
function startWordScramble() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) return;
  const item = validWords[Math.floor(Math.random() * validWords.length)];
  const scrambled = item.word.split("").sort(() => 0.5 - Math.random()).join("");

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Word Scramble</h2><p>${scrambled}</p><input id="ans" class="text-area2"><button2 id="check">Check</button2>`;

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    if (ans.toLowerCase() === item.word.toLowerCase()) {
      showMessage(item);
      if (typeof addPoint === 'function') addPoint(item.word);
    } else {
      alert("❌ Sai. Đáp án: " + item.word);
    }
  };
}

// ===============================================
// 9. TRÒ CHƠI 9: SPELLING BEE (ĐÁNH VẦN / GÕ LẠI)
// ===============================================
function startSpellingBee() {
  const validWords = words.filter(item => item.word && item.meaning);
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Spelling Bee</h2>
    <p>Nghe phát âm và gõ lại chính xác từ</p>
    <button2 id="play">🔊 Nghe từ</button2>
    <input id="ans" class="text-area2" placeholder="Nhập lại từ">
    <button2 id="check">Check</button2>
    <p id="result"></p>
  `;

  document.getElementById("play").onclick = () => {
    speakText(item.word);
  };

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    const result = document.getElementById("result");

    if (ans.toLowerCase() === item.word.toLowerCase()) {
      showMessage(item);
      result.style.color = "green";
    } else {
      result.textContent = "❌ Sai. Đáp án đúng: " + item.word + " → Nghĩa: " + item.meaning;
      result.style.color = "red";
    }
  };
}

// ================================================================
// 10. TRÒ CHƠI 10: ANTONYM BATTLE (THAY THẾ BẰNG THỬ THÁCH ĐỐ VUI)
// ================================================================
function startAntonymBattle() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ trong file JSON để chơi!");
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
    <h2>Word Meaning Match</h2>
    <p>Chọn nghĩa đúng cho từ: <b>${item.word}</b></p>
    <div id="options"></div>
  `;

  const optionsDiv = document.getElementById("options");
  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === item.meaning) {
        showMessage(item); // 👉 Hiện messageBox khi đúng
        if (typeof addPoint === 'function') addPoint(item.word);
        speakText(item.word);
      } else {
        alert("❌ Sai!\nTừ: " + item.word + "\nNghĩa đúng: " + item.meaning);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

// ========================================================================
// 11. TRÒ CHƠI 11: QUICK TRANSLATION RACE (ĐUA DỊCH NHANH / TRẢ LỜI NHANH)
// ========================================================================
function startQuickTranslationRace() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length === 0) {
    alert("⚠️ Không có dữ liệu hợp lệ trong file JSON!");
    return;
  }

  let score = 0;
  let index = 0;
  let timer;
  let timeLeft = 5;

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Quick Translation Race</h2>
    <div id="quizArea"></div>
    <p id="progress"></p>
  `;

  function nextQuestion() {
    if (index >= 10) {
      alert("🏁 Kết thúc cuộc đua!\nĐiểm số của bạn: " + score + "/10");
      return;
    }

    const item = validWords[Math.floor(Math.random() * validWords.length)];
    const quizArea = document.getElementById("quizArea");
    quizArea.innerHTML = `
      <p><b>${item.word}</b></p>
      <input type="text" id="answer" class="text-area2" placeholder="Nghĩa tiếng Việt">
      <button2 id="checkBtn">Check</button2>
      <p id="timer">⏳ 20</p>
    `;
    document.getElementById("progress").textContent = `Câu ${index+1}/10`;

    timeLeft = 20;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = "⏳ " + timeLeft;
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
        showMessage(item); // 👉 Hiện messageBox khi đúng
        if (typeof addPoint === 'function') addPoint(item.word);
        speakText(item.word);
      } else {
        alert("❌ Sai!\nTừ: " + item.word + "\nĐáp án đúng: " + item.meaning);
      }
      index++;
      nextQuestion();
    };
  }

  nextQuestion();
}

// ==============================================================
// 12. TRÒ CHƠI 12: QUICK MULTIPLE CHOICE 2 (TRẮC NGHIỆM 2 CHIỀU)
// ==============================================================
function startQuizMultipleChoice2() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ trong file JSON để chơi!");
    return;
  }

  const item = validWords[Math.floor(Math.random() * validWords.length)];
  const askEnglish = Math.random() < 0.5;

  let questionText, correctAnswer, wrongOptions;

  if (askEnglish) {
    questionText = item.word;
    correctAnswer = item.meaning;
    wrongOptions = validWords
      .filter(w => w.meaning !== item.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.meaning);
  } else {
    questionText = item.meaning;
    correctAnswer = item.word;
    wrongOptions = validWords
      .filter(w => w.word !== item.word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.word);
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
        showMessage(item); // 👉 Hiện messageBox khi đúng
        if (typeof addPoint === 'function') addPoint(item.word);
      } else {
        alert("❌ Sai!\nCâu hỏi: " + questionText + "\nĐáp án đúng: " + correctAnswer);
      }

      // Phát âm tự động từ (word) bằng giọng nữ
      speakText(item.word);

      if (opt === correctAnswer) {
        startQuizMultipleChoice2();
      }
    };
    optionsDiv.appendChild(btn);
  });
}
