const customThumbnails = {
  Employment: 'https://www.dropbox.com/scl/fi/7y8i2fx7cliuodliufhmo/Employment.jpg?rlkey=ik8wlxxs5ca5nqwgcp6vvbqab&st=ubcjbsck&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Employment': ['54105657757_d62145f03c_o.jpg', '54105657957_0b5183ed9b_o.jpg', '54105658222_b5a43df5f5_o.jpg', '54106525186_fd9a2f89c9_o.jpg', '54106525611_bee35444d4_o.jpg', '54106780353_6466519580_o.jpg', '54106781598_239907cb97_o.jpg', '54106781803_72011a129e_o.jpg', '54113416239_f69d4916e2_o.jpg', 'talkin_image_1729125528328.jpg', 'talkin_image_1729561745220.jpg', 'talkin_image_1730452459373.jpg', 'talkin_image_1730452460663.jpg', 'talkin_image_1730452462933.jpg', 'talkin_image_1730452466062.jpg', 'talkin_image_1730589633271.jpg', 'talkin_image_1730589634684.jpg', 'talkin_image_1730589637254.jpg', 'talkin_image_1730589644247.jpg', 'talkin_image_1730589646534.jpg', 'talkin_image_1730589648257.jpg', 'talkin_image_1730589650838.jpg', 'talkin_image_1730589657346.jpg', 'talkin_image_1730589658995.jpg', 'talkin_image_1730589661352.jpg', 'talkin_image_1730589663756.jpg', 'talkin_image_1730589668859.jpg', 'talkin_image_1730589670159.jpg', 'talkin_image_1730589672541.jpg', 'talkin_image_1730589675232.jpg', 'talkin_image_1731753491095.jpg', 'talkin_image_1741266621847.jpg', 'talkin_image_1753185305064.jpg', 'talkin_image_1759060477744.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Lịch Sử': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/History/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/ybgtg02gxchlop3d1rand/S-ch-L-ch-S.jpg?rlkey=4r9nh42kl2dlcbken1b01th5u&st=2ewx2xp4&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/35acdxhtejtdlm7me2v3q/Google-Translate.png?rlkey=h98f3i8mutkm97rvwvap1ej0o&st=g3bs8t3c&raw=1'
  },
  'Dương Dê': {
    url: 'https://www.youtube.com/@duongde_official/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/190ucmiipxhpb47jd0w9y/D-ng-D.webp?rlkey=xwsyfxb81njrtr5kj76qlg4x5&st=eni6y0gm&raw=1',
  },
  'Tri Thức Mới': {
    url: 'https://www.youtube.com/@trithucmoi24h/videos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/mf8ybgrzwghdaklry6f7u/Tri-Th-c-M-i.jpg?rlkey=pr4vfnz1wh214xwr943tw19et&st=vrx9u47n&raw=1',
  },
  'TACA - THỜI CUỘC': {
    url: 'https://www.facebook.com/tacathoicuocofficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/7sghcathlgbxuncfp36ce/TACA-TH-I-CU-C.jpg?rlkey=zu9utwmpyuc3skbrg6vzeysr8&st=mjq1akcs&raw=1',
  },
  'TACA - KỲ ÁN': {
    url: 'https://www.facebook.com/tacakyan/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/8q77h4uahrb47lq0jlf2b/TACA-K-N.jpg?rlkey=5sv8fbfqbdea37v0ilk7qcd0l&st=0pcmyu6v&raw=1',
  },
  'TCT - KHÁM PHÁ': {
    url: 'https://www.facebook.com/profile.php?id=100076602063744&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/3d08tq66kops0vw0b0n9v/TCT-KH-M-PH.jpg?rlkey=dr9hpdg7omzq9t1z5z2vgdi6g&st=ovn2fjfx&raw=1',
  },
  'Phân tích và Bình luận': {
    url: 'https://www.youtube.com/@tinptbl/videos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/2ibpih3d5huoqrmstoo3c/Ph-n-t-ch-v-B-nh-lu-n.jpg?rlkey=t9o4eay6it706vh81exbkcoln&st=iidl3uu8&raw=1',
  },
  'Bình Quân Sự': {
    url: 'https://www.youtube.com/@BinhQuanSuTV/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/h6eeljne5w152u23cyddv/B-nh-Qu-n-S.jpg?rlkey=hyvs3286cvoz6eone3gkjkcb7&st=ny6neq5i&raw=1',
  },
  'Đình Lãm Cuộc Sống Quê': {
    url: 'https://www.youtube.com/@nguyendinhlam91/',
    thumbnail: 'https://www.dropbox.com/scl/fi/lenxu66pz54tm3qvlv6zk/inh-L-m-Cu-c-S-ng-Qu.jpg?rlkey=3t5hwk75kd3v9dzng0pnjaoyw&st=zy4565wr&raw=1',
  },
  'Củ Đậu Story': {
    url: 'https://www.youtube.com/@C%E1%BB%A7%C4%90%E1%BA%ADuStory/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/zv2eaazno17ejq94ggjxm/C-u-Story.jpg?rlkey=c2121j20ozk9regz46sbxaktz&st=ed79sukz&raw=1',
  },
  'Nguyễn Huỳnh Lộc': {
    url: 'https://www.facebook.com/tran.tommy.7334/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/gy6xey079unn1a9vr1c6u/Nguy-n-Hu-nh-L-c.webp?rlkey=ezkwd9416u2zr6gu8bpulp5cx&st=qekpo4jq&raw=1',
  },
  'Nguyễn Lê Vương  (Tám tận lương tâm)': {
    url: 'https://www.facebook.com/tran.mi.529840/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/khee895wxuuvmydzbmbem/Nguy-n-L-V-ng-T-m-t-n-l-ng-t-m.jpg?rlkey=0xeb292weetirt4f9s7yyyx1q&st=rqocswz8&raw=1',
  },
  'ỚT In4': {
    url: 'https://www.facebook.com/profile.php?id=61580057953318&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/dmgge9n5jmwg6wc24z1we/T-In4.jpg?rlkey=ydvcb10p4ko21bp3e8w43rfij&st=9w8g68f8&raw=1',
  },
  'BIZbooks - Sách dành cho doanh nhân': {
    url: 'https://www.facebook.com/sachbizbooks/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/dolgwkiqf0h79xq2012ep/BIZbooks-S-ch-d-nh-cho-doanh-nh-n.png?rlkey=rfe9qegq64hnuzppldyt8npa8&st=mli7kgpe&raw=1',
  },
  'Hữu DuHa': {
    url: 'https://www.facebook.com/profile.php?id=61583131784963&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/6yoinm1oceibjns37qjuh/H-u-DuHa.jpg?rlkey=io6g0ppgkkmz6rhv7eo7yjrx1&st=asxzb0h4&raw=1',
  },
  'Dondon Lee': {
    url: 'https://www.facebook.com/onelifetolive69/',
    thumbnail: 'https://www.dropbox.com/scl/fi/qjl3xjcdaonbzkpt933wa/DonDon-Lee.png?rlkey=s88qddakxttieecdt8rnhme9v&st=f72ru45e&raw=1',
  },
  'Dũng Phan': {
    url: 'https://www.facebook.com/dung.phan.77/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/ad7353cbexl2tupfwwj43/D-ng-Phan.webp?rlkey=5lee9a1krasfj160tp581mp3p&st=2bf2i69o&raw=1',
  },
  'Doctor Housing': {
    url: 'https://www.facebook.com/doctorhousingofficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/6l6laooywcoa9iv76rr8i/Doctor-Housing.png?rlkey=5kxql2kv0l9tqi4bkjdroj08i&st=vaczhfhx&raw=1'
  },
  'Song24h.online': {
    url: 'https://www.facebook.com/song24h.online/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/eiwpyrb5sj49hunbgah4t/Song24h.online.jpg?rlkey=d86gghtwkxnko8s9wgowz1wwf&st=jo6pt054&raw=1',
  },
  'Cafe Kinh Doanh': {
    url: 'https://www.facebook.com/cafekinhdoanhpage/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/h5thkkwhrsxizhjb6e4q7/Cafe-Kinh-Doanh.gif?rlkey=1phkequrkmgpji8omzcflj8ts&st=fah1awcx&raw=1',
  },
  'Sống Tích Cực Mỗi Ngày': {
    url: 'https://www.facebook.com/songtichcucmoingay.vn/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4qr6q4376jyl076qx960e/S-ng-T-ch-C-c-M-i-Ng-y.jpg?rlkey=sjwinoafn92zhm0hjo5zm21r3&st=w89i8hip&raw=1',
  },
  'Gone Too Far': {
    url: 'https://www.facebook.com/GoneTooFarShow/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/vlt091su9upsgvszm5i8p/Gone-Too-Far.png?rlkey=1ep4ehfecpkc12kpwdap6fgar&st=in712xnt&raw=1',
  },
  'Duy Trương': {
    url: 'https://www.facebook.com/hi.thanhduy/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/0l38hvo6xd60kb4qa1gjc/Duy-Tr-ng.jpg?rlkey=567zdckes23t9fqq3obyd8fjz&st=hjwivc7e&raw=1',
  },
  'Thomas Lee': {
    url: 'https://www.facebook.com/tuanshock121/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/5n7c6r73j24pk8sd8pxq8/Thomas-Lee.jpg?rlkey=2jp11g1vw81yfmxbuk66wafr4&st=hb1txtao&raw=1',
  },
  'Nguyễn Trọng Hải': {
    url: 'https://www.facebook.com/hai.trong.169/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/38y4q35egqj6lamjjjqw4/Nguy-n-Tr-ng-H-i.jpg?rlkey=ou0adghuz5t07ngv0m5p3ueio&st=nabhbre1&raw=1',
  },
  'Thoại Nhân Official': {
    url: 'https://www.facebook.com/thoainhanofficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/39j63qxuvj4kfplnng7eo/Tho-i-Nh-n-Official.jpg?rlkey=zbv7bpxsajlgcqu0ljva7n2r9&st=zlnv6qzy&raw=1',
  },
  'Thầy Dương 9x': {
    url: 'https://www.facebook.com/thayduong9x/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/0bncrueubln1bvxg2osg6/Th-y-D-ng-9x.png?rlkey=3u6tt1d5ob2vo5hbr7az9h0zc&st=y3u9unv0&raw=1',
  },
  'Thầy Đạo Bolero Tiếng Anh': {
    url: 'https://www.facebook.com/bolerotienganh/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/exp4mhrs9vipr4ruwtlf9/Th-y-o-Bolero-Ti-ng-Anh.jpg?rlkey=sm5p3if5y8a7jax6etpjojx6f&st=dvyjmdzv&raw=1',
  },
  // thêm các mục khác nếu cần
};
