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

// Trò chơi Quiz (Nghĩa tiếng Việt)
let currentItem = null;   // lưu item hiện tại
let currentUtter = null;  // lưu câu đang phát âm
let voices = [];

// Lấy danh sách giọng khi trình duyệt load
speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
};

// Hàm chọn giọng nữ theo ngôn ngữ
function getFemaleVoice(langCode) {
  return voices.find(v => v.lang === langCode && (
    v.name.toLowerCase().includes("female") ||
    v.name.includes("女") // một số hệ thống ghi tiếng Trung là 女声
  )) || voices.find(v => v.lang === langCode); // fallback nếu không có giọng nữ
}

function showCustomAlert(item) {
  currentItem = item;
  const content = `
    <div style="text-align:center;">
      <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác! 正确 Zhèngquè, Châng-chuyê, Châng-chuyè</p>
      <p style="margin:5px 0;">
        Từ: <b style="font-size:3.9em;">${item.word}</b>
        <b style="font-size:2.1em;color:cyan;">(${item.pronounce || "chưa có pronounce"})</b>
      </p>
      <p style="margin:5px 0;">Nghĩa từ: ${item.meaning}</p>
      <p style="margin:5px 0;">
        Câu ví dụ: <b style="font-size:3em;">${item.example}</b><br>
        <b style="font-size:2.1em;color:cyan;">(${item.examplePronounce || "chưa có pronounce"})</b>
      </p>
      <p style="margin:5px 0;">Dịch câu ví dụ: ${item.translation || "(chưa có dịch)"}</p>
    </div>
  `;
  showAlert(content);
}

function showAlert(contentHtml) {
  document.getElementById("alertContent").innerHTML = contentHtml;
  document.getElementById("overlay").style.display = "block"; 
  document.getElementById("alertBox").style.display = "block"; 
}

function closeAlert() {
  document.getElementById("overlay").style.display = "none"; 
  document.getElementById("alertBox").style.display = "none"; 
}

