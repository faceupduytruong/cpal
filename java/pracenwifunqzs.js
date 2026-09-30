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

      // Phát âm từ
      if (item.word && /^[a-zA-Z\s]+$/.test(item.word)) {
        const utterWord = new SpeechSynthesisUtterance(item.word);
        utterWord.lang = "en-US";
        speechSynthesis.speak(utterWord);
      }

      // Phát âm câu ví dụ nếu có
      if (item.example) {
        const utterExample = new SpeechSynthesisUtterance(item.example);
        utterExample.lang = "en-US";
        speechSynthesis.speak(utterExample);
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
      ${options.map(opt => `<button class="option">${opt}</button>`).join("")}
    `;

    card.querySelectorAll(".option").forEach(btn => {
      btn.onclick = () => {
        if (btn.textContent === item.meaning) {
          alert("✅ Chính xác!");
        } else {
          alert("❌ Sai. Đáp án: " + item.meaning);
        }

        // Phát âm từ
        if (item.word && /^[a-zA-Z\s]+$/.test(item.word)) {
          const utterWord = new SpeechSynthesisUtterance(item.word);
          utterWord.lang = "en-US";
          speechSynthesis.speak(utterWord);
        }

        // Phát âm câu ví dụ nếu có
        if (item.example) {
          const utterExample = new SpeechSynthesisUtterance(item.example);
          utterExample.lang = "en-US";
          speechSynthesis.speak(utterExample);
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

      // Phát âm từ
      if (item.word && /^[a-zA-Z\s]+$/.test(item.word)) {
        const utterWord = new SpeechSynthesisUtterance(item.word);
        utterWord.lang = "en-US";
        speechSynthesis.speak(utterWord);
      }

      // Phát âm câu ví dụ nếu có
      if (item.example) {
        const utterExample = new SpeechSynthesisUtterance(item.example);
        utterExample.lang = "en-US";
        speechSynthesis.speak(utterExample);
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
    card.innerHTML = `<p><b>${item.word}</b></p><p class="hidden">${item.meaning}</p>`;
    const hidden = card.querySelector(".hidden");
    hidden.style.display = "none";

    card.onclick = () => {
      // Hiện/ẩn nghĩa
      hidden.style.display = hidden.style.display === "none" ? "block" : "none";

      // Phát âm từ nếu là tiếng Anh
      if (item.word && /^[a-zA-Z\s]+$/.test(item.word)) {
        const utter = new SpeechSynthesisUtterance(item.word);
        utter.lang = "en-US";
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
  const validWords = words.filter(item => item.word && item.example);
  const item = validWords[Math.floor(Math.random() * validWords.length)];
  const sentence = item.example.replace(item.word, "_____");

  const container = document.getElementById("game");
  container.innerHTML = `<h2>Sentence Builder</h2><p id="sentence">${sentence}</p>`;

  const options = [item.word, ...validWords.slice(0,3).map(w => w.word)].sort(() => 0.5 - Math.random());
  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.onclick = () => {
      const sentenceEl = document.getElementById("sentence");
      if (opt === item.word) {
        // Điền từ đúng vào câu
        sentenceEl.textContent = item.example;

        // Thông báo kết quả
        alert("✅ Chính xác!");

        // Phát âm cả câu ví dụ (đã điền từ đúng)
        const utter = new SpeechSynthesisUtterance(item.example);
        utter.lang = "en-US";
        speechSynthesis.speak(utter);

        // Sau khi phát âm xong thì chuyển sang câu tiếp theo
        utter.onend = () => {
          startSentenceBuilder();
        };
      } else {
        alert("❌ Sai. Đáp án: " + item.word);
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
      if (data.type === type) {
        const el = document.createElement("div");
        el.textContent = `${data.word} → ${data.meaning}`;
        el.style.color = "green";
        box.appendChild(el);

        alert("✅ Đúng! " + data.word + " là từ duy nhất cần tìm kiếm");

        // Phát âm từ đúng
        const utter = new SpeechSynthesisUtterance(data.word);
        utter.lang = "en-US";
        speechSynthesis.speak(utter);

        // Sau khi phát âm xong thì mở câu tiếp theo
        utter.onend = () => {
          startCategorySort();
        };
      } else {
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
  const validWords = words.filter(item => item.word && item.synonym);
  if (validWords.length < 4) {
    alert("⚠️ Cần ít nhất 4 từ có synonym để chơi!");
    return;
  }

  // Chọn ngẫu nhiên một từ làm câu hỏi
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  // Tạo 3 lựa chọn sai, loại bỏ chính từ đang đố và synonym của nó
  const wrongOptions = validWords
    .filter(w => w.word !== item.word && w.word !== item.synonym)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map(w => w.word);

  // Ghép đáp án đúng (synonym) + sai rồi xáo trộn
  const options = [item.synonym, ...wrongOptions].sort(() => 0.5 - Math.random());

  // Hiển thị giao diện
  const container = document.getElementById("game");
  container.innerHTML = `<h2>Synonym Challenge</h2><p>Từ: <b>${item.word}</b></p>`;

  options.forEach(opt => {
    const btn = document.createElement("button2");
    btn.textContent = opt;
    btn.style.margin = "5px";
    btn.onclick = () => {
      if (opt === item.synonym) {
        alert("✅ Chính xác!\nTừ: " + item.word + "\nĐồng nghĩa: " + item.synonym);
      } else {
        alert("❌ Sai!\nTừ: " + item.word + "\nĐáp án đúng: " + item.synonym);
      }
    };
    container.appendChild(btn);
  });
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
    } else {
      alert("❌ Sai. Đáp án: " + item.word);
    }
  };
}

// Trò chơi Spelling Bee (Đánh vần)
function startSpellingBee() {
  const validWords = words.filter(item => item.word && item.meaning);
  const item = validWords[Math.floor(Math.random() * validWords.length)];

  // Quyết định hỏi tiếng Anh hay tiếng Việt
  const askEnglish = Math.random() < 0.5; // 50% hỏi tiếng Anh, 50% hỏi tiếng Việt

  const container = document.getElementById("game");
  container.innerHTML = `
    <h2>Spelling Bee</h2>
    <p>${askEnglish ? "Nghe phát âm và gõ lại chính xác từ tiếng Anh" : "Gõ lại chính xác nghĩa tiếng Việt"}</p>
    <button2 id="play">🔊 Nghe từ</button2>
    <input id="ans" class="text-area2" placeholder="${askEnglish ? "Nhập từ tiếng Anh" : "Nhập nghĩa tiếng Việt"}">
    <button2 id="check">Check</button2>
    <p id="result"></p>
  `;

  // Phát âm từ (luôn phát âm tiếng Anh)
  document.getElementById("play").onclick = () => {
    const utter = new SpeechSynthesisUtterance(item.word);
    utter.lang = "en-US";
    speechSynthesis.speak(utter);
  };

  // Kiểm tra kết quả
  document.getElementById("check").onclick = () => {
    const ans = document.getElementById("ans").value.trim();
    const result = document.getElementById("result");

    if (askEnglish) {
      // Người chơi phải gõ lại từ tiếng Anh
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

  // Quyết định hiển thị tiếng Anh hay tiếng Việt
  const askEnglish = Math.random() < 0.5; // 50% hỏi tiếng Anh, 50% hỏi tiếng Việt

  let questionText, correctAnswer, wrongOptions;

  if (askEnglish) {
    // Hiển thị từ tiếng Anh, đáp án là nghĩa tiếng Việt
    questionText = item.word;
    correctAnswer = item.meaning;
    wrongOptions = validWords
      .filter(w => w.meaning !== item.meaning)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(w => w.meaning);
  } else {
    // Hiển thị nghĩa tiếng Việt, đáp án là từ tiếng Anh
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
      } else {
        alert("❌ Sai!\nCâu hỏi: " + questionText + "\nĐáp án đúng: " + correctAnswer);
      }

      // Phát âm tiếng Anh nếu có
      let speakText = null;
      if (askEnglish) {
        speakText = item.word; // câu hỏi là tiếng Anh
      } else {
        speakText = item.word; // đáp án là tiếng Anh
      }
      if (speakText) {
        const utter = new SpeechSynthesisUtterance(speakText);
        utter.lang = "en-US";
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
