let currentFolder = '';
let currentIndex = 0;
let panzoomInstance = null;


// 👉 Đường dẫn gốc tới Netlify
const baseURL = document.getElementById('base-url').value;
const folderGrid = document.getElementById('folder-grid');
const popup = document.getElementById('popup');
const gallery = document.getElementById('gallery');
const closeBtn = document.querySelector('.close');
const zoomPopup = document.getElementById('zoom-popup');
const zoomImg = document.getElementById('zoom-img');
const zoomCloseBtn = document.getElementById('zoom-close');

// 👉 Hiển thị hình đại diện cho mỗi folder
for (const folderName in folders) {
  const previewImg = customThumbnails[folderName] || folders[folderName][0];
  const item = document.createElement('div');
  item.classList.add('folder-item');
  const img = document.createElement('img');
  img.src = previewImg.startsWith('http') ? previewImg : `${baseURL}${folderName}/${previewImg}`;
  img.alt = folderName;
  const label = document.createElement('div');
  label.classList.add('folder-name');
  label.textContent = folderName;
  item.appendChild(img);
  item.appendChild(label);
  folderGrid.appendChild(item);
  item.addEventListener('click', () => {
    openFolderPopup(folderName);
  });
}

// 👉 Mở popup hiển thị toàn bộ ảnh trong folder
function openFolderPopup(folderName) {
  gallery.innerHTML = '';
  currentFolder = folderName;

  folders[folderName].forEach((filename, index) => {
    const img = document.createElement('img');
    img.src = `${baseURL}${folderName}/${filename}`;
    img.alt = filename;
    img.classList.add('thumbnail');
    img.dataset.index = index;
    gallery.appendChild(img);

    // Zoom ảnh khi click (giữ nguyên)
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = index;
      updateZoomImage();
      zoomImg.classList.add('rainbow-glow');
      zoomPopup.style.display = 'flex';
      zoomCloseBtn.style.display = 'block';
    });
  });
  popup.style.display = 'block';
}

// 👉 Đóng popup gallery
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// 👉 Đóng popup khi click ra ngoài vùng ảnh
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// 👉 Đóng popup zoom ảnh lớn
zoomPopup.addEventListener('click', (e) => {
  if (e.target === zoomPopup) {
    zoomPopup.style.display = 'none';
    zoomImg.classList.remove('rainbow-glow');
    zoomImg.classList.remove('zoomed');
    if (panzoomInstance) panzoomInstance.destroy();
    panzoomInstance = Panzoom(zoomImg, {
    maxScale: 5,
    contain: 'outside'
});

// 👉 Reset zoom và vị trí về gốc mỗi khi ảnh mới được hiển thị
panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });

// ✅ Hiện nút đóng ngay khi ảnh được hiển thị
zoomCloseBtn.style.display = 'block';

// 👉 Cho phép cuộn chuột để zoom
panzoomContainer.parentElement.addEventListener('wheel', panzoomInstance.zoomWithWheel);

// Cho phép kéo bằng chuột
panzoomContainer.addEventListener('mousedown', panzoomInstance.pan);

    currentFolder = '';
    currentIndex = 0;
  }
});

// 👉 Double click vào hình thì Zoom hình
zoomImg.addEventListener('dblclick', () => {
  zoomImg.classList.toggle('zoomed');
  panzoomInstance.zoomIn();
  panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
});

// 👉 Click vào hình thì nút Zoom Close hiện ra
zoomImg.addEventListener('click', () => {
  zoomCloseBtn.style.display = 'block';
  panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
});

// 👉 Nút Zoom Close luôn luôn hiện ra
zoomCloseBtn.addEventListener('click', () => {
  zoomPopup.style.display = 'block';
  zoomImg.classList.remove('rainbow-glow');
  zoomImg.classList.remove('zoomed');
  zoomCloseBtn.style.display = 'none';
  if (panzoomInstance) panzoomInstance.destroy();
  panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
});


