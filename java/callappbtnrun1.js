// Gọi ứng dụng bằng web server, trường hợp riêng rẻ

document.addEventListener("DOMContentLoaded", function() {
  const container = document.createElement("div");
  container.className = "button-container";

  container.innerHTML = `
  <!-- Nút mở XZSearch -->
  <button class="btn-xzsearch" onclick="fetch('http://127.0.0.1:5000/run-xzsearch')">
   Mở XZSearch
  </button>

  <!-- Nút mở Baisha Search -->
  <button class="btn-baishasearch" onclick="fetch('http://127.0.0.1:5000/run-baishasearch')">
    Mở Baisha Search
  </button>

  <!-- Nút mở Fluent Search -->
  <button class="btn-fluentsearch" onclick="fetch('http://127.0.0.1:5000/run-fluentsearch')">
    Mở Fluent Search
  </button>

  <!-- Nút mở Everything -->
  <button class="btn-everything" onclick="fetch('http://127.0.0.1:5000/run-everything')">
    Mở Everything
  </button>

  <!-- Nút mở FileLocatorPro -->
  <button class="btn-filelocatorpro" onclick="fetch('http://127.0.0.1:5000/run-filelocatorpro')">
    Mở FileLocatorPro
  </button>

  <!-- Nút mở Duplicate Cleaner Pro -->
  <button class="btn-duplicatecleaner" onclick="fetch('http://127.0.0.1:5000/run-duplicatecleaner')">
    Mở Duplicate Cleaner Pro
  </button>
  
  <!-- Nút mở Baisha Desktop Manager (白鲨桌面整理) -->
  <button class="btn-baisha" onclick="fetch('http://127.0.0.1:5000/run-baisha')">
    Mở Baisha Desktop Manager (白鲨桌面整理)
  </button>

  <!-- Nút mở XZDesktop -->
  <button class="btn-xzdesktop" onclick="fetch('http://127.0.0.1:5000/run-xzdesktop')">
    Mở XZDesktop (小智桌面)
  </button>

  <!-- Nút mở Notepad -->
  <button class="btn-notepad" onclick="fetch('http://127.0.0.1:5000/run-notepad')">
    Mở Notepad
  </button>

  <!-- Nút mở Calculator -->
  <button class="btn-calculator" onclick="fetch('http://127.0.0.1:5000/run-calculator')">
    Mở Calculator
  </button>

  <!-- Nút mở Files (Store App)-->
  <button class="btn-files" onclick="fetch('http://127.0.0.1:5000/run-files')">
    Mở Files (Store App)
  </button>

  <!-- Nút mở File Explorer -->
  <button class="btn-fileexplorer" onclick="fetch('http://127.0.0.1:5000/run-fileexplorer')">
    Mở File Explorer
  </button>

  <!-- Nút mở QuickLook -->
  <button class="btn-quicklook" onclick="fetch('http://127.0.0.1:5000/run-quicklook')">
    Mở QuickLook
  </button>

  <!-- Nút mở Wondershare PDFelement -->
  <button class="btn-pdfelement" onclick="fetch('http://127.0.0.1:5000/run-pdfelement')">
    Mở Wondershare PDFelement
  </button>

  <!-- Nút mở MPC-HC (K-Lite Codec Pack) -->
  <button class="btn-mpchc" onclick="fetch('http://127.0.0.1:5000/run-mpchc')">
    Mở MPC-HC (K-Lite Codec Pack)
  </button>

  <!-- Nút mở GIMP Portable -->
  <button class="btn-gimp" onclick="fetch('http://127.0.0.1:5000/run-gimp')">
    Mở GIMP Portable
  </button>

   <!-- Nút mở Fsquirt -->
  <button class="btn-fsquirt" onclick="fetch('http://127.0.0.1:5000/run-fsquirt')">
    Mở Fsquirt
  </button>

  <!-- Nút mở KDE Connect -->
  <button class="btn-kdeconnect" onclick="fetch('http://127.0.0.1:5000/run-kdeconnect')">
    Mở KDE Connect
  </button>

  <!-- Nút mở Quick Share -->
  <button class="btn-quickshare" onclick="fetch('http://127.0.0.1:5000/run-quickshare')">
    Mở Quick Share
  </button>

  <!-- Nút mở Github (ứng dụng web) -->
  <button class="btn-github" onclick="fetch('http://127.0.0.1:5000/run-github')">
    Mở GitHub
  </button>

  <!-- Nút mở Dropbox (ứng dụng web) -->
  <button class="btn-dropbox" onclick="fetch('http://127.0.0.1:5000/run-dropbox')">
    Mở Dropbox
  </button>

  <!-- Nút mở Box (ứng dụng web) -->
  <button class="btn-box" onclick="fetch('http://127.0.0.1:5000/run-box')">
    Mở Box
  </button>

  <!-- Nút mở Mega (ứng dụng web) -->
  <button class="btn-mega" onclick="fetch('http://127.0.0.1:5000/run-mega')">
    Mở Mega.nz
  </button>

  <!-- Nút mở Control Panel -->
  <button onclick="fetch('http://127.0.0.1:5000/run-control')">
    Mở Control Panel
  </button>

  <!-- Nút mở GodMode -->
  <button class="btn-godmode" onclick="fetch('http://127.0.0.1:5000/run-godmode')">
    Mở GodMode
  </button>

  <!-- Nút mở Powershell -->
  <button class="btn-powershell" onclick="fetch('http://127.0.0.1:5000/run-powershell')">
    Mở PowerShell
  </button>

  <!-- Nút mở Check for Updates -->
  <button class="btn-update" onclick="fetch('http://127.0.0.1:5000/run-update')">
    Mở Check for Updates
  </button>
  
  <!-- Nút mở Defragment and Optimize Drives -->
  <button class="btn-defrag" onclick="fetch('http://127.0.0.1:5000/run-defrag')">
    Mở Defragment and Optimize Drives
  </button>

  <!-- Nút mở PC Manager -->
  <button class="btn-pcmanager" onclick="fetch('http://127.0.0.1:5000/run-pcmanager')">
    Mở PC Manager
  </button>

  <!-- Nút mở BleachBit -->
  <button class="btn-bleachbit" onclick="fetch('http://127.0.0.1:5000/run-bleachbit')">
    Mở BleachBit
  </button>

  <!-- Nút mở System Storage -->
  <button class="btn-storage" onclick="fetch('http://127.0.0.1:5000/run-storage')">
    Mở System Storage
  </button>

  <!-- Nút mở Disk Cleanup -->
  <button class="btn-diskcleanup" onclick="fetch('http://127.0.0.1:5000/run-diskcleanup')">
    Mở Disk Cleanup
  </button>

  <!-- Nút mở Startup Apps -->
  <button class="btn-startup" onclick="fetch('http://127.0.0.1:5000/run-startup')">
    Mở Startup Apps
  </button>
  
  <!-- Nút mở Installed Apps -->
  <button class="btn-installedapps" onclick="fetch('http://127.0.0.1:5000/run-installedapps')">
    Mở Installed Apps
  </button>

  <!-- Nút mở Avast Free Antivurs -->
  <button class="btn-avast" onclick="fetch('http://127.0.0.1:5000/run-avast')">
    Mở Avast Free Antivirus
  </button>

  <!-- Nút mở Fluent Reader -->
  <button class="btn-fluentreader" onclick="fetch('http://127.0.0.1:5000/run-fluentreader')">
    Mở Fluent Reader
  </button>

  <!-- Nút mở Babylon.js Sandbox (ứng dụng web) -->
  <button class="btn-babylon" onclick="fetch('http://127.0.0.1:5000/run-babylon')">
    Mở Babylon.js Sandbox
  </button>

  <!-- Nút mở Telegram -->
  <button class="btn-telegram" onclick="fetch('http://127.0.0.1:5000/run-telegram')">
    Mở Telegram
  </button>

  <!-- Nút mở Copilot (ứng dụng web) -->
  <button class="btn-copilot" onclick="fetch('http://127.0.0.1:5000/run-copilot')">
    Mở Copilot
  </button>

  <!-- Nút mở Gemini (ứng dụng web) -->
  <button onclick="fetch('http://127.0.0.1:5000/run-gemini')">
    Mở Google Gemini
  </button>

  <!-- Nút mở XZAiTalkApp -->
  <button class="btn-xzaitalk" onclick="fetch('http://127.0.0.1:5000/run-xzaitalk')">
    Mở XZAiTalkApp
  </button>

  <!-- Nút mở SoundCloud (ứng dụng web) -->
  <button class="btn-soundcloud" onclick="fetch('http://127.0.0.1:5000/run-soundcloud')">
    Mở SoundCloud
  </button>

  <!-- Nút mở Youtube (ứng dụng web) -->
  <button class="btn-youtube" onclick="fetch('http://127.0.0.1:5000/run-youtube')">
    Mở Youtube
  </button>

  <!-- Nút mở Internet Download Manager -->
  <button class="btn-idm" onclick="fetch('http://127.0.0.1:5000/run-idm')">
    Mở Internet Download Manager
  </button>

  <!-- Nút mở Microsoft Store -->
  <button class="btn-store" onclick="fetch('http://127.0.0.1:5000/run-store')">
    Mở Microsoft Store
  </button>

  <!-- Nút mở KaranPC Category (ứng dụng web) -->
  <button class="btn-karanpc" onclick="fetch('http://127.0.0.1:5000/run-karanpc')">
    Mở KaranPC Category
  </button>

  <!-- Nút mở FC Portables (ứng dụng web) -->
  <button class="btn-fcportables" onclick="fetch('http://127.0.0.1:5000/run-fcportables')">
    Mở FC Portables
  </button>

  `;

  document.body.appendChild(container);
});
