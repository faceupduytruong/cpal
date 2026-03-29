const customThumbnails = {
  'Code': 'https://www.dropbox.com/scl/fi/o9yii9k5qbfcuvu7kg3ne/Chinese-Language.jpg?rlkey=77s9qqwz9m29d8yzbsdg0pnb1&st=uy6ilei0&raw=1',
  'Word': 'https://www.dropbox.com/scl/fi/yoo7azv4awmqnv9amomnu/Chinese-Language-Word.webp?rlkey=az3yp1j6gjc3gc71xjmnnvi3l&st=ihpw0ddo&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Code': ['talkin_image_1753443307198.jpg', 'talkin_image_1753443308595.jpg', 'talkin_image_1753443310857.jpg', 'talkin_image_1753443313432.jpg'],
  'Word': ['talkin_image_1758770495797.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Lịch Sử': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/History/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/ybgtg02gxchlop3d1rand/S-ch-L-ch-S.jpg?rlkey=4r9nh42kl2dlcbken1b01th5u&st=2ewx2xp4&raw=1'
  },
  'Google Translate': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/ghr6z9a8jq4v62ir7e9yo/Google-Translate.webp?rlkey=akonaabgl62h1tcovkfduh9ie&st=fd0zik9q&raw=1'
  },
  'Tự học tiếng Trung': {
    url: 'https://www.facebook.com/tuhoctiengtrungcaptoc/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/4czup6mjv5zcg9sv8mm6q/T-h-c-ti-ng-Trung.jpg?rlkey=5f1ungkhqcmyf72ajf21ftf70&st=prvo1nr1&raw=1'
  },
  'Trung Tâm Hoa Ngữ Hoa Lạc': {
    url: 'https://www.facebook.com/hoalac.edu.vn/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ppna05jcpmsc99jk0qsqi/Trung-T-m-Hoa-Ng-Hoa-L-c.jpg?rlkey=xpzflurizq6c3lusgniw19tyw&st=icy3tk46&raw=1'
  },
  'Tiếng Trung Long Vũ': {
    url: 'https://www.facebook.com/profile.php?id=61579962517312&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/jn6z26aqgvt9gktby1nwn/Ti-ng-Trung-Long-V.jpg?rlkey=zzx3ltltoai7lzzusm6wnoasy&st=42zu91mt&raw=1'
  },
  'Tiếng Trung Kim Oanh': {
    url: 'https://www.facebook.com/tiengtrungkimoanh/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/zyxl2rof4933uvk5w1ae1/Ti-ng-Trung-Kim-Oanh.png?rlkey=pu8n4eo6wb6tsm31b1fl5t5mm&st=chuvhw2u&raw=1'
  },
  'Tiếng Trung Giao Tiếp - Molii FM': {
    url: 'https://www.facebook.com/HocTiengTrungCungCoMolii/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9e4e60d16bt85uhsyr1q5/Ti-ng-Trung-Molii-FM-Ti-ng-Trung-Giao-Ti-p.png?rlkey=zajond9b9fqld1tkfp610ojb8&st=7emafd73&raw=1'
  },
  'Học Tiếng Trung Quốc Mỗi Ngày': {
    url: 'https://www.facebook.com/profile.php?id=61563355705752&sk=photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/p57rkvpnpd8rwjiqtaghe/H-c-Ti-ng-Trung-M-i-Ng-y.jpg?rlkey=hlr73i8r08bf98md6a0qnkqgq&st=dp3ave3f&raw=1'
  },
  'Học Tiếng Trung Cùng MCBooks': {
    url: 'https://www.facebook.com/mcbookshoctiengtrung/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/9jv5cjfypc10ya3mfkxtt/H-c-Ti-ng-Trung-C-ng-MCBooks.jpg?rlkey=gm30t4uyfyoqc4lmov27yj6j7&st=is4md033&raw=1'
  },
  'Tiếng Trung Trực Tuyến Tại Nhà': {
    url: 'https://www.facebook.com/TiengTrungGiaoTiepTrucTuyen/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/8xqorca93zn4wclbys21b/ChineseRd-Ti-ng-Trung-Tr-c-Tuy-n-T-i-Nh.jpg?rlkey=uxwcyp5ycqnk2knwp6wctuv0l&st=dtd233la&raw=1'
  },
  'Tiếng Trung CTI HSK TP.HCM': {
    url: 'https://www.facebook.com/ctihsktphcm/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/0cnzzcnty6c24db47csb4/Ti-ng-Trung-CTI-HSK-TP.HCM.jpg?rlkey=mum5uta7bamxz9zksflpy0ese&st=54ezx2ch&raw=1'
  },
  'Learn Chinese': {
    url: 'https://www.facebook.com/crilearnchinese/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/q6k9vrbj14hj6jhaa3ndy/Learn-Chinese.jpg?rlkey=2yx24sgs4d1clw72ecbmfdb9y&st=hf0p0f4u&raw=1'
  },
  'Tiếng Trung Chao Hanyu': {
    url: 'https://www.facebook.com/loptiengtrungchaohanyu/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/98tswgzyznnvqubrpgsn0/Ti-ng-Trung-Chao-Hanyu.jpg?rlkey=mel37iyumlk8ruzf6aw5p0a6e&st=8kcvx9zw&raw=1'
  },
  'Hoa Ngữ Đắc Nhân': {
    url: 'https://www.facebook.com/dacnhanhoangu/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/nkro54xhp7zr9gbuxm705/Hoa-Ng-c-Nh-n.webp?rlkey=je35ivpdg6rw223zey9yng1g6&st=vm5xvy39&raw=1'
  },
  'Tiếng Trung Xin Chào (Hoa Ngữ NiHao)': {
    url: 'https://www.facebook.com/tiengtrungxinchaovn/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/umwk4y6pqwnvfmt2stvqb/Ti-ng-Trung-Xin-Ch-o-Hoa-Ng-NiHao.jpg?rlkey=4mw24y8d6gh1ihi59qehvltza&st=8h29dp1q&raw=1'
  },
  'Mcbooksvn (Học Tiếng Trung)': {
    url: 'https://www.facebook.com/mcbooksvn/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/uy5gswlcrq8gfpdwjwuzz/Mcbooksvn.jpg?rlkey=5094eeqsf5jaw4y3szlwz88wn&st=xfhlfajj&raw=1'
  },
  'Tiếng Trung Yixin - Tư duy phản xạ': {
    url: 'https://www.facebook.com/tiengtrungyixin/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/fciq8nvhpckw53kcpvs31/Ti-ng-Trung-Yixin-T-duy-ph-n-x.png?rlkey=t07c1rjerx78fjsean8b3eb3v&st=io0qzgpk&raw=1'
  },
  'Ni Hao Ma - Mandarin Learning Lab Vietnam': {
    url: 'https://www.facebook.com/NiHaoMaVietnam/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/981695tjqa3dpfk9rggxf/Ni-Hao-Ma-Mandarin-Learning-Lab-Vietnam.jpg?rlkey=iuwcpggxqu57gyk96el6e9ek3&st=ki0sr564&raw=1'
  },
  'Tiếng Trung SHZ TP.HCM': {
    url: 'https://www.facebook.com/tiengtrungshztphcm/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/ypkf7lbpuyrxnh1vm3xyz/Ti-ng-Trung-SHZ-TP.HCM.png?rlkey=jzpza4y1dprkzzqzttl5ebl33&st=jai253l5&raw=1'
  },
  'Tiếng Trung Ni Hao': {
    url: 'https://www.facebook.com/tiengtrungnghenoinihao/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/lcrw3nq9a5iwp45kgfpv9/Ti-ng-Trung-Ni-Hao.jpg?rlkey=jmkruh1bz9nwk1lcabl6ys5i4&st=o4nrr3jm&raw=1'
  },
  'Nhớ Hán Tự Thông Qua Chiết Tự Chữ Hán': {
    url: 'https://www.facebook.com/NhoHanTu/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/705b71kcuux49jeymc8uv/Nh-H-n-T-Th-ng-Qua-Chi-t-T-Ch-H-n.jpg?rlkey=1b1kow72uwv211py52ceavxz3&st=4p228lot&raw=1'
  },
  'Tiếng Trung 21 Ngày': {
    url: 'https://www.facebook.com/tiengtrung21ngay/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/ydehp5ktkp4u3tdmmgkhr/Ti-ng-Trung-21-Ng-y.jpg?rlkey=0h1u04owz46v2rsn3zaz4pr5u&st=14yet5l0&raw=1'
  },
  'Tiếng Trung You Can - Quận 6': {
    url: 'https://www.facebook.com/trungtamtiengtrungquan6/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/v35q408zpp6yq3v72bdg9/Ti-ng-Trung-You-Can-Qu-n-6.png?rlkey=lpxodd08jatqyhu2f9nziwlcq&st=whqw7r7a&raw=1'
  },
  'Tiếng Trung Tâm Tâm': {
    url: 'https://www.facebook.com/tiengtrungtamtamxx/photos',
    thumbnail: 'https://www.dropbox.com/scl/fi/di9arkgg0euuu95qqf0kh/Ti-ng-Trung-T-m-T-m.png?rlkey=jabo8f5mbkpie2ynxpg6j8jor&st=nr2rs1g3&raw=1'
  },
  // thêm các mục khác nếu cần
};
