// Tạo phần tử style và thêm vào head
const style2 = document.createElement('style');
style2.textContent = `
#imageZone2 {
  width: 600px;
  height: 320px;
  border: 2px dashed #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f0f0f0;
  margin: 65px auto; /* căn giữa theo chiều ngang */
}

#imageZone2 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;
document.head.appendChild(style2);

// Tạo phần tử tiêu đề và vùng chứa hình ảnh
const heading2 = document.createElement('h2');
heading2.textContent = "Summary of the song's content";
// Thêm style để căn giữa và font chữ uốn lượn
heading2.style.textAlign = 'center';
heading2.style.marginTop = '30px';
heading2.style.fontFamily = '"Brush Script MT", "Dancing Script", cursive';
heading2.style.fontSize = '28px'; // kích thước nhỏ vừa phải
heading2.style.color = '#fff'; // màu chữ trắng
heading2.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)'; // bóng xám mờ
document.body.appendChild(heading2);

// Tạo vùng chứa hình ảnh mới với ID khác
const imageZone2 = document.createElement('div');
imageZone2.id = 'imageZone2';
imageZone2.textContent = 'Thả hoặc dán hình ảnh vào đây';
document.body.appendChild(imageZone2);

// Xử lý kéo hình ảnh
imageZone2.addEventListener('dragover', (e) => {
  e.preventDefault();
  imageZone2.style.borderColor = '#00aaff';
});

imageZone2.addEventListener('dragleave', () => {
  imageZone2.style.borderColor = '#aaa';
});

imageZone2.addEventListener('drop', (e) => {
  e.preventDefault();
  imageZone2.style.borderColor = '#aaa';

  const imageUrl = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
  if (imageUrl && imageUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
    const img = document.createElement('img');
    img.src = imageUrl;
    imageZone2.innerHTML = '';
    imageZone2.appendChild(img);
  } else {
    imageZone2.innerHTML = 'Không phải hình ảnh hợp lệ!';
  }
});

// Xử lý dán hình ảnh
window.addEventListener('paste', (e) => {
  const items = e.clipboardData.items;
  for (let item of items) {
    if (item.type.indexOf('image') !== -1) {
      const blob = item.getAsFile();
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      imageZone2.innerHTML = '';
      imageZone2.appendChild(img);
      break;
    }
  }
});



