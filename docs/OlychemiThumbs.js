const customThumbnails = {
  'Chất hóa học': 'https://www.dropbox.com/scl/fi/swqhj3eohxpl61c263vh6/Ch-t-h-a-h-c.jpeg?rlkey=r5s1cfaeoj576g2vmodyyx3ud&st=gktwmzt7&raw=1',
  'Cấu tạo': 'https://www.dropbox.com/scl/fi/ubkw2njw5uht0z8uazoe8/Composition.avif?rlkey=fviqt5b9m7pu2gxr5cer2l9d9&st=9h9qmams&raw=1',
  'Oxy hóa': 'https://www.dropbox.com/scl/fi/3eg4ym9xjitiuxqwrgf5z/Moles.jpg?rlkey=35jmqmrmfs09rgokzzea3ykvx&st=8g9xky6u&raw=1',
  'Phản ứng': 'https://www.dropbox.com/scl/fi/9wwtwl6xyho9ky60cna69/Ph-n-ng.gif?rlkey=r1qopm71nfhg74k0x3i17mi9v&st=i6k5w653&raw=1',
  'Sản phẩm': 'https://www.dropbox.com/scl/fi/vx6zksyqhyqxl9jb840tp/S-n-ph-m.png?rlkey=53x9xvymjzf319hdjm3l7kvoj&st=dy6t50sa&raw=1',
  'Số mole': 'https://www.dropbox.com/scl/fi/g0o2nt9v66qckw3wamjfr/Oxidation.jpg?rlkey=oh3v3il427b9yo9asw0t410xm&st=zns13onm&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
'Chất hóa học': ['Tất tần tật về H2SO4 (Sulphuric Acid).webp'],
'Cấu tạo': ['Công thức cấu tạo của Ethylhexyl palmitate.png'],
'Oxy hóa': ['Chất oxi hóa trong quá trình chuyển hóa glucose thành acetic acid.png', 'Quá trình Oxi hóa Nitrogen.png'],
'Phản ứng': ['Phản ứng của các chất hóa học vô cơ lớp 11.webp'],
'Sản phẩm': ['Chất và các sản phẩm hóa học trong đời sống.webp'],
'Số mole': ['Sản xuất bánh xà phòng.png'],
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
  'Thầy Hải - Dạy Hóa Online': {
    url: 'https://www.youtube.com/@Th%E1%BA%A7yH%E1%BA%A3i-D%E1%BA%A1yH%C3%B3aOnline/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/qodpiknfts7yg0t0hi9cp/Th-y-H-i-D-y-H-a-Online.jpg?rlkey=42cgvwtj5xa6bzdu6usl8icgk&st=gt0e0d21&raw=1',
  },
  'Cô Bích Ngọc Hóa học': {
    url: 'https://www.youtube.com/@bichngoc2130/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/k5g4mrpuun3krak4d1pue/C-B-ch-Ng-c-H-a-h-c.jpg?rlkey=fa1cpd4fv9dq79dk647vrqon5&st=lux4rhv2&raw=1',
  },
  'Môn hóa Online MHT': {
    url: 'https://www.youtube.com/@monhoaonlinemhtchemprogift2232/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/wn01syf80vduru8xz0gpx/M-n-h-a-Online-MHT.png?rlkey=s67i3nl6mbtxy81d5y1z7gko9&st=fflxdvkc&raw=1',
  },
  'Thầy Hà Văn Luận': {
    url: 'https://www.youtube.com/@Th%E1%BA%A7yH%C3%A0V%C4%83nLu%E1%BA%ADn/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/2hnn6nnui041flxwoe39t/Th-y-H-V-n-Lu-n.jpg?rlkey=w3kvgxxty6dziydko2ein3gq4&st=im9v2mow&raw=1',
  },
  'Thầy Ngọc Anh Hóa': {
    url: 'https://www.youtube.com/@thayngocanhhoahoc/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/mrwy4v2r4i97bnftwa07m/Th-y-Ng-c-Anh-Luy-n-Thi-H-a-10-11-12.jpg?rlkey=y0yvfqohv9vkd4ldxk1k0f0ft&st=jdn3yxdf&raw=1',
  },
  'Hóa học THCS 89': {
    url: 'https://www.youtube.com/@H%C3%B3ah%E1%BB%8DcTHCS89/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/aaqa1lg3xvfb7gd2401eh/H-a-h-c-THCS-89.png?rlkey=uqhlgd8nj4jmroaq8uscbpq3h&st=quiwsyys&raw=1',
  },
  'Hóa THCS': {
    url: 'https://www.youtube.com/@hoathcs1083/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/615aj1lc0i57z9x3opdp1/H-a-THCS.jpg?rlkey=l3wgkj6f9m0vqntjr40n5g02x&st=i0xrdnjb&raw=1',
  },
  'Pham Van Trong': {
    url: 'https://www.youtube.com/@phamvantrong8277/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/n9cade0h5qo7gclvpc17h/Pham-Van-Trong.png?rlkey=20tzxmbkfxohtzc5g4g6ky8fe&st=pzfiiim4&raw=1',
  },
  'Thầy Lâm Mạnh Cường': {
    url: 'https://www.youtube.com/@LamManhCuong/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/o9qcynbz8mp5hepzr4p10/Th-y-L-m-M-nh-C-ng.png?rlkey=wldbw8ttpa6ol4aa1qh19ordt&st=cxfy1a9i&raw=1',
  },
  'Thầy Quang': {
    url: 'https://www.youtube.com/@TH%E1%BA%A6YQUANG/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/9r7ad51r1t07kyrbsumoe/Th-y-Quang.jpg?rlkey=2jpbtmbg9uybw06t30cl9wh4e&st=rea13azz&raw=1',
  },
  'Học Hóa Youtube': {
    url: 'https://www.youtube.com/@H%E1%BB%8DcH%C3%B3aYoutube/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/xbd4ybm14aqe3ry2elv8u/H-c-H-a-Youtube.jpg?rlkey=hikxgo7fkqv5s72ixq9ye246e&st=xj1dz5h4&raw=1',
  },
  'Hóa Học Anh Kay': {
    url: 'https://www.youtube.com/@hoahocanhkay/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/rwhc8y441asdesblvjy8f/H-a-H-c-Anh-Kay.jpg?rlkey=h5voizo3988y06qif92kh28fi&st=pfbydcz6&raw=1',
  },
  'elm zai chị Nguyệt': {
    url: 'https://www.youtube.com/@Elmzaich%E1%BB%8BNguy%E1%BB%87t',
    thumbnail: 'https://www.dropbox.com/scl/fi/bqsrrtgdesb4t4fpk8g30/elm-zai-ch-Nguy-t.webp?rlkey=juf4mik4f00lvjxog92sqro3o&st=topvsj7x&raw=1',
  },
  'Tôi Yêu Hóa Học': {
    url: 'https://www.facebook.com/hoctothoahoc/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/8wzdmlrkmfoihepai1203/T-i-Y-u-H-a-H-c.gif?rlkey=f5lmv0p8nf0i7szt6lbnj64nq&st=hywfrbde&raw=1',
  },
  // thêm các mục khác nếu cần
};
