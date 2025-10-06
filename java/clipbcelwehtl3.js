<!-- 👉 Tạo trang web html hiển thị nội dung trong Clipboard -->

async function showCelebrityInfo() {
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
          background-image: url('https://getwallpapers.com/wallpaper/full/b/3/6/1255549-most-popular-black-wallpaper-1920x1080-images.jpg'); /* Đường dẫn đến hình ảnh */
          background-size: cover;        /* Phủ kín toàn bộ màn hình */
          background-repeat: no-repeat;  /* Không lặp lại hình ảnh */
          background-position: center center; /* Căn giữa cả chiều ngang và dọc */
          background-attachment: fixed;  /* Giữ hình nền cố định khi cuộn trang */
          margin: 0;                     /* Loại bỏ khoảng trắng mặc định */
          height: 100vh;                 /* Đảm bảo body cao bằng chiều cao cửa sổ */
  }

/* Chrome, Edge */
body::-webkit-scrollbar {
  width: 5px;
}
body::-webkit-scrollbar-track {
background: rgba(30, 30, 30, 0.3);
backdrop-filter: blur(10px);
}
body::-webkit-scrollbar-thumb {
  box-shadow: 0 4px 30px rgba(0, 128, 0, 0.3);
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.4),
    rgba(173, 255, 47, 0.6),
    rgba(60, 179, 113, 0.8),
    rgba(0, 128, 0, 1)
  );
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px); /* thêm vào đây */
}
          h1 {
          color: #7CFC00; /* Màu xanh đọt chuối rực rỡ */
          text-align: center;
          font-size: 31px;
          white-space: nowrap; /* Không xuống hàng */
          overflow: hidden; /* Ẩn phần vượt quá cửa sổ */
          text-shadow: 0 0 10px #7CFC00, 0 0 20px #ADFF2F; /* Hiệu ứng ánh sáng */
          font-family: 'Pacifico', cursive; /* Font uốn lượn mềm mại */
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


<!-- 👉 Nhúng js cho việc dropzone và hiển thị clipboard -->
<script src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@b33f827/java/imgdrpzonare1.js"></script>

<!-- 👉 Nhúng js cho việc dropzone và hiển thị clipboard -->
<script src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal@7e05c66/java/imgdrpzonare2.js"></script>

<div class="content">${text}</div>


      </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  openRightHalfPopup(url, "CelebrityInfo", window.innerWidth, 745);
}

