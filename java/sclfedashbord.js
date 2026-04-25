function renderFeed(playlist) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  // Hiển thị các trường text từ JSON
  card.innerHTML = `
    <h3>${playlist.title}</h3>
    <p><strong>Tác giả:</strong> ${playlist.author_name}</p>
    <p><strong>Mô tả:</strong> ${playlist.description}</p>
    <img src="${playlist.thumbnail_url}" alt="${playlist.title}" style="max-width:200px;"/>
    <p><strong>Provider:</strong> ${playlist.provider_name}</p>
    <a href="${playlist.author_url}" target="_blank">Xem trên SoundCloud</a>
  `;

  feedContainer.appendChild(card);
}

async function fetchFeed() {
  try {
    const username = document.getElementById("query").value;
    const response = await fetch(`http://127.0.0.1:8000/feed_soundcloud?username=${encodeURIComponent(username)}`);
    const data = await response.json();
    console.log("Data nhận được:", data); // kiểm tra dữ liệu
    renderFeed(data); // truyền object trực tiếp
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}
