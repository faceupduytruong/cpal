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
  'Long Địa lý!': {
    url: 'https://www.youtube.com/@longdialy6620/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/8s5hyisw35pbthscedjnv/Long-a-l.jpg?rlkey=jf82okb33y9itw6wlj0n80hg7&st=760gvoia&raw=1',
  },
  'Học Địa lí cùng anh Phương': {
    url: 'https://www.youtube.com/@hocialicunganhphuong2879/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/gry8umllvr5vffntksiqt/H-c-a-l-c-ng-anh-Ph-ng.jpg?rlkey=et2w1lzccr7igoqrqo25bmw7p&st=cn996ykg&raw=1',
  },
  'Địa lí thầy Đô La': {
    url: 'https://www.youtube.com/@Nguyenhuudo1981/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/5h9wr4qpc6z2afne53few/a-l-th-y-La.jpg?rlkey=a2a7z2wu7rnmt0ya9022ypp79&st=deewq1r4&raw=1',
  },
  'Địa lí thầy Tùng': {
    url: 'https://www.youtube.com/@%C4%90%E1%BB%8Bal%C3%ADth%E1%BA%A7yT%C3%B9ng/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/yx0dagszha7hnvfxm5dm7/a-l-th-y-T-ng.jpg?rlkey=6nml4s4lxk2ach5zhr8a5yzf3&st=c4f21y73&raw=1',
  },
  'Nguyễn Bá Dũng ĐL': {
    url: 'https://www.youtube.com/@nguyenbadungl478/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/raetv5cem98dla1d0cyl8/Nguy-n-B-D-ng-L.jpg?rlkey=o2phlg9yj7y2enesex63wbbhf&st=h1cos40s&raw=1',
  },
  // thêm các mục khác nếu cần
};
