async function loadFeed() {
  try {
    const response = await fetch("http://127.0.0.1:8000/feed_soundcloud?username=nhanhlaxanh");
    console.log("HTTP status:", response.status);
    const text = await response.text();
    console.log("Raw response:", text);

    const data = JSON.parse(text); // parse thủ công để dễ debug
    console.log("Parsed JSON:", data);

    const card = document.getElementById("soundcloud-card");
    card.innerHTML = `
      <img src="${data.thumbnail_url}" alt="Thumbnail">
      <h2>${data.title}</h2>
      <p>${data.description}</p>
      <p><strong>Tác giả:</strong> <a href="${data.author_url}" target="_blank">${data.author_name}</a></p>
      <p><strong>Provider:</strong> <a href="${data.provider_url}" target="_blank">${data.provider_name}</a></p>
      ${data.html}  <!-- nhúng player đúng chuẩn -->
    `;

  } catch (error) {
    document.getElementById("soundcloud-card").innerHTML = "<p>Lỗi tải dữ liệu.</p>";
    console.error("Chi tiết lỗi:", error);
  }
}

loadFeed();
