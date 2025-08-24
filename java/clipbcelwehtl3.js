<!-- 👉 Tạo trang web html hiển thị nội dung trong Clipboard -->

async function showCelebrityInfo() {
  try {
    const items = await navigator.clipboard.read();

    let isImage = false;
    for (const item of items) {
      for (const type of item.types) {
        if (type.startsWith("image/")) {
          const blob = await item.getType(type);
          const url = URL.createObjectURL(blob);

          const htmlContent = `
            <html>
              <head>
                <title>📸 Celebrity Image</title>
                <style>
                  body {
                    background-color: #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                  }
                  img {
                    max-width: 90%;
                    max-height: 90%;
                    border: 6px solid #7CFC00;
                    box-shadow: 0 0 30px #7CFC00;
                    border-radius: 12px;
                  }
                </style>
              </head>
              <body>
                <img src="${url}" alt="Celebrity Image" />
              </body>
            </html>
          `;

          const blobPage = new Blob([htmlContent], { type: "text/html" });
          const pageUrl = URL.createObjectURL(blobPage);
          openRightHalfPopup(pageUrl, "CelebrityImage", window.innerWidth, 700);
          isImage = true;
          break;
        }
      }
      if (isImage) break;
    }

    if (!isImage) {
      const text = await navigator.clipboard.readText();
      const htmlContent = `
        <html>
          <head>
            <title>Celebrity profile you're searching for</title>
            <style>
              body {
                margin: 0;
                padding: 40px;
                background-color: rgba(0, 0, 0, 0.9);
                color: white;
                font-family: Arial, sans-serif;
                background-image: url('https://getwallpapers.com/wallpaper/full/b/3/6/1255549-most-popular-black-wallpaper-1920x1080-images.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                background-attachment: fixed;
                height: 100vh;
              }
              h1 {
                color: #7CFC00;
                text-align: center;
                font-size: 31px;
                text-shadow: 0 0 10px #7CFC00, 0 0 20px #ADFF2F;
                font-family: 'Pacifico', cursive;
              }
              .content {
                white-space: pre-wrap;
                font-size: 40px;
                margin-top: 20px;
                color: #FFD700;
                text-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500;
              }
            </style>
          </head>
          <body>
            <h1>Celebrity profile you're searching for</h1>
            <div class="content">${text}</div>
          </body>
        </html>
      `;

      const blob = new Blob([htmlContent], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      openRightHalfPopup(url, "CelebrityInfo", window.innerWidth, 700);
    }
  } catch (err) {
    alert("⚠️ Không thể truy cập clipboard. Trình duyệt không hỗ trợ hoặc chưa cấp quyền.");
    console.error(err);
  }
}

// Hàm mở popup bên phải màn hình
function openRightHalfPopup(url, name, width, height) {
  const left = width / 2;
  window.open(url, name, `width=${width / 2},height=${height},left=${left},top=100`);
}