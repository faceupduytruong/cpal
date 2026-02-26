const customThumbnails = {
  Food: 'https://www.dropbox.com/scl/fi/lgtt5781nc4c0orcbbs5l/Food.jpeg?rlkey=jjz5hte4jvcf0w6jjau72xzp6&st=1av9mq5g&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Food': ['54088078451_c283f6479b_o.jpg', '54106773088_15f488d93f_o.jpg', 'FB_IMG_1733278638756.jpg', 'IMG_20241123_135818_261.jpg', 'IMG_20241123_135820_357.jpg', 'IMG_20241123_135822_297.jpg', 'IMG_20241123_135824_135.jpg', 'IMG_20241123_135830_168.jpg', 'IMG_20241123_135832_225.jpg', 'IMG_20241123_135836_042.jpg', 'talkin_image_1731467606132.jpg', 'talkin_image_1737438386818.jpg', 'talkin_image_1737438388460.jpg', 'talkin_image_1737438390740.jpg', 'talkin_image_1737441409113.jpg', 'talkin_image_1737441410512.jpg', 'talkin_image_1737441413032.jpg', 'talkin_image_1737441415402.jpg', 'talkin_image_1737559470104.jpg', 'talkin_image_1741004378919.jpg', 'talkin_image_1756777718711.jpg', 'Từ vựng mô tả thức ăn.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Nấu Ăn': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Cooking/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/n1sar2c3mc3au0v54zp13/S-ch-N-u-n.jpg?rlkey=oay9iv7qec9zmoj4u6t798ir5&st=ax54pdsd&raw=1'
  },
  'Google': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/l5pqrerdpedcav42jfqvs/Google-Translate.jpg?rlkey=yde7f3gymfc8ins82d4a8wzrj&st=0iy87a0g&raw=1'
  },
  'Phùng Thị Mùi': {
    url: 'https://www.facebook.com/profile.php?id=100063678393688&sk=photos_by',
    thumbnail: 'https://www.dropbox.com/scl/fi/dk97vmt7v2ccrdc17pk3s/Ph-ng-Th-M-i.avif?rlkey=qbvgjm05fs98pf92xxikhk6ee&st=gfbc4wkh&raw=1',
  },
  'Ma Thị Ngoãn': {
    url: 'https://www.facebook.com/profile.php?id=61581462201077&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/gh5qxedzjxcdygdpoxajp/Ma-Th-Ngo-n.webp?rlkey=71b48n3kc4f7mz8kh0ud59kql&st=llw0sb1d&raw=1',
  },
  'Kho Tàng Kiến Thức': {
    url: 'https://www.facebook.com/profile.php?id=61551132006208&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/t89hqnysnydykfpfenh4i/KHO-T-NG-KI-N-TH-C-Ng-c-H-ng-Y-Qu-n.jpg?rlkey=xsuh9u4h36q50ti06e9oeq87v&st=wlo4httr&raw=1',
  },
  'Tuyen saphia': {
    url: 'https://www.facebook.com/tuyensaphia92/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/dn6a9uh4amouq0av05abz/Tuyen-saphia.jpg?rlkey=7nhtqnh6f6go28ffy1mxxjhf9&st=ifii00ox&raw=1',
  },
  'Út về vườn': {
    url: 'https://www.facebook.com/utvevuon/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/epxg7mk6ww2dzappirfo3/t-v-v-n.jpg?rlkey=u02sro1w0powqgiejxwls7v13&st=0afm0kn6&raw=1',
  },
  'Bếp bên sườn đồi': {
    url: 'https://www.facebook.com/bepbensuondoiofficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/v2nzer0my62b68r3icu2m/B-p-b-n-s-n-i.jpg?rlkey=xq279boeefnedbnuov5azfz3o&st=f180vmg6&raw=1',
  },
  'Dạy Nấu Ăn': {
    url: 'https://www.facebook.com/profile.php?id=100057411881264&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/xm4la0f7fczsmq4536ea1/D-y-N-u-n.webp?rlkey=rn4b8h59ur87dni690z8p5r33&st=7dt0h79b&raw=1',
  },
  'Sammy': {
    url: 'https://www.facebook.com/Sammycooking/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ah74wc2oc19rr9x9oipnz/Sammy.webp?rlkey=xz7qxbnwuucwuq93dcvl5w8ch&st=vshdo9mz&raw=1',
  },
  'YÊU BẾP (Esheep Kitchen family)': {
    url: 'https://www.facebook.com/groups/557295677987925/',
    thumbnail: 'https://www.dropbox.com/scl/fi/l4bafpvu1jeh3e2yhi5xk/Y-U-B-P-Esheep-Kitchen-family.jpg?rlkey=2uei1mj67gggqvai08zija3lz&st=21qyiwo2&raw=1',
  },
  'Primitive Art': {
    url: 'https://www.facebook.com/primitiveart01/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4z5s73mcp90cv1fhe9w2q/Primitive-Art.jpg?rlkey=htd2io3xuwae0njmx71pxvv6p&st=noxw88af&raw=1',
  },
  'Quản Trị Mạng (Món Ngon Mỗi Ngày)': {
    url: 'https://quantrimang.com/cuoc-song/am-thuc',
    thumbnail: 'https://www.dropbox.com/scl/fi/f7jmgccn3sdj33liorspl/Qu-n-Tr-M-ng-M-n-Ngon-M-i-Ng-y.png?rlkey=b0slipel12h23xkw8vwvdppfa&st=2bpr3sl6&raw=1',
  },
  'Tú Nguyễn': {
    url: 'https://www.facebook.com/tu.nguyen.290494/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/lv9cjjm8vq39h0unmgyt1/T-Nguy-n.webp?rlkey=7blp239a1x846km6lprualkl4&st=8sp29q81&raw=1',
  },
  'Khéo Tay Hay Làm': {
    url: 'https://www.facebook.com/kheotayhaylam2411/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/112ogmjra3qy8i09jguks/Kh-o-Tay-Hay-L-m.jpg?rlkey=5c03i1abketnvcq15hm8vv6xf&st=v1j81v8l&raw=1',
  },
  // thêm các mục khác nếu cần
};
