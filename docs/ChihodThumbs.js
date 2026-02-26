const customThumbnails = {
   Kids: 'https://www.dropbox.com/scl/fi/be1qp5onxtocme5sigdc0/Kids.webp?rlkey=orv830o72g911dg1erfl3l59b&st=jlq8wout&raw=1',
   // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Kids': ['16.jpg', '54087230077_fefdb44966_o.jpg', '54105660157_6a252542eb_o.jpg', '54106528541_eb1390a0a7_o.jpg', '54106854519_7ca8b893c7_o.jpg', 'Beach.png', 'FB_IMG_1730377198004.jpg', 'FB_IMG_1730377200567.jpg', 'FB_IMG_1730377202864.jpg', 'FB_IMG_1730377205059.jpg', 'FB_IMG_1730377208249.jpg', 'FB_IMG_1730377210952.jpg', 'FB_IMG_1730377212910.jpg', 'Fruit in English.jpg', 'ht-save-2024-08-22 14_04_52.jpg', 'Học cách gọi động vật qua hình (1).png', 'Học cách gọi động vật qua hình (2).png', 'Học cách gọi động vật qua hình (3).png', 'IMG_20250902_212452_543.jpg', 'IMG_20250902_212455_800.jpg', 'IMG_20250902_212458_217.jpg', 'talkin_image_1729480708138.jpg', 'talkin_image_1729481051215.jpg', 'talkin_image_1729481149566.jpg', 'talkin_image_1729510066336.jpg', 'talkin_image_1729510288710.jpg', 'talkin_image_1729561395894.jpg', 'talkin_image_1729561415437.jpg', 'talkin_image_1729561425626.jpg', 'talkin_image_1729825390460.jpg', 'talkin_image_1729908568924.jpg', 'talkin_image_1729922528127.jpg', 'talkin_image_1730092587171.jpg', 'talkin_image_1730092663007.jpg', 'talkin_image_1730347838913.jpg', 'talkin_image_1730347897395.jpg', 'talkin_image_1730347901372.jpg', 'talkin_image_1730347905651.jpg', 'talkin_image_1730454927213.jpg', 'talkin_image_1730454928914.jpg', 'talkin_image_1730454931771.jpg', 'talkin_image_1730454934507.jpg', 'talkin_image_1730454939425.jpg', 'talkin_image_1730454940849.jpg', 'talkin_image_1730454943821.jpg', 'talkin_image_1730454945923.jpg', 'talkin_image_1731647889959.jpg', 'talkin_image_1731654471618.jpg', 'talkin_image_1731654474102.jpg', 'talkin_image_1731654476714.jpg', 'talkin_image_1731673105475.jpg', 'talkin_image_1731673106971.jpg', 'talkin_image_1731673109484.jpg', 'talkin_image_1731673112044.jpg', 'talkin_image_1732064698659.jpg', 'talkin_image_1732064701641.jpg', 'talkin_image_1732064714173.jpg', 'talkin_image_1732064717001.jpg', 'talkin_image_1732064719564.jpg', 'talkin_image_1733140120284.jpg', 'talkin_image_1735554141564.jpg', 'talkin_image_1735636045832.jpg', 'talkin_image_1735636516609.jpg', 'talkin_image_1735636538331.jpg', 'talkin_image_1735636987417.jpg', 'talkin_image_1735636996013.jpg', 'talkin_image_1735637034667.jpg', 'talkin_image_1735637087831.jpg', 'talkin_image_1735637119863.jpg', 'talkin_image_1735644721700.jpg', 'talkin_image_1735897454903.jpg', 'talkin_image_1737030067756.jpg', 'talkin_image_1737030259614.jpg', 'talkin_image_1740374477885.jpg', 'talkin_image_1740374505319.jpg', 'talkin_image_1740374510694.jpg', 'talkin_image_1740837516030.jpg', 'talkin_image_1740877217366.jpg', 'talkin_image_1740988524051.jpg', 'talkin_image_1741296458638.jpg', 'talkin_image_1741296467275.jpg', 'talkin_image_1741338928084.jpg', 'talkin_image_1741349918563.jpg', 'talkin_image_1741387082037.jpg', 'talkin_image_1741496758148.jpg', 'talkin_image_1741496759930.jpg', 'talkin_image_1741514497783.jpg', 'talkin_image_1742698651274.jpg', 'talkin_image_1742698659224.jpg', 'talkin_image_1752933806920.jpg', 'talkin_image_1752933808321.jpg', 'talkin_image_1756777622249.jpg', 'talkin_image_1756777629920.jpg', 'talkin_image_1756777729054.jpg', 'talkin_image_1757316133865.jpg', 'talkin_image_1757316594147.jpg', 'talkin_image_1760070348014.jpg', 'talkin_image_1760070353200.jpg', 'talkin_image_1760184470088.jpg', 'talkin_image_1760184471487.jpg', 'talkin_image_1760184524284.jpg', 'Vegetables.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Kể Chuyện': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Story/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/mzn88e97lpg5o4wgqw3cx/S-ch-K-Chuy-n.webp?rlkey=71udzkkrr0jw2plf77s72ebxg&st=zbnf1h9g&raw=1',
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/6686b8zwwloagxpcjanql/Google-Translate.jpg?rlkey=62s6qak72385hqbiod8414f1b&st=suqz7c3v&raw=1'
  },
  'Nam Khánh': {
    url: 'https://www.facebook.com/namkhanh1003asd/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4bx4scdl908i34ghbxzbc/Nam-Kh-nh.gif?rlkey=x1gypfs00jg8ngotnu49gj1ah&st=f64u4fbt&raw=1'
  },
 'Nguyệt Moon': {
    url: 'https://www.facebook.com/MoonlyNguyet/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/nhz295ozka62xs2300qo4/Nguy-t-Moon.webp?rlkey=lul7xbb7wchdhpmujaddr0ruk&st=krw2n1u3&raw=1'
  },
 'Trần Quốc Phúc': {
    url: 'https://www.facebook.com/tranquocphuc.taovang/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4svtcowh2tl67861sfpe0/Tr-n-Qu-c-Ph-c.jpg?rlkey=qlv6xyteubpp51n9gygqsl9os&st=qmw91ws9&raw=1'
  },
  'Phạm Ngọc': {
    url: 'https://www.facebook.com/KenhPhuNuPhamNgoc/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/uibt8yvfg1uav75omxo7v/Ph-m-Ng-c.jpg?rlkey=pinpbjl7clls25u8tz6ouv7jb&st=7y2ovna5&raw=1',
  },
 'Future Me': {
    url: 'https://www.facebook.com/futuremeV/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/bv2eqs9zbuo49fx1giu6k/Future-Me.png?rlkey=xjyb7413oa4vbfj7wkp6t4qgt&st=1w20jca3&raw=1'
  },
  'Mẹ Bơ - Giáo dục não phải': {
    url: 'https://www.facebook.com/giaoducnaophai/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/j8toyzb0km4gjf7dkho4o/M-B-Gi-o-d-c-n-o-ph-i.png?rlkey=57ngtkd48llliec3zlymz6zmx&st=hp803psa&raw=1',
  },
  'Sách Cha Mẹ - Thái Hà Books': {
    url: 'https://www.facebook.com/wikichamethb/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9mdjkiulyevtxy8924opb/S-ch-Cha-M-Th-i-H-Books.png?rlkey=k3z1xhw2bt3z83npf16ttj3vb&st=ku7w4pi7&raw=1'
  },
  'Trịnh Việt Trinh (Lâm Bình Yên)': {
    url: 'https://www.facebook.com/trinh.viet.trinh.265984/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/smsq7va4ee4gcnfrqxget/Tr-nh-Vi-t-Trinh.jpg?rlkey=5lsqdyqtxfir65hol8xzrljdv&st=pxetvhrg&raw=1',
  },
 'Dược Sĩ Đại Minh': {
    url: 'https://www.youtube.com/@dsdaiminh88/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/gn0edpxb5zk7pl10rkqrw/D-c-S-i-Minh.jpg?rlkey=0hyzegspdwupvccy0sfw9bmxq&st=eo91n1z5&raw=1'
  },
 'Vinmec Integrated Mental Health Center - Sức khỏe Tinh thần Tích hợp Vinmec': {
    url: 'https://www.facebook.com/ttsuckhoetinhthantichhopvinmec/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/v38c70lqn85ov9pdtx4w0/Vinmec-Integrated-Mental-Health-Center-S-c-kh-e-Tinh-th-n-T-ch-h-p-Vinmec.jpg?rlkey=g9us95xdamnv8gc4bv8b6wamh&st=5915v0w2&raw=1'
  },
 'Bác sĩ Nguyên': {
    url: 'https://www.youtube.com/c/B%C3%A1cs%C4%A9Nguy%C3%AAn/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/07auwwumwi30mqd3peoel/B-c-s-Nguy-n.jpg?rlkey=y17bhgvp5zd3a08gpgp8hqu9j&st=bawcbqnr&raw=1'
  },
 'Sách Cha Mẹ - Thái Hà Books': {
    url: 'https://www.facebook.com/wikichamethb/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/8rzuqdkfhtwlxu99ak3wk/Einstein-Books-S-ch-hay-cho-gia-nh.jpg?rlkey=dauy6rn27qcricg5ovbczlrlv&st=vyk1n2fh&raw=1'
  },
 'Kim Đồng Kids': {
    url: 'https://www.facebook.com/kimdongforkids/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/dkg6xpp1c3h6quo16ecwb/Kim-ng-Kids.jpg?rlkey=b0xiuy00uvizkgwavmncabggi&st=q8tudkqh&raw=1'
  },
  'Trạm Đọc Mộng Mơ': {
    url: 'https://www.facebook.com/Tramdocmongmo/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/6a02wuwxo1luk3gngbclv/Tr-m-c-M-ng-M.webp?rlkey=6wheuz1ddotvvovunf41m5o3f&st=5uu0rv7i&raw=1',
  },
 'Tiệm sách Những vì sao': {
    url: 'https://www.facebook.com/TiemSachNhungvisao/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4fiq8sk8f3dex5y7ju66t/Ti-m-S-ch-Nh-ng-V-Sao.jpg?rlkey=6rx2xvqtam04c6rbpoi9k47p1&st=k053ls29&raw=1'
  },
  'Đinh Tị Books': {
    url: 'https://www.facebook.com/dinhtibooks.vn/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/1zyk8a2c68uw6v8lenzm0/inh-T-Books.jpg?rlkey=ve8cu0a03gdw6h6z3zj47cz0f&st=l24nabqg&raw=1',
  },
  'Đinh Tị Books - Sách tương tác thông minh': {
    url: 'https://www.facebook.com/Sachtuongtacthongminh/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/l2c0tzbzvq17zxwig5ahc/inh-T-Books-S-ch-t-ng-t-c-th-ng-minh.jpg?rlkey=k7qhbze63bok7h7dpwse7fond&st=orlulsri&raw=1',
  },
  'Bunny Kidbooks - Sách thiếu nhi thuần Việt': {
    url: 'https://www.facebook.com/bunnykidbooks/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/noimnbdwevmb533b0y7yl/Bunny-Kidbooks-S-ch-thi-u-nhi-thu-n-Vi-t.png?rlkey=as3mhvxo1xdf63rhvd9cns4ik&st=c3ge8di4&raw=1',
  },
  'Tân Việt Books - Đồng hành cùng con trên hành trình trưởng thành': {
    url: 'https://www.facebook.com/tanvietbookshn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/35ra27giupnf963frxkzy/T-n-Vi-t-Books-ng-h-nh-c-ng-con-tr-n-h-nh-tr-nh-tr-ng-th-nh.jpg?rlkey=xhh971bs16bwcdkukvvqh7jur&st=pcsllnvz&raw=1',
  },
  'HG Books - Tiệm sách song ngữ thiếu nhi': {
    url: 'https://www.facebook.com/HGBooksShop/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/vajv8eh3cnj6c3svt67wa/HG-Books-Ti-m-s-ch-song-ng-thi-u-nhi.png?rlkey=loh4qwuqfoxo8vdxk1yedgy1y&st=0q2i0l2e&raw=1',
  },
  'BerryBooks': {
    url: 'https://www.facebook.com/BerryBooks.az/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/a9oyii9uc769gr3lg73ni/BerryBooks.jpg?rlkey=8i6claszqxu6ilthl6pis5lqd&st=6p86ana2&raw=1'
  },
 'Kitten Loves Books - Tiệm sách Mèo nhỏ': {
    url: 'https://www.facebook.com/profile.php?id=61554016051268&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/0wxkmd2pcwo9a48su8ydk/Kitten-Loves-Books-Ti-m-s-ch-M-o-nh.jpg?rlkey=9fbv7dcr1c6oqhv2zc8k2699l&st=vdefr5at&raw=1'
  },
 'Ehomebooks': {
    url: 'https://www.facebook.com/ehomebooks/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/yv9ugaf3tare6er4s2swr/Ehomebooks.png?rlkey=g6ezei11150m1bzvqobtlu6ka&st=sbjt624f&raw=1'
  },
 'Quỳnh Chẫu - Cùng Con Độc Lập': {
    url: 'https://www.facebook.com/cungcondoclap/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4ze216b7mswgu1amn3mdj/Qu-nh-Ch-u-C-ng-Con-c-L-p.jpg?rlkey=nf2x484u4uqib1w5ivnr41f3t&st=mtcdwxfe&raw=1'
  },
 'Einstein Books - Sách hay cho gia đình': {
    url: 'https://www.facebook.com/einstein.sachhaychomevabe/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/8rzuqdkfhtwlxu99ak3wk/Einstein-Books-S-ch-hay-cho-gia-nh.jpg?rlkey=dauy6rn27qcricg5ovbczlrlv&st=yuqix6u3&raw=1'
  },
 'Quản Trị Mạng (Học nhanh nhớ lâu)': {
    url: 'https://quantrimang.com/cuoc-song/giao-duc-hoc-tap',
    thumbnail: 'https://www.dropbox.com/scl/fi/xxsmae1ulapbv267o48ze/H-c-nhanh-nh-l-u.jpg?rlkey=gnelwypsu35316dt94orn40v5&st=lhfgjcv9&raw=1'
  },
 'TKBooks (Các Môn Học)': {
    url: 'https://www.facebook.com/TKBooks.vn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/2xfs6mszfzta4v277h2ci/TKBooks-C-c-M-n-H-c.jpg?rlkey=yf9cv58ink6uj46ht41puzrtm&st=9owsvd48&raw=1'
  },
  'Trí Đức Education': {
    url: 'https://www.facebook.com/profile.php?id=61570498768064&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/40e3hp0u7j5dldkqjy1tw/Tr-c-Education.jpg?rlkey=onmmqahhhyst4sckkp9b8ql4f&st=uk01btzd&raw=1'
  },
  'Hoàng Trọng Kỳ Anh (Thầy Hoàng Oppa)': {
    url: 'https://www.facebook.com/hoangtrongkyanhoppaday/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/cqn520wb0z99erhwsztc3/Ho-ng-Tr-ng-K-Anh-Th-y-Ho-ng-Oppa.jpg?rlkey=i099iepysl7s3qb1tvecoe6xy&st=f3ikg4sb&raw=1'
  },
 'Zenbooks': {
    url: 'https://www.facebook.com/zenbooks.vn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9a8m9c5nfto8mk64ndo29/Zenbooks.jpg?rlkey=erwd3q6b08zjei324j4nnpini&st=4udsqiyx&raw=1'
  },
 'Fims.org.pk': {
    url: 'https://p44.fims.org.pk/archives/category/kids-books/',
    thumbnail: 'https://www.dropbox.com/scl/fi/repdulntc6hq04e69wrrh/Fims.org.tk.webp?rlkey=07spepfyzmx3d08uj7ekd5a3m&st=g20zicr0&raw=1'
  },
 'Trạm văn': {
    url: 'https://www.facebook.com/tramvan.thcs/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/lfz20t38dke6k2auajohy/Tr-m-v-n.jpg?rlkey=h89xxykwa4a7kyp4o5htb68ox&st=07mo9i4f&raw=1'
  },
 'Artbook (Sáng Tạo)': {
    url: 'https://www.facebook.com/Artbookvn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/leem6eu0sxezlboytvnxz/Artbook.jpg?rlkey=ug9fj4vbdt215hjbova1dbuqo&st=63th0fs4&raw=1'
  },
 'Picassia': {
    url: 'https://www.facebook.com/picassia.vn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/p30tgobtk5f7a80tkdt00/Picassia.jpg?rlkey=d6tvogdw9gzkrdvei7g025626&st=qlmzvhrf&raw=1'
  },
 'Lanvu Gallery': {
    url: 'https://www.facebook.com/lanvugallery123/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/pdshpcz6gny2b95kncw87/Lanvu-Gallery.jpg?rlkey=alqwyrujv1tjkng5sxt1ypldq&st=dr4k97eh&raw=1'
  },
 'Kids Story (Đồ Chơi)': {
    url: 'https://www.facebook.com/profile.php?id=61583464679809',
    thumbnail: 'https://www.dropbox.com/scl/fi/j5nkiy6o1sogpi19zt9xf/Kids-Story.png?rlkey=nhupswcggk5tz96qani55bp0m&st=29880fh9&raw=1'
  },
 'Winny - Máy Tính Bảng Thông Minh': {
    url: 'https://www.facebook.com/profile.php?id=61563897182619&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/xv2qtjegvmlpv0cb7wleh/Winny-M-y-T-nh-B-ng-Th-ng-Minh.jpg?rlkey=2lqft2ibyoq7fif6sgmnwo41v&st=t6iz3wxm&raw=1'
  },
 'Winny - Thế Giới Mẹ Và Bé': {
    url: 'https://www.facebook.com/profile.php?id=61564147461946&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/xcrjxnrbfpvonzvbu0685/Winny-Th-Gi-i-M-V-B.png?rlkey=sswsa3uqamgk2c3tlma16si7v&st=h62i8pba&raw=1'
  },
 'Bàn học thông minh BSUC Hải Phòng': {
    url: 'https://www.facebook.com/BSUCDOSON/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/zv8jdhz16byll3c882i3v/B-n-h-c-th-ng-minh-BSUC-H-i-Ph-ng.gif?rlkey=kuiqsw88unx1lxx711hwvetv8&st=fkbqj4nq&raw=1'
  },
  // thêm các mục khác nếu cần
};
