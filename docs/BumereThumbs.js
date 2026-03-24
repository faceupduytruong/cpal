const customThumbnails = {
  'School topics': 'https://www.dropbox.com/scl/fi/m73gxcbw9fv0xn6oqwye7/School-topics.avif?rlkey=1vvvc8ljpindiwk3abptovbfq&st=cpd9sjwb&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'School topics': ['Attending school has played a significant role (en).jpg', 'Attending school has played a significant role (vi).jpg', 'By using unlimited resources, I would (en).png', 'By using unlimited resources, I would (vi).png', 'English subject in curriculum (en).jpg', 'English subject in curriculum (vi).jpg', 'Make big decisions (en).png', 'Make big decisions (vi).png', 'Most courageous thing (en).png', 'Most courageous thing (vi).png', 'My boss, teacher improve their performance (en).png', 'My boss, teacher improve their performance (vi).png', 'One of my most embarrassing days in school (en).png', 'One of my most embarrassing days in school (vi).png', 'One of the most fun encounters (en).png', 'One of the most fun encounters (vi).png', 'Teacher - boss focus on (en) .jpg', 'Teacher - boss focus on (vi).jpg', 'The book that has impacted me the most (en).png', 'The book that has impacted me the most (vi).png'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Về Tình Yêu': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Love/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/0ts2ield0jhgkbw1pu3o2/S-ch-V-T-nh-Y-u.jpg?rlkey=uygmrrpefk0fcymbvn8qlxkpy&st=fh5v5pq2&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/d6uofipr89ll2pq3bpf11/Google-Translate.webp?rlkey=abj9tq2jo343jrzp2f6m9ud4k&st=bicdftgm&raw=1'
  },
  'Yến Nhi': {
    url: 'https://www.facebook.com/yennhi.vaphantamhoc/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/oxirtbayy0hwtc41v52qv/Y-n-Nhi.jpg?rlkey=o0x73tnal0lq1a6a10anyt5vj&st=kxnqixdp&raw=1',
  },
  'Đinh Ngọc Hiếu': {
    url: 'https://www.facebook.com/Dinhngochieu888/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ep2u3u9k4f15i9rbrb6uu/inh-Ng-c-Hi-u.jpg?rlkey=rakueu9fz4qrf37u5qqyizqzm&st=6mxpx6ow&raw=1',
  },
  'Vũ Minh Thúy': {
    url: 'https://www.facebook.com/MinhThuyVuOfficial/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/s6vs8pbn2rhzumqhwkihp/V-Minh-Th-y.jpg?rlkey=tqdpvi9qz35loc54g2d9xgivm&st=ssdi44ic&raw=1',
  },
  'Mr. CoBy': {
    url: 'https://www.youtube.com/@mrcoby79/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/otolpyow4x66e5o6y2o91/Mr.-CoBy.jpg?rlkey=jv4mdxuc7lhhjo7wl160sothh&st=ow2qa99q&raw=1',
  },
  'Tâm Lý Học Đám Đông': {
    url: 'https://www.facebook.com/tamlihocdamdong',
    thumbnail: 'https://www.dropbox.com/scl/fi/i1p1bk9w210ke1iyydo40/T-m-l-h-c-m-ng.jpg?rlkey=dwfa2ntgdi1c3z27jeog85wg8&st=g024u8u2&raw=1',
  },
  'Tâm Lý Học Thành Công': {
    url: 'https://www.facebook.com/tamlyhocthanhcong.alpha',
    thumbnail: 'https://www.dropbox.com/scl/fi/xbyrg9xvlbjo30kldplxw/T-m-L-H-c-Th-nh-C-ng.png?rlkey=w862i3vd0l73qum6xkftud84b&st=jwyucs2g&raw=1',
  },
  'Góc Khuất Tâm Lý': {
    url: 'https://www.facebook.com/gockhuattamly/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/k3wfs8n0fdcffd2rv3130/G-c-Khu-t-T-m-L.jpg?rlkey=xuxcnr1dk1kiko81nbohd7jea&st=bcyu2yge&raw=1',
  },
  'Câu Chuyện Hại Điện': {
    url: 'https://www.facebook.com/cchaidien/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/xd926ckzn1mzygsfjshbk/C-u-Chuy-n-H-i-i-n.jpg?rlkey=hnruq1ra0ivbatyg5zgwr45is&st=vswqy1ay&raw=1',
  },
  'Đường Hy Vọng': {
    url: 'https://www.facebook.com/trangduonghyvong/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/rjo39drvm8xtfg7zaryh5/ng-Hy-V-ng.jpg?rlkey=4e789wcnitcg9sup4yeudkqxq&st=y74gn9yc&raw=1',
  },
  'Người Bản Lĩnh': {
    url: 'https://www.facebook.com/nguoibl',
    thumbnail: 'https://www.dropbox.com/scl/fi/qrcyi8gz0twabbffi9wth/Ng-i-B-n-L-nh.png?rlkey=awl8oj9mqnopc8my9xhqfjxae&st=ayhxb7wy&raw=1',
  },
  'Hannah Thai - Trao Giá Trị': {
    url: 'https://www.facebook.com/hannahthaitraogiatri',
    thumbnail: 'https://www.dropbox.com/scl/fi/b8aennpospllwku3c7qg2/Hannah-Thai-Trao-Gi-Tr.jpg?rlkey=m487i102fog1hda9hitrfzcoi&st=sr6a29g5&raw=1',
  },
  'VPBank Bến Lức Long An': {
    url: 'https://www.facebook.com/Hotline.0908979767/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/tm2yf756p8hqanat91vkf/CommCredit-Long-An-T-n-D-ng-Ti-u-Th-ng-VPBank-B-n-L-c.webp?rlkey=wakihcitqjn1ibq4ow9t0jjmb&st=epumxqu3&raw=1',
  },
  'Nguyễn Văn Huân': {
    url: 'https://www.facebook.com/huanyoutube/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9fz9weve0j7nfaznvoxx5/Nguy-n-V-n-Hu-n.png?rlkey=h8m474wvj58p2dj53xm04yp3x&st=citl22ov&raw=1',
  },
  'Thành Công Cùng Tony': {
    url: 'https://www.facebook.com/ThanhCongCungTony/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/w0p1yjas1i2k7zh2x5ovl/Th-nh-C-ng-C-ng-Tony.png?rlkey=o9yoi853l1jr8perarsibsqg5&st=waas5d7g&raw=1',
  },
  'Nơi thời gian ngừng trôi': {
    url: 'https://www.facebook.com/noithoigianngungtroi11',
    thumbnail: 'https://www.dropbox.com/scl/fi/xnjkdjywb27je1yk5apm1/N-i-th-i-gian-ng-ng-tr-i.gif?rlkey=6gkmaelfeumrbb9zpgujmuv3a&st=oenw3djw&raw=1',
  },
  'Nguyễn Đan My': {
    url: 'https://www.facebook.com/nguyendanmy.minoi',
    thumbnail: 'https://www.dropbox.com/scl/fi/ggwwkx7vrfmk8xlsu20uf/Nguy-n-an-My.jpg?rlkey=61cwxdv9er3dil08d9aj3vd11&st=2my75fsw&raw=1',
  },
  'List Sách Hay Nên Đọc': {
    url: 'https://www.facebook.com/listsach/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/1uge85hfcktahz82mcn6f/List-S-ch-Hay-N-n-c.jpg?rlkey=7ebjsmij7daz995viz81a85ij&st=wgspmgkb&raw=1',
  },
  'Topmax Academy': {
    url: 'https://www.facebook.com/TopmaxAcademy1/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/3vrmq0re33kqm1zoiqqm3/Topmax-Academy.jpg?rlkey=v3v3t1b9al89u06fuwhi2efp6&st=9v36e88x&raw=1',
  },
  'Emily Chung Nguyen': {
    url: 'https://www.facebook.com/EmilyChungNguyen/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/069vci1z7kgburkva555z/Emily-Chung-Nguyen.png?rlkey=57i5hrkghx5g1huk4p43afywn&st=6aeisyvy&raw=1',
  },
  'Cơ Hội Kinh Doanh': {
    url: 'https://www.facebook.com/cafe.kinhdoanh.ek/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/orwuq8fjhyhjsxdxjnxmz/CO-HOI-KINH-DOANH.jpg?rlkey=t1rrpb4x1mcqertkq951p6y77&st=y12np3by&raw=1',
  },
  'Thêm Tổng': {
    url: 'https://www.facebook.com/themtong.88/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/ruzywrxeghbvhi5ej6jaj/Th-m-T-ng.jpg?rlkey=mfsgl7iv90iu1mty5371oap9x&st=dwybnaz6&raw=1',
  },
  'Phan Vinh Quang (Quang Run)': {
    url: 'https://www.facebook.com/vinhquang.phan.50/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/qzycvy359s6py8a7nzeq1/Phan-Vinh-Quang-Quang-Run.jpg?rlkey=uhzh0b1by87k5d70dne27t43h&st=r9jxpv4b&raw=1',
  },
  'Vũ Kim Khánh': {
    url: 'https://www.facebook.com/vukimkhanhofficial/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/mwfc92un2r047a0ga1xmm/V-Kim-Kh-nh.jpg?rlkey=3b6tkeruzafphwgqk6p4zuh7h&st=5c6f497o&raw=1',
  },
  'Dat Phi Nguyen (Phan Li)': {
    url: 'https://www.facebook.com/datphi.nguyen/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ozv5kox22dpl2ovm8q1ra/Dat-Phi-Nguyen-Phan-Li.webp?rlkey=a30y36ei6utesajjo72pjki8d&st=ctupeac7&raw=1',
  },
  'Master NLP Ngat Pro': {
    url: 'https://www.facebook.com/Master.NLP.Ngat.Pro/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ro92q3xixefuyn6myh7ce/Master-NLP-Ngat-Pro.jpg?rlkey=cn7g1z4l9zkzl2rdd7wid8cc9&st=z4pisrrw&raw=1',
  },
  'Tony Buổi Sáng': {
    url: 'https://www.facebook.com/profile.php?id=100091235509247&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/o41c8epcs00w19ng0gv38/Tony-Bu-i-S-ng.jpg?rlkey=muxz1zdtblno307zoh0d89zvm&st=lq1qh0t0&raw=1',
  },
  'Tú Tony (Chế tú hành tỏi)': {
    url: 'https://www.facebook.com/lam.ngocthe.3/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/w0b35b80x8s5rfeq08zq9/T-Tony-Ch-t-h-nh-t-i.jpg?rlkey=d7z5hdfnew0kjblyixi5zj2m1&st=1bpn7w2v&raw=1',
  },
  'KTS Nguyễn Hà Lam': {
    url: 'https://www.facebook.com/KTSNguyenHaLam/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9e3zpelmrsejhraghg3lx/KTS-Nguy-n-H-Lam.png?rlkey=mykhelpskrowbbavj9wvw5o8q&st=jscd7eoj&raw=1',
  },
  'Nguyễn Đức Thành': {
    url: 'https://www.facebook.com/nguyenthanh.1005/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/6alti459rh43fxw1brwya/Nguy-n-c-Th-nh.jpg?rlkey=3z18cufge07i71q6sl4iviisg&st=yderzsyr&raw=1',
  },
  'Nguyễn Xuân Thu': {
    url: 'https://www.facebook.com/Hoanganhtuantk',
    thumbnail: 'https://www.dropbox.com/scl/fi/gck3ebhbb18r3bufsbnw2/Nguy-n-Xu-n-Thu.png?rlkey=oxazjmk9gsg3b66ejz6il39nr&st=f4xrh86a&raw=1',
  },
  'Khevin - Sống Tử Tế': {
    url: 'https://www.facebook.com/profile.php?id=61584331948562&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/eul89jt1zq1ujyqxr409l/Khevin-S-ng-T-T.jpg?rlkey=pseb2657qfgygeqrif4fmg037&st=88a5t1k3&raw=1',
  },
  'Truyền Động Lực': {
    url: 'https://www.facebook.com/groups/2426705184317871/',
    thumbnail: 'https://www.dropbox.com/scl/fi/cgk31noistcg9bgaequ0o/Truy-n-ng-l-c.jpg?rlkey=evd6gbl806xtnx9r6hp3ucrir&st=n56k29ej&raw=1',
  },
  'Tư Duy Người Thành Công': {
    url: 'https://www.facebook.com/groups/1134653551104543/',
    thumbnail: 'https://www.dropbox.com/scl/fi/23e3r5uygjrkpq97r3bao/T-DUY-NG-I-TH-NH-C-NG.jpg?rlkey=w2qpymqe9mr92qk388w0uyv5o&st=6crc2nmn&raw=1',
  },
  'Hành Trình Nỗ Lực': {
    url: 'https://www.facebook.com/profile.php?id=61584734873015&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/51z4gr4ti8pwykk226fbh/H-nh-tr-nh-n-l-c.jpg?rlkey=5d0v3247r40bakgce130zex02&st=d4xrkw9m&raw=1',
  },
  'Đàm Tài Cap (Personal Growth)': {
    url: 'https://www.damtaicap.net/search/label/Personal%20Growth',
    thumbnail: 'https://www.dropbox.com/scl/fi/t3a6js7akcyx3mr0b84jh/m-T-i-Cap-Personal-Growth.jpg?rlkey=r7aug8qv9dkj4mjy9pp6qzzej&st=godwgvha&raw=1',
  },
  'Quản Trị Mạng (Kỹ Năng Sống)': {
    url: 'https://quantrimang.com/cuoc-song/ky-nang-song',
    thumbnail: 'https://www.dropbox.com/scl/fi/cu4oh3gep6djdg53zkix4/Qu-n-Tr-M-ng-K-N-ng-S-ng.jpg?rlkey=dfaz1wh07irye54faclrjydrz&st=ydnupyjj&raw=1',
  },
  'Glow Books - Hành Trình Tỏa Sáng': {
    url: 'https://www.facebook.com/GlowBooksVietnam/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/mfor4nlw7cquhxupxeodb/Glow-Books-H-nh-Tr-nh-T-a-S-ng.jpg?rlkey=yp293nxbm7b92g6ebv0x2iur0&st=rd5j895t&raw=1',
  },
  'Mintbooks': {
    url: 'https://www.facebook.com/mintbooks.vn/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/toee9nyronvcsitrapr1p/Mintbooks.png?rlkey=k5mo8130vw5op006n2myki6pg&st=a1tcpj3r&raw=1',
  },
  'Shinebooks - Sống thật': {
    url: 'https://www.facebook.com/shinebookssongthat/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/xqyg6vzw8s5qkcrjhn6bx/Shinebooks-S-ng-th-t.png?rlkey=4iqhq88obdcjzbh6aisou8qwe&st=zil3f4o5&raw=1',
  },
  // thêm các mục khác nếu cần
};
