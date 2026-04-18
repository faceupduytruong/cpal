// Tạo một thẻ <style> và chèn vào <head>

const style = document.createElement('style');
style.textContent = `

  /* Style chung cho tất cả button */
  button {
    background-color: rgba(255,255,255,0.6); /* nền trong suốt */
    border: 2px solid #4CAF50;     /* viền màu xanh lá */
    color: black;                /* chữ màu đen */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;            /* bo góc */
    transition: 0.3s;
    }

  /* Hiệu ứng hover */
  button:hover {
    background-color: #4CAF50;     /* khi hover nền xanh */
    color: white;                  /* chữ trắng */
    }

  .button-container {
    display: flex;
    flex-wrap: wrap;          /* tự xuống hàng khi hết chỗ */
    gap: 12px;                /* khoảng cách giữa các nút */
    justify-content: center;  /* căn giữa theo chiều ngang */
    margin-top: 0px;
    }

  /* Notepad button */
  .btn-notepad {
    background-color: rgba(0, 0, 139, 0.6);
    border: 2px solid blue;
    color: white;
  }
  .btn-notepad:hover {
    background-color: blue;
    color: yellow;
  }

  /* Calculator button */
  .btn-calculator {
    background-color: rgba(0, 150, 139, 0.6);
    border: 2px solid cyan;
    color: white;
  }
  .btn-calculator:hover {
    background-color: cyan;
    color: darkblue;
  }

  /* Fsquirt button */
  .btn-fsquirt {
    background-color: rgba(70, 130, 180, 0.6); /* xanh dương nhạt (SteelBlue) pha xanh nước biển */
    border: 2px solid teal;
    color: white;
  }
  .btn-fsquirt:hover {
    background-color: teal;       /* khi hover nền xanh nước biển đậm */
    color: cyan;                /* chữ vàng để nổi bật */
  }

  /* Microsoft Store button */
  .btn-store {
    background-color: rgba(199, 21, 133, 0.6); /* hồng sen đậm nhạt (MediumVioletRed) */
    border: 2px solid deeppink;
    color: white;
  }
  .btn-store:hover {
    background-color: deeppink;   /* khi hover nền hồng sen đậm */
    color: black;                /* chữ vàng để nổi bật */
  }

  /* Check for Update button */
  .btn-update {
    background-color: rgba(255, 182, 193, 0.6); /* hồng nhạt (LightPink) */
    border: 2px solid pink;
    color: black;
  }
  .btn-update:hover {
    background-color: pink;     /* khi hover nền hồng đậm hơn */
    color: white;               /* chữ trắng để nổi bật */
  }

  /* PC Manager button */
  .btn-pcmanager {
    background-color: rgba(0, 128, 128, 0.6); /* xanh teal nhạt (pha xanh lá + xanh dương) */
    border: 2px solid teal;
    color: white;
  }
  .btn-pcmanager:hover {
    background-color: teal;     /* khi hover nền xanh teal đậm */
    color: cyan;              /* chữ vàng để nổi bật */
  }
  
  /* BleachBit button */
  .btn-bleach {
    background-color: rgba(255, 255, 153, 0.6); /* vàng nhạt */
    border: 2px solid gold;
    color: black;
  }
  .btn-bleach:hover {
    background-color: gold;     /* khi hover nền vàng đậm */
    color: white;               /* chữ trắng để nổi bật */
  }

  /* Avast button */
  .btn-avast {
    background-color: rgba(255,165,0,0.6);
    border: 2px solid orange;
    color: black;
  }
  .btn-avast:hover {
    background-color: orange;
    color: white;
  }

  /* Files (Store App) button */
  .btn-files {
    background-color: rgba(139, 69, 19, 0.6); /* nâu sen đậm nhạt (SaddleBrown) */
    border: 2px solid sienna;
    color: white;
  }
  .btn-files:hover {
    background-color: sienna;   /* khi hover nền nâu sen đậm */
    color: yellow;              /* chữ vàng để nổi bật */
  }

  /* Internet Download Manager button */
  .btn-idm {
    background-color: rgba(173, 255, 47, 0.6); /* xanh lá tươi pha vàng (GreenYellow) */
    border: 2px solid limegreen;
    color: black;
  }
  .btn-idm:hover {
    background-color: limegreen;   /* khi hover nền xanh lá đậm pha vàng */
    color: white;                  /* chữ trắng để nổi bật */
  }

  /* Babylon.js Sandbox button */
  .btn-babylon {
    background-color: rgba(128, 0, 128, 0.6); /* tím nhạt */
    border: 2px solid purple;
    color: white;
  }
  .btn-babylon:hover {
    background-color: purple;   /* khi hover nền tím đậm */
    color: pink;              /* chữ vàng để nổi bật */
  }

  /* GitHub button */
  .btn-github {
    background-color: rgba(0, 0, 0, 0.2); /* đen tuyền nhạt */
    border: 2px solid black;
    color: white;
  }
  .btn-github:hover {
    background-color: black;   /* khi hover nền đen tuyền */
    color: #f5f5f5;            /* chữ xám nhạt để nổi bật */
  }

  /* SoundCloud button */
  .btn-soundcloud {
    background-color: rgba(255, 102, 0, 0.6); /* cam nhạt */
    border: 2px solid orange;
    color: white;
  }
  .btn-soundcloud:hover {
    background-color: orange;   /* khi hover nền cam đậm */
    color: black;               /* chữ đen để nổi bật */
  }

  /* YouTube button */
  .btn-youtube {
    background-color: rgba(255, 0, 0, 0.6); /* đỏ nhạt */
    border: 2px solid red;
    color: white;
  }
  .btn-youtube:hover {
    background-color: red;   /* khi hover nền đỏ đậm */
    color: yellow;           /* chữ vàng để nổi bật */
  }

  /* Dropbox button */
  .btn-box {
    background-color: white; /* xanh da trời mạnh (DodgerBlue) */
    border: 2px solid rgba(30, 144, 255, 0.7);
    color: white;
  }
  .btn-box:hover {
    background-color: dodgerblue;         /* khi hover nền đỏ */
    color: white;                         /* chữ xanh da trời nổi bật */
  }

  /* Box button */
  .btn-box {
    background-color: rgba(30, 144, 255, 0.7); /* xanh da trời mạnh (DodgerBlue) */
    border: 2px solid white;
    color: white;
  }
  .btn-box:hover {
    background-color: white;         /* khi hover nền đỏ */
    color: dodgerblue;             /* chữ xanh da trời nổi bật */
  }

  /* Karan button */
  .btn-karanpc {
    background-color: rgba(0, 128, 0, 0.6); /* xanh lá nhạt */
    border: 2px solid green;
    color: white;
  }
  .btn-karanpc:hover {
    background-color: green;   /* khi hover nền xanh lá đậm */
    color: yellow;             /* chữ vàng để nổi bật */
  }
  
`;
document.head.appendChild(style);
