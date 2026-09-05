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
'Chọn lọc tự nhiên': ['Kích thước mỏ giảm của chim sẻ Geospiza Fortis.webp'],
'Các loài động vật': ['Cảm ứng ở động vật.webp'],
'Phân chia tế bào': ['Tái bản phân tử DNA của vi khuẩn.webp'],
'Phối giống di truyền': ['Số loại giao tử gene.webp', 'Tương tác gene của chuột nhảy Meriones Unguiculatus.webp', 'Tần số allele qua các thế hệ của loài thực vật lưỡng bội.webp'],
'Thí nghiệm sinh học': ['Tạo DNA tái tổ hợp có dấu phóng xạ.webp'],
'Thực vật cây trồng': ['Cấu tạo của tế bào thực vật.webp', 'Quang hợp và năng suất cây trồng.webp'],
'Tiến hóa loài': ['Thí nghiệm cóc độc và rắn không độc.webp'],
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
  'Sinh thầy Tuấn': {
    url: 'https://www.youtube.com/@SinhthayTuan/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/jtxzc49p9u51qucdgybv6/Sinh-th-y-Tu-n.jpg?rlkey=7bregpzm3u0l3u2fxkz9tpjke&st=vd8dcpo2&raw=1',
  },
  'Chuyên Sinh': {
    url: 'https://www.youtube.com/@chuyensinhhoc/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/10s405h9e4r29r6erwvsg/Chuy-n-Sinh.png?rlkey=p6x9vgn5n1dprwx1iujfk63az&st=131bcsqh&raw=1',
  },
  'Cô Lê Ngọc Hiếu': {
    url: 'https://www.youtube.com/@sinhhoconline594/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/zaf5c9nh3m70vfy6zj7ty/C-L-Ng-c-Hi-u.jpg?rlkey=bk6z3914sj247y8e28wkyx5c7&st=ec5pu5hj&raw=1',
  },
  'Thầy Quang': {
    url: 'https://www.youtube.com/@TH%E1%BA%A6YQUANG/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/ue2twfebcsbnb8fwiz893/Th-y-Quang.jpg?rlkey=2yjl89q8hv8rw3lok47j7bftj&st=q8laf4r3&raw=1',
  },
  'Thầy Phan Khắc Nghệ': {
    url: 'https://www.youtube.com/@thayphankhacnghe/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/t8z383qpjudqtvhtc4a14/Th-y-Phan-Kh-c-Ngh.jpg?rlkey=wgh96w3d9314xrtngrmut2hda&st=9gssn0sk&raw=1',
  },
  'Thầy Công dạy Sinh': {
    url: 'https://www.youtube.com/@thaycongdaysinh/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/7if63za2jygy894q849wu/Th-y-C-ng-d-y-Sinh.jpg?rlkey=bo8kszzgztysg6x8dim1tiiew&st=xlbahvbf&raw=1',
  },
  'Tri Dang family': {
    url: 'https://www.youtube.com/@tridangfamily301/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/yrpkrkxlx47v8febthhqy/Tri-Dang-family.webp?rlkey=qb09kj9wgn0vx9n9vwfmvkzfq&st=orja3vb3&raw=1',
  },
  // thêm các mục khác nếu cần
};
