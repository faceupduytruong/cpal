const customThumbnails = {
  Sentence: 'https://www.dropbox.com/scl/fi/g3g4ngi73tedvukr4sy49/Sentences.jpeg?rlkey=lo79o8ejxnq6z3c3ytfrk1tyi&st=hg0deq02&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Sentence': ['1.jpg', '10 cách nói thay thế cho Do you understand.png', '10 câu nói thể hiện sự tức giận.jpg', '11 cau giao tiep thong dung.jpg', '11.jpg', '12 cách xin lỗi trong tiếng Anh.jpg', '12.jpg', '13 tên cơ quan trong tiếng Anh.jpg', '14 câu giao tiếp thông dụng.jpg', '15 cách thể hiện ý kiến bản thân.jpg', '15 câu nói giao tiếp thông dụng.jpg', '15 cặp từ trái nghĩa phổ biến.jpg', '16 từ mới về dụng cụ nhà bếp.jpg', '17 tu vung ve thanh pho.jpg', '17 từ vựng môn học trường đại học.jpg', '18 từ vựng với nghĩa bạn.jpg', '19 câu nói giao tiếp thông dụng.jpg', '2.jpg', '20 câu giao tiếp tiếng Anh cửa miệng.jpg', '20 tính từ chỉ tính cách.jpg', '20 từ chỉ bầy đàn.jpg', '20 động từ về cách chế biến món ăn.jpg', '21 cụm động từ thông dụng với P.jpg', '21 tinh tu mo ta cam xuc.jpg', '21 tên quả VN trong tiếng Anh.jpg', '21 từ vựng về đồ ăn đồ uống.jpg', '22 câu tiếng Anh thể hiện cảm xúc.jpg', '22 cụm từ thường gặp trong giao tiếp.jpg', '22 tính từ kèm giới từ thông dụng.jpg', '54112213632_118bc389fe_o.jpg', '54113535830_b3f28655e7_o.jpg', '54134214611_92f358ed88_o.jpg', '7.jpg', '8.jpg', 'Bí quyết học IETLS 8.0.png', 'Câu giao tiếp đón khách tới nhà.jpg', 'FB_IMG_1732513678361.jpg', 'FB_IMG_1732513680669.jpg', 'FB_IMG_1732513682912.jpg', 'FB_IMG_1732967142157.jpg', 'FB_IMG_1732967144317.jpg', 'FB_IMG_1732967146577.jpg', 'FB_IMG_1732967148622.jpg', 'FB_IMG_1732967150584.jpg', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_12_17__11_14_12.1.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_12_17__11_14_12.4.png', 'IMG_20250902_212546_687.jpg', 'IMG_20250902_212548_796.jpg', 'IMG_20250902_212550_818.jpg', 'IMG_20250902_212553_045.jpg', 'IMG_20250902_212555_749.jpg', 'IMG_20250902_212558_064.jpg', 'IMG_20250902_212600_313.jpg', 'IMG_20250902_212602_515.jpg', 'IMG_20250902_212604_626.jpg', 'IMG_20250902_212609_094.jpg', 'Miêu tả thời tiết trong tiếng Anh.jpg', 'Một số từ chỉ số lượng.jpg', 'Những động từ luôn đi kèm với giới từ In.jpg', 'Stir up.png', 'talkin_image_1729480823509.jpg', 'talkin_image_1729480825034.jpg', 'talkin_image_1729480827712.jpg', 'talkin_image_1729481132916.jpg', 'talkin_image_1729481181803.jpg', 'talkin_image_1729481183912.jpg', 'talkin_image_1729489511568.jpg', 'talkin_image_1729508828311.jpg', 'talkin_image_1729510493240.jpg', 'talkin_image_1729510494755.jpg', 'talkin_image_1729510497400.jpg', 'talkin_image_1729510499844.jpg', 'talkin_image_1729510542711.jpg', 'talkin_image_1729510555805.jpg', 'talkin_image_1729510611533.jpg', 'talkin_image_1729561848405.jpg', 'talkin_image_1729833822047.jpg', 'talkin_image_1730000783629.jpg', 'talkin_image_1730000784874.jpg', 'talkin_image_1730032808812.jpg', 'talkin_image_1730032810119.jpg', 'talkin_image_1730032812654.jpg', 'talkin_image_1730032815217.jpg', 'talkin_image_1730032821291.jpg', 'talkin_image_1730032822890.jpg', 'talkin_image_1730032825126.jpg', 'talkin_image_1730032826891.jpg', 'talkin_image_1730092660551.jpg', 'talkin_image_1730347845175.jpg', 'talkin_image_1730348219239.jpg', 'talkin_image_1730449554909.jpg', 'talkin_image_1730449556168.jpg', 'talkin_image_1730449563763.jpg', 'talkin_image_1730449565053.jpg', 'talkin_image_1730449567488.jpg', 'talkin_image_1730449570035.jpg', 'talkin_image_1730452437470.jpg', 'talkin_image_1730452438928.jpg', 'talkin_image_1730452446226.jpg', 'talkin_image_1730452447504.jpg', 'talkin_image_1730452449862.jpg', 'talkin_image_1730452473012.jpg', 'talkin_image_1730452474292.jpg', 'talkin_image_1730452476696.jpg', 'talkin_image_1730452729275.jpg', 'talkin_image_1730452730625.jpg', 'talkin_image_1730452733126.jpg', 'talkin_image_1730452735629.jpg', 'talkin_image_1730549220263.jpg', 'talkin_image_1730549221481.jpg', 'talkin_image_1730549224105.jpg', 'talkin_image_1730549234855.jpg', 'talkin_image_1730549236168.jpg', 'talkin_image_1730549238602.jpg', 'talkin_image_1730549240259.jpg', 'talkin_image_1730589285221.jpg', 'talkin_image_1730589303076.jpg', 'talkin_image_1730589304271.jpg', 'talkin_image_1730589705864.jpg', 'talkin_image_1730589707123.jpg', 'talkin_image_1730589709660.jpg', 'talkin_image_1730589715076.jpg', 'talkin_image_1730589716314.jpg', 'talkin_image_1730589718767.jpg', 'talkin_image_1730589721679.jpg', 'talkin_image_1730589728152.jpg', 'talkin_image_1730589729489.jpg', 'talkin_image_1730589731929.jpg', 'talkin_image_1730589734481.jpg', 'talkin_image_1730589740622.jpg', 'talkin_image_1730589741882.jpg', 'talkin_image_1730589744365.jpg', 'talkin_image_1730589746893.jpg', 'talkin_image_1730591123855.jpg', 'talkin_image_1731467637572.jpg', 'talkin_image_1731593484946.jpg', 'talkin_image_1731597365165.jpg', 'talkin_image_1731648017484.jpg', 'talkin_image_1731654599510.jpg', 'talkin_image_1731824655263.jpg', 'talkin_image_1734791081777.jpg', 'talkin_image_1735318679712.jpg', 'talkin_image_1735535952330.jpg', 'talkin_image_1735554140120.jpg', 'talkin_image_1735867231851.jpg', 'talkin_image_1735867236380.jpg', 'talkin_image_1735867242240.jpg', 'talkin_image_1735867245087.jpg', 'talkin_image_1735867249221.jpg', 'talkin_image_1735867252566.jpg', 'talkin_image_1735867264772.jpg', 'talkin_image_1735867301046.jpg', 'talkin_image_1735898363804.jpg', 'talkin_image_1735898365327.jpg', 'talkin_image_1735898367501.jpg', 'talkin_image_1735898371927.jpg', 'talkin_image_1735898373665.jpg', 'talkin_image_1735898375559.jpg', 'talkin_image_1739680739047.jpg', 'talkin_image_1739680853355.jpg', 'talkin_image_1740328754824.jpg', 'talkin_image_1740328756246.jpg', 'talkin_image_1740328758594.jpg', 'talkin_image_1740328761404.jpg', 'talkin_image_1741170001214.jpg', 'talkin_image_1741349911146.jpg', 'talkin_image_1742052159201.jpg', 'talkin_image_1742698643439.jpg', 'talkin_image_1742698647476.jpg', 'talkin_image_1743165818672.jpg', 'talkin_image_1743250139633.jpg', 'talkin_image_1743492486650.jpg', 'talkin_image_1743492488173.jpg', 'talkin_image_1743492490650.jpg', 'talkin_image_1743492493149.jpg', 'talkin_image_1756737277917.jpg', 'talkin_image_1756775337972.jpg', 'talkin_image_1756776232196.jpg', 'talkin_image_1756776795928.jpg', 'talkin_image_1756807834223.jpg', 'talkin_image_1756807890245.jpg', 'talkin_image_1756808085101.jpg', 'talkin_image_1756808118052.jpg', 'talkin_image_1756808153027.jpg', 'talkin_image_1756808187958.jpg', 'talkin_image_1756808257800.jpg', 'talkin_image_1756864940234.jpg', 'talkin_image_1756864941501.jpg', 'talkin_image_1756864943989.jpg', 'talkin_image_1756864948042.jpg', 'talkin_image_1756864949223.jpg', 'talkin_image_1756864953295.jpg', 'talkin_image_1756864954710.jpg', 'talkin_image_1756864956682.jpg', 'talkin_image_1757044119683.jpg', 'talkin_image_1757333747130.jpg', 'talkin_image_1757430766057.jpg', 'talkin_image_1759074580585.jpg', 'talkin_image_1759366671070.jpg', 'talkin_image_1759366672415.jpg', 'talkin_image_1759366674683.jpg', 'talkin_image_1759403477527.jpg', 'talkin_image_1760407853649.jpg', 'Đầu từ.png'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Nâng Cao Tự Tin': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Confide/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/wdqp4dut1x953ar8tnaex/Confide.webp?rlkey=h7iq454zqjyy1tdjmi4uw5lao&st=8dseqlnv&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/d6uofipr89ll2pq3bpf11/Google-Translate.webp?rlkey=abj9tq2jo343jrzp2f6m9ud4k&st=bicdftgm&raw=1'
  },
  'HuyK - Mê kim hoàn': {
    url: 'https://www.facebook.com/huy.mekimhoan/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/kye5h2hvybw9rar9194gz/HuyK-M-kim-ho-n.png?rlkey=i0ibxu9i4d8v3oaz1o0c6wbel&st=tpi4w7x9&raw=1',
  },
  'HuyK Viễn Chí Bảo': {
    url: 'https://www.facebook.com/huyk.vienchibao01/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/vx1aip48whfxkgecqdzf4/HuyK-Vi-n-Ch-B-o.png?rlkey=78ukosi0mrr6hr2k66et2y9al&st=878u2v43&raw=1',
  },
  'Doanh Nhân Kiến Quốc Group': {
    url: 'https://www.facebook.com/doanhnhankienquocgroup/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/conngacapywu3vy2joe0c/Doanh-Nh-n-Ki-n-Qu-c-Group.jpg?rlkey=4i38xfmnaksdpyjvx5cbhjw4f&st=w1z99cpr&raw=1',
  },
  'Nguyễn Ngọc Sơn': {
    url: 'https://www.facebook.com/NguyenNgocSonCEO.102/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/378e6vwztho6snym5o76g/Nguy-n-Ng-c-S-n.png?rlkey=m0gx6o4v519h190zs49d4kf8t&st=4vxq6h3q&raw=1',
  },
  'Nguyễn Thanh Hải': {
    url: 'https://www.facebook.com/thanhhaiathenco/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/1tahv7m0z42somh8lqiza/Nguy-n-Thanh-H-i.png?rlkey=z6jbulsle0h2kcl0tskqnsghk&st=x1jm791u&raw=1',
  },
  'Chu Quang Minh': {
    url: 'https://www.facebook.com/cqm10x/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/41r33ahnzo5h5ltroe3ep/Chu-Quang-Minh.png?rlkey=xr48942q1zn7q8t692boyt7yy&st=4srrtql2&raw=1',
  },
  'Tony Dzung': {
    url: 'https://www.facebook.com/tonydzung.com.vn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/pmdrlffld7jkxb8ku9psh/Tony-Dzung.jpg?rlkey=q6u1n2d3nj9un2l4swqlwdsch&st=1vh1sez4&raw=1',
  },
  'Master Anh Đức (Nguyễn Anh Đức)': {
    url: 'https://www.facebook.com/MasterAnhDucOfficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/srczs0lzb5y1sgp9n49j0/Master-Anh-c-Nguy-n-Anh-c.jpg?rlkey=btd9bg6nidwkwnw2syyoabjfk&st=0a6iyze0&raw=1',
  },
  'Trần Toản': {
    url: 'https://www.facebook.com/trantoan886868/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/lq8c6arhkukj5rtu3kxy7/Tr-n-To-n.png?rlkey=uyhvegrw2wjywxod5tf90w5rn&st=8s2s86ic&raw=1',
  },
  'Nguyễn Trí Hạo': {
    url: 'https://www.facebook.com/profile.php?id=100083069565503&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/t1u9yvk8q2mav1htak5zw/Nguy-n-Tr-H-o.jpg?rlkey=9zzqd2mqvcnf1x7s5t1mwgf8h&st=qoznm9h7&raw=1',
  },
  'Đỗ Tâm': {
    url: 'https://www.facebook.com/DIENGIA.DOTAM/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/7qr1px9jjuhsd1g7xcc55/T-m.jpg?rlkey=ejnyrur500jw4r4qjs4f8vs4e&st=g7b2cmyh&raw=1',
  },
  // thêm các mục khác nếu cần
};
