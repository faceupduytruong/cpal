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
  'Cùng Bạn Đọc Sách': {
    url: 'https://www.youtube.com/@C%C3%B9ngB%E1%BA%A1n%C4%90%E1%BB%8DcS%C3%A1ch/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/g70anyp2s0yw0wdxrfca0/C-ng-B-n-c-S-ch.webp?rlkey=bj0qy22zkglu03londp573c0y&st=0b4z4civ&raw=1',
  },
  'Luận Sách': {
    url: 'https://www.youtube.com/@LuanSach',
    thumbnail: 'https://www.dropbox.com/scl/fi/b3i638gpdjrdokugzy4md/Lu-n-S-ch.png?rlkey=5th5ai9grwl8zt09td9gfc023&st=bwkntit4&raw=1',
  },
  'Fonos - Kho sách nói bản quyền': {
    url: 'https://www.youtube.com/@FonosVietnam/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/377pe1ro6i8c4mf33i81p/Fonos-Kho-s-ch-n-i-b-n-quy-n.jpg?rlkey=srfb0ka8o75qyofbgyqm89ybh&st=ay9vshsq&raw=1',
  },
  'Trạm Dừng Audio': {
    url: 'https://www.youtube.com/@tramdungaudio',
    thumbnail: 'https://www.dropbox.com/scl/fi/afpq51qqh0hvvygdajqym/Tr-m-D-ng-Audio.jpg?rlkey=qva89lp6nml766k6c8ilyiei3&st=n7ou90qd&raw=1',
  },
  'Audiobooks AZ Việt Nam': {
    url: 'https://www.youtube.com/@AudiobooksAZVietNam/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/dzajgautja4hxodm2o7zg/Audiobooks-AZ-Vi-t-Nam.jpg?rlkey=xo306kq9ulzjespcxxul60zq4&st=viw812n7&raw=1',
  },
  'Tư duy và sách': {
    url: 'https://www.youtube.com/@TUDUYVASACH/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/fawjaivwbl50xr77873ee/T-duy-v-s-ch.webp?rlkey=6aoaorwpv6d0wm70k6kczxg2v&st=f099kg7w&raw=1',
  },
  'Đọc Sách Cùng Thùy Uyên': {
    url: 'https://www.youtube.com/@ThuyUyenSachNoi/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/7608kspdvl0ek8sj7k0lf/c-S-ch-C-ng-Th-y-Uy-n.jpg?rlkey=e5jvqd7qtq21jug3q2ypku860&st=1evjo3ib&raw=1',
  },
  'Grow On | Đọc Mỗi Ngày': {
    url: 'https://www.youtube.com/@growon_channel/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/yi0caivi0539rtj4ukz6n/Grow-On-c-M-i-Ng-y.jpg?rlkey=6p37dkeagxnbmkhis1fz12wct&st=gg16hn2u&raw=1',
  },
  // thêm các mục khác nếu cần
};
