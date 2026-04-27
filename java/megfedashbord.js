function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";
  
  feed.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    // giả sử bạn muốn dẫn tới mega.nz bằng ID
    const megaUrl = `https://mega.nz/file/${item.id}`;

    card.innerHTML = `
      <h3>${item.path}</h3>
      <p>📂 Loại: ${item.type}</p>
      <p>📦 Dung lượng: ${item.size}</p>
      <p>📅 Ngày: ${item.date}</p>
      <p>ID: ${item.id}</p>
      <a href="${megaUrl}" target="_blank">Xem thêm trên Mega</a>
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
