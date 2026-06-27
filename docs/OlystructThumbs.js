const customThumbnails = {
  'Bê tông cốt thép': 'https://www.dropbox.com/scl/fi/cx4rbp4j3sb598t3ahhtb/B-t-ng-c-t-th-p.jpg?rlkey=ykold6e3s7t3dl7slrzlhxnor&st=x9c23lu3&raw=1',
  'Cơ học kết cấu': 'https://www.dropbox.com/scl/fi/hc3kk2aekxq2h5fecakv3/C-h-c-k-t-c-u.png?rlkey=3ncmfp8nusjuohnb3jqclweax&st=07nr6osw&raw=1',
  'Cơ học đất': 'https://www.dropbox.com/scl/fi/dc0q3khztecf8zrw3n2z8/C-h-c-t.png?rlkey=75gg6ilpqnxe2xfjj94mo48f0&st=11c48z7b&raw=1',
  'Cơ lý thuyết': 'https://www.dropbox.com/scl/fi/aur6rvlfwokic8xsmehps/C-l-thuy-t.jpg?rlkey=jfgnxy4trypp90waux2or1w9f&st=ajxs4kjh&raw=1',
  'SAP2000':'https://www.dropbox.com/scl/fi/cogy2bdcbmcxwknoh32ve/SAP2000.jpeg?rlkey=lbnj8iaajgmc3tuv69vazcepv&st=fg490uut&raw=1',
  'Sức bền vật liệu': 'https://www.dropbox.com/scl/fi/frkkofntaej4d8lbfhecp/S-c-b-n-v-t-li-u.PNG?rlkey=mkahbwuh748416txdjhhbi3le&st=i4v1xhz8&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Bê tông cốt thép': ['Tính cốt thép As cho dầm.png', 'Tính nhanh nội lực của dầm nhiều nhịp liên tục theo tiêu chuẩn Mỹ ACI 318.png', 'Vẽ biểu đồ bao mô ment của dầm nhiều nhịp liên tục.png'],
  'Cơ học kết cấu': ['Nội lực hệ khung 3 khớp (1).png', 'Nội lực hệ khung 3 khớp (2).png'],
  'Cơ học đất': ['Tính các đại lượng vật lý của một mẫu đất ngoài hiện trường.png', 'Tính lún của nền đất dưới đáy móng.png', 'Vẽ biểu đồ ứng suất nén của đất và móng.png', 'Đánh giá trạng thái lớp đất đó.png'],
  'Cơ lý thuyết': ['Nội lực hệ khung 3 khớp (1).png', 'Tính toán mômen lực dựa vào phương trình cân bằng.png'],
  'SAP2000': ['Vẽ biểu đồ nội lực dầm siêu tĩnh có khớp ở giữa bằng SAP2000.png', 'Vẽ biểu đồ nội lực dầm siêu tĩnh có kể TLBT bằng SAP2000.png', 'Vẽ biểu đồ nội lực dầm siêu tĩnh không kể TLBT bằng SAP2000.png'],
  'Sức bền vật liệu': ['Biểu đồ momen uốn có tiếp tuyến nằm ngang.png', 'Dầm có thể tích nhỏ nhất.png'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Kể Chuyện': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Story/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/mzn88e97lpg5o4wgqw3cx/S-ch-K-Chuy-n.webp?rlkey=71udzkkrr0jw2plf77s72ebxg&st=zbnf1h9g&raw=1',
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/xxcu48l8mq0daw943cpki/Google-Translate.png?rlkey=h3btnzpi3dz9jq8wpphebcr48&st=cla53s88&raw=1',
  },
  'NPT Training Center (BTCT)': {
    url: 'https://www.youtube.com/@NPTTrainingCenter/courses',
    thumbnail: 'https://www.dropbox.com/scl/fi/siicirqbcn4eyvtkft382/NPT-Training-Center.jpg?rlkey=fbexm6zzrvkqozclpu2pei28i&st=ejubin57&raw=1',
  },
  'Kết Cấu Thép - HCMUTE': {
    url: 'https://www.youtube.com/@HuynhThanhHuy-HCMUTE/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/gk8w85hcfp28onhadww0l/Google-Translate.jpg?rlkey=c6h4rivear25k3rmp38unrw6e&st=2t2xzydd&raw=1',
  },
  'Le Tuan Tu 1915 (SAP2000)': {
    url: 'https://www.youtube.com/@letuantu1915/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/wge86lmy6gonxm2ovzeo2/Le-Tuan-Tu-1915-SAP2000.jpg?rlkey=2rqc4f0gosbwtqurjrmeux8ih&st=xv4rvfo3&raw=1',
  },
  'Xây Dựng Hay (Nhà Phố)': {
    url: 'https://www.youtube.com/@kysuxuankhoi/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/nmvp7shbyeadw6kgedfvc/X-y-D-ng-Hay.jpg?rlkey=h5ygiuoy1gjp6xba7fz5s25va&st=9mmwsznr&raw=1',
  },
  // thêm các mục khác nếu cần
};
