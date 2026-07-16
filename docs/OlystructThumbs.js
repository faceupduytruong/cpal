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
  'SAP2000': ['Vẽ biểu đồ nội lực dầm siêu tĩnh có khớp ở giữa bằng SAP2000.webp', 'Vẽ biểu đồ nội lực dầm siêu tĩnh có kể TLBT bằng SAP2000.webp', 'Vẽ biểu đồ nội lực dầm siêu tĩnh không kể TLBT bằng SAP2000.webp'],
  'Sức bền vật liệu': ['Biểu đồ momen uốn có tiếp tuyến nằm ngang.png', 'Dầm có thể tích nhỏ nhất.png'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Khám Phá Bí Ẩn': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Traveling/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/ri7ard0iy4hyu9n987n7o/S-ch-Kh-m-Ph-B-n.jpg?rlkey=ln731vw27wb0m97w71wy9nf3z&st=q59bg052&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/gk8w85hcfp28onhadww0l/Google-Translate.jpg?rlkey=c6h4rivear25k3rmp38unrw6e&st=2t2xzydd&raw=1',
  },
  'Lê Quang Tiếp (Đại cương)': {
    url: 'https://www.youtube.com/@L%C3%AAQuangTi%E1%BA%BFp-v8z/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/u91k9fu6gpgek9u3q4ho3/L-Quang-Ti-p-i-c-ng.jpg?rlkey=x4lv761zs19m6y16dp1eoyjzg&st=bgfocxfy&raw=1',
  },
  'Lê Bảo Quỳnh (Sức bền vật liệu)': {
    url: 'https://www.youtube.com/@QuynhLeBao/courses',
    thumbnail: 'https://www.dropbox.com/scl/fi/ntzc73ms8hiqpyeevqese/L-B-o-Qu-nh-S-c-b-n-v-t-li-u.jpg?rlkey=a0rjnrbaqx7hu9ziubvb45trg&st=ysn95rhc&raw=1',
  },
  'HD xây dựng (Cơ học kết cấu)': {
    url: 'https://www.youtube.com/@Lamkhaimtu/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/pmmwwv1lezp008htxg63u/H-ng-d-n-X-y-d-ng.png?rlkey=cdkp4yp7qli2q92km5rwq9bmu&st=rwqffl1w&raw=1',
  },
  'Khải Nguyễn (Cơ học kết cấu)': {
    url: 'https://www.youtube.com/@KhaiNguyen55252/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/6xliyhvl0gdqrxja4o2c5/Kh-i-Nguy-n-C-h-c-k-t-c-u.png?rlkey=juui2fhtzp9g882hvy317q8oj&st=upi44oyc&raw=1',
  },
  'NPT Training Center (BTCT)': {
    url: 'https://www.youtube.com/@NPTTrainingCenter/courses',
    thumbnail: 'https://www.dropbox.com/scl/fi/siicirqbcn4eyvtkft382/NPT-Training-Center.jpg?rlkey=fbexm6zzrvkqozclpu2pei28i&st=ejubin57&raw=1',
  },
  'Đỗ Thị Kim Oanh (BTCT)': {
    url: 'https://www.youtube.com/@dothikimoanh86/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/k6wh352mba2ejme6lqxnj/Th-Kim-Oanh-BTCT.jpg?rlkey=c956g5l61zruex1b7n3wkjyqd&st=m3if61t3&raw=1',
  },
  'Leo Phạm Official (BTCT)': {
    url: 'https://www.youtube.com/@leophamofficial2512/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/nbzfqcoiomdd6lsz3suty/Leo-Ph-m-Official.jpg?rlkey=2ux5gb9ru78lf2hw7xyg1p79j&st=x251alb2&raw=1',
  },
  'Kết Cấu Thép - HCMUTE': {
    url: 'https://www.youtube.com/@HuynhThanhHuy-HCMUTE/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/7qjrj1nu42fa5syaieb36/K-t-C-u-Th-p-HCMUTE.png?rlkey=z24hfg8cu5pufgxjxgqhmlg6s&st=9jrqss81&raw=1',
  },
  'Hỗ Trợ Đồ Án Ngành KTXD': {
    url: 'https://www.youtube.com/@HotrodoankythuatxaydungKSV/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/vcxc0zk9sk6zm0uadx22z/H-Tr-DA-Ng-nh-K-Thu-t-X-y-D-ng-Trung-t-m-KSV.jpg?rlkey=hv1f9yljcsf4pf4wnzoao8w3p&st=zs35gwkv&raw=1',
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
