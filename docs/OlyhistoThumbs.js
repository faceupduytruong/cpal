const customThumbnails = {
  'Chọn lọc tự nhiên': 'https://www.dropbox.com/scl/fi/0hovz0whww3m160w4ck9w/Ch-n-l-c-t-nhi-n.jpg?rlkey=zz8jbca8rrztjvrgsvifl52kd&st=fibwofef&raw=1',
  'Các loài động vật': 'https://www.dropbox.com/scl/fi/1d5f5yfhahg66sy0uposi/C-c-lo-i-ng-v-t.webp?rlkey=xuv5qfd1nvahihfjmxxfmw6sf&st=t8l9rw0p&raw=1',
  'Phân chia tế bào': 'https://www.dropbox.com/scl/fi/2csmjohhjlva8r96svwke/Ph-n-chia-t-b-o.jpg?rlkey=3fpgzwk6aep4zj3synvvcxubp&st=02p3il0v&raw=1',
  'Phối giống di truyền': 'https://www.dropbox.com/scl/fi/z75aqyaizpk7ywf5bxd06/Ph-i-gi-ng-di-truy-n.jpg?rlkey=i5ym2g4p4oaaxu1lq8oxgvdcd&st=0vonw1x4&raw=1',
  'Thí nghiệm sinh học': 'https://www.dropbox.com/scl/fi/8mi0y3ow9muub7z5zdo49/Th-nghi-m-sinh-h-c.jpg?rlkey=q1p9f9b8zx10kft17n9irx52r&st=7xcq54x4&raw=1',
  'Thực vật cây trồng': 'https://www.dropbox.com/scl/fi/78vmyk0xyvsr6vsvf9uyy/Th-c-v-t-c-y-tr-ng.png?rlkey=aqa09wrcbycpo0z7kz8w03sdj&st=xxro8jqf&raw=1',
  'Tiến hóa loài': 'https://www.dropbox.com/scl/fi/4ab21jx12at037h8ugoqd/Ti-n-h-a-lo-i.webp?rlkey=t51h9tmdbwu5mzdno7scsvb6f&st=eki6n2yv&raw=1', 
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Chọn lọc tự nhiên': ['Kích thước mỏ giảm của chim sẻ Geospiza Fortis.png'],
  'Các loài động vật': ['Cảm ứng ở động vật.png'],
  'Phân chia tế bào': ['Tái bản phân tử DNA của vi khuẩn.png'],
  'Phối giống di truyền': ['Số loại giao tử gene.png', 'Tương tác gene của chuột nhảy Meriones Unguiculatus.png', 'Tần số allele qua các thế hệ của loài thực vật lưỡng bội.png'],
  'Thí nghiệm sinh học': ['Tạo DNA tái tổ hợp có dấu phóng xạ.png'],
  'Thực vật cây trồng': ['Quang hợp và năng suất cây trồng.png'],
  'Tiến hóa loài': ['Thí nghiệm cóc độc và rắn không độc.png'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Kể Chuyện': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Story/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/mzn88e97lpg5o4wgqw3cx/S-ch-K-Chuy-n.webp?rlkey=71udzkkrr0jw2plf77s72ebxg&st=zbnf1h9g&raw=1',
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/6686b8zwwloagxpcjanql/Google-Translate.jpg?rlkey=62s6qak72385hqbiod8414f1b&st=suqz7c3v&raw=1',
  },
  'Lớp sử Thầy Phương': {
    url: 'https://www.youtube.com/@lopsuthayphuong/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/zwyfmcazdoz2e5xcl4zaz/L-p-s-Th-y-Ph-ng.jpg?rlkey=u3s8khe6d6pbp1a3u8nqivveo&st=qsn654zg&raw=1',
  },
  'Lịch sử cô Hương': {
    url: 'https://www.youtube.com/@lichsucohuong9897/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/wxiw7m4iec0som3t5kd2c/L-ch-s-c-H-ng.jpg?rlkey=gnluj0y9qhq2y8ik4ltphwg56&st=trpgj9ld&raw=1',
  },
  'Cô Chi': {
    url: 'https://www.youtube.com/@TCT968/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/gb2a5jn9rww2de3312c4n/C-Chi.jpg?rlkey=6jtktoia89mhwzv1bezdhcfoo&st=30h5m5va&raw=1',
  },
  'Sử ta và họ - chuyện xưa kể lại': {
    url: 'https://www.facebook.com/profile.php?id=61583850062328&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/am4qlpg87pvus55x1afwm/S-ta-v-h-chuy-n-x-a-k-l-i.jpg?rlkey=zs4ajgnk7k96xtsyhz44f3etc&st=25kg1n2z&raw=1',
  },
  'Học Lịch Sử Thời 4.0': {
    url: 'https://www.youtube.com/@HocLichSuThoichuyendoiso/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/w5cdpbra6yvfnukx6ntk0/H-c-L-ch-S-Th-i-4.0.jpg?rlkey=p3ombatkpruxjj41etvlkr8uu&st=gkb8q8x5&raw=1',
  },
  // thêm các mục khác nếu cần};
