function renderFeed(playlist) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${playlist.title}</h3>
    <div class="summary">${playlist.author_name}</div>
    <div>${playlist.provider_name}</div>
    <div>${playlist.html}</div>
    <a href="${playlist.url}" target="_blank">Xem trên SoundCloud</a>
  `;

  feedContainer.appendChild(card);
}

async function fetchFeed() {
  try {
    const query = document.getElementById("query").value; // nhập URL playlist
    const response = await fetch(`http://127.0.0.1:8000/feed_soundcloud?url=${encodeURIComponent(query)}`);
    const data = await response.json();
    renderFeed(data);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}
