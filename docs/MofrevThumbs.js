const customThumbnails = {
  'Art': 'https://www.dropbox.com/scl/fi/p5vayy3yvptczvgqzirg3/Art.jpg?rlkey=k9e0iy16702044kqqrm4b4amq&st=blkg28ox&raw=1',
  'Word': 'https://www.dropbox.com/scl/fi/j3ngklqbwhrx00xovak2b/Word.webp?rlkey=30rmd30tbffe9nf3kmz1pbsqr&st=at7f0440&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Art': ['536270476_812764247757913_4605106665993868595_n.jpg', '54088294553_7b299fec34_o.jpg', '54106516186_6a830c5377_o.jpg', '54106772483_c57f84a23d_o.jpg', '54106858444_8ca84f88f1_o.jpg', '54134555174_21073acdb9_o.jpg', 'ef221e9fae070d595416.jpg', 'Hạ Linh Ôn Toeic Cấp Tốc_2023_12_09__13_31_25.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_02_23__10_01_38.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_05_09__10_40_11.png', 'Screenshot_2024-06-19-20-34-49-573_com.talkin.learn.jpg', 'talkin_image_1729422202965.jpg', 'talkin_image_1729480632154.jpg', 'talkin_image_1729480657712.jpg', 'talkin_image_1729481203362.jpg', 'talkin_image_1730347748183.jpg', 'talkin_image_1730347755616.jpg', 'talkin_image_1730347972696.jpg', 'talkin_image_1730452479232.jpg', 'talkin_image_1730851762476.jpg', 'talkin_image_1730852085495.jpg', 'talkin_image_1731467455451.jpg', 'talkin_image_1731467532934.jpg', 'talkin_image_1731563617297.jpg', 'talkin_image_1731563985820.jpg', 'talkin_image_1731729127744.jpg', 'talkin_image_1735554118497.jpg', 'talkin_image_1735636564729.jpg', 'talkin_image_1735636565862.jpg', 'talkin_image_1735636568525.jpg', 'talkin_image_1735636570356.jpg', 'talkin_image_1735636973874.jpg', 'talkin_image_1735867425645.jpg', 'talkin_image_1736551108521.jpg', 'talkin_image_1737559885342.jpg', 'talkin_image_1737600714061.jpg', 'talkin_image_1739681005462.jpg', 'talkin_image_1739712684038.jpg', 'talkin_image_1740213349534.jpg', 'talkin_image_1740804296013.jpg', 'talkin_image_1741488677654.jpg', 'talkin_image_1741488692945.jpg', 'talkin_image_1741488694509.jpg', 'talkin_image_1741488696813.jpg', 'talkin_image_1741920315451.jpg', 'talkin_image_1741920317331.jpg', 'talkin_image_1741920319864.jpg', 'talkin_image_1741920322607.jpg', 'talkin_image_1755425664322.jpg', 'talkin_image_1756737515366.jpg', 'talkin_image_1756737516877.jpg', 'talkin_image_1756737519538.jpg', 'talkin_image_1756737521484.jpg', 'talkin_image_1756737641202.jpg', 'talkin_image_1756737642303.jpg', 'talkin_image_1756737643503.jpg', 'talkin_image_1756737670789.jpg', 'talkin_image_1756775445749.jpg', 'talkin_image_1756775810135.jpg', 'talkin_image_1756776241079.jpg', 'talkin_image_1756776553320.jpg', 'talkin_image_1756776562543.jpg', 'talkin_image_1756776623212.jpg', 'talkin_image_1756776951215.jpg', 'talkin_image_1756777212208.jpg', 'talkin_image_1756777597121.jpg', 'talkin_image_1756789318604.jpg', 'talkin_image_1756807868404.jpg', 'talkin_image_1756807873981.jpg', 'talkin_image_1756807909011.jpg', 'talkin_image_1756808051878.jpg', 'talkin_image_1756808231344.jpg', 'talkin_image_1756808249123.jpg', 'talkin_image_1756808263870.jpg', 'talkin_image_1756864791310.jpg', 'talkin_image_1756864792680.jpg', 'talkin_image_1756864795037.jpg', 'talkin_image_1756864797534.jpg', 'talkin_image_1756864890914.jpg', 'talkin_image_1756864907326.jpg', 'talkin_image_1756864917624.jpg', 'talkin_image_1756908229981.jpg', 'talkin_image_1756908339408.jpg', 'talkin_image_1756908341864.jpg', 'talkin_image_1756908343331.jpg', 'talkin_image_1756908346086.jpg', 'talkin_image_1757044432641.jpg', 'talkin_image_1757044434429.jpg', 'talkin_image_1757044499211.jpg', 'talkin_image_1757044509664.jpg', 'talkin_image_1757044552495.jpg', 'talkin_image_1757136351483.jpg', 'talkin_image_1757136355262.jpg', 'talkin_image_1757136360111.jpg', 'talkin_image_1757136365881.jpg', 'talkin_image_1757224350554.jpg', 'talkin_image_1757316140941.jpg', 'talkin_image_1757316254306.jpg', 'talkin_image_1757316566675.jpg', 'talkin_image_1757316641699.jpg', 'talkin_image_1757316656031.jpg', 'talkin_image_1757316771051.jpg', 'talkin_image_1757316822634.jpg', 'talkin_image_1757316826099.jpg', 'talkin_image_1757316827347.jpg', 'talkin_image_1757316829805.jpg', 'talkin_image_1757426788630.jpg', 'talkin_image_1757507977287.jpg', 'talkin_image_1757508017459.jpg', 'talkin_image_1757508043367.jpg', 'talkin_image_1757508045204.jpg', 'talkin_image_1757508047277.jpg', 'talkin_image_1757508048927.jpg', 'talkin_image_1757658146731.jpg', 'talkin_image_1757658151819.jpg', 'talkin_image_1757658266413.jpg', 'talkin_image_1757754426417.jpg', 'talkin_image_1757834848467.jpg', 'talkin_image_1758514232214.jpg', 'talkin_image_1758529671413.jpg', 'talkin_image_1758632551922.jpg', 'talkin_image_1758789562880.jpg', 'talkin_image_1758789573096.jpg', 'talkin_image_1758818469570.jpg', 'talkin_image_1758953369345.jpg', 'talkin_image_1759067429611.jpg', 'talkin_image_1760157619988.jpg'],
  'Word': ['447492802_431822652946886_8236888175477557142_n.jpg', '447510850_431822606280224_3980453177755229439_n.jpg', '447604014_431822646280220_3979500142484558810_n.jpg', '447670453_431822636280221_8280900910413037872_n.jpg', '447670599_431822659613552_7424303258014276441_n.jpg', '447899217_431822626280222_8104591352359663830_n.jpg', '50 dong tu kinh dien trong Part 1 TOEIC - P1.png', '54105648157_b503647045_o.jpg', '54105650987_b00afe94a1_o.jpg', '54113427479_651054f83a_o.jpg', '60 tu can phai biet trong de thi TOEIC - P1.png', '60 từ cần phải biết trong đề thi TOEIC - P2.png', 'Các cụm từ Get phổ biến.png', 'Các tính từ kết thúc bằng đuôi ly.png', 'FB_IMG_1732865165190.jpg', 'FB_IMG_1732865167399.jpg', 'FB_IMG_1732865169656.jpg', 'FB_IMG_1732865171681.jpg', 'FB_IMG_1732865174051.jpg', 'FB_IMG_1732865176122.jpg', 'FB_IMG_1732865178351.jpg', 'FB_IMG_1732865180571.jpg', 'FB_IMG_1732865182640.jpg', 'FB_IMG_1732865184630.jpg', 'How are you, How do you feel, How are you doing.jpg', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_12_17__11_14_12.2.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_12_17__11_14_12.3.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_12_17__11_14_12.6.png', 'Hạ Linh Ôn Toeic Cấp Tốc_2024_12_17__11_14_12.png', 'IMG_20241123_131230_517.jpg', 'IMG_20241123_131233_490.jpg', 'IMG_20241123_131235_809.jpg', 'IMG_20241123_131237_941.jpg', 'IMG_20241123_132353_502.jpg', 'IMG_20241123_132358_383.jpg', 'IMG_20241123_132401_014.jpg', 'IMG_20250902_212511_877.jpg', 'IMG_20250902_212514_456.jpg', 'IMG_20250902_212516_738.jpg', 'IMG_20250902_212519_122.jpg', 'Một số từ vừa là danh từ vừa là động từ.png', 'talkin_image_1729481158520.jpg', 'talkin_image_1729509313916.jpg', 'talkin_image_1729509828709.jpg', 'talkin_image_1729510521668.jpg', 'talkin_image_1729510526694.jpg', 'talkin_image_1730092800507.jpg', 'talkin_image_1730348016753.jpg', 'talkin_image_1730452441397.jpg', 'talkin_image_1730452485472.jpg', 'talkin_image_1730589297100.jpg', 'talkin_image_1730852096179.jpg', 'talkin_image_1731563733447.jpg', 'talkin_image_1731563735884.jpg', 'talkin_image_1731563968956.jpg', 'talkin_image_1731654547829.jpg', 'talkin_image_1731682644385.jpg', 'talkin_image_1731682648759.jpg', 'talkin_image_1731682654338.jpg', 'talkin_image_1731685665626.jpg', 'talkin_image_1731685673517.jpg', 'talkin_image_1731685677954.jpg', 'talkin_image_1731685682659.jpg', 'talkin_image_1731685686860.jpg', 'talkin_image_1731689392131.jpg', 'talkin_image_1731730616834.jpg', 'talkin_image_1731730623181.jpg', 'talkin_image_1734400490871.jpg', 'talkin_image_1734400492894.jpg', 'talkin_image_1734400494942.jpg', 'talkin_image_1735382583150.jpg', 'talkin_image_1735382584611.jpg', 'talkin_image_1735382587449.jpg', 'talkin_image_1735382589894.jpg', 'talkin_image_1737282488509.jpg', 'talkin_image_1737282490512.jpg', 'talkin_image_1737282492338.jpg', 'talkin_image_1737449887675.jpg', 'talkin_image_1737835232776.jpg', 'talkin_image_1737842740588.jpg', 'talkin_image_1740241395325.jpg', 'talkin_image_1740241397614.jpg', 'talkin_image_1740241400179.jpg', 'talkin_image_1740241407068.jpg', 'talkin_image_1740241409384.jpg', 'talkin_image_1740241411122.jpg', 'talkin_image_1740241413307.jpg', 'talkin_image_1740241418949.jpg', 'talkin_image_1740330589262.jpg', 'talkin_image_1740374519603.jpg', 'talkin_image_1741169995499.jpg', 'talkin_image_1743250138005.jpg', 'talkin_image_1744070515536.jpg', 'talkin_image_1749551515060.jpg', 'talkin_image_1752035156610.jpg', 'talkin_image_1755928853984.jpg', 'talkin_image_1755928855315.jpg', 'talkin_image_1755928857180.jpg', 'talkin_image_1756737302417.jpg', 'talkin_image_1756775404243.jpg', 'talkin_image_1756775406403.jpg', 'talkin_image_1756775652958.jpg', 'talkin_image_1756776134058.jpg', 'talkin_image_1756776135362.jpg', 'talkin_image_1756776137574.jpg', 'talkin_image_1756776140982.jpg', 'talkin_image_1756776182967.jpg', 'talkin_image_1756776184330.jpg', 'talkin_image_1756776186122.jpg', 'talkin_image_1756776189173.jpg', 'talkin_image_1756777571297.jpg', 'talkin_image_1756777603729.jpg', 'talkin_image_1756777637874.jpg', 'talkin_image_1756777654589.jpg', 'talkin_image_1756777661478.jpg', 'talkin_image_1756777663006.jpg', 'talkin_image_1756777672384.jpg', 'talkin_image_1756777680458.jpg', 'talkin_image_1756777701686.jpg', 'talkin_image_1756777768022.jpg', 'talkin_image_1756864626710.jpg', 'talkin_image_1757044234489.jpg', 'talkin_image_1757316727363.jpg', 'talkin_image_1757316729903.jpg', 'talkin_image_1757430772985.jpg', 'talkin_image_1757508139088.jpg', 'talkin_image_1757676302186.jpg', 'talkin_image_1757676304854.jpg', 'talkin_image_1757676309095.jpg', 'talkin_image_1757676312306.jpg', 'talkin_image_1759053764556 - Copy.jpg', 'talkin_image_1759053765793.jpg', 'talkin_image_1759053767613.jpg', 'talkin_image_1760070346059.jpg', 'Từ vựng các phòng ban công ty.jpg', 'Warranties - Sự bảo hành.png', 'Wsa Pyramid Col.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Kể Chuyện': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Story/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/j21wzyqw0hwr85277vq3c/S-ch-K-Chuy-n.jpg?rlkey=wmvuqc2plyff5dw8jxjoe0dm9&st=irzrzjyg&raw=1',
  },
  'Google': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/go7hgrxhqjdlc8twaob54/Google.webp?rlkey=re0z5hmanpo8rp4xts7m24xck&st=riwgh2gl&raw=1'
  },
  'Cô Gái Xấu Xí Review Phim': {
    url: 'https://www.youtube.com/@cogaixauxireviewphim3390/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/3n64h80nvg4qefb16h3wv/C-G-i-X-u-X-Review-Phim.webp?rlkey=gmpd0wodrssdbmxss5r525crg&st=uu7kyqdz&raw=1',
  },
  'Cô Gái Xấu Xí': {
    url: 'https://www.youtube.com/@CoGaiXauXi/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/1kz0zyfdqhcgv2kwpncns/C-G-i-X-u-X.jpg?rlkey=ngycy1sff4yv2w7m3yelvm6ds&st=6qx5w9h6&raw=1',
  },
  'Rạp Chiếu Review Phim': {
    url: 'https://www.youtube.com/@rapphimofficial/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/fh20y9w1q8bv36l97eult/R-p-Chi-u-Review-Phim.jpg?rlkey=imelonqmo1pvoloht3pzjsb28&st=k9i34cpg&raw=1',
  },
  'Ổ Phim +': {
    url: 'https://www.facebook.com/onghienphimx/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ef6icc9vr0t9830f5ohkg/Phim.jpg?rlkey=voff3kwu1asp085xtebv8vcw9&st=1u5xlnab&raw=1',
  },
  'Cậu Bé Xem Phim': {
    url: 'https://www.facebook.com/CauBeXemPhimOfficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/yckuv023e0s78pxrhdscr/C-u-B-Xem-Phim.avif?rlkey=8cxjqy8ttuhohr7xqumhvwwzc&st=5ebbu4w6&raw=1',
  },
  'Tứ Đại Tài Tử': {
    url: 'https://www.facebook.com/tudaitaitu8386/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/0y594kaudtu65velq6qbx/T-i-T-i-T.jpg?rlkey=o8wzce0ngb4djbfvp5o3u8el6&st=gmrllrzv&raw=1',
  },
  'Video 3': {
    url: 'https://www.facebook.com/profile.php?id=100069789950575&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/ptavzr1jsfbrxkmip9j9w/Video-3.jpg?rlkey=802u50z76vt7cwty56k8cr51a&st=jhy00bwl&raw=1',
  },
  'VFC Best Movies': {
    url: 'https://www.facebook.com/wonderfulnature79/videos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/xdxj0rj5mgkpxsr0ta02f/VFC-Best-Movies.png?rlkey=lmsk8v274zrlwhyfk5yzqg9yi&st=j86b3x2d&raw=1',
  },
  'Đỗ Nhật Minh (Minh Pháp Sư)': {
    url: 'https://www.facebook.com/donhatminh25/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/u545rmvh9fgrzbq4znnim/Nh-t-Minh-Minh-Ph-p-S.png?rlkey=r7p5jxwjk0xh9p48x8bs9ehi6&st=pegt0h3w&raw=1',
  },
  'Deep writier': {
    url: 'https://www.facebook.com/profile.php?id=100072497381829&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/f2vmsrz86uuho1u4ktt7e/Deep-writier.png?rlkey=ha7knjvyccu3jmoa262nr5lmk&st=gw125341&raw=1',
  },
  // thêm các mục khác nếu cần
};
