// Gọi ứng dụng bằng web server

document.addEventListener("DOMContentLoaded", function() {
  const container = document.createElement("div");
  container.className = "button-container";

  container.innerHTML = `
  <!-- Nút mở Notepad -->
  <button class="btn-notepad" onclick="fetch('http://127.0.0.1:5000/run-notepad')">
    Mở Notepad
  </button>

  <!-- Nút mở Calculator -->
  <button class="btn-calculator" onclick="fetch('http://127.0.0.1:5000/run-calculator')">
    Mở Calculator
  </button>

  <!-- Nút mở Fsquirt -->
  <button class="btn-fsquirt" onclick="fetch('http://127.0.0.1:5000/run-fsquirt')">
    Mở Fsquirt
  </button>

  <!-- Nút mở Control Panel -->
  <button onclick="fetch('http://127.0.0.1:5000/run-control')">
    Mở Control Panel
  </button>

  <!-- Nút mở Microsoft Store -->
  <button class="btn-store" onclick="fetch('http://127.0.0.1:5000/run-store')">
    Mở Microsoft Store
  </button>

  <!-- Nút mở Check for Updates -->
  <button class="btn-update" onclick="fetch('http://127.0.0.1:5000/run-update')">
    Mở Check for Updates
  </button>

  <!-- Nút mở PC Manager -->
  <button class="btn-pcmanager" onclick="fetch('http://127.0.0.1:5000/run-pcmanager')">
    Mở PC Manager
  </button>

  <!-- Nút mở BleachBit -->
  <button class="btn-bleachbit" onclick="fetch('http://127.0.0.1:5000/run-bleachbit')">
    Mở BleachBit
  </button>

  <!-- Nút mở Avast Free Antivurs -->
  <button class="btn-avast" onclick="fetch('http://127.0.0.1:5000/run-avast')">
    Mở Avast Free Antivirus
  </button>

  <!-- Nút mở Files -->
  <button class="btn-files" onclick="fetch('http://127.0.0.1:5000/run-files')">
    Mở Files (Store App)
  </button>

  <!-- Nút mở Internet Download Manager -->
  <button class="btn-idm" onclick="fetch('http://127.0.0.1:5000/run-idm')">
    Mở Internet Download Manager
  </button>

  <!-- Nút mở Babylon.js Sandbox (ứng dụng web) -->
  <button class="btn-babylon" onclick="fetch('http://127.0.0.1:5000/run-babylon')">
    Mở Babylon.js Sandbox
  </button>

  <!-- Nút mở Github (ứng dụng web) -->
  <button class="btn-github" onclick="fetch('http://127.0.0.1:5000/run-github')">
    Mở GitHub
  </button>

  <!-- Nút mở Gemini (ứng dụng web) -->
  <button onclick="fetch('http://127.0.0.1:5000/run-gemini')">
    Mở Google Gemini
  </button>

  <!-- Nút mở SoundCloud (ứng dụng web) -->
  <button class="btn-soundcloud" onclick="fetch('http://127.0.0.1:5000/run-soundcloud')">
    Mở SoundCloud
  </button>

  <!-- Nút mở Youtube (ứng dụng web) -->
  <button class="btn-youtube" onclick="fetch('http://127.0.0.1:5000/run-youtube')">
    Mở Youtube
  </button>

  <!-- Nút mở Dropbox (ứng dụng web) -->
  <button class="btn-dropbox" onclick="fetch('http://127.0.0.1:5000/run-dropbox')">
    Mở Dropbox
  </button>

  <!-- Nút mở Box (ứng dụng web) -->
  <button class="btn-box" onclick="fetch('http://127.0.0.1:5000/run-box')">
    Mở Box
  </button>

  <!-- Nút mở KaranPC Category (ứng dụng web) -->
  <button class="btn-karanpc" onclick="fetch('http://127.0.0.1:5000/run-karanpc')">
    Mở KaranPC Category
  </button>

  `;

  document.body.appendChild(container);
});
