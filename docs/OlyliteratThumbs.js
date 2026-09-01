const customThumbnails = {
   'Tốt nghiệp trung học phổ thông': 'https://www.dropbox.com/scl/fi/frygnc44v3bpghggcd4p0/T-t-nghi-p-trung-h-c-ph-th-ng.png?rlkey=3xmk2u712xjfmred49atul4jo&st=3d1m54az&raw=1',
   // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
   'Tốt nghiệp trung học phổ thông': ['Làm thế nào để có những Steve Jobs Việt Nam.jpg'],
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
  'Cô Thảo Duyên': {
    url: 'https://www.youtube.com/@cothaoduyen5273/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/cv03eyz05bzgm6gdpq8if/C-Th-o-Duy-n.gif?rlkey=2d78iv1ink2wo7kol61eyi9zk&st=zhdhixp0&raw=1',
  },
  'Học Văn Cô Sương Mai': {
    url: 'https://www.youtube.com/@suongmaiqanda/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/8so75ff93plitxb5sqt9a/H-c-V-n-C-S-ng-Mai.gif?rlkey=avqlifmcov86dgf1fnen3epjm&st=nqmb0oic&raw=1'
  },
  'Cô Trần Thùy Dương': {
    url: 'https://www.youtube.com/@C%C3%94TR%E1%BA%A6NTH%C3%99YD%C6%AF%C6%A0NG/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/9sg3xfg2o5bfs3o7lo2cs/C-Tr-n-Th-y-D-ng.gif?rlkey=79py2339u2ky1w5m41dfm8fr1&st=hvxptyw1&raw=1'
  },
  'Kim Oanh - Học Văn - Văn Học': {
    url: 'https://www.youtube.com/@kimoanh-hocvan-vanhoc/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/g3fcaelkc9wfq93s9dc3k/Kim-Oanh-H-c-V-n-V-n-H-c.gif?rlkey=3fwgqfw0iej5u4avufuwpmfyb&st=4vdvca9c&raw=1'
  },
  'Van Tuan Nguyen': {
    url: 'https://www.youtube.com/@vantuannguyen/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/z0g2nud5ve6j9o30tc37p/Van-Tuan-Nguyen.gif?rlkey=ry0ji1oqj0vlxzrq1shnk517g&st=5309drcf&raw=1',
  },
  'Thanh Tâm': {
    url: 'https://www.youtube.com/@ph_thanhtam/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/58fsofo99nynb0rd7ex2m/Thanh-T-m.gif?rlkey=g1rf9popyx706yngnok8l1a97&st=9lbxbjiz&raw=1',
  },
 'Trạm văn': {
    url: 'https://www.facebook.com/tramvan.thcs',
    thumbnail: 'https://www.dropbox.com/scl/fi/lfz20t38dke6k2auajohy/Tr-m-v-n.jpg?rlkey=h89xxykwa4a7kyp4o5htb68ox&st=07mo9i4f&raw=1'
  },
 'VietJack THPT Official': {
    url: 'https://www.youtube.com/@vietjackthptofficial5597/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/t6it61b6fujtsgz7ix1t3/VietJack-THPT-Official.gif?rlkey=an1il9lgnsmxrz7mfhw169ydx&st=gbqgfm0t&raw=1'
  },
  'Văn Vở': {
    url: 'https://www.youtube.com/@xinchaotoilavanvo/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/q7a3wldzx0m6frsna4w3g/V-n-V.jpg?rlkey=73fh1zj42vdpd9rzxt2jfhrl3&st=xrel0i5h&raw=1'
  },
  'Duy Trần': {
    url: 'https://www.youtube.com/@duytranblogchuyenvan/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/022b8kqfinv74kycscqiy/Duy-Tr-n.gif?rlkey=gqgpsllwm1lualvxr6fv6xaik&st=y9vtethy&raw=1'
  },
  'Bút Chì': {
    url: 'https://www.youtube.com/@butchihocvan/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/n1lc5dlbzybo9bvkjrtce/B-t-Ch.gif?rlkey=gne8j5q8pslil7a7iapm3e037&st=ezzc4ob7&raw=1'
  },
  'Thanh Tâm': {
    url: 'https://www.youtube.com/@ph_thanhtam/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/74zy42ymkjgxzvt1fuye1/Thanh-T-m.webp?rlkey=7rr5idni0wwja9q473u2ererp&st=a9x2i7ii&raw=1'
  },
  'RVC - Văn chương cùng Rubik': {
    url: 'https://www.youtube.com/@rvc-vanchuongcungrubik/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/7o52etv18xbor8w0jxrs9/RVC-V-n-ch-ng-c-ng-Rubik.gif?rlkey=l2lg2n51jf6nkm52bf6ll7qe7&st=58pl2hn1&raw=1'
  },
  'Tủ truyện tranh đọc xuôi 199x': {
    url: 'https://www.facebook.com/truyentranhdocxuoi199x',
    thumbnail: 'https://www.dropbox.com/scl/fi/x2vrsguq32p07k9mvqnru/T-truy-n-tranh-c-xu-i-199x.gif?rlkey=ya0yye9qll2g37d3d245aksgo&st=boir6zy8&raw=1'
  },
  // thêm các mục khác nếu cần
};
