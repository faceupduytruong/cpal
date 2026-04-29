function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  feed.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p>🔥 Score: ${post.score ?? 0}</p>
      <p class="summary">${post.summary || "Không có nội dung tóm tắt"}</p>
      <a href="${post.url}" target="_blank">Xem trên Reddit</a>
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

fetchFeed();

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // lưu trạng thái vào localStorage để nhớ khi reload
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// khi load trang, kiểm tra trạng thái đã lưu
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
