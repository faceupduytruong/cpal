  async function loadFeed() {
    try {
      const response = await fetch("http://127.0.0.1:8000/feed_soundcloud?username=nhanhlaxanh");
      const data = await response.json();

      const card = document.getElementById("soundcloud-card");

      // Tạo HTML hiển thị toàn bộ key-value
      let html = `<h2>SoundCloud Feed</h2>`;
      html += `<img src="${data.thumbnail_url}" alt="Thumbnail" style="max-width:200px;border-radius:8px;">`;

      html += `<ul style="list-style:none;padding:0;">`;
      for (const key in data) {
        let value = data[key];

        // Nếu là URL thì hiển thị link
        if (typeof value === "string" && value.startsWith("http")) {
          value = `<a href="${value}" target="_blank">${value}</a>`;
        }

        html += `<li><strong>${key}:</strong> ${value}</li>`;
      }
      html += `</ul>`;

      // Nếu có author_url thì nhúng iframe
      if (data.author_url) {
        html += `<iframe src="${data.author_url}" width="${data.width}" height="${data.height}" frameborder="0"></iframe>`;
      }

      card.innerHTML = html;
    } catch (error) {
      document.getElementById("soundcloud-card").innerHTML = "<p>Lỗi tải dữ liệu.</p>";
      console.error(error);
    }
  }

  loadFeed();