// Hàm Nói lại: phát âm lại từ, từ đồng nghĩa hoặc câu ví dụ dựa trên ngữ cảnh
function repeatUtter() {
  if (!currentItem) return;

  speechSynthesis.cancel();

  // Nếu là trò chơi Synonym Challenge có phân biệt đúng/sai
  if (currentItem.resultType === "correct") {
    speakResult(currentItem);
  } else if (currentItem.resultType === "wrong" && currentItem.wrongChoice) {
    speakText(currentItem.wrongChoice);
  } else {
    // Mặc định cho các trò chơi khác (Quiz, Trắc nghiệm, Điền từ...): Phát âm Từ -> Sau đó phát âm Câu ví dụ
    if (currentItem.word) {
      const utterWord = new SpeechSynthesisUtterance(currentItem.word);
      utterWord.lang = "zh-CN";
      utterWord.voice = getFemaleVoice("zh-CN");
      
      utterWord.onend = () => {
        if (currentItem.example) {
          const utterExample = new SpeechSynthesisUtterance(currentItem.example);
          utterExample.lang = "zh-CN";
          utterExample.voice = getFemaleVoice("zh-CN");
          speechSynthesis.speak(utterExample);
        }
      };
      
      speechSynthesis.speak(utterWord);
    }
  }
}

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
      <p><b>${item.word}</b> (${item.type || ""})</p>
      <p><i>${item.example || ""}</i></p>
      <input type="text" class="quiz-input" placeholder="Nghĩa tiếng Việt ?">
      <button2>Check</button2>
    `;
    const input = card.querySelector("input");
    const btn = card.querySelector("button2");

    btn.onclick = () => {
      if (input.value.trim() === item.meaning) {
        showCustomAlert(item);
        addPoint(item.word);

        speechSynthesis.cancel();
        currentUtter = null;

        // Phát âm từ trước
        if (item.word) {
          const utterWord = new SpeechSynthesisUtterance(item.word);
          utterWord.lang = "zh-CN";
          utterWord.voice = getFemaleVoice("zh-CN");
          speechSynthesis.speak(utterWord);

          utterWord.onend = () => {
            if (item.example) {
              currentUtter = new SpeechSynthesisUtterance(item.example);
              currentUtter.lang = "zh-CN";
              currentUtter.voice = getFemaleVoice("zh-CN");
              speechSynthesis.speak(currentUtter);
            }
          };
        }

      } else {
        alert("❌ Sai. Đáp án: " + item.meaning);
      }
    };

    container.appendChild(card);
  });
}

// Trò chơi Quiz Multiple Choice (Trắc nghiệm)
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
      ${options.map(opt => `<button2 class="option">${opt}</button2>`).join("")}
    `;

    card.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        if (btn.textContent === item.meaning) {
          // ✅ Nếu đúng: Hiện AlertBox chi tiết
          const content = `
            <div style="text-align:center;">
              <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác! 正确 Zhèngquè, Châng-chuyê, Châng-chuyè</p>
              <p style="margin:5px 0;">
                Từ: <b style="font-size:3.9em;">${item.word}</b>
                <b style="font-size:2.1em;color:cyan;">(${item.pronounce || "chưa có pronounce"})</b>
              </p>
              <p style="margin:5px 0;">Nghĩa từ: ${item.meaning}</p>
              <p style="margin:5px 0;">
                Câu ví dụ: <b style="font-size:3em;">${item.example || "(chưa có ví dụ)"}</b><br>
                <b style="font-size:2.1em;color:cyan;">(${item.examplePronounce || "chưa có pronounce"})</b>
              </p>
              <p style="margin:5px 0;">Dịch câu ví dụ: ${item.translation || "(chưa có dịch)"}</p>
            </div>
          `;
          showAlert(content);
          addPoint(item.word);

          // Phát âm chuẩn (word + example qua hàng đợi)
          speakResult(item);
          currentItem = { ...item, resultType: "correct" };

        } else {
          // ❌ Nếu sai: Hiển thị AlertBox báo sai kèm theo Từ tiếng Trung và Phiên âm của nghĩa vừa chọn
          const wrongMeaning = btn.textContent; // Nghĩa tiếng Việt mà người chơi vừa click nhầm
          
          // Tìm item trong danh sách có nghĩa trùng với nghĩa người chơi chọn để lấy Từ tiếng Trung và Phiên âm
          const wrongItem = validWords.find(w => w.meaning === wrongMeaning);
          const wrongWord = wrongItem ? wrongItem.word : "";
          const wrongPronounce = wrongItem && wrongItem.pronounce ? wrongItem.pronounce : "chưa có pronounce";

          const content = `
            <div style="text-align:center;">
              <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai</p>
              <p style="margin:5px 0;">
                Bạn chọn nghĩa: <b style="font-size:2.5em;">${wrongMeaning}</b>
              </p>
              <p style="margin:5px 0;">
                Từ tương ứng: <b style="font-size:3.5em;">${wrongWord}</b>
                <b style="font-size:2em;color:cyan;">(${wrongPronounce})</b>
              </p>
              <p style="margin:5px 0;color:gray;font-size:1.7em;color:orange;">(Hãy thử chọn lại đáp án khác nhé!)</p>
            </div>
          `;
          showAlert(content);

          // Phát âm từ tiếng Trung mà người chơi vừa chọn nhầm
          speakText(wrongWord);
          
          // Lưu trạng thái để nút "Nói lại" có thể phát âm lại đúng từ này
          currentItem = { ...item, resultType: "wrong", wrongChoice: wrongWord };
        }
      };
    });

    container.appendChild(card);
  });
}

