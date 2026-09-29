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
