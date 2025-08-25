// Tạo vùng Dropzone bìa đĩa album 200x200 pixel

// Tạo phần tử style và thêm vào head 
const style1 = document.createElement('style');
style1.textContent = `
#imageZone1 {
  width: 200px;
  height: 200px;
  border: 2px dashed #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f0f0f0;
  margin: 20px auto; /* căn giữa theo chiều ngang */
  font-size: 14px;
  color: #666;
  text-align: center;
}
#imageZone1 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;
document.head.appendChild(style1);

// Tạo phần tử tiêu đề và vùng chứa hình ảnh
const heading1 = document.createElement('h2');
heading1.textContent = 'Newest album cover';
// Thêm style để căn giữa và font chữ uốn lượn
heading1.style.textAlign = 'center';
heading1.style.marginTop = '20px';
heading1.style.fontFamily = '"Brush Script MT", "Dancing Script", cursive';
heading1.style.fontSize = '28px'; // kích thước nhỏ vừa phải
heading1.style.color = '#fff'; // màu chữ trắng
heading1.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.3)'; // bóng xám mờ
document.body.appendChild(heading1);

// Tạo vùng chứa hình ảnh
const imageZone1 = document.createElement('div');
imageZone1.id = 'imageZone1';
imageZone1.textContent = 'Thả hoặc dán hình ảnh vào đây';
imageZone1.setAttribute('tabindex', '0'); // để vùng có thể nhận paste khi focus
document.body.appendChild(imageZone1);

// Xử lý kéo hình ảnh
imageZone1.addEventListener('dragover', (e) => {
  e.preventDefault();
  imageZone1.style.borderColor = '#00aaff';
});

imageZone1.addEventListener('dragleave', () => {
  imageZone1.style.borderColor = '#aaa';
});

imageZone1.addEventListener('drop', (e) => {
  e.preventDefault();
  imageZone1.style.borderColor = '#aaa';

  const imageUrl = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
  if (imageUrl && imageUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
    const img = document.createElement('img');
    img.src = imageUrl;
    imageZone1.innerHTML = '';
    imageZone1.appendChild(img);
  } else {
    imageZone1.innerHTML = 'Không phải hình ảnh hợp lệ!';
  }
});

// Xử lý dán hình ảnh riêng cho imageZone1
imageZone1.addEventListener('paste', (e) => {
  const items = e.clipboardData.items;
  for (let item of items) {
    if (item.type.indexOf('image') !== -1) {
      const blob = item.getAsFile();
      const img = document.createElement('img');
      img.src = URL.createObjectURL(blob);
      imageZone1.innerHTML = '';
      imageZone1.appendChild(img);
      break;
    }
  }
});
