async function fetchFeed(username, playlists) {
  try {
    const url = `http://127.0.0.1:8000/feed_soundcloud?username=${username}&playlists=${playlists}`;
    const response = await fetch(url);
    const data = await response.json();

    const feed = document.getElementById("feed");
    feed.innerHTML = "";

    if (data.length === 0 || data.message) {
      feed.innerHTML = "<p>Không tìm thấy playlist cho username này.</p>";
      return;
    }

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title}</h3>
        ${item.html}
        <button class="btn-desc">📖 Description of Playlist</button>
        <div class="playlist-description" style="display:none; margin-top:10px;">
          ${item.description || "Không có mô tả"}
        </div>
      `;
      feed.appendChild(card);
    });

    // Gắn sự kiện toggle cho tất cả nút
    feed.querySelectorAll(".btn-desc").forEach(btn => {
      btn.addEventListener("click", () => {
        const desc = btn.nextElementSibling;
        const currentDisplay = window.getComputedStyle(desc).display;
        desc.style.display = (currentDisplay === "none") ? "block" : "none";
      });
    });
  } catch (error) {
    document.getElementById("feed").innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}

// Định nghĩa discoverLinks một lần
const discoverLinks = [
  {
    title: "Daily Drops",
    img: "https://al.sndcdn.com/labs-9180d1fa-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9EUk9QUwp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjMxNTUzMTU1NSIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMTcyMjQ3NDMiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMzE2NzQ4NjI1Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjMxNjc3NzUzMCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMTU1NDIxMTgiCg%3D%3D",
    url: "https://soundcloud.com/discover/sets/new-for-you::nhanhlaxanh"
  },
  {
    title: "Weekly Wave",
    img: "https://al.sndcdn.com/labs-fb7cd9d1-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBTQ19XRUVLTFkKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMTQ3MzI5MzciCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMTk0NTI1Njk1Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI3OTg1NDU1MCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMDI4NTgyNzEiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMzA2NDc3NzMyIgo%3D",
    url: "https://soundcloud.com/discover/sets/weekly::nhanhlaxanh"
  },
  {
    title: "Your Mix 1",
    img: "https://al.sndcdn.com/labs-2d3991b7-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF8xCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjI0NjIyMzk2Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI0MTcwNzI5NyIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIyMzEwNDAyNDIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjQwOTA3ODk5Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjIxNTg0NzI4OCIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:1"
  },
  {
    title: "Your Mix 2",
    img: "https://al.sndcdn.com/labs-eaad907d-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF8yCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMzA1MjA3Njk0Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjMwMDI2NDI0MCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIyMjYwMjc5NjIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjQ2NDc1NzA0Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI0Njc5NzU0NyIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:2"
  },
  {
    title: "Your Mix 3",
    img: "https://al.sndcdn.com/labs-f6aede22-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF8zCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMTg4MDExODcxIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTMzODYyOTQxNiIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIyMjg1MTc0MTYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMTkyMzQ4MzExIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI0NjYyMTE1OSIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:3"
  },
  {
    title: "Your Mix 4",
    img: "https://al.sndcdn.com/labs-6914ea80-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF80CnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMzAwMjY0MjQwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI5NTE3MDIwNCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMDUyMDc2OTQiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjQ1MzM4NDE5Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI1OTEwOTA2MSIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:4"
  },
  {
    title: "Your Mix 5",
    img: "https://al.sndcdn.com/labs-cec3a2cc-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF81CnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjQzMzQ0OTQzIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI0MDg3MDMxMiIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIyNDQ1NjcwODYiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjQ4NTk0NTkyIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI0MDg3MDMxNSIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:5"
  },
  {
    title: "Your Mix 6",
    img: "https://al.sndcdn.com/labs-919baf1a-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF82CnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo0MTI1MTkxODIiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTg1MDg3MDQwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTg4NzQ4MTU2MCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjU0MzQ2NjU1MSIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEyMDYwOTA5NDMiCg%3D%3D",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:6"
  },
  {
    title: "Your Mix 7",
    img: "https://al.sndcdn.com/labs-29c15706-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF83CnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczo3MDY3MzI3NCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjEzODQzNTg0OTEiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTM0MjA3MzM3Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTEyNjU0NzkxNCIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjk2OTM5Mzc2NiIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:7"
  },
  {
    title: "Your Mix 8",
    img: "https://al.sndcdn.com/labs-611869c3-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF84CnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjU2ODI2NzkwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjIwMTc4MDAxNSIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIyNjMxMjQzNDgiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMDkzNzA5MDI3Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjIwMTc4MDUwMyIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:8"
  },
  {
    title: "Your Mix 9",
    img: "https://al.sndcdn.com/labs-e0eb1e72-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF85CnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjYyMzc4MTQ2Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI2NjUwMzQyMiIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIyOTc3ODg0NzgiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMjg0NDAyNTQ0Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjI0MDcxOTYwNCIK",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:9"
  },
  {
    title: "Your Mix 10",
    img: "https://al.sndcdn.com/labs-f62c5564-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF8xMAp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MzMwODQxNTEwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6NDQ3ODU5OTM4Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTkzNjc5MjMzNyIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjExOTIyODU5NzUiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTIyNjYwNDMzIgo%3D",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:10"
  },
  {
    title: "1987VibesVN Station",
    img: "https://al.sndcdn.com/labs-9e66cbbf-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBTVEFUSU9OCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjE2NjA0NjA0MTQiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjU2MzEwMDQ5MiIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MTM4NjA1NjY0MyIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MTM5MDA5Njg1Igp1cm5zOiAic291bmRjbG91ZDp1c2VyczoxMjEwOTcxMTI3Igp1cm5zOiAic291bmRjbG91ZDp1c2Vyczo5NDQwODQ2MCIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MzU1ODY5OTExIgo%3D",
    url: "https://soundcloud.com/discover/sets/artist-stations:1660460414"
  },
  {
    title: "Mariah Carey Station",
    img: "https://al.sndcdn.com/labs-3c05f296-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBTVEFUSU9OCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjM2NDE3NjkxIgp1cm5zOiAic291bmRjbG91ZDp1c2VyczoxODcxOTEyOTQiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjE3MzgwNDI4MyIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6NTA3NTgzNjkiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjIwMzQwNjgxNyIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MTY3NDE2NjgiCg%3D%3D",
    url: "https://soundcloud.com/discover/sets/artist-stations:36417691"
  },
  {
    title: "Popping Club Station",
    img: "https://al.sndcdn.com/labs-8214a609-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBTVEFUSU9OCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjI2Mjc0NjMwNCIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MTM1MDI1NDcwMCIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6ODE2NjgwMjk2Igp1cm5zOiAic291bmRjbG91ZDp1c2VyczoxNTIyMTQxMzIwIgp1cm5zOiAic291bmRjbG91ZDp1c2Vyczo5MjE0ODMzNzYiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjEyNjgyNjYyMTAiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjc1NTc1MDcyIgo%3D",
    url: "https://soundcloud.com/discover/sets/artist-stations:262746304"
  },
  {
    title: "Lê Thanh Trúc (Kenneth) Station",
    img: "https://al.sndcdn.com/labs-3430ecb0-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBTVEFUSU9OCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjUwMDM4NDk2Igp1cm5zOiAic291bmRjbG91ZDp1c2Vyczo1ODM0NzE2NDQiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjI1NTIyMzYzIgp1cm5zOiAic291bmRjbG91ZDp1c2Vyczo0NDUyOTExMiIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MjUxMjcwOTQiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjE0MDUyMzg2NSIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MzIzNTkyNyIK",
    url: "https://soundcloud.com/discover/sets/artist-stations:50038496"
  },
  {
    title: "Hwa Station",
    img: "https://al.sndcdn.com/labs-841ddb0b-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBTVEFUSU9OCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjU4MDk3NzQyOSIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6ODQxODk4OTk1Igp1cm5zOiAic291bmRjbG91ZDp1c2Vyczo0MzQzNDM4NzMiCnVybnM6ICJzb3VuZGNsb3VkOnVzZXJzOjYzMzk5NCIKdXJuczogInNvdW5kY2xvdWQ6dXNlcnM6MzEyMTc4NDY0Igp1cm5zOiAic291bmRjbG91ZDp1c2VyczoxMTExMTQ2NTQxIgp1cm5zOiAic291bmRjbG91ZDp1c2VyczoxMTMyMTYzMDI2Igo%3D",
    url: "https://soundcloud.com/discover/sets/artist-stations:580977429:1914161654"
  },
  {
    title: "Related tracks: Khi Nào Em Mới Biết",
    img: "https://i1.sndcdn.com/artworks-k7xysXAHz7ocNdNm-div4IA-t500x500.jpg",
    url: "https://soundcloud.com/discover/sets/personalized-tracks::nhanhlaxanh:2297681687"
  },
  {
    title: "Related tracks: Người Lạ Thoáng Qua",
    img: "https://i1.sndcdn.com/artworks-ESQHYrc4b8zbR7hj-qCdJug-t500x500.jpg",
    url: "https://soundcloud.com/discover/sets/personalized-tracks::nhanhlaxanh:2284214684"
  },
  {
    title: "Related tracks: Đừng Ngoảnh Lại",
    img: "https://i1.sndcdn.com/artworks-Dsxv6vHtktLnBNDR-Je2B4A-t500x500.jpg",
    url: "https://soundcloud.com/discover/sets/personalized-tracks::nhanhlaxanh:2241601289"
  },
  {
    title: "Related tracks: Đắng Cay Nhân Gian",
    img: "https://i1.sndcdn.com/artworks-ejJsy1CGvONMAyo9-oq9zKg-t500x500.jpg",
    url: "https://soundcloud.com/discover/sets/personalized-tracks::nhanhlaxanh:2211783359"
  }
  // thêm các link khác ở đây nếu cần
];

// Danh sách alias cho discover
const discoverAliases = ["discover", "newforyou", "recommend", "trend", "hot", "suggested", "nóng", "mới nhất", "nhạc mới", "mới", "lạ", "khám phá", "khuyên", "xu hướng", "đề xuất", "mix", "trộn", "trạm", "station"];

// Hàm render discover
function renderDiscover(feed) {
  discoverLinks.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      <img src="${item.img}" alt="${item.title}" style="width:100%;max-width:400px;border-radius:8px;margin:10px 0;">
      <p>Khám phá nhạc mới trên SoundCloud:</p>
      <button class="discover-btn" onclick="window.open('${item.url}','_blank')">
        Mở trên SoundCloud
      </button>
    `;
    feed.appendChild(card);
  });
}

