// Tạo HTML động
const container = document.createElement("div");
container.innerHTML = `

     <!-- Hàng thứ 1 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Windows<br>System</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://blogs.windows.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/vzlfd961vjghhdjy342o4/Windows-Blogs.png?rlkey=q5sa1l6n8oyqxdfwtuljon33m&st=qlj9qe59&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Windows Blogs</div>
      </div>
    
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/he-thong' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ez9n4aqk8r3eyk02pnqbj/Qu-n-Tr-M-ng-Windows.png?rlkey=b8f4ljlkvdat2gyqtrxx8tdfk&st=7ihiim50&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Windows)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.howtogeek.com/category/windows/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/eifxolenw4inm0zfdfxvv/Howtogeek-Windows.ico?rlkey=62kctyvglyplc0jhcvge55u8p&st=v1b2jxj4&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Howtogeek (Windows)</div>
      </div>
        
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://tinhte.vn/windows' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/bfi4ycjqqn144iqysoyu5/Tinh-t-Windows.jpg?rlkey=5h5xpapboyciv9vbt7ssaj86s&st=6obk7lt0&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tinh tế (Windows)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.youtube.com/@NETVN82/videos/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/96zlutfky9l0re8n5arhz/NETVN.png?rlkey=s78kcvh59rrmx5bx13fm77bfh&st=2nq405an&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">NETVN</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/kien-thuc-co-ban' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/tmluub3u4xz1ralkxgbto/Qu-n-Tr-M-ng-Ki-n-Th-c-C-B-n.png?rlkey=9vjut7uwrruxk3hfctzr63tfd&st=66f6vbko&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Kiến Thức Cơ Bản)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/video/video-huong-dan' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/vhpnb5ug93s2mzu13vfwg/Qu-n-Tr-M-ng-H-ng-D-n.png?rlkey=vtl23kucf5bl8de55vduau91h&st=ubud85jh&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Hướng Dẫn)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/ung-dung' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/2d0rl3zfi53mqsy83qwja/Qu-n-Tr-M-ng-ng-D-ng.png?rlkey=9yd1s7xr1tjw6xuln11125hni&st=tbc420if&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Ứng Dụng)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/motngaymoitasetrolai/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/8kw8jmudpyisf4vzapux1/Anh-Nam-C-i-Win.png?rlkey=hezjgfuikt9gkvktdp659tis5&st=j3fzw265&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Anh Nam Cài Win</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.youtube.com/@phucaiwinonline/videos' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/xyhead1l0185eg62wbvk0/PH-C-i-Win-Online.png?rlkey=euqwd2meloys74e0z14itrm7k&st=kah3949t&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Phú Cài Win Online</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.youtube.com/@MicrosoftWindows/videos/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/odd3ajanm5n45vfhfdqxr/Windows.jpg?rlkey=2t59eiihobht0yhbaqbnpr31b&st=26mh4vyz&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Windows</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/864872477456083/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/98e6ev48lb4nwn62c4c7j/Windows-11-Vi-t-Nam.png?rlkey=dv93il5pxubznq0enravwezwn&st=mlzvukbz&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Windows 11 Việt Nam</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/21ak22' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/qqtrkxdz2djowyc4ytn5i/21AK22.COM.png?rlkey=oe10nb96n3rlu004g068rxusv&st=lgxgup2j&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">21AK22.COM</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/TeamOS.xyz/photos/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/xyt2x6zs170eql8lxuloh/Teamos.xyz.png?rlkey=2cvgcol8vtyhi7oizmg8oc9ej&st=gk5sujfb&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Teamos.xyz</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/795421863881485/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/dmqu933u1qqsy8lyx4csx/T-ng-h-p-c-c-ph-n-m-m-m-y-t-nh.png?rlkey=cqdld5skolz4tok909ays44us&st=sadeg6u3&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tổng hợp các phần mềm máy tính</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/676295082491590/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/7r4hbj0vbnl577ruwyz58/VN-Zoom-Support-Team.webp?rlkey=xs5bwh5jg7qzc2lrcmnc20bac&st=2114so8y&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">VN-Zoom Support Team</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/3steam.v1/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/xz7cfzrjh3l0jy3nr49y8/3S-TEAM.png?rlkey=xv95x6kdqf9irve3vpqnocszl&st=qbnuc9iz&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">3S-TEAM</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/techrum/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/gc1z2343zugjq8i3io2vh/Techrum.vn.png?rlkey=qmz3vsnwhl8cubjzf00hrniav&st=n256qn97&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Techrum.vn</div>
      </div>
      
</div>

     <!-- Hàng thứ 2 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Windows Apps</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('http://www.softwareok.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/g4j0r9542npp2rjuphldu/SoftwareOK.png?rlkey=r94elkxlzm6iar7nfxamr6dum&st=32qbq9q8&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">SoftwareOK</div>
      </div>

</div>

     <!-- Hàng thứ 3 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Hackintosh</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://lzhoang2801.github.io/introduction' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/8jyxeei4af2y7hf2k7xp2/Lzhoang2801.ico?rlkey=abswebtma5jg8dnkbl5oun7hn&st=3xyx79an&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Lzhoang2801</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://github.com/topics/lzhoang2601' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/otvxljy2bbqwuj3hs9ppk/Lzhoang2601-github.png?rlkey=z8x5e0c2srznjxxdrx90l456t&st=gbfeh5n4&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Lzhoang2601 Github</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/macforce2601/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/f8r7u8em4scj448ozhwk4/Macforce2601.jpg?rlkey=4zlhyceeh2fmjotultc3eaf8b&st=s4yttig4&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Macforce2601</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://hsvn.gitbook.io/guides/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/pvzvet37rlnxgpg2m820j/Hsvn.png?rlkey=72lcdj729y9pz2tve4vte6f84&st=695m3v6f&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Hsvn</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://dortania.github.io/OpenCore-Install-Guide/prerequisites.html#prerequisites' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/vfqjcgmdcegd0mxqv2ob2/Dortania.png?rlkey=7xv922bzql8dd02kbhwwwsd71&st=17sv6b35&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Dortania</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://rampagedev.wordpress.com/kext-editing/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/qi0g2qng51l90sjq6bfmx/Rampagedev.jpg?rlkey=rhya0h4xenka6w6n9ui4aqte9&st=yspsbrwm&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Rampagedev</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://olarila.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/wrc6diecnbbqszze5hexs/Olarila.jpg?rlkey=3g0kydhy0yfr5rxv9aw4qrcrq&st=v4rbcer3&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Olarila</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://osxlatitude.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/1k10iksatgt7yralbvivj/OSXlatitude.png?rlkey=l1y3etu36baw4cciolfiy1eyk&st=arzrshcp&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">OSXlatitude</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.insanelymac.com/forum/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/bqnrkc5ml5k6kx9v3legv/Insanelymac.jpg?rlkey=837iz1sy0ywrmshegsjguufnc&st=3zdl99tg&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Insanelymac</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('http://www.macbreaker.com/2012/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/e1k41mh43l5hhtzwjrfmg/Macbreaker.jpg?rlkey=wdxf31wl01fpd4a7rbl5q1pz2&st=54o94jgs&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Macbreaker</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://techmaster.vn/posts?keyword=&category=88&author=' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ymzmy3swhszvg79w1g9u6/Techmaster-VN-Mac-OSX.png?rlkey=blekdcukudwprtqfqyi8ieo4g&st=rxqwe42j&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Techmaster VN (Mac OSX)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/212709276703762/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/k9fmrelumwie27ahzrwks/Hackintosh-Vietnam-Opencore.webp?rlkey=bu738r2coxfue1wqoddu1ht8j&st=bf98rdwf&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Hackintosh Vietnam - Opencore</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/156279264117187/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/urlouebf8j9o10mego99g/HeaVietNam-Hackintosh.png?rlkey=9blvyl5dmc7wcckmwlvk0uhxb&st=6xhgesb9&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">HeaVietNam Hackintosh</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/5788317445/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/0fmijdhn1a4lkf5821r1v/Hackintosh.png?rlkey=pye41j6sykosibiskms9lrp4v&st=k9webkdt&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Hackintosh</div>
      </div>
     
</div>

     <!-- Hàng thứ 4 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Mac OSX</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/mac-os-x' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ejud8fbcb361dztr88i2o/Qu-n-Tr-M-ng-Mac-OS.png?rlkey=35nojfe2f5uoe4vhh6bl8g5hz&st=jdihzezr&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Mac OS)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://tinhte.vn/macos/tin-tuc' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/1fp3t9v70dg5w8okhhjnr/Tinh-t.webp?rlkey=eioatfa5uvkxv55ozch85kqsr&st=lhphwela&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tinh tế (Mac OSX)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/maclife.vn' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/r258gatc2318zd5s9iq7t/Maclife-v-ng-B-n.webp?rlkey=49sxwetndropwztp3pu4nqqbx&st=de937bpu&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Maclife và Đồng Bọn</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/maclifecafe/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/rmmt0mzjsldh20k7msxri/MacLife-CaFe.png?rlkey=a1l6ti1ulbdph5cdh8cos7acj&st=enxua5vb&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">MacLife CaFe</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/166439550424117/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/4nfhrh0wh42jny2q01pl6/Nghi-n-macOS-H-i-ng-i-ch-i-m-y-Mac.png?rlkey=m72dpmyt3l6cclipewr5ijn6h&st=a2bktcsh&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Nghiện macOS - Hội người chơi máy Mac</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/196963615828774/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/35pr2m9oalgkjza680vpl/H-i-Macbook-Vi-t.webp?rlkey=51i0sg8ity59hvfek3b9wba8w&st=c6arz179&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Hội Macbook Việt</div>
      </div>
 
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.macworld.com/software' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/59cemdbhxpfdqbuiazf9s/Macworld.png?rlkey=spt485vs2g2jafygopqtsjbqg&st=ylev3u0w&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Macworld</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.addictivetips.com/mac-os/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ibxsn39uyw4u9dhiq3hsl/Addictivetips.png?rlkey=arpwzsjazv9dmvsay2ymgt3y3&st=xsl2z3tc&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Addictivetips (Mac OSX)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/MacintoshVietNam/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/hdigselpfdciaqgfep76j/MacintoshVietNam.png?rlkey=m5fth2dh8cxj7x0v9tq0wv42h&st=u33yoqp3&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Macintosh VietNam</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/MacRumors/photos' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/nsnrmb6glgztv1vsovqts/MacRumors.png?rlkey=aaarx022qgk3bvlgfhyi4ez9h&st=c5jtgouj&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">MacRumors</div>
      </div>

</div>

     <!-- Hàng thứ 5 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Mac Apps</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://sharefreeall.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/h0tjxvjhft22i4ofhdlzw/Sharefreeall.webp?rlkey=rikjcyipu9io4dt3ugvp6wu7y&st=lh4zxarj&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Sharefreeall</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://nmac.to/now/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/5l81c4xxx3q7c34zc1yld/nmac.to.png?rlkey=w7umht628vbkmno4lmplk4s02&st=2yec2sw6&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Nmac.to</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.torrentmac.net/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/46q86iubdva1uou88zt85/Torrentmac.webp?rlkey=lqcmoio8zi58x8iu0q8hi4nud&st=rfzewkla&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Torrentmac</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('http://s.sudre.free.fr/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/3krsoxwhr88kxu2k1t9qp/Sudre.png?rlkey=cygh1vy5xpc22q6xhhsdplbzj&st=k1a2d63l&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Sudre</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://brettterpstra.com/topic/macos/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/c93zzc2sziyxjrj08o9sv/Brettterpstra.png?rlkey=ws0aq1pz2fxb762tx60qmjr59&st=shb8fxxa&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Brettterpstra</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.macbed.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/d8gnak6jnmx65estx2t6i/Macbed.png?rlkey=yoqciaut41axy3z0ejdskpa8p&st=u4rmdo7w&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Macbed</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://brew.sh/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/srymwblefu3jcm1z2mxrq/Homebrew.png?rlkey=gjz8eelaar0p1pbj1fnqzn7zb&st=t2psfdaf&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Homebrew</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/MouseGic/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/whbliqe02hpeelj68a78l/MouseGic.webp?rlkey=7ho4tailxobygf70ye2cgoemm&st=qpb9k9k9&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">MouseGic</div>
      </div>

</div>

     <!-- Hàng thứ 6 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Linux</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/linux-os' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/07z64vb6983gq74qsyp8y/Qu-n-Tr-M-ng-Linux.png?rlkey=0ld4zufw37rspmm2cx45w052s&st=liv1oefw&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Linux)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/j2team.community/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/h2vvyc3l8ltoewfcykcvw/J2TEAM-Community.webp?rlkey=xy179y3ak2a03dlcyogs69mco&st=zz9xw307&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">J2TEAM Community</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/1736980107212621/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/5gwe9o3inauf1rf8dgp8q/J2TEAM-Community.png?rlkey=rx824zjjcz51ymng0ygqy9ywm&st=nwb9dvzr&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">J2TEAM Community 🇻🇳</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/vietnamlinuxcommunity/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/7sa1m1e9v8hz3bply1bpg/Vi-t-Nam-Linux-Family-VNLF.png?rlkey=3dy1gdf8tko0vbnp6i665xiz1&st=hbd7j4pz&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Việt Nam Linux Family - VNLF</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/142870732409668/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/4mieq5fxcmraybjq6eql4/Linux-Distros-World.jpg?rlkey=k6mgutpxgjxjv1clais4v3e5y&st=3l82tf4j&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Linux Distros World</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.howtogeek.com/category/linux/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/hdb9kuhjbuujtmf3wsy41/Howtogeek.png?rlkey=rlhk97knvv9gbthaslmpuenrf&st=qj7exux9&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Howtogeek (Linux)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://ribalinux.blogspot.com/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/fxewdlj7xm0a58oyv1bht/Ribalinux.png?rlkey=qv6hvtbmkwa7v2sg7wwce0b9b&st=8mwqi5o2&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Ribalinux</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/itsfoss/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/vpnkvx8l5dfpud5v1ngbg/It-s-FOSS.png?rlkey=wl66dqc26w7z12wkx6msf8cmg&st=fj6y9r90&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">It's FOSS</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.addictivetips.com/ubuntu-linux-tips/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/4mzl8p7skjf8os486c05c/Addictivetips-Ubuntu.png?rlkey=qc5szovplkj92exgcobqzllq8&st=86zr24hh&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Addictivetips (Linux)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://techmaster.vn/posts?keyword=&category=579&author=' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/euxfmgumk31xs3sogmr5j/Techmaster-VN.webp?rlkey=ear5ix6ndncixzo2fme3ovqmw&st=l2e9e58i&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Techmaster VN (Linux)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://tutonics.com/articles/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/6vebttqx716xn0q1cplma/Tutonics.png?rlkey=4wtv6u05y4roscsiur8igj7m7&st=dnft2vf2&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tutonics</div>
      </div> 

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.phoronix.com/reviews/Operating+Systems/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/utygbdqnjhzky7kvllkt3/Phoronix.png?rlkey=gefu9rhct3n3dzmt15fa380py&st=l0gm5z9x&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Phoronix</div>
      </div> 
      
</div>

     <!-- Hàng thứ 7 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Distro Linux</h2>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/367825396651087/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/mo3whmycghwruwc9k3zcw/KDE.png?rlkey=9n5yznbbohgmdd3ff7t0379lu&st=8ozdbl4l&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">KDE (forum)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/kde' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/hugcjia808ath0e38ep0h/KDE-private.png?rlkey=bqhl04u0yqru1c8pznduka6ek&st=hv9keewx&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">KDE (private)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/1274804293784660/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/65w8mor88vvqtxaj0ft5t/CachyOS-Blazingly-Fast-Linux.png?rlkey=9wbq99oh2nnt5wx5m95z4f29c&st=eixeeic9&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">CachyOS Blazingly Fast Linux</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/477017103296405/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/z9xi2of5f6vgnn6m77ifq/Deepin-Linux-OS-Official.png?rlkey=mg4qsyw53j8sxn3y2jp5668em&st=9831saiq&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Deepin Linux OS Official</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/7064460843613310/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/z74k9as8mqolrhq1kzhaz/Kali-Linux-Offensive-Security.png?rlkey=4ov78p31k6r0qxfjtefcekyt0&st=wkbhhpks&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Kali Linux | Offensive Security</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/11454680248/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/9ksvoic4qijixyfzp16rq/Fedora-Linux.ico?rlkey=mkh5nkus6h9vxbhajd0czn0j9&st=qncflocq&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Fedora - Linux</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/373250289362368/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/1uf88m0zl20zyvz9whclo/Gentoo-Linux-User.png?rlkey=xb5nm88m4os4j1t6dxku9x44h&st=ots73qfv&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Gentoo Linux User</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/740670060221238/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/0eh2yd1k4by5kfvia50tt/Linux-Mint.png?rlkey=nc9rujh5og0cb3sbkzx5b4uf3&st=18n11nmg&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Linux Mint Desktop</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/665300826967101/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/p2nljpwic2l09qn1n04i0/MX_Linux.webp?rlkey=trjodabm0quueo07f55l3hr98&st=chsynjzw&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">MX_Linux</div>
      </div>

</div>

     <!-- Hàng thứ 8 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Android</h2> 
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/android' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/c2o6llfqomkfqdmmn8tx1/Qu-n-Tr-M-ng-Android.png?rlkey=5tu7ezi1nwxpwjchhi8wvuaiy&st=rjpqwujo&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Android)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/q8lx7e88bih6phv8688b7/Qu-n-Tr-M-ng-C-ng-Ngh.png?rlkey=710vh1txnimyswdfw66it8kq9&st=lazqio7s&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Công Nghệ)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.howtogeek.com/category/android/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/uluu0ghrr53juz4f1re2e/Howtogeek-Android.gif?rlkey=6da1z7a3k9dz1ypr5yiwi67rt&st=sv55l1iz&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Howtogeek (Android)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://tinhte.vn/android/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/bm2tg285wrd4ke46ly63l/Tinh-t-Android.png?rlkey=f667m1iqvw2zmfnn7ll5vln5z&st=yqyn8g8z&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tinh tế (Android)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/gemsongnghe/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/m85lmussj2tyrfzlbse7e/Gem-S-ng-Ngh.webp?rlkey=165vtvmzgc3zqfnfjldrru0w5&st=xltybadq&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Gem Sống Nghệ</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/groups/498287336961883/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/x4hds5j6z6ydld6p7cwkl/Group-Tinh-t.webp?rlkey=n3sasjfrsfk2rfhb9wguuzj6e&st=9osvr5nw&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Group Tinh tế</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/VnReview/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/a37vso7geimwogue5op0l/VnReview.vn.webp?rlkey=dtdxw77itqs6y3c1o6kgbewa8&st=jt6rczy8&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">VnReview.vn</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.techsignin.com/tag/android/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/dzflr0d07w9olhk3wfc14/Techsignin.png?rlkey=uauwsb24aaktaxdqpccb5g1dc&st=r1vueheh&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Techsignin</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://techmaster.vn/posts?keyword=&category=652&author=' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/nyo81xdaa5qqqxfdpzg56/Techmaster-VN-Android.webp?rlkey=yuy4cconel3yqcj42nyzhk04g&st=co3a3q2v&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Techmaster VN (Android)</div>
      </div>

     <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.youtube.com/@duongde_official/playlists' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/w90ondpld13hk96xr92kj/D-ng-D.png?rlkey=yhihiw2r09r5ueidl5kb632ob&st=jbm39a11&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Dương Dê</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.youtube.com/@mitchiase/videos/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/9tjmrorxarnatybk0sx3c/M-t-Chia-S.webp?rlkey=ud96t3o4jj71ea26b9jsc3zck&st=ukth80hg&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Mít Chia Sẻ</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/kobemediaofficial/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/vbtx7sa46di7brhmrtmvp/Kobe-Media.webp?rlkey=p4eml4hapkypdjyix8x2qa2th&st=e5ef99pd&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Kobe Media</div>
      </div>
     
</div>

     <!-- Hàng thứ 9 -->
    <div class="image-row glass-bg">
    <h2 class="row-title">Office</h2>
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://quantrimang.com/cong-nghe/tin-hoc-van-phong' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/suwsbtbeu731sub9r94a0/Qu-n-Tr-M-ng-Office.ico?rlkey=s29z5wola30g12r8wxldxyxi1&st=dtfnzkkf&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Quản Trị Mạng (Office)</div>
      </div>
      
      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/minhlakhoa.tinhoc/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/ge9obcmkfvrlndugnbofh/M-nh-L-Khoa-Office.png?rlkey=2t5uhndzwl3r3ndcww73j4e83&st=lc9ahl3h&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Mình Là Khoa</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/profile.php?id=61556563833906&sk=reels_tab' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/z3fj399hnf4gie5bht66i/H-o-Tin-H-c.jpg?rlkey=v522uv9m32w3ix7y5wqfwutlx&st=gwg03ek1&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Hảo Tin Học</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/profile.php?id=61557528566120&sk=reels_tab' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/aknn46epry05u8i087qvw/H-o-Tin-H-c-V-n-Ph-ng.webp?rlkey=v4oh5apswsinfq7opt789r1m9&st=aycuqg4f&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Hảo Tin Học Văn Phòng</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/Khanglv6366/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/f6zrnguoxsde7dxmz6a53/Khangg-Lv-khang-Tin-H-c.png?rlkey=rnmikvnqpxbhj4mdgof2bdrlh&st=jyj1836s&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Khangg Lv (khang Tin Học)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/dattinhocquocte/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/15s6fsuneo51dz8d4350g/t-Tin-H-c-L-V-n-t.png?rlkey=3kiacka6ydh4ku3q4z3iy6ro3&st=9m0tpp5p&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Đạt Tin Học (Lê Văn Đạt)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/profile.php?id=61557631294837&sk=reels_tab' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/3ypde45kc0hoie4h0izv1/Tin-H-c-Official-Office.png?rlkey=b3wtm2pv0py4nqm8xp8u7p3ji&st=qh4j6fxd&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tin Học Official</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/tothuhoanblog/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/0zo04yw1a5hn98f94af23/T-Thu-Ho-n.png?rlkey=3sihwar62b002t7wt91bo0mvr&st=uteo4pb8&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Tô Thu Hoàn</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/profile.php?id=61574668685456&sk=reels_tab' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/qqaxuj0v5jw3jb43kkk15/Phong-Excel.png?rlkey=uner2mpr1dwblou2egiyoass3&st=89ersl37&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Phong Excel</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/thuthuatexcelchonguoibanron/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/lufu6mprf5pxl9uw12tpq/Th-Thu-t-Excel-Cho-Ng-i-B-n-R-n.png?rlkey=3cd57p117o01omkesk6kccsrb&st=5fmqh7p7&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Thủ Thuật Excel Cho Người Bận Rộn</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.youtube.com/c/G%C3%A0Excel/shorts/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/8e4c9fq1oqi7dwbfidhkv/G-Excel.png?rlkey=0ok5mdbzb51hdkz51k9bw8cwi&st=sn9rdwqp&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Gà Excel</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.damtaicap.net/search/label/Microsft%20Excel' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/w2tixq4kchb7zxydvs3sy/m-T-i-Cap-Excel.webp?rlkey=12pqdr8b9jw6pekyborcoyc1n&st=918gin9u&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Đàm Tài Cap (Excel)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/9slide.edu/reels/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/cmslfhvwrr37vmhnyhms7/9Slide-Kh-a-h-c-thi-t-k-Powerpoint-d-nh-cho-Thuy-t-tr-nh-v-Truy-n-th-ng.png?rlkey=fswnerjqypeiq2upbk9hi3uly&st=19nbyzun&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">9Slide - Khóa học thiết kế Powerpoint dành cho Thuyết trình và Truyền thông</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.damtaicap.net/search/label/Microsoft%20Project' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/7eibootqhb0snxhsvehtk/m-T-i-Cap-Microsoft-Project.jpg?rlkey=ffll5mnvg01bcqog8a52jcfdt&st=ksml921g&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">Đàm Tài Cap (Microsoft Project)</div>
      </div>

      <div class="image-box">
       <div onclick="openRightHalfPopup('https://www.facebook.com/UnicaBookstore/photos/' + chatParams, 'SmartApp Popup', window.innerWidth, 745)">
       <img src="https://www.dropbox.com/scl/fi/cwir1858l2sy4mxilt8h5/UnicaBookstore-Shortcut-Office.jpg?rlkey=jcoaxlf218ujhj9vdchhaj7h5&st=xw3cx6xf&raw=1" alt="Ảnh 1">
</div>
        <div class="caption">UnicaBookstore (Shortcut)</div>
      </div>
          
</div>

`;