// Trò chơi Quiz Fill Blank (Điền chỗ trống)
function startQuizFillBlank() {
  const validWords = words.filter(item => item.word && item.example);
  const shuffled = validWords.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 10);

  const container = document.getElementById("game");
  container.innerHTML = "";

  selected.forEach(item => {
    const sentenceWithBlank = item.example.replace(item.word, "_____");
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <p class="sentence">${sentenceWithBlank}</p>
      <input type="text" class="quiz-input" placeholder="Điền từ tiếng Trung">
      <button2>Check</button2>
    `;
    const input = card.querySelector("input");
    const btn = card.querySelector("button2");
    const sentenceEl = card.querySelector(".sentence");

    btn.onclick = () => {
      if (input.value.trim().toLowerCase() === item.word.toLowerCase()) {
        // ✅ Đúng thì hiển thị popup bằng showCustomAlert
        showCustomAlert(item);
        addPoint(item.word); // cộng điểm ngay khi đúng
        sentenceEl.textContent = item.example;

        // Phát âm cả câu ví dụ
        const utterExample = new SpeechSynthesisUtterance(item.example);
        utterExample.lang = "zh-CN";
        speechSynthesis.speak(utterExample);
      } else {
        // ❌ Sai thì hiển thị popup bằng showAlert
        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;font-size:2em;color:red;">❌ Sai</p>
            <p style="margin:5px 0;">Đáp án đúng: <b>${item.word}</b></p>
          </div>
        `;
        showAlert(content);

        // Phát âm từ đúng
        if (item.word && /^[a-zA-Z\s]+$/.test(item.word)) {
          const utterWord = new SpeechSynthesisUtterance(item.word);
          utterWord.lang = "zh-CN";
          speechSynthesis.speak(utterWord);
        }

        // Phát âm câu ví dụ
        if (item.example) {
          const utterExample = new SpeechSynthesisUtterance(item.example);
          utterExample.lang = "zh-CN";
          speechSynthesis.speak(utterExample);
        }
      }
    };

    container.appendChild(card);
  });
}

