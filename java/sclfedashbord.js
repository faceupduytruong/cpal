function renderFeed(playlist) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${playlist.title}</h3>
    <p>Tác giả: ${playlist.author_name}</p>
    <div>${playlist.html}</div>
    <a href="${playlist.url}" target="_blank">Xem trên SoundCloud</a>
  `;
  feedContainer.appendChild(card);
}

async function fetchFeed() {
  try {
    const username = document.getElementById("query").value; // chỉ nhập username
    const response = await fetch(`http://127.0.0.1:8000/feed_soundcloud?username=${encodeURIComponent(username)}`);
    const data = await response.json();
    renderFeed(data);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}
