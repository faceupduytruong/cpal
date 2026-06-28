const customThumbnails = {
  'Lò xo': 'https://www.dropbox.com/scl/fi/kmqi47r3m9l48f8gxgydc/Spring.webp?rlkey=nxj9hinw83kbsb1is5f3regwj&st=99ulgxw1&raw=1',
  'Mạch điện': 'https://www.dropbox.com/scl/fi/qags4k3nib5t0r41jxs3k/Circuit.jpg?rlkey=mt77hpxvofpolg79fno2g8i0y&st=21c9r5xy&raw=1',
  'Năng lượng': 'https://www.dropbox.com/scl/fi/a4iulf3y7nhtxvpc6qnxh/Efficiency.jpg?rlkey=8vqik1f5o1t2l76chdblyhcia&st=1fep6r1x&raw=1',
  'Ròng rọc': 'https://www.dropbox.com/scl/fi/ysa6zsjtytytl9xkw8351/R-ng-r-c.jpg?rlkey=qw49u2qjzlvrrwshxliir1sug&st=cx0sl9kq&raw=1',
  'Vật chuyển động': 'https://www.dropbox.com/scl/fi/drcsq6pa2u2qenw7y74kk/Transportation.jpg?rlkey=lkb66j0nsfhrr31yju9qchskl&st=yoxbv8tp&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Lò xo': ['Chuyển động con lắc lò xo.png'],
  'Mạch điện': ['Tính toán mạch điện.png'],
  'Năng lượng': ['Công suất giải phóng nhiệt làm nước bay hơi.png', 'Nhiệt lượng giúp chất lỏng hóa hơi hoàn toàn.png', 'Phương trình cân bằng nhiệt.png'],
  'Ròng rọc': ['Chuyển động của hệ vật qua ròng rọc (1).png', 'Chuyển động của hệ vật qua ròng rọc (2).png'],
  'Vật chuyển động': ['Gia tốc vật chuyển động (1).png', 'Gia tốc vật chuyển động (2).png', 'Phương trình tọa độ chuyển động nhanh dần đều.png'],// thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Khám Phá Bí Ẩn': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Traveling/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/ri7ard0iy4hyu9n987n7o/S-ch-Kh-m-Ph-B-n.jpg?rlkey=ln731vw27wb0m97w71wy9nf3z&st=q59bg052&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/4w6m80ygbcnpi5it1otu5/Google-Translate.png?rlkey=ls0rsbuttkpwzjg46ia74ddoo&st=92pxrn8f&raw=1',
  },
  'Thầy Nguyễn Phú Thắng': {
    url: 'https://www.youtube.com/@thaynguyenphuthang/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/02s0c7dj5lr0bva114kgr/Th-y-Nguy-n-Ph-Th-ng.jpg?rlkey=v5febc1blb02y38hh4jv0uonx&st=6luw9mm3&raw=1',
  },
  'Thầy Vũ Ngọc Anh - Chuyên luyện thi Vật Lý': {
    url: 'https://www.youtube.com/@thayvnachuyenluyenthivatly/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/8befyg6fa343vpy0jhi8f/Th-y-V-Ng-c-Anh-Chuy-n-luy-n-thi-V-t-L.webp?rlkey=561hcl437dixbhz3q2lhoyfh4&st=be3cqgwm&raw=1',
  },
  'Thầy Phạm Quốc Toản': {
    url: 'https://www.youtube.com/@Th%E1%BA%A7yPh%E1%BA%A1mQu%E1%BB%91cTo%E1%BA%A3n/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/7h8kx8wmp04u9ahhndpzo/Th-y-Ph-m-Qu-c-To-n.jpg?rlkey=hxgix4n1joz7gli392o9bc9t3&st=zgb89xkz&raw=1',
  },
  'Thầy Tiển Toán Lý': {
    url: 'https://www.youtube.com/@ThayTienToanLy/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/muxr29w4oesac1pkbr476/Th-y-Ti-n-To-n-L.jpg?rlkey=9epp6c592enqc1hnm0jdg1kru&st=jlofqy25&raw=1',
  },
  'Trunk Yee Phạm': {
    url: 'https://www.youtube.com/@TRUNKYEEPH%E1%BA%A0M/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/f133lgrlxqv03v69cz3fg/Trunk-Yee-Ph-m.jpg?rlkey=c320ri0sy0dkg49mholvyw7lu&st=9o4er6l7&raw=1',
  },
  'Khôi Cao Minh - Vật Lý': {
    url: 'https://www.youtube.com/@khoicaominh/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/qq7abvn93ffbz8zeu3lla/Kh-i-Cao-Minh-V-t-L.jpg?rlkey=zy6xlrhhx5pgb321j9vt8hvg0&st=2x5eivua&raw=1',
  },
  'Việt Lê Siêu Nhân': {
    url: 'https://www.youtube.com/@vlsnvv/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/tzzyujss5l227bnqxizw7/Vi-t-L-Si-u-Nh-n.jpg?rlkey=lskmgo52fvdl99nafj9t0gstg&st=cpwl16s6&raw=1',
  },
  'Vật Lý Chill': {
    url: 'https://www.youtube.com/@VatLyChill/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/7kymo6yn065gzo09pl6c3/V-t-L-Chill.jpg?rlkey=m8o3we3inpczu0irp19kgor3r&st=2hcztbyw&raw=1',
  },
  // thêm các mục khác nếu cần
};
