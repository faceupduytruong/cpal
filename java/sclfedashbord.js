async function fetchFeed() {
  try {
    // Lấy giá trị từ ô input
    const queryValue = document.getElementById("query").value.trim();
    if (!queryValue) {
      alert("Vui lòng nhập username,playlist");
      return;
    }

    // Tách username và playlists
    const parts = queryValue.split(",");
    const username = parts[0];
    const playlists = parts.slice(1).join(","); // nếu có nhiều playlist

    // Gọi API
    const url = `http://127.0.0.1:8000/feed_soundcloud?username=${username}&playlists=${playlists}`;
    const response = await fetch(url);
    const data = await response.json();

    const feed = document.getElementById("feed");
    feed.innerHTML = "";

    // Render từng playlist thành card
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        ${item.html}
        <h3>${item.title}</h3>
        <p><strong>Playlist Creator:</strong> <a href="${item.author_url}" target="_blank">${item.author_name}</a></p>
        <p><strong>Provider:</strong> <a href="${item.provider_url}" target="_blank">${item.provider_name}</a></p>
      `;
      feed.appendChild(card);
    });
  } catch (error) {
    document.getElementById("feed").innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error(error);
  }
}
