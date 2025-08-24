async function showCelebrityInfo() {
  const display = document.getElementById("displayArea");
  display.innerHTML = "";

  // Kiểm tra trình duyệt có hỗ trợ clipboard API không
  if (!navigator.clipboard || !navigator.clipboard.read) {
    alert("⚠️ Trình duyệt của bạn không hỗ trợ clipboard.read(). Hãy dùng Chrome hoặc Edge mới nhất.");
    return;
  }

  try {
    const items = await navigator.clipboard.read();
    let foundImage = false;

    for (const item of items) {
      for (const type of item.types) {
        if (type.startsWith("image/")) {
          const blob = await item.getType(type);
          const url = URL.createObjectURL(blob);

          const title = document.createElement("h1");
          title.textContent = "📸 Celebrity Image";

          const img = document.createElement("img");
          img.src = url;
          img.style.maxWidth = "90%";
          img.style.maxHeight = "80vh";
          img.style.border = "6px solid #7CFC00";
          img.style.boxShadow = "0 0 30px #7CFC00";
          img.style.borderRadius = "12px";
          img.style.marginTop = "20px";

          display.appendChild(title);
          display.appendChild(img);
          foundImage = true;
          break;
        }
      }
      if (foundImage) break;
    }

    if (!foundImage) {
      const text = await navigator.clipboard.readText();

      const title = document.createElement("h1");
      title.textContent = "Celebrity profile you're searching for";
      title.style.color = "#7CFC00";
      title.style.fontSize = "31px";
      title.style.textShadow = "0 0 10px #7CFC00, 0 0 20px #ADFF2F";
      title.style.fontFamily = "'Pacifico', cursive";
      title.style.marginBottom = "20px";

      const content = document.createElement("div");
      content.className = "content";
      content.textContent = text;
      content.style.whiteSpace = "pre-wrap";
      content.style.fontSize = "32px";
      content.style.color = "#FFD700";
      content.style.textShadow = "0 0 10px #FFD700, 0 0 20px #FFA500";
      content.style.textAlign = "center";
      content.style.maxWidth = "90%";

      display.appendChild(title);
      display.appendChild(content);
    }
  } catch (err) {
    alert("❌ Không thể truy cập clipboard. Hãy đảm bảo bạn đã cấp quyền và đang chạy trên HTTPS hoặc localhost.");
    console.error(err);
  }
}
