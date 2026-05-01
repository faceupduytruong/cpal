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

async function fetchTagPlaylists(tag) {
  try {
    const url = `http://127.0.0.1:8000/tag_playlists?tag=${encodeURIComponent(tag)}`;
    const response = await fetch(url);
    const data = await response.json();

    const feed = document.getElementById("feed");
    feed.innerHTML = "";

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
    document.getElementById("feed").innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}

async function createAIPlaylist() {
  const queryValue = document.getElementById("query").value.trim();
  const response = await fetch(`http://127.0.0.1:8000/ai_playlist?query=${encodeURIComponent(queryValue)}`);
  const data = await response.json();

  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.title}</h3>
      ${item.html}
    `;
    feed.appendChild(card);
  });
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
