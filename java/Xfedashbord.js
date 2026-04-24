function renderFeed(feed) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  feed.forEach(tweet => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>@${tweet.username || "unknown"}</h3>
      <p>🕒 ${new Date(tweet.created_at).toLocaleString()}</p>
      <p class="summary">${tweet.text}</p>
      <p>❤️ Likes: ${tweet.likes ?? 0} 🔁 Retweets: ${tweet.retweets ?? 0}</p>
      <a href="${tweet.url}" target="_blank">Xem trên Twitter</a>
    `;

    feedContainer.appendChild(card);
  });
}

async function fetchFeed() {
  try {
    const query = document.getElementById("query").value; // lấy từ ô input
    const response = await fetch(`http://127.0.0.1:8000/feed_twitter?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    renderFeed(data.feed);
  } catch (error) {
    console.error("Lỗi khi lấy feed:", error);
  }
}

fetchFeed();
