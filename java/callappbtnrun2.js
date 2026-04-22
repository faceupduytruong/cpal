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
    <button class="btn-baishasearch" onclick="fetch('http://127.0.0.1:5000/run-baishasearch')">Mở Baisha Search</button>
    <button class="btn-fluentsearch" onclick="fetch('http://127.0.0.1:5000/run-fluentsearch')">Mở Fluent Search</button>
    <button class="btn-everything" onclick="fetch('http://127.0.0.1:5000/run-everything')">Mở Everything</button>
    <button class="btn-filelocatorpro" onclick="fetch('http://127.0.0.1:5000/run-filelocatorpro')">Mở FileLocatorPro</button>
    <button class="btn-duplicatecleaner" onclick="fetch('http://127.0.0.1:5000/run-duplicatecleaner')">Mở Duplicate Cleaner Pro</button>
  `;

  // Nhóm Bố Trí
  const layoutGroup = document.createElement("div");
  layoutGroup.className = "group layout";
  layoutGroup.innerHTML = `
    <h2>Bố Trí</h2>
    <button class="btn-baisha" onclick="fetch('http://127.0.0.1:5000/run-baisha')">Mở Baisha Desktop Manager (白鲨桌面整理)</button>
    <button class="btn-xzdesktop" onclick="fetch('http://127.0.0.1:5000/run-xzdesktop')">Mở XZDesktop (小智桌面)</button>
    <button class="btn-files" onclick="fetch('http://127.0.0.1:5000/run-files')">Mở Files (Store App)</button>
    <button class="btn-qdir" onclick="fetch('http://127.0.0.1:5000/run-qdir')">Mở Q-Dir Portable</button>
    <button class="btn-fileexplorer" onclick="fetch('http://127.0.0.1:5000/run-fileexplorer')">Mở File Explorer</button>
    <button class="btn-quicklook" onclick="fetch('http://127.0.0.1:5000/run-quicklook')">Mở QuickLook</button>
  `;
  
  // Nhóm Công việc
  const workGroup = document.createElement("div");
  workGroup.className = "group work";
  workGroup.innerHTML = `
    <h2>Công việc</h2>
    <button class="btn-notepad" onclick="fetch('http://127.0.0.1:5000/run-notepad')">Mở Notepad</button>
    <button class="btn-calculator" onclick="fetch('http://127.0.0.1:5000/run-calculator')">Mở Calculator</button>
    <button class="btn-foxit" onclick="fetch('http://127.0.0.1:5000/run-foxit')">Mở Foxit PDF Editor Portable</button>
    <button class="btn-pdfelement" onclick="fetch('http://127.0.0.1:5000/run-pdfelement')">Mở PDFelement</button>
    <button class="btn-mpchc" onclick="fetch('http://127.0.0.1:5000/run-mpchc')">Mở MPC-HC</button>
    <button class="btn-gimp" onclick="fetch('http://127.0.0.1:5000/run-gimp')">Mở GIMP Portable</button>
  `;

  // Nhóm Học Tập
  const studyGroup = document.createElement("div");
  studyGroup.className = "group study";
  studyGroup.innerHTML = `
    <h2>Học Tập</h2>
    <button class="btn-quizlet" onclick="fetch('http://127.0.0.1:5000/run-quizlet')">Mở Quizlet</button>
  `;

  // Nhóm Upload
  const uploadGroup = document.createElement("div");
  uploadGroup.className = "group upload";
  uploadGroup.innerHTML = `
    <h2>Upload</h2>
      <button class="btn-fsquirt" onclick="fetch('http://127.0.0.1:5000/run-fsquirt')">Mở Fsquirt</button>
      <button class="btn-kdeconnect" onclick="fetch('http://127.0.0.1:5000/run-kdeconnect')">Mở KDE Connect</button>
      <button class="btn-quickshare" onclick="fetch('http://127.0.0.1:5000/run-quickshare')">Mở Quick Share</button>
      <button class="btn-github" onclick="fetch('http://127.0.0.1:5000/run-github')">Mở GitHub</button>
      <button class="btn-dropbox" onclick="fetch('http://127.0.0.1:5000/run-dropbox')">Mở Dropbox</button>
      <button class="btn-box" onclick="fetch('http://127.0.0.1:5000/run-box')">Mở Box</button>
      <button class="btn-mega" onclick="fetch('http://127.0.0.1:5000/run-mega')">Mở Mega.nz</button>
  `;

  // Nhóm Giải trí
  const funGroup = document.createElement("div");
  funGroup.className = "group fun";
  funGroup.innerHTML = `
    <h2>Giải trí</h2>
    <button class="btn-fluentreader" onclick="fetch('http://127.0.0.1:5000/run-fluentreader')">Mở Fluent Reader</button>
    <button class="btn-soundcloud" onclick="fetch('http://127.0.0.1:5000/run-soundcloud')">Mở SoundCloud</button>
    <button class="btn-youtube" onclick="fetch('http://127.0.0.1:5000/run-youtube')">Mở Youtube</button>
    <button class="btn-babylon" onclick="fetch('http://127.0.0.1:5000/run-babylon')">Mở Babylon.js Sandbox</button>
  `;

  // Nhóm Hệ thống
  const systemGroup = document.createElement("div");
  systemGroup.className = "group system";
  systemGroup.innerHTML = `
    <h2>Hệ thống</h2>
    <button onclick="fetch('http://127.0.0.1:5000/run-control')">Mở Control Panel</button>
    <button class="btn-godmode" onclick="fetch('http://127.0.0.1:5000/run-godmode')">Mở GodMode</button>
    <button class="btn-powershell" onclick="fetch('http://127.0.0.1:5000/run-powershell')">Mở PowerShell</button>
    <button class="btn-bleachbit" onclick="fetch('http://127.0.0.1:5000/run-bleachbit')">Mở BleachBit</button>
    <button class="btn-defrag" onclick="fetch('http://127.0.0.1:5000/run-defrag')">Mở Defrag</button>
    <button class="btn-storage" onclick="fetch('http://127.0.0.1:5000/run-storage')">Mở Storage</button>
    <button class="btn-diskcleanup" onclick="fetch('http://127.0.0.1:5000/run-diskcleanup')">Mở Disk Cleanup</button>
  `;

  // Nhóm Bảo mật
  const securityGroup = document.createElement("div");
  securityGroup.className = "group security";
  securityGroup.innerHTML = `
    <h2>Bảo mật</h2>
    <button class="btn-avast" onclick="fetch('http://127.0.0.1:5000/run-avast')">Mở Avast</button>
    <button class="btn-update" onclick="fetch('http://127.0.0.1:5000/run-update')">Mở Check for Updates</button>
    <button class="btn-pcmanager" onclick="fetch('http://127.0.0.1:5000/run-pcmanager')">Mở PC Manager</button>
    <button class="btn-startup" onclick="fetch('http://127.0.0.1:5000/run-startup')">Mở Startup Apps</button>
    <button class="btn-installedapps" onclick="fetch('http://127.0.0.1:5000/run-installedapps')">Mở Installed Apps</button>
  `;

  // Nhóm AI
  const aiGroup = document.createElement("div");
  aiGroup.className = "group ai";
  aiGroup.innerHTML = `
    <h2>AI</h2>
    <button class="btn-telegram" onclick="fetch('http://127.0.0.1:5000/run-telegram')">Mở Telegram</button>
    <button class="btn-copilot" onclick="fetch('http://127.0.0.1:5000/run-copilot')">Mở Copilot</button>
    <button onclick="fetch('http://127.0.0.1:5000/run-gemini')">Mở Google Gemini</button>
    <button class="btn-xzaitalk" onclick="fetch('http://127.0.0.1:5000/run-xzaitalk')">Mở XZAiTalkApp</button>
  `;

  // Nhóm Portable
  const portableGroup = document.createElement("div");
  portableGroup.className = "group portable";
  portableGroup.innerHTML = `
    <h2>Portable</h2>
    <button class="btn-idm" onclick="fetch('http://127.0.0.1:5000/run-idm')">Mở Internet Download Manager</button>
    <button class="btn-store" onclick="fetch('http://127.0.0.1:5000/run-store')">Mở Microsoft Store</button>
    <button class="btn-karanpc" onclick="fetch('http://127.0.0.1:5000/run-karanpc')">Mở KaranPC Category</button>
    <button class="btn-fcportables" onclick="fetch('http://127.0.0.1:5000/run-fcportables')">Mở FC Portables</button>
  `;

  container.appendChild(findGroup);
  container.appendChild(layoutGroup);
  container.appendChild(workGroup);
  container.appendChild(studyGroup);
  container.appendChild(uploadGroup);
  container.appendChild(funGroup);
  container.appendChild(systemGroup);
  container.appendChild(securityGroup);
  container.appendChild(aiGroup);
  container.appendChild(portableGroup);

  document.body.appendChild(container);
});