// Trò chơi Flashcards (Flashcards)
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
      <p style="color:cyan;font-size:1.2em;">(${item.pronounce || "chưa có phiên âm"})</p>
      <p class="hidden">${item.meaning}</p>
    `;
    const hidden = card.querySelector(".hidden");
    hidden.style.display = "none";

    card.onclick = () => {
      // Hiện/ẩn nghĩa
      hidden.style.display = hidden.style.display === "none" ? "block" : "none";

      // Phát âm từ (tiếng Trung)
      if (item.word) {
        const utter = new SpeechSynthesisUtterance(item.word);
        utter.lang = "zh-CN"; // phát âm tiếng Trung
        speechSynthesis.speak(utter);
      }
    };

    container.appendChild(card);
  });
}

// Trò chơi Matching (Ghép đôi)
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

// Trò chơi Speed Quiz (Đua thời gia)
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
        addPoint(item.word); // 👉 cộng điểm ngay khi đúng, dùng từ tiếng Trung làm ID
      } else {
        alert("❌ Sai. Đáp án: " + item.meaning);
      }
      index++;
      nextQuestion();
    };
  }
  nextQuestion();
}

// Trò chơi Hangman (Đoán chữ)
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
      alert("✅ Bạn thắng!");
    }
    if (lives <= 0) {
      alert("❌ Thua! Từ đúng là: " + item.word);
    }

    // Xóa chữ trong ô nhập sau khi check
    letterInput.value = "";
  };
}

// Trò chơi Sentence Builder (Xây dựng câu)
function startSentenceBuilder() {
  const validWords = words.filter(item => item.word && item.example && item.meaning);
  if (validWords.length === 0) {
    alert("⚠️ Không có đủ dữ liệu hợp lệ trong file JSON!");
    return;
  }
  
  const item = validWords[Math.floor(Math.random() * validWords.length)];
  
  // Tạo câu có chỗ trống
  const sentenceWithBlank = item.example.replace(item.word, "_____");

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Sentence Builder</h2><p id="sentence" style="font-size:1.5em;margin-bottom:15px;">${sentenceWithBlank}</p>`;

  // Tạo danh sách lựa chọn (1 đúng + vài sai)
  const options = [item.word, ...validWords.filter(w => w.word !== item.word).slice(0, 3).map(w => w.word)].sort(() => 0.5 - Math.random());

  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      const sentenceEl = document.getElementById("sentence");
      
      if (opt === item.word) {
        // ✅ Khi chọn đúng: Điền từ vào câu và hiện AlertBox chi tiết
        sentenceEl.textContent = item.example;

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác! 正确 Zhèngquè, Châng-chuyê, Châng-chuyè</p>
            <p style="margin:5px 0;">
              Từ: <b style="font-size:3.9em;">${item.word}</b>
              <b style="font-size:2.1em;color:cyan;">(${item.pronounce || "chưa có pronounce"})</b>
            </p>
            <p style="margin:5px 0;">Nghĩa từ: ${item.meaning}</p>
            <p style="margin:5px 0;">
              Câu ví dụ: <b style="font-size:3em;">${item.example || "(chưa có ví dụ)"}</b><br>
              <b style="font-size:2.1em;color:cyan;">(${item.examplePronounce || "chưa có pronounce"})</b>
            </p>
            <p style="margin:5px 0;">Dịch câu ví dụ: ${item.translation || "(chưa có dịch)"}</p>
          </div>
        `;
        showAlert(content);
        addPoint(item.word); // 👉 cộng điểm ngay khi đúng

        // Phát âm chuẩn (word + example qua hàng đợi)
        speakResult(item);
        currentItem = { ...item, resultType: "correct" };

      } else {
        // ❌ Khi chọn sai: Hiển thị AlertBox báo sai và thông tin chi tiết của từ bị bấm nhầm
        const wrongItem = validWords.find(w => w.word === opt);
        const wrongMeaning = wrongItem ? wrongItem.meaning : "(không có nghĩa trong dữ liệu)";
        const wrongPronounce = wrongItem && wrongItem.pronounce ? wrongItem.pronounce : "chưa có pronounce";

        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai</p>
            <p style="margin:5px 0;">
              Bạn chọn từ: <b style="font-size:3.5em;">${opt}</b>
              <b style="font-size:2em;color:cyan;">(${wrongPronounce})</b>
            </p>
            <p style="margin:5px 0;">Nghĩa của từ này: <b style="font-size:1.5em;">${wrongMeaning}</b></p>
            <p style="margin:5px 0;font-size:1.2em;color:orange;">(Hãy thử chọn lại đáp án khác nhé!)</p>
          </div>
        `;
        showAlert(content);

        // Phát âm từ tiếng Trung mà người chơi vừa chọn nhầm
        speakText(opt);
        
        // Lưu trạng thái để nút "Nói lại" đọc đúng từ sai đó
        currentItem = { ...item, resultType: "wrong", wrongChoice: opt };
      }
    };
    container.appendChild(btn);
  });
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

// Trò chơi Listening Quiz (Nghe và đoán)
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
    utter.lang = "zh-CN";
    speechSynthesis.speak(utter);
  };

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    if (ans === item.meaning) {
       alert("✅ Chính xác!\nTừ: " + item.word + "\nNghĩa: " + item.meaning);
       addPoint(item.word); // 👉 cộng điểm ngay khi đúng, dùng từ tiếng Trung làm ID
     } else {
       alert("❌ Sai.\nTừ: " + item.word + "\nĐáp án đúng: " + item.meaning);
     }
    };
}

