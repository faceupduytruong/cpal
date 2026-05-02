const customThumbnails = {
  'Time': 'https://www.dropbox.com/scl/fi/o2t5xix5p7jefgkd6aybg/Time.jpg?rlkey=4seomewe2u7q22fk09wjmvx17&st=7hn1v56t&raw=1',
  // thêm các mục khác nếu cần
};

// Danh sách thư mục và số lượng ảnh trong mỗi thư mục
const folders = {
  'Time': ['54088110141_a6dcd48bea_o.jpg', 'talkin_image_1729481035440.jpg', 'talkin_image_1730449853013.jpg', 'talkin_image_1730449854745.jpg', 'talkin_image_1730452491714.jpg', 'talkin_image_1730454953058.jpg', 'talkin_image_1730454954489.jpg', 'talkin_image_1730454957424.jpg', 'talkin_image_1730454966714.jpg', 'talkin_image_1730454969251.jpg', 'talkin_image_1733140473200.jpg', 'talkin_image_1735391001973.jpg', 'talkin_image_1735867431839.jpg', 'talkin_image_1737015117446.jpg', 'talkin_image_1737015118688.jpg', 'talkin_image_1737015121202.jpg', 'talkin_image_1737015123815.jpg', 'talkin_image_1737015147033.jpg', 'talkin_image_1737015148471.jpg', 'talkin_image_1737015150882.jpg', 'talkin_image_1737015153339.jpg', 'talkin_image_1737015184754.jpg', 'talkin_image_1737015186101.jpg', 'talkin_image_1737015188356.jpg', 'talkin_image_1737015190946.jpg', 'talkin_image_1737029907567.jpg', 'talkin_image_1737702106401.jpg', 'talkin_image_1737702107732.jpg', 'talkin_image_1737702110058.jpg', 'talkin_image_1737702112761.jpg', 'talkin_image_1739130158989.jpg', 'talkin_image_1753173710650.jpg', 'talkin_image_1753173712186.jpg', 'talkin_image_1753173714385.jpg', 'talkin_image_1753173716827.jpg', 'talkin_image_1753173902596.jpg', 'talkin_image_1753173904227.jpg', 'talkin_image_1753173906436.jpg', 'talkin_image_1753173908638.jpg', 'talkin_image_1753174087097.jpg', 'talkin_image_1753174088609.jpg', 'talkin_image_1753174090668.jpg', 'talkin_image_1753174093160.jpg', 'talkin_image_1756737549239.jpg', 'talkin_image_1756737660061.jpg', 'talkin_image_1756864921422.jpg', 'talkin_image_1760070344420.jpg'],
  // thêm các mục khác nếu cần
};

