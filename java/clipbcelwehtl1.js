  <!-- 👉 Tạo trang web html hiển thị nội dung trong Clipboard -->

async function showCelebrityInfo() {
  const text = await navigator.clipboard.readText();
const htmlContent = `
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Celebrity profile you're searching for</title>
<style>
  body {
    margin: 0;
    padding: 40px;
    font-family: Arial, sans-serif;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
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

  video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
    transition: opacity 1s ease-in-out;
  }

  h1 {
    position: absolute;
    top: 7%; /* Điều chỉnh độ cao tại đây */
    left: 50%;
    transform: translate(-50%, -50%);
    color: #00ffcc;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    font-size: 30px;
   }

  .content {
    white-space: pre-wrap;
    font-size: 25px;
    margin-top: 95px;
    background-color: rgba(0, 0, 0, 0.6); /* Nền đen mờ */
    padding: 20px;
    border-radius: 10px;
  }
</style>
  </head>
  <body>
    <h1>Celebrity profile you're searching for</h1>
    <div class="content">${text}</div>

<video
  id="bgVideo"
  autoplay
  muted
  loop
  playsinline
src="https://res.cloudinary.com/dq7c3wdhf/video/upload/f_auto,q_auto/v1760062745/37-dcdbda88d9c3d5b5c0c946be17791415-1920x1080_wm9shm.mp4">
</video>

  </body>
</html>
`;
  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const screenWidth = window.innerWidth;
  const popupWidth = Math.floor(screenWidth); // nửa phải
  const popupHeight = 745;
  const left = screenWidth + popupWidth;
  const top = Math.floor((window.innerHeight - popupHeight));

  window.open(
    url,
    "_blank",
    `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`
  );

}

