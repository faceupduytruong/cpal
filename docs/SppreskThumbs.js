const customThumbnails = {
  'School topics': 'https://www.dropbox.com/scl/fi/u5j4sef8ujs11jmt61cz6/School-topics.gif?rlkey=vm4h146yr0hdzy6xuerf85vng&st=o42fpmnb&raw=1',
  'Social topics': 'https://www.dropbox.com/scl/fi/hc8ecf4un7yfz2gjvx4al/Social-topics.webp?rlkey=46wezaze7ie67mzklblaxklma&st=46gvmb9r&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'School topics': ['Attending school has played a significant role (en).jpg', 'Attending school has played a significant role (vi).jpg', 'By using unlimited resources, I would (en).png', 'By using unlimited resources, I would (vi).png', 'English subject in curriculum (en).jpg', 'English subject in curriculum (vi).jpg', 'Make big decisions (en).png', 'Make big decisions (vi).png', 'Most courageous thing (en).png', 'Most courageous thing (vi).png', 'My boss, teacher improve their performance (en).png', 'My boss, teacher improve their performance (vi).png', 'One of my most embarrassing days in school (en).png', 'One of my most embarrassing days in school (vi).png', 'One of the most fun encounters (en).png', 'One of the most fun encounters (vi).png', 'Teacher - boss focus on (en) .jpg', 'Teacher - boss focus on (vi).jpg', 'The book that has impacted me the most (en).png', 'The book that has impacted me the most (vi).png'],
  'Social topics': ['Change the law related to punishing depression (en).jpg', 'Change the law related to punishing depression (vi).jpg', 'Conspiracy theories appeal to many people (en).jpg', 'Conspiracy theories appeal to many people (vi).jpg', 'If I could learn the whole truth behind (en).jpg', 'If I could learn the whole truth behind (vi).jpg', 'Improve my country (en).png', 'Improve my country (vi).png', 'Learning from our mistakes (en).png', 'Learning from our mistakes (vi).png', 'Local government (en).jpg', 'Local government improve the town (vi).jpg', 'Make big decisions 1 (en).png', 'Make big decisions 1 (vi).png', 'Make big decisions 2 (en).png', 'Make big decisions 2 (vi).png', 'Most significant human history event (en) .png', 'Most significant human history event (vi) .png', 'People laugh (en).png', 'People laugh (vi).png', "Society's unwritten rules (en).jpg", "Society's unwritten rules (vi).jpg", 'The current generation differs from (en).png', 'The current generation differs from (vi).png', 'The first law 1 (en).jpg', 'The first law 1 (vi).jpg', 'The first law 2 (en).jpg', 'The first law 2 (vi).jpg', 'The greatest invention of humanity is arguably (en).jpg', 'The greatest invention of humanity is arguably (vi).jpg', 'The ideal changes in my country (en).png', 'The ideal changes in my country (vi).png', 'The most unforgettable lessions from a mistake (en).jpg', 'The most unforgettable lessions from a mistake (vi).jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Nâng Cao Tự Tin': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Confide/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/wdqp4dut1x953ar8tnaex/Confide.webp?rlkey=h7iq454zqjyy1tdjmi4uw5lao&st=8dseqlnv&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/0vcqaf9dsdjeddunxb3my/Google-Translate.jpg?rlkey=w1xgsxebr8nymb4kz4qynj90m&st=rpxggygd&raw=1'
  },
  'VietnamWorks.com': {
    url: 'https://www.facebook.com/VietnamWorksFanpage/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/vl7kgg4e7zluxlkrejt3j/VietnamWorks.com.png?rlkey=3n1431lm6lg5x7f50vo43nj5b&st=v4m0dw5d&raw=1',
  },
  'Tuyển Dụng Xây Dựng Chất Lượng Cao': {
    url: 'https://www.facebook.com/tuyendungxaydungchatluongcao/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/67k7jzpzghohv5z63yc43/Tuy-n-d-ng-x-y-d-ng-ch-t-l-ng-cao.png?rlkey=s4mjfzk0dmalg45z3j2zucmmx&st=frpyoshm&raw=1',
  },
  'Hanoi Coaching Group': {
    url: 'https://www.facebook.com/hanoicoachinggroup/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/tml7pgrqud5y8vbhr5joh/Hanoi-Coaching-Group.jpg?rlkey=e3fly12286ss7ndiqshiaw7wa&st=nah908fn&raw=1',
  },
  'Phở Đặc Biệt': {
    url: 'https://www.facebook.com/phodacbiet.tv/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/5igfepfbuqobhx7wvcee6/Ph-c-Bi-t.png?rlkey=31gtjsvisyqoe92bqfzbwqozl&st=mrjyroy8&raw=1',
  },
  'Tuệ Nga': {
    url: 'https://www.facebook.com/tuenga1911/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/3grkt916b3ljyy8di980f/Tu-Nga.jpg?rlkey=306hcafnwh7yltirbkus8grp6&st=731b17g2&raw=1',
  },
  'Trò Chuyện Với Tương Lai': {
    url: 'https://www.facebook.com/trochuyenvoituonglai/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/eap3o0v3b3o8ypxr3zr9e/Tr-chuy-n-v-i-T-ng-Lai.jpg?rlkey=j6i91048e6oevxm8wqv103zap&st=8bnuu7rp&raw=1',
  },
  'Phát Triển Bản Thân Liên Tục': {
    url: 'https://www.facebook.com/groups/phattrienbanthanlientuc',
    thumbnail: 'https://www.dropbox.com/scl/fi/ees17ngvzumv0et65mthw/Ph-t-tri-n-B-n-Th-n-Li-n-T-c.jpg?rlkey=pea6pdt5hhztlnljopdcox13r&st=h1gmdwbm&raw=1',
  },
  'Đàm Tài Cap (Chia sẻ hay)': {
    url: 'https://www.facebook.com/media/set/?vanity=trainer.damtaicap&set=a.1873184089455350',
    thumbnail: 'https://www.dropbox.com/scl/fi/xwwvfqlk09jsrn5f464lp/m-T-i-Cap-Chia-s-hay.jpg?rlkey=mgecvd23iy9ma1emxs5tkbnmt&st=p2hlwei5&raw=1',
  },
  'Quản Trị Mạng (Kỹ năng mềm)': {
    url: 'https://quantrimang.com/cuoc-song/ky-nang-cong-viec',
    thumbnail: 'https://www.dropbox.com/scl/fi/ejxx8o1ozge6ggpdcbu8e/Qu-n-Tr-M-ng-K-n-ng-m-m.png?rlkey=f2lrip1w1vyxjraw672z3opid&st=m5fjcl9r&raw=1',
  },
  'Trần Toản': {
    url: 'https://www.facebook.com/trantoan886868/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/lq8c6arhkukj5rtu3kxy7/Tr-n-To-n.png?rlkey=uyhvegrw2wjywxod5tf90w5rn&st=ps6934jf&raw=1',
  },
  'Sách Hay Chọn Đọc': {
    url: 'https://www.facebook.com/sachhaychondoc/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/b39jkijbod2l1ig2s2biu/S-ch-Hay-Ch-n-c.png?rlkey=syz8wfg5yeuq578gt9jrnd1j4&st=vi15ljmg&raw=1',
  },
  'Dòng Chảy Tri Thức': {
    url: 'https://www.facebook.com/profile.php?id=61554500235289&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/gf0nd3kdaknferi6lkt3m/D-ng-Ch-y-Tri-Th-c.jpg?rlkey=xec41vlj5ylkwc37qk40oarea&st=2rxzppb8&raw=1',
  },
  'Trường doanh nhân HBR': {
    url: 'https://www.facebook.com/hbr.edu.vn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/fmd2etqlx7jxf4s7kffsk/Tr-ng-doanh-nh-n-HBR.jpg?rlkey=4ylg37vnru9tg745ulruih14l&st=q89i0xtz&raw=1',
  },
  'Bền Chí Thành Nhân': {
    url: 'https://www.facebook.com/profile.php?id=61579175547025&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/myrz9k1fbsrunltxdnyd4/B-n-Ch-Th-nh-Nh-n.png?rlkey=xdyjz96zt13qaz242mk40gyk7&st=42gz0011&raw=1',
  },
  'Đại Tướng Quân': {
    url: 'https://www.facebook.com/profile.php?id=61576922346529&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/bxiq0mn2ufhhcn00ppc6h/I-T-NG-QU-N.jpg?rlkey=ulmrbyq8zbrmzhlxzf2396vw7&st=fjbqlgv8&raw=1',
  },
  'Dám Ước Mơ': {
    url: 'https://www.facebook.com/info.damuocmo/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/3bffxiwfysp2134s1464k/D-m-c-M.png?rlkey=eqai0o3qiyzfi12hsn7hrkt8t&st=5e4iaaj6&raw=1',
  },
  'Cao Công Thành': {
    url: 'https://www.facebook.com/CaoCongThanhOfficial/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/41whnduk9dmm391z8o0br/Cao-C-ng-Th-nh.png?rlkey=uzrt4su0px7smp5a8juaqcdjy&st=e1sjecto&raw=1',
  },
  'Trần Trung Dũng': {
    url: 'https://www.facebook.com/tran.trung.dung.402075',
    thumbnail: 'https://www.dropbox.com/scl/fi/ka2373gb8wuih2ix99lcn/Tr-n-Trung-D-ng.png?rlkey=fq5eopiemt8uv5aa0o0hs5sn9&st=34s2ckf2&raw=1',
  },
  'Nguyễn Anh Tuấn (Online Business Mentor)': {
    url: 'https://www.facebook.com/nguyenanhtuan.mentor.official/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/409uhgkfvlra4r9u7lvl3/Nguy-n-Anh-Tu-n-Online-Business-Mentor.png?rlkey=6cxj0np4ch7q742tb6awz8beb&st=mgni2xic&raw=1',
  },
  'Trần Quốc Nhẫn (Trần Quốc Nhẫn)': {
    url: 'https://www.facebook.com/RichdadTran/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/3jrjcg8l9kp05fzlc4rmm/Tr-n-Qu-c-Nh-n-Tr-n-Qu-c-Nh-n.jpg?rlkey=lywgxsgpl8pzi4q1tn9oy441t&st=xage1tmq&raw=1',
  },
  'Đặng Thái Cường': {
    url: 'https://www.facebook.com/coachleocuong/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/6cd0ilr64butflt0rj9sy/ng-Th-i-C-ng.webp?rlkey=kob0y06l5hryt0mlnrrhmtbrj&st=fpevh9jx&raw=1',
  },
  'Trạm Học Nói': {
    url: 'https://www.facebook.com/TramhocNOI/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/nz1uy23n0lgvh0o6ttffx/Tr-m-h-c-N-I.png?rlkey=z61pu0doxsixrnls7t6o0pn0h&st=wn00gwlx&raw=1',
  },
  // thêm các mục khác nếu cần
};