const folderLinks = {
  'Sách Khám Phá Bí Ẩn': {
    url: 'https://lighthearted-mediafire-ebook-d0d92e.netlify.app/Traveling/index.htm',
    thumbnail: 'https://www.dropbox.com/scl/fi/ri7ard0iy4hyu9n987n7o/S-ch-Kh-m-Ph-B-n.jpg?rlkey=ln731vw27wb0m97w71wy9nf3z&st=q59bg052&raw=1'
  },
  'Google': {
    url: 'https://translate.google.com.vn/?lfhs=2&sl=en&tl=vi&op=translate',
    thumbnail: 'https://www.dropbox.com/scl/fi/go7hgrxhqjdlc8twaob54/Google.webp?rlkey=re0z5hmanpo8rp4xts7m24xck&st=riwgh2gl&raw=1'
  },
  'LI Khám Phá': {
    url: 'https://www.youtube.com/@LIKHAMPHA/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/aadmv5vaye952hyrg437s/LI-KH-M-PH.webp?rlkey=85v2d0wjb9tu7ar4bz9eze10q&st=r8nmzxg8&raw=1',
  },
  'Vũ Trụ Bí Ẩn': {
    url: 'https://www.youtube.com/@V%C5%A9Tr%E1%BB%A5.B%C3%AD%E1%BA%A8n/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/q2k7fbw0fuze4fs2zx38h/V-Tr-B-n.jpg?rlkey=6py5czq8poox5gizutzlfrv7q&st=jomtyv6y&raw=1',
  },
  'Trái Cây Biết Nói': {
    url: 'https://www.facebook.com/traicaybietnoi/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/jil4mkdvkiuvmq0wf9f3u/Tr-i-C-y-Bi-t-N-i.png?rlkey=nsctafamhxk03t3a5yw1fbyr4&st=xpfee7zy&raw=1',
  },
  'Thiên Văn Học Nhí': {
    url: 'https://www.youtube.com/@Thienvanhocnhi/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/0ti3blfcpk9v2o19n0yk8/Thi-n-V-n-H-c-Nh.webp?rlkey=go0235xwiv1iw30014d3z1iz9&st=qbu9o199&raw=1',
  },
  'Vũ Trụ 1 Phút – Official': {
    url: 'https://www.youtube.com/@vutru1phut/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/ydcw3kznd9iqut69ty1y5/V-Tr-1-Ph-t-Official.jpg?rlkey=skucxjxwmf89jgo4wn5iygw7l&st=qixtrba6&raw=1',
  },
  'Vũ Trụ Tĩnh Lặng': {
    url: 'https://www.youtube.com/@VuTruTinhLang/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/rb6wev2gw7ab81sud6wae/V-Tr-T-nh-L-ng.jpg?rlkey=ulo5sfhi247nu7ctn42532f71&st=o0hagypg&raw=1',
  },
  'Trần My': {
    url: 'https://www.facebook.com/coba.bentre.33/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/yox4elgdrsyt91bilc3va/Tr-n-My.jpg?rlkey=mn9nz8sh4guidpr6zmsge3i51&st=98c2xff0&raw=1',
  },
  'Tớ Yêu Thiên Văn Học': {
    url: 'https://www.facebook.com/toyeuthienvanhoc/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/yx2bywgilron2f70p32fu/T-Y-u-Thi-n-V-n-H-c.avif?rlkey=91sni64q4vswejjrgqeebpog4&st=wdri4v24&raw=1',
  },
  'Vũ Trụ Quanh Ta': {
    url: 'https://www.youtube.com/@scienceisaround/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/0dm8qj4cfv71giz1v1xkt/V-Tr-Quanh-Ta.webp?rlkey=xmoxn09vcu7bao3bn5tsd9vzy&st=ozxnlmy7&raw=1',
  },
  'Khoa Học Trái Đất Và Vũ Trụ': {
    url: 'https://www.youtube.com/@KHOAHOCTRAIDATVAVUTRU/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/ocznrf4odcopr09nmsliw/KHOA-H-C-TR-I-T-V-V-TR.jpg?rlkey=iddod3ikfgtqxtefvyb8t6xby&st=12le6kcn&raw=1',
  },
  'Hành Trình Giả Thuyết': {
    url: 'https://www.youtube.com/@HanhTrinhGiaThuyet/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/6gbyhr77vyiau2jwim441/H-nh-Tr-nh-Gi-Thuy-t.jpg?rlkey=7cyu1gnp3qfrynh6tiuaqkrro&st=24783r4n&raw=1',
  },
  'Hiểu Thế Giới': {
    url: 'https://www.youtube.com/@hieuthegioi-2805/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/fmp5is8x5c293ea16hkvg/Hi-u-Th-Gi-i.jpg?rlkey=ww3wrmyftztoflfxkagl856ll&st=ga4rhdpj&raw=1',
  },
  '夫妻物语 (Fūqī Wùyǔ)': {
    url: 'https://www.youtube.com/@%E5%A4%AB%E5%A6%BB%E7%89%A9%E8%AF%AD/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/2rj30r3dpupqj4y8u71z8/F-q-W-y.jpg?rlkey=5x61knnkbdb21094y9izlvspp&st=qkopbsk2&raw=1',
  },
  'Hồ Sơ Vô Cực': {
    url: 'https://www.youtube.com/@H%E1%BB%93S%C6%A1V%C3%B4C%E1%BB%B1c/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/s170i9ovpm56orbv086au/H-S-V-C-c.webp?rlkey=89bkifi14z2x6c9m4dorpuash&st=jrt88axj&raw=1',
  },
  'Zoom Out Thế Giới': {
    url: 'https://www.youtube.com/@ZoomOutTheGioi/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/q44h0lb4kid2hdydct9x1/Zoom-Out-Th-Gi-i.jpg?rlkey=al8rco7olky104zhe8s6rbjmt&st=2w297skc&raw=1',
  },
  'Tắc Kè Facts': {
    url: 'https://www.youtube.com/@T%E1%BA%AFcK%C3%A8Facts/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/f2fnfuvx9mq57hcr6jd3a/T-c-K-Facts.jpg?rlkey=znag47ujaeoecp5en29id5ge7&st=jnozl6yb&raw=1',
  },
  'Phi Hành Gia Ru Ngủ': {
    url: 'https://www.youtube.com/@PhiH%C3%A0nhGiaRuNg%E1%BB%A72025/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/pcfce1ylzb08nnchmhew5/Phi-H-nh-Gia-Ru-Ng.webp?rlkey=fsth3qrsbbtja08oo18zqsfzj&st=hci5ztgd&raw=1',
  },
  'Thanh Niên Ký - Tổng Hợp': {
    url: 'https://www.facebook.com/84thanhnienky/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/do90pw7zqnkc6fz06i8ri/Thanh-Ni-n-K-T-ng-H-p.jpg?rlkey=sng8xqde1h2b9781k6w78i8x2&st=ihuj59vx&raw=1',
  },
  'Vũ Trụ Là Gì': {
    url: 'https://www.facebook.com/minh.lagau.9/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/m19wiuyny0dnyeu069nvd/V-Tr-L-G.jpg?rlkey=8a2mlcjipinhtdojjx42054y1&st=ngh11xy6&raw=1',
  },
  'Đột Phá Tri Thức': {
    url: 'https://www.youtube.com/@dotphatrithuc/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/vmnp8ue1y9zu0zducpuot/t-Ph-Tri-Th-c.webp?rlkey=w7mvgopuomu05ps2p5tnvup22&st=x9ui7pat&raw=1',
  },
  'Bí Ẩn Vũ Trụ': {
    url: 'https://www.facebook.com/profile.php?id=61573268736021&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/htmzaj5uqtnoh7fpawaun/B-n-V-Tr.jpg?rlkey=vbw166lneag7k7y7s35ufa8o4&st=m51pqyc6&raw=1',
  },
  'Quản Trị Mạng (Vũ Trụ)': {
    url: 'https://quantrimang.com/khoa-hoc/khoa-hoc-vu-tru',
    thumbnail: 'https://www.dropbox.com/scl/fi/xmiai8sn6xt1infuil1yw/Qu-n-Tr-M-ng-V-Tr.jpg?rlkey=lyqnq7jegtswxhcjynynwhdtd&st=rvxcg180&raw=1',
  },
  'The Dream Weaver': {
    url: 'https://www.youtube.com/@TheDreamWeaver-m6o/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/j13ghhk924gane1i550sj/The-Dream-Weaver.jpg?rlkey=g9338w00x9y7y4udieeo5p40l&st=m15ciz32&raw=1',
  },
  '1 Phút Khoa Học': {
    url: 'https://www.youtube.com/@1phutkhoahoc/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/1lqc62ak5egssjxe8pyax/1-Ph-t-Khoa-H-c.jpg?rlkey=amr5lcq3ismu9j5otk5x4g4xz&st=cz8z4477&raw=1',
  },
  'Đi Khám Phá - M97': {
    url: 'https://www.facebook.com/dikhampham97/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/aoary35htyjdoer7rcl09/i-Kh-m-Ph-M97.png?rlkey=qz5luqj42dkh8yjwotcwucytx&st=6t5qy7fw&raw=1',
  },
  'Khám Phá Mọi Thứ': {
    url: 'https://www.youtube.com/@khamphamoithu88/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/gw989s4a77jo67j5eikz8/Kh-m-Ph-M-i-Th.avif?rlkey=2hx2u35tsuf85rvobdwwzptcl&st=gip1pyuv&raw=1',
  },
  'Ve Chai': {
    url: 'https://www.facebook.com/AiBanVeChaiHon/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ep3fa0756i7vjbtfziq3h/Ve-Chai.gif?rlkey=3ow81tyhzsmklux9exo6fl4yd&st=8iupwapp&raw=1',
  },
  'Soi sáng': {
    url: 'https://www.youtube.com/c/SoiS%C3%A1ngBrightSideVietnamese/videos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/naiwaeddd3amkl727y7bi/Soi-S-ng.jpg?rlkey=31q5r9dlpxi0q0v1yj7ld76n9&st=d07e89ut&raw=1',
  },
  'Taca WHY': {
    url: 'https://www.youtube.com/@TacaWHY/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/1r4ldg5gebjanqmfkji9n/Taca-WHY.jpg?rlkey=cz7buyn5in7cqa9ytpb63duiz&st=09u2udiw&raw=1',
  },
  'TACA CHANNEL NEW': {
    url: 'https://www.youtube.com/@taca/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/4rxug0z0qlyw5q2mhi9oj/TACA-CHANNEL-NEW.jpg?rlkey=tujrqta6f2s899rz7k6h1qsbq&st=a7ctcc7s&raw=1',
  },
  'Bạn có biết': {
    url: 'https://www.youtube.com/@dat.biettuot/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/cs6ghypswaxqxlhihp4kg/B-n-C-Bi-t.jpg?rlkey=tsvrtir39fk7azpdd3lslpqoq&st=4oyuj7kd&raw=1',
  },
  'Bạn Biết Chưa': {
    url: 'https://www.youtube.com/@BanBietChua-d6z/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/bvgb45gmoxmm532wemupl/B-n-Bi-t-Ch-a.jpg?rlkey=573c3f8r8qo0s7ihncon50gki&st=4ezfy8hv&raw=1',
  },
  'Đạt Biết Tuốt': {
    url: 'https://www.facebook.com/bancobietaz/photos_by',
    thumbnail: 'https://www.dropbox.com/scl/fi/i713a91g6oecnfwxpa0iw/t-Bi-t-Tu-t.png?rlkey=wo35v8t4jkfdgibg15svprr38&st=7c900uou&raw=1',
  },
  'Huyền Biết Tuốt': {
    url: 'https://www.youtube.com/@huyenbiettuot/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/mknfihqgjukatwbvmxeh7/Huy-n-Bi-t-Tu-t.webp?rlkey=byuhedv3o420qavgswkog1xxs&st=xoa8it3u&raw=1',
  },
  'Khám Phá Thế Giới 410': {
    url: 'https://www.youtube.com/@khamphathegioi410/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/uywrn9x520t8pq86bt944/Kh-m-ph-th-gi-i-410.jpg?rlkey=6nc70yru54q71g03rt5fezyp1&st=2i62rn6z&raw=1',
  },
  'Kiến Thức Thú Vị Official': {
    url: 'https://www.youtube.com/@KI%E1%BA%BENTH%E1%BB%A8CTH%C3%9AV%E1%BB%8AOfficial-i8e/playlists',
    thumbnail: 'https://www.dropbox.com/scl/fi/4nuy4lz9wjtg1p4x761no/KI-N-TH-C-TH-V-Official.png?rlkey=54spxlb8qakpvxy3qpmf3l6rt&st=oq8kys5c&raw=1',
  },
  'Dân Công Sở': {
    url: 'https://www.facebook.com/SPX.DanCongSo/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9c595tfsyrlj42hh7fg94/D-n-C-ng-S.jpg?rlkey=sqb4ttbbchox0r0kndfciamyn&st=yrwjava3&raw=1',
  },
  'VFacts': {
    url: 'https://www.youtube.com/@VFacts/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/wkikx4rt3iv5shviizuju/VFacts.jpg?rlkey=597t79rtlqji17zogrghhxler&st=n46jq9fw&raw=1',
  },
  'Handy Zhong': {
    url: 'https://www.facebook.com/HandyZhongOfficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/3ebviagrcxold34uz5hrn/Handy-Zhong.jpg?rlkey=ibaozpaomel04wp6yqeuznhsy&st=2fhwi2s7&raw=1',
  },
  'Đình Đề ReView': {
    url: 'https://www.youtube.com/@dedomreview/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/hcw6bayduy4td75xwaesh/nh-ReView.jpg?rlkey=exl9qp7f6gqfevxatmwcgl1u7&st=qkhvjmq6&raw=1',
  },
  'Hùng Không Ngu': {
    url: 'https://www.youtube.com/@HungKngu/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/uswga63uh6z1aq803ruyq/H-ng-Kh-ng-Ngu.png?rlkey=i61xr4tz9lz68dbwl7bpdakt1&st=tr7f7gae&raw=1',
  },
  'TÒ MÒ': {
    url: 'https://www.youtube.com/@tomovakhampha/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/3j3xtzo7bmghf6fjmpmi1/T-M.jpg?rlkey=1j6pc33t1mkb14gz2kekjv7z7&st=aeaeo2uu&raw=1',
  },
  'Rổ Mẹo': {
    url: 'https://www.youtube.com/@R%E1%BB%95M%E1%BA%B9o-stmn/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ljb0ko18up4hcgy9g7g6q/R-M-o.jpg?rlkey=2ku6lcuxd0o9m8wipip42fmpy&st=wywla0cv&raw=1',
  },
  'Vài Mẹo Hay': {
    url: 'https://www.youtube.com/@vaimeohay.9/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/9yyggcj6nzjqnd4vtso1e/V-i-M-o-Hay.jpg?rlkey=v3nw4roiqisbth1dm2mzyg1w9&st=v5nj9trj&raw=1',
  },
  'Quản Trị Mạng (Mẹo Vặt)': {
    url: 'https://quantrimang.com/cuoc-song/meo-vat',
    thumbnail: 'https://www.dropbox.com/scl/fi/nuqlob3w0u61ll9lq6d9k/Qu-n-Tr-M-ng-M-o-V-t.jpg?rlkey=j50x1bbk0v6pg7n390vddcle1&st=8t7va661&raw=1',
  },
  'Xe Ôm Vlog': {
    url: 'https://www.facebook.com/hoangxeomvlog/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/yi6of5z952l66beok40n7/Xe-m-Vlog.png?rlkey=8rs5uiqrqqsoyvf59y5ysw6mo&st=1oid25nc&raw=1',
  },
  'Hờ Biển': {
    url: 'https://www.youtube.com/@hobienstory/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/0w070f9qk5rs98lgzq8nv/H-Bi-n.jpg?rlkey=30f9tkt13rucwu8c1s4pea07b&st=nt8dce60&raw=1',
  },
  'Vườn của Ba': {
    url: 'https://www.facebook.com/vuoncuabacoi/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/g52yhqbhc7qqgtf3bmcox/V-n-c-a-Ba.jpg?rlkey=kb4djh2igu4q32nigbqyt73w5&st=ia3ef09z&raw=1',
  },
  'Chuyện Lạ Của Trang (Facebook)': {
    url: 'https://www.facebook.com/chuyenlacuatrang/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/oz4cndjj1fnk69n9wpvq4/Chuy-n-l-c-a-Trang.jpg?rlkey=a3c8vb72wtmh00mi6e64vrgke&st=kmegfwqj&raw=1',
  },
  'Chuyện Lạ Của Trang (Youtube)': {
    url: 'https://www.youtube.com/@ChuyenLaCuaTrangg',
    thumbnail: 'https://www.dropbox.com/scl/fi/oz4cndjj1fnk69n9wpvq4/Chuy-n-l-c-a-Trang.jpg?rlkey=a3c8vb72wtmh00mi6e64vrgke&st=kmegfwqj&raw=1',
  },
  "Davo's Lingo": {
    url: 'https://www.facebook.com/davoslingo/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/mnud3wbitzic3lktv60i7/Davo-s-Lingo.jpg?rlkey=bewf69o557hrsbv8c115nfqes&st=kcojjatq&raw=1',
  },
  "Lại Ngứa Chân": {
    url: 'https://www.facebook.com/Lainguachanofficial/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/kp7z954qys1jd5c9re9cp/L-i-Ng-a-Ch-n.jpg?rlkey=01vfb4yieb9idfijn3rd8wlb4&st=5yv9z6hi&raw=1',
  },
  'MC Quang Huy': {
    url: 'https://www.facebook.com/profile.php?id=61581484430903&sk=reels_tab',
    thumbnail: 'https://www.dropbox.com/scl/fi/tblc057on8le9tt4hu6ru/MC-Quang-Huy.jpg?rlkey=0zkq1d26yu1kc2dao9mqvrutx&st=u6ngatxp&raw=1',
  },
  'Bí Ẩn Thế Giới': {
    url: 'https://www.youtube.com/@bianthegioi19/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/s0mhl93n258ud79olo6m6/B-n-Th-Gi-i.jpg?rlkey=omqinbtj8zyejdfw1jycd8vqd&st=lejnzoq7&raw=1',
  },
  'Bắp TV': {
    url: 'https://www.facebook.com/baptv5642/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/0zql6b385pmdek2m4ln0e/B-p-TV.jpg?rlkey=egergzdyz6b32uzhg0sti2s9d&st=sdaqywxa&raw=1',
  },
  'Độc lạ Bình Dương': {
    url: 'https://www.facebook.com/doclabinhduong.np/reels/',
    thumbnail: 'https://www.dropbox.com/scl/fi/ud76kenywtos4bvchbb9s/c-L-B-nh-D-ng.png?rlkey=ts92qk29wh4x8xeb7z5xj74u4&st=x32kcdiq&raw=1',
  },
  'Ý Hay': {
    url: 'https://www.youtube.com/@%C3%9DHay-z6r/shorts/',
    thumbnail: 'https://www.dropbox.com/scl/fi/hyl30r8ew9qb09607an9y/Hay.jpg?rlkey=cagzjfczo33nzlka7sq7eijdb&st=ua9c0lxu&raw=1',
  },
  'IFact': {
    url: 'https://www.facebook.com/IQFact/photos/',
    thumbnail: 'https://www.dropbox.com/scl/fi/98293ku6o8zl45d0x9dmf/IFact.png?rlkey=r2jv3dmk9yspsldn1cnf1iqvk&st=otpd43zx&raw=1',
  },
  'Bee Khám Phá': {
    url: 'https://www.youtube.com/@BeeKhamPha/videos',
    thumbnail: 'https://www.dropbox.com/scl/fi/wedkmeo4apfad83l7th3g/Bee-Kh-m-Ph.webp?rlkey=itc0lt8mqvvvruedobxv1igv4&st=ypwbh3na&raw=1',
  },
  'NH88 Tin tức Chính Trị': {
    url: 'https://www.youtube.com/@nh88tintucchinhtri/shorts',
    thumbnail: 'https://www.dropbox.com/scl/fi/8fzubu9unw2dd0i1p22j1/NH88-TIN-T-C-CH-NH-TR.jpg?rlkey=kbi78vdct2v1g3aqbw4id1klj&st=qdcptb16&raw=1',
  },
  // thêm các mục khác nếu cần
};
