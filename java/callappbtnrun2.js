// Gọi ứng dụng bằng web server, trường hợp gom nhóm

document.addEventListener("DOMContentLoaded", function() {
  const container = document.createElement("div");
  container.className = "button-container";

  // Nhóm Tìm kiếm
  const findGroup = document.createElement("div");
  findGroup.className = "group find";
  findGroup.innerHTML = `
    <h2>Tìm kiếm</h2>
    <button class="btn-xzsearch" onclick="fetch('http://127.0.0.1:5000/run-xzsearch')">Mở XZSearch</button>
    <button class="btn-fluentsearch" onclick="fetch('http://127.0.0.1:5000/run-fluentsearch')">Mở Fluent Search</button>
  `;
  
  // Nhóm Công việc
  const workGroup = document.createElement("div");
  workGroup.className = "group work";
  workGroup.innerHTML = `
    <h2>Công việc</h2>
    <button class="btn-notepad" onclick="fetch('http://127.0.0.1:5000/run-notepad')">Mở Notepad</button>
    <button class="btn-calculator" onclick="fetch('http://127.0.0.1:5000/run-calculator')">Mở Calculator</button>
    <button class="btn-pdfelement" onclick="fetch('http://127.0.0.1:5000/run-pdfelement')">Mở PDFelement</button>
    <button class="btn-fluentreader" onclick="fetch('http://127.0.0.1:5000/run-fluentreader')">Mở Fluent Reader</button>
  `;

  // Nhóm Giải trí
  const funGroup = document.createElement("div");
  funGroup.className = "group fun";
  funGroup.innerHTML = `
    <h2>Giải trí</h2>
    <button class="btn-youtube" onclick="fetch('http://127.0.0.1:5000/run-youtube')">Mở Youtube</button>
    <button class="btn-soundcloud" onclick="fetch('http://127.0.0.1:5000/run-soundcloud')">Mở SoundCloud</button>
    <button class="btn-mpchc" onclick="fetch('http://127.0.0.1:5000/run-mpchc')">Mở MPC-HC</button>
  `;

  // Nhóm Hệ thống
  const systemGroup = document.createElement("div");
  systemGroup.className = "group system";
  systemGroup.innerHTML = `
    <h2>Hệ thống</h2>
    <button onclick="fetch('http://127.0.0.1:5000/run-control')">Mở Control Panel</button>
    <button class="btn-godmode" onclick="fetch('http://127.0.0.1:5000/run-godmode')">Mở GodMode</button>
    <button class="btn-powershell" onclick="fetch('http://127.0.0.1:5000/run-powershell')">Mở PowerShell</button>
    <button class="btn-store" onclick="fetch('http://127.0.0.1:5000/run-store')">Mở Microsoft Store</button>
    <button class="btn-update" onclick="fetch('http://127.0.0.1:5000/run-update')">Mở Check for Updates</button>
    <button class="btn-pcmanager" onclick="fetch('http://127.0.0.1:5000/run-pcmanager')">Mở PC Manager</button>
    <button class="btn-bleachbit" onclick="fetch('http://127.0.0.1:5000/run-bleachbit')">Mở BleachBit</button>
    <button class="btn-defrag" onclick="fetch('http://127.0.0.1:5000/run-defrag')">Mở Defrag</button>
    <button class="btn-storage" onclick="fetch('http://127.0.0.1:5000/run-storage')">Mở Storage</button>
    <button class="btn-startup" onclick="fetch('http://127.0.0.1:5000/run-startup')">Mở Startup Apps</button>
    <button class="btn-installedapps" onclick="fetch('http://127.0.0.1:5000/run-installedapps')">Mở Installed Apps</button>
  `;

  // Nhóm Bảo mật
  const securityGroup = document.createElement("div");
  securityGroup.className = "group security";
  securityGroup.innerHTML = `
    <h2>Bảo mật</h2>
    <button class="btn-avast" onclick="fetch('http://127.0.0.1:5000/run-avast')">Mở Avast</button> 
  `;

  // Nhóm AI
  const aiGroup = document.createElement("div");
  aiGroup.className = "group ai";
  aiGroup.innerHTML = `
    <h2>AI</h2>
    <button class="btn-copilot" onclick="fetch('http://127.0.0.1:5000/run-copilot')">Mở Copilot</button>
    <button onclick="fetch('http://127.0.0.1:5000/run-gemini')">Mở Google Gemini</button>
    <button class="btn-xzaitalk" onclick="fetch('http://127.0.0.1:5000/run-xzaitalk')">Mở XZAiTalkApp</button>
  `;

  container.appendChild(findGroup);
  container.appendChild(workGroup);
  container.appendChild(funGroup);
  container.appendChild(systemGroup);
  container.appendChild(securityGroup);
  container.appendChild(aiGroup);

  document.body.appendChild(container);
});
