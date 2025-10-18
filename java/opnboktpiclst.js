  // Mở danh sách chủ đề của sách
  function openTopicList() {
    const htmlContent = `
      <html>
        <head>
          <title>Danh sách chủ đề</title>
          <style>
            body {
              font-family: sans-serif;
              padding: 0px;
              margin: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              color: white;
              text-align: center;
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

            h2 {
              font-size: 2em;
              margin-bottom: 10px;
              text-shadow: 0 0 5px rgba(0,0,0,0.5);
            }

            .grid {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
              gap: 10px;
              max-width: 1200px;
              width: 100%;
              padding: 0;
              list-style: none;
            }

            .grid li {
              margin-bottom: 8px;
              background: rgba(0,0,0,0.4);
              padding: 6px 10px;
              border-radius: 6px;
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
          </style>
          </head>
        <body>
          <h2>📖 Danh sách chủ đề 📖</h2>
          <ul class="grid">
            ${suggestions.map(item => `<li>${item}</li>`).join('')}
          </ul>

          <video id="bgVideo" autoplay muted loop playsinline src="https://res.cloudinary.com/dq7c3wdhf/video/upload/f_auto,q_auto/v1760023385/37-2888a17a978fd8825c521110876fbca5-1920x1080_us9e0z.mp4"></video>
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    openRightHalfPopup(url, "openTopicList", window.innerWidth, 745);
  }
