import os

# Hỏi người dùng nhập đường dẫn thư mục
folder_path = input("Nhập đường dẫn thư mục cần liệt kê: ").strip()
folder_path = os.path.normpath(folder_path)  # tự động đổi / hoặc \ về dạng chuẩn

# Nếu người dùng không nhập gì thì thoát
if not folder_path:
    print("❌ Bạn chưa nhập đường dẫn!")
    exit()

output_file = "C:/Users/Admin/OneDrive/Desktop/index.html"

with open(output_file, "w", encoding="utf-8") as f:
    f.write("""<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <title>Thư mục của Nguyễn</title>

  <!-- Font Pacifico -->
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">

  <!-- Scrollbar xanh -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/css/wholgrescrlbarstyl.css">

  <!-- Hiệu ứng glow -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/css/kfrainbowglowefft.css">

  <!-- JS popup vị trí -->
  <script type="module" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/java/popriglefhalf.js"></script>

  <script type="module" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/java/chawalresou.js"></script>
  <script type="module" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/java/chawalwood.js"></script>
  <script type="module" src="https://cdn.jsdelivr.net/gh/faceupduytruong/cpal/java/chawalmxkt.js"></script>

  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      background: transparent;
      position: relative;
      z-index: 1;
    }
    video.bg-video {
      position: fixed; top: 0; left: 0;
      width: 100%; height: 100%;
      object-fit: cover; z-index: -1;
    }
    h1 {
      text-align: center;
      color: #ffffff;
      margin-top: -50px;
      font-family: 'Pacifico', cursive;
      text-shadow: 0 0 5px #000;
    }
    ul {
      list-style: none;
      padding-left: 0;
      color: white;
    }
    li {
      margin-bottom: 8px;
    }
    strong {
      color: #ffffff;
      animation: glowPulse 7s infinite;
      text-shadow: 2px 2px 0 white, -2px -2px 0 white;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      display: block;
      width: fit-content;
      margin: 0 auto;
      animation: glowPulse 7s infinite;
      text-shadow: 2px 2px 0 white, -2px -2px 0 white;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <!-- Video nền -->
  <video id="bgVideo" autoplay muted loop playsinline class="bg-video"
    src="https://assets.mixkit.co/videos/4855/4855-720.mp4"></video>

  <h1>📁 Danh sách toàn bộ file và thư mục con</h1>
  <ul>
""")

    for root, dirs, files in os.walk(folder_path):
        relative_root = os.path.relpath(root, folder_path)
        f.write(f"<li><strong>📂 {relative_root}</strong><ul>")
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, folder_path).replace("\\", "/")
            f.write(f"<li><a href='{rel_path}' target='_blank'>{file}</a></li>")
        f.write("</ul></li>")

    f.write("""
  </ul>
</body>
</html>
""")

print("✅ Đã tạo index.html với style đẹp cho tiêu đề!")