async function fetchTagPlaylists(tag) {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  // Kiểm tra alias
  if (discoverAliases.includes(tag.toLowerCase())) {
    renderDiscover(feed);
    return;
  }

  try {
    const url = `http://127.0.0.1:8000/tag_playlists?tag=${encodeURIComponent(tag)}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.length === 0 || data.message) {
      feed.innerHTML = "<p>Không tìm thấy track/playlist cho tag này.</p>";
      return;
    }

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title}</h3>
        ${item.html}
        <button class="btn-desc">📖 Description of Playlist</button>
        <div class="playlist-description" style="display:none; margin-top:10px;">
        ${item.description || "Không có mô tả"}
        </div>
      `;
      feed.appendChild(card);
    });

    // Gắn sự kiện toggle cho tất cả nút
    feed.querySelectorAll(".btn-desc").forEach(btn => {
      btn.addEventListener("click", () => {
        const desc = btn.nextElementSibling;
        const currentDisplay = window.getComputedStyle(desc).display;
        desc.style.display = (currentDisplay === "none") ? "block" : "none";
      });
    });
  } catch (error) {
    feed.innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}

async function searchSoundcloud() {
  const queryValue = document.getElementById("query").value.trim();
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  // Kiểm tra alias cho discover
  if (discoverAliases.includes(queryValue.toLowerCase())) {
    renderDiscover(feed);
    return;
  }

  try {
    const response = await fetch(`http://127.0.0.1:8000/ai_playlist?query=${encodeURIComponent(queryValue)}`);
    const data = await response.json();

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.title}</h3>
        ${item.html}
        <button class="btn-desc">📖 Description of Playlist</button>
        <div class="playlist-description" style="display:none; margin-top:10px;">
        ${item.description || "Không có mô tả"}
        </div>
      `;
      feed.appendChild(card);
    });
  } catch (error) {
    feed.innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}

// Hàm search chính: tự động phân biệt
async function tag() {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập dữ liệu");
    return;
  }

  if (queryValue.includes(",")) {
    // username,playlist
    const parts = queryValue.split(",");
    const username = parts[0];
    const playlists = parts.slice(1).join(",");
    await fetchFeed(username, playlists);
  } else {
    // tag
    await fetchTagPlaylists(queryValue);
  }
}

// Toggle theme
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

let mediaRecorder;
let audioChunks = [];
let audioBlob;

// Toggle panel
document.getElementById("toolsBtn").addEventListener("click", () => {
  const panel = document.getElementById("toolsPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
});

// Start recording
document.getElementById("startRecordBtn").addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
  audioChunks = [];
  mediaRecorder.start();

  mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

  mediaRecorder.onstop = () => {
    audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    const audioUrl = URL.createObjectURL(audioBlob);
    document.getElementById("recordPlayback").src = audioUrl;
    document.getElementById("downloadRecordBtn").disabled = false;
  };

  document.getElementById("stopRecordBtn").disabled = false;
});

// Stop recording
document.getElementById("stopRecordBtn").addEventListener("click", () => {
  mediaRecorder.stop();
  document.getElementById("stopRecordBtn").disabled = true;
});

// Download recording
document.getElementById("downloadRecordBtn").addEventListener("click", () => {
  if (!audioBlob) {
    alert("⚠️ Chưa có bản ghi âm để tải về.");
    return;
  }
  const audioUrl = URL.createObjectURL(audioBlob);
  const link = document.createElement("a");
  link.href = audioUrl;
  link.download = "recording.ogg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// 👉 Nút Convert mở Speaknotes
document.getElementById("convertBtn").addEventListener("click", () => {
  const url = "https://speaknotes.io/free-tools/transcribe/ogg";
  const title = "Transcribe OGG";
  openRightHalfPopup(url, title, window.innerWidth * 2 + 45, 745);
});

// 👉 Nút Translate mở Google Dịch
document.getElementById("translateBtn").addEventListener("click", async () => {
  try {
    // Đọc clipboard (chỉ hoạt động khi trang được mở qua HTTPS hoặc localhost)
    const text = await navigator.clipboard.readText();
    const encodedText = encodeURIComponent(text);
    const url = `https://translate.google.com.vn/?sl=auto&tl=vi&text=${encodedText}&op=translate`;
    const title = "Google Dịch";

    openRightHalfPopup(url, title, window.innerWidth * 2 + 45, 745);
  } catch (err) {
    alert("Không thể đọc clipboard. Hãy cấp quyền truy cập.");
    console.error(err);
  }
});

