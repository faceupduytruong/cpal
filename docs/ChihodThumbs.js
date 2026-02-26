const customThumbnails = {
  'Art': 'https://www.dropbox.com/scl/fi/p5vayy3yvptczvgqzirg3/Art.jpg?rlkey=k9e0iy16702044kqqrm4b4amq&st=blkg28ox&raw=1',
   // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Art': ['536270476_812764247757913_4605106665993868595_n.jpg', '54088294553_7b299fec34_o.jpg', '54106516186_6a830c5377_o.jpg', '54106772483_c57f84a23d_o.jpg', '54106858444_8ca84f88f1_o.jpg', '54134555174_21073acdb9_o.jpg', 'ef221e9fae070d595416.jpg', 'Hạ Linh Ôn Toeic Cấp Tốc_2023_12_09__13_31_25.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_02_23__10_01_38.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_05_09__10_40_11.png', 'Screenshot_2024-06-19-20-34-49-573_com.talkin.learn.jpg', 'talkin_image_1729422202965.jpg', 'talkin_image_1729480632154.jpg', 'talkin_image_1729480657712.jpg', 'talkin_image_1729481203362.jpg', 'talkin_image_1730347748183.jpg', 'talkin_image_1730347755616.jpg', 'talkin_image_1730347972696.jpg', 'talkin_image_1730452479232.jpg', 'talkin_image_1730851762476.jpg', 'talkin_image_1730852085495.jpg', 'talkin_image_1731467455451.jpg', 'talkin_image_1731467532934.jpg', 'talkin_image_1731563617297.jpg', 'talkin_image_1731563985820.jpg', 'talkin_image_1731729127744.jpg', 'talkin_image_1735554118497.jpg', 'talkin_image_1735636564729.jpg', 'talkin_image_1735636565862.jpg', 'talkin_image_1735636568525.jpg', 'talkin_image_1735636570356.jpg', 'talkin_image_1735636973874.jpg', 'talkin_image_1735867425645.jpg', 'talkin_image_1736551108521.jpg', 'talkin_image_1737559885342.jpg', 'talkin_image_1737600714061.jpg', 'talkin_image_1739681005462.jpg', 'talkin_image_1739712684038.jpg', 'talkin_image_1740213349534.jpg', 'talkin_image_1740804296013.jpg', 'talkin_image_1741488677654.jpg', 'talkin_image_1741488692945.jpg', 'talkin_image_1741488694509.jpg', 'talkin_image_1741488696813.jpg', 'talkin_image_1741920315451.jpg', 'talkin_image_1741920317331.jpg', 'talkin_image_1741920319864.jpg', 'talkin_image_1741920322607.jpg', 'talkin_image_1755425664322.jpg', 'talkin_image_1756737515366.jpg', 'talkin_image_1756737516877.jpg', 'talkin_image_1756737519538.jpg', 'talkin_image_1756737521484.jpg', 'talkin_image_1756737641202.jpg', 'talkin_image_1756737642303.jpg', 'talkin_image_1756737643503.jpg', 'talkin_image_1756737670789.jpg', 'talkin_image_1756775445749.jpg', 'talkin_image_1756775810135.jpg', 'talkin_image_1756776241079.jpg', 'talkin_image_1756776553320.jpg', 'talkin_image_1756776562543.jpg', 'talkin_image_1756776623212.jpg', 'talkin_image_1756776951215.jpg', 'talkin_image_1756777212208.jpg', 'talkin_image_1756777597121.jpg', 'talkin_image_1756789318604.jpg', 'talkin_image_1756807868404.jpg', 'talkin_image_1756807873981.jpg', 'talkin_image_1756807909011.jpg', 'talkin_image_1756808051878.jpg', 'talkin_image_1756808231344.jpg', 'talkin_image_1756808249123.jpg', 'talkin_image_1756808263870.jpg', 'talkin_image_1756864791310.jpg', 'talkin_image_1756864792680.jpg', 'talkin_image_1756864795037.jpg', 'talkin_image_1756864797534.jpg', 'talkin_image_1756864890914.jpg', 'talkin_image_1756864907326.jpg', 'talkin_image_1756864917624.jpg', 'talkin_image_1756908229981.jpg', 'talkin_image_1756908339408.jpg', 'talkin_image_1756908341864.jpg', 'talkin_image_1756908343331.jpg', 'talkin_image_1756908346086.jpg', 'talkin_image_1757044432641.jpg', 'talkin_image_1757044434429.jpg', 'talkin_image_1757044499211.jpg', 'talkin_image_1757044509664.jpg', 'talkin_image_1757044552495.jpg', 'talkin_image_1757136351483.jpg', 'talkin_image_1757136355262.jpg', 'talkin_image_1757136360111.jpg', 'talkin_image_1757136365881.jpg', 'talkin_image_1757224350554.jpg', 'talkin_image_1757316140941.jpg', 'talkin_image_1757316254306.jpg', 'talkin_image_1757316566675.jpg', 'talkin_image_1757316641699.jpg', 'talkin_image_1757316656031.jpg', 'talkin_image_1757316771051.jpg', 'talkin_image_1757316822634.jpg', 'talkin_image_1757316826099.jpg', 'talkin_image_1757316827347.jpg', 'talkin_image_1757316829805.jpg', 'talkin_image_1757426788630.jpg', 'talkin_image_1757507977287.jpg', 'talkin_image_1757508017459.jpg', 'talkin_image_1757508043367.jpg', 'talkin_image_1757508045204.jpg', 'talkin_image_1757508047277.jpg', 'talkin_image_1757508048927.jpg', 'talkin_image_1757658146731.jpg', 'talkin_image_1757658151819.jpg', 'talkin_image_1757658266413.jpg', 'talkin_image_1757754426417.jpg', 'talkin_image_1757834848467.jpg', 'talkin_image_1758514232214.jpg', 'talkin_image_1758529671413.jpg', 'talkin_image_1758632551922.jpg', 'talkin_image_1758789562880.jpg', 'talkin_image_1758789573096.jpg', 'talkin_image_1758818469570.jpg', 'talkin_image_1758953369345.jpg', 'talkin_image_1759067429611.jpg', 'talkin_image_1760157619988.jpg'],
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
  'Trịnh Việt Trinh': {
    url: 'https://www.facebook.com/VietHita/photos',
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
