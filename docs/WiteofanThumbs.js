const customThumbnails = {
  Correct: 'https://www.dropbox.com/scl/fi/q5gagtnoopmbf33edflqj/Correct.jpg?rlkey=5ys6810syx4pssv2xz29g53ex&st=inw2u2gr&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Correct': ['13.jpg', '2024-06-27_142629.png', '54081682491_66ef4aae4e_o.jpg', '54081932388_f89072e603_o.jpg', '54081934043_b6faa64b2e_o.jpg', '54082009349_bf64e9e2ab_o.jpg', '54087232227_dd82c3c37e_o.jpg', '54088114151_2dac62ab7d_o.jpg', '54088114676_afe837497b_o.jpg', '54088360863_270b7d5613_o.jpg', '54088364343_7430403a59_o.jpg', '54088442179_2be9ab2abd_o.jpg', '54088565655_7b3cdc5a4e_o.jpg', '54106514751_b1da3fa712_o.jpg', '54106518201_51b8f2cde8_o.jpg', '54106518961_2c63ef5209_o.jpg', '54106520571_d49c98f641_o.jpg', '54106772083_c1cea3ea9d_o.jpg', '54106970245_e67af3a7c1_o.jpg', '54134209641_2762f98177_o.jpg', 'Các cụm từ đồng nghĩa.jpg', 'IMG_20241123_132415_023.jpg', 'IMG_20241123_132417_461.jpg', 'IMG_20241123_132504_256.jpg', 'IMG_20241123_132506_773.jpg', 'IMG_20241123_132511_389.jpg', 'IMG_20241123_132515_801.jpg', 'IMG_20241123_132518_387.jpg', 'IMG_20241123_132837_555.jpg', 'IMG_20241123_132840_605.jpg', 'IMG_20241123_132846_996.jpg', 'IMG_20241123_132855_352.jpg', 'IMG_20241123_133037_582.jpg', 'IMG_20241123_133041_906.jpg', 'IMG_20241123_133044_379.jpg', 'IMG_20241123_133046_730.jpg', 'IMG_20241123_133052_239.jpg', 'IMG_20241123_133054_774.jpg', 'IMG_20241123_133059_447.jpg', 'IMG_20241123_133109_355.jpg', 'IMG_20241123_133113_338.jpg', 'IMG_20241123_133115_588.jpg', 'IMG_20241123_133119_769.jpg', 'talkin_image_1729481005887.jpg', 'talkin_image_1729510535990.jpg', 'talkin_image_1729510564140.jpg', 'talkin_image_1730092658950.jpg', 'talkin_image_1730092675968.jpg', 'talkin_image_1730092682041.jpg', 'talkin_image_1730092684301.jpg', 'talkin_image_1730092686403.jpg', 'talkin_image_1730092689095.jpg', 'talkin_image_1730092801951.jpg', 'talkin_image_1730092804442.jpg', 'talkin_image_1730092807081.jpg', 'talkin_image_1730092892299.jpg', 'talkin_image_1730347998630.jpg', 'talkin_image_1730452489203.jpg', 'talkin_image_1730589289814.jpg', 'talkin_image_1730589298304.jpg', 'talkin_image_1731647778306.jpg', 'talkin_image_1731647918972.jpg', 'talkin_image_1731647921605.jpg', 'talkin_image_1731647923419.jpg', 'talkin_image_1731647924784.jpg', 'talkin_image_1733141439127.jpg', 'talkin_image_1733141440711.jpg', 'talkin_image_1733141443140.jpg', 'talkin_image_1733141445575.jpg', 'talkin_image_1733926430355.jpg', 'talkin_image_1735636053779.jpg', 'talkin_image_1737600676436.jpg', 'talkin_image_1738738320806.jpg', 'talkin_image_1739762933083.jpg', 'talkin_image_1740374468294.jpg', 'talkin_image_1740802771948.jpg', 'talkin_image_1741430852569.jpg', 'talkin_image_1741517474678.jpg', 'talkin_image_1742052104983.jpg', 'talkin_image_1742052106427.jpg', 'talkin_image_1742052113927.jpg', 'talkin_image_1742052115561.jpg', 'talkin_image_1742052124587.jpg', 'talkin_image_1742052129506.jpg', 'talkin_image_1742052136702.jpg', 'talkin_image_1742052137959.jpg', 'talkin_image_1742052146904.jpg', 'talkin_image_1742052148333.jpg', 'talkin_image_1742698592915.jpg', 'talkin_image_1742698655614.jpg', 'talkin_image_1743165813651.jpg', 'talkin_image_1743203148567.jpg', 'talkin_image_1744070510433.jpg', 'talkin_image_1756737627510.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Tuyển Tập Thơ': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Poetry/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/imj2rexi2hzcfzi1a5j8b/Tuy-n-T-p-Th.jpg?rlkey=80d6ggvusvpfptlmx84o073r6&st=ogxgaazn&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/d6uofipr89ll2pq3bpf11/Google-Translate.webp?rlkey=abj9tq2jo343jrzp2f6m9ud4k&st=bicdftgm&raw=1'
  },
  'Tâm thái điềm tĩnh': {
    url: 'https://www.facebook.com/tamthaidiemtinh/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/tgi88b6ch3yb1o3n2rett/T-m-th-i-i-m-t-nh.jpg?rlkey=vogilqzn3ow8cmpb9bef24jc9&st=zvpedlma&raw=1',
  },
  'Thanh Thao Tran': {
    url: 'https://www.facebook.com/thanhthao.tran.98284566',
    thumbnail: 'https://www.dropbox.com/scl/fi/14qz9ay0siouuimliscra/Thanh-Thao-Tran.jpg?rlkey=hy9bjvrza3g649ziye30j9hck&st=b2y3q7gm&raw=1',
  },
  'Giàu Tỉnh Thức': {
    url: 'https://www.youtube.com/@giautinhthuc.biquyetthanhcong/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/9uj9uvvt3b6d3fqen4hvw/Gi-u-T-nh-Th-c.jpg?rlkey=unh84z2rje0w6egywg64k87nx&st=e9hpovvh&raw=1',
  },
  'Chân Trời Tri Thức': {
    url: 'https://www.youtube.com/@Hello.ChanTroiTriThuc/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/23im75nynqernv1gqtr75/Ch-n-Tr-i-Tri-Th-c.jpg?rlkey=jf22yrhb1hbcw0py12keb3sv7&st=1vkoieuh&raw=1',
  },
  'Người Được Chọn Official': {
    url: 'https://www.youtube.com/@Ng%C6%B0%E1%BB%9Di%C4%90%C6%B0%E1%BB%A3cCh%E1%BB%8DnOfficial/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/pvpqm9zu3ith7um2erjfw/Ng-i-c-Ch-n-Official.webp?rlkey=q0mbanlrqyyfw2wcjlfmvy5zj&st=hq6fm86s&raw=1',
  },
  // thêm các mục khác nếu cần
};
