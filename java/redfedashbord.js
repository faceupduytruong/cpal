function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  feed.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${post.title || "Không có tiêu đề"}</h3>
      <p>🔥 Score: ${post.score ?? 0}</p>
      <p class="summary">${post.summary || "Không có nội dung tóm tắt"}</p>
      <a href="${post.url}" target="_blank">Xem trên Reddit</a>
    `;
    feedContainer.appendChild(card);
  });
}

async function fetchFeed() {
  try {
    // Lấy query từ ô input
    const query = document.getElementById("query").value.trim();

    // Nếu không nhập gì thì mặc định lấy "reddit"
    const qParam = query !== "" ? query : "reddit";

    // Gọi API với query
    const response = await fetch(`http://127.0.0.1:8000/feed?q=${encodeURIComponent(qParam)}`);
    const data = await response.json();

    // Render dữ liệu
    renderFeed(data.feed);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}

// 👉 Gắn sự kiện cho nút Search khi DOM đã load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".search-box button").addEventListener("click", fetchFeed);
});
