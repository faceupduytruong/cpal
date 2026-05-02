async function fetchFeed(username, playlists) {
  try {
    const url = `http://127.0.0.1:8000/feed_soundcloud?username=${username}&playlists=${playlists}`;
    const response = await fetch(url);
    const data = await response.json();

    const feed = document.getElementById("feed");
    feed.innerHTML = "";

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = item.html;
      feed.appendChild(card);
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
    img: "https://al.sndcdn.com/labs-94f3878c-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9EUk9QUwp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjMxMTEwOTY0MiIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMTA0MjExODQiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoyMzA5OTE0NzMwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MjMxMDIxMTEyMSIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjIzMTExNTA5MTYiCg%3D%3D",
    url: "https://soundcloud.com/discover/sets/new-for-you::nhanhlaxanh"
  },
  {
    title: "Your Mix 10",
    img: "https://al.sndcdn.com/labs-f62c5564-0-t500x500.jpg?q=YXJ0d29ya190eXBlOiBEQUlMWV9NSVhfUElMTF8xMAp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MzMwODQxNTEwIgp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6NDQ3ODU5OTM4Igp1cm5zOiAic291bmRjbG91ZDp0cmFja3M6MTkzNjc5MjMzNyIKdXJuczogInNvdW5kY2xvdWQ6dHJhY2tzOjExOTIyODU5NzUiCnVybnM6ICJzb3VuZGNsb3VkOnRyYWNrczoxMTIyNjYwNDMzIgo%3D",
    url: "https://soundcloud.com/discover/sets/your-moods:33939568:10"
  }
  // thêm các link khác ở đây nếu cần
];

// Danh sách alias cho discover
const discoverAliases = ["discover", "newforyou", "recommend", "trend", "hot", "suggested", "nóng", "mới nhất", "nhạc mới", "mới", "lạ", "khám phá", "khuyên", "xu hướng", "đề xuất", "mix", "trộn"];

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
      `;
      feed.appendChild(card);
    });
  } catch (error) {
    feed.innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}

async function createAIPlaylist() {
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
      `;
      feed.appendChild(card);
    });
  } catch (error) {
    feed.innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}

// Hàm search chính: tự động phân biệt
async function searchSoundcloud() {
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
