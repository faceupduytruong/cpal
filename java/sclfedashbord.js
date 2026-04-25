function renderFeed(data) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${data.title}</h3>
    <img src="${data.thumbnail_url}" alt="${data.title}" />
    <p><strong>Tác giả:</strong> ${data.author_name}</p>
    <p><strong>Mô tả:</strong> ${data.description}</p>
    <p><strong>Provider:</strong> ${data.provider_name}</p>
    <a href="${data.author_url}" target="_blank">Xem trên SoundCloud</a>
  `;

  feedContainer.appendChild(card);
}

async function fetchFeed() {
  try {
    const username = document.getElementById("query").value.trim();
    if (!username) {
      alert("Vui lòng nhập username SoundCloud");
      return;
    }

    const response = await fetch(
      `http://127.0.0.1:8000/feed_soundcloud?username=${encodeURIComponent(username)}`
    );
    if (!response.ok) {
      throw new Error("Không lấy được dữ liệu từ server");
    }

    const data = await response.json();
    console.log("Data nhận được:", data);
    renderFeed(data);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}