// 👉 Hàm để Zoom Image
function updateZoomImage() {
  const filename = folders[currentFolder][currentIndex];
  const newSrc = `${baseURL}${currentFolder}/${filename}`;
  zoomImg.classList.add('fade-out');
  setTimeout(() => {
    zoomImg.src = newSrc;
    zoomImg.classList.remove('fade-out');
    zoomImg.classList.remove('zoomed');
    zoomImg.classList.remove('rainbow-glow');
    zoomImg.classList.add('rainbow-glow');
    document.getElementById('image-counter').textContent = `Photo ${currentIndex + 1} / ${folders[currentFolder].length}`;
    if (panzoomInstance) panzoomInstance.destroy();
    panzoomInstance = Panzoom(zoomImg, {
      maxScale: 5,
      contain: 'outside'
    });

    // ✅ Hiện nút đóng ngay khi ảnh được hiển thị
    panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
    zoomCloseBtn.style.display = 'block';

    // (Không cần gán lại sự kiện click nữa)
  }, 200);
}

// 👉 Hàm xử lý cuộn đến hình có index nhập vào
function scrollToPhotoByIndex(index) {
  const target = gallery.querySelector(`img[data-index="${index}"]`);
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

    // Tuỳ chọn: highlight ảnh vừa cuộn tới
    target.classList.add('highlighted');
    setTimeout(() => {
      target.classList.remove('highlighted');
    }, 1000);
  }
}

// 👉 Click nút Next để di chuyển ảnh trước
document.getElementById('next-btn').addEventListener('click', () => {
  if (currentFolder) {
    currentIndex = (currentIndex + 1) % folders[currentFolder].length;
    updateZoomImage();
    panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
  }
});

// 👉 Click nút Prev để di chuyển ảnh sau
document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentFolder) {
    currentIndex = (currentIndex - 1 + folders[currentFolder].length) % folders[currentFolder].length;
    updateZoomImage();
    panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
  }
});

// 👉 Hiện nút Close khi Zoom ảnh
document.getElementById('zoom-close').addEventListener('click', () => {
  zoomPopup.style.display = 'none';
  zoomImg.classList.remove('rainbow-glow');
  zoomImg.classList.remove('zoomed');
  document.getElementById('zoom-close').style.display = 'none';
  if (panzoomInstance) panzoomInstance.destroy();
  panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
});

// 👉 Ấn Esc để thoát Zoom ảnh
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Nếu đang mở zoom ảnh thì đóng lại
    if (zoomPopup.style.display === 'flex') {
      zoomPopup.style.display = 'none';
      zoomImg.classList.remove('rainbow-glow');
      zoomImg.classList.remove('zoomed');
      zoomCloseBtn.style.display = 'none';
      if (panzoomInstance) panzoomInstance.destroy();
      panzoomInstance.setTransform({ scale: 1, x: 0, y: 0 });
    }

    // Nếu đang mở gallery popup thì đóng lại
    if (popup.style.display === 'block') {
      popup.style.display = 'none';
    }
  }
});

// 👉 Cuộn đến ảnh có index nhập vào
document.getElementById('scroll-to-photo-btn').addEventListener('click', () => {
  const input = document.getElementById('photo-index-input').value.trim();
  const index = parseInt(input, 10) - 1;

  if (!isNaN(index) && currentFolder && index >= 0 && index < folders[currentFolder].length) {
    scrollToPhotoByIndex(index);
  } else {
    alert(`Số thứ tự không hợp lệ. Folder "${currentFolder}" có ${folders[currentFolder].length} ảnh.`);
  }
});

// 👉 Xử lý các folderLinks, click vào sẽ mở Popup
const grid = document.getElementById('folder-grid');

Object.entries(folderLinks).forEach(([name, data]) => {
  const folderItem = document.createElement('div');
  folderItem.className = 'folder-item';
  folderItem.onclick = () => openRightHalfPopup(data.url, name, window.innerWidth*2+45, 745);

  const img = document.createElement('img');
  img.src = data.thumbnail;
  img.alt = name;
  folderItem.appendChild(img);

  const folderName = document.createElement('div');
  folderName.className = 'folder-name';
  folderName.textContent = name;

  folderItem.appendChild(folderName);
  grid.appendChild(folderItem);
});