// Thêm vào DOM
document.body.appendChild(container);

// Định nghĩa style h2
const style = document.createElement('style');
style.textContent = `
  h2 {
    font-family: 'Great Vibes', cursive;
    font-weight: bold;
    color: white;
    animation: greenPulse 7s infinite;
    text-shadow:
      0 0 6px #006400,
      0 0 12px #228B22,
      1px 1px 4px rgba(0,0,0,0.3);
  }

@keyframes greenPulse {
  0% {
    text-shadow: 0 0 5px #7CFC00, 0 0 10px #32CD32, 0 0 20px #228B22;   /* Màu nhấp chớp của Music Station */
    opacity: 1;
  }
  50% {
    text-shadow: 0 0 2px #006400, 0 0 4px #013220;
    opacity: 0.5;
  }
  100% {
    text-shadow: 0 0 5px #7CFC00, 0 0 10px #32CD32, 0 0 20px #228B22;
    opacity: 1;
  }
}
`;

document.head.appendChild(style);

// 👉 Sau khi thêm vào DOM, gọi lại applyColor
const glassElements = document.querySelectorAll(".glass-bg");
const color = colors[0]; // hoặc dùng biến colorIndex nếu có

glassElements.forEach(el => {
  el.style.backgroundColor = color;
});

// Gọi lại sau khi DOM đã có .glass-bg
applyColor(colorIndex);
