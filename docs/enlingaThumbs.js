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
  'Happy Town': {
    url: 'https://www.facebook.com/myhappytown',
    thumbnail: 'https://www.dropbox.com/scl/fi/csit81dpuu4yfmyxhohfv/Happy-Town.png?rlkey=whemuinjunx1hd8tnu3q311mg&st=4x6axchm&raw=1',
  },
  'Piggy Town - Nuôi Heo (Facebook)': {
    url: 'https://www.facebook.com/piggytown.funtap',
    thumbnail: 'https://www.dropbox.com/scl/fi/bimrozn2yu47fhjaux2n4/Piggy-Town-Nu-i-Heo-Facebook.jpg?rlkey=x5zdw9do17upfuoc6iol3mlpw&st=b51acqcs&raw=1',
  },
  'Piggy Town - Nuôi Heo (Forum)': {
    url: 'https://www.facebook.com/groups/piggytown.funtap',
    thumbnail: 'https://www.dropbox.com/scl/fi/s289jok5rfu6yojrnqtjs/Piggy-Town-Nu-i-Heo-Forum.jpg?rlkey=nq45pp9fsso2sj6dy205h76xk&st=d181nfxj&raw=1',
  },
  'Trạm game 1 (MSN)': {
    url: 'https://www.msn.com/en-us/play?cgfrom=cg_dsb_seeMore&cgdsbut=a&ocid=winpsearchboxexpcta2&cvid=29f698d2763f47bcaedbe41fe3eac233&nclid=C454E3BDEBC302605749250B25E31342&ts=1774102755469&nclidts=1774102755&tsms=469&PC=WSBDSB',
    thumbnail: 'https://www.dropbox.com/scl/fi/4w2xxfqr20e1t6mu2i69c/Tr-m-Game-1-MSN.png?rlkey=vkxdu1wca3ljpvxirm0put79u&st=ocjmo65o&raw=1',
  },
  'Trạm game 2 (Y8 Games)': {
    url: 'https://www.y8.com/',
    thumbnail: 'https://www.dropbox.com/scl/fi/qsveqacu4m198midpc3kd/Tr-m-Game-2-Y8-Games.webp?rlkey=509ohvqszj8h57i5o431ssouy&st=q1ocavi2&raw=1',
  },
  'Trạm game 3 (Gameflare)': {
    url: 'https://www.gameflare.com/',
    thumbnail: 'https://www.dropbox.com/scl/fi/xdbvsf43lbmld7km43tqh/Tr-m-Game-3-360-Games.webp?rlkey=qzs0vijn164zl58ueeaiwcj8b&st=09yqb1ds&raw=1',
  },
  'Trạm game 4 (Game vui)': {
    url: 'https://gamevui.vn/',
    thumbnail: 'https://www.dropbox.com/scl/fi/enl69sscfuizkg8xpynyf/Tr-m-Game-4-360-Games.png?rlkey=seqnl4ajx2noji0c8qkccsd0s&st=z3xdu9h1&raw=1',
  },
  // thêm các mục khác nếu cần
};
