function renderFeed(playlist) {
  const feedContainer = document.getElementById("feed");
  feedContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "card";

  // Nội dung text
  card.innerHTML = `
    <h3>${playlist.title}</h3>
    <p>Tác giả: ${playlist.author_name}</p>
    <img src="${playlist.thumbnail_url}" alt="${playlist.title}" style="max-width:200px;"/>
    <a href="${playlist.author_url}" target="_blank">Xem trên SoundCloud</a>
  `;

  // Thêm iframe từ playlist.html
  const playerWrapper = document.createElement("div");
  playerWrapper.innerHTML = playlist.html; // chèn iframe
  card.appendChild(playerWrapper);

  feedContainer.appendChild(card);
}