// 👉 Nút Google: tìm trên Google với soundcloud.com + query
document.getElementById("google-btn").addEventListener("click", () => {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập cụm từ cần tìm");
    return;
  }
  const googleUrl = `https://www.google.com/search?q=site:soundcloud.com+${encodeURIComponent(queryValue)}`;
  window.open(googleUrl, "_blank");
});

// Khi click vào AI Playlist thì hiện nhóm công cụ
document.getElementById("ai-btn").addEventListener("click", () => {
  const toolsPanel = document.getElementById("ai-tools");
  toolsPanel.style.display = toolsPanel.style.display === "none" ? "block" : "none";
});

// Hàm mở công cụ tương ứng
async function openTool(toolName) {
  const queryValue = document.getElementById("query").value.trim();
  if (!queryValue) {
    alert("Vui lòng nhập ý tưởng playlist");
    return;
  }

  try {
    // Ghép thêm dòng chữ trước nội dung
    const textToCopy = "tạo giùm tôi playlist âm nhạc và dùng tính năng tạo hình ảnh để làm bìa đĩa cover cho playlist hình vuông phù hợp với chủ đề" + queryValue;

    // Copy vào clipboard
    await navigator.clipboard.writeText(textToCopy);
    alert("Ý tưởng playlist đã được copy vào clipboard. Bạn chỉ cần paste vào " + toolName);

    // Mở trang tương ứng
    let url = "";
    switch (toolName) {
      case "gemini":
        url = "https://gemini.google.com";
        break;
      case "copilot":
        url = "https://copilot.microsoft.com";
        break;
      case "chatgpt":
        url = "https://chat.openai.com";
        break;
      case "chaton":
        url = "https://chat.chaton.ai/my/main";
      case "deepseek":
        url = "https://chat.deepseek.com";
        break;
    }
    window.open(url, "_blank");
  } catch (err) {
    alert("Không thể copy vào clipboard. Hãy cấp quyền truy cập.");
    console.error(err);
  }
}