// Trò chơi Category Sort (Phân loại từ)
function startCategorySort() {
  const validWords = words.filter(item => item.word && item.type && item.meaning);
  const selected = validWords.sort(() => 0.5 - Math.random()).slice(0, 6);

  let wrongCount = 0; // đếm số lần sai

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Category Sort</h2>
    <p>Kéo thả từ vào đúng nhóm (Noun, Verb, Adjective)</p>
    <div style="display:flex;gap:20px;justify-content:center;">
      <div id="wordList" style="border:1px solid #ccc;padding:10px;width:200px;">
        <h3>Từ vựng</h3>
      </div>
      <div id="nounBox" class="dropBox"><h3>Noun</h3></div>
      <div id="verbBox" class="dropBox"><h3>Verb</h3></div>
      <div id="adjBox" class="dropBox"><h3>Adjective</h3></div>
    </div>
  `;

  // Style cho dropBox
  document.querySelectorAll(".dropBox").forEach(box => {
    box.style.border = "2px dashed #666";
    box.style.padding = "10px";
    box.style.width = "200px";
    box.style.minHeight = "150px";
  });

  // Thêm từ vào danh sách
  selected.forEach(item => {
    const wordEl = document.createElement("div");
    wordEl.textContent = item.word;
    wordEl.draggable = true;
    wordEl.style.border = "1px solid #333";
    wordEl.style.margin = "5px";
    wordEl.style.padding = "5px";
    wordEl.dataset.type = item.type.toLowerCase();
    wordEl.dataset.meaning = item.meaning;

    wordEl.ondragstart = e => {
      e.dataTransfer.setData("text/plain", JSON.stringify({
        word: item.word,
        type: item.type.toLowerCase(),
        meaning: item.meaning
      }));
    };

    document.getElementById("wordList").appendChild(wordEl);
  });

  // Hàm xử lý drop
  function setupDrop(boxId, type) {
    const box = document.getElementById(boxId);
    box.ondragover = e => e.preventDefault();
    box.ondrop = e => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));

      // Luôn thêm từ vào box
      const el = document.createElement("div");
      el.textContent = `${data.word} → ${data.meaning}`;
      box.appendChild(el);

      if (data.type === type) {
        el.style.color = "green";
        alert("✅ Đúng! " + data.word + " là từ duy nhất cần tìm kiếm");

        // Phát âm từ đúng
        const utter = new SpeechSynthesisUtterance(data.word);
        utter.lang = "zh-CN";
        speechSynthesis.speak(utter);

        // Sau khi phát âm xong thì mở câu tiếp theo
        utter.onend = () => {
          startCategorySort();
        };
      } else {
        el.style.color = "red";
        wrongCount++;
        alert("❌ Sai! " + data.word + " (" + data.meaning + ") không phải là từ duy nhất cần tìm trong danh sách");

        // Nếu sai 18 lần thì tự động chuyển sang câu tiếp theo
        if (wrongCount >= 18) {
          alert("⚠️ Bạn đã sai 18 lần, chuyển sang câu tiếp theo!");
          startCategorySort();
        }
      }
    };
  }

  setupDrop("nounBox", "noun");
  setupDrop("verbBox", "verb");
  setupDrop("adjBox", "adj");
}

// Trò chơi Synonym Challenge (Thử thách từ đồng nghĩa)
function startSynonymChallenge() {
  const validWords = words.filter(item => item.word && item.synonym && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ có synonym để chơi!");
    return;
  }

  const item = validWords[Math.floor(Math.random() * validWords.length)];

  const wrongOptions = validWords
    .filter(w => w.word !== item.word && w.word !== item.synonym)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.word);

  const options = [item.synonym, ...wrongOptions].sort(() => 0.5 - Math.random());

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Synonym Challenge</h2><p>Từ: <b>${item.word}</b></p>`;

  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === item.synonym) {
        // ✅ Đúng
        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:lime;font-size:1.5em;">✅ Chính xác! 正确 Zhèngquè, Châng-chuyê, Châng-chuyè</p>
            <p style="margin:5px 0;">
              Từ: <b style="font-size:3.9em;">${item.word}</b>
              <b style="font-size:2em;color:cyan;">(${item.pronounce || "chưa có pronounce"})</b>
            </p>
            <p style="margin:5px 0;">Nghĩa từ: ${item.meaning}</p>
            <p style="margin:5px 0;">
              Đồng nghĩa: <b style="font-size:3.9em;">${item.synonym}</b>
            </p>
            <p style="margin:5px 0;color:cyan;">
              <b style="font-size:2.1em;">(${item.synonymPronounce || "chưa có pronounce"})</b>
            </p>
            <p style="margin:5px 0;">Nghĩa từ đồng nghĩa: ${item.synonymMeaning || "(chưa có nghĩa)"}</p>
            <p style="margin:5px 0;">
              Câu ví dụ: <b style="font-size:3em;">${item.example}</b><br>
              <b style="font-size:2.1em;color:cyan;">(${item.examplePronounce || "chưa có pronounce"})</b>
            </p>
            <p style="margin:5px 0;">Dịch câu ví dụ: ${item.translation || "(chưa có dịch)"}</p>
          </div>
        `;
        showAlert(content);
        addPoint(item.word);

        // Phát âm chuẩn (word + synonym + example)
        speakResult(item);
        currentItem = { ...item, resultType: "correct" };
      } else {
        // ❌ Sai
        const wrongItem = validWords.find(w => w.word === opt);
        const meaning = wrongItem ? wrongItem.meaning : "(không có nghĩa trong dữ liệu)";
        const content = `
          <div style="text-align:center;">
            <p style="margin:5px 0;color:red;font-size:2em;">❌ Sai</p>
            <p style="margin:5px 0;">Bạn chọn: <b style="font-size:3em;">${opt}</b> → ${meaning}</p>
          </div>
        `;
        showAlert(content);

        // Phát âm từ sai mà người chơi chọn
        speakText(opt);
        currentItem = { ...item, resultType: "wrong", wrongChoice: opt };
      }
    };
    container.appendChild(btn);
  });
}

// Hàm phát âm một đoạn text
function speakText(text) {
  if (text && /^[\u4e00-\u9fffA-Za-z\s]+$/.test(text)) {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";
    speechSynthesis.speak(utter);
  }
}

// Hàm phát âm word, synonym và example theo thứ tự (dùng hàng đợi để không bị nuốt mất)
function speakResult(item) {
  const queue = [item.word, item.synonym, item.example].filter(Boolean);
  let idx = 0;

  function speakNext() {
    if (idx < queue.length) {
      const utter = new SpeechSynthesisUtterance(queue[idx]);
      utter.lang = "zh-CN";
      utter.onend = () => {
        idx++;
        speakNext();
      };
      speechSynthesis.speak(utter);
    }
  }
  speakNext();
}

// Hàm Nói lại: phát âm lại từ, từ đồng nghĩa hoặc câu ví dụ dựa trên ngữ cảnh
function repeatUtter() {
  if (!currentItem) return;

  speechSynthesis.cancel();

  // Nếu là trò chơi Synonym Challenge có phân biệt đúng/sai
  if (currentItem.resultType === "correct") {
    speakResult(currentItem);
  } else if (currentItem.resultType === "wrong" && currentItem.wrongChoice) {
    speakText(currentItem.wrongChoice);
  } else {
    // Mặc định cho các trò chơi khác (Quiz, Trắc nghiệm, Điền từ...): Phát âm Từ -> Sau đó phát âm Câu ví dụ
    if (currentItem.word) {
      const utterWord = new SpeechSynthesisUtterance(currentItem.word);
      utterWord.lang = "zh-CN";
      utterWord.voice = getFemaleVoice("zh-CN");
      
      utterWord.onend = () => {
        if (currentItem.example) {
          const utterExample = new SpeechSynthesisUtterance(currentItem.example);
          utterExample.lang = "zh-CN";
          utterExample.voice = getFemaleVoice("zh-CN");
          speechSynthesis.speak(utterExample);
        }
      };
      
      speechSynthesis.speak(utterWord);
    }
  }
}

// Trò chơi Word Scramble (Xếp chữ)
function startWordScramble() {
  const item = words[Math.floor(Math.random() * words.length)];
  const scrambled = item.word.split("").sort(() => 0.5 - Math.random()).join("");

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Word Scramble</h2><p>${scrambled}</p><input id="ans" class="text-area2"><button2 id="check">Check</button2>`;

  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    if (ans.toLowerCase() === item.word.toLowerCase()) {
      alert("✅ Chính xác! Từ: " + item.word);
      addPoint(item.word); // 👉 cộng điểm ngay khi đúng, dùng từ tiếng Trung làm ID
    } else {
      alert("❌ Sai. Đáp án: " + item.word);
    }
  };
}

