// Tạo phần tử style và thêm vào head
const style = document.createElement('style');
style.textContent = `
  #imageZone {
    width: 300px;
    height: 300px;
    border: 2px dashed #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: #f0f0f0;
    margin-top: 20px;
  }

  #imageZone img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
document.head.appendChild(style);

// Tạo phần tử tiêu đề và vùng chứa hình ảnh
const heading = document.createElement('h2');
heading.textContent = 'Kéo hoặc Dán hình ảnh vào vùng dưới đây 🖼️';
document.body.appendChild(heading);

const imageZone = document.createElement('div');
imageZone.id = 'imageZone';
imageZone.textContent = 'Thả hoặc dán hình ảnh vào đây';
document.body.appendChild(imageZone);

// Xử lý kéo hình ảnh
imageZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  imageZone.style.borderColor = '#00aaff';
});

imageZone.addEventListener('dragleave', () => {
  imageZone.style.borderColor = '#aaa';
});

imageZone.addEventListener('drop', (e) => {
  e.preventDefault();
  imageZone.style.borderColor = '#aaa';

  const imageUrl = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
  if (imageUrl && imageUrl.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
    const img = document.createElement('img');
    img.src = imageUrl;
    imageZone.innerHTML = '';
    imageZone.appendChild(img);
  } else {
    imageZone.innerHTML = 'Không phải hình ảnh hợp lệ!';
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
      imageZone.innerHTML = '';
      imageZone.appendChild(img);
      break;
    }
  }
});