// Đổi màu sắc cho các button gọi app

const style = document.createElement('style');
style.textContent = `

  /* Style chung cho tất cả button */
  button {
    background-color: rgba(255,255,255,0.6); /* nền trong suốt */
    border: 2px solid #4CAF50;     /* viền màu xanh lá */
    color: black;                  /* chữ màu đen */
    padding: 10px 15px;
    font-size: 13px;
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

  /* Startmenu button */
  .btn-startmenu {
    background: linear-gradient(
      to right,
      rgba(0, 128, 0, 0.7),   /* xanh lá */
      rgba(0, 0, 255, 0.7)    /* xanh lam */
    );
    border: 2px solid navy;
    color: black;
  }
  .btn-startmenu:hover {
    background-color: green;
    color: white;
    border: 2px solid blue;
  }

  /* Baisha Search button */
  .btn-baishasearch {
    background: linear-gradient(
      to right,
      rgba(0, 128, 255, 0.7),   /* xanh lam sáng */
      rgba(255, 255, 0, 0.7)    /* vàng */
    );
    border: 2px solid blue;
    color: black;
  }
  .btn-baishasearch:hover {
    background-color: dodgerblue;
    color: white;
    border: 2px solid gold;
  }

  /* Fluentsearch button */
  .btn-fluentsearch {
    background-color: rgba(70, 130, 180, 0.7); /* xanh SteelBlue nhạt */
    border: 2px solid navy;
    color: white;
  }
  .btn-fluentsearch:hover {
    background-color: navy;   /* khi hover nền xanh đậm */
    color: cyan;              /* chữ xanh sáng để nổi bật */
  }

  /* Everything button */
  .btn-everything {
    background: linear-gradient(
      to right,
      rgba(0, 191, 255, 0.7),   /* xanh cyan (DeepSkyBlue) */
      rgba(123, 104, 238, 0.7)  /* tím (MediumSlateBlue) */
    );
    border: 2px solid navy;
    color: black;
  }
  .btn-everything:hover {
    background-color: deepskyblue;
    color: white;
    border: 2px solid slateblue;
  }

  /* Filelocatorpro button */
  .btn-filelocatorpro {
    background: linear-gradient(
      to right,
      rgba(34, 139, 34, 0.7),   /* xanh lá (ForestGreen) */
      rgba(173, 216, 230, 0.7)  /* xanh nhạt (LightBlue) */
    );
    border: 2px solid darkgreen;
    color: black;
  }
  .btn-filelocatorpro:hover {
    background-color: forestgreen;
    color: white;
    border: 2px solid lightgreen;
  }

  /* Duplicate Cleaner button */
  .btn-duplicatecleaner {
    background: linear-gradient(
      to right,
      rgba(255, 99, 71, 0.7),   /* đỏ cam (Tomato) */
      rgba(0, 191, 255, 0.7)    /* xanh cyan (DeepSkyBlue) */
    );
    border: 2px solid crimson;
    color: black;
  }
  .btn-duplicatecleaner:hover {
    background-color: tomato;
    color: white;
    border: 2px solid deepskyblue;
  }

   /* XZdesktop button */
  .btn-xzdesktop {
    background: linear-gradient(
      to right,
      rgba(72, 61, 139, 0.7),   /* tím đậm (DarkSlateBlue) */
      rgba(0, 206, 209, 0.7)    /* xanh ngọc (DarkTurquoise) */
    );
    border: 2px solid indigo;
    color: black;
  }
  .btn-xzdesktop:hover {
    background-color: darkslateblue;
    color: white;
    border: 2px solid turquoise;
  }

  /* Baisha Desktop Manager button */
  .btn-baisha {
    background: linear-gradient(
      to right,
      rgba(255, 215, 0, 0.7),   /* vàng (Gold) */
      rgba(65, 105, 225, 0.7)   /* xanh lam (RoyalBlue) */
    );
    border: 2px solid goldenrod;
    color: black;
  }
  .btn-baisha:hover {
    background-color: royalblue;
    color: white;
    border: 2px solid gold;
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

  /* File Explorer button */
  .btn-fileexplorer {
    background-color: rgba(255, 215, 0, 0.7); /* vàng nhạt (Gold) */
    border: 2px solid royalblue;
    color: black;
  }
  .btn-fileexplorer:hover {
    background-color: royalblue;   /* khi hover nền xanh dương đậm */
    color: yellow;                 /* chữ vàng để nổi bật */
  }

  /* Quicklook button */
  .btn-quicklook {
    background: linear-gradient(
      to right,
      rgba(70, 130, 180, 0.7),   /* xanh lam (SteelBlue) */
      rgba(255, 255, 255, 0.7)   /* trắng */
    );
    border: 2px solid navy;
    color: black;
  }
  .btn-quicklook:hover {
    background-color: steelblue;
    color: white;
    border: 2px solid lightblue;
  }

  /* Wondershare PDFelement button */
  .btn-pdfelement {
    background-color: linear-gradient(
      to right,
      rgba(135, 206, 250, 0.7),   /* xanh dương nhạt (LightSkyBlue) */
      rgba(255, 182, 193, 0.7)    /* hồng cánh sen (LightPink) */
    );
    border: 2px solid white;       /* viền trắng */
    color: black;
  }
  .btn-pdfelement:hover {
    background-color: white;       /* khi hover nền trắng */
    color: deeppink;               /* chữ hồng đậm để nổi bật */
    border: 2px solid lightblue;   /* viền xanh nhạt khi hover */
  }

  /* MPC-HC button */
  .btn-mpchc {
    background-color: rgba(255, 0, 0, 1.7); /* đỏ tươi nhạt */
    border: 2px solid black;
    color: white;
  }
  .btn-mpchc:hover {
    background-color: black;     /* khi hover nền đen tuyền */
    color: red;                  /* chữ đỏ để nổi bật */
  }

  /* GIMP Portable button */
  .btn-gimp {
    background: linear-gradient(
      to right,
      rgba(255, 140, 0, 0.7),   /* cam (DarkOrange) */
      rgba(70, 130, 180, 0.7)   /* xanh lam (SteelBlue) */
    );
    border: 2px solid darkorange;
    color: black;
  }
  .btn-gimp:hover {
    background-color: darkorange;
    color: white;
    border: 2px solid gold;
  }

  /* Fsquirt button */
  .btn-fsquirt {
    background-color: rgba(70, 130, 180, 0.6); /* xanh dương nhạt (SteelBlue) pha xanh nước biển */
    border: 2px solid teal;
    color: white;
  }
  .btn-fsquirt:hover {
    background-color: teal;       /* khi hover nền xanh nước biển đậm */
    color: cyan;                  /* chữ xanh lam để nổi bật */
  }

  /* Kdeconnect button */
  .btn-kdeconnect {
    background: linear-gradient(
      to right,
      rgba(0, 255, 255, 0.7),   /* cyan */
      rgba(138, 43, 226, 0.7)   /* tím (BlueViolet) */
    );
    border: 2px solid white;
    color: black;
  }
  .btn-kdeconnect:hover {
    background-color: cyan;
    color: darkviolet;
    border: 2px solid violet;
  }

  /* Quickshare button */
  .btn-quickshare {
    background: linear-gradient(
      to right,
      rgba(0, 255, 255, 0.7),   /* cyan */
      rgba(255, 105, 180, 0.7)  /* hồng (HotPink) */
    );
    border: 2px solid deeppink;
    color: black;
  }
  .btn-quickshare:hover {
    background-color: cyan;
    color: deeppink;
    border: 2px solid black;
  }

  /* GitHub button */
  .btn-github {
    background-color: rgba(0, 0, 0, 0.2); /* đen tuyền nhạt */
    border: 2px solid black;
    color: orange;
  }
  .btn-github:hover {
    background-color: black;   /* khi hover nền đen tuyền */
    color: #f5f5f5;            /* chữ xám nhạt để nổi bật */
  }

  /* Dropbox button */
  .btn-dropbox {
    background-color: white; /* xanh da trời mạnh (DodgerBlue) */
    border: 2px solid rgba(30, 144, 255, 0.7);
    color: rgba(30, 144, 255, 0.7);
  }
  .btn-dropbox:hover {
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

  /* Mega button */
  .btn-mega {
    background: linear-gradient(
      to right,
      rgba(0, 0, 255, 0.7),   /* xanh lam */
      rgba(220, 20, 60, 0.7)  /* đỏ carmine */
    );
    border: 2px solid rgba(138, 43, 226, 0.6);
    color: white;
  }
  .btn-mega:hover {
    background-color: crimson;
    color: yellow;
    border: 2px solid lightblue;
  }

  /* Fluentreader button */
  .btn-fluentreader {
    background: linear-gradient(
      to right,
      rgba(230, 44, 5, 0.7),   /* xanh dương (DodgerBlue) */
      rgba(255, 255, 255, 0.7)   /* trắng */
    );
    border: 2px solid darkred;
    color: darkblue;
  }
  .btn-fluentreader:hover {
    background-color: dodgerblue;
    color: white;
    border: 2px solid lightblue;
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

  /* Godmode button */
  .btn-godmode {
    background-color: rgba(138, 43, 226, 0.6); /* tím nhạt (BlueViolet) */
    border: 2px solid white;                   /* viền trắng */
    color: yellow;
  }
  .btn-godmode:hover {
    background-color: navy;   /* khi hover nền xanh đậm */
    color: white;             /* chữ trắng để nổi bật */
  }
  
  /* Powershell button */
  .btn-powershell {
    background-color: rgba(0, 0, 128, 0.7); /* xanh dương đậm nhạt */
    border: 2px solid black;
    color: limegreen;
  }
  .btn-powershell:hover {
    background-color: black;   /* khi hover nền đen tuyền */
    color: cyan;               /* chữ xanh sáng để nổi bật */
  }

  /* BleachBit button */
  .btn-bleachbit {
    background-color: rgba(255, 255, 153, 0.6); /* vàng nhạt */
    border: 2px solid gold;
    color: black;
  }
  .btn-bleachbit:hover {
    background-color: gold;     /* khi hover nền vàng đậm */
    color: white;               /* chữ trắng để nổi bật */
  }
 
  /* Defrag button */
  .btn-defrag {
    background: linear-gradient(
      to right,
      rgba(142, 0, 75, 0.7),   /* hồng củ dền (beetroot pink) */
      rgba(216, 191, 216, 0.7) /* tím nhạt (thistle) */
    );
    border: 2px solid purple;   /* viền tím */
    color: white;
  }
  .btn-defrag:hover {
    background: white;          /* khi hover nền trắng */
    color: purple;              /* chữ tím để nổi bật */
    border: 2px solid violet;   /* viền tím nhạt khi hover */
  }

  /* Storage button */
  .btn-storage {
    background: linear-gradient(
      to right,
      rgba(0, 255, 255, 0.7),   /* cyan */
      rgba(192, 192, 192, 0.7)  /* silver */
    );
    border: 2px solid white;
    color: black;
  }
  .btn-storage:hover {
    background-color: silver;
    color: navy;
    border: 2px solid cyan;
  }

  /* Disk Cleanup button */
  .btn-diskcleanup {
    background: linear-gradient(
      to right,
      rgba(135, 206, 250, 0.7),   /* xanh dương nhạt (LightSkyBlue) */
      rgba(0, 128, 128, 0.7)      /* xanh teal */
    );
    border: 2px solid teal;
    color: black;
  }
  .btn-diskcleanup:hover {
    background-color: lightseagreen;
    color: white;
    border: 2px solid aqua;
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

  /* Startup button */
  .btn-startup {
    background: linear-gradient(
      to right,
      rgba(50, 205, 50, 0.7),   /* xanh lá sáng (LimeGreen) */
      rgba(255, 215, 0, 0.7)    /* vàng (Gold) */
    );
    border: 2px solid orange;
    color: black;
  }
  .btn-startup:hover {
    background-color: gold;
    color: darkgreen;
    border: 2px solid lime;
  }

  /* Installedapps button */
  .btn-installedapps {
    background: linear-gradient(
      to right,
      rgba(70, 130, 180, 0.7),   /* xanh lam (SteelBlue) */
      rgba(192, 192, 192, 0.7)   /* bạc (Silver) */
    );
    border: 2px solid rgba(173, 255, 47, 0.6);
    color: black;
  }
  .btn-installedapps:hover {
    background-color: silver;
    color: navy;
    border: 2px solid lightblue;
  }

  /* Telegram button */
  .btn-telegram {
    background-color: rgba(0, 191, 255, 0.7); /* xanh dương tươi (DeepSkyBlue) */
    border: 2px solid navy;
    color: white;
  }
  .btn-telegram:hover {
    background-color: navy;   /* khi hover nền xanh đậm */
    color: cyan;              /* chữ xanh sáng để nổi bật */
  }

  /* Copilot button */
  .btn-copilot {
    background-color: rgba(216, 191, 216, 0.7); /* tím nhạt (thistle) */
    border: 2px solid #FFC0CB; /* vàng ửng hồng (pinkish gold) */
    color: black;
  }
  .btn-copilot:hover {
    background-color: gold;     /* khi hover nền vàng đậm */
    color: purple;              /* chữ tím để nổi bật */
  }

  /* Xzaitalk button */
  .btn-xzaitalk {
    background-color: rgba(0, 228, 128, 0.6); /* xanh teal nhạt */
    border: 2px solid yellow;
    color: white;
  }
  .btn-xzaitalk:hover {
    background-color: darkgreen;   /* khi hover nền xanh đậm */
    color: yellow;                 /* chữ vàng để nổi bật */
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

  /* Fcportables button */
  .btn-fcportables {
    background: linear-gradient(
      to right,
      rgba(0, 0, 139, 0.7),   /* xanh chàm (DarkBlue) */
      rgba(0, 255, 255, 0.7)  /* cyan */
    );
    border: 2px solid cyan;  /* viền trắng */
    color: white;
  }
  .btn-fcportables:hover {
    background-color: cyan;   /* khi hover nền cyan */
    color: darkblue;          /* chữ xanh chàm để nổi bật */
    border: 2px solid lightcyan; /* viền cyan nhạt khi hover */
  }
  
`;
document.head.appendChild(style);
