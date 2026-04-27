function loadFeed(query) {
  fetch(`/feed?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      renderFeed(data.feed || []);
    })
    .catch(err => {
      console.error("Lỗi khi tải feed:", err);
    });
}

function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  if (feed.length === 0) {
    feedContainer.innerHTML = "<p>Không có dữ liệu phù hợp.</p>";
    return;
  }

  feed.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const megaUrl = item.folder_id ? `https://mega.nz/fm/${item.folder_id}` : "#";

    card.innerHTML = `
      <h3>${item.path}</h3>
      <p>📂 Loại: ${item.type}</p>
      <p>📦 Dung lượng: ${item.size}</p>
      <p>📅 Ngày: ${item.date}</p>
      <p>ID file: ${item.id}</p>
      ${item.folder_id ? `<a href="${megaUrl}" target="_blank">Xem thêm trên Mega</a>` : ""}
    `;
    feedContainer.appendChild(card);
  });
}

async function fetchFeed() {
  try {
    const query = document.getElementById("query").value; // lấy từ ô input
    const response = await fetch(`http://127.0.0.1:8000/feed?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    renderFeed(data.feed);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}
