const customThumbnails = {
  Health: 'https://www.dropbox.com/scl/fi/44a3z93cu05tmhzyzr7i3/Health.jpg?rlkey=xr36m336mjqec0was4ogohfyy&st=4pwimca2&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Health': ['466738569_536531229164576_2277662578571451002_n.jpg', '54113428394_d20bba8fb2_o.jpg', 'talkin_image_1729510171953.jpg', 'talkin_image_1730449460375.jpg', 'talkin_image_1730449462360.jpg', 'talkin_image_1730449464427.jpg', 'talkin_image_1730449469814.jpg', 'talkin_image_1730449471056.jpg', 'talkin_image_1730449473571.jpg', 'talkin_image_1730449478938.jpg', 'talkin_image_1730449480056.jpg', 'talkin_image_1730449482652.jpg', 'talkin_image_1730449485531.jpg', 'talkin_image_1731654480078.jpg', 'talkin_image_1731654673990.jpg', 'talkin_image_1731730542590.jpg', 'talkin_image_1737678952754.jpg', 'talkin_image_1739129407782.jpg', 'talkin_image_1739878434749.jpg', 'talkin_image_1743216788635.jpg', 'talkin_image_1756776647676.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/dj0svsar3s2uob8bu6dbp/Google-Translate.avif?rlkey=z8zm0i2bc74s8fdeuebthk2ne&st=ggpsod4e&raw=1'
  },
  'Nguyen Brandon (BS Nguyễn Khoa Bình)': {
    url: 'https://www.facebook.com/nguyen.brandon.921/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/5ltjc9a2uy1vld6p3t5nd/Nguyen-Brandon-BS-Nguy-n-Khoa-B-nh.jpg?rlkey=1a8t62jiwgzhuur1or25ney34&st=yvjfvuub&raw=1',
  },
  'Bài Học Sống': {
    url: 'https://www.youtube.com/@baihocsong/videos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/vbxphci8dkhdtk9tvml3a/B-i-H-c-S-ng.jpg?rlkey=xc7xv5pjbdb12d4ya67pkyfwk&st=ksl1zznt&raw=1',
  },
  'Y Dễ Hiểu': {
    url: 'https://www.facebook.com/Ydehieu/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/re7u9shiih7yhigd3k9yx/Y-D-Hi-u.jpg?rlkey=ji9s1dadd4xc7ndjlge2oy44f&st=6v8c8wa2&raw=1',
  },
  'Đại Vy Healthcare': {
    url: 'https://www.facebook.com/bsdaivy/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/em3fhuz9ybm5hg89k6xma/i-Vy-Healthcare.png?rlkey=31pqajfcu0eq2clzw7uf6g943&st=jbgcczrm&raw=1',
  },
  'Chill Mỗi Ngày': {
    url: 'https://www.facebook.com/chillmoingayy/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/364oshgch9kszqoy6p07i/Chill-M-i-Ng-y.jpg?rlkey=2g0wbsoakcfmj6worglsafxo7&st=eb1b3tjr&raw=1',
  },
  'Người Cao Tuổi Radio': {
    url: 'https://www.youtube.com/@NguoiCaoTuoiRadio/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/brnx1uncgegl93fwz0yyp/Ng-i-Cao-Tu-i-Radio.jpg?rlkey=qlbiz492yhpv9rv6n0of2yrcq&st=shpjw79b&raw=1',
  },
  'Tỉnh Táo Lên': {
    url: 'https://www.youtube.com/@tinhtaolen19/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/esc3906wover22o8s9iy1/T-nh-t-o-l-n.jpg?rlkey=snfl686wxd110yvn9ti9kqe24&st=vrjevd8r&raw=1',
  },
  'Nguyễn Kim Tâm': {
    url: 'https://www.facebook.com/Kimtamthuyhang/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/cdvxoz4cpm791pg18d4yo/Nguy-n-Kim-T-m.jpg?rlkey=tyyevunl0y6pzg37h8ko4bu5q&st=gsjtq5zk&raw=1',
  },
  'Ve Chai': {
    url: 'https://www.facebook.com/AiBanVeChaiHon/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ht8hgry146epbmxii0z3s/Ve-Chai.jpg?rlkey=1t21hqtrh7kzba0aqpyswqxs0&st=c86tkpgz&raw=1',
  },
  'Làm đẹp thật thích': {
    url: 'https://www.youtube.com/@Lamdepthatthich1/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/rf2rbvs1zya4ctkmsdb6g/L-m-p-th-t-th-ch.jpg?rlkey=obcxx6eh1n193dqcjhj83r67s&st=ezqmmb5q&raw=1',
  },
  'Ý Hay': {
    url: 'https://www.youtube.com/@%C3%9DHay-z6r/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/hyl30r8ew9qb09607an9y/Hay.jpg?rlkey=cagzjfczo33nzlka7sq7eijdb&st=opbqibrz&raw=1',
  },
  'Cogito Hoàng Lê': {
    url: 'https://www.youtube.com/@CogitoHoangLe/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/7fv611nb4n4hdvgo28p22/Cogito-Ho-ng-L.webp?rlkey=ke25hj8rdzhkafk5yrrpq4ki5&st=h9hrlgvj&raw=1',
  },
  'Nhịp Sống Xanh': {
    url: 'https://www.youtube.com/@songkhoemoingaynha/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/sjq6cho39e59zj0ov5839/Nh-p-s-ng-xanh.jpg?rlkey=3vf8n2psjczs5lossyhlv180s&st=j601pkus&raw=1',
  },
  'BS THỌ': {
    url: 'https://www.youtube.com/@BsTho1992/playlists/',
    thumbnail: 'https://www.dropbox.com/scl/fi/7btt8uba3qnaqkg5mi6al/BS-TH.png?rlkey=1datdlcmn0wrn8ki7854ihzps&st=cjce6ibu&raw=1',
  },
  'AloBacsi': {
    url: 'https://www.facebook.com/alobacsihoibacsitraloi/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ruhypz1y8rx21zwsnsdw6/Alo-B-c-S.webp?rlkey=b21k3562poilct1u7ilh4djfb&st=qc1b4gfp&raw=1',
  },
  'Bác sĩ của bạn': {
    url: 'https://www.facebook.com/PageBacSi/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/cll3rr8yvchpltfke8pk2/B-c-S-C-a-B-n.jpg?rlkey=tn7zz8nnobe7zkaybakgwls47&st=tb91iz81&raw=1',
  },
  'Bác Sĩ Đinh Hải': {
    url: 'https://www.facebook.com/profile.php?id=61581433843264&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/ri9ml97i4mlef97zfxisl/B-c-S-inh-H-i.jpeg?rlkey=5lisdslhx0ubf442il9w4f4fl&st=p51zcjpe&raw=1',
  },
  'Bác sĩ Trần Minh (Trần Nhựt Minh)': {
    url: 'https://www.facebook.com/Drtrannhutminh/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9ka4u2byz57el5ci0dvcr/B-C-S-TR-N-MINH-Tr-n-Nh-t-Minh.png?rlkey=qvb7ltr7gpsxlqq7fo9iwl7bm&st=1ugrkja9&raw=1',
  },
  'Bác sĩ Nguyễn Thị Nhuần': {
    url: 'https://www.facebook.com/bacsinguyenthinhuantdt/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/nmm6jypbwyjbcn7c7acj3/B-c-s-Nguy-n-Th-Nhu-n.jpg?rlkey=sf38v6ejp45xk48uja9cvszfv&st=5olyunhj&raw=1',
  },
  'Dược Sĩ Nguyễn Thị Thùy Trang': {
    url: 'https://www.youtube.com/@duocsitrangnguyen/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/mm5yywn0rk7iod8oj8eba/D-c-S-Nguy-n-Th-Th-y-Trang.jpg?rlkey=5uphm4kxa9l81mri8wozldsbe&st=i0msisbt&raw=1',
  },
  'Dược sĩ Thoa': {
    url: 'https://www.facebook.com/duocsithoa96/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/49ml75ndfm15135t75645/D-c-s-Thoa.png?rlkey=0f3nlzlg437jlkuaqo91js1wv&st=leg3jqbw&raw=1',
  },
  'Dược Sĩ Trà': {
    url: 'https://www.facebook.com/Duocsitra68/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/rd2lwp8cx41z37lcuzzzt/D-c-S-Tr.jpg?rlkey=gyuv42sb6lz1ehtq9yeh0svtx&st=ak5bqyvc&raw=1',
  },
  'Lê Hữu Ân | Sống Khoẻ Sống Thọ': {
    url: 'https://www.youtube.com/@LeHuuAnSongKhoeSongTho/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/2hnxxdpa12otblo7392ja/L-H-u-n-S-ng-Kho-S-ng-Th.jpg?rlkey=gtiaqg3t0ip8byu4fr7r64cmq&st=o9hfpz3c&raw=1',
  },
  'Sống Trẻ Sống Thọ 100': {
    url: 'https://www.youtube.com/@SongtreSongtho100/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/goic6v2z9mvmm9a5fwbpg/S-ng-Tr-S-ng-Th-100.webp?rlkey=3icubtfq6ttjlyoywlzir5gh2&st=kcl1lhht&raw=1',
  },
  'Sức Khỏe Cho Bạn': {
    url: 'https://www.youtube.com/@S%E1%BB%A9cKh%E1%BB%8FeChoB%E1%BA%A1n-g9v/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/dyrhcd299ngpenqwxkg1s/S-c-Kh-e-Cho-B-n.webp?rlkey=gnf561966r2voop6ku4nehnd4&st=mpi0ga0j&raw=1',
  },
  'Ánh Sáng Tuổi Vàng': {
    url: 'https://www.youtube.com/@anhsangtuoivang/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/7s9mq1qoad68v11bixsor/nh-S-ng-Tu-i-V-ng.jpg?rlkey=i2o9saj3v3a57xmwpmbb2yr0z&st=fiakgwup&raw=1',
  },
  'Tâm Tịnh Trí Sáng': {
    url: 'https://www.youtube.com/@tamtinhtrisang/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/dif6fcogzzpugdmqnia4n/T-m-T-nh-Tr-S-ng.jpg?rlkey=aeoi9yxj5v5d8mdce78e26n89&st=fxv4dzsc&raw=1',
  },
  'Khoẻ Mà Đẹp': {
    url: 'https://www.youtube.com/@KhoeMaDep',
    thumbnail: 'https://www.dropbox.com/scl/fi/1979e0xej9lx3915iyq1k/Kho-M-p.jpg?rlkey=s52rs945mfovu2kv1ukeqv1yr&st=ezlpkxsk&raw=1',
  },
  'Quỳnh Chia Sẻ  (Cân Bằng Chuyển Hoá)': {
    url: 'https://www.facebook.com/Quynh.Meothantai96/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/egqzjfxbib9r23onbqyi6/Qu-nh-Chia-S-C-n-B-ng-Chuy-n-Ho.png?rlkey=fcd7xq47rmeg4a8tckp866yoy&st=xogkyxgm&raw=1',
  },
  'Nguyen Thu Hang': {
    url: 'https://www.facebook.com/nguyenthuhang.240890/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/541hxtsed0gnlt0we2rgu/Nguy-n-Thu-H-ng.webp?rlkey=5ru256c674jech0k64pnvzaxk&st=57fgluj2&raw=1',
  },
  'Hoàng Như Hoa': {
    url: 'https://www.facebook.com/hoang.n.hoa.9/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/pr14zlct6at2d57v1oex5/Ho-ng-Nh-Hoa.jpg?rlkey=r03qampblg8fir8wixnj2rg34&st=zofpfadk&raw=1',
  },
  'Trinh Huỳnh': {
    url: 'https://www.facebook.com/trinhhuynhdangxinh101/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/2viv9ww5jai4c85ajpoi7/Trinh-Hu-nh.webp?rlkey=he0glnnjx51ssoavm0vmx4qwq&st=80rbvos3&raw=1',
  },
  'Trạng Đao': {
    url: 'https://www.facebook.com/trang.down.2025/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ubrwjyz83xxzj2z5q70ua/Tr-ng-ao.jpg?rlkey=ivud84iko07t1m2oh46gdhxda&st=jncwbufl&raw=1',
  },
  'Thơ Insulin': {
    url: 'https://www.facebook.com/profile.php?id=61584560322804&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/y8ycx9n35jg6gie08pwzn/Th-Insulin.jpg?rlkey=97jbwaqen40vz6swbbmgs1wbt&st=611s3f3d&raw=1',
  },
  'Newme Sức Khỏe - Thái Hà Books': {
    url: 'https://www.facebook.com/suckhoe.songxanh/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/zf119u9z4vzn8iwd04urz/Newme-S-c-Kh-e-Th-i-H-Books.png?rlkey=c7wx2luz4qahmcn9wtnv7e3z4&st=lfspp1l5&raw=1',
  },
  // thêm các mục khác nếu cần
};