// Trò chơi Spelling Bee (Đánh vần)
function startSpellingBee() {
  const validWords = words.filter(item => item.word && item.meaning);
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  // Quyết định hỏi tiếng Trung hay tiếng Việt
  const askEnglish = Math.random() < 0.5; // 50% hỏi tiếng Trung, 50% hỏi tiếng Việt

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Spelling Bee</h2>
    <p>${askEnglish ? "Nghe phát âm và gõ lại chính xác từ tiếng Trung" : "Gõ lại chính xác nghĩa tiếng Việt"}</p>
    <button2 id="play">🔊 Nghe từ</button2>
    <input id="ans" class="text-area2" placeholder="${askEnglish ? "Nhập từ tiếng Trung" : "Nhập nghĩa tiếng Việt"}">
    <button2 id="check">Check</button2>
    <p id="result"></p>
  `;

  // Phát âm từ (luôn phát âm tiếng Trung)
  document.getElementById("play").onclick = () => {
    const utter = new SpeechSynthesisUtterance(item.word);
    utter.lang = "zh-CN";
    speechSynthesis.speak(utter);
  };

  // Kiểm tra kết quả
  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    const result = document.getElementById("result");

    if (askEnglish) {
      // Người chơi phải gõ lại từ tiếng Trung
      if (ans.toLowerCase() === item.word.toLowerCase()) {
        result.textContent = "✅ Chính xác! Từ: " + item.word + " → Nghĩa: " + item.meaning;
        result.style.color = "green";
      } else {
        result.textContent = "❌ Sai. Đáp án đúng: " + item.word + " → Nghĩa: " + item.meaning;
        result.style.color = "red";
      }
    } else {
      // Người chơi phải gõ lại nghĩa tiếng Việt
      if (ans === item.meaning) {
        result.textContent = "✅ Chính xác! Nghĩa: " + item.meaning + " ← Từ: " + item.word;
        result.style.color = "green";
      } else {
        result.textContent = "❌ Sai. Đáp án đúng: " + item.meaning + " ← Từ: " + item.word;
        result.style.color = "red";
      }
    }
  };
}

// Trò chơi Antonym Battle (Đoán từ trái nghĩa)
function startAntonymBattle() {
  // Lọc dữ liệu có word, meaning, antonym và antonymMeaning
  const validWords = words.filter(item => item.word && item.meaning && item.antonym && item.antonymMeaning);
  if (validWords.length === 0) {
    alert("⚠️ Không có dữ liệu từ trái nghĩa trong file JSON!");
    return;
  }

  // Chọn ngẫu nhiên một từ
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  // Tạo danh sách lựa chọn (1 đúng + 3 sai)
  const wrongOptions = validWords
    .filter(w => w.word !== item.antonym)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.word);

  const options = [item.antonym, ...wrongOptions].sort(() => 0.5 - Math.random());

  // Hiển thị giao diện
  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Antonym Battle</h2>
    <p>Chọn từ trái nghĩa với: <b>${item.word}</b></p>
    <div id="options"></div>
    <p><i>Nghĩa: ${item.meaning}</i></p>
  `;

  const optionsDiv = document.getElementById("options");
  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === item.antonym) {
        alert("✅ Chính xác!\nTừ: " + item.word + "\nTrái nghĩa: " + item.antonym + "\nNghĩa trái nghĩa: " + item.antonymMeaning);
        addPoint(item.word); // 👉 cộng điểm ngay khi đúng, dùng từ tiếng Trung làm ID
      } else {
        alert("❌ Sai!\nTừ: " + item.word + "\nTrái nghĩa đúng: " + item.antonym + "\nNghĩa trái nghĩa: " + item.antonymMeaning);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

// Trò chơi Quick Translation Race (Đua dịch nhanh)
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
      <p><b>${item.word}</b> (${item.type || ""})</p>
      <input type="text" id="answer" class="text-area2" placeholder="Nghĩa tiếng Việt">
      <button2 id="checkBtn">Check</button2>
      <p id="timer">⏳ 20</p>
    `;
    document.getElementById("progress").textContent = `Câu ${index+1}/10`;

    timeLeft = 5;
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
        alert("✅ Chính xác!\nTừ: " + item.word + "\nNghĩa: " + item.meaning);
        addPoint(item.word); // 👉 cộng điểm ngay khi đúng, dùng từ tiếng Trung làm ID
      } else {
        alert("❌ Sai!\nTừ: " + item.word + "\nĐáp án đúng: " + item.meaning);
      }
      index++;
      nextQuestion();
    };
  }

  nextQuestion();
}

// Trò chơi Quiz Multiple Choice 2 (Trắc nghiệm 2)
function startQuizMultipleChoice2() {
  const validWords = words.filter(item => item.word && item.meaning);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ trong file JSON để chơi!");
    return;
  }

  // Chọn ngẫu nhiên một từ làm câu hỏi
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  // Quyết định hiển thị tiếng Trung hay tiếng Việt
  const askEnglish = Math.random() < 0.5; // 50% hỏi tiếng Trung, 50% hỏi tiếng Việt

  let questionText, correctAnswer, wrongOptions;

  if (askEnglish) {
    // Hiển thị từ tiếng Trung, đáp án là nghĩa tiếng Việt
    questionText = item.word;
    correctAnswer = item.meaning;
    wrongOptions = validWords
      .filter(w => w.meaning !== item.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.meaning);
  } else {
    // Hiển thị nghĩa tiếng Việt, đáp án là từ tiếng Trung
    questionText = item.meaning;
    correctAnswer = item.word;
    wrongOptions = validWords
      .filter(w => w.word !== item.word)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.word);
  }

  // Ghép đáp án đúng + sai rồi xáo trộn
  const options = [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random());

  // Hiển thị giao diện
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
        alert("✅ Chính xác!\nCâu hỏi: " + questionText + "\nĐáp án: " + correctAnswer);
        addPoint(item.word); // 👉 cộng điểm ngay khi đúng, dùng từ tiếng Trung làm ID
      } else {
        alert("❌ Sai!\nCâu hỏi: " + questionText + "\nĐáp án đúng: " + correctAnswer);
      }

      // Phát âm tiếng Trung nếu có
      let speakText = null;
      if (askEnglish) {
        speakText = item.word; // câu hỏi là tiếng Trung
      } else {
        speakText = item.word; // đáp án là tiếng Trung
      }
      if (speakText) {
        const utter = new SpeechSynthesisUtterance(speakText);
        utter.lang = "zh-CN";
        speechSynthesis.speak(utter);

        // Sau khi phát âm xong, nếu trả lời đúng thì hiện câu hỏi mới
        utter.onend = () => {
          if (opt === correctAnswer) {
            startQuizMultipleChoice2();
          }
        };
      } else {
        // Nếu không có phát âm, vẫn hiện câu hỏi mới nếu đúng
        if (opt === correctAnswer) {
          startQuizMultipleChoice2();
        }
      }
    };
    optionsDiv.appendChild(btn);
  });
}
