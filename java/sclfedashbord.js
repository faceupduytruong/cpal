function renderFeed(playlist) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  // Chèn đầy đủ thông tin từ oEmbed
  card.innerHTML = `
    <h3>${playlist.title}</h3>
    <p>Tác giả: ${playlist.author_name}</p>
    <img src="${playlist.thumbnail_url}" alt="${playlist.title}" style="max-width:200px;"/>
    ${playlist.html} <!-- iframe player -->
    <a href="${playlist.author_url}" target="_blank">Xem trên SoundCloud</a>
  `;

  feedContainer.appendChild(card);
}

async function fetchFeed() {
  try {
    const username = document.getElementById("query").value;
    const response = await fetch(`http://127.0.0.1:8000/feed_soundcloud?username=${encodeURIComponent(username)}`);
    const data = await response.json();
    renderFeed(data);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}
