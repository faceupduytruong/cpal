const customThumbnails = {
   'Bất đẳng thức': 'https://www.dropbox.com/scl/fi/rd4b7oqa7is9flq3rvz9z/B-t-ng-th-c.jpg?rlkey=lvujqjjkq8z24mpr6hpt7p24c&st=g5cy0y6s&raw=1',
   'Chuỗi số': 'https://www.dropbox.com/scl/fi/n5hlv9d21bc1tffrrw0kj/Chu-i-s.jpg?rlkey=dkx4uej2ofhyvkvr01rip422r&st=pgs0mt7i&raw=1',
   'Giải phương trình': 'https://www.dropbox.com/scl/fi/9dxjn23hpocnwnrja2pc5/Gi-i-ph-ng-tr-nh.webp?rlkey=3vsavzi4es8eswqoff7aigyap&st=iguaw3ii&raw=1',
   'Giới hạn': 'https://www.dropbox.com/scl/fi/2uv9nogojtrctz2hnhz87/Gi-i-h-n.jpg?rlkey=4l87q4hgjp0kjtv96y70492dl&st=jgdx60mj&raw=1',
   'Hàm số': 'https://www.dropbox.com/scl/fi/rxytqn1kfi49n0nz480kv/Function.webp?rlkey=8zmfz2tndgqjifhwgumtuagu8&st=njmd77uv&raw=1',
   'Lượng giác': 'https://www.dropbox.com/scl/fi/wip9zsbx50rfmxn8gwthh/L-ng-gi-c.jpeg?rlkey=jjeby05ggp6fkltngclttuodo&st=6ncjb8of&raw=1',
   'Số nguyên': 'https://www.dropbox.com/scl/fi/e205t3mi73kh4q015vcjb/Integer.png?rlkey=d2clzsyh3ikao314yn6kambc7&st=e6bnhuta&raw=1',
   'Vector': 'https://www.dropbox.com/scl/fi/55wwh7eqh4w2xtj0g7189/Vector.jpg?rlkey=fgfmd4m46vnfdfja264vjuqd2&st=3594jubd&raw=1',
   'Xác suất': 'https://www.dropbox.com/scl/fi/bwrkn63ndnzgcvelht6ru/Probability.jpg?rlkey=i6dg8g0iyd8gn4nyulwvgom1n&st=4ue8j96f&raw=1',
   // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
   'Bất đẳng thức': ['Bất đẳng thức Bunhiacopxki.png', 'Chứng minh bất đẳng thức Young bằng Định lý giá trị trung bình Lagrange.png', 'Tìm giá trị nhỏ nhất của biểu thức dùng BĐT.png'],
   'Chuỗi số': ['Chỉnh hợp chập k-n.png', 'Chứng minh chuỗi số lớn hơn một số nào đó.png', 'Chứng minh dãy là một cấp số nhân.png', 'Dãy đơn điệu giảm và đơn điệu tăng.png', 'Số nguyên tố, số nguyên và số tự nhiên.png', 'Tách phân số.png', 'Tính tổng biểu thức chứa lũy thừa.png', 'Tổng cấp số cộng và cấp số nhân.png', 'Xác định số hạng tổng quát.png'],
   'Giải phương trình': ['Chứng minh phương trình có hai nghiệm phân biệt.png', 'Kiểm tra nghiệm thực của phương trình.png', 'Rút gọn biểu thức, Giải phương trình.png', 'Tìm nghiệm của biểu thức phức tạp.png', 'Tìm nhiều ẩn số chỉ với 1 phương trình.png', 'Đinh lý Vi-ét.png'],
   'Giới hạn': ['Tính lim khi x tiến tới vô cực.png'],
   'Hàm số': ['Biết đặc tính của hàm f(x) để tìm hàm f(x).png', 'Giải phương trình bằng vẽ hàm số đạo hàm.png', 'Tìm số thực để lim tồn tại hữu hạn.png', 'Đạo hàm của hàm hợp.png'],
   'Lượng giác': ['Phương trình lượng giác sinX = sinY.png'],
   'Số nguyên': ['Chứng minh một số là số nguyên tố.png', 'Số nguyên tố cùng nhau.png', 'Tính bình phương và căn bậc hai nhanh không cần máy tính.png'],
   'Vector': ['Tâm tỉ cự.png'],
   'Xác suất': ['Tổ hợp chập k-n.png'],
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
  'Olympic Toán Giải Tích': {
    url: 'https://www.youtube.com/@toangiaitich/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/mqguudgg05g1m3mpkwcfw/Olympic-To-n-Gi-i-T-ch.jpg?rlkey=i4kmvo42276dwq2vjrukyu3kn&st=wwvqcvhz&raw=1',
  },
  'Video Giải Violympic Toán': {
    url: 'https://www.youtube.com/@videogiaiviolympictoan5795/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/0co4riq28fj1dvtejzazp/Video-Gi-i-Violympic-To-n.png?rlkey=2s5g9hjyfxtkqc8jocdeyk104&st=1r262h0p&raw=1',
  },
  'Học Toán cùng Thầy Thắng': {
    url: 'https://www.youtube.com/@ThayThangTV/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/zztanlh8yjk71puywl1jj/H-c-To-n-c-ng-Th-y-Th-ng.jpg?rlkey=mxlki3n0cuf64gi9uey5uytz4&st=ej35j2hh&raw=1',
  },
  'Thầy Nguyễn Phan Tiến': {
    url: 'https://www.youtube.com/@Thay.NguyenPhanTien/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/hmhjjvcr2ave6a6p98aqo/Th-y-Nguy-n-Phan-Ti-n.jpg?rlkey=kdnvd9oo70jszvf0a5m3uj2qi&st=7ez2kl3o&raw=1',
  },
  'Tuyensinh247 - Học trực tuyến': {
    url: 'https://www.youtube.com/@tuyensinh247tv/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/s5lwtmmuib5xt95fn5w8u/Tuyensinh247-H-c-tr-c-tuy-n.png?rlkey=9z5ld8vi3ik71ohb8vaw5twla&st=sqxf4yr9&raw=1',
  },
  'CLB Bồi dưỡng Toán VietMath': {
    url: 'https://www.youtube.com/@CLBVietMath/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/lthniaii0xi48o0e2qpm8/CLB-B-i-d-ng-To-n-VietMath.jpg?rlkey=4mt1lu2earqzioypxm6sf0xyo&st=1qi6n218&raw=1',
  },
  'Thầy Hoàng Toán': {
    url: 'https://www.youtube.com/@Toanthayhoang6789',
    thumbnail: 'https://www.dropbox.com/scl/fi/gqqmoc0nuvgvdhp6udckj/Th-y-Ho-ng-To-n.jpg?rlkey=gpebq30imf9sm0rjdeil8yfxk&st=chzdsnq8&raw=1',
  },
  'Thầy Hoàng ơi!': {
    url: 'https://www.youtube.com/@ThayHoangoi/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/whgsr1oq8dve6aekamdtu/Th-y-Ho-ng-i.jpeg?rlkey=7uy6ngblsj4s1h2c7u0b6m2bp&st=2gufls9x&raw=1',
  },
  'tmttuan official': {
    url: 'https://www.youtube.com/@tmttuanofficial/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/fw34hijhwbj6rsnohei57/tmttuan-official.jpg?rlkey=hukrcymxeo9q38k8rj0c1zmqh&st=4rjxs564&raw=1',
  },
  'MS. T-L-A': {
    url: 'https://www.youtube.com/@iloveokmanhotboy85/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/me5mv1hh42y7adoly09za/MS.-T-L-A.webp?rlkey=39qi8d4i612zie91ygd7v5i2l&st=bnw9kwmr&raw=1',
  },
  'Vinastudy - Trường liên cấp': {
    url: 'https://www.youtube.com/@Vinastudy-Tr%C6%B0%E1%BB%9Dngh%E1%BB%8DcTo%C3%A1ntr%E1%BB%B1ctuy/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/s98niw9g4wosa3fcxm9fq/Vinastudy-Tr-ng-li-n-c-p.webp?rlkey=xpk6zg659g2mt6e2euc6ylxsr&st=9qvg6flp&raw=1',
  },
  'Toán Thú Vị': {
    url: 'https://www.youtube.com/@To%C3%A1nTh%C3%BAV%E1%BB%8B/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/vaspqxgpmu1tka0g2voed/To-n-Th-V.jpg?rlkey=acl3w97uwequ1jwgtjemyci3t&st=rd23nghz&raw=1',
  },
  'Phạm Mạnh Tuyến': {
    url: 'https://www.youtube.com/@tuyenpham29792/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/h87z2yni22z168litndio/Ph-m-M-nh-Tuy-n.jpg?rlkey=ae75na1ro7t02z0kmk0bdzhp7&st=00vqs84e&raw=1',
  },
  'GlassBox AI': {
    url: 'https://www.facebook.com/profile.php?id=61576693687932&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/sifdxv1ht763x2nel7g4o/GlassBox-AI.gif?rlkey=rbilphq4w3r6y0f7am2lacs3b&st=mr9tl1dp&raw=1',
  },
  'median': {
    url: 'https://www.youtube.com/@median-0/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/qv0a35xb9yz0ufvoajw6r/median.jpg?rlkey=6e7o5s9yg8tb3ugvk30uwgd1w&st=k08tinsy&raw=1',
  },
  'BinRiMath': {
    url: 'https://www.youtube.com/@binrimath/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/0y523oldbxarb1gx9z12x/BinRiMath.webp?rlkey=klchkeb49rjw7hvbrdzh8e0s6&st=qkiiyuo7&raw=1',
  },
  'Học Toán với 29 điểm đại học': {
    url: 'https://www.youtube.com/@29diem.daihoc/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/osqeu0eb4bb6484bjmamc/H-c-To-n-v-i-29-i-m-i-h-c.webp?rlkey=9w696y71gwokljsc2pus0oycp&st=x8qb9yzo&raw=1',
  },
  'Học viện AMURA': {
    url: 'https://www.youtube.com/@hocvienamura/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/wfv666x3sdhvom2i4wgkl/H-c-vi-n-AMURA.jpg?rlkey=uhuo83nb32inptvmimwwyujfg&st=amchfya3&raw=1',
  },
  'Nuôi Dạy Con Thông Minh': {
    url: 'https://www.youtube.com/@nuoidayconthongminh/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/48n5dz3f7j2s0dh4wknar/Nu-i-D-y-Con-Th-ng-Minh.webp?rlkey=atebjqqphr4mwdluldtnb1a57&st=m1bulln7&raw=1',
  },
  'Nuôi con thiên tài ': {
    url: 'https://www.facebook.com/profile.php?id=61579642148739',
    thumbnail: 'https://www.dropbox.com/scl/fi/f9aw5bp3sjuwbvy0ka3y5/Nu-i-con-thi-n-t-i.png?rlkey=rru2ndgtm7s7sdueow28ol8iv&st=oiecr8y9&raw=1',
  },   
  // thêm các mục khác nếu cần
};