// Toggle hiển/ẩn sóng nhạc + iframe
document.getElementById("btn-wave").addEventListener("click", () => {
  const wave = document.getElementById("music-wave");
  const player = document.getElementById("sc-player");
  const currentDisplay = window.getComputedStyle(wave).display;

  if (currentDisplay === "none") {
    // bật sóng và iframe
    wave.style.display = "flex";
    player.style.display = "block"; // hiện iframe
    createBars(139);
  } else {
    // tắt sóng và iframe
    wave.style.display = "none";
    wave.innerHTML = ""; // xoá bar
    player.style.display = "none"; // ẩn iframe
  }
});

// Sinh ra nhiều thanh bar tự động
function createBars(count = 137) {
  const container = document.getElementById("music-wave");
  container.innerHTML = ""; // xoá cũ
  for (let i = 0; i < count; i++) {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.animationDelay = `${i * 0.05}s`; // lệch nhịp cho đẹp
    container.appendChild(bar);
  }
}

// Chọn 1 Playlist ngẫu nhiên
async function loadRandomPlaylist() {
  try {
    const res = await fetch("http://127.0.0.1:8000/random_playlist"); // nhớ khớp cổng với uvicorn
    const data = await res.json();
    console.log("API trả về:", data);

    if (data.url) {
      // gán src cho iframe
      const embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(data.url)}&color=%23ff5500&auto_play=false`;
      const player = document.getElementById("sc-player");
      player.src = embedUrl;
      player.style.display = "block"; // đảm bảo iframe hiện

      // bật sóng nhạc và tạo bar
      const wave = document.getElementById("music-wave");
      wave.style.display = "flex";
      createBars(137);
    } else {
      alert(data.message || "Không tìm thấy playlist");
    }
  } catch (err) {
    console.error("Fetch lỗi:", err);
    alert("Lỗi khi tải playlist ngẫu nhiên");
  }
}

async function loadPlaylist(username, playlist) {
  const res = await fetch(`http://127.0.0.1:8000/feed_soundcloud?username=${username}&playlists=${playlist}`);
  const data = await res.json();
  console.log("API trả về:", data);

  if (data.length > 0) {
    document.getElementById("playlist-title").textContent = data[0].title;
    document.getElementById("playlist-description").innerHTML = data[0].description || "Không có mô tả";
    const iframeSrc = data[0].html.match(/src="([^"]+)"/)[1];
    document.getElementById("sc-player").src = iframeSrc;
  }
}

document.getElementById("btn-desc").addEventListener("click", () => {
  const desc = document.getElementById("playlist-description");
  const currentDisplay = window.getComputedStyle(desc).display;
  desc.style.display = (currentDisplay === "none") ? "block" : "none";
});

// Mở popup khi nhấn nút 🐟
document.addEventListener("DOMContentLoaded", () => {
  // Toggle popup khi nhấn 🐟
  document.getElementById("lyricsBtn").addEventListener("click", () => {
    const popup = document.getElementById("lyricsPopup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
  });

  // Gắn sự kiện cho các siteBtn
  document.querySelectorAll(".siteBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });
});
